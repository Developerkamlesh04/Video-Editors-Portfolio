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
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl shadow-lg border-b border-purple-500/20"
          : "bg-[#0a0a0a]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <motion.img
            src="/E LOGO.png"
            alt="Logo"
            whileHover={{ rotate: 15, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-10 h-10 drop-shadow-xl"
          />
          <div className="leading-tight">
            <h1 className="font-extrabold text-white text-lg tracking-wide">
              Subham Kumar
            </h1>
            <p className="text-xs text-purple-300">
              Video Editor • Motion Designer
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-1 py-1 transition-all duration-300 hover:text-yellow-400 ${
                  isActive ? "text-yellow-400 font-semibold" : "text-white/80"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-purple-500 via-yellow-500 to-yellow-400 rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* CTA Button */}
          <NavLink
            to="/contact"
            className="relative px-6 py-2 rounded-2xl bg-gradient-to-r from-purple-500 via-yellow-500 to-yellow-400 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Hire Me
            <span className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(255,255,0,0.4)] animate-pulse"></span>
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition-all duration-300"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
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
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="fixed top-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-purple-500/20 shadow-lg z-50 rounded-b-3xl"
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
                          ? "text-yellow-400 font-semibold"
                          : "text-white/80 hover:text-yellow-400"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="relative px-6 py-2 text-center rounded-2xl bg-gradient-to-r from-purple-500 via-yellow-500 to-yellow-400 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  Hire Me
                  <span className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(255,255,0,0.4)] animate-pulse"></span>
                </NavLink>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
