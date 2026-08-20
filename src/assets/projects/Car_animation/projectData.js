const BASE_URL =
  "https://pub-4f097b343ff84b1494195f279e309042.r2.dev";

const projectData = {
  slug: "Automotive 3D",
  title: "Automotive 3D",
  category: "CGI & 3D",
  shortDescription:
    "A fully crafted 3D automotive environment created in Blender, featuring a detailed sports car, bridge, cityscape, sunset lighting, materials, and cinematic composition.",

  thumbnail: `${BASE_URL}/Car_animation/thumbnail.png`,

  description:
    "Automotive 3D — From Scene to Story is a complete 3D environment project created in Blender, where the entire scene is built and designed as a unified 3D world. The project brings together a detailed sports car, architectural environment, bridge structure, road surface, city elements, lighting, materials, and atmospheric details to create a cinematic automotive experience. The focus of the project is not simply rendering a vehicle, but building the complete 3D scene from the ground up and carefully designing how every element works together. From modeling and scene composition to materials, lighting, reflections, camera placement, and final rendering, the project demonstrates a full 3D production workflow.",

  gallery: [
    `${BASE_URL}/Car_animation/gallery01.png`,
    `${BASE_URL}/Car_animation/gallery02.png`,
    `${BASE_URL}/Car_animation/gallery03.png`,
    `${BASE_URL}/Car_animation/gallery04.png`,
    `${BASE_URL}/Car_animation/gallery05.png`,
    `${BASE_URL}/Car_animation/gallery06.png`,
  ],

  projectType: "CGI & 3D",
  software: ["Blender", "AfterEffect"],
  resolution: "1080x1920",
  format: "PNG",
  role: "CGI Artist",

  results: [
    {
      type: "video",
      src: `${BASE_URL}/Car_animation/car_animation.mp4`,
      aspectRatio: "16/9",
    },
  ],
};

export default projectData;