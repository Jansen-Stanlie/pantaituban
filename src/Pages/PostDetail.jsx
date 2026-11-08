import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PageHero } from "../Components/ui";
import NotFound from "./NotFound";
import { fetchPost, formatDate, toParagraphs } from "../lib/api";
import { applyPostSeo, clearPostSeo } from "../seo";

export default function PostDetail() {
  const { t, i18n } = useTranslation();
  const { postId } = useParams();
  const [result, setResult] = useState({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    setResult({ status: "loading" });
    fetchPost(postId, controller.signal)
      .then((post) => setResult(post ? { status: "ready", post } : { status: "missing" }))
      .catch(() => {
        if (!controller.signal.aborted) setResult({ status: "error" });
      });
    return () => controller.abort();
  }, [postId]);

  useEffect(() => {
    if (result.status === "ready") {
      applyPostSeo({ title: result.post.title, description: result.post.excerpt, noindex: false });
    } else if (result.status === "missing") {
      applyPostSeo({ noindex: true });
    }
    return clearPostSeo;
  }, [result]);

  if (result.status === "missing") return <NotFound />;

  if (result.status !== "ready") {
    const failed = result.status === "error";
    return (
      <>
        <PageHero img="/images/hero-bg2.jpg" title={failed ? t("news.errorTitle") : t("news.loading")} />
        <section className="section">
          <div className="wrap article">
            {failed && (
              <>
                <p>{t("news.errorText")}</p>
                <Link to="/post/postrecap" className="btn btn-sea">
                  {t("news.backToList")}
                </Link>
              </>
            )}
          </div>
        </section>
      </>
    );
  }

  const { post } = result;
  const date = post.date ? formatDate(post.date, i18n.language) : "";
  const paragraphs = toParagraphs(post.body || post.excerpt);

  return (
    <>
      <PageHero
        img="/images/hero-bg2.jpg"
        title={post.title}
        meta={[post.author, date].filter(Boolean).join(" · ")}
      />
      <article className="section">
        <div className="wrap article">
          {post.img && <img src={encodeURI(post.img)} alt="" referrerPolicy="no-referrer" />}
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          <Link to="/post/postrecap" className="btn btn-sea">
            {t("news.backToList")}
          </Link>
        </div>
      </article>
    </>
  );
}
