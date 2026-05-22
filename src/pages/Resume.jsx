// import Navbar from '../components/layout/Navbar'
// import Footer from '../components/layout/Footer'

// function Resume() {

//   return (
//     <div className="min-h-screen bg-black text-white">

//       <Navbar />

//       <section className="pt-40 pb-20">

//         <div className="container">

//           <p className="
//           uppercase
//           tracking-[0.4em]
//           text-red-500
//           mb-6
//           ">
//             Resume
//           </p>

//           <h1 className="
//           big-title
//           text-[5rem]
//           md:text-[9rem]
//           leading-none
//           mb-20
//           ">
//             EXPERIENCE
//             <br />
//             & SKILLS
//           </h1>

//           <div className="
//           grid
//           md:grid-cols-2
//           gap-16
//           ">

//             <div>

//               <h2 className="
//               text-4xl
//               mb-10
//               gradient-text
//               big-title
//               ">
//                 EXPERIENCE
//               </h2>

//               <div className="
//               glass
//               rounded-[30px]
//               p-8
//               mb-8
//               ">

//                 <h3 className="text-2xl font-bold mb-2">
//                   Freelance Motion Designer
//                 </h3>

//                 <p className="text-red-500 mb-4">
//                   2024 — Present
//                 </p>

//                 <p className="text-white/70 leading-relaxed">
//                   Worked on motion graphics,
//                   short-form edits,
//                   cinematic reels,
//                   and anime-inspired visual content.
//                 </p>

//               </div>

//             </div>

//             <div>

//               <h2 className="
//               text-4xl
//               mb-10
//               gradient-text
//               big-title
//               ">
//                 TOOLS
//               </h2>

//               <div className="space-y-6">

//                 {[
//                   'After Effects',
//                   'Premiere Pro',
//                   'Blender',
//                   'Photoshop',
//                   'Figma',
//                 ].map((tool)=>(
//                   <div key={tool}>

//                     <div className="
//                     flex items-center justify-between
//                     mb-2
//                     ">

//                       <span>{tool}</span>
//                       <span className="text-red-500">
//                         90%
//                       </span>

//                     </div>

//                     <div className="
//                     h-2
//                     bg-white/10
//                     rounded-full
//                     overflow-hidden
//                     ">

//                       <div className="
//                       h-full
//                       bg-gradient-to-r
//                       from-red-500 to-purple-500
//                       w-[90%]
//                       "></div>

//                     </div>

//                   </div>
//                 ))}

//               </div>

//               <a
//                 href="/resume/shubh-asawa-resume.pdf"
//                 download
//                 className="
//                 inline-block
//                 mt-12
//                 px-10 py-5
//                 bg-red-600
//                 hover:bg-red-700
//                 transition
//                 uppercase
//                 tracking-[0.25em]
//                 red-glow
//                 "
//               >
//                 Download Resume
//               </a>

//             </div>

//           </div>

//         </div>

//       </section>

//       <Footer />

//     </div>
//   )
// }

// export default Resume

// import Navbar from '../components/layout/Navbar'
// import Footer from '../components/layout/Footer'

// import { motion } from 'framer-motion'

// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaCamera,
//   FaGamepad,
// } from 'react-icons/fa'

// import {
//   MdMovie,
//   MdTravelExplore,
// } from 'react-icons/md'

// import heroImg from '../assets/resume/resume-hero.png'
// import storyImg from '../assets/resume/resume-story.png'
// import cityImg from '../assets/resume/resume-city.png'
// import workspaceImg from '../assets/resume/resume-workspace.png'
// import endingImg from '../assets/resume/resume-ending.png'

// import aftereffects from '../assets/tools/aftereffects.png'
// import premiere from '../assets/tools/premiere.png'
// import photoshop from '../assets/tools/photoshop.png'
// import illustrator from '../assets/tools/illustrator.png'
// import blender from '../assets/tools/blender.png'
// import figma from '../assets/tools/figma.png'

// function Resume() {

//   const tools = [
//     aftereffects,
//     premiere,
//     photoshop,
//     illustrator,
//     blender,
//     figma,
//   ]

//   return (
//     <div className="bg-black text-white overflow-hidden">

//       <Navbar />

//       {/* HERO SECTION */}

//       <motion.section

//         initial={{
//           opacity: 0,
//           y: 80,
//         }}

//         animate={{
//           opacity: 1,
//           y: 0,
//         }}

