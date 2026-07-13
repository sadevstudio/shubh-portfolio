import thumbnail from "./thumbnail.jpg";
import video from "./video.mp4";


const projectData = {
  slug: "Cosmic Tandava",
  title: "Cosmic Tandava",
  category: "MOTION DESIGN",
  shortDescription: "A cinematic motion graphics project inspired by Lord Shiva's divine Tandava, portraying the cosmic cycle of creation, preservation, and destruction through powerful visuals and spiritual symbolism.",

  thumbnail: thumbnail,

  description:
    "Cosmic Tandava: The Dance of Lord Shiva is a motion graphics and visual storytelling project that captures the divine energy and spiritual significance of Lord Shiva's celestial dance. Inspired by Hindu mythology, the project portrays Shiva as the cosmic force governing creation, transformation, and destruction. Through dramatic compositions, atmospheric effects, and symbolic elements such as the Trishul, Damru, and sacred lotus, the animation creates a powerful visual experience that reflects the balance of the universe. The project blends mythology, spirituality, and cinematic design to present an artistic interpretation of one of the most iconic forms of Lord Shiva.",

  
  projectType: "Motion Design",
  software: ["After Effects", "Photoshop"],
  resolution: "1920x1080",
  format: "MP4",
  role: "Motion Designer & 3D Artist",

  // Portrait (1080x1920) videos auto-group 3-per-row.
  // Landscape (1920x1080) videos stack full-width, one per row.
  results: [
    
    { type: "video", src: video, aspectRatio: "16/9" },
  ],
};

export default projectData;