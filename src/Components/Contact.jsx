import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { PACKAGE_KEYS } from "../data/content";
import { SITE } from "../data/site";

export default function Contact() {
  const { t } = useTranslation();
  const dateInput = useRef(null);
  const packageSelect = useRef(null);
  const { state, key: locationKey } = useLocation();
  const requestedPackage = state?.pkg;

  // Tombol wahana dan aktivitas mengirim paket pilihan lewat state navigasi.
  useEffect(() => {
    if (requestedPackage) packageSelect.current.value = t(requestedPackage);
  }, [requestedPackage, locationKey, t]);

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
  };

  const details = [
    [LuPhone, t("contact.phone"), SITE.phoneDisplay, `tel:${SITE.phoneE164}`],
    [LuMail, t("contact.email"), SITE.email, `mailto:${SITE.email}`],
    [LuMapPin, t("contact.address"), SITE.address, SITE.mapsLink],
    [LuClock, t("contact.hours"), t("contact.hoursValue"), null],
  ];

  return (
    <section id="contact" className="section contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <p className="eyebrow">{t("contact.eyebrow")}</p>
          <h2>{t("contact.title")}</h2>
          <p className="lead">{t("contact.lead")}</p>
          <ul>
            {details.map(([Icon, label, value, href]) => (
              <li key={label}>
                <Icon aria-hidden="true" />
                <div>
                  <span>{label}</span>
                  {href ? (
                    <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
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

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            {t("contact.name")}
            <input name="name" type="text" required maxLength={80} autoComplete="name" />
          </label>
          <label>
            {t("contact.origin")}
            <input name="origin" type="text" maxLength={80} autoComplete="address-level2" />
          </label>
          <label>
            {t("contact.phoneField")}
            <input name="phone" type="tel" required maxLength={20} pattern="[0-9+\(\) \-]{8,20}" autoComplete="tel" inputMode="tel" />
          </label>
          <label>
            {t("contact.package")}
            <select ref={packageSelect} name="package" required defaultValue="">
              <option value="" disabled>
                {t("contact.packagePick")}
              </option>
              {PACKAGE_KEYS.map((key) => (
                <option key={key} value={t(key)}>
                  {t(key)}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t("contact.date")}
            <input ref={dateInput} name="date" type="date" />
          </label>
          <label>
            {t("contact.visitors")}
            <input name="visitors" type="number" min="1" max="5000" inputMode="numeric" />
          </label>
          <label className="is-wide">
            {t("contact.message")}
            <textarea name="message" rows={4} required maxLength={1000} />
          </label>
          <button type="submit" className="btn btn-sea is-wide">
            <FaWhatsapp aria-hidden="true" /> {t("contact.submit")}
          </button>
        </form>
      </div>
      <div className="map">
        <iframe
          title={t("contact.mapTitle")}
          src={SITE.mapsEmbed}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
