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
    <section className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      {/* Floating Gradient Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-300/10 rounded-full blur-2xl animate-pulse pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      {/* Section Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-gray-100 text-gray-700 mb-4 shadow-md">
          Testimonials
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent 
        bg-gradient-to-r from-gray-600 via-gray-800 to-black"
        >
          What Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
          Hear from directors, producers, and creators who’ve trusted me to
          bring their vision to life with cinematic precision.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
            }}
            className="relative bg-white border border-gray-200 p-8 rounded-3xl shadow-lg hover:border-gray-300 transition-all duration-300 group"
          >
            {/* Top Quote Icon */}
            <div className="flex justify-between items-start mb-4">
              <FaQuoteLeft className="text-yellow-500 text-2xl opacity-80" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-500 text-sm" />
                ))}
              </div>
            </div>

            {/* Testimonial Text with gradient */}
            <p
              className="italic leading-relaxed mb-6 text-gray-800 bg-clip-text text-transparent 
            bg-gradient-to-b from-gray-600 via-gray-800 to-black group-hover:from-gray-700 group-hover:to-black transition duration-300"
            >
              “{t.text}”
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="font-medium text-gray-900 text-sm">
                — {t.author}
              </div>
              <FaQuoteRight className="text-yellow-400 opacity-50 text-lg" />
            </div>

            {/* Subtle Hover Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-100/0 via-yellow-100/20 to-yellow-100/0 opacity-0 group-hover:opacity-20 transition duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
