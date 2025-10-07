import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

export default function MainLayout({ children }) {
  useScrollToTop();
  return (
    <div >
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
