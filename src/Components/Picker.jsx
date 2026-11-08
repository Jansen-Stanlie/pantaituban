import { useEffect, useId, useRef, useState } from "react";
import { LuCheck, LuChevronDown, LuX } from "react-icons/lu";

const SHEET_QUERY = "(max-width: 639px)";
const PANEL_SPACE = 300;

/**
 * Pengganti <select>: panel bawah di HP, dropdown berbatas tinggi di desktop.
 * Input tersembunyi menjaga validasi `required` dan nilai FormData.
 */
export default function Picker({ name, label, placeholder, closeLabel, options, value, onChange, required }) {
  const id = useId();
  const root = useRef(null);
  const trigger = useRef(null);
  const list = useRef(null);
  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const selected = options.find((option) => option.value === value);

  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };

  const show = () => {
    const rect = trigger.current.getBoundingClientRect();
    setDropUp(window.innerHeight - rect.bottom < PANEL_SPACE && rect.top > PANEL_SPACE);
    setOpen(true);
  };

  const choose = (next) => {
    onChange(next);
    close();
  };

  useEffect(() => {
    if (!open) return undefined;

    const current = list.current.querySelector('[aria-selected="true"]') ?? list.current.firstElementChild;
    current.focus({ preventScroll: true });
    list.current.scrollTop = current.offsetTop - list.current.clientHeight / 2;

    const onPointerDown = (event) => {
      if (!root.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);

    const isSheet = window.matchMedia(SHEET_QUERY).matches;
    if (isSheet) document.documentElement.classList.add("no-scroll");

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      if (isSheet) document.documentElement.classList.remove("no-scroll");
    };
  }, [open]);

  const onTriggerKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      show();
    }
  };

  const onListKeyDown = (event) => {
    const items = [...list.current.children];
    const index = items.indexOf(document.activeElement);
    const focusAt = (i) => items[Math.min(Math.max(i, 0), items.length - 1)].focus();
    const actions = {
      ArrowDown: () => focusAt(index + 1),
      ArrowUp: () => focusAt(index - 1),
      Home: () => focusAt(0),
      End: () => focusAt(items.length - 1),
      Enter: () => index >= 0 && choose(items[index].dataset.value),
      " ": () => index >= 0 && choose(items[index].dataset.value),
      Escape: close,
      Tab: close,
    };
    if (actions[event.key]) {
      event.preventDefault();
      actions[event.key]();
    }
  };

  return (
    <div className="grid min-w-0 gap-1.5" ref={root}>
      <span id={`${id}-label`} className="text-[0.9375rem] font-semibold">
        {label}
      </span>
      <div className="relative">
        <button
          ref={trigger}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${id}-label ${id}-value`}
          onClick={() => (open ? close() : show())}
          onKeyDown={onTriggerKeyDown}
          className={`field flex items-center justify-between gap-2.5 text-left aria-expanded:border-teal aria-expanded:ring-2 aria-expanded:ring-teal/40 ${
            selected ? "" : "text-muted"
          }`}
        >
          <span id={`${id}-value`}>{selected?.label ?? placeholder}</span>
          <LuChevronDown aria-hidden="true" className={`shrink-0 text-lg transition ${open ? "rotate-180" : ""}`} />
        </button>
        <input
          name={name}
          value={selected?.label ?? ""}
          required={required}
          onChange={() => {}}
          tabIndex={-1}
          aria-hidden="true"
          autoComplete="off"
          className="pointer-events-none absolute bottom-0 left-6 size-px border-0 p-0 opacity-0"
        />
        {open && (
          <>
            <div onClick={close} className="animate-fade fixed inset-0 z-[69] bg-sea-deep/55 sm:hidden" />
            <div
              className={`absolute inset-x-0 z-30 overflow-hidden rounded-xl bg-white shadow-lift ring-1 ring-ink/10 ${
                dropUp ? "bottom-[calc(100%+6px)]" : "top-[calc(100%+6px)]"
              } max-sm:animate-rise max-sm:fixed max-sm:top-auto max-sm:bottom-0 max-sm:z-[70] max-sm:flex max-sm:max-h-[min(72dvh,560px)] max-sm:flex-col max-sm:rounded-t-2xl max-sm:rounded-b-none`}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-ink/15 py-3 pr-3 pl-5 text-[1.0625rem] sm:hidden">
                <strong>{label}</strong>
                <button type="button" className="icon-btn" onClick={close} aria-label={closeLabel}>
                  <LuX aria-hidden="true" />
                </button>
              </div>
              <ul
                ref={list}
                role="listbox"
                aria-labelledby={`${id}-label`}
                onKeyDown={onListKeyDown}
                className="relative max-h-72 overflow-y-auto overscroll-contain p-1.5 [scrollbar-width:thin] max-sm:max-h-none max-sm:min-h-0 max-sm:flex-1 max-sm:p-2 max-sm:pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
              >
                {options.map((option) => (
                  <li
                    key={option.value}
                    role="option"
                    tabIndex={-1}
                    aria-selected={option.value === value}
                    data-value={option.value}
                    onClick={() => choose(option.value)}
                    className="flex min-h-11 cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 outline-none hover:bg-foam focus:bg-foam aria-selected:font-bold aria-selected:text-sea max-sm:min-h-[3.25rem] max-sm:px-3.5 max-sm:text-[1.0625rem]"
                  >
                    {option.label}
                    {option.value === value && <LuCheck aria-hidden="true" className="shrink-0 text-lg" />}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
