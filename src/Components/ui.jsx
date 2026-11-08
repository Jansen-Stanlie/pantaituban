import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LuArrowLeft, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { formatDate } from "../lib/api";

/** Foto hero di-crop mengikuti tinggi layar, jadi di HP butuh lebih dari 100vw. */
export const COVER_SIZES = "(max-width: 900px) 250vw, 100vw";

/** Gambar lokal dengan varian WebP 640 px dan 1600 px. */
export function Img({ src, alt, sizes = "100vw", priority = false, className }) {
  const base = encodeURI(src.replace(/\.(jpe?g|png)$/i, ""));
  return (
    <img
      className={className}
      src={`${base}.webp`}
      srcSet={`${base}-640.webp 640w, ${base}.webp 1600w`}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      {...(priority ? { fetchpriority: "high" } : {})}
    />
  );
}

export function SectionHead({ eyebrow, title, lead, center = false }) {
  return (
    <header className={`section-head${center ? " is-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </header>
  );
}

export function Wave({ flip = false, className = "" }) {
  return (
    <svg
      className={`wave${flip ? " is-flipped" : ""} ${className}`}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 40c120-34 240-34 360 0s240 34 360 0 240-34 360 0 240 34 360 0v40H0z" />
    </svg>
  );
}

/** Deretan kartu yang digeser secara native (scroll-snap). */
export function Rail({ label, children }) {
  const { t } = useTranslation();
  const track = useRef(null);
  const move = (direction) =>
    track.current?.scrollBy({ left: direction * track.current.clientWidth * 0.8 });

  return (
    <div className="rail">
      <div className="rail-track" ref={track} role="group" aria-label={label} tabIndex={0}>
        {children}
      </div>
      <div className="rail-controls">
        <button type="button" className="icon-btn" onClick={() => move(-1)} aria-label={t("media.prev")}>
          <LuChevronLeft aria-hidden="true" />
        </button>
        <button type="button" className="icon-btn" onClick={() => move(1)} aria-label={t("media.next")}>
          <LuChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function SmartLink({ to, children, ...props }) {
  if (/^https?:/i.test(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

const FALLBACK_NEWS_IMAGE = "/images/blog3.webp";

export function NewsCard({ post }) {
  const { t, i18n } = useTranslation();
  const [img, setImg] = useState(post.img ? encodeURI(post.img) : FALLBACK_NEWS_IMAGE);
  const date = post.date ? formatDate(post.date, i18n.language) : "";
  const title = post.link ? <SmartLink to={post.link}>{post.title}</SmartLink> : post.title;

  return (
    <article className="news-card">
      <div className="news-media">
        <img
          src={img}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setImg(FALLBACK_NEWS_IMAGE)}
        />
      </div>
      <div className="news-body">
        <p className="news-meta">
          {date}
          {post.author ? ` · ${t("news.by")} ${post.author}` : ""}
        </p>
        <h3>{title}</h3>
        <p className="news-excerpt">{post.excerpt}</p>
      </div>
    </article>
  );
}

export function PageHero({ img, title, lead, meta, children }) {
  const { t } = useTranslation();
  return (
    <div className="page-hero">
      <Img className="page-hero-img" src={img} alt="" sizes={COVER_SIZES} priority />
      <div className="wrap page-hero-in">
        <Link to="/" className="back-link">
          <LuArrowLeft aria-hidden="true" /> {t("page.back")}
        </Link>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {meta && <p className="page-meta">{meta}</p>}
        {children}
      </div>
    </div>
  );
}
