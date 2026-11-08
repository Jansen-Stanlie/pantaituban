import { Children, cloneElement, useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect tidak boleh berjalan saat prerender.
const useClientLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

const COPIES_EACH_SIDE = 2;
const AUTO_SPEED_PX_PER_SEC = 28;
const DRAG_THRESHOLD_PX = 5;
const TOUCH_RESUME_MS = 2500;

/**
 * Deretan kartu tanpa ujung: berjalan sendiri, bisa digeser dengan sentuhan,
 * trackpad, atau seret mouse. Salinan kartu hanya dibuat di browser agar HTML
 * untuk mesin pencari tetap berisi satu set konten.
 */
export default function Rail({ label, children }) {
  const track = useRef(null);
  const [looping, setLooping] = useState(false);
  const [dragging, setDragging] = useState(false);
  const count = Children.count(children);

  // Nilai yang berubah tiap frame disimpan di ref agar tidak memicu render.
  const position = useRef(0);
  const drag = useRef(null);
  const holds = useRef(new Set());
  const suppressClick = useRef(false);
  const touchTimer = useRef(null);

  const period = () => {
    const items = track.current.children;
    return items[count] ? items[count].offsetLeft - items[0].offsetLeft : 0;
  };

  const shift = (delta) => {
    track.current.scrollLeft += delta;
    position.current += delta;
    if (drag.current) drag.current.startLeft += delta;
  };

  const keepInLoop = () => {
    const length = period();
    if (!length) return;
    // Saat disentuh batasnya dilonggarkan supaya momentum geser tidak terputus.
    const reach = holds.current.has("touch") ? 1.5 : 0.5;
    const left = track.current.scrollLeft;
    if (left < (COPIES_EACH_SIDE - reach) * length) shift(length);
    else if (left >= (COPIES_EACH_SIDE + reach) * length) shift(-length);
  };

  useEffect(() => setLooping(true), []);

  useClientLayoutEffect(() => {
    if (!looping) return;
    const el = track.current;
    el.querySelectorAll("[data-clone] a, [data-clone] button").forEach((node) => {
      node.tabIndex = -1;
    });
    el.scrollLeft = COPIES_EACH_SIDE * period();
    position.current = el.scrollLeft;
  }, [looping]);

  useEffect(() => {
    if (!looping || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const el = track.current;
    let visible = false;
    let frame;
    let last = performance.now();

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(el);

    const tick = (now) => {
      const elapsed = Math.min(now - last, 64);
      last = now;
      if (visible && holds.current.size === 0 && !drag.current) {
        position.current += (AUTO_SPEED_PX_PER_SEC * elapsed) / 1000;
        el.scrollLeft = position.current;
        keepInLoop();
      } else {
        position.current = el.scrollLeft;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [looping]);

  useEffect(() => () => clearTimeout(touchTimer.current), []);

  const onPointerDown = (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    drag.current = { pointer: event.pointerId, startX: event.clientX, startLeft: track.current.scrollLeft, moved: false };
  };

  const onPointerMove = (event) => {
    const current = drag.current;
    if (!current) return;
    const distance = event.clientX - current.startX;
    if (!current.moved && Math.abs(distance) > DRAG_THRESHOLD_PX) {
      current.moved = true;
      track.current.setPointerCapture(current.pointer);
      setDragging(true);
    }
    if (current.moved) track.current.scrollLeft = current.startLeft - distance;
  };

  const endDrag = () => {
    if (drag.current?.moved) {
      suppressClick.current = true;
      setTimeout(() => {
        suppressClick.current = false;
      }, 0);
    }
    drag.current = null;
    setDragging(false);
  };

  const copies = (prefix) =>
    Children.map(children, (child, i) =>
      cloneElement(child, { key: `${prefix}-${i}`, "aria-hidden": true, "data-clone": "" })
    );
  const side = (name) => Array.from({ length: COPIES_EACH_SIDE }, (_, n) => copies(`${name}${n}`));

  return (
    <div
      ref={track}
      role="group"
      aria-label={label}
      tabIndex={0}
      onScroll={looping ? keepInLoop : undefined}
      onPointerEnter={(e) => e.pointerType === "mouse" && holds.current.add("hover")}
      onPointerLeave={(e) => e.pointerType === "mouse" && holds.current.delete("hover")}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={(e) => {
        if (suppressClick.current) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      onDragStart={(e) => e.preventDefault()}
      onFocus={(e) => e.target.matches(":focus-visible") && holds.current.add("focus")}
      onBlur={() => holds.current.delete("focus")}
      onTouchStart={() => {
        clearTimeout(touchTimer.current);
        holds.current.add("touch");
      }}
      onTouchEnd={() => {
        touchTimer.current = setTimeout(() => holds.current.delete("touch"), TOUCH_RESUME_MS);
      }}
      className={`no-scrollbar flex gap-5 overflow-x-auto overscroll-x-contain px-5 pt-2 pb-8 select-none ${
        dragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      {looping && side("before")}
      {children}
      {looping && side("after")}
    </div>
  );
}
