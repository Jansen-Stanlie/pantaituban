import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuCalendarDays, LuChevronLeft, LuChevronRight, LuMapPin } from "react-icons/lu";
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

  if (!month) return <div className="calendar is-loading" aria-hidden="true" />;

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
    <div className="calendar">
      <div className="calendar-top">
        <h3 aria-live="polite">{month.toLocaleDateString(lang, { month: "long", year: "numeric" })}</h3>
        <div>
          <button type="button" className="icon-btn" onClick={() => change(-1)} aria-label={t("events.prevMonth")}>
            <LuChevronLeft aria-hidden="true" />
          </button>
          <button type="button" className="icon-btn" onClick={() => change(1)} aria-label={t("events.nextMonth")}>
            <LuChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="calendar-grid" aria-label={t("events.calendar")}>
        {weekdays.map((d) => (
          <span key={d} className="calendar-weekday">
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
          const className = `calendar-day${isToday ? " is-today" : ""}${hasEvent ? " has-event" : ""}${isSelected ? " is-selected" : ""}`;
          return hasEvent ? (
            <button
              key={date.getDate()}
              type="button"
              className={className}
              aria-pressed={Boolean(isSelected)}
              aria-label={formatDate(date, i18n.language)}
              onClick={() => setSelected(date)}
            >
              {date.getDate()}
            </button>
          ) : (
            <span key={date.getDate()} className={className}>
              {date.getDate()}
            </span>
          );
        })}
      </div>
      <div className="calendar-detail" aria-live="polite">
        {selectedEvents.length > 0 ? (
          <ul>
            {selectedEvents.map((e) => (
              <li key={e.id}>
                <strong>{e.title}</strong>
                {e.location && <span>{e.location}</span>}
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

export default function Events() {
  const { t, i18n } = useTranslation();
  const events = useRemote(fetchEvents, NO_EVENTS);
  const next = events.slice(0, 3);

  return (
    <section id="events" className="events">
      <Wave />
      <div className="wrap events-in">
        <div>
          <SectionHead eyebrow={t("events.eyebrow")} title={t("events.title")} lead={t("events.lead")} />
          {next.length === 0 ? (
            <div className="event-card">
              <h3>{t("events.emptyTitle")}</h3>
              <p>{t("events.emptyText")}</p>
            </div>
          ) : (
            <ul className="event-list">
              {next.map((event) => (
                <li key={event.id} className="event-card" style={event.color ? { "--event": event.color } : undefined}>
                  <span className="event-tag">{event.category || t("events.fallbackCategory")}</span>
                  <h3>{event.title}</h3>
                  {event.description && <p>{event.description}</p>}
                  <p className="event-meta">
                    <span>
                      <LuCalendarDays aria-hidden="true" /> {formatDate(event.start, i18n.language)}
                    </span>
                    {event.location && (
                      <span>
                        <LuMapPin aria-hidden="true" /> {event.location}
                      </span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <EventCalendar events={events} />
      </div>
      <Wave flip />
    </section>
  );
}
