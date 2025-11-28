import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <header className="relative bg-white text-gray-900 py-7 md:py-2.5 overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-100 pointer-events-none" />

      {/* Floating Glass Blobs */}
      <div className="absolute -top-10 -left-20 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white/40 backdrop-blur-2xl rounded-full shadow-2xl" />
      <div className="absolute bottom-[-120px] right-[-60px] w-72 h-72 sm:w-96 sm:h-96 lg:w-[520px] lg:h-[520px] bg-white/30 backdrop-blur-3xl rounded-full shadow-2xl" />

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-7 text-center md:text-left"
        >
          <div className="space-y-2">
            <p className="uppercase tracking-widest text-sm text-gray-400">
              Professional Portfolio
            </p>

            <h1 className="text-[clamp(2.6rem,5vw,4.8rem)] font-black text-gray-900 leading-tight">
              Premium Video
              <span className="block bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
                Editing Expert
              </span>
            </h1>
          </div>

          <p className="text-xl text-gray-600 font-light">
            I’m a{" "}
            <TypeAnimation
              sequence={[
                "Cinematic Editor",
                2000,
                "Color Grade Specialist",
                2000,
                "Storytelling Artist",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-gray-900 font-medium"
            />
          </p>

          <p className="text-gray-500 max-w-xl leading-relaxed mx-auto md:mx-0">
            Hi, I’m a video editor who loves turning simple moments into
            powerful stories. From reels to professional brand videos—my focus
            is creativity, clarity, and quality.”
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 rounded-2xl bg-black text-white font-semibold shadow-md hover:bg-gray-800 transition"
            >
              View Portfolio →
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 rounded-2xl border border-gray-300 bg-white font-semibold hover:bg-gray-100 transition shadow-sm"
            >
              Contact Me
            </motion.a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-400 pt-6">
            {[
              { icon: <FaInstagram />, link: "https://instagram.com" },
              { icon: <FaYoutube />, link: "https://youtube.com" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#000" }}
                className="transition"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE – 3D Tilt Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center md:justify-end relative"
        >
          <div className="relative transform-gpu transition-all duration-500 hover:rotate-1 hover:-rotate-y-3 hover:scale-[1.03]">
            <div className="absolute inset-0 rounded-3xl bg-black/10 blur-xl shadow-2xl"></div>

            <img
              src="editor.png"
              alt="Video Editor Working"
              className="relative w-60 sm:w-60 md:w-72 lg:w-96 rounded-3xl object-cover shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
