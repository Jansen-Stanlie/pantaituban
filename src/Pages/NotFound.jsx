import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <section className="section text-center">
      <div className="wrap">
        <p aria-hidden="true" className="font-display text-[clamp(6rem,22vw,12rem)] leading-none font-extrabold text-sun">
          404
        </p>
        <h1 className="text-[clamp(2rem,5vw,3rem)]">{t("page.notFoundTitle")}</h1>
        <p className="mt-3 mb-7 text-lg text-muted">{t("page.notFoundText")}</p>
        <Link to="/" className="btn btn-sea">
          {t("page.toHome")}
        </Link>
      </div>
    </section>
  );
}
