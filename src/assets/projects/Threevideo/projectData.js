const BASE_URL =
  "https://pub-4f097b343ff84b1494195f279e309042.r2.dev";

const projectData = {
  slug: "Stories That Hit Different",
  title: "Stories That Hit Different",
  category: "VIDEO EDITING",
  shortDescription:
    "A dynamic video editing portfolio showcasing creative social media edits, engaging storytelling, visual effects, and impactful content designed to capture attention.",

  thumbnail: `${BASE_URL}/Threevideo/thumbnail.png`,

  description:
    "Stories That Hit Different is a creative video editing project showcasing a range of short-form and social media content. The project focuses on transforming raw footage and ideas into visually engaging stories through thoughtful editing, dynamic pacing, typography, transitions, effects, and sound design. From creative product content and personal stories to cinematic visuals and informational edits, each video is crafted with a distinct visual style while maintaining strong storytelling and audience engagement. The project also highlights the editing process, showing how different clips, ideas, and creative elements are brought together to create polished final content.",


  projectType: "VIDEO EDITING",
  software: ["Premiere", "AfterEffects"],
  resolution: "1080x1920",
  format: "PNG",
  role: "Video Editor",

  results: [
    {
      type: "video",
      src: `${BASE_URL}/Threevideo/video testttttt.mp4`,
      aspectRatio: "9/16",
    },
    {
      type: "video",
      src: `${BASE_URL}/Threevideo/02_project.mp4`,
      aspectRatio: "9/16",
    },
    {
      type: "video",
      src: `${BASE_URL}/Threevideo/01_project.mp4`,
      aspectRatio: "9/16",
    },
  ],
};

export default projectData;