import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample data for projects
const projects = [
  {
    id: 1,
    title: "Cinematic Short Film",
    description: "Color grading, VFX, and motion design.",
    video: "/Video.mp4",
    tags: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
  },
  {
    id: 2,
    title: "Promo Reel",
    description: "Commercial promotional video for brand.",
    video: "/Video.mp4",
    tags: ["Premiere Pro", "After Effects"],
  },
  {
    id: 3,
    title: "YouTube Edit",
    description: "Engaging YouTube content editing.",
    video: "/Video.mp4",
    tags: ["Premiere Pro", "DaVinci Resolve"],
  },
];

const WorkSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-16 md:py-28 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 text-yellow-400 font-medium mb-4 drop-shadow-md text-sm md:text-base"
        >
          My Work
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 drop-shadow-lg leading-tight animate-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Selected Projects
        </motion.h2>

        <motion.p
          className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Showcasing my cinematic edits, promotional reels, and YouTube content
          projects with professional post-production work.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-105 transition-all duration-400 cursor-pointer"
            onClick={() => setActiveProject(project)}
          >
            {/* Video Thumbnail Container */}
            <div className="relative w-full rounded-xl overflow-hidden mb-4 bg-black">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-48 sm:h-56 md:h-60 object-contain bg-black transition-opacity duration-300"
              />
            </div>

            {/* Project Info */}
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-yellow-500 to-yellow-400 font-bold text-lg sm:text-xl md:text-xl mb-2 drop-shadow-xl px-3">
              {project.title}
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm md:text-sm leading-relaxed px-3">
              {project.description}
            </p>

            {/* Project Tags */}
            <div className="flex flex-wrap gap-2 mt-3 px-3">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-purple-500/20 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 px-3 pb-3">
              <span className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 drop-shadow-lg text-black px-3 sm:px-4 py-2 rounded-md font-medium text-xs sm:text-sm md:text-sm">
                Click to Preview
              </span>
            </div>

            {/* Floating glow effects */}
            <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/30 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-3 -left-4 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400/20 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <video
              src={activeProject.video}
              autoPlay
              muted
              controls
              loop
              playsInline
              className="w-full h-auto max-h-[80vh] object-contain bg-black"
            />
            <div className="p-5 text-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                {activeProject.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {activeProject.description}
              </p>
            </div>
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
