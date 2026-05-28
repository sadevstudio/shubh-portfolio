// import { motion } from "framer-motion";

// import {
//   Link,
//   useParams,
// } from "react-router-dom";

// import projects from "../data/projects";

// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// import SectionContainer from "../components/common/SectionContainer";
// import SectionTitle from "../components/common/SectionTitle";
// import GlowOverlay from "../components/common/GlowOverlay";
// import CinematicButton from "../components/common/CinematicButton";

// import NotFound from "./NotFound";

// function ProjectDetails() {
//   const { slug } = useParams();

//   /*
//   ==================================================
//   FIND PROJECT
//   ==================================================
//   */

//   const project = projects.find(
//     (item) => item.slug === slug
//   );

//   /*
//   ==================================================
//   INVALID PROJECT
//   ==================================================
//   */

//   if (!project) {
//     return <NotFound />;
//   }

//   return (
//     <>
//       {/* ==================================================
//           NAVBAR
//       ================================================== */}
//       <Navbar />

//       {/* ==================================================
//           HERO SECTION
//       ================================================== */}
//       <section
//         className="
//         relative
//         min-h-screen
//         overflow-hidden
//         bg-black
//         flex
//         items-center
//         "
//       >
//         {/* BACKGROUND IMAGE */}
//         <div
//           className="
//           absolute
//           inset-0
//           opacity-20
//           "
//           style={{
//             backgroundImage: `url(${project.heroImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         {/* DARK OVERLAY */}
//         <div
//           className="
//           absolute
//           inset-0
//           bg-black/70
//           "
//         />

//         {/* RED ATMOSPHERE */}
//         <GlowOverlay />

//         {/* CONTENT */}
//         <SectionContainer>
//           <div
//             className="
//             grid
//             lg:grid-cols-2
//             gap-20
//             items-center
//             min-h-screen
//             pt-32
//             "
//           >
//             {/* LEFT CONTENT */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 80,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 1,
//               }}
//             >
//               {/* CATEGORY */}
//               <p
//                 className="
//                 section-label
//                 mb-6
//                 "
//               >
//                 {project.category}
//               </p>

//               {/* TITLE */}
//               <h1
//                 className="
//                 big-title
//                 text-[4rem]
//                 md:text-[6rem]
//                 lg:text-[7rem]
//                 "
//               >
//                 {project.title}
//               </h1>

//               {/* DESCRIPTION */}
//               <p
//                 className="
//                 body-text
//                 text-lg
//                 mt-10
//                 max-w-[700px]
//                 "
//               >
//                 {project.description}
//               </p>

//               {/* SOFTWARE */}
//               <div
//                 className="
//                 flex
//                 flex-wrap
//                 gap-4
//                 mt-10
//                 "
//               >
//                 {project.software?.map(
//                   (item, index) => (
//                     <div
//                       key={index}
//                       className="
//                       px-5
//                       py-3
//                       glass-panel
//                       text-sm
//                       uppercase
//                       tracking-wider
//                       "
//                     >
//                       {item}
//                     </div>
//                   )
//                 )}
//               </div>
//             </motion.div>

//             {/* RIGHT IMAGE */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0.9,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               transition={{
//                 duration: 1.2,
//               }}
//               className="
//               relative
//               flex
//               justify-center
//               "
//             >
//               {/* IMAGE GLOW */}
//               <div
//                 className="
//                 absolute
//                 bottom-0
//                 w-[400px]
//                 h-[400px]
//                 bg-red-600/20
//                 blur-[100px]
//                 rounded-full
//                 "
//               />

//               {/* HERO IMAGE */}
//               <motion.img
//                 animate={{
//                   y: [-10, 10, -10],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 src={project.heroImage}
//                 alt={project.title}
//                 className="
//                 relative
//                 z-10
//                 w-full
//                 max-w-[750px]
//                 object-contain
//                 "
//               />
//             </motion.div>
//           </div>
//         </SectionContainer>

//         {/* BOTTOM FADE */}
//         <div
//           className="
//           absolute
//           bottom-0
//           left-0
//           w-full
//           h-[220px]
//           bg-gradient-to-t
//           from-black
//           to-transparent
//           "
//         />
//       </section>

//       {/* ==================================================
//           GALLERY SECTION
//       ================================================== */}
//       <section
//         className="
//         relative
//         section-spacing
//         bg-black
//         overflow-hidden
//         "
//       >
//         <GlowOverlay />

//         <SectionContainer>
//           <SectionTitle
//             label="Visual Archive"
//             title="Project Gallery"
//             subtitle="A cinematic breakdown of visuals, behind-the-scenes frames, and creative moments from the project."
//           />

//           {/* GALLERY */}
//           <div
//             className="
//             flex
//             gap-8
//             overflow-x-auto
//             pb-6
//             "
//           >
//             {project.gallery?.map(
//               (image, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{
//                     scale: 1.03,
//                   }}
//                   className="
//                   min-w-[320px]
//                   md:min-w-[500px]
//                   overflow-hidden
//                   cinematic-border
//                   bg-zinc-950
//                   "
//                 >
//                   <img
//                     src={image}
//                     alt={`${project.title}-${index}`}
//                     className="
//                     w-full
//                     h-full
//                     object-cover
//                     "
//                   />
//                 </motion.div>
//               )
//             )}
//           </div>
//         </SectionContainer>
//       </section>

//       {/* ==================================================
//           DESCRIPTION SECTION
//       ================================================== */}
//       <section
//         className="
//         relative
//         section-spacing
//         bg-black
//         "
//       >
//         <SectionContainer>
//           <div
//             className="
//             grid
//             lg:grid-cols-2
//             gap-20
//             "
//           >
//             {/* LEFT */}
//             <div>
//               <SectionTitle
//                 label="Project Story"
//                 title="Creative Direction"
//               />

//               <p
//                 className="
//                 body-text
//                 text-lg
//                 "
//               >
//                 {project.description}
//               </p>
//             </div>

//             {/* RIGHT */}
//             <div
//               className="
//               glass-panel
//               p-10
//               space-y-8
//               "
//             >
//               {/* PROJECT TYPE */}
//               <div>
//                 <p className="section-label mb-3">
//                   Project Type
//                 </p>

//                 <h3
//                   className="
//                   text-2xl
//                   font-bold
//                   text-white
//                   "
//                 >
//                   {project.projectType}
//                 </h3>
//               </div>

//               {/* ROLE */}
//               <div>
//                 <p className="section-label mb-3">
//                   Role
//                 </p>

//                 <h3
//                   className="
//                   text-2xl
//                   font-bold
//                   text-white
//                   "
//                 >
//                   {project.role}
//                 </h3>
//               </div>

//               {/* RESOLUTION */}
//               <div>
//                 <p className="section-label mb-3">
//                   Resolution
//                 </p>

//                 <h3
//                   className="
//                   text-2xl
//                   font-bold
//                   text-white
//                   "
//                 >
//                   {project.resolution}
//                 </h3>
//               </div>

//               {/* FORMAT */}
//               <div>
//                 <p className="section-label mb-3">
//                   Format
//                 </p>

//                 <h3
//                   className="
//                   text-2xl
//                   font-bold
//                   text-white
//                   "
//                 >
//                   {project.format}
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </SectionContainer>
//       </section>

//       {/* ==================================================
//           RESULT SECTION
//       ================================================== */}
//       <section
//         className="
//         relative
//         section-spacing
//         bg-black
//         "
//       >
//         <SectionContainer>
//           <SectionTitle
//             label="Final Output"
//             title="Project Result"
//           />

//           {/* VIDEO */}
//           {project.video ? (
//             <div
//               className="
//               overflow-hidden
//               cinematic-border
//               bg-zinc-950
//               "
//             >
//               <video
//                 src={project.video}
//                 controls
//                 className="
//                 w-full
//                 "
//               />
//             </div>
//           ) : (
//             <div
//               className="
//               overflow-hidden
//               cinematic-border
//               bg-zinc-950
//               "
//             >
//               <img
//                 src={project.resultImage}
//                 alt={project.title}
//                 className="
//                 w-full
//                 object-cover
//                 "
//               />
//             </div>
//           )}
//         </SectionContainer>
//       </section>

//       {/* ==================================================
//           THANK YOU SECTION
//       ================================================== */}
//       <section
//         className="
//         relative
//         py-40
//         bg-black
//         overflow-hidden
//         "
//       >
//         {/* RED GLOW */}
//         <GlowOverlay />

//         <SectionContainer>
//           <div
//             className="
//             text-center
//             max-w-[900px]
//             mx-auto
//             "
//           >
//             <p
//               className="
//               section-label
//               mb-6
//               "
//             >
//               Thank You
//             </p>

//             <h2
//               className="
//               big-title
//               text-[3rem]
//               md:text-[6rem]
//               "
//             >
//               ENTER
//               <br />

//               ANOTHER
//               <br />

//               CINEMATIC WORLD
//             </h2>

//             <p
//               className="
//               body-text
//               text-lg
//               mt-10
//               "
//             >
//               Explore more cinematic visuals, motion graphics,
//               anime-inspired storytelling, and immersive CGI experiences.
//             </p>

//             {/* BUTTON */}
//             <div className="mt-14">
//               <Link to="/portfolio">
//                 <CinematicButton>
//                   See More Projects
//                 </CinematicButton>
//               </Link>
//             </div>
//           </div>
//         </SectionContainer>
//       </section>

//       {/* ==================================================
//           FOOTER
//       ================================================== */}
//       <Footer />
//     </>
//   );
// }

// export default ProjectDetails;

import {
  motion,
  useAnimationFrame,
} from "framer-motion";

import {
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

import projects from "../data/projects";
import { ArrowLeft } from "lucide-react";


import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import SectionContainer from "../components/common/SectionContainer";
import SectionTitle from "../components/common/SectionTitle";
import GlowOverlay from "../components/common/GlowOverlay";
import CinematicButton from "../components/common/CinematicButton";
import heroOverlay from "../assets/atmosphere/hero-overlay-1.jpg";
import galleryBg from "../assets/atmosphere/gallery-bg.jpg";
import descriptionBg from "../assets/atmosphere/description-bg.jpg";
import resultBg from "../assets/atmosphere/result-bg.jpg";
import ThankYouBg from "../assets/atmosphere/thankyou-bg.jpg";

import NotFound from "./NotFound";

function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  /*
  ==================================================
  FIND PROJECT
  ==================================================
  */

  const project = projects.find(
    (item) => item.slug === slug
  );

  /*
  ==================================================
  INVALID PROJECT
  ==================================================
  */

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      {/* ==================================================
          NAVBAR
      ================================================== */}
      <Navbar />

      {/* ==================================================
          HERO SECTION
      ================================================== */}
      <section
        className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        flex
        items-center
        "
      >
        {/* BACKGROUND */}
  <motion.div
    initial={{
      scale: 1.08,
    }}
    animate={{
      scale: 1.02,
      y: [-20, 20, -20],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0"
    style={{
     backgroundImage: `url(${project.heroImage})`,
      backgroundPosition: "center 25%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      filter: "brightness(0.75)",
    }}
  />

{/* ATMOSPHERE OVERLAY */}
<div
  className="
  absolute
  inset-0
  opacity-[0.08]
  mix-blend-screen
  "
  style={{
    backgroundImage: `url(${heroOverlay})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>

{/* LEFT BLACK BLEND */}
<div
  className="
  absolute
  inset-0
  bg-gradient-to-r
  from-black
  via-black/95
  via-black/75
  to-transparent
  "
/>

{/* EXTRA DARKNESS */}
<div
  className="
  absolute
  inset-0
  bg-black/40
  "
/>

        {/* RED ATMOSPHERE */}
        <GlowOverlay />

        {/* CONTENT */}
        <SectionContainer>
          <div
            className="
            grid
            lg:grid-cols-2
            gap-20
            items-center
            min-h-screen
            pt-32
            "
          >
            {/* LEFT CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              {/* BACK BUTTON */}
<div className="absolute top-32 left-0">
  <motion.button
    onClick={() => navigate("/portfolio")}
    whileHover={{
      x: -5,
    }}
    transition={{
      duration: 0.3,
    }}
    className="
    flex
    items-center
    gap-3
    text-zinc-400
    hover:text-white
    uppercase
    tracking-[0.2em]
    text-sm
    transition-colors
    "
  >
    <ArrowLeft size={16} />

    <span>
      Back To Archive
    </span>
  </motion.button>
</div>
              {/* CATEGORY */}
              <p
                className="
                section-label
                mb-6
                "
              >
                {project.category}
              </p>

              {/* TITLE */}
              <h1
                className="
                big-title
                text-[4rem]
                md:text-[6rem]
                lg:text-[7rem]
                "
              >
                {project.title}
              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                body-text
                text-lg
                mt-10
                max-w-[700px]
                "
              >
                {project.description}
              </p>

              {/* SOFTWARE */}
              <div
                className="
                flex
                flex-wrap
                gap-4
                mt-10
                "
              >
                {project.software?.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="
                      px-5
                      py-3
                      glass-panel
                      text-sm
                      uppercase
                      tracking-wider
                      "
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </motion.div>

            
            
          </div>
        </SectionContainer>

        {/* BOTTOM FADE */}
        <div
          className="
          absolute
          bottom-0
          left-0
          w-full
          h-[220px]
          bg-gradient-to-t
          from-black
          to-transparent
          "
        />
      </section>

     {/* ==================================================
    GALLERY SECTION
================================================== */}
<section
  className="
  relative
  section-spacing
  overflow-hidden
   py-32
  bg-black
  "
>
  {/* BACKGROUND IMAGE */}
<div
  className="
  absolute
  inset-0
  "
>
  {/* BACKGROUND */}
  <motion.div
    initial={{
      scale: 1.08,
    }}
    animate={{
      scale: 1.02,
      y: [-20, 20, -20],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${galleryBg})`,
      backgroundPosition: "center 25%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      filter: "brightness(0.75)",
    }}
  />

  {/* DARK OVERLAY */}
  <div
    className="
    absolute
    inset-0
    bg-black/50
    "
  />

  {/* RED ATMOSPHERE
  <div
    className="
    absolute
    inset-0
    bg-gradient-to-b
    from-red-950/20
    via-black/10
    to-black
    "
  /> */}
</div>
  <GlowOverlay />

  <div
  className="
  relative
  z-20
  mb-20
  w-full
  "
>
    <div className="pl-48 pr-16 mb-14">
  <SectionTitle
    label="Visual Archive"
    title="Project Gallery"
    subtitle="A cinematic breakdown of visuals, frames, and storytelling moments."
  />
</div>
    {/* ==================================================
        STATIC GALLERY
    ================================================== */}
    {project.gallery?.length <= 3 ? (
  <div
    className={`
      grid
      gap-6
      mx-auto
      ${
        project.gallery.length === 1
          ? "max-w-[900px]"
          : project.gallery.length === 2
          ? "md:grid-cols-2 max-w-[1400px]"
          : "md:grid-cols-3 max-w-[1700px]"
      }
    `}
  >
    {project.gallery?.map((image, index) => (
      <motion.div
        key={index}
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.4,
        }}
        className={`
          overflow-hidden
          cinematic-border
          bg-zinc-950
          
          ${
            project.gallery.length === 2
              ? "max-h-[520px]"
              : "max-h-[650px]"
          }
        `}
      >
        <img
          src={image}
          alt={`${project.title}-${index}`}
          className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          hover:scale-105
          "
        />
      </motion.div>
    ))}
  </div>
) : (
      /* ==================================================
          AUTO SCROLL GALLERY
      ================================================== */
      <AutoScrollGallery
        images={project.gallery}
      />
    )}
  </div>
</section>

      {/* ==================================================
    DESCRIPTION SECTION
================================================== */}
<section
  className="
  relative
  min-h-screen
  flex
  items-center
  overflow-hidden
  py-32
  "
>
  {/* BACKGROUND */}
  <motion.div
    initial={{
      scale: 1.08,
    }}
    animate={{
      scale: 1.02,
      y: [-20, 20, -20],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${descriptionBg})`,
      backgroundPosition: "center 25%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      filter: "brightness(0.75)",
    }}
  />

    {/* DARK OVERLAY */}
    <div
      className="
      absolute
      inset-0
      bg-black/25
      "
    />

    {/* RED GLOW
    <div
      className="
      absolute
      inset-0
      bg-gradient-to-b
      from-red-950/20
      via-black/10
      to-black
      "
    /> */}
  

  <SectionContainer>
    <div
      className="
      relative
      z-10
      grid
      lg:grid-cols-2
      gap-10
      items-center
      "
    >
      {/* ==================================================
          LEFT PANEL
      ================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        className="
        relative
        overflow-hidden
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-md
        p-12 lg:p-14
        "
      >
        {/* GLOW */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-br
          from-red-500/5
          to-transparent
          "
        />

        <div className="relative z-10">
          <p
            className="
            text-red-500
            uppercase
            tracking-[0.3em]
            text-xs
            mb-6
            "
          >
            Project Overview
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-black
            uppercase
            text-white
            leading-none
            "
          >
            The Story
          </h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="
            mt-8
            text-zinc-300
            leading-[2]
            text-lg
            "
          >
            {project.description}
          </motion.p>
        </div>
      </motion.div>

      {/* ==================================================
          RIGHT PANEL
      ================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        viewport={{
          once: true,
        }}
        className="
        relative
        overflow-hidden
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-md
        p-10
        "
      >
        {/* GLOW */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-br
          from-red-500/5
          to-transparent
          "
        />

        <div className="relative z-10">
          <p
            className="
            text-red-500
            uppercase
            tracking-[0.3em]
            text-xs
            mb-10
            "
          >
            Project Details
          </p>

          <div className="space-y-8">
            {/* PROJECT TYPE */}
            <motion.div
              whileHover={{
                x: 5,
              }}
              className="
              flex
              justify-between
              gap-6
              border-b
              border-white/5
              pb-5
              "
            >
              <span className="text-zinc-500 uppercase tracking-[0.2em] text-xs">
                Project Type
              </span>

              <span className="text-white text-right">
                {project.projectType}
              </span>
            </motion.div>

            {/* ROLE */}
            <motion.div
              whileHover={{
                x: 5,
              }}
              className="
              flex
              justify-between
              gap-6
              border-b
              border-white/5
              pb-5
              "
            >
              <span className="text-zinc-500 uppercase tracking-[0.2em] text-xs">
                Role
              </span>

              <span className="text-white text-right">
                {project.role}
              </span>
            </motion.div>

            {/* RESOLUTION */}
            <motion.div
              whileHover={{
                x: 5,
              }}
              className="
              flex
              justify-between
              gap-6
              border-b
              border-white/5
              pb-5
              "
            >
              <span className="text-zinc-500 uppercase tracking-[0.2em] text-xs">
                Resolution
              </span>

              <span className="text-white text-right">
                {project.resolution}
              </span>
            </motion.div>

            {/* FORMAT */}
            <motion.div
              whileHover={{
                x: 5,
              }}
              className="
              flex
              justify-between
              gap-6
              pb-2
              "
            >
              <span className="text-zinc-500 uppercase tracking-[0.2em] text-xs">
                Format
              </span>

              <span className="text-white text-right">
                {project.format}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </SectionContainer>
</section>
      {/* ==================================================
    RESULT SECTION
================================================== */}
<section
  className="
  relative
  min-h-[90vh]
  flex
  items-center
  overflow-hidden
  py-24
  bg-black
  "
>
  {/* BACKGROUND */}
  <motion.div
    initial={{
      scale: 1.08,
    }}
    animate={{
      scale: 1.02,
      y: [-20, 20, -20],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${resultBg})`,
      backgroundPosition: "center 25%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      filter: "brightness(0.75)",
    }}
  />

    {/* DARK OVERLAY */}
    <div
      className="
      absolute
      inset-0
      bg-black/35
      "
    />

    {/* RED ATMOSPHERE */}
    <div
      className="
      absolute
      inset-0
      bg-gradient-to-b
      from-red-950/10
      via-transparent
      to-black/40
      "
    />
  

  {/* CONTENT */}
  <SectionContainer>
    <div
  className="
  relative
  z-10
  max-w-[1200px]
mr-auto
ml-0
  "
>
      {/* TITLE */}
      <div className="mb-16 -ml-40">
        <p className="section-label mb-5">
          Final Output
        </p>

        <h2
          className="
          text-5xl
          md:text-7xl
          font-black
          uppercase
          text-white
          "
        >
          PROJECT RESULT
        </h2>
      </div>

      {/* RESULT BOX */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className="
        relative
        overflow-hidden
        border
        border-white/10
        bg-black/40
        backdrop-blur-sm
        "
      >
        {/* VIDEO */}
        {project.video ? (
          <video
  src={project.video}
  controls
  className="
  w-full
  max-h-[85vh]
  object-contain
  bg-black
  "
/>
        ) : (
          <img
  src={project.resultImage}
  alt={project.title}
  className="
  w-full
  max-h-[85vh]
  object-contain
  bg-black
  "
/>
        )}
      </motion.div>
    </div>
  </SectionContainer>
</section>
      {/* ==================================================
    THANK YOU SECTION
================================================== */}
<section
  className="
  relative
  min-h-screen
  overflow-hidden
  flex
  items-center
  justify-center
  py-32
  "
>
  {/* BACKGROUND */}
  <motion.div
    initial={{
      scale: 1.08,
    }}
    animate={{
      scale: 1.02,
      y: [-20, 20, -20],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${ThankYouBg})`,
      backgroundPosition: "center 25%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      filter: "brightness(0.75)",
    }}
  />

  {/* DARK OVERLAY */}
  <div
    className="
    absolute
    inset-0
    bg-black/5
    "
  />

  {/* CINEMATIC RED OVERLAY */}
  <div
    className="
    absolute
    inset-0
    bg-gradient-to-b
    from-black/60
    via-red-950/10
    to-black
    "
  />

  {/* LEFT SHADOW */}
  <div
    className="
    absolute
    left-0
    top-0
    w-[20%]
    h-full
    bg-gradient-to-r
    from-black
    to-transparent
    z-[2]
    "
  />

  {/* RIGHT SHADOW */}
  <div
    className="
    absolute
    right-0
    top-0
    w-[20%]
    h-full
    bg-gradient-to-l
    from-black
    to-transparent
    z-[2]
    "
  />

  {/* CONTENT */}
  <div
    className="
    relative
    z-10
    text-center
    px-6
    max-w-[1200px]
    mx-auto
    "
  >
    {/* SMALL LABEL */}
    <motion.p
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="
      uppercase
      tracking-[0.7em]
      text-red-500
      text-sm
      mb-10
      "
    >
      Cinematic Ending
    </motion.p>

    {/* TITLE */}
    <div
      className="
      flex
      justify-center
      flex-wrap
      gap-2
      "
    >
      {"THANK YOU".split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 120,
            rotate: 10,
            filter: "blur(20px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: index * 0.08,
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="
          text-[4rem]
          md:text-[9rem]
          font-black
          uppercase
          leading-none
          inline-block
          text-white
          drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]
          "
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>

    {/* DESCRIPTION */}
    <motion.p
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.1,
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="
      text-white/75
      text-lg
      md:text-xl
      leading-relaxed
      max-w-[850px]
      mx-auto
      mt-12
      "
    >
      Thank you for exploring my world of cinematic
      motion design, anime-inspired visuals,
      CGI storytelling, and immersive digital experiences.
    </motion.p>

    {/* RED GLOW LINE */}
    <motion.div
      initial={{
        width: 0,
        opacity: 0,
      }}
      whileInView={{
        width: "220px",
        opacity: 1,
      }}
      transition={{
        delay: 1.4,
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="
      h-[2px]
      bg-red-500
      mx-auto
      mt-14
      shadow-[0_0_30px_rgba(255,0,0,0.8)]
      "
    />

    {/* BUTTON */}
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.6,
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="mt-16"
    >
      <Link to="/portfolio">
        <CinematicButton>
          See More Projects
        </CinematicButton>
      </Link>
    </motion.div>
  </div>
</section>

      {/* ==================================================
          FOOTER
      ================================================== */}
      <Footer />
    </>
  );
}
function AutoScrollGallery({
  images,
}) {
  const duplicatedImages = [
    ...images,
    ...images,
  ];

  return (
    <div
  className="
  relative
  overflow-hidden
  w-screen
  left-1/2
  -translate-x-1/2
  "
>
  {/* LEFT BLACK SHADOW */}
  <div
    className="
    absolute
    left-0
    top-0
    z-30
    h-full
    w-40
    bg-gradient-to-r
    from-black
    to-transparent
    pointer-events-none
    "
  />

  {/* RIGHT BLACK SHADOW */}
  <div
    className="
    absolute
    right-0
    top-0
    z-30
    h-full
    w-40
    bg-gradient-to-l
    from-black
    to-transparent
    pointer-events-none
    "
  />
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{
          animationPlayState: "paused",
        }}
        className="
flex
gap-8
w-max
px-8
"
        
      >
        {duplicatedImages.map(
          (image, index) => (
            <motion.div
  key={index}
  whileHover={{
    scale: 1.03,
  }}
  transition={{
    duration: 0.4,
  }}
  className="
  w-[500px]
md:w-[720px]
  aspect-[16/9]
  flex-shrink-0
  overflow-hidden
  cinematic-border
  bg-zinc-950
  "
>
  <img
    src={image}
    alt={`gallery-${index}`}
    className="
    w-full
    h-full
    object-cover
    object-center
    transition-transform
    duration-700
    hover:scale-105
    "
  />
</motion.div>
          )
        )}
      </motion.div>
    </div>
  );
}

export default ProjectDetails;