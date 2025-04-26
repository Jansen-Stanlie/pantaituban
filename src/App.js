import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PostPage from "./Pages/Multipage/PostPage";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import PostDetails from "./Pages/PostDetails";
import PostDetailsNoSidebar from "./Pages/PostDetailsNoSidebar";
import PageNotFound from "./Components/404/PageNotFound";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {/* Layout will wrap the home, post details, and post recap routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post/:postId" element={<PostDetails />} />
        <Route path="post/postrecap" element={<PostPage />} />
        <Route path="post/postgaram" element={<PostDetailsNoSidebar />} />
      </Route>

      {/* 404 route should be outside Layout */}
      <Route path="404" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