//         transition={{
//           duration: 1.2,
//         }}

//         className="
//         relative
//         min-h-screen
//         border-b border-white/10
//         overflow-hidden
//         "
//       >

//         <motion.img

//           initial={{
//             scale: 1.15,
//           }}

//           animate={{
//             scale: 1.05,
//             y: [-10, 10, -10],
//           }}

//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}

//           src={heroImg}
//           alt=""

//           className="
//           absolute inset-0
//           w-full h-full
//           object-cover
//           brightness-[0.9]
//           contrast-125
//           saturate-125
//           "
//         />

//         <div className="
//         absolute inset-0
//         bg-gradient-to-r
//         from-black
//         via-black/65
//         to-black/20
//         " />

//         <div className="
//         relative z-10
//         container mx-auto
//         px-6
//         min-h-screen
//         flex items-center
//         pt-32
//         ">

//           <div className="max-w-[550px]">

//             <p className="
//             uppercase
//             tracking-[0.4em]
//             text-red-500
//             mb-6
//             text-sm
//             ">
//               Resume
//             </p>

//             <h1 className="
//             text-[5.5rem]
//             md:text-[10rem]
//             leading-[0.88]
//             uppercase
//             font-black
//             tracking-[0.12em]
//             mb-8
//             ">
//               Resume
//             </h1>

//             <div className="
//             w-40 h-[2px]
//             bg-red-500
//             mb-8
//             " />

//             <h2 className="
//             text-2xl
//             md:text-4xl
//             uppercase
//             tracking-[0.2em]
//             leading-relaxed
//             mb-8
//             ">
//               Motion Designer
//               <span className="text-red-500">
//                 {' '} & 3D Artist
//               </span>
//             </h2>

//             <p className="
//             text-white/70
//             leading-loose
//             text-lg
//             mb-10
//             ">
//               I create cinematic visuals,
//               anime-inspired motion graphics,
//               immersive storytelling
//               and emotionally powerful digital experiences.
//             </p>

//             <div className="space-y-5 mb-12">

//               <div className="flex items-center gap-4 text-white/75">
//                 <FaMapMarkerAlt className="text-red-500" />
//                 <span>New Delhi, India</span>
//               </div>

//               <div className="flex items-center gap-4 text-white/75">
//                 <FaPhoneAlt className="text-red-500" />
//                 <span>+91 7017288428</span>
//               </div>

//               <div className="flex items-center gap-4 text-white/75">
//                 <FaEnvelope className="text-red-500" />
//                 <span>shubhdesigns3d@gmail.com</span>
//               </div>

//             </div>

//             <a
//               href="/resume/shubh-asawa-resume.pdf"
//               download

//               className="
//               inline-flex
//               items-center
//               gap-3
//               border border-red-500
//               px-10 py-5
//               uppercase
//               tracking-[0.25em]
//               text-sm
//               hover:bg-red-600
//               transition-all duration-500
//               "
//             >
//               Download Resume (PDF)
//             </a>

//           </div>

//         </div>

//       </motion.section>

//       {/* SECTION 2 */}

//       <motion.section

//         initial={{
//           opacity: 0,
//           y: 100,
//         }}

//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}

//         transition={{
//           duration: 1.2,
//         }}

//         viewport={{
//           once: true,
//         }}

//         className="border-b border-white/10"
//       >

//         <div className="grid lg:grid-cols-2">

//           {/* ABOUT */}

//           <div className="
//           relative
//           min-h-[750px]
//           border-r border-white/10
//           overflow-hidden
//           group
//           ">

//             <img
//               src={storyImg}
//               alt=""

//               className="
//               absolute inset-0
//               w-full h-full
//               object-cover
//               brightness-[0.9]
//               transition-all duration-[4000ms]
//               group-hover:scale-110
//               "
//             />

//             <div className="
//             absolute inset-0
//             bg-gradient-to-b
//             from-black/45
//             via-black/55
//             to-black/85
//             " />

//             <div className="
//             relative z-10
//             p-12 md:p-16
//             flex flex-col justify-end
//             h-full
//             ">

//               <div className="
//               flex items-center gap-4
//               mb-10
//               ">

//                 <div className="
//                 w-10 h-10
//                 rounded-full
//                 border border-red-500
//                 flex items-center justify-center
//                 text-red-500
//                 ">
//                   ✦
//                 </div>

//                 <h2 className="
//                 uppercase
//                 tracking-[0.3em]
//                 text-red-500
//                 text-xl
//                 ">
//                   About Me
//                 </h2>

//               </div>

//               <p className="
//               text-white/80
//               leading-loose
//               text-lg
//               max-w-[420px]
//               mb-8
//               ">
//                 I'm Shubh Asawa,
//                 a Motion Designer,
//                 Video Editor and 3D Artist
//                 passionate about cinematic storytelling.
//               </p>

//               <p className="
//               text-white/65
//               leading-loose
//               max-w-[520px]
//               mb-10
//               ">
//                 I specialize in anime-inspired visuals,
//                 cinematic edits,
//                 motion graphics,
//                 CGI environments
//                 and immersive digital experiences.
//               </p>

//               <h3 className="
//               text-red-500
//               text-4xl
//               italic
//               tracking-wide
//               ">
//                 Shubh Asawa
//               </h3>

//             </div>

//           </div>

//           {/* EXPERIENCE */}

//           <div className="
//           relative
//           min-h-[750px]
//           overflow-hidden
//           group
//           ">

//             <img
//               src={cityImg}
//               alt=""

//               className="
//               absolute inset-0
//               w-full h-full
//               object-cover
//               brightness-[0.8]
//               transition-all duration-[4000ms]
//               group-hover:scale-110
//               "
//             />

//             <div className="
//             absolute inset-0
//             bg-gradient-to-b
//             from-black/40
//             to-black/85
//             " />

//             <div className="
//             relative z-10
//             p-12 md:p-16
//             ">

//               <h2 className="
//               uppercase
//               tracking-[0.3em]
//               text-red-500
//               text-xl
//               mb-16
//               ">
//                 Experience
//               </h2>

//               <div className="space-y-16">

//                 <div className="relative pl-10">

//                   <div className="
//                   absolute left-0 top-2
//                   w-4 h-4
//                   rounded-full
//                   bg-red-500
//                   " />

//                   <div className="
//                   absolute left-[7px] top-6
//                   w-[2px] h-[130px]
//                   bg-red-500
//                   " />

//                   <p className="text-white/50 mb-3">
//                     2024 — Present
//                   </p>

//                   <h3 className="
//                   text-3xl
//                   uppercase
//                   mb-4
//                   ">
//                     Freelance Motion Designer
//                   </h3>

//                   <p className="
//                   text-red-500
//                   mb-5
//                   ">
//                     Creative Agency Projects
//                   </p>

//                   <p className="
//                   text-white/70
//                   leading-loose
//                   max-w-[480px]
//                   ">
//                     Working on cinematic reels,
//                     motion graphics,
//                     anime-inspired edits
//                     and storytelling visuals
//                     for brands and creators.
//                   </p>

//                 </div>

//                 <div className="relative pl-10">

//                   <div className="
//                   absolute left-0 top-2
//                   w-4 h-4
//                   rounded-full
//                   bg-red-500
//                   " />

//                   <p className="text-white/50 mb-3">
//                     2023 — 2024
//                   </p>

//                   <h3 className="
//                   text-3xl
//                   uppercase
//                   mb-4
//                   ">
//                     Visual Content Creator
//                   </h3>

//                   <p className="
//                   text-red-500
//                   mb-5
//                   ">
//                     Freelance Projects
//                   </p>

//                   <p className="
//                   text-white/70
//                   leading-loose
//                   max-w-[480px]
//                   ">
//                     Created short-form cinematic content,
//                     social media edits,
//                     visual storytelling reels
//                     and anime-inspired visuals.
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </motion.section>

//       {/* SECTION 3 */}

//       <motion.section

//         initial={{
//           opacity: 0,
//           y: 100,
//         }}

//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}

//         transition={{
//           duration: 1.2,
//         }}

//         viewport={{
//           once: true,
//         }}

//         className="border-b border-white/10"
//       >

//         <div className="grid lg:grid-cols-3">

//           {/* EDUCATION */}

//           <div className="
//           relative
//           min-h-[650px]
//           border-r border-white/10
//           overflow-hidden
//           group
//           ">

//             <img
//               src={endingImg}
//               alt=""

//               className="
//               absolute inset-0
//               w-full h-full
//               object-cover
//               brightness-[0.85]
//               transition-all duration-[4000ms]
//               group-hover:scale-110
//               "
//             />

//             <div className="
//             absolute inset-0
//             bg-black/60
//             " />

//             <div className="
//             relative z-10
//             p-12 md:p-16
//             ">

//               <h2 className="
//               uppercase
//               tracking-[0.3em]
//               text-red-500
//               text-xl
//               mb-14
//               ">
//                 Education
//               </h2>

//               <div className="space-y-14">

//                 <div className="relative pl-10">

//                   <div className="
//                   absolute left-0 top-2
//                   w-4 h-4
//                   rounded-full
//                   bg-red-500
//                   " />

//                   <p className="text-white/50 mb-2">
//                     2022 — 2025
//                   </p>

//                   <h3 className="
//                   text-2xl
//                   uppercase
//                   mb-3
//                   ">
//                     Bachelor of Computer Applications
//                   </h3>

//                   <p className="text-white/70 leading-loose">
//                     GNIOT Institute of Technology
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* SKILLS */}

//           <div className="
//           bg-[#050505]
//           border-r border-white/10
//           p-12 md:p-16
//           ">

//             <h2 className="
//             uppercase
//             tracking-[0.3em]
//             text-red-500
//             text-xl
//             mb-14
//             ">
//               Skills
//             </h2>

//             {[
//               ['Motion Design', '90%'],
//               ['3D Modeling', '85%'],
//               ['Video Editing', '92%'],
//               ['Visual Storytelling', '95%'],
//               ['Lighting & Rendering', '80%'],
//             ].map((item, index) => (

//               <div key={index} className="mb-10">

//                 <div className="
//                 flex justify-between
//                 mb-4
//                 uppercase
//                 tracking-[0.15em]
//                 text-sm
//                 ">

//                   <span className="text-white/75">
//                     {item[0]}
//                   </span>

//                   <span className="text-white/55">
//                     {item[1]}
//                   </span>

//                 </div>

//                 <div className="
//                 h-[2px]
//                 bg-white/10
//                 ">

//                   <div
//                     className="h-full bg-red-500"
//                     style={{ width: item[1] }}
//                   />

//                 </div>

//               </div>

//             ))}

//           </div>

//           {/* TOOLS */}

//           <div className="
//           relative
//           min-h-[650px]
//           overflow-hidden
//           group
//           ">

//             <img
//               src={workspaceImg}
//               alt=""

//               className="
//               absolute inset-0
//               w-full h-full
//               object-cover
//               brightness-[0.8]
//               transition-all duration-[4000ms]
//               group-hover:scale-110
//               "
//             />

//             <div className="
//             absolute inset-0
//             bg-black/65
//             " />

//             <div className="
//             relative z-10
//             p-12 md:p-16
//             ">

//               <h2 className="
//               uppercase
//               tracking-[0.3em]
//               text-red-500
//               text-xl
//               mb-14
//               ">
//                 Tools of My Craft
//               </h2>

//               <div className="
//               grid grid-cols-3
//               gap-10
//               ">

//                 {tools.map((tool, index) => (

//                   <div
//                     key={index}
//                     className="
//                     flex items-center justify-center
//                     "
//                   >

//                     <motion.img

//                       whileHover={{
//                         scale: 1.2,
//                         rotate: 4,
//                         y: -10,
//                       }}

//                       transition={{
//                         duration: 0.4,
//                       }}

//                       src={tool}
//                       alt=""

//                       className="
//                       w-16
//                       opacity-90
//                       "
//                     />

//                   </div>

//                 ))}

//               </div>

//             </div>

//           </div>

//         </div>

//       </motion.section>

//       {/* WHAT I DO */}

//       <motion.section

//         initial={{
//           opacity: 0,
//           y: 100,
//         }}

//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}

//         transition={{
//           duration: 1.2,
//         }}

//         viewport={{
//           once: true,
//         }}

//         className="
//         relative
//         border-b border-white/10
//         overflow-hidden
//         "
//       >

//         <img
//           src={cityImg}
//           alt=""

//           className="
//           absolute inset-0
//           w-full h-full
//           object-cover
//           brightness-[0.45]
//           "
//         />

//         <div className="
//         absolute inset-0
//         bg-black/70
//         " />

//         <div className="
//         relative z-10
//         container mx-auto
//         px-6 py-24
//         ">

//           <h2 className="
//           uppercase
//           tracking-[0.3em]
//           text-red-500
//           text-xl
//           mb-16
//           ">
//             What I Do
//           </h2>

//           <div className="
//           grid md:grid-cols-4
//           gap-14
//           ">

//             {[
//               {
//                 title: "Motion Design",
//                 text: "Creating cinematic motion graphics and immersive edits."
//               },
//               {
//                 title: "3D Art & CGI",
//                 text: "Building stylized worlds and cinematic environments."
//               },
//               {
//                 title: "Storytelling",
//                 text: "Designing emotional visuals that connect with audiences."
//               },
//               {
//                 title: "Anime Inspired",
//                 text: "Inspired by Japanese aesthetics and cinematic atmosphere."
//               }
//             ].map((item, index) => (

//               <motion.div

//                 key={index}

//                 whileHover={{
//                   y: -10,
//                 }}

//                 className="
//                 border border-white/10
//                 p-8
//                 bg-white/[0.02]
//                 backdrop-blur-sm
//                 "
//               >

//                 <h3 className="
//                 text-2xl
//                 uppercase
//                 mb-5
//                 text-red-500
//                 ">
//                   {item.title}
//                 </h3>

//                 <p className="
//                 text-white/65
//                 leading-loose
//                 ">
//                   {item.text}
//                 </p>

//               </motion.div>

//             ))}

//           </div>

//         </div>

//       </motion.section>

//       {/* FINAL SECTION */}

//       <motion.section

//         initial={{
//           opacity: 0,
//           y: 100,
//         }}

//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}

//         transition={{
//           duration: 1.2,
//         }}

//         viewport={{
//           once: true,
//         }}

//         className="
//         relative
//         min-h-[500px]
//         overflow-hidden
//         "
//       >

//         <img
//           src={endingImg}
//           alt=""

//           className="
//           absolute inset-0
//           w-full h-full
//           object-cover
//           brightness-[0.55]
//           "
//         />

//         <div className="
//         absolute inset-0
//         bg-gradient-to-b
//         from-black/60
//         via-black/70
//         to-black
//         " />

//         <div className="
//         relative z-10
//         container mx-auto
//         px-6 py-28
//         ">

//           <div className="
//           grid md:grid-cols-2
//           gap-20
//           items-center
//           ">

//             <div>

//               <h2 className="
//               uppercase
//               tracking-[0.3em]
//               text-red-500
//               text-xl
//               mb-14
//               ">
//                 Interests
//               </h2>

//               <div className="
//               grid grid-cols-2
//               gap-12
//               ">

//                 <div className="flex items-center gap-4">
//                   <FaCamera className="text-red-500 text-3xl" />
//                   <span className="uppercase tracking-[0.2em]">
//                     Photography
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <FaGamepad className="text-red-500 text-3xl" />
//                   <span className="uppercase tracking-[0.2em]">
//                     Gaming
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <MdMovie className="text-red-500 text-3xl" />
//                   <span className="uppercase tracking-[0.2em]">
//                     Cinema
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <MdTravelExplore className="text-red-500 text-3xl" />
//                   <span className="uppercase tracking-[0.2em]">
//                     Travel
//                   </span>
//                 </div>

//               </div>

//             </div>

//             <div className="text-center">

//               <motion.a

//                 whileHover={{
//                   scale: 1.05,
//                 }}

//                 href="/resume/shubh-asawa-resume.pdf"
//                 download

//                 className="
//                 inline-flex
//                 items-center justify-center
//                 border border-red-500
//                 px-14 py-6
//                 uppercase
//                 tracking-[0.25em]
//                 hover:bg-red-600
//                 transition-all duration-500
//                 "
//               >
//                 Download Resume (PDF)
//               </motion.a>

//               <p className="
//               text-white/45
//               mt-8
//               ">
//                 Explore my creative journey,
//                 skills and cinematic visual experience.
//               </p>

//             </div>

//           </div>

//         </div>

//       </motion.section>

//       <Footer />

//     </div>
//   )
// }

// export default Resume

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

import gsap from 'gsap'
import SplitType from 'split-type'

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCamera,
  FaGamepad,
} from 'react-icons/fa'

import {
  MdMovie,
  MdTravelExplore,
} from 'react-icons/md'

import heroImg from '../assets/resume/resume-hero.png'
import storyImg from '../assets/resume/resume-story.png'
import cityImg from '../assets/resume/resume-city.png'
import workspaceImg from '../assets/resume/resume-workspace.png'
import endingImg from '../assets/resume/resume-ending.png'

