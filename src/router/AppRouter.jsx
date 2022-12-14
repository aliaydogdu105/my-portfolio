import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
