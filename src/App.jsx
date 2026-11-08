import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import PostList from "./Pages/PostList";
import ArticleAwards from "./Pages/ArticleAwards";
import ArticleGaram from "./Pages/ArticleGaram";
import PostDetail from "./Pages/PostDetail";
import NotFound from "./Pages/NotFound";
import { applySeo } from "./seo";

export default function App() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(null);

  useEffect(() => {
    applySeo(pathname);
  }, [pathname]);

  useEffect(() => {
    const samePage = previousPath.current === pathname;
    const isFirstRender = previousPath.current === null;
    previousPath.current = pathname;

    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      // Lompat langsung saat pindah halaman supaya scroll anchoring browser
      // bisa menahan posisi ketika data API mengubah tinggi konten.
      target.scrollIntoView({ behavior: samePage ? "smooth" : "instant" });
    } else if (!isFirstRender) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash, key]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post/postrecap" element={<PostList />} />
        <Route path="post/gst" element={<ArticleGaram />} />
        <Route path="post/post_details" element={<ArticleAwards />} />
        <Route path="post/:postId" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
