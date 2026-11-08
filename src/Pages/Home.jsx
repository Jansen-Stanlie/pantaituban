import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  LuArrowRight,
  LuBadgePercent,
  LuCheck,
  LuClock,
  LuCloudSun,
  LuDownload,
  LuExternalLink,
  LuMapPin,
  LuNavigation,
  LuPause,
  LuPlay,
  LuPlus,
  LuQuote,
  LuSunset,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { COVER_SIZES, Img, NewsCard, SectionHead, SmartLink, Wave } from "../Components/ui";
import Rail from "../Components/Rail";
import MediaModal from "../Components/MediaModal";
import Events from "../Components/Events";
import Contact from "../Components/Contact";
import Planner from "../Components/Planner";
import {
  ABOUT_VIDEO,
  ACTIVITIES,
  activityLabelKey,
  FAQ_KEYS,
  GALLERY,
  GALLERY_CATEGORIES,
  TEAM,
  TESTIMONIALS,
  WAHANA,
  wahanaPackageKey,
} from "../data/content";
import { NEWS } from "../data/news";
import { SITE } from "../data/site";
import { fetchFeaturedMedia, fetchLatestPosts, fetchWeather, formatRupiah, useRemote } from "../lib/api";
import { preloaderDone } from "../lib/preloader";

const external = { target: "_blank", rel: "noopener noreferrer" };

const SLIDES = ["/images/hero-bg.jpg", "/images/perahu3.jpg", "/images/hero-bg3.jpg"];
const SLIDE_MS = 6000;

function useOpenNow() {
  const [open, setOpen] = useState(null);
  useEffect(() => {
    const hour = Number(
      new Intl.DateTimeFormat("en-GB", { hour: "numeric", hourCycle: "h23", timeZone: "Asia/Jakarta" }).format(new Date())
    );
    setOpen(hour >= 8 && hour < 17);
  }, []);
  return open;
}

function useWeather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    fetchWeather(controller.signal)
      .then(setWeather)
      .catch(() => {});
    return () => controller.abort();
  }, []);
  return weather;
}

const pillClass =
  "inline-flex min-h-8 items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold ring-1 ring-white/30 backdrop-blur";

