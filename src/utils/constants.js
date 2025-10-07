// ✅ constants.js

export const constants = {
  SITE_NAME: "Subham kumar Bhargav Kumar",
  SITE_DESCRIPTION:
    "Professional Video Editor — cinematic edits, color grading, motion design.",
  SITE_KEYWORDS: "video editor, motion designer, color grading, promo reels",
  SITE_AUTHOR: "Subham kumar Bhargav Kumar",
  SOCIAL: {
    instagram: "https://instagram.com/yourprofile",
    vimeo: "https://vimeo.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
};

// ✅ Optional default export (so you can import without curly braces)
export default constants;

// ✅ Project data
export const projects = [
  {
    id: 1,
    title: "Brand Promo — CineCraft",
    duration: "0:45",
    poster: "poster1.jpeg",
    video: "/assets/videos/video1.mp4",
    description: "High-energy promo for a lifestyle brand.",
    tags: ["Promo", "Color Grade", "Motion"],
  },
  {
    id: 2,
    title: "Documentary — Roots",
    duration: "1:20",
    poster: "poster1.jpeg",
    video: "/assets/videos/video2.mp4",
    description: "Emotional, character-driven teaser.",
    tags: ["Documentary", "Story"],
  },
  // Add more projects as needed
];
