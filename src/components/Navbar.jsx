import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <motion.img
            src="/E LOGO.png"
            alt="Logo"
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-10 h-10"
          />
          <div className="leading-tight">
            <h1 className="font-extrabold text-gray-900 text-lg tracking-wide">
              Subham Kumar
            </h1>
            <p className="text-xs text-gray-500">
              Video Editor • Motion Designer
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-1 py-1 transition-all duration-300 ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-gray-600 hover:text-black"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-[3px] bg-black rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* CTA */}
          <NavLink
            to="/contact"
            className="relative px-6 py-2 rounded-xl bg-black text-white font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Hire Me
          </NavLink>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-all duration-300"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />

            <motion.nav
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg z-50 rounded-b-3xl"
            >
              <div className="px-6 py-6 flex flex-col gap-6 text-base font-medium">
                {links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block transition-all duration-200 ${
                        isActive
                          ? "text-black font-semibold"
                          : "text-gray-700 hover:text-black"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-2 text-center rounded-xl bg-black text-white font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Hire Me
                </NavLink>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
