import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Direct imports
import Home from "../pages/Home";
import Work from "../pages/Work";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Suspense
      fallback={<div className="p-8 text-center text-gray-700">Loading...</div>}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
