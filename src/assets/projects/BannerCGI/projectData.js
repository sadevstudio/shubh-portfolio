const BASE_URL =
  "https://pub-4f097b343ff84b1494195f279e309042.r2.dev";

const projectData = {
  slug: "CGI Realism",
  title: "CGI Realism",
  category: "CGI & 3D",
  shortDescription:
    "A realistic 3D environment created in Blender, transforming a real-world-inspired city scene into a detailed CGI composition through modeling, lighting, texturing, and rendering.",

  thumbnail: `${BASE_URL}/BannerCGI/thumbnail.png`,

  description:
    "From Scene to Story is a Blender 3D environment project focused on recreating a believable urban setting with a strong emphasis on realism and visual storytelling. The scene combines detailed architectural elements, realistic materials, natural lighting, environmental details, and carefully composed camera framing to create a convincing city atmosphere. The project explores how a real-world-inspired location can be transformed into a fully designed 3D environment. From the initial modeling and texturing process to lighting, rendering, and final composition, every element is designed to demonstrate the potential of CGI in creating immersive and visually realistic spaces.",

  gallery: [
    `${BASE_URL}/BannerCGI/gallery1.png`,
    `${BASE_URL}/BannerCGI/gallery2.png`,
    `${BASE_URL}/BannerCGI/gallery3.png`,
    `${BASE_URL}/BannerCGI/gallery4.png`,
  ],

  projectType: "CGI & 3D",
  software: ["Blender", "AfterEffect"],
  resolution: "1080x1920",
  format: "PNG",
  role: "CGI Artist",

  results: [
    {
      type: "video",
      src: `${BASE_URL}/BannerCGI/Banner_building.mp4`,
      aspectRatio: "9/16",
    },
  ],
};

export default projectData;