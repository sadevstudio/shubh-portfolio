
import thumbnail from "./thumbnail.png";
import page_01 from "./page_01.jpg";
import page_02 from "./page_02.jpg";
import page_03 from "./page_03.jpg";
import page_04 from "./page_04.jpg";
import page_05 from "./page_05.jpg";
import page_06 from "./page_06.jpg";
import page_07 from "./page_07.jpg";
import page_08 from "./page_08.jpg";


const projectData = {
  slug: "Moodboard of Scoovia",
  title: "Moodboard of Scoovia",
  category: "BRAND IDENTITY",
  shortDescription: "Scoovia is a premium handcrafted ice cream brand inspired by the joy of sharing sweet moments and the magic hidden inside every scoop. Built around the philosophy of turning everyday treats into unforgettable experiences, Scoovia combines high-quality ingredients, playful creativity, and a modern visual identity to create an ice cream brand that feels both joyful and premium. ",

  thumbnail: thumbnail,

  // No description, no gallery — those sections auto-hide.

  projectType: "Brand Identity",
  software: ["Photoshop", "Illustrator"],
  resolution: "1920x1080",
  format: "JPG",
  role: "visual Designer",

  // Required — the one full-size image with all details visible
  results: [
    // { type: "image", src: thumbnail, orientation: "landscape" },
    { type: "image", src: page_01, orientation: "landscape" },
    { type: "image", src: page_02, orientation: "landscape" },
    { type: "image", src: page_03, orientation: "landscape" },
    { type: "image", src: page_04, orientation: "landscape" },
    { type: "image", src: page_05, orientation: "landscape" },
    { type: "image", src: page_06, orientation: "landscape" },
    { type: "image", src: page_07, orientation: "landscape" },
    { type: "image", src: page_08, orientation: "landscape" },
  ],
};

export default projectData;