// Menulis HTML statis untuk setiap rute, supaya crawler menerima konten lengkap
// beserta meta tag per halaman, lalu membuat sitemap dari daftar rute yang sama.
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const buildDir = path.join(root, "build");
const ssrDir = path.join(root, "build-ssr");

const { render, ROUTES, NOT_FOUND, POST_SHELL, SITE_URL, renderHead } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const template = await fs.readFile(path.join(buildDir, "index.html"), "utf8");

const toHtml = (route, url) =>
  template
    .replace("<!--head-tags-->", renderHead(route))
    .replace("<!--app-html-->", render(url));

// POST_SHELL ikut ditulis agar rewrite /post/:slug punya tujuan, tapi tidak masuk sitemap.
for (const route of [...ROUTES, POST_SHELL]) {
  const dir = path.join(buildDir, route.path);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, "index.html"), toHtml(route, route.path));
}
await fs.writeFile(path.join(buildDir, "404.html"), toHtml(NOT_FOUND, "/halaman-tidak-ditemukan"));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
  </url>`
).join("\n")}
</urlset>
`;
await fs.writeFile(path.join(buildDir, "sitemap.xml"), sitemap);

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(`Prerender selesai: ${ROUTES.length} halaman + 404, sitemap.xml`);
