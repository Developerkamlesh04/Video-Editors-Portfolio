import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900"
    >
      {/* Floating Gradient Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-300/10 rounded-full blur-2xl animate-pulse -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      {/* Header */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-yellow-300 to-yellow-200 text-gray-900 shadow-md mb-4">
          Let's Connect
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 drop-shadow-md">
          Hire Me / Work With Me
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg md:text-xl">
          Available for freelance & contract work. Share your brief, and let's
          bring your vision to life with cinematic storytelling.
        </p>
      </motion.div>

      {/* Contact Grid */}
      <div className="grid gap-10 md:grid-cols-3 relative z-10">
        {/* Contact Info */}
        <motion.div
          className="relative bg-white/50 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-lg hover:shadow-yellow-300/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Contact Info
          </h3>
          <p className="text-gray-700 mb-6">
            Let's collaborate on your next project or brand film.
          </p>

          <div className="flex items-center gap-3 mb-3 group-hover:text-yellow-500 transition-colors">
            <FaEnvelope className="text-gray-800 group-hover:text-yellow-500" />
            <a
              href="mailto:example@example.com"
              className="text-gray-700 hover:text-yellow-500 transition-colors break-words"
            >
              example@example.com
            </a>
          </div>

          <div className="flex items-center gap-3 mb-6 group-hover:text-yellow-500 transition-colors">
            <FaPhoneAlt className="text-gray-800 group-hover:text-yellow-500" />
            <a
              href="tel:+919xxxxxxxxx"
              className="text-gray-700 hover:text-yellow-500 transition-colors"
            >
              +91 9xxxxxxxxx
            </a>
          </div>

          {/* Google Map */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
            <iframe
              title="Noida Sector 15 Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.123456789!2d77.323456!3d28.584567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a8c1234567%3A0xabcdef123456789!2sNoida%20Sector%2015!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/10 via-purple-200/20 to-pink-200/10 opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-3xl pointer-events-none"></div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="md:col-span-2 relative bg-white/50 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-lg hover:shadow-yellow-300/20 hover:-translate-y-2 transition-all duration-500 grid gap-4 group overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Send a Message
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/30 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl bg-white/30 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
          <textarea
            rows={5}
            placeholder="Project Brief"
            className="w-full mt-4 p-4 rounded-xl bg-white/30 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          ></textarea>
          <button
            type="submit"
            className="mt-4 w-full py-4 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 text-gray-900 font-bold hover:scale-105 hover:shadow-lg transition-transform"
          >
            Send Message
          </button>

          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/10 via-purple-200/20 to-pink-200/10 opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-3xl pointer-events-none"></div>
        </motion.form>
      </div>
    </section>
  );
}
