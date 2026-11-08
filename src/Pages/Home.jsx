import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  LuArrowRight,
  LuClock,
  LuMapPin,
  LuPlay,
  LuPlus,
  LuSailboat,
  LuSun,
  LuUtensils,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { COVER_SIZES, Img, NewsCard, Rail, SectionHead } from "../Components/ui";
import MediaModal from "../Components/MediaModal";
import Events from "../Components/Events";
import Contact from "../Components/Contact";
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
import { fetchFeaturedMedia, fetchLatestPosts, useRemote } from "../lib/api";

const formatRupiah = (amount) => `Rp${String(amount).replace(/\B(?=(\d{3})+$)/g, ".")}`;

function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero">
      <Img className="hero-img" src="/images/hero-bg.jpg" alt="" sizes={COVER_SIZES} priority />
      <div className="wrap hero-in">
        <p className="eyebrow">{t("hero.eyebrow")}</p>
        <h1>{t("hero.title")}</h1>
        <p className="hero-lead">{t("hero.lead")}</p>
        <div className="btn-row">
          <Link to="/#contact" className="btn btn-sun">
            {t("hero.plan")} <LuArrowRight aria-hidden="true" />
          </Link>
          <Link to="/post/gst" className="btn btn-ghost">
            {t("hero.salt")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function VisitTicket() {
  const { t } = useTranslation();
  return (
    <div className="wrap">
      <ul className="ticket">
        <li>
          <LuClock aria-hidden="true" />
          <div>
            <span>{t("hero.hoursLabel")}</span>
            <strong>{t("hero.hoursValue")}</strong>
          </div>
        </li>
        <li>
          <LuMapPin aria-hidden="true" />
          <div>
            <span>{t("hero.locationLabel")}</span>
            <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">
              {t("hero.locationValue")}
            </a>
          </div>
        </li>
        <li>
          <FaWhatsapp aria-hidden="true" />
          <div>
            <span>{t("hero.contactLabel")}</span>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              {SITE.phoneDisplay}
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

function Activities() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const item = ACTIVITIES[active];
  return (
    <section id="department" className="section">
      <div className="wrap">
        <SectionHead eyebrow={t("activities.eyebrow")} title={t("activities.title")} lead={t("activities.lead")} />
        <div className="activities">
          <ul className="activity-tabs">
            {ACTIVITIES.map(({ key }, i) => (
              <li key={key}>
                <button type="button" aria-pressed={i === active} onClick={() => setActive(i)}>
                  {t(`activities.${key}.name`)}
                </button>
              </li>
            ))}
          </ul>
          <figure className="activity-panel" key={item.key}>
            <Img src={item.img} alt={t(`activities.${item.key}.name`)} sizes="(max-width: 900px) 100vw, 800px" />
            <figcaption>
              <h3>{t(`activities.${item.key}.name`)}</h3>
              <p>{t(`activities.${item.key}.desc`)}</p>
              <Link to="/#contact" state={{ pkg: activityLabelKey(item.key) }} className="text-link">
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
  const highlights = [
    [LuSun, "highlight1"],
    [LuSailboat, "highlight2"],
    [LuUtensils, "highlight3"],
  ];
  const facts = [
    ["4", "fact1"],
    ["5+", "fact2"],
    ["Rp10rb+", "fact3"],
  ];
  return (
    <section id="about" className="section about">
      <div className="wrap about-grid">
        <div>
          <SectionHead eyebrow={t("about.eyebrow")} title={t("about.title")} lead={t("about.body")} />
          <ul className="highlights">
            {highlights.map(([Icon, key]) => (
              <li key={key}>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{t(`about.${key}`)}</h3>
                  <p>{t(`about.${key}Text`)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-media">
          <div className="about-photo">
            <Img src="/images/hero-bg3.jpg" alt={t("about.photoAlt")} sizes="(max-width: 900px) 100vw, 560px" />
            <button type="button" className="play-btn" onClick={onPlay} aria-label={t("about.play")}>
              <LuPlay aria-hidden="true" />
            </button>
          </div>
          <dl className="facts">
            {facts.map(([value, key]) => (
              <div key={key}>
                <dt>{t(`about.${key}`)}</dt>
                <dd>{value}</dd>
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
  return (
    <section id="pricing" className="section">
      <div className="wrap">
        <SectionHead eyebrow={t("wahana.eyebrow")} title={t("wahana.title")} lead={t("wahana.lead")} />
        <Rail label={t("nav.wahana")}>
          {WAHANA.map((item) => (
            <article className="poster" key={item.key}>
              <Img
                src={item.img}
                alt={`${t(`wahana.items.${item.key}.name`)}, Pantai Kelapa Tuban`}
                sizes="(max-width: 640px) 85vw, 420px"
              />
              <div className="poster-body">
                <h3>{t(`wahana.items.${item.key}.name`)}</h3>
                <p>{t(`wahana.items.${item.key}.desc`)}</p>
                <div className="poster-foot">
                  {item.prices && (
                    <ul className="poster-prices">
                      {item.prices.map((price) => (
                        <li key={price.amount}>
                          <strong>{formatRupiah(price.amount)}</strong>
                          {price.label && ` ${t(`wahana.${price.label}`)}`}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to="/#contact" state={{ pkg: wahanaPackageKey(item) }} className="text-link">
                    {t("wahana.reserve")} <LuArrowRight aria-hidden="true" />
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

function Gallery({ onOpen }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const items = GALLERY.filter((g) => filter === "all" || g.category === filter);
  const filters = ["all", ...GALLERY_CATEGORIES];
  const altFor = (g) => `${t(`gallery.cat.${g.category}`)}, Pantai Kelapa Tuban`;

  return (
    <section id="gallery" className="section gallery">
      <div className="wrap">
        <SectionHead eyebrow={t("gallery.eyebrow")} title={t("gallery.title")} />
        <ul className="chips">
          {filters.map((f) => (
            <li key={f}>
              <button type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f === "all" ? t("gallery.all") : t(`gallery.cat.${f}`)}
              </button>
            </li>
          ))}
        </ul>
        <ul className="gallery-grid">
          {items.map((g, i) => (
            <li key={g.img}>
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
              >
                <Img src={g.img} alt={altFor(g)} sizes="(max-width: 640px) 50vw, 300px" />
              </button>
            </li>
          ))}
        </ul>
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
    <section className="section testimonials">
      <div className="wrap">
        <SectionHead eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} />
        <Rail label={t("testimonials.title")}>
          {TESTIMONIALS.map((item) => (
            <figure className="quote" key={item.name}>
              <blockquote>{t(`testimonials.${item.quote}`)}</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">
                  {initials(item.name)}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </Rail>
      </div>
    </section>
  );
}

const STATIC_NEWS = NEWS.slice(0, 3);

function News() {
  const { t } = useTranslation();
  const posts = useRemote(fetchLatestPosts, STATIC_NEWS);
  return (
    <section id="blog" className="section">
      <div className="wrap">
        <div className="head-row">
          <SectionHead eyebrow={t("news.eyebrow")} title={t("news.title")} />
          <Link to="/post/postrecap" className="text-link">
            {t("news.more")} <LuArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="news-grid">
          {posts.map((post) => (
            <NewsCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const { t } = useTranslation();
  return (
    <section id="pengurus" className="section team">
      <div className="wrap">
        <SectionHead eyebrow={t("team.eyebrow")} title={t("team.title")} lead={t("team.lead")} />
        <Rail label={t("team.eyebrow")}>
          {TEAM.map((m) => (
            <figure className="member" key={m.name}>
              <Img src={m.img} alt={m.name} sizes="260px" />
              <figcaption>
                <strong>{m.name}</strong>
                <span>{t(`team.${m.role}`)}</span>
              </figcaption>
            </figure>
          ))}
        </Rail>
      </div>
    </section>
  );
}

function Faq() {
  const { t } = useTranslation();
  return (
    <section className="section">
      <div className="wrap faq-grid">
        <SectionHead eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
        <div className="faq-list">
          {FAQ_KEYS.map((key, i) => (
            <details key={key} name="faq" open={i === 0}>
              <summary>
                {t(`faq.${key}.q`)} <LuPlus aria-hidden="true" />
              </summary>
              <p>{t(`faq.${key}.a`)}</p>
            </details>
          ))}
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
    fetchFeaturedMedia(controller.signal)
      .then((items) => {
        if (items.length === 0 || alreadySeenFeatured()) return;
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
      <Activities />
      <About onPlay={() => openModal(ABOUT_VIDEO, 0, t("about.play"))} />
      <Events />
      <Wahana />
      <Gallery onOpen={(items, index) => openModal(items, index, t("gallery.eyebrow"))} />
      <Testimonials />
      <News />
      <Team />
      <Faq />
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
