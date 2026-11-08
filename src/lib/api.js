import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL ?? "https://pantaikelapa-panel.my.id";
const TIMEOUT_MS = 10000;

/** Hanya URL http(s) yang boleh dipakai dari data API (mencegah javascript: dsb). */
export function safeHttpUrl(value) {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

/** URL http(s), atau path internal yang diawali satu "/". */
export function safeLink(value) {
  if (typeof value !== "string") return null;
  const v = value.trim();
  return /^\/(?![\\/])/.test(v) ? v : safeHttpUrl(v);
}

const safeColor = (value) => (/^#[0-9a-f]{3,8}$/i.test(value ?? "") ? value : null);

async function getJson(path, signal) {
  const controller = new AbortController();
  const abort = () => controller.abort();
  const timer = setTimeout(abort, TIMEOUT_MS);
  signal.addEventListener("abort", abort, { once: true });
  try {
    const res = await fetch(`${API_BASE}${path}`, { signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
    signal.removeEventListener("abort", abort);
  }
}

/** Data awal ditampilkan sampai API berhasil mengembalikan isi. */
export function useRemote(fetcher, initial) {
  const [data, setData] = useState(initial);
  useEffect(() => {
    const controller = new AbortController();
    fetcher(controller.signal)
      .then((result) => {
        if (result.length > 0) setData(result);
      })
      .catch(() => {});
    return () => controller.abort();
  }, [fetcher]);
  return data;
}

const postsPath = (limit) =>
  `/api/pages/post/public?page=1&limit=${limit}&sortBy=publishedAt&order=desc&isPublished=true&isDeleted=false`;

const lastSegment = (value) =>
  typeof value === "string" ? value.split(/[?#]/)[0].split("/").filter(Boolean).pop() : undefined;

function normalizePost(p) {
  const slug = p.slug ?? p.id ?? p._id;
  return {
    title: String(p.title ?? ""),
    date: p.publishedAt ?? null,
    author: p.author?.name ?? "",
    excerpt: String(p.subTitle ?? ""),
    body: String(p.content ?? p.body ?? p.description ?? ""),
    img: safeLink(p.img),
    link: safeLink(p.postLink) || (slug ? `/post/${encodeURIComponent(slug)}` : null),
  };
}

export async function fetchLatestPosts(signal) {
  const json = await getJson(postsPath(3), signal);
  const posts = Array.isArray(json?.data?.posts) ? json.data.posts : [];
  return posts.map(normalizePost).filter((p) => p.title);
}

/** Mencari satu berita dari daftar publik; panel belum punya endpoint detail yang diketahui. */
export async function fetchPost(slug, signal) {
  const json = await getJson(postsPath(100), signal);
  const posts = Array.isArray(json?.data?.posts) ? json.data.posts : [];
  const match = posts.find((p) =>
    [p.slug, p.id, p._id, lastSegment(p.postLink)].some((candidate) => String(candidate) === slug)
  );
  return match ? normalizePost(match) : null;
}

/** Mengubah isi artikel menjadi paragraf teks biasa, sehingga HTML dari API tidak pernah dirender. */
export function toParagraphs(content) {
  const withBreaks = content.replace(/<\/(p|div|h[1-6]|li|blockquote)>|<br\s*\/?>/gi, "$&\n");
  const { body } = new DOMParser().parseFromString(withBreaks, "text/html");
  body.querySelectorAll("script, style").forEach((el) => el.remove());
  return (body.textContent ?? "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export async function fetchEvents(signal) {
  // Kartu memakai 3 teratas; kalender memakai seluruh daftar.
  const json = await getJson("/api/apps/calendar/public/events?upcoming=true&limit=50", signal);
  const items = Array.isArray(json?.data) ? json.data : [];
  return items
    .map((e) => ({
      id: e.id,
      title: String(e.title ?? ""),
      description: String(e.description ?? ""),
      location: String(e.location ?? ""),
      start: new Date(e.start),
      end: e.end ? new Date(e.end) : new Date(e.start),
      category: e.category?.name ?? "",
      color: safeColor(e.color) || safeColor(e.category?.color),
    }))
    .filter((e) => e.title && !Number.isNaN(e.start.getTime()))
    .sort((a, b) => a.start - b.start);
}

export async function fetchFeaturedMedia(signal) {
  const json = await getJson(
    "/api/apps/media/public?page=1&limit=10&sortBy=publishedAt&order=desc&isPublished=true&isFeatured=true",
    signal
  );
  const items = Array.isArray(json?.data) ? json.data : [];
  return items
    .filter((m) => (m?.type === "VIDEO" || m?.type === "IMAGE") && safeHttpUrl(m.url))
    .sort(
      (a, b) =>
        (a.sortOrder ?? 0) - (b.sortOrder ?? 0) ||
        new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
    )
    .map((m) => ({ type: m.type, url: safeHttpUrl(m.url), title: String(m.title ?? "") }));
}

export function formatDate(value, lang, options = { day: "numeric", month: "long", year: "numeric" }) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(lang === "en" ? "en-GB" : "id-ID", options);
}
