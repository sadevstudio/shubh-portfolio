const BASE_URL =
  "https://pub-4f097b343ff84b1494195f279e309042.r2.dev";

const projectData = {
  slug: "Wildlife 3D Environment",
  title: "Wildlife 3D Environment",
  category: "CGI & 3D",
  shortDescription:
    "A fully crafted 3D forest environment created in Blender, featuring a detailed deer, natural vegetation, realistic lighting, and cinematic environmental composition.",

  thumbnail: `${BASE_URL}/Deer/thumbnail.png`,

  description:
    "Wildlife 3D Environment — The Deer is a complete Blender 3D environment project focused on creating a realistic and immersive forest scene. The scene brings together a detailed deer model, dense vegetation, trees, natural ground elements, atmospheric depth, and carefully designed lighting to recreate the feeling of a peaceful woodland environment. The project explores the process of building a complete 3D world around a central subject. From the initial scene setup and 3D modeling to vegetation placement, texturing, lighting, camera composition, and final rendering, every element is designed to work together as a cohesive environment.",

  gallery: [
    `${BASE_URL}/Deer/gallery01.png`,
    `${BASE_URL}/Deer/gallery02.png`,
    `${BASE_URL}/Deer/gallery03.png`,
    `${BASE_URL}/Deer/gallery04.png`,
    `${BASE_URL}/Deer/gallery05.png`,
  ],

  projectType: "CGI & 3D",
  software: ["Blender", "AfterEffect"],
  resolution: "1080x1920",
  format: "PNG",
  role: "CGI Artist",

  results: [
    {
      type: "video",
      src: `${BASE_URL}/Deer/Deer_Forest_animation.mp4`,
      aspectRatio: "16/9",
    },
  ],
};

export default projectData;