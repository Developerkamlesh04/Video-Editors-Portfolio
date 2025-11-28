// Updated AboutSection with Pure White Background, Black Text, Premium Apple-like UI
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 py-20 bg-white text-black overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gray-300/20 rounded-full blur-2xl"></div>
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-block px-4 py-2 text-sm font-semibold rounded-full border border-black/10 text-black mb-4 bg-white shadow-sm">
          About Me
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black">
          Crafting Stories Through Motion
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          I’m a passionate{" "}
          <span className="font-semibold text-black">Video Editor</span>{" "}
          specializing in cinematic storytelling, brand films, and high-impact
          content.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {/* About Box */}
        <motion.div
          className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-black/10 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.12)] transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-black mb-4">Who I Am</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            With expertise in{" "}
            <span className="font-semibold text-black">Premiere Pro</span>,{" "}
            <span className="font-semibold text-black">After Effects</span>, and{" "}
            <span className="font-semibold text-black">DaVinci Resolve</span>, I
            craft immersive visuals with smooth transitions, refined color
            grading, and precision storytelling.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "4K & 60fps Delivery",
              "Proxy Workflows",
              "LUTs & Film Looks",
              "Social-ready Formats",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-black" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Testimonial Box */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl border border-black/10 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.12)] transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold text-black mb-4">
            Client Words
          </h4>

          <blockquote className="italic text-gray-700 relative pl-6">
            <FaQuoteLeft className="absolute left-0 top-0 text-black/40" />
            “Fast, creative, and reliable — delivered a cinematic promo that
            elevated our entire campaign.”
          </blockquote>

          <p className="mt-4 text-sm text-gray-500 text-right">
            — Producer, Film Agency
          </p>
        </motion.div>
      </div>
    </section>
  );
}
