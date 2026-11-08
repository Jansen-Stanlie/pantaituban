import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <section className="section not-found">
      <div className="wrap">
        <p className="not-found-code" aria-hidden="true">
          404
        </p>
        <h1>{t("page.notFoundTitle")}</h1>
        <p className="lead">{t("page.notFoundText")}</p>
        <Link to="/" className="btn btn-sea">
          {t("page.toHome")}
        </Link>
      </div>
    </section>
  );
}
