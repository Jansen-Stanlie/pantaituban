import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Analytics } from "@vercel/analytics/react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { LuMenu, LuX } from "react-icons/lu";
import { LANGUAGES, restoreLanguage, setLanguage } from "../i18n";
import { SITE } from "../data/site";

const NAV = [
  ["department", "nav.activities"],
  ["about", "nav.about"],
  ["events", "nav.events"],
  ["pricing", "nav.wahana"],
  ["gallery", "nav.gallery"],
  ["blog", "nav.news"],
  ["contact", "nav.contact"],
];

function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [location.key]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <Link to="/" className="brand" aria-label={t("nav.home")}>
          <img src="/images/logo.png" alt="" width="160" height="50" />
        </Link>

        <nav id="primary-nav" className={`primary-nav${open ? " is-open" : ""}`} aria-label={t("nav.primary")}>
          <ul>
            {NAV.map(([id, label]) => (
              <li key={id}>
                <Link to={`/#${id}`}>{t(label)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label={t("nav.language")}>
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                type="button"
                aria-pressed={i18n.language === lang}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <Link to="/#contact" className="btn btn-sun btn-sm header-cta">
            {t("nav.reserve")}
          </Link>
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const { t } = useTranslation();
  const social = [
    [SITE.social.facebook, "Facebook", FaFacebookF],
    [SITE.social.instagram, "Instagram", FaInstagram],
    [SITE.social.tiktok, "TikTok", FaTiktok],
  ];
  const links = [...NAV, ["pengurus", "nav.team"]];

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <span className="footer-logo">
            <img src="/images/footer-logo.png" alt="Pantai Kelapa Tuban" loading="lazy" />
          </span>
          <p className="footer-tagline">{t("footer.tagline")}</p>
          <ul className="social">
            {social.map(([href, label, Icon]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">{t("footer.explore")}</h2>
          <ul className="footer-links">
            {links.map(([id, label]) => (
              <li key={id}>
                <Link to={`/#${id}`}>{t(label)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">{t("footer.contact")}</h2>
          <ul className="footer-contact">
            <li>
              <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">
                {SITE.address}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        © {new Date().getFullYear()} {t("footer.copyright")}
      </div>
    </footer>
  );
}

export default function Layout() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    restoreLanguage();
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <a href="#main" className="skip-link">
        {t("nav.skip")}
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <a
        className="wa-float"
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("nav.whatsapp")}
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
      <Analytics />
    </>
  );
}