function Hero() {
  const { t, i18n } = useTranslation();
  const [slide, setSlide] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isOpen = useOpenNow();
  const weather = useWeather();

  useEffect(() => {
    setMounted(true);
    setPlaying(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!playing) return undefined;
    const timer = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), SLIDE_MS);
    return () => clearInterval(timer);
  }, [playing]);

  return (
    <section id="home" className="relative isolate flex min-h-[min(calc(100svh-4.5rem),800px)] items-center overflow-hidden bg-sea-deep text-white">
      {SLIDES.map((src, i) =>
        i === 0 || mounted ? (
          <Img
            key={src}
            src={src}
            alt=""
            sizes={COVER_SIZES}
            priority={i === 0}
            className={`absolute inset-0 -z-20 size-full object-cover transition-[opacity,transform] ease-out [transition-duration:1200ms,7000ms] ${
              i === slide ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />
        ) : null
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sea-deep/85 via-sea-deep/45 to-sea-deep/5" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-sea-deep/70 to-transparent" />

      <div className="wrap pt-14 pb-36 md:pb-44">
        <div className="mb-5 flex min-h-[4.5rem] flex-wrap content-start gap-2 sm:min-h-8">
          <p className={pillClass}>
            <span
              aria-hidden="true"
              className={`size-2.5 rounded-full ${isOpen === null ? "bg-white/50" : isOpen ? "bg-[#46e08a]" : "bg-coral"}`}
            />
            {isOpen === null ? t("hero.hoursLabel") : isOpen ? t("hero.openNow") : t("hero.closedNow")} ·{" "}
            {t("hero.hoursValue")}
          </p>
          {weather && (
            <p data-weather aria-label={t("weather.label")} className={`${pillClass} animate-fade`}>
              <LuCloudSun aria-hidden="true" className="text-base" />
              {weather.temperature}°C · {t(`weather.${weather.condition}`)} · <LuSunset aria-hidden="true" className="text-base" />
              {t("weather.sunset")} {i18n.language === "en" ? weather.sunset : weather.sunset.replace(":", ".")}
            </p>
          )}
        </div>
        <h1 className="max-w-[9ch] text-[clamp(3.5rem,11vw,8rem)] leading-[0.92] tracking-[-0.035em]">{t("hero.title")}</h1>
        <p className="mt-5 mb-7 max-w-[48ch] text-[clamp(1.0625rem,1.6vw,1.25rem)] text-white/95">{t("hero.lead")}</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/#contact" className="btn btn-sun">
            {t("hero.plan")} <LuArrowRight aria-hidden="true" />
          </Link>
          <Link to="/post/gst" className="btn btn-ghost">
            {t("hero.salt")}
          </Link>
        </div>
      </div>

      <div className="absolute right-5 bottom-[clamp(5.5rem,10vw,9rem)] z-10 flex items-center gap-2.5 md:right-8">
        {SLIDES.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`${t("hero.slideGo")} ${i + 1}`}
            aria-current={i === slide ? "true" : undefined}
            onClick={() => setSlide(i)}
            className="flex h-8 items-center"
          >
            <span className={`block h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-sun" : "w-4 bg-white/60"}`} />
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? t("hero.slidePause") : t("hero.slidePlay")}
          className="grid size-8 place-items-center rounded-full bg-white/15 text-sm ring-1 ring-white/40"
        >
          {playing ? <LuPause aria-hidden="true" /> : <LuPlay aria-hidden="true" />}
        </button>
      </div>

      <Wave className="absolute inset-x-0 bottom-0 text-sand" />
    </section>
  );
}

function VisitTicket() {
  const { t } = useTranslation();
  const items = [
    [LuClock, t("hero.hoursLabel"), t("hero.hoursValue"), null],
    [LuBadgePercent, t("hero.priceLabel"), t("hero.priceValue"), "/#pricing"],
    [LuMapPin, t("hero.locationLabel"), t("hero.locationValue"), "/#lokasi"],
    [FaWhatsapp, t("hero.contactLabel"), t("hero.chat"), SITE.whatsapp],
  ];
  return (
    <div className="wrap relative z-10 -mt-14 md:-mt-20">
      <ul className="grid grid-cols-2 rounded-3xl bg-white shadow-lift lg:grid-cols-4">
        {items.map(([Icon, label, value, href], i) => (
          <li
            key={label}
            className={`flex items-center gap-3 p-4 md:p-6 ${i % 2 ? "border-l-2 border-dashed border-ink/15" : ""} ${
              i > 1 ? "border-t-2 border-dashed border-ink/15 lg:border-t-0" : ""
            } ${i === 2 ? "lg:border-l-2 lg:border-dashed" : ""}`}
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-foam text-xl text-sea max-sm:hidden">
              <Icon aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <span className="block text-[0.8125rem] leading-tight text-muted">{label}</span>
              {href ? (
                <SmartLink to={href} className="font-display text-lg leading-tight font-bold no-underline hover:text-sea">
                  {value}
                </SmartLink>
              ) : (
                <strong className="font-display text-lg leading-tight">{value}</strong>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const STATIC_NEWS = NEWS.slice(0, 3);

function News() {
  const { t } = useTranslation();
  const posts = useRemote(fetchLatestPosts, STATIC_NEWS);
  const [lead, ...rest] = posts;
  return (
    <section id="blog" className="section !pt-14 !pb-12">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-x-8">
          <SectionHead title={t("news.title")} />
          <Link to="/post/postrecap" className="text-link mb-9 md:mb-12">
            {t("news.more")} <LuArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-12">
          <div className={rest.length ? "lg:col-span-7" : "lg:col-span-12"}>
            <NewsCard post={lead} layout="feature" />
          </div>
          {rest.length > 0 && (
            <div className="grid gap-5 lg:col-span-5">
              {rest.map((post) => (
                <NewsCard key={post.title} post={post} layout="row" />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Activities() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const item = ACTIVITIES[active];
  const name = (key) => t(`activities.${key}.name`);
  return (
    <section id="department" className="section !pt-8 md:!pt-12">
      <div className="wrap">
        <SectionHead title={t("activities.title")} lead={t("activities.lead")} />
        <div className="grid min-w-0 gap-5 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          <ul className="no-scrollbar flex min-w-0 gap-2 overflow-x-auto pb-1.5 lg:flex-col lg:overflow-visible lg:pb-0">
            {ACTIVITIES.map(({ key, img }, i) => (
              <li key={key} className="shrink-0">
                <button
                  type="button"
                  data-activity
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                  className="flex w-full items-center gap-3 rounded-full bg-white p-1.5 pr-5 text-left font-bold whitespace-nowrap shadow-card transition hover:bg-foam aria-pressed:bg-sea aria-pressed:text-white lg:rounded-2xl lg:text-lg"
                >
                  <span className="size-10 shrink-0 overflow-hidden rounded-full lg:size-14 lg:rounded-xl">
                    <Img src={img} alt="" sizes="64px" className="size-full object-cover" />
                  </span>
                  {name(key)}
                </button>
              </li>
            ))}
          </ul>
          <figure key={item.key} className="animate-fade relative overflow-hidden rounded-3xl bg-sea-deep shadow-lift">
            <Img
              src={item.img}
              alt={name(item.key)}
              sizes="(max-width: 1024px) 100vw, 860px"
              className="aspect-[16/10] w-full object-cover lg:aspect-auto lg:h-[540px]"
            />
            <figcaption className="p-6 text-white lg:absolute lg:inset-x-0 lg:bottom-0 lg:bg-gradient-to-t lg:from-sea-deep/95 lg:to-transparent lg:px-9 lg:pt-28 lg:pb-8">
              <h3 className="text-[clamp(1.75rem,3vw,2.75rem)]">{name(item.key)}</h3>
              <p className="mt-2 mb-4 max-w-xl text-white/90">{t(`activities.${item.key}.desc`)}</p>
              <Link
                to="/#contact"
                state={{ pkg: activityLabelKey(item.key) }}
                data-activity-ask
                className="btn btn-sun btn-sm"
              >
                {t("activities.ask")} <LuArrowRight aria-hidden="true" />
              </Link>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function About({ onPlay }) {
  const { t } = useTranslation();
  const facilities = ["f1", "f2", "f3", "f4", "f5", "f6"];
  const facts = [
    ["4", "fact1"],
    ["5+", "fact2"],
    ["Rp10rb+", "fact3"],
  ];
  return (
    <section id="about" className="section bg-sand-2">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative pb-14 lg:order-last">
          <div aria-hidden="true" className="absolute -top-6 -right-4 size-32 rounded-full bg-sun md:size-44" />
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <Img
              src="/images/hero-bg3.jpg"
              alt={t("about.photoAlt")}
              sizes="(max-width: 1024px) 100vw, 580px"
              className="aspect-[4/3] w-full object-cover"
            />
            <button
              type="button"
              onClick={onPlay}
              aria-label={t("about.play")}
              className="absolute top-1/2 left-1/2 grid size-20 -translate-1/2 place-items-center rounded-full bg-sun pl-1 text-3xl text-ink shadow-lift transition hover:scale-110"
            >
              <LuPlay aria-hidden="true" />
            </button>
          </div>
          <Img
            src="/images/video-block-img.jpg"
            alt=""
            sizes="280px"
            className="absolute bottom-0 -left-2 aspect-[4/3] w-[46%] -rotate-3 rounded-2xl border-[6px] border-white object-cover shadow-lift md:-left-6"
          />
        </div>
        <div>
          <SectionHead title={t("about.title")} lead={t("about.body")} className="!mb-7" />
          <h3 className="mb-3 text-xl">{t("about.facilitiesTitle")}</h3>
          <ul className="grid gap-x-5 gap-y-2.5 sm:grid-cols-2">
            {facilities.map((key) => (
              <li key={key} className="flex items-center gap-2.5 font-semibold">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sun text-sm">
                  <LuCheck aria-hidden="true" />
                </span>
                {t(`about.${key}`)}
              </li>
            ))}
          </ul>
          <dl className="mt-8 grid grid-cols-3 gap-3">
            {facts.map(([value, key]) => (
              <div key={key} className="flex flex-col-reverse justify-end gap-1 rounded-2xl bg-sand p-4">
                <dt className="text-[0.8125rem] leading-snug text-muted">{t(`about.${key}`)}</dt>
                <dd className="font-display text-[clamp(1.375rem,3vw,2.125rem)] leading-none font-bold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Wahana() {
  const { t } = useTranslation();
  const name = (item) => t(`wahana.items.${item.key}.name`);
  const label = (price) => (price.label ? ` (${t(`wahana.${price.label}`)})` : "");
  const priced = WAHANA.filter((item) => item.prices);

  return (
    <section id="pricing" className="section">
      <div className="wrap grid items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <SectionHead title={t("wahana.title")} lead={t("wahana.lead")} className="!mb-0" />
        <aside className="rounded-3xl bg-sea p-6 text-white shadow-lift">
          <h3 className="text-2xl">{t("wahana.quickTitle")}</h3>
          <ul className="mt-3 sm:grid sm:grid-cols-2 sm:gap-x-8">
            {priced.flatMap((item) =>
              item.prices.map((price) => (
                <li
                  key={`${item.key}-${price.amount}`}
                  className="flex items-baseline justify-between gap-3 border-b border-white/20 py-2.5"
                >
                  <span>
                    {name(item)}
                    {label(price)}
                  </span>
                  <strong className="font-display text-lg whitespace-nowrap text-sun-light">{formatRupiah(price.amount)}</strong>
                </li>
              ))
            )}
          </ul>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="max-w-sm text-sm text-white/80">{t("wahana.note")}</p>
            <Link to="/#biaya" className="btn btn-sun btn-sm">
              {t("wahana.calc")}
            </Link>
          </div>
        </aside>
      </div>
      <div className="mt-10">
        <Rail label={t("nav.wahana")}>
            {WAHANA.map((item) => (
              <article
                key={item.key}
                data-poster
                className="flex w-[min(84%,310px)] shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-card"
              >
                <Img
                  src={item.img}
                  alt={`${name(item)}, Pantai Kelapa Tuban`}
                  sizes="(max-width: 640px) 85vw, 320px"
                  className="aspect-square w-full bg-sand-2 object-cover"
                />
                <div className="flex flex-1 flex-col gap-1.5 p-5">
                  <h3 className="text-xl">{name(item)}</h3>
                  <p className="text-muted">{t(`wahana.items.${item.key}.desc`)}</p>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-x-4 gap-y-2 pt-3">
                    {item.prices && (
                      <ul>
                        {item.prices.map((price) => (
                          <li key={price.amount} className="text-[0.9375rem] text-muted">
                            <strong className="font-display text-xl text-ink">{formatRupiah(price.amount)}</strong>
                            {price.label && ` ${t(`wahana.${price.label}`)}`}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link to="/#contact" state={{ pkg: wahanaPackageKey(item) }} className="btn btn-sun btn-sm ml-auto">
                      {t("wahana.reserve")}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
        </Rail>
      </div>
    </section>
  );
}

function SaltBanner() {
  const { t } = useTranslation();
  return (
    <section className="wrap pb-16 md:pb-24">
      <div className="relative isolate overflow-hidden rounded-3xl bg-sea-deep text-white shadow-lift">
        <Img
          src="/images/garam/bg-garam2.jpg"
          alt=""
          sizes="(max-width: 1240px) 100vw, 1240px"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sea-deep/95 via-sea-deep/70 to-sea-deep/10" />
        <div className="max-w-xl p-7 md:p-14">
          <h2 className="text-[clamp(1.875rem,4vw,3rem)] leading-[1.05]">{t("salt.title")}</h2>
          <p className="mt-3.5 mb-6 text-white/90">{t("salt.text")}</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/post/gst" className="btn btn-sun btn-sm">
              {t("salt.cta")} <LuArrowRight aria-hidden="true" />
            </Link>
            <a href={encodeURI(SITE.gstGuide)} download className="btn btn-ghost btn-sm">
              <LuDownload aria-hidden="true" /> {t("salt.guide")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const GALLERY_PAGE = 10;
const LARGE_TILES = new Set([0, 6, 10, 13]);

function Gallery({ onOpen }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [limit, setLimit] = useState(GALLERY_PAGE);
  const items = GALLERY.filter((g) => filter === "all" || g.category === filter);
  const shown = items.slice(0, limit);
  const filters = ["all", ...GALLERY_CATEGORIES];
  const altFor = (g) => `${t(`gallery.cat.${g.category}`)}, Pantai Kelapa Tuban`;
  const chooseFilter = (next) => {
    setFilter(next);
    setLimit(GALLERY_PAGE);
  };

  return (
    <section id="gallery" className="section bg-sand-2">
      <div className="wrap">
        <SectionHead title={t("gallery.title")} />
        <ul className="no-scrollbar mb-6 flex gap-2 overflow-x-auto pb-1.5">
          {filters.map((f) => (
            <li key={f} className="shrink-0">
              <button
                type="button"
                data-gallery-filter
                aria-pressed={filter === f}
                onClick={() => chooseFilter(f)}
                className="min-h-11 rounded-full bg-white px-5 text-[0.9375rem] font-bold whitespace-nowrap ring-1 ring-ink/10 transition hover:bg-foam aria-pressed:bg-sea aria-pressed:text-white aria-pressed:ring-0"
              >
                {f === "all" ? t("gallery.all") : t(`gallery.cat.${f}`)}
              </button>
            </li>
          ))}
        </ul>
        <ul data-gallery className="grid auto-rows-[clamp(130px,19vw,240px)] grid-cols-2 gap-2 [grid-auto-flow:dense] md:grid-cols-4 md:gap-3">
          {shown.map((g, i) => (
            <li key={g.img} className={filter === "all" && LARGE_TILES.has(i) ? "col-span-2 row-span-2" : ""}>
              <button
                type="button"
                aria-label={`${t("gallery.open")}: ${altFor(g)}`}
                onClick={() =>
                  onOpen(
                    items.map((x) => ({
                      type: "IMAGE",
                      url: encodeURI(x.img.replace(/\.jpe?g$/i, ".webp")),
                      title: altFor(x),
                    })),
                    i
                  )
                }
                className="group block size-full overflow-hidden rounded-xl bg-white"
              >
                <Img
                  src={g.img}
                  alt={altFor(g)}
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
        {items.length > shown.length && (
          <div className="mt-8 text-center">
            <button type="button" data-gallery-more className="btn btn-sea" onClick={() => setLimit(items.length)}>
              {t("gallery.more")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useTranslation();
  const initials = (name) =>
    name
      .split(" ")
      .slice(0, 2)
      .map((part) => part[0])
      .join("");
  return (
    <section className="section bg-foam">
      <div className="wrap">
        <SectionHead title={t("testimonials.title")} />
      </div>
      <Rail label={t("testimonials.title")}>
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex w-[min(85%,380px)] shrink-0 flex-col justify-between gap-6 rounded-2xl bg-white p-7 shadow-card"
            >
              <div>
                <LuQuote aria-hidden="true" className="mb-3 text-3xl text-sun" />
                <blockquote className="font-display text-xl leading-snug">{t(`testimonials.${item.quote}`)}</blockquote>
              </div>
              <figcaption className="flex items-center gap-3">
                <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-full bg-sea font-bold text-white">
                  {initials(item.name)}
                </span>
                <span className="leading-snug">
                  <strong className="block">{item.name}</strong>
                  <small className="text-sm text-muted">{item.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
      </Rail>
    </section>
  );
}

function Team() {
  const { t } = useTranslation();
  return (
    <section id="pengurus" className="section">
      <div className="wrap">
        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <Img
            src="/images/about2.png"
            alt={t("team.groupAlt")}
            sizes="(max-width: 1024px) 100vw, 680px"
            className="w-full"
          />
          <SectionHead title={t("team.title")} lead={t("team.lead")} className="!mb-0" />
        </div>
        <ul data-team className="mt-14 flex flex-wrap justify-center gap-x-5 gap-y-8">
          {TEAM.map((m) => (
            <li key={m.name} className="w-[calc(50%-0.625rem)] sm:w-[calc(33.333%-0.84rem)] lg:w-[calc(20%-1rem)]">
              <figure className="group text-center">
                <div className="overflow-hidden rounded-t-full rounded-b-2xl bg-sand-2 p-1.5 shadow-card ring-1 ring-ink/10 transition duration-300 group-hover:-translate-y-1 group-hover:bg-sun">
                  <Img
                    src={m.img}
                    alt={m.name}
                    sizes="(max-width: 640px) 45vw, 240px"
                    className="aspect-[4/5] w-full rounded-t-full rounded-b-xl object-cover"
                  />
                </div>
                <figcaption className="mt-3 leading-snug">
                  <strong className="block font-display text-[1.0625rem]">{m.name}</strong>
                  <span className="text-[0.9375rem] text-muted">{t(`team.${m.role}`)}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  const { t } = useTranslation();
  return (
    <section className="section !pt-0">
      <div className="wrap grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <SectionHead title={t("faq.title")} className="!mb-6" />
          <div className="rounded-2xl bg-sea p-6 text-white shadow-card">
            <h3 className="text-xl">{t("faq.askTitle")}</h3>
            <p className="mt-1.5 mb-4 text-white/85">{t("faq.askText")}</p>
            <a href={SITE.whatsapp} {...external} className="btn btn-sun btn-sm">
              <FaWhatsapp aria-hidden="true" /> {t("faq.askCta")}
            </a>
          </div>
        </div>
        <div className="grid content-start gap-3">
          {FAQ_KEYS.map((key, i) => (
            <details key={key} name="faq" open={i === 0} className="group rounded-2xl bg-white shadow-card">
              <summary className="flex min-h-16 items-center justify-between gap-4 px-5 py-3.5 text-[1.0625rem] font-bold">
                {t(`faq.${key}.q`)}
                <LuPlus aria-hidden="true" className="shrink-0 text-xl text-sea transition group-open:rotate-45" />
              </summary>
              <p className="px-5 pb-5 text-muted">{t(`faq.${key}.a`)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const { t } = useTranslation();
  const routes = [
    ["route1Title", "route1"],
    ["route2Title", "route2"],
    ["route3Title", "route3"],
  ];
  return (
    <section id="lokasi" className="section !pt-0">
      <div className="wrap">
        <SectionHead title={t("location.title")} lead={t("location.lead")} />
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="overflow-hidden rounded-3xl bg-sand-2 shadow-card">
            <iframe
              title={t("contact.mapTitle")}
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-[clamp(300px,42vw,460px)] w-full border-0"
            />
          </div>
          <div className="flex flex-col gap-3">
            {routes.map(([title, text]) => (
              <div key={title} className="flex gap-3.5 rounded-2xl bg-white p-5 shadow-card">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-foam text-sea">
                  <LuNavigation aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg">{t(`location.${title}`)}</h3>
                  <p className="mt-0.5 text-muted">{t(`location.${text}`)}</p>
                </div>
              </div>
            ))}
            <a href={SITE.directions} {...external} className="btn btn-sea mt-auto">
              <LuExternalLink aria-hidden="true" /> {t("location.open")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const SEEN_KEY = "pk-featured-media-seen";

function alreadySeenFeatured() {
  try {
    if (window.sessionStorage.getItem(SEEN_KEY)) return true;
    window.sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    // Tanpa storage, sorotan tetap ditampilkan.
  }
  return false;
}

export default function Home() {
  const { t } = useTranslation();
  const [modal, setModal] = useState({ open: false, items: [], index: 0, label: "" });

  const openModal = (items, index = 0, label = "") => setModal({ open: true, items, index, label });

  useEffect(() => {
    const controller = new AbortController();
    Promise.all([fetchFeaturedMedia(controller.signal), preloaderDone])
      .then(([items]) => {
        if (controller.signal.aborted || items.length === 0 || alreadySeenFeatured()) return;
        const firstVideo = items.findIndex((m) => m.type === "VIDEO");
        openModal(items, Math.max(firstVideo, 0));
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return (
    <>
      <Hero />
      <VisitTicket />
      <News />
      <Events />
      <Activities />
      <About onPlay={() => openModal(ABOUT_VIDEO, 0, t("about.play"))} />
      <Wahana />
      <Planner />
      <SaltBanner />
      <Gallery onOpen={(items, index) => openModal(items, index, t("gallery.title"))} />
      <Testimonials />
      <Team />
      <Faq />
      <Location />
      <Contact />
      <MediaModal
        open={modal.open}
        items={modal.items}
        index={modal.index}
        label={modal.label}
        onIndex={(index) => setModal((m) => ({ ...m, index }))}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
      />
    </>
  );
}
