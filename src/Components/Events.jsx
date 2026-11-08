import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa6";
import { LuCalendarDays, LuCalendarPlus, LuChevronLeft, LuChevronRight, LuMapPin } from "react-icons/lu";
import { SITE } from "../data/site";
import { fetchEvents, formatDate, useRemote } from "../lib/api";
import { SectionHead, Wave } from "./ui";

const dayKey = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();

function occursOn(event, date) {
  const key = dayKey(date);
  return key >= dayKey(event.start) && key <= dayKey(event.end);
}

function EventCalendar({ events }) {
  const { t, i18n } = useTranslation();
  // Bulan ditentukan setelah hydration agar tidak berbeda dari HTML prerender.
  const [month, setMonth] = useState(null);
  const [selected, setSelected] = useState(null);
  const [today, setToday] = useState(0);
  const lang = i18n.language === "en" ? "en-GB" : "id-ID";
  const firstStart = events[0]?.start.getTime();

  useEffect(() => {
    const now = new Date();
    setToday(dayKey(now));
    const base = firstStart ? new Date(firstStart) : now;
    setMonth(new Date(base.getFullYear(), base.getMonth(), 1));
  }, [firstStart]);

  const weekdays = useMemo(
    // 1 Januari 2024 jatuh pada hari Senin.
    () => Array.from({ length: 7 }, (_, i) => new Date(2024, 0, i + 1).toLocaleDateString(lang, { weekday: "short" })),
    [lang]
  );

  const card = "self-start rounded-3xl bg-sand p-4 text-ink shadow-lift md:p-7";

  if (!month) return <div className={`${card} min-h-[460px]`} aria-hidden="true" />;

  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const leading = (month.getDay() + 6) % 7;
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();
  const days = Array.from({ length: totalDays }, (_, i) => new Date(year, monthIndex, i + 1));
  const change = (delta) => {
    setSelected(null);
    setMonth(new Date(year, monthIndex + delta, 1));
  };
  const selectedEvents = selected ? events.filter((e) => occursOn(e, selected)) : [];

  return (
    <div className={card}>
      <div className="mb-3.5 flex items-center justify-between gap-3">
        <h3 aria-live="polite" className="text-2xl capitalize">
          {month.toLocaleDateString(lang, { month: "long", year: "numeric" })}
        </h3>
        <div className="flex gap-1.5">
          <button type="button" className="icon-btn" onClick={() => change(-1)} aria-label={t("events.prevMonth")}>
            <LuChevronLeft aria-hidden="true" />
          </button>
          <button type="button" className="icon-btn" onClick={() => change(1)} aria-label={t("events.nextMonth")}>
            <LuChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1" aria-label={t("events.calendar")}>
        {weekdays.map((d) => (
          <span key={d} className="py-1.5 text-center text-xs font-bold text-muted">
            {d}
          </span>
        ))}
        {Array.from({ length: leading }, (_, i) => (
          <span key={`blank-${i}`} />
        ))}
        {days.map((date) => {
          const hasEvent = events.some((e) => occursOn(e, date));
          const isToday = dayKey(date) === today;
          const isSelected = selected && dayKey(selected) === dayKey(date);
          const base = "grid aspect-square min-h-10 place-items-center rounded-[10px] text-[0.9375rem]";
          const ring = isToday ? "ring-2 ring-teal ring-inset" : "";
          if (!hasEvent) {
            return (
              <span key={date.getDate()} className={`${base} ${ring}`}>
                {date.getDate()}
              </span>
            );
          }
          return (
            <button
              key={date.getDate()}
              type="button"
              data-event-day
              aria-pressed={Boolean(isSelected)}
              aria-label={formatDate(date, i18n.language)}
              onClick={() => setSelected(date)}
              className={`${base} ${ring} font-bold transition ${
                isSelected ? "bg-sea text-white" : "bg-sun hover:bg-sea hover:text-white"
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
      <div data-calendar-detail aria-live="polite" className="mt-4 min-h-14 border-t border-ink/15 pt-3.5 text-[0.9375rem] text-muted">
        {selectedEvents.length > 0 ? (
          <ul className="space-y-2">
            {selectedEvents.map((e) => (
              <li key={e.id}>
                <strong className="block text-ink">{e.title}</strong>
                {e.location}
              </li>
            ))}
          </ul>
        ) : (
          <p>{events.length > 0 ? t("events.pickDay") : t("events.noEvents")}</p>
        )}
      </div>
    </div>
  );
}

const NO_EVENTS = [];
const external = { target: "_blank", rel: "noopener noreferrer" };
const actionClass = "inline-flex items-center gap-1.5 text-white no-underline hover:text-sun";

const compactDate = (d) =>
  `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;

/** Tautan acara sehari penuh; tanggal akhir Google Calendar bersifat eksklusif. */
function googleCalendarUrl(event) {
  const endExclusive = new Date(event.end.getFullYear(), event.end.getMonth(), event.end.getDate() + 1);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${compactDate(event.start)}/${compactDate(endExclusive)}`,
    details: event.description,
    location: event.location || SITE.name,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

function EventCard({ event }) {
  const { t, i18n } = useTranslation();
  const style = event.color ? { backgroundColor: event.color } : undefined;
  const shareText = `${event.title}, ${formatDate(event.start, i18n.language)} di Pantai Kelapa Tuban. ${SITE.url}/#events`;
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  return (
    <li className="flex gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 transition hover:bg-white/15 md:p-5">
      <div style={style} className="flex w-16 shrink-0 flex-col items-center justify-center self-start rounded-xl bg-sun py-2.5 text-ink [&[style]]:text-white">
        <span className="font-display text-3xl leading-none font-bold">{event.start.getDate()}</span>
        <span className="mt-1 text-xs font-bold uppercase">{formatDate(event.start, i18n.language, { month: "short" })}</span>
      </div>
      <div className="min-w-0">
        <span className="text-[0.8125rem] font-bold text-sun">{event.category || t("events.fallbackCategory")}</span>
        <h3 className="mt-0.5 text-xl">{event.title}</h3>
        {event.description && <p className="mt-1.5 text-white/80">{event.description}</p>}
        {event.location && (
          <p className="mt-2 flex items-center gap-1.5 text-[0.9375rem] text-white/80">
            <LuMapPin aria-hidden="true" className="shrink-0" /> {event.location}
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem] font-semibold">
          <a href={googleCalendarUrl(event)} {...external} className={actionClass}>
            <LuCalendarPlus aria-hidden="true" /> {t("events.addCalendar")}
          </a>
          <a href={shareUrl} {...external} className={actionClass}>
            <FaWhatsapp aria-hidden="true" /> {t("events.share")}
          </a>
        </div>
      </div>
    </li>
  );
}

export default function Events() {
  const { t } = useTranslation();
  const events = useRemote(fetchEvents, NO_EVENTS);
  const next = events.slice(0, 3);

  return (
    <section id="events" className="scroll-mt-4 bg-sand">
      <Wave className="text-sea-deep" />
      <div className="-mt-px bg-sea-deep py-12 text-white md:py-16">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead light title={t("events.title")} lead={t("events.lead")} />
            {next.length === 0 ? (
              <div className="flex gap-4 rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
                <LuCalendarDays aria-hidden="true" className="mt-1 shrink-0 text-3xl text-sun" />
                <div>
                  <h3 className="text-xl">{t("events.emptyTitle")}</h3>
                  <p className="mt-1.5 text-white/80">{t("events.emptyText")}</p>
                </div>
              </div>
            ) : (
              <ul data-event-list className="grid gap-3">
                {next.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </ul>
            )}
          </div>
          <EventCalendar events={events} />
        </div>
      </div>
      <Wave flip className="-mt-px text-sea-deep" />
    </section>
  );
}
