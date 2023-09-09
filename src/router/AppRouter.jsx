import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, ContactPage, SolutionsPage } from "../pages";
import { Home } from "../pages/";
import BlogPage from "../pages/BlogPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
