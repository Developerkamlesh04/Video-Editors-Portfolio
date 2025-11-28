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
    },
    { name: "Vimeo", icon: <FaVimeoV />, link: constants.SOCIAL.vimeo },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: constants.SOCIAL.linkedin,
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
    <footer className="relative bg-black overflow-hidden mt-5 border-t border-gray-800">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 relative z-10 text-white">
        {/* LEFT: About + Social */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-bold tracking-wide">
            About Us...
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Crafting cinematic stories through video editing, color, rhythm, and
            emotion. Turning visions into compelling visuals that resonate.
          </p>
          <div className="flex gap-5 mt-3">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* CENTER: Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-gray-700 rounded-3xl p-8 flex flex-col gap-4 shadow-lg hover:shadow-2xl transition-all"
        >
          <h4 className="text-2xl font-bold mb-4">Subscribe to Updates</h4>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-xl bg-gray-800 text-white font-bold hover:bg-gray-700 transition"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT: Map */}
        <div className="relative rounded-3xl border border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all">
          <iframe
            className="w-full h-64 md:h-full rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019985305576!2d-122.41941548468191!3d37.77492927975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c0fdf27f7%3A0x3e43db6ef0c51738!2sSan%20Francisco!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>

      {/* Divider */}
      <div className="w-3/4 mx-auto h-px bg-gray-700/40 my-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 pb-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
        <span>
          © {new Date().getFullYear()} {constants.SITE_NAME}. All rights
          reserved.
        </span>
        <motion.a
          href="#top"
          className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors font-semibold"
          whileHover={{ y: -3 }}
        >
          <FaArrowUp /> Back to Top
        </motion.a>
      </div>
    </footer>
  );
}
