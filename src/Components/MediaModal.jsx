import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";

const YOUTUBE_HOSTS = new Set(["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be", "www.youtube-nocookie.com"]);

function youtubeEmbed(input) {
  try {
    const url = new URL(input);
    if (!YOUTUBE_HOSTS.has(url.hostname)) return null;
    const id =
      url.hostname === "youtu.be"
        ? url.pathname.split("/")[1]
        : url.searchParams.get("v") || url.pathname.split("/embed/")[1]?.split("/")[0];
    if (!/^[\w-]{6,20}$/.test(id ?? "")) return null;
    return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0`;
  } catch {
    return null;
  }
}

const wrap = (i, length) => ((i % length) + length) % length;

export default function MediaModal({ open, items, index, onIndex, onClose, label }) {
  const { t } = useTranslation();
  const dialog = useRef(null);
  const touchStart = useRef(null);
  const [failedUrl, setFailedUrl] = useState(null);

  useEffect(() => {
    const el = dialog.current;
    if (!open || !el) return undefined;
    el.showModal();
    document.documentElement.classList.add("no-scroll");
    return () => {
      el.close();
      document.documentElement.classList.remove("no-scroll");
    };
  }, [open]);

  if (!open || items.length === 0) return null;

  const position = wrap(index, items.length);
  const item = items[position];
  const hasMany = items.length > 1;
  const go = (delta) => onIndex(wrap(position + delta, items.length));
  const embed = item.type === "VIDEO" ? youtubeEmbed(item.url) : null;

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft" && hasMany) go(-1);
    if (e.key === "ArrowRight" && hasMany) go(1);
  };
  const onTouchEnd = (e) => {
    const start = touchStart.current;
    const end = e.changedTouches[0];
    touchStart.current = null;
    if (!start || !end || !hasMany) return;
    const dx = end.clientX - start.x;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(end.clientY - start.y)) go(dx > 0 ? -1 : 1);
  };

  let content;
  if (item.type === "VIDEO") {
    content = embed ? (
      <iframe
        key={item.url}
        className="modal-video"
        src={embed}
        title={item.title || "Video"}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    ) : (
      <p className="modal-error">{t("media.invalidVideo")}</p>
    );
  } else if (failedUrl === item.url) {
    content = <p className="modal-error">{t("media.imageError")}</p>;
  } else {
    content = (
      <img
        key={item.url}
        className="modal-img"
        src={item.url}
        alt={item.title || ""}
        onError={() => setFailedUrl(item.url)}
      />
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialog}
      className="modal"
      aria-label={label || t("media.dialog")}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => e.target === dialog.current && onClose()}
      onKeyDown={onKeyDown}
      onTouchStart={(e) => {
        const touch = e.touches[0];
        touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
      }}
      onTouchEnd={onTouchEnd}
    >
      <div className="modal-stage">
        {content}
        <button type="button" className="modal-btn modal-close" onClick={onClose} aria-label={t("media.close")}>
          <LuX aria-hidden="true" />
        </button>
        {hasMany && (
          <>
            <span className="modal-count">
              {position + 1} / {items.length}
            </span>
            <button type="button" className="modal-btn modal-prev" onClick={() => go(-1)} aria-label={t("media.prev")}>
              <LuChevronLeft aria-hidden="true" />
            </button>
            <button type="button" className="modal-btn modal-next" onClick={() => go(1)} aria-label={t("media.next")}>
              <LuChevronRight aria-hidden="true" />
            </button>
          </>
        )}
      </div>
    </dialog>
  );
}
