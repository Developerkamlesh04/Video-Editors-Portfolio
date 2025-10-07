import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 1], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 1], [-8, 8]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Subham Kumar",
    jobTitle: "Video Editor",
    url: "https://your-site.example",
    sameAs: [
      "https://instagram.com/your-profile",
      "https://youtube.com/your-channel",
      "https://linkedin.com/in/your-profile",
    ],
    description:
      "Cinematic video editor specializing in storytelling, color grading, and motion design for creators and brands.",
  };

  return (
    <header
      role="banner"
      aria-label="Hero - Subham Kumar, Video Editor"
      className="relative overflow-hidden bg-[#080808] text-white py-10 sm:py-14 md:py-18"
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Floating Gradient Layers */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-yellow-400/30 to-purple-500/30 blur-[150px]"
          animate={
            !reduceMotion ? { x: [0, 50, -50, 0], y: [0, -30, 30, 0] } : {}
          }
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-500/30 to-purple-700/30 blur-[120px]"
          animate={
            !reduceMotion ? { x: [0, -40, 40, 0], y: [0, 40, -40, 0] } : {}
          }
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6 sm:space-y-8"
        >
          <h1 className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold leading-tight">
            <span className="block">VIDEO</span>
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_18px_rgba(255,255,0,0.4)]"
            >
              EDITOR
            </motion.span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-light">
            I’m a{" "}
            <TypeAnimation
              sequence={[
                "Cinematic Storyteller",
                2000,
                "Color Grading Expert",
                2000,
                "Motion Designer",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="text-yellow-400 font-medium"
            />
          </p>

          <p className="text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Crafting unforgettable visuals with storytelling flow, color
            precision, and emotional impact for creators & brands.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05, x: 3, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-[0_0_20px_rgba(255,255,0,0.4)] transition"
            >
              View Work →
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, x: 3, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border border-gray-600 hover:bg-white hover:text-black transition"
            >
              Get In Touch
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-gray-400 mt-6">
            {[
              { icon: <FaInstagram />, link: "https://instagram.com" },
              { icon: <FaYoutube />, link: "https://youtube.com" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, color: "#facc15" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-gray-500 italic text-sm mt-3">— Subham Kumar</p>
        </motion.div>

        {/* RIGHT SECTION (IMAGE + TAGS) */}
        <motion.figure
          role="img"
          aria-label="Subham editing on laptop"
          className="relative flex justify-center md:justify-end"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX.set((e.clientX - rect.left) / rect.width);
            mouseY.set((e.clientY - rect.top) / rect.height);
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-200 via-pink-200 to-yellow-100 opacity-20 blur-3xl pointer-events-none" />

          <motion.div
            style={{ rotateX, rotateY }}
            className=""
          >
            <img
              src="editor.png"
              alt="Subham editing on laptop"
              loading="lazy"
              className="w-56 sm:w-64 md:w-80 lg:w-96 rounded-[2rem] object-cover border border-white/20 hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Floating Skill Tags */}
          <motion.span
            className="hidden sm:inline-flex absolute -top-8 -left-8 bg-yellow-400 text-black font-bold px-3 py-1.5 rounded-full text-xs shadow-[0_0_12px_rgba(255,255,0,0.6)] rotate-[-8deg]"
            animate={!reduceMotion ? { y: [0, -6, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2.2 }}
          >
            ⚡ COLOR GRADING
          </motion.span>

          <motion.span
            className="hidden sm:inline-flex absolute top-1/2 -right-10 bg-pink-500 text-white font-bold px-3 py-1.5 rounded-full text-xs shadow-[0_0_12px_rgba(255,0,255,0.6)] rotate-[6deg]"
            animate={!reduceMotion ? { y: [0, 6, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2.4 }}
          >
            🎞️ MOTION DESIGN
          </motion.span>

          <motion.span
            className="hidden md:inline-flex absolute bottom-8 -left-6 bg-cyan-400 text-black font-bold px-3 py-1.5 rounded-full text-xs shadow-[0_0_12px_rgba(0,255,255,0.6)] rotate-[4deg]"
            animate={!reduceMotion ? { y: [0, 6, 0] } : {}}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🎬 STORY EDITING
          </motion.span>

          {/* Watch Reel */}
          <motion.a
            href="#reel"
            className="absolute -bottom-10 right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full shadow-[0_0_25px_rgba(255,255,0,0.6)] hover:scale-110 transition"
            animate={!reduceMotion ? { y: [0, -6, 0] } : {}}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            ▶ Watch Reel
          </motion.a>
        </motion.figure>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm"
        aria-hidden
      >
        <span className="inline-block animate-bounce">↓</span> Scroll
      </div>
    </header>
  );
}
