const BASE_URL =
  "https://pub-4f097b343ff84b1494195f279e309042.r2.dev";

const projectData = {
  slug: "CGI Automotive Showcase",
  title: "CGI Automotive Showcase",
  category: "CGI & 3D",
  shortDescription:
    "A cinematic Blender 3D project transforming a real-world city environment into a high-end automotive advertisement through realistic modeling, lighting, texturing, and rendering.",

  thumbnail: `${BASE_URL}/Suzuki/thumbnail.png`,

  description:
    "CGI Automotive Showcase is a Blender 3D environment and product visualization project that combines architectural realism with cinematic automotive design. The concept transforms a real-world-inspired urban building into a dramatic showroom, placing a premium red sports car at the center of the composition. The project explores how CGI can transform an ordinary environment into an engaging advertising scene. Detailed 3D modeling, realistic materials, atmospheric lighting, reflections, environmental integration, and carefully controlled composition work together to create a believable and visually striking result.",

  gallery: [
    `${BASE_URL}/Suzuki/gallery1.png`,
    `${BASE_URL}/Suzuki/gallery2.png`,
    `${BASE_URL}/Suzuki/gallery3.png`,
    `${BASE_URL}/Suzuki/gallery4.png`,
    `${BASE_URL}/Suzuki/gallery5.png`,

  ],

  projectType: "CGI & 3D",
  software: ["Blender", "AfterEffect"],
  resolution: "1920x1080",
  format: "PNG",
  role: "CGI Artist",

  results: [
    {
      type: "video",
      src: `${BASE_URL}/Suzuki/suzuki_1.mp4`,
      aspectRatio: "16/9",
    },
  ],
};

export default projectData;