import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import "./i18n";

export { ROUTES, NOT_FOUND, POST_SHELL, SITE_URL, renderHead } from "./seo";

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
