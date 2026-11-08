import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { PACKAGE_KEYS } from "../data/content";
import { SITE } from "../data/site";
import Picker from "./Picker";
import { SectionHead } from "./ui";

const labelClass = "grid min-w-0 gap-1.5 text-[0.9375rem] font-semibold";
const fieldClass = "field font-normal";

export default function Contact() {
  const { t } = useTranslation();
  const dateInput = useRef(null);
  const messageInput = useRef(null);
  const [packageKey, setPackageKey] = useState("");
  const { state, key: locationKey } = useLocation();
  const requestedPackage = state?.pkg;
  const requestedNote = state?.note;

  // Tombol wahana, aktivitas, dan kalkulator mengirim pilihan lewat state navigasi.
  useEffect(() => {
    if (requestedPackage) setPackageKey(requestedPackage);
    if (requestedNote) messageInput.current.value = requestedNote;
  }, [requestedPackage, requestedNote, locationKey]);

  useEffect(() => {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    dateInput.current.min = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      ["contact.msgName", "name"],
      ["contact.msgOrigin", "origin"],
      ["contact.msgPhone", "phone"],
      ["contact.msgPackage", "package"],
      ["contact.msgDate", "date"],
      ["contact.msgVisitors", "visitors"],
      ["contact.msgMessage", "message"],
    ]
      .filter(([, field]) => String(form.get(field) ?? "").trim())
      .map(([label, field]) => `${t(label)}: ${String(form.get(field)).trim()}`);

    // Dibuka langsung di dalam event klik agar tidak diblokir sebagai pop-up.
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    event.currentTarget.reset();
    setPackageKey("");
  };

  const details = [
    [LuPhone, t("contact.phone"), SITE.phoneDisplay, `tel:${SITE.phoneE164}`],
    [LuMail, t("contact.email"), SITE.email, `mailto:${SITE.email}`],
    [LuMapPin, t("contact.address"), SITE.address, SITE.mapsLink],
    [LuClock, t("contact.hours"), t("contact.hoursValue"), null],
  ];

  return (
    <section id="contact" className="section bg-sand-2">
      <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <div>
          <SectionHead title={t("contact.title")} lead={t("contact.lead")} className="!mb-7" />
          <ul>
            {details.map(([Icon, label, value, href]) => (
              <li key={label} className="flex gap-3.5 border-t border-ink/15 py-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-sea">
                  <Icon aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <span className="block text-sm text-muted">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      className="font-bold no-underline hover:text-sea"
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {value}
                    </a>
                  ) : (
                    <strong>{value}</strong>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="grid content-start gap-4 rounded-3xl bg-white p-5 shadow-card sm:grid-cols-2 md:p-9">
          <label className={labelClass}>
            {t("contact.name")}
            <input className={fieldClass} name="name" type="text" required maxLength={80} autoComplete="name" />
          </label>
          <label className={labelClass}>
            {t("contact.origin")}
            <input className={fieldClass} name="origin" type="text" maxLength={80} autoComplete="address-level2" />
          </label>
          <label className={labelClass}>
            {t("contact.phoneField")}
            <input
              className={fieldClass}
              name="phone"
              type="tel"
              required
              maxLength={20}
              pattern="[0-9+\(\) \-]{8,20}"
              autoComplete="tel"
              inputMode="tel"
            />
          </label>
          <Picker
            name="package"
            required
            label={t("contact.package")}
            placeholder={t("contact.packagePick")}
            closeLabel={t("media.close")}
            options={PACKAGE_KEYS.map((key) => ({ value: key, label: t(key) }))}
            value={packageKey}
            onChange={setPackageKey}
          />
          <label className={labelClass}>
            {t("contact.date")}
            <input ref={dateInput} className={fieldClass} name="date" type="date" />
          </label>
          <label className={labelClass}>
            {t("contact.visitors")}
            <input className={fieldClass} name="visitors" type="number" min="1" max="5000" inputMode="numeric" />
          </label>
          <label className={`${labelClass} sm:col-span-2`}>
            {t("contact.message")}
            <textarea
              ref={messageInput}
              className={`${fieldClass} resize-y`}
              name="message"
              rows={4}
              required
              maxLength={1000}
            />
          </label>
          <button type="submit" className="btn btn-sea sm:col-span-2">
            <FaWhatsapp aria-hidden="true" /> {t("contact.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
