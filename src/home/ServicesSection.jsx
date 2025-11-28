import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Editing & Cutting",
    desc: "Narrative pacing, social edits, ads.",
  },
  {
    id: 2,
    title: "Color Grading",
    desc: "Film looks & broadcast-ready grades.",
  },
  {
    id: 3,
    title: "Motion Graphics",
    desc: "Titles, lower-thirds, animated logos.",
  },
  {
    id: 4,
    title: "VFX & Compositing",
    desc: "Green-screen, tracking, cleanup.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-24 md:py-32
        bg-white text-gray-900 overflow-hidden
      "
    >
      {/* Background Premium Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

      {/* Floating Abstract Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-50px] w-60 h-60 bg-purple-200/30 blur-3xl rounded-full" />
        <div className="absolute right-[-60px] bottom-10 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full" />
        <div className="absolute left-1/2 top-1/2 w-40 h-40 bg-gray-200/40 blur-2xl rounded-full" />
      </div>

      {/* Section Header */}
      <div className="text-center relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
            bg-white/50 backdrop-blur-xl border border-gray-200 shadow-lg
            text-gray-700 font-medium mb-4
          "
        >
          <Sparkles className="w-4 h-4 text-yellow-500" /> Premium Services
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            text-4xl md:text-5xl font-extrabold tracking-tight
            bg-clip-text text-transparent 
            bg-gradient-to-r from-black via-gray-700 to-gray-500
          "
        >
          What I Can Do For You
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            text-gray-600 max-w-2xl mx-auto mt-5 
            text-sm sm:text-base md:text-lg leading-relaxed
          "
        >
          Delivering high-end video editing, visual effects, color science, and
          motion graphics designed for brands, creators, and premium content.
        </motion.p>
      </div>

      {/* Premium Service Cards */}
      <div
        className="
        grid gap-8 sm:gap-10 
        sm:grid-cols-2 lg:grid-cols-4
        relative z-10
      "
      >
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="
              group relative rounded-3xl
              bg-white/80 backdrop-blur-xl 
              border border-gray-200
              p-6 sm:p-7 shadow-[0_8px_28px_rgba(0,0,0,0.06)]
              hover:shadow-[0_18px_40px_rgba(0,0,0,0.14)]
              hover:-translate-y-3 hover:scale-[1.03]
              transition-all duration-500
            "
          >
            {/* Card Title */}
            <h4
              className="
                font-semibold text-lg sm:text-xl mb-3
                bg-clip-text text-transparent 
                bg-gradient-to-r from-black via-gray-700 to-gray-500
              "
            >
              {s.title}
            </h4>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              {s.desc}
            </p>

            {/* Underline */}
            <div
              className="
              mt-4 w-12 h-[3px] 
              bg-gradient-to-r from-black to-gray-500 rounded-full
              transition-all duration-300 group-hover:w-20
            "
            />

            {/* Light Glow Accents */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-300/30 rounded-full blur-xl group-hover:scale-125 transition" />
            <div className="absolute bottom-4 -left-6 w-7 h-7 bg-gray-400/30 rounded-full blur-xl group-hover:scale-125 transition" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
