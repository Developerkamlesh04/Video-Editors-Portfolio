import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative max-w-7xl mx-auto px-6 py-20 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 text-yellow-400 mb-4">
          Let's Connect
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 drop-shadow-lg">
          Hire Me / Work With Me
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
          Available for freelance & contract work. Share your brief, and let's
          bring your vision to life with cinematic storytelling.
        </p>
      </motion.div>

      {/* Contact Grid */}
      <div className="grid gap-10 md:grid-cols-3 relative z-10">
        {/* Contact Info */}
        <motion.div
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/20 transition-all hover:-translate-y-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p className="text-gray-200 mb-6">
            Let's collaborate on your next cinematic project or brand film.
          </p>
          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-yellow-400" />
            <a
              href="mailto:Subham kumar Bhargav@example.com"
              className="text-gray-200 hover:text-yellow-400 transition-colors"
            >
              Subham kumar Bhargav@example.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-yellow-400" />
            <a
              href="tel:+919xxxxxxxxx"
              className="text-gray-200 hover:text-yellow-400 transition-colors"
            >
              +91 9xxxxxxxxx
            </a>
          </div>

          {/* Google Map */}
          <div className="mt-6 rounded-xl overflow-hidden border border-white/20 shadow-lg">
            <iframe
              title="Noida Sector 15 Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.123456789!2d77.323456!3d28.584567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a8c1234567%3A0xabcdef123456789!2sNoida%20Sector%2015!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="md:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/20 transition-all hover:-translate-y-2 grid gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-6">Send a Message</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Project Brief"
            className="w-full mt-4 p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          ></textarea>
          <button
            type="submit"
            className="mt-4 w-full py-3 rounded-md bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-black font-semibold hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
