import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import PostDetails from "./Pages/PostDetails";
import PageNotFound from "./Components/404/PageNotFound";
import DoctorProfilePage from "./Pages/DoctorProfilePage";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/doctor-profile" element={<DoctorProfilePage />} />
        <Route path="post/:postId" element={<PostDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
