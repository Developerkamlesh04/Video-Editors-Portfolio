import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "Great communication and stunning color grade that elevated the visuals beyond expectation.",
    author: "Director",
    rating: 5,
  },
  {
    id: 2,
    text: "Quick turnaround and excellent rhythm — perfectly synced with the brand’s tone and music.",
    author: "Producer",
    rating: 5,
  },
  {
    id: 3,
    text: "Every frame was cinematic! Loved the storytelling and attention to detail.",
    author: "Content Creator",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Section Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 text-yellow-400 mb-4 shadow-md">
          Testimonials
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 drop-shadow-md">
          What Clients Say
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
          Hear from directors, producers, and creators who’ve trusted me to
          bring their vision to life with cinematic precision.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(255,255,255,0.08)",
            }}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg hover:border-yellow-400/30 transition-all duration-300 group"
          >
            {/* Top Quote Icon */}
            <div className="flex justify-between items-start mb-4">
              <FaQuoteLeft className="text-yellow-400 text-xl opacity-80" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400 text-sm" />
                ))}
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-200 italic leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
              “{t.text}”
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="text-yellow-400 text-sm font-medium">
                — {t.author}
              </div>
              <FaQuoteRight className="text-purple-500 opacity-40 text-lg" />
            </div>

            {/* Glow Hover Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
