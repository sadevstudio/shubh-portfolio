
import thumbnail from "./thumbnail.png";
import page_01 from "./page_01.jpg";
import page_02 from "./page_02.jpg";
import page_03 from "./page_03.jpg";
import page_04 from "./page_04.jpg";

const projectData = {
  slug: "Mayoor school",
  title: "Mayoor school",
  category: "SOCIAL MEDIA",
  shortDescription: "A modern social media designed for Mayoor School, featuring engaging Instagram posts that promote admissions, academic excellence, and student success through creative visual storytelling.",

  thumbnail: thumbnail,

  // No description, no gallery — those sections auto-hide.

  projectType: "SOCIAL MEDIA",
  software: ["Photoshop", "Illustrator"],
  resolution: "1080x1350",
  format: "JPG",
  role: "graphic Designer",

  // Required — the one full-size image with all details visible
  results: [
    // { type: "image", src: thumbnail, orientation: "landscape" },
    
    { type: "image", src: page_02, aspectRatio: "1/1.25" },
    { type: "image", src: page_01, aspectRatio: "1/1.25" },
    { type: "image", src: page_03, aspectRatio: "1/1.25" },
    { type: "image", src: page_04, orientation: "landscape" },

  ],
};

export default projectData;