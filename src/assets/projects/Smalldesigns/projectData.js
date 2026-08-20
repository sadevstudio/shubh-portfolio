const BASE_URL =
  "https://pub-4f097b343ff84b1494195f279e309042.r2.dev";

const projectData = {
  slug: "Small Designs, Bigger Stories",
  title: "Small Designs, Bigger Stories",
  category: "ILLUSTRATION",
  shortDescription:
    "A colorful flat-art illustration project featuring playful icons, everyday objects, and creative characters designed to make simple ideas more engaging and visually memorable.",

  thumbnail: `${BASE_URL}/Smalldesigns/thumbnail.png`,

  // No description, no gallery — those sections auto-hide.

  projectType: "ILLUSTRATION",
  software: ["Illustrator"],
  resolution: "1080x1350",
  format: "PNG",
  role: "Visual Designer",

  results: [
    {
      type: "image",
      src: `${BASE_URL}/Smalldesigns/001.jpg`,
      aspectRatio: "851/1123",
    },
    {
      type: "image",
      src: `${BASE_URL}/Smalldesigns/002.jpg`,
      aspectRatio: "851/1123",
    },
    {
      type: "image",
      src: `${BASE_URL}/Smalldesigns/003.jpg`,
      aspectRatio: "851/1123",
    },
    {
      type: "image",
      src: `${BASE_URL}/Smalldesigns/004.jpg`,
      aspectRatio: "851/1123",
    },
    {
      type: "image",
      src: `${BASE_URL}/Smalldesigns/005.jpg`,
      aspectRatio: "851/1123",
    },
    {
      type: "image",
      src: `${BASE_URL}/Smalldesigns/006.jpg`,
      aspectRatio: "851/1123",
    },
  ],
};

export default projectData;