import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 py-20 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Glow background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl"></div>
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 text-yellow-400 mb-4">
          About Me
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 drop-shadow-md">
          Crafting Stories Through Motion
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          I’m a passionate <span className="text-yellow-400">Video Editor</span>{" "}
          specializing in cinematic storytelling, brand films, and fast-turn
          social content. Every frame I edit is designed to evoke emotion and
          capture attention.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {/* About Details */}
        <motion.div
          className="md:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/10 transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-yellow-500 to-yellow-400 mb-4">
            Who I Am
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            With expertise in{" "}
            <span className="text-yellow-400">Premiere Pro</span>,{" "}
            <span className="text-yellow-400">After Effects</span>, and{" "}
            <span className="text-yellow-400">DaVinci Resolve</span>, I bring
            visuals to life through smooth transitions, stunning color grading,
            and storytelling precision.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "4K & 60fps Delivery",
              "Proxy Workflows",
              "LUTs & Film Looks",
              "Social-ready Formats",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-300">
                <FaCheckCircle className="text-yellow-400" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/10 transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold text-yellow-400 mb-4">
            Client Words
          </h4>

          <blockquote className="italic text-gray-300 relative pl-6">
            <FaQuoteLeft className="absolute left-0 top-0 text-purple-400 opacity-60" />
            “Fast, creative, and reliable — delivered a fantastic promo that
            elevated our campaign visuals.”
          </blockquote>

          <p className="mt-4 text-sm text-gray-400 text-right">
            — Producer, Film Agency
          </p>
        </motion.div>
      </div>
    </section>
  );
}
