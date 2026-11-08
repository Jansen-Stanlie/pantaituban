import { useTranslation } from "react-i18next";
import { NewsCard, PageHero } from "../Components/ui";
import { NEWS } from "../data/news";

export default function PostList() {
  const { t } = useTranslation();
  return (
    <>
      <PageHero img="/images/hero-bg2.jpg" title={t("news.pageTitle")} lead={t("news.pageLead")} />
      <section className="section">
        <div className="wrap news-grid is-list">
          {NEWS.map((post) => (
            <NewsCard key={post.title} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
