const BASE_URL =
  "https://pub-4f097b343ff84b1494195f279e309042.r2.dev";

const projectData = {
  slug: "CGI Tennis Court Visualization",
  title: "CGI Tennis Court Visualization",
  category: "CGI & 3D",
  shortDescription:
    "A creative Blender 3D project transforming a tennis court into a dynamic visual scene, combining realistic materials, lighting, 3D modeling, and cinematic composition.",

  thumbnail: `${BASE_URL}/Tennis/thumbnail.png`,

  description:
    "CGI Tennis Court Visualization is a Blender-based 3D environment project that reimagines a tennis court through a bold and stylized visual approach. The scene uses a vibrant red court, floating tennis balls, illuminated court markings, and dramatic lighting to create an energetic and visually engaging composition. The project explores how familiar real-world spaces can be transformed into creative CGI environments. Detailed modeling, material design, lighting, reflections, depth of field, and carefully positioned elements work together to create a polished cinematic presentation.",

  gallery: [
    `${BASE_URL}/Tennis/gallery01.png`,
    `${BASE_URL}/Tennis/gallery02.png`,
    `${BASE_URL}/Tennis/gallery03.png`,
    `${BASE_URL}/Tennis/gallery04.png`,
  ],

  projectType: "CGI & 3D",
  software: ["Blender", "AfterEffect"],
  resolution: "1080x1920",
  format: "PNG",
  role: "CGI Artist",

  results: [
    {
      type: "video",
      src: `${BASE_URL}/Tennis/Ball_animation.mp4`,
      aspectRatio: "9/16",
    },
  ],
};

export default projectData;