import thumbnail from "./thumbnail.jpg";

import gallery1 from "./gallery-1.jpg";
import gallery2 from "./gallery-2.jpg";
import gallery3 from "./gallery-3.jpg";
import gallery4 from "./gallery-4.jpg";

import video from "./video.mp4";
// import video2 from "./video2.mp4";
// import video3 from "./video3.mp4";
// import video4 from "./video4.mp4";

const projectData = {
  slug: "the danveer karan",
  title: "The Danveer Karan",
  category: "MOTION DESIGN",
  shortDescription: "An epic 3D animated short film inspired by the legendary warrior Karna, showcasing his honor, sacrifice, and unmatched generosity through cinematic storytelling",

  thumbnail: thumbnail,

  description:
    "The Danveer, Karan is a cinematic 3D animated short film that brings the legendary story of Karna to life through epic visuals, motion graphics, and immersive storytelling. Inspired by one of the most respected heroes of Indian mythology, the film highlights his courage, loyalty, sacrifice, and unwavering spirit of giving. With dramatic environments, powerful symbolism, and cinematic presentation, this project aims to celebrate the timeless legacy of a warrior whose honor continues to inspire generations.",

  gallery: [gallery1, gallery2, gallery3, gallery4],

  projectType: "Motion Design",
  software: ["After Effects", "Photoshop"],
  resolution: "1920x1080",
  format: "MP4",
  role: "Motion Designer & 3D Artist",

  // Portrait (1080x1920) videos auto-group 3-per-row.
  // Landscape (1920x1080) videos stack full-width, one per row.
  results: [
    // { type: "video", src: video1, orientation: "portrait" },
    // { type: "video", src: video2, orientation: "portrait" },
    // { type: "video", src: video3, orientation: "portrait" },
    { type: "video", src: video, aspectRatio: "16/9" },
  ],
};

export default projectData;