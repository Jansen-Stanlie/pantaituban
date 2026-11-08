import { SITE } from "./data/site";

export const SITE_URL = SITE.url;
const DEFAULT_IMAGE = "/images/og-cover.jpg";

const attraction = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: SITE.name,
  description:
    "Wisata pantai keluarga di Tuban, Jawa Timur, dengan wahana berkuda, ATV, flying fox, kolam renang, camping, dan edukasi garam.",
  url: SITE.url,
  image: `${SITE.url}${DEFAULT_IMAGE}`,
  telephone: SITE.phoneE164,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Gresik KM.1, Kepoh, Kelurahan Panyuran, Kecamatan Palang",
    addressLocality: "Tuban",
    addressRegion: "Jawa Timur",
    postalCode: "62391",
    addressCountry: "ID",
  },
  geo: { "@type": "GeoCoordinates", latitude: -6.896183, longitude: 112.089262 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "17:00",
  },
  sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.tiktok],
};

const article = ({ title, description, image, date, path }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: `${SITE.url}${image}`,
  datePublished: date,
  mainEntityOfPage: `${SITE.url}${path}`,
  author: { "@type": "Organization", name: "Pokdarwis Pantai Kelapa" },
  publisher: { "@type": "Organization", name: SITE.name },
});

const GST = {
  path: "/post/gst",
  title: "Edukasi Garam GST & Terapi Garam | Pantai Kelapa Tuban",
  description:
    "Belajar proses pembuatan garam dengan teknologi Greenhouse Salt Tunnel dan rasakan terapi garam di Pantai Kelapa Tuban.",
  image: "/images/garam/bg-garam3.jpg",
  type: "article",
  date: "2025-04-21",
};

const AWARDS = {
  path: "/post/post_details",
  title: "Pantai Kelapa Raih Penghargaan EJTA 2023 | Pantai Kelapa Tuban",
  description:
    "Pantai Kelapa meraih East Java Tourism Award 2023, lengkap dengan fakta menarik, lokasi, dan fasilitas wisatanya.",
  image: "/images/blog1.jpg",
  type: "article",
  date: "2023-10-31",
};

export const ROUTES = [
  {
    path: "/",
    title: "Pantai Kelapa Tuban: Wisata Pantai Keluarga di Jawa Timur",
    description:
      "Pantai Kelapa Tuban buka setiap hari 08.00–17.00 WIB. Nikmati berkuda, ATV, flying fox, kolam renang, camping, kuliner, dan edukasi garam di tepi laut.",
    image: DEFAULT_IMAGE,
    type: "website",
    jsonLd: attraction,
    preload: "/images/hero-bg",
  },
  {
    path: "/post/postrecap",
    title: "Berita Terbaru | Pantai Kelapa Tuban",
    description: "Kumpulan liputan media, acara, dan kegiatan sosial terbaru dari Pantai Kelapa Tuban.",
    image: "/images/hero-bg2.jpg",
    type: "website",
  },
  { ...GST, jsonLd: article(GST) },
  { ...AWARDS, jsonLd: article(AWARDS) },
];

export const NOT_FOUND = {
  path: "/404",
  title: "Halaman Tidak Ditemukan | Pantai Kelapa Tuban",
  description: "Halaman yang Anda cari tidak tersedia.",
  image: DEFAULT_IMAGE,
  type: "website",
  noindex: true,
};

/**
 * Kerangka untuk berita dari API (/post/:postId). Judul dan canonical diisi
 * di browser setelah datanya tersedia.
 */
export const POST_SHELL = {
  path: "/post/__detail",
  title: "Berita | Pantai Kelapa Tuban",
  description: "Berita terbaru dari Pantai Kelapa Tuban.",
  image: DEFAULT_IMAGE,
  type: "article",
  dynamic: true,
};

export function findRoute(pathname) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return (
    ROUTES.find((r) => r.path.toLowerCase() === clean.toLowerCase()) ||
    (/^\/post\/[^/]+$/i.test(clean) ? POST_SHELL : NOT_FOUND)
  );
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function renderHead(route) {
  const url = `${SITE.url}${route.path === "/" ? "/" : route.path}`;
  const image = `${SITE.url}${route.image}`;
  const lines = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    route.noindex && `<meta name="robots" content="noindex" />`,
    !route.noindex && !route.dynamic && `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:locale" content="id_ID" />`,
    `<meta property="og:type" content="${route.type}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    !route.dynamic && `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  ].filter(Boolean);
  if (route.preload) {
    lines.push(
      `<link rel="preload" as="image" type="image/webp" fetchpriority="high" imagesrcset="${route.preload}-640.webp 640w, ${route.preload}.webp 1600w" imagesizes="(max-width: 900px) 250vw, 100vw" />`
    );
  }
  if (route.jsonLd) {
    const json = JSON.stringify(route.jsonLd).replace(/</g, "\\u003c");
    lines.push(`<script type="application/ld+json">${json}</script>`);
  }
  return lines.join("\n    ");
}

const setContent = (selector, value) => {
  document.head.querySelector(selector)?.setAttribute("content", value);
};

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!url) {
    link?.remove();
    return;
  }
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
}

function setTitleAndDescription(title, description) {
  document.title = title;
  setContent('meta[name="description"]', description);
  setContent('meta[property="og:title"]', title);
  setContent('meta[property="og:description"]', description);
}

/** Menyelaraskan tag utama saat berpindah halaman di sisi klien. */
export function applySeo(pathname) {
  const route = findRoute(pathname);
  const url = `${SITE.url}${route.path}`;
  setTitleAndDescription(route.title, route.description);
  setContent('meta[property="og:url"]', url);
  setCanonical(route.noindex || route.dynamic ? null : url);
}

const POST_ROBOTS_ID = "post-robots";

/** Dipanggil halaman berita API setelah datanya diketahui. */
export function applyPostSeo({ title, description, noindex }) {
  if (noindex) {
    const meta = document.createElement("meta");
    meta.id = POST_ROBOTS_ID;
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return;
  }
  setTitleAndDescription(`${title} | ${SITE.name}`, description || POST_SHELL.description);
  setCanonical(`${SITE.url}${window.location.pathname}`);
}

export function clearPostSeo() {
  document.getElementById(POST_ROBOTS_ID)?.remove();
}
