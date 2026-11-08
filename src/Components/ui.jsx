import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { LuArrowLeft, LuCheck, LuLink } from "react-icons/lu";
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

export function SectionHead({ title, lead, center = false, light = false, className = "" }) {
  return (
    <header className={`mb-9 max-w-2xl md:mb-12 ${center ? "mx-auto text-center" : ""} ${className}`}>
      <h2 className="text-[clamp(2.125rem,4.6vw,3.375rem)] leading-[1.05]">{title}</h2>
      <svg
        viewBox="0 0 124 12"
        className={`mt-3.5 h-2.5 w-24 text-sun ${center ? "mx-auto" : ""}`}
        aria-hidden="true"
      >
        <path
          d="M2 7c13-8 22-8 34 0s22 8 34 0 22-8 34 0 14 4 18 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      {lead && <p className={`mt-4 text-lg ${light ? "text-white/85" : "text-muted"}`}>{lead}</p>}
    </header>
  );
}

export function Wave({ flip = false, className = "" }) {
  return (
    <svg
      className={`block h-[clamp(32px,6vw,84px)] w-full fill-current ${flip ? "-scale-y-100" : ""} ${className}`}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 40c120-34 240-34 360 0s240 34 360 0 240-34 360 0 240 34 360 0v40H0z" />
    </svg>
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

const NEWS_LAYOUT = {
  card: { root: "flex-col", media: "aspect-[16/10]", body: "p-6", title: "text-xl", clamp: "line-clamp-3" },
  feature: {
    root: "h-full flex-col",
    media: "aspect-[16/10] lg:aspect-auto lg:min-h-[340px] lg:flex-1",
    body: "p-6 md:p-8",
    title: "text-2xl md:text-[2rem]",
    clamp: "line-clamp-3",
  },
  row: {
    root: "h-full flex-row",
    media: "min-h-36 w-[38%] shrink-0",
    body: "p-4 md:p-5",
    title: "text-base md:text-lg",
    clamp: "line-clamp-2 max-md:hidden",
  },
};

export function NewsCard({ post, layout = "card" }) {
  const { t, i18n } = useTranslation();
  const [img, setImg] = useState(post.img ? encodeURI(post.img) : FALLBACK_NEWS_IMAGE);
  const date = post.date ? formatDate(post.date, i18n.language) : "";
  const style = NEWS_LAYOUT[layout];
  const title = post.link ? (
    <SmartLink to={post.link} className="no-underline after:absolute after:inset-0 hover:text-sea">
      {post.title}
    </SmartLink>
  ) : (
    post.title
  );

  return (
    <article
      className={`group relative flex overflow-hidden rounded-2xl bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift ${style.root}`}
    >
      <div className={`relative overflow-hidden bg-sand-2 ${style.media}`}>
        <img
          src={img}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setImg(FALLBACK_NEWS_IMAGE)}
          className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className={`flex min-w-0 flex-col ${style.body}`}>
        <p className="mb-2 text-sm text-muted">
          {date}
          {post.author ? ` · ${t("news.by")} ${post.author}` : ""}
        </p>
        <h3 className={`line-clamp-3 ${style.title}`}>{title}</h3>
        <p className={`mt-2.5 text-muted ${style.clamp}`}>{post.excerpt}</p>
      </div>
    </article>
  );
}

export function PageHero({ img, title, lead, meta, children }) {
  const { t } = useTranslation();
  return (
    <div className="relative isolate flex min-h-[clamp(340px,52vh,500px)] items-end overflow-hidden bg-sea-deep text-white">
      <Img className="absolute inset-0 -z-20 size-full object-cover" src={img} alt="" sizes={COVER_SIZES} priority />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sea-deep/35 to-sea-deep/90" />
      <div className="wrap pt-14 pb-12">
        <Link to="/" className="mb-4 inline-flex items-center gap-2 font-semibold no-underline hover:text-sun">
          <LuArrowLeft aria-hidden="true" /> {t("page.back")}
        </Link>
        <h1 className="max-w-[20ch] text-[clamp(2.25rem,5.5vw,4rem)]">{title}</h1>
        {lead && <p className="mt-3 text-lg text-white/90">{lead}</p>}
        {meta && <p className="mt-3.5 mb-5 text-[0.9375rem]">{meta}</p>}
        {children}
        {/* `meta` hanya dipakai halaman artikel, yang memang layak dibagikan. */}
        {meta && <ShareButtons />}
      </div>
    </div>
  );
}

const SHARE_TARGETS = [
  ["share.whatsapp", "https://wa.me/?text=", FaWhatsapp],
  ["share.facebook", "https://www.facebook.com/sharer/sharer.php?u=", FaFacebookF],
];

function ShareButtons() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const buttonClass =
    "grid size-11 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/40 transition hover:bg-white hover:text-ink";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard bisa ditolak browser; tombol lain tetap berfungsi.
    }
  };

  return (
    <div className="mt-5 flex gap-2.5">
      {SHARE_TARGETS.map(([label, base, Icon]) => (
        <button
          key={label}
          type="button"
          aria-label={t(label)}
          className={buttonClass}
          onClick={() => window.open(`${base}${encodeURIComponent(window.location.href)}`, "_blank", "noopener")}
        >
          <Icon aria-hidden="true" />
        </button>
      ))}
      <button
        type="button"
        data-share-copy
        aria-label={copied ? t("share.copied") : t("share.copy")}
        className={buttonClass}
        onClick={copyLink}
      >
        {copied ? <LuCheck aria-hidden="true" /> : <LuLink aria-hidden="true" />}
      </button>
    </div>
  );
}

