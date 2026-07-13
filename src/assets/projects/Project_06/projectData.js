import thumbnail from "./thumbnail.jpg";
import video from "./video.mp4";
import gallery1 from "./gallery-1.jpg";
import gallery2 from "./gallery-2.jpg";
import gallery3 from "./gallery-3.jpg";
import gallery4 from "./gallery-4.jpg";

const projectData = {
  slug: "Baghdevi : goddess of knowledge",
  title: "Baghdevi : goddess of knowledge",
  category: "MOTION DESIGN",
  shortDescription: "A cinematic motion graphics project inspired by Goddess Saraswati, celebrating wisdom, knowledge, music, and artistic expression through elegant visuals and cultural storytelling.",

  thumbnail: thumbnail,

  description:
    "Goddess Saraswati is a motion graphics project inspired by the Hindu goddess of wisdom, learning, music, and the arts. Designed with a handcrafted artistic style, the animation blends traditional Indian aesthetics with modern motion design to create a visually immersive experience. Featuring symbolic elements such as the Veena, lotus, swans, and flowing waves, the project represents the harmony between creativity and knowledge. Rich textures, layered compositions, and smooth animations bring the artwork to life while preserving its spiritual and cultural essence, offering a cinematic tribute to one of India's most revered deities.",

  gallery: [gallery1, gallery2, gallery3, gallery4],

  projectType: "Motion Design",
  software: ["After Effects", "Photoshop"],
  resolution: "1080x1920",
  format: "MP4",
  role: "Motion Designer & 3D Artist",

  // Portrait (1080x1920) videos auto-group 3-per-row.
  // Landscape (1920x1080) videos stack full-width, one per row.
  results: [
    
    { type: "video", src: video, aspectRatio: "16/9" },
  ],
};

export default projectData;