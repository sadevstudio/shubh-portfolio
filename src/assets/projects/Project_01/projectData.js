
import thumbnail from "./thumbnail.jpg";
import video from "./video.mp4";
import gallery1 from "./gallery-1.jpg";
import gallery2 from "./gallery-2.jpg";
import gallery3 from "./gallery-3.jpg";
import gallery4 from "./gallery-4.jpg";

const projectData = {
  slug: "cinematic Love story",
  title: "Cinematic Love Story",
  category: "MOTION DESIGN",
  shortDescription: "A cinematic 3D animated love story that captures the beauty of unexpected connections, heartfelt conversations, and unforgettable moments. A visual journey through emotions, memories, and the magic of love.",

  thumbnail: thumbnail,

  description:
    "Cinematic Love Story is a visually stunning 3D animated short film that explores the emotions of love, connection, and destiny. Set against a breathtaking cityscape bathed in warm sunset hues, the story follows two souls whose journey unfolds through meaningful moments, silent emotions, and heartfelt conversations. This project combines cinematic storytelling, detailed 3D environments, character animation, atmospheric lighting, and emotional visual design to create an immersive experience. Every frame is crafted to evoke feelings of warmth, nostalgia, hope, and romance.",

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