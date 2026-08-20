const BASE_URL =
  "https://pub-4f097b343ff84b1494195f279e309042.r2.dev";

const projectData = {
  slug: "Blinkit",
  title: "Blinkit",
  category: "SOCIAL MEDIA",
  shortDescription:
    "A bold Blinkit social media campaign showcasing speed, convenience, and everyday deliveries through three vibrant, high-energy creative visuals.",

  thumbnail: `${BASE_URL}/Blinkit/Thumbnail.png`,

  // No description, no gallery — those sections auto-hide.

  projectType: "SOCIAL MEDIA",
  software: ["Photoshop", "Illustrator"],
  resolution: "1080x1350",
  format: "PNG",
  role: "Visual Designer",

  results: [
    {
      type: "image",
      src: `${BASE_URL}/Blinkit/02.jpeg`,
      aspectRatio: "1/1.25",
    },
    {
      type: "image",
      src: `${BASE_URL}/Blinkit/WhatsApp Image 2026-08-19 at 1.05.04 AM.jpeg`,
      aspectRatio: "1/1.25",
    },
    {
      type: "image",
      src: `${BASE_URL}/Blinkit/ChatGPT Image Aug 19, 2026, 01_45_00 AM.png`,
      aspectRatio: "1/1.25",
    },
    {
      type: "image",
      src: `${BASE_URL}/Blinkit/blinkit image.png`,
      orientation: "landscape",
    },
    
    
  ],
};

export default projectData;