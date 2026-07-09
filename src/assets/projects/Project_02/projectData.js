// import thumbnail from "./thumbnail.jpg";
// import resultImage from "./result.jpg";

// import gallery1 from "./gallery-1.jpg";
// import gallery2 from "./gallery-2.jpg";
// import gallery3 from "./gallery-3.jpg";
// import gallery4 from "./gallery-4.jpg";


// import resultVideo from "./video.mp4";

// export default {
//   slug: "the danveer karan",

//   title: "The Danveer Karan",

//   category: "Motion design",

//   shortDescription:
//     "An epic 3D animated short film inspired by the legendary warrior Karna, showcasing his honor, sacrifice, and unmatched generosity through cinematic storytelling",

//   description:
//     "The Danveer, Karan is a cinematic 3D animated short film that brings the legendary story of Karna to life through epic visuals, motion graphics, and immersive storytelling. Inspired by one of the most respected heroes of Indian mythology, the film highlights his courage, loyalty, sacrifice, and unwavering spirit of giving. With dramatic environments, powerful symbolism, and cinematic presentation, this project aims to celebrate the timeless legacy of a warrior whose honor continues to inspire generations.",

//   thumbnail,

//   heroImage: resultImage,

//   gallery: [
//     gallery1,
//     gallery2,
//     gallery3,
//     gallery4,
//   ],

//   resultImage,

//   video: resultVideo,
//   showreelVideo: resultVideo,

//   projectType: "Motion Design",

//   software: [
//     "After Effects",
//     "Photoshop",
//   ],

//   resolution: "1920x1080",

//   format: "MP4",

//   role: "Motion Designer & 3D Artist",
// };

import thumbnail from "./thumbnail.jpg";

import gallery1 from "./gallery-1.jpg";
import gallery2 from "./gallery-2.jpg";
import gallery3 from "./gallery-3.jpg";
import gallery4 from "./gallery-4.jpg";

import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";
import video4 from "./video4.mp4";

const projectData = {
  slug: "cinematic-love-story",
  title: "Cinematic Love Story",
  category: "MOTION DESIGN",
  shortDescription: "Love, connection, and the unforgettable moments that shape our lives. ❤️🎬",

  thumbnail: thumbnail,

  description:
    "Cinematic Love Story is a visually stunning 3D animated short film that explores the emotions of love, connection, and destiny...",

  gallery: [gallery1, gallery2, gallery3, gallery4],

  projectType: "Motion Design",
  software: ["After Effects", "Photoshop"],
  resolution: "1080x1920",
  format: "MP4",
  role: "Motion Designer & 3D Artist",

  // Portrait (1080x1920) videos auto-group 3-per-row.
  // Landscape (1920x1080) videos stack full-width, one per row.
  results: [
    { type: "video", src: video1, orientation: "portrait" },
    { type: "video", src: video2, orientation: "portrait" },
    { type: "video", src: video3, orientation: "portrait" },
    { type: "image", src: gallery4, orientation: "landscape" },
  ],
};

export default projectData;