// import thumbnail from "./thumbnail.jpg";
// import resultImage from "./result.jpg";

// import gallery1 from "./gallery-1.jpg";
// import gallery2 from "./gallery-2.jpg";
// import gallery3 from "./gallery-3.jpg";
// import gallery4 from "./gallery-4.jpg";


// import resultVideo from "./video.mp4";

// export default {
//   slug: "the kraken's awakening",

//   title: "The Kraken's Awakening",

//   category: "Motion design",

//   shortDescription:
//     "A cinematic motion graphics project depicting a legendary sea voyage interrupted by the rise of a colossal kraken, bringing myth, adventure, and danger to life through dynamic visuals.",

//   description:
//     "The Kraken's Awakening is a cinematic motion graphics and visual storytelling project inspired by classic maritime legends and mythical sea creatures. Set in the vast open ocean, the story follows a fleet of sailing ships as they venture into uncharted waters, only to encounter a terrifying kraken emerging from the depths.Combining stylized illustrations, layered animation, and dramatic composition, the project captures the tension between fearless explorers and the mysterious forces of the sea. The contrast between the majestic ships and the colossal creature creates an epic narrative filled with suspense, adventure, and wonder.",

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
import video from "./video.mp4";
import gallery1 from "./gallery-1.jpg";
import gallery2 from "./gallery-2.jpg";
import gallery3 from "./gallery-3.jpg";
import gallery4 from "./gallery-4.jpg";

const projectData = {
  slug: "the kraken's awakening",
  title: "The Kraken's Awakening",
  category: "MOTION DESIGN",
  shortDescription: "A cinematic motion graphics project depicting a legendary sea voyage interrupted by the rise of a colossal kraken, bringing myth, adventure, and danger to life through dynamic visuals.",

  thumbnail: thumbnail,

  description:
    "The Kraken's Awakening is a cinematic motion graphics and visual storytelling project inspired by classic maritime legends and mythical sea creatures. Set in the vast open ocean, the story follows a fleet of sailing ships as they venture into uncharted waters, only to encounter a terrifying kraken emerging from the depths.Combining stylized illustrations, layered animation, and dramatic composition, the project captures the tension between fearless explorers and the mysterious forces of the sea. The contrast between the majestic ships and the colossal creature creates an epic narrative filled with suspense, adventure, and wonder.",

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