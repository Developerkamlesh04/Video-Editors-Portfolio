import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

export default function MainLayout({ children }) {
  useScrollToTop(); // custom hook to scroll to top on route change

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
