import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Analytics } from "@vercel/analytics/react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { LuArrowUp, LuCalendarCheck, LuClock, LuMail, LuMapPin, LuMenu, LuPhone, LuX } from "react-icons/lu";
import { LANGUAGES, restoreLanguage, setLanguage } from "../i18n";
import { SITE } from "../data/site";
import { Wave } from "./ui";

const NAV = [
  ["blog", "nav.news"],
  ["events", "nav.events"],
  ["department", "nav.activities"],
  ["pricing", "nav.wahana"],
  ["gallery", "nav.gallery"],
  ["pengurus", "nav.team"],
  ["lokasi", "nav.location"],
  ["contact", "nav.contact"],
];

const SOCIAL = [
  [SITE.social.facebook, "Facebook", FaFacebookF],
  [SITE.social.instagram, "Instagram", FaInstagram],
  [SITE.social.tiktok, "TikTok", FaTiktok],
];

const external = { target: "_blank", rel: "noopener noreferrer" };

function useActiveSection(enabled) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        // Saat bagian aktif keluar tanpa pengganti (mis. kembali ke hero), sorotan dilepas.
        setActive((current) => {
          if (hit) return hit.target.id;
          return entries.some((entry) => entry.target.id === current) ? null : current;
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [enabled]);

  return active;
}

function TopBar() {
  const { t } = useTranslation();
  return (
    <div className="hidden bg-sea-deep text-sm text-white/85 lg:block">
      <div className="wrap flex min-h-10 items-center justify-between gap-6">
        <p className="flex items-center gap-2">
          <LuClock aria-hidden="true" /> {t("contact.hoursValue")}
        </p>
        <div className="flex items-center gap-6">
          <a href={`tel:${SITE.phoneE164}`} className="flex items-center gap-2 no-underline hover:text-sun">
            <LuPhone aria-hidden="true" /> {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 no-underline hover:text-sun">
            <LuMail aria-hidden="true" /> {SITE.email}
          </a>
          <ul className="flex items-center gap-3">
            {SOCIAL.map(([href, label, Icon]) => (
              <li key={label}>
                <a href={href} {...external} aria-label={label} className="block p-1 hover:text-sun">
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(location.pathname === "/");

  useEffect(() => setOpen(false), [location.key]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-sand/95 shadow-[0_1px_0_rgb(10_42_51/0.12)] backdrop-blur">
      <div className="wrap flex min-h-[4.5rem] items-center justify-between gap-4">
        <Link to="/" aria-label={t("nav.home")}>
          <img src="/images/logo.png" alt="" width="160" height="50" className="h-12 w-auto" />
        </Link>

        <nav
          id="primary-nav"
          aria-label={t("nav.primary")}
          className={`${open ? "block" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-sand shadow-card xl:static xl:block xl:overflow-visible xl:bg-transparent xl:shadow-none`}
        >
          <ul className="wrap pt-2 pb-5 xl:flex xl:w-auto xl:gap-6 xl:p-0">
            {NAV.map(([id, label]) => (
              <li key={id}>
                <Link
                  to={`/#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`block border-b border-ink/15 py-3.5 font-display text-xl font-semibold no-underline transition-colors xl:border-b-2 xl:py-1 xl:font-sans xl:text-[0.9375rem] ${
                    active === id ? "text-sea xl:border-sun" : "hover:text-sea xl:border-transparent"
                  }`}
                >
                  {t(label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <div role="group" aria-label={t("nav.language")} className="flex rounded-full bg-sand-2 p-[3px]">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                type="button"
                aria-pressed={i18n.language === lang}
                onClick={() => setLanguage(lang)}
                className="min-h-[38px] min-w-[38px] rounded-full text-[0.8125rem] font-bold aria-pressed:bg-sea aria-pressed:text-white"
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <Link to="/#contact" className="btn btn-sun btn-sm hidden sm:inline-flex">
            {t("nav.reserve")}
          </Link>
          <button
            type="button"
            className="icon-btn xl:hidden"
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
  const links = [...NAV, ["about", "nav.about"]];

  return (
    <footer className="bg-sand-2">
      <Wave className="text-sea-deep" />
      <div className="-mt-px bg-sea-deep pt-10 pb-20 text-white/85 lg:pb-0">
        <div className="wrap grid gap-10 md:grid-cols-[1.2fr_1fr_1.2fr] md:gap-14">
          <div>
            <span className="inline-block rounded-xl bg-sand px-4 py-2.5">
              <img src="/images/footer-logo.png" alt="Pantai Kelapa Tuban" loading="lazy" className="h-12 w-auto" />
            </span>
            <p className="mt-5 max-w-[34ch]">{t("footer.tagline")}</p>
            <ul className="mt-5 flex gap-2.5">
              {SOCIAL.map(([href, label, Icon]) => (
                <li key={label}>
                  <a
                    href={href}
                    {...external}
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full text-white ring-1 ring-white/25 transition hover:bg-sun hover:text-ink"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3.5 text-lg text-white">{t("footer.explore")}</h2>
            <ul className="grid grid-cols-2">
              {links.map(([id, label]) => (
                <li key={id}>
                  <Link to={`/#${id}`} className="block py-2 no-underline hover:text-sun">
                    {t(label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3.5 text-lg text-white">{t("footer.contact")}</h2>
            <ul className="space-y-4">
              <li>
                <a href={SITE.mapsLink} {...external} className="no-underline hover:text-sun">
                  {SITE.address}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="no-underline hover:text-sun">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneE164}`} className="no-underline hover:text-sun">
                  {SITE.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap mt-12 border-t border-white/20 py-5 text-sm">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}

function ScrollTop() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      data-scroll-top
      aria-label={t("nav.top")}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0 })}
      className={`fixed right-4 bottom-[calc(5rem+env(safe-area-inset-bottom))] z-40 grid size-12 place-items-center rounded-full bg-sea text-[1.375rem] text-white shadow-lift transition duration-200 hover:bg-sea-deep lg:right-5 lg:bottom-24 ${
        visible ? "visible opacity-100" : "invisible translate-y-2.5 opacity-0"
      }`}
    >
      <LuArrowUp aria-hidden="true" />
    </button>
  );
}

function MobileActions() {
  const { t } = useTranslation();
  const item = "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-xs font-bold no-underline";
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_18px_rgb(7_50_60/0.14)] lg:hidden">
      <a href={SITE.whatsapp} {...external} className={`${item} text-[#0d7a40]`}>
        <FaWhatsapp aria-hidden="true" className="text-[1.375rem]" /> {t("nav.chat")}
      </a>
      <Link to="/#lokasi" className={`${item} text-sea`}>
        <LuMapPin aria-hidden="true" className="text-[1.375rem]" /> {t("nav.maps")}
      </Link>
      <Link to="/#contact" className={`${item} bg-sun text-ink`}>
        <LuCalendarCheck aria-hidden="true" className="text-[1.375rem]" /> {t("nav.reserve")}
      </Link>
    </div>
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
      <a
        href="#main"
        className="fixed top-2 left-2 z-[100] -translate-y-[200%] rounded-xl bg-ink px-4 py-2.5 text-white focus:translate-y-0"
      >
        {t("nav.skip")}
      </a>
      <TopBar />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
      <a
        href={SITE.whatsapp}
        {...external}
        aria-label={t("nav.whatsapp")}
        className="fixed right-4 bottom-4 z-40 hidden size-14 place-items-center rounded-full bg-[#128c4b] text-[1.75rem] text-white shadow-lift transition hover:scale-110 lg:grid"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
      <MobileActions />
      <Analytics />
    </>
  );
}
