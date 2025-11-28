import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Cinematic Short Film",
    description: "Color grading, VFX, and motion design.",
    link: "https://youtu.be/hPbkUaz_oZY",
    thumbnail: "https://img.youtube.com/vi/hPbkUaz_oZY/hqdefault.jpg",
    tags: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
  },
  {
    id: 3,
    title: "YouTube Edit",
    description: "Engaging YouTube content editing.",
    link: "https://youtu.be/qO865BBWs68",
    thumbnail: "https://img.youtube.com/vi/qO865BBWs68/hqdefault.jpg",
    tags: ["Premiere Pro", "DaVinci Resolve"],
  },
  {
    id: 4,
    title: "Travel Vlog Edit",
    description: "Exciting travel vlog compilation.",
    link: "https://youtu.be/K-lXmCzF1eo",
    thumbnail: "https://img.youtube.com/vi/K-lXmCzF1eo/hqdefault.jpg",
    tags: ["Premiere Pro", "Lightroom"],
  },
  {
    id: 5,
    title: "Product Launch Reel",
    description: "Commercial product promo video.",
    link: "https://youtube.com/shorts/qa3UAG4ptbQ?feature=share",
    thumbnail: "https://img.youtube.com/vi/qa3UAG4ptbQ/hqdefault.jpg",
    tags: ["After Effects", "Premiere Pro"],
  },
  {
    id: 6,
    title: "Event Coverage",
    description: "Capturing live event highlights.",
    link: "https://youtu.be/lS_g5GuTprU",
    thumbnail: "https://img.youtube.com/vi/lS_g5GuTprU/hqdefault.jpg",
    tags: ["Premiere Pro", "DaVinci Resolve"],
  },
  {
    id: 7,
    title: "YouTube Shorts Edit",
    description: "Quick engaging YouTube shorts content.",
    link: "https://youtube.com/shorts/bXW3er0q8hA?feature=share",
    thumbnail: "https://img.youtube.com/vi/bXW3er0q8hA/hqdefault.jpg",
    tags: ["Premiere Pro"],
  },
];

// Helper function to convert YouTube link to embed URL
const getEmbedURL = (url) => {
  const regExp =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{11})/;
  const match = url.match(regExp);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const WorkSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20 md:py-28 bg-white text-gray-900">
      {/* Header */}
      <div className="text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm shadow-sm"
        >
          My Work
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          A curated collection of my cinematic edits, brand reels, and creative
          video work.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => setActiveProject(project)}
            className="group relative bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-white px-4 py-2 rounded-full bg-black/50">
                  YouTube Preview →
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-full font-medium text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="px-4 py-2 bg-gray-900 text-white rounded-full shadow hover:bg-gray-700 transition">
                Preview
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  src={getEmbedURL(activeProject.link) + "?autoplay=1&mute=1"}
                  title={activeProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                ></iframe>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-gray-700">{activeProject.description}</p>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkSection;
