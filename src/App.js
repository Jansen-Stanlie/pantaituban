import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PostPage from "./Pages/Multipage/PostPage";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import PostDetails from "./Pages/PostDetails";
import PageNotFound from "./Components/404/PageNotFound";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="post/:postId" element={<PostDetails />} />
        <Route path="404" element={<PageNotFound />} />
        <Route path="post/postrecap" element={<PostPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