import aftereffects from '../assets/tools/aftereffects.png'
import premiere from '../assets/tools/premiere.png'
import photoshop from '../assets/tools/photoshop.png'
import illustrator from '../assets/tools/illustrator.png'
import blender from '../assets/tools/blender.png'
import figma from '../assets/tools/figma.png'

function Resume() {

  const titleRef = useRef(null)

  useEffect(() => {

    const split = new SplitType(titleRef.current, {
      types: 'chars',
    })

    gsap.from(split.chars, {

      opacity: 0,
      y: 120,
      rotateX: -90,

      stagger: 0.04,

      duration: 1.2,

      ease: 'power4.out',

    })

  }, [])

  const tools = [
    aftereffects,
    premiere,
    photoshop,
    illustrator,
    blender,
    figma,
  ]

  return (

    <div className="bg-black text-white overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}

      <motion.section

        initial={{
          opacity: 0,
          y: 80,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1.2,
        }}

        className="
        relative
        min-h-screen
        border-b border-white/10
        overflow-hidden
        "
      >

        <motion.img

          initial={{
            scale: 1.12,
          }}

          animate={{
            scale: 1.03,
            y: [-10, 10, -10],
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          src={heroImg}
          alt=""

          className="
          absolute inset-0
          w-full h-full
          object-cover
          brightness-[2.0]
          contrast-125
          saturate-125
          "
        />

        <div className="
        absolute inset-0
        bg-gradient-to-r
        from-black
        via-black/65
        to-black/20
        " />

        <div className="
        relative z-10
        container mx-auto
        px-6
        min-h-screen
        flex items-center
        pt-32
        ">

          <div className="max-w-[550px]">

            <p className="
            uppercase
            tracking-[0.4em]
            text-red-500
            mb-6
            text-sm
            ">
              Resume
            </p>

            <h1

              ref={titleRef}

              className="
              text-[4rem]
              md:text-[7rem]
              leading-[0.9]
              uppercase
              font-black
              tracking-[0.08em]
              mb-8
              perspective-[1000px]
              "
            >
              Resume
            </h1>

            <div className="
            w-40 h-[2px]
            bg-red-500
            mb-8
            " />

            <h2 className="
            text-2xl
            md:text-4xl
            uppercase
            tracking-[0.2em]
            leading-relaxed
            mb-8
            ">
              Motion Designer
              <span className="text-red-500">
                {' '} & 3D Artist
              </span>
            </h2>

            <p className="
            text-white/70
            leading-loose
            text-lg
            mb-10
            ">
              I create cinematic visuals,
              anime-inspired motion graphics,
              immersive storytelling
              and emotionally powerful digital experiences.
            </p>

            <div className="space-y-5 mb-12">

              <div className="flex items-center gap-4 text-white/75">
                <FaMapMarkerAlt className="text-red-500" />
                <span>New Delhi, India</span>
              </div>

              <div className="flex items-center gap-4 text-white/75">
                <FaPhoneAlt className="text-red-500" />
                <span>+91 7017288428</span>
              </div>

              <div className="flex items-center gap-4 text-white/75">
                <FaEnvelope className="text-red-500" />
                <span>shubhdesigns3d@gmail.com</span>
              </div>

            </div>

            <motion.a

              whileHover={{
                scale: 1.05,
              }}

              href="/resume/shubh-asawa-resume.pdf"
              download

              className="
              inline-flex
              items-center
              gap-3
              border border-red-500
              px-10 py-5
              uppercase
              tracking-[0.25em]
              text-sm
              hover:bg-red-600
              transition-all duration-500
              "
            >
              Download Resume (PDF)
            </motion.a>

          </div>

        </div>

      </motion.section>

      {/* ABOUT + EXPERIENCE */}

      <motion.section

        initial={{
          opacity: 0,
          y: 100,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1.2,
        }}

        viewport={{
          once: true,
        }}

        className="border-b border-white/10"
      >

        <div className="grid lg:grid-cols-2">

          {/* ABOUT */}

          <div className="
          relative
          min-h-[750px]
          border-r border-white/10
          overflow-hidden
          group
          ">

            <img
              src={storyImg}
              alt=""

              className="
              absolute inset-0
              w-full h-full
              object-cover
              brightness-[2.0]
              transition-all duration-[4000ms]
              group-hover:scale-110
              "
            />

            <div className="
            absolute inset-0
            bg-gradient-to-b
            from-black/45
            via-black/55
            to-black/85
            " />

            <div className="
            relative z-10
            p-12 md:p-16
            flex flex-col justify-end
            h-full
            ">

              <div className="
              flex items-center gap-4
              mb-10
              ">

                <div className="
                w-10 h-10
                rounded-full
                border border-red-500
                flex items-center justify-center
                text-red-500
                ">
                  ✦
                </div>

                <h2 className="
                uppercase
                tracking-[0.3em]
                text-red-500
                text-xl
                ">
                  About Me
                </h2>

              </div>

              <p className="
              text-white/80
              leading-loose
              text-lg
              max-w-[420px]
              mb-8
              ">
                I'm Shubh Asawa,
                a Motion Designer,
                Video Editor and 3D Artist
                passionate about cinematic storytelling.
              </p>

              <p className="
              text-white/65
              leading-loose
              max-w-[520px]
              mb-10
              ">
                I specialize in anime-inspired visuals,
                cinematic edits,
                motion graphics,
                CGI environments
                and immersive digital experiences.
              </p>

              <h3 className="
              text-red-500
              text-4xl
              italic
              tracking-wide
              ">
                Shubh Asawa
              </h3>

            </div>

          </div>

          {/* EXPERIENCE */}

          <div className="
          relative
          min-h-[750px]
          overflow-hidden
          group
          ">

            <img
              src={cityImg}
              alt=""

              className="
              absolute inset-0
              w-full h-full
              object-cover
              brightness-[2.0]
              transition-all duration-[4000ms]
              group-hover:scale-110
              "
            />

            <div className="
            absolute inset-0
            bg-gradient-to-b
            from-black/40
            to-black/85
            " />

            <div className="
            relative z-10
            p-12 md:p-16
            ">

              <h2 className="
              uppercase
              tracking-[0.3em]
              text-red-500
              text-xl
              mb-16
              ">
                Experience
              </h2>

              <div className="space-y-16">

                <div className="relative pl-10">

                  <div className="
                  absolute left-0 top-2
                  w-4 h-4
                  rounded-full
                  bg-red-500
                  " />

                  <div className="
                  absolute left-[7px] top-6
                  w-[2px] h-[130px]
                  bg-red-500
                  " />

                  <p className="text-white/50 mb-3">
                    2024 — Present
                  </p>

                  <h3 className="
                  text-3xl
                  uppercase
                  mb-4
                  ">
                    Freelance Motion Designer
                  </h3>

                  <p className="
                  text-red-500
                  mb-5
                  ">
                    Creative Agency Projects
                  </p>

                  <p className="
                  text-white/70
                  leading-loose
                  max-w-[480px]
                  ">
                    Working on cinematic reels,
                    motion graphics,
                    anime-inspired edits
                    and storytelling visuals
                    for brands and creators.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* EDUCATION + SKILLS + TOOLS */}

      <motion.section

        initial={{
          opacity: 0,
          y: 100,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1.2,
        }}

        viewport={{
          once: true,
        }}

        className="border-b border-white/10"
      >

        <div className="grid lg:grid-cols-3">

          {/* EDUCATION */}

          <div className="
          relative
          min-h-[650px]
          border-r border-white/10
          overflow-hidden
          group
          ">

            <img
              src={endingImg}
              alt=""

              className="
              absolute inset-0
              w-full h-full
              object-cover
              brightness-[2.0]
              transition-all duration-[4000ms]
              group-hover:scale-110
              "
            />

            <div className="
            absolute inset-0
            bg-black/60
            " />

            <div className="
            relative z-10
            p-12 md:p-16
            ">

              <h2 className="
              uppercase
              tracking-[0.3em]
              text-red-500
              text-xl
              mb-14
              ">
                Education
              </h2>

              <div className="space-y-14">

                <div className="relative pl-10">

                  <div className="
                  absolute left-0 top-2
                  w-4 h-4
                  rounded-full
                  bg-red-500
                  " />

                  <p className="text-white/50 mb-2">
                    2022 — 2025
                  </p>

                  <h3 className="
                  text-2xl
                  uppercase
                  mb-3
                  ">
                    Bachelor of Computer Applications
                  </h3>

                  <p className="text-white/70 leading-loose">
                    GNIOT Institute of Technology
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* SKILLS */}

          <div className="
          bg-[#050505]
          border-r border-white/10
          p-12 md:p-16
          ">

            <h2 className="
            uppercase
            tracking-[0.3em]
            text-red-500
            text-xl
            mb-14
            ">
              Skills
            </h2>

            {[
              ['Motion Design', '90%'],
              ['3D Modeling', '85%'],
              ['Video Editing', '92%'],
              ['Visual Storytelling', '95%'],
              ['Lighting & Rendering', '80%'],
            ].map((item, index) => (

              <div key={index} className="mb-10">

                <div className="
                flex justify-between
                mb-4
                uppercase
                tracking-[0.15em]
                text-sm
                ">

                  <span className="text-white/75">
                    {item[0]}
                  </span>

                  <span className="text-white/55">
                    {item[1]}
                  </span>

                </div>

                <div className="
                h-[2px]
                bg-white/10
                ">

                  <div
                    className="h-full bg-red-500"
                    style={{ width: item[1] }}
                  />

                </div>

              </div>

            ))}

          </div>

          {/* TOOLS */}

          <div className="
          relative
          min-h-[650px]
          overflow-hidden
          group
          ">

            <img
              src={workspaceImg}
              alt=""

              className="
              absolute inset-0
              w-full h-full
              object-cover
              brightness-[1.2]
              transition-all duration-[4000ms]
              group-hover:scale-110
              "
            />

            <div className="
            absolute inset-0
            bg-black/65
            " />

            <div className="
            relative z-10
            p-12 md:p-16
            ">

              <h2 className="
              uppercase
              tracking-[0.3em]
              text-red-500
              text-xl
              mb-14
              ">
                Tools of My Craft
              </h2>

              <div className="
              grid grid-cols-3
              gap-10
              ">

                {tools.map((tool, index) => (

                  <div
                    key={index}
                    className="
                    flex items-center justify-center
                    "
                  >

                    <motion.img

                      whileHover={{
                        scale: 1.2,
                        rotate: 4,
                        y: -10,
                      }}

                      transition={{
                        duration: 0.4,
                      }}

                      src={tool}
                      alt=""

                      className="
                      w-16
                      opacity-90
                      "
                    />

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* FINAL SECTION */}

      <motion.section

        initial={{
          opacity: 0,
          y: 100,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1.2,
        }}

        viewport={{
          once: true,
        }}

        className="
        relative
        min-h-[500px]
        overflow-hidden
        "
      >

        <img
          src={endingImg}
          alt=""

          className="
          absolute inset-0
          w-full h-full
          object-cover
          brightness-[1.0]
          "
        />

        <div className="
        absolute inset-0
        bg-gradient-to-b
        from-black/60
        via-black/70
        to-black
        " />

        <div className="
        relative z-10
        container mx-auto
        px-6 py-28
        ">

          <div className="
          grid md:grid-cols-2
          gap-20
          items-center
          ">

            {/* INTERESTS */}

            <div>

              <h2 className="
              uppercase
              tracking-[0.3em]
              text-red-500
              text-xl
              mb-14
              ">
                Interests
              </h2>

              <div className="
              grid grid-cols-2
              gap-12
              ">

                <div className="flex items-center gap-4">
                  <FaCamera className="text-red-500 text-3xl" />
                  <span className="uppercase tracking-[0.2em]">
                    Photography
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <FaGamepad className="text-red-500 text-3xl" />
                  <span className="uppercase tracking-[0.2em]">
                    Gaming
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <MdMovie className="text-red-500 text-3xl" />
                  <span className="uppercase tracking-[0.2em]">
                    Cinema
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <MdTravelExplore className="text-red-500 text-3xl" />
                  <span className="uppercase tracking-[0.2em]">
                    Travel
                  </span>
                </div>

              </div>

            </div>

            {/* DOWNLOAD */}

            <div className="text-center">

              <motion.a

                whileHover={{
                  scale: 1.05,
                }}

                href="/resume/shubh-asawa-resume.pdf"
                download

                className="
                inline-flex
                items-center justify-center
                border border-red-500
                px-14 py-6
                uppercase
                tracking-[0.25em]
                hover:bg-red-600
                transition-all duration-500
                "
              >
                Download Resume (PDF)
              </motion.a>

              <p className="
              text-white/45
              mt-8
              ">
                Explore my creative journey,
                cinematic experience and visual storytelling.
              </p>

            </div>

          </div>

        </div>

      </motion.section>

      <Footer />

    </div>

  )
}

export default Resume