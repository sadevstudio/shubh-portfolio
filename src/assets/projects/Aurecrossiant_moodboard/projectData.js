import thumbnail from "./thumbnail.png";
import page_01 from "./page_01.png";
import page_02 from "./page_02.png";
import page_03 from "./page_03.png";
import page_04 from "./page_04.png";
import page_05 from "./page_05.png";
import page_06 from "./page_06.png";
import page_07 from "./page_07.png";
import page_08 from "./page_08.png";


const projectData = {
  slug: "Moodboard of Aure Crossiant",
  title: "Moodboard of Aure Crossiant",
  category: "BRAND IDENTITY",
  shortDescription: "The elegance of French baking and the warmth of handcrafted traditions. Built around the philosophy of creating memorable experiences through fresh, buttery, and beautifully layered pastries, the brand combines authentic craftsmanship with a refined contemporary aesthetic.",

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