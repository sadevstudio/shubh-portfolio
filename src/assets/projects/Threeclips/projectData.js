const BASE_URL =
  "https://pub-4f097b343ff84b1494195f279e309042.r2.dev";

const projectData = {
  slug: "Three Clips, One Story",
  title: "Three Clips, One Story",
  category: "VIDEO EDITING",
  shortDescription:
    "A travel-focused video editing project that transforms three moments into one engaging story, blending adventure, people, emotion, and cinematic storytelling.",

  thumbnail: `${BASE_URL}/Threeclips/thumbnail.png`,

  description:
    "Three Clips, One Story is a travel video editing project built around the idea of turning simple travel moments into a memorable visual story. The edit brings together different locations, people, and experiences to create a cohesive narrative filled with energy, adventure, and emotion. The project focuses on story-driven editing, rhythm, transitions, typography, music, and visual pacing to connect separate clips into one engaging experience. From scenic landscapes and group adventures to candid moments of joy, each shot contributes to the overall feeling of the journey.",


  projectType: "VIDEO EDITING",
  software: ["Premiere", "AfterEffects"],
  resolution: "1080x1920",
  format: "PNG",
  role: "Video Editor",

  results: [
    {
      type: "video",
      src: `${BASE_URL}/Threeclips/01.mp4`,
      aspectRatio: "9/16",
    },
    {
      type: "video",
      src: `${BASE_URL}/Threeclips/02.mp4`,
      aspectRatio: "9/16",
    },
    {
      type: "video",
      src: `${BASE_URL}/Threeclips/03.mp4`,
      aspectRatio: "9/16",
    },
  ],
};

export default projectData;