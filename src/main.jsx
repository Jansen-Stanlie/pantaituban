import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/bricolage-grotesque/wght.css";
import "@fontsource-variable/plus-jakarta-sans/wght.css";
import "./styles/app.css";
import App from "./App";
import "./i18n";
import { hidePreloader } from "./lib/preloader";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Halaman hasil prerender dihidupkan; saat `npm run dev` root masih kosong.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

hidePreloader();
