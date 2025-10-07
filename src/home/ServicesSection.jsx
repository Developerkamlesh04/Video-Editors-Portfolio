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
      className="relative max-w-7xl mx-auto px-6 py-28 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Floating neon particles */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute w-2 h-2 bg-purple-500/50 rounded-full animate-bounce top-10 left-20"></span>
        <span className="absolute w-3 h-3 bg-yellow-400/30 rounded-full animate-pulse top-40 right-16"></span>
        <span className="absolute w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-bounce bottom-20 left-1/3"></span>
      </div>

      {/* Section Header */}
      <div className="text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 text-yellow-400 font-medium mb-4 drop-shadow-md"
        >
          <Sparkles className="w-4 h-4" /> What I Do
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 drop-shadow-lg"
        >
          Services I Offer
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Helping brands and creators tell visual stories through impactful
          edits and creative visuals.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-400"
          >
            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-yellow-500 to-yellow-400 font-bold text-lg mb-3 drop-shadow-xl">
              {s.title}
            </h4>
            <p className="text-gray-200 text-sm leading-relaxed">{s.desc}</p>

            {/* Animated underline */}
            <div className="mt-4 w-12 h-[3px] bg-gradient-to-r from-purple-500 via-yellow-500 to-yellow-400 rounded-full transition-all duration-300 group-hover:w-20"></div>

            {/* Floating glow effects */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-4 -left-6 w-6 h-6 bg-yellow-400/20 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
