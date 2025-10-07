import React, { useState } from "react";
import { constants } from "../utils/constants";
import { FaInstagram, FaVimeoV, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: constants.SOCIAL.instagram,
      color: "hover:text-pink-400",
    },
    {
      name: "Vimeo",
      icon: <FaVimeoV />,
      link: constants.SOCIAL.vimeo,
      color: "hover:text-cyan-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: constants.SOCIAL.linkedin,
      color: "hover:text-purple-400",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email!", {
        style: {
          background: "#ff4d6d",
          color: "#fff",
          fontWeight: "600",
          borderRadius: "8px",
        },
      });
      return;
    }
    toast.success("🎉 Subscribed Successfully!", {
      style: {
        background: "#FFD60A",
        color: "#000",
        fontWeight: "bold",
        borderRadius: "8px",
      },
    });
    setEmail("");
  };

  return (
    <footer className="relative bg-[#080808] text-white overflow-hidden mt-24 border-t border-white/10">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Animated Gradient Glows */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-yellow-400/20 via-pink-500/20 to-purple-700/20 rounded-full blur-[120px]"
        animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-yellow-400/20 rounded-full blur-[140px]"
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 relative z-10">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            About {constants.SITE_NAME}
          </h3>
          <p className="text-white/80 leading-relaxed">
            Professional Video Editor crafting cinematic stories through color,
            rhythm, and emotion — creating visuals that move people.
          </p>

          <div className="flex gap-5 mt-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className={`text-2xl transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.25, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* CENTER: Map with gradient border */}
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 shadow-[0_0_20px_rgba(255,255,0,0.2)]">
          <iframe
            className="w-full h-56 md:h-full rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019985305576!2d-122.41941548468191!3d37.77492927975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c0fdf27f7%3A0x3e43db6ef0c51738!2sSan%20Francisco!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>

        {/* RIGHT: Newsletter (Glassmorphic Card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-lg relative overflow-hidden"
        >
          <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Subscribe to Updates
          </h4>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-2 rounded-md bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-black font-semibold hover:shadow-[0_0_20px_rgba(255,255,0,0.3)] transition"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent mb-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 pb-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/70 gap-4 relative z-10">
        <span>
          © {new Date().getFullYear()} {constants.SITE_NAME}. All rights
          reserved.
        </span>
        <motion.a
          href="#top"
          className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
          whileHover={{ y: -3 }}
        >
          <FaArrowUp /> Back to Top
        </motion.a>
      </div>
    </footer>
  );
}
