// import Navbar from '../components/layout/Navbar'
// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'

// import MagneticButton from '../components/ui/MagneticButton'
// import HeroScene from '../components/three/HeroScene'

// function Home() {

//   return (

//     <div className="
//     relative
//     min-h-screen
//     overflow-hidden
//     bg-black
//     text-white
//     ">

//       {/* NAVBAR */}
//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="
//       relative
//       h-screen
//       flex items-center justify-center
//       overflow-hidden
//       ">

//         {/* THREE JS SCENE */}
//         <HeroScene />

//         {/* RED GLOW */}
//         <div className="
//         absolute top-0 left-1/2
//         -translate-x-1/2
//         w-[800px] h-[800px]
//         bg-red-600/20
//         blur-[150px]
//         rounded-full
//         hero-flash
//         "></div>

//         {/* PURPLE GLOW */}
//         <div className="
//         absolute bottom-0 right-0
//         w-[600px] h-[600px]
//         bg-purple-600/20
//         blur-[140px]
//         rounded-full
//         hero-flash
//         "></div>

//         {/* CONTENT */}
//         <div className="
//         container
//         relative z-10
//         text-center
//         ">

//           {/* SMALL TEXT */}
//           <motion.p
//             initial={{ opacity:0, y:40 }}
//             animate={{ opacity:1, y:0 }}
//             transition={{ duration:1 }}
//             className="
//             uppercase
//             tracking-[0.5em]
//             text-red-500
//             mb-8
//             text-sm
//             "
//           >
//             Anime Hyper Motion Designer
//           </motion.p>

//           {/* MAIN TITLE */}
//           <motion.h1
//             initial={{ opacity:0, y:100 }}
//             animate={{ opacity:1, y:0 }}
//             transition={{ duration:1.2 }}
//             className="
//             big-title
//             text-[5rem]
//             md:text-[11rem]
//             leading-none
//             uppercase
//             "
//           >

//             SHUBH

//             <br />

//             <span className="
//             gradient-text
//             drop-shadow-[0_0_40px_rgba(255,0,0,0.8)]
//             ">
//               ASAWA
//             </span>

//           </motion.h1>

//           {/* DESCRIPTION */}
//           <motion.p
//             initial={{ opacity:0 }}
//             animate={{ opacity:1 }}
//             transition={{ delay:0.5, duration:1 }}
//             className="
//             max-w-3xl
//             mx-auto
//             mt-8
//             text-white/60
//             text-lg
//             leading-relaxed
//             "
//           >
//             Creating anime-inspired motion graphics,
//             cinematic CGI visuals,
//             energetic transitions,
//             immersive storytelling,
//             and futuristic visual experiences.
//           </motion.p>

//           {/* BUTTONS */}
//           <motion.div
//             initial={{ opacity:0, y:40 }}
//             animate={{ opacity:1, y:0 }}
//             transition={{ delay:0.8, duration:1 }}
//             className="
//             flex items-center justify-center
//             gap-6
//             mt-12
//             flex-wrap
//             "
//           >

//             {/* PORTFOLIO BUTTON */}
//             <Link to="/portfolio">

//               <MagneticButton>
//                 ENTER PORTFOLIO
//               </MagneticButton>

//             </Link>

//             {/* SHOWREEL BUTTON */}
//             <button className="
//             px-10 py-5
//             border border-purple-500/40
//             bg-purple-500/10
//             hover:bg-purple-500/20
//             hover:border-purple-400
//             transition
//             uppercase
//             tracking-[0.25em]
//             purple-glow
//             backdrop-blur-xl
//             ">

//               WATCH SHOWREEL

//             </button>

//           </motion.div>

//         </div>

//       </section>

//     </div>

//   )
// }

// export default Home

// import Navbar from '../components/layout/Navbar'
// import Footer from '../components/layout/Footer'
// import MagneticButton from '../components/ui/MagneticButton'

// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'

// import {
//   FaInstagram,
//   FaLinkedin,
//   FaBehance,
// } from 'react-icons/fa'

// import SamuraiHero from '../assets/images/samurai-hero.png'

// function Home() {

//   return (

//     <div className="
//     bg-black
//     text-white
//     overflow-hidden
//     ">

//       {/* NAVBAR */}
//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="
//       relative
//       min-h-screen
//       flex items-center
//       overflow-hidden
//       pt-32
//       ">

//         {/* BACKGROUND */}
//         <div className="
//         absolute inset-0
//         bg-gradient-to-br
//         from-red-950/30
//         via-black
//         to-black
//         "></div>

//         {/* RED GLOW */}
//         <div className="
//         absolute top-0 right-0
//         w-[1000px] h-[1000px]
//         bg-red-600/20
//         blur-[180px]
//         rounded-full
//         "></div>

//         {/* PURPLE GLOW */}
//         <div className="
//         absolute bottom-0 left-0
//         w-[700px] h-[700px]
//         bg-purple-600/10
//         blur-[180px]
//         rounded-full
//         "></div>

//         {/* SOCIAL SIDEBAR */}
//         <div className="
//         hidden lg:flex
//         absolute left-10 top-1/2
//         -translate-y-1/2
//         flex-col gap-8
//         z-20
//         ">

//           <a
//             href="https://www.instagram.com/shubhdesign3d"
//             target="_blank"
//             className="
//             text-white/50
//             hover:text-red-500
//             transition
//             text-xl
//             "
//           >
//             <FaInstagram />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/shubhdesign3d/"
//             target="_blank"
//             className="
//             text-white/50
//             hover:text-red-500
//             transition
//             text-xl
//             "
//           >
//             <FaLinkedin />
//           </a>

//           <a
//             href="https://www.behance.net/shubhasawa1"
//             target="_blank"
//             className="
//             text-white/50
//             hover:text-red-500
//             transition
//             text-xl
//             "
//           >
//             <FaBehance />
//           </a>

//         </div>

//         {/* CONTENT CONTAINER */}
//         <div className="
//         container
//         relative z-10
//         min-h-screen
//         flex items-center
//         ">

//           {/* LEFT SIDE CONTENT */}
//           <div className="
//           relative z-20
//           max-w-[650px]
//           ">

//             <motion.p
//               initial={{ opacity:0, y:30 }}
//               animate={{ opacity:1, y:0 }}
//               transition={{ duration:1 }}
//               className="
//               uppercase
//               tracking-[0.5em]
//               text-red-500
//               mb-6
//               text-sm
//               "
//             >
//               Motion Designer • 3D Artist • Visual Storyteller
//             </motion.p>

//             <motion.h1
//               initial={{ opacity:0, y:80 }}
//               animate={{ opacity:1, y:0 }}
//               transition={{ duration:1.2 }}
//               className="
//               big-title
//               text-[5rem]
//               md:text-[8rem]
//               xl:text-[10rem]
//               leading-[0.9]
//               uppercase
//               "
//             >

//               SHUBH

//               <br />

//               <span className="
//               gradient-text
//               drop-shadow-[0_0_50px_rgba(255,0,0,0.8)]
//               ">
//                 ASAWA
//               </span>

//             </motion.h1>

//             <motion.p
//               initial={{ opacity:0 }}
//               animate={{ opacity:1 }}
//               transition={{ delay:0.4, duration:1 }}
//               className="
//               text-white/60
//               text-lg
//               leading-relaxed
//               max-w-xl
//               mt-8
//               "
//             >
//               Creating cinematic anime visuals,
//               CGI motion experiences,
//               immersive storytelling,
//               and emotionally powerful digital art.
//             </motion.p>

//             {/* BUTTONS */}
//             <motion.div
//               initial={{ opacity:0, y:40 }}
//               animate={{ opacity:1, y:0 }}
//               transition={{ delay:0.8, duration:1 }}
//               className="
//               flex flex-wrap
//               items-center
//               gap-6
//               mt-12
//               "
//             >

//               <Link to="/portfolio">

//                 <MagneticButton>
//                   VIEW PORTFOLIO
//                 </MagneticButton>

//               </Link>

//               <button className="
//               px-10 py-5
//               border border-purple-500/30
//               bg-purple-500/10
//               backdrop-blur-xl
//               hover:bg-purple-500/20
//               hover:border-purple-400
//               transition
//               uppercase
//               tracking-[0.25em]
//               purple-glow
//               ">

//                 MY WORK

//               </button>

//             </motion.div>

//           </div>

//         </div>

//         {/* HERO IMAGE */}
//         <motion.div
//           initial={{ opacity:0, x:100 }}
//           animate={{ opacity:1, x:0 }}
//           transition={{ duration:1.4 }}
//           className="
//           absolute
//           right-[-5%]
//           top-1/2
//           -translate-y-1/2
//           w-[60vw]
//           h-[100vh]
//           hidden lg:flex
//           items-center justify-center
//           pointer-events-none
//           "
//         >

//           {/* RED MOON GLOW */}
//           <div className="
//           absolute
//           top-1/2 left-1/2
//           -translate-x-1/2
//           -translate-y-1/2
//           w-[500px]
//           h-[500px]
//           bg-red-600/40
//           blur-[140px]
//           rounded-full
//           "></div>

//           {/* IMAGE */}
//           <img
//             src={SamuraiHero}
//             alt="Samurai Hero"
//             className="
//             relative z-10
//             w-full
//             h-full
//             object-contain
//             opacity-90
//             mix-blend-lighten
//             drop-shadow-[0_0_120px_rgba(255,0,0,0.45)]
//             "
//           />

//           {/* BLACK FADE */}
//           <div className="
//           absolute inset-0
//           bg-gradient-to-l
//           from-transparent
//           via-black/10
//           to-black
//           "></div>

//         </motion.div>

//       </section>

//       {/* EXPERTISE SECTION */}
//       <section className="
//       py-24
//       border-t border-white/10
//       border-b border-white/10
//       bg-white/[0.02]
//       ">

//         <div className="
//         container
//         grid md:grid-cols-2 lg:grid-cols-4
//         gap-8
//         ">

//           {[
//             'Motion Design',
//             'Anime Edits',
//             'CGI Visuals',
//             'Visual Storytelling',
//           ].map((item,index)=>(

//             <div
//               key={index}
//               className="
//               glass
//               rounded-[30px]
//               p-8
//               hover:-translate-y-2
//               transition duration-500
//               "
//             >

//               <p className="
//               text-red-500
//               uppercase
//               tracking-[0.3em]
//               text-xs
//               mb-4
//               ">
//                 Expertise
//               </p>

//               <h3 className="
//               text-4xl
//               big-title
//               leading-none
//               ">
//                 {item}
//               </h3>

//             </div>

//           ))}

//         </div>

//       </section>

//       {/* RECENT WORK */}
//       <section className="py-32">

//         <div className="container">

//           <div className="mb-20">

//             <p className="
//             uppercase
//             tracking-[0.4em]
//             text-red-500
//             mb-4
//             ">
//               Recent Work
//             </p>

//             <h2 className="
//             big-title
//             text-[4rem]
//             md:text-[7rem]
//             leading-none
//             ">
//               CINEMATIC
//               <br />
//               PROJECTS
//             </h2>

//           </div>

//           <div className="
//           grid lg:grid-cols-3
//           gap-10
//           ">

//             {[
//               {
//                 title:'Karna Cinematic',
//                 image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
//               },

//               {
//                 title:'Anime Motion Reel',
//                 image:'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
//               },

//               {
//                 title:'CGI Product Visual',
//                 image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
//               },

//             ].map((project,index)=>(

//               <div
//                 key={index}
//                 className="
//                 relative
//                 group
//                 overflow-hidden
//                 rounded-[30px]
//                 "
//               >

//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="
//                   h-[500px]
//                   w-full
//                   object-cover
//                   group-hover:scale-110
//                   transition duration-700
//                   "
//                 />

//                 <div className="
//                 absolute inset-0
//                 bg-gradient-to-t
//                 from-black
//                 via-black/20
//                 to-transparent
//                 "></div>

//                 <div className="
//                 absolute bottom-0 left-0
//                 p-8
//                 ">

//                   <p className="
//                   uppercase
//                   tracking-[0.3em]
//                   text-red-500
//                   text-xs
//                   mb-3
//                   ">
//                     Featured Project
//                   </p>

//                   <h3 className="
//                   text-4xl
//                   big-title
//                   ">
//                     {project.title}
//                   </h3>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* CTA SECTION */}
//       <section className="
//       py-32
//       border-t border-white/10
//       relative
//       overflow-hidden
//       ">

//         <div className="
//         absolute inset-0
//         bg-gradient-to-r
//         from-red-900/20
//         to-purple-900/20
//         "></div>

//         <div className="
//         container
//         relative z-10
//         text-center
//         ">

//           <p className="
//           uppercase
//           tracking-[0.4em]
//           text-red-500
//           mb-6
//           ">
//             Let’s Create
//           </p>

//           <h2 className="
//           big-title
//           text-[4rem]
//           md:text-[8rem]
//           leading-none
//           mb-10
//           ">

//             SOMETHING
//             <br />

//             <span className="gradient-text">
//               CINEMATIC
//             </span>

//           </h2>

//           <Link to="/contact">

//             <MagneticButton>
//               CONTACT ME
//             </MagneticButton>

//           </Link>

//         </div>

//       </section>

//       {/* FOOTER */}
//       <Footer />

//     </div>
//   )
// }

// export default Home

import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MagneticButton from '../components/ui/MagneticButton'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import {
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaWhatsapp,
} from 'react-icons/fa'

import SamuraiHero from '../assets/images/samurai-hero.png'
import AboutBg from '../assets/images/about-bg.png'
import VideoShowcase from '../components/home/VideoShowcase'
import ShowreelSection from '../components/home/ShowreelSection'
import ThankYouSection from '../components/home/ThankYouSection'
import SamuraiExpertise from '../assets/images/samurai-expertise.png'
import SamuraiBattle from '../assets/images/samurai-battle.png'

import projects from "../data/projects";

import BlenderLogo from '../assets/images/blender.png'
import AeLogo from '../assets/images/after-effects.png'
import PsLogo from '../assets/images/photoshop.png'
import PrLogo from '../assets/images/premiere-pro.png'
import AiLogo from '../assets/images/illustrator.png'
import FigmaLogo from '../assets/images/figma.png'
import DavinciLogo from '../assets/images/davinci.png'

import SamuraiOrbit from '../assets/images/samurai-orbit.png'

function Home() {

  const [paused, setPaused] = useState(false)
  return (

    <div className="
    bg-black
    text-white
    overflow-hidden
    ">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
<section
  className="
  relative
  min-h-[700px]
md:min-h-[100svh]
  overflow-hidden
  flex items-center
  "
>

  {/* BACKGROUND */}
  <div
    className="
    absolute inset-0
    bg-black
    "
  ></div>

  {/* RED ATMOSPHERE */}
  <div
    className="
    absolute top-0 right-0
    w-[1200px] h-[1200px]
    bg-red-700/20
    blur-[180px]
    rounded-full
    "
  ></div>

  {/* PURPLE ATMOSPHERE */}
  <div
    className="
    absolute bottom-0 left-0
    w-[900px] h-[900px]
    bg-purple-700/10
    blur-[180px]
    rounded-full
    "
  ></div>

  {/* CINEMATIC IMAGE COMPOSITION */}
<motion.div

  initial={{
    opacity:0,
    scale:1.04,
  }}

  animate={{
    opacity:1,
    scale:1,
  }}

  transition={{
    duration:1.5,
  }}

  className="
  absolute
  inset-0
  z-0
  overflow-hidden
  "
>

  {/* IMAGE */}
  <motion.div

    initial={{
      scale: 1.08,
    }}

    animate={{
      scale: 1.02,
      y: [-6, 6, -6],
    }}

    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}

    className="
    absolute

    top-[12%]
    md:top-[8%]

    right-[-55%]
    sm:right-[-40%]
    md:right-[-18%]
    lg:right-[-10%]

    w-[150vw]
    sm:w-[120vw]
    md:w-[82vw]
    lg:w-[72vw]

    h-[60vh]
    sm:h-[70vh]
    md:h-[100vh]

    will-change-transform
    transform-gpu

    [backface-visibility:hidden]
    [transform:translateZ(0)]
    "

    style={{
      backgroundImage:`url(${SamuraiHero})`,
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center right',
      backgroundSize:'contain',
    }}
  ></motion.div>

  {/* LEFT DARK FADE */}
  <div
    className="
    absolute
    inset-0

    bg-gradient-to-r
    from-black
    via-black/80
    to-transparent
    "
  ></div>

  {/* BOTTOM FADE */}
  <div
    className="
    absolute
    inset-0

    bg-gradient-to-t
    from-black
    via-transparent
    to-transparent
    "
  ></div>

  {/* RED OVERLAY */}
  <div
    className="
    absolute
    inset-0

    bg-red-900/10

    mix-blend-screen
    "
  ></div>

</motion.div>

 {/* SOCIAL SIDEBAR */}
<div

  className="
  absolute

  left-4
  md:left-6

  top-[68%]
  md:top-[58%]
  lg:top-1/2

  -translate-y-1/2

  flex
  flex-col

  gap-4
  md:gap-6

  z-20
  "

>

  <a
    href="https://wa.me/917017288428"
    target="_blank"
    rel="noreferrer"
    className="
    text-white/60
    hover:text-red-500
    transition
    duration-300

    text-base
    md:text-xl
    "
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://www.instagram.com/shubhdesign3d"
    target="_blank"
    className="
    text-white/40
    hover:text-red-500
    transition

    text-base
    md:text-xl
    "
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.linkedin.com/in/shubhdesign3d/"
    target="_blank"
    className="
    text-white/40
    hover:text-red-500
    transition

    text-base
    md:text-xl
    "
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.behance.net/shubhasawa1"
    target="_blank"
    className="
    text-white/40
    hover:text-red-500
    transition

    text-base
    md:text-xl
    "
  >
    <FaBehance />
  </a>

</div>

  {/* MAIN CONTENT */}
  <div
    className="
    container
    relative z-20
   min-h-[700px]
md:min-h-[100svh]
    flex items-center

    px-4
    sm:px-6
    md:px-8
    "
  >

    <div
  className="
  max-w-full
  md:max-w-[520px]
  lg:max-w-[650px]

  ml-12
  md:ml-16
  lg:ml-24

  pt-28
  md:pt-20
  lg:pt-24

  px-2
  md:px-0
  "
>

      <motion.p
        initial={{ opacity:0, y:30 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        className="
        uppercase
        tracking-[0.35em]
        md:tracking-[0.5em]

        text-red-500

        mb-6
        md:mb-8

        text-[10px]
        sm:text-xs
        md:text-sm
        "
      >
        Motion Designer • 3D Artist • Visual Storyteller
      </motion.p>

      <motion.h1
        initial={{ opacity:0, y:80 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1.2 }}
        className="
        big-title

        text-[3rem]
sm:text-[4rem]
md:text-[5rem]
lg:text-[7rem]
xl:text-[10rem]

        leading-[0.9]
        uppercase
        "
      >

        SHUBH

        <br />

        <span
          className="
          gradient-text
          drop-shadow-[0_0_60px_rgba(255,0,0,0.8)]
          "
        >
          ASAWA
        </span>

      </motion.h1>

      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.4, duration:1 }}
        className="
        text-white/60

        text-base
        md:text-lg

        leading-relaxed

        max-w-xl
        mt-6
        md:mt-8
        "
      >
        Creating cinematic anime visuals,
        CGI motion experiences,
        immersive storytelling,
        and emotionally powerful digital art.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ delay:0.8, duration:1 }}
        className="
        flex flex-wrap
        items-center

        gap-4
        md:gap-6

        mt-8
        md:mt-10
        "
      >

        <Link to="/portfolio">

          <MagneticButton>
            VIEW PORTFOLIO
          </MagneticButton>

        </Link>

        <Link to="/contact">

          <button
            className="
            px-8 py-4
            md:px-10 md:py-5

            border border-purple-500/30
            bg-purple-500/10

            backdrop-blur-xl

            hover:bg-purple-500/20
            hover:border-purple-400

            transition

            uppercase
            tracking-[0.2em]
            md:tracking-[0.25em]

            purple-glow

            text-sm
            md:text-base
            "
          >

            CONTACT US

          </button>

        </Link>

      </motion.div>

    </div>

  </div>

</section>

   {/* EXPERTISE SECTION */}
<section
  className="
  relative

  py-24
  md:py-40

  overflow-hidden

  border-t
  border-b

  border-white/10

  bg-black
  "
>

  {/* BACKGROUND IMAGE */}
  <motion.div

    initial={{ scale:1.05 }}

    whileInView={{ scale:1 }}

    transition={{ duration:2 }}

    className="
    absolute inset-0
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

      src={SamuraiExpertise}
      alt="Samurai Background"

      className="
      w-full
      h-full

      object-cover

      opacity-40
      "
    />

  </motion.div>

  {/* DARK CINEMATIC OVERLAY */}
  <div
    className="
    absolute inset-0
    bg-black/20
    "
  ></div>

  {/* TOP/BOTTOM CINEMATIC FADE */}
  <div
    className="
    absolute
    inset-0

    bg-gradient-to-t
    from-black
    via-transparent
    to-black/20
    "
  ></div>

  {/* SUBTLE GRID */}
  <div
    className="
    absolute inset-0

    opacity-[0.04]

    bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

    bg-[size:80px_80px]
    "
  ></div>

  {/* MAIN CONTAINER */}
  <div
    className="
    max-w-[1350px]

    mx-auto

    px-4
    sm:px-6
    md:px-10

    relative
    z-10
    "
  >

    {/* MAIN LAYOUT */}
    <div
      className="
      grid

      grid-cols-1
      lg:grid-cols-[0.9fr_1.1fr]

      gap-12
      md:gap-20

      items-center
      "
    >

      {/* LEFT SIDE */}
      <motion.div

        initial={{ opacity:0, x:-60 }}

        whileInView={{ opacity:1, x:0 }}

        transition={{ duration:1 }}

        viewport={{ once:true }}
      >

        {/* SMALL LABEL */}
        <p
          className="
          uppercase

          tracking-[0.25em]
          md:tracking-[0.5em]

          text-red-500

          text-[10px]
          md:text-sm

          mb-4
          md:mb-6
          "
        >
          Creative Expertise
        </p>

        {/* TITLE */}
        <h2
          className="
          big-title

          text-[3rem]
          sm:text-[4rem]
          md:text-[6rem]
          xl:text-[7rem]

          leading-[0.92]

          uppercase

          mb-6
          md:mb-10
          "
        >

          DIGITAL

          <br />

          ARSENAL

        </h2>

        {/* DESCRIPTION */}
        <p
          className="
          text-white/65

          text-base
          md:text-lg

          leading-[1.9]
          md:leading-relaxed

          max-w-full
          md:max-w-[520px]
          "
        >

          A blend of creativity,
          cinematic storytelling,
          motion graphics,
          anime aesthetics,
          and immersive CGI visuals
          crafted to create emotional impact.

        </p>

      </motion.div>

      {/* RIGHT SIDE CARDS */}
      <div
        className="
        grid

        grid-cols-1
        sm:grid-cols-2

        gap-5
        md:gap-8
        "
      >

        {[
          {
            title:'Motion Design',
            icon:'✦',
            number:'01',
            text:"Creating cinematic visuals",
          },

          {
            title:'Anime Edits',
            icon:'赤',
            number:'02',
            text:"Anime-inspired emotional storytelling",
          },

          {
            title:'CGI Visuals',
            icon:'◉',
            number:'03',
            text:"Immersive 3D cinematic worlds",
          },

          {
            title:'Visual Storytelling',
            icon:'刀',
            number:'04',
            text:"Creating impactful visual experiences",
          },

        ].map((item,index)=>(

          <motion.div

            key={index}

            initial={{ opacity:0, y:60 }}

            whileInView={{ opacity:1, y:0 }}

            transition={{
              duration:0.8,
              delay:index * 0.15,
            }}

            viewport={{ once:true }}

            whileHover={{
              y:-10,
              scale:1.02,
            }}

            className="
            group
            relative

            overflow-hidden

            rounded-[24px]
            md:rounded-[32px]

            border
            border-white/10

            bg-black/20

            backdrop-blur-xl

            p-5
            md:p-8

            min-h-[250px]
            md:min-h-[320px]

            transition
            duration-500

            shadow-[0_0_40px_rgba(255,0,0,0.08)]

            hover:border-red-500/30
            hover:bg-black/35

            hover:shadow-[0_0_60px_rgba(255,0,0,0.18)]
            "
          >

            {/* CARD LIGHT */}
            <div
              className="
              absolute
              inset-0

              opacity-0
              group-hover:opacity-100

              transition
              duration-700

              bg-gradient-to-br
              from-white/[0.04]
              via-transparent
              to-red-500/[0.04]
              "
            ></div>

            {/* TOP */}
            <div
              className="
              relative z-10

              flex
              items-center
              justify-between

              mb-10
              md:mb-14
              "
            >

              <span
                className="
                text-red-500

                text-3xl
                md:text-4xl

                group-hover:scale-110

                transition
                duration-500
                "
              >
                {item.icon}
              </span>

              <span
                className="
                text-white/15

                big-title

                text-4xl
                md:text-5xl
                "
              >
                {item.number}
              </span>

            </div>

            {/* TITLE */}
            <h3
              className="
              relative z-10

              text-[2rem]
              md:text-4xl

              big-title

              leading-none

              mb-5
              md:mb-8

              group-hover:text-red-400

              transition
              duration-500
              "
            >

              {item.title}

            </h3>

            {/* TEXT */}
            <p
              className="
              relative z-10

              text-white/55

              text-sm
              md:text-base

              leading-[1.8]

              group-hover:text-white/75

              transition
              duration-500
              "
            >

              {item.text}

            </p>

            {/* BOTTOM LINE */}
            <div
              className="
              absolute
              bottom-0
              left-0

              h-[2px]

              w-0

              bg-red-500

              group-hover:w-full

              transition-all
              duration-700
              "
            ></div>

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</section>

{/* RECENT WORK SECTION */}
<section
  className="
  relative

  py-24
  md:py-32

  overflow-hidden

  border-t
  border-b

  border-white/10

  bg-black
  "
>

  {/* BACKGROUND IMAGE */}
  <motion.div

    initial={{ scale:1.05 }}

    whileInView={{ scale:1 }}

    transition={{ duration:2 }}

    className="
    absolute inset-0
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

      src={SamuraiBattle}
      alt="Samurai Battle"

      className="
      w-full
      h-full

      object-cover

      opacity-55
      "
    />

  </motion.div>

  {/* DARK OVERLAY */}
  <div
    className="
    absolute inset-0
    bg-black/40
    "
  ></div>

  {/* CINEMATIC GRADIENT */}
  <div
    className="
    absolute inset-0

    bg-gradient-to-r
    from-black
    via-black/50
    to-black/80
    "
  ></div>

  {/* RED ATMOSPHERE */}
  <div
    className="
    absolute

    top-1/2
    left-1/2

    -translate-x-1/2
    -translate-y-1/2

    w-[450px]
    h-[450px]

    md:w-[900px]
    md:h-[900px]

    bg-red-600/10

    blur-[160px]

    rounded-full
    "
  ></div>

  {/* GRID TEXTURE */}
  <div
    className="
    absolute inset-0

    opacity-[0.03]

    bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

    bg-[size:80px_80px]
    "
  ></div>

  <div
    className="
    w-full

    relative
    z-10
    "
  >

    {/* TOP AREA */}
    <div
      className="
      max-w-[1400px]

      mx-auto

      px-4
      sm:px-6
      md:px-8

      flex
      flex-col
      lg:flex-row

      lg:items-end
      lg:justify-between

      gap-10

      mb-14
      md:mb-20
      "
    >

      {/* LEFT CONTENT */}
      <motion.div

        initial={{ opacity:0, y:60 }}

        whileInView={{ opacity:1, y:0 }}

        transition={{ duration:1 }}

        viewport={{ once:true }}
      >

        {/* LABEL */}
        <p
          className="
          uppercase

          tracking-[0.25em]
          md:tracking-[0.5em]

          text-red-500

          text-[10px]
          md:text-sm

          mb-4
          md:mb-6
          "
        >
          Recent Work
        </p>

        {/* TITLE */}
        <h2
          className="
          big-title

          text-[3rem]
          sm:text-[4rem]
          md:text-[6rem]

          leading-[0.92]

          uppercase

          mb-6
          md:mb-8
          "
        >

          CINEMATIC

          <br />

          PROJECTS

        </h2>

        {/* DESCRIPTION */}
        <p
          className="
          text-white/60

          text-base
          md:text-lg

          leading-[1.9]
          md:leading-relaxed

          max-w-full
          md:max-w-[520px]
          "
        >

          A collection of anime-inspired
          cinematic visuals,
          immersive storytelling,
          CGI motion work,
          and emotionally powerful digital experiences.

        </p>

      </motion.div>

      {/* BUTTON */}
      <motion.div

        initial={{ opacity:0, y:40 }}

        animate={{ opacity:1, y:0 }}

        transition={{
          delay:0.8,
          duration:1,
        }}

        className="
        flex
        flex-wrap

        items-center

        gap-6

        mt-2
        md:mt-12
        "
      >

        <Link to="/portfolio">

          <MagneticButton>
            VIEW MORE
          </MagneticButton>

        </Link>

      </motion.div>

    </div>

    {/* PROJECT SLIDER */}
    <div
      className="
      relative

      overflow-hidden

      w-full
      "
    >

      {/* LEFT FADE */}
      <div
        className="
        absolute

        left-0
        top-0

        w-10
        md:w-40

        h-full

        z-20

        bg-gradient-to-r
        from-black
        to-transparent

        pointer-events-none
        "
      ></div>

      {/* RIGHT FADE */}
      <div
        className="
        absolute

        right-0
        top-0

        w-10
        md:w-24

        h-full

        z-20

        bg-gradient-to-l
        from-black
        to-transparent

        pointer-events-none
        "
      ></div>

      {/* SLIDER */}
      <motion.div

        animate={{
          x: paused ? 0 : ['0%', '-50%'],
        }}

        transition={{
          duration: 45,
          repeat: Infinity,
          ease: 'linear',
        }}

        className="
        flex

        gap-4
        md:gap-8

        w-max

        px-4
        md:px-8
        "
      >

        {[...projects, ...projects].map((project,index)=>(

          <Link
            key={index}
            to={`/portfolio/${project.slug}`}
            className="block"
          >

            <motion.div

              onHoverStart={() => setPaused(true)}

              onHoverEnd={() => setPaused(false)}

              whileHover={{
                y:-16,
                scale:1.02,
              }}

              className="
              group
              relative

              overflow-hidden

              rounded-[24px]
              md:rounded-[36px]

              border
              border-white/10

              bg-black/20

              backdrop-blur-xl

              aspect-[16/9]

              min-w-[300px]
              sm:min-w-[420px]
              md:min-w-[720px]

              transition
              duration-500

              hover:border-red-500/30

              hover:shadow-[0_0_70px_rgba(255,0,0,0.22)]
              "
            >

              {/* IMAGE */}
              <img
                src={project.thumbnail}
                alt={project.title}

                className="
                absolute
                inset-0

                w-full
                h-full

                object-cover

                group-hover:scale-110

                transition
                duration-700
                "
              />

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0

                bg-gradient-to-t
                from-black
                via-black/30
                to-transparent
                "
              ></div>

              {/* LIGHT REFLECTION */}
              <div
                className="
                absolute
                inset-0

                opacity-0
                group-hover:opacity-100

                transition
                duration-700

                bg-gradient-to-br
                from-white/[0.08]
                via-transparent
                to-red-500/[0.05]
                "
              ></div>

              {/* RED GLOW */}
              <div
                className="
                absolute inset-0

                opacity-0
                group-hover:opacity-100

                bg-red-500/10

                transition
                duration-500
                "
              ></div>

              {/* CONTENT */}
              <div
                className="
                absolute

                bottom-0
                left-0

                p-5
                sm:p-6
                md:p-10

                z-10
                "
              >

                {/* LABEL */}
                <p
                  className="
                  uppercase

                  tracking-[0.2em]
                  md:tracking-[0.35em]

                  text-red-500

                  text-[9px]
                  md:text-xs

                  mb-3
                  md:mb-4
                  "
                >
                  Featured Work
                </p>

                {/* TITLE */}
                <h3
                  className="
                  text-[2rem]
                  sm:text-[2.8rem]
                  md:text-5xl

                  big-title

                  leading-none

                  mb-4
                  md:mb-6

                  group-hover:text-red-400

                  transition
                  duration-500
                  "
                >

                  {project.title}

                </h3>

                {/* LINE */}
                <div
                  className="
                  w-12
                  md:w-16

                  h-[2px]

                  bg-red-500

                  group-hover:w-24
                  md:group-hover:w-28

                  transition-all
                  duration-500
                  "
                ></div>

              </div>

            </motion.div>

          </Link>

        ))}

      </motion.div>

    </div>

  </div>

</section>

{/* CREATIVE STACK SECTION */}
<section
  className="
  relative

  py-24
  md:py-40

  overflow-hidden

  border-t
  border-white/10

  bg-black
  "
>

  {/* BACKGROUND IMAGE */}
  <motion.div

    initial={{ scale:1.1 }}

    whileInView={{
      scale:1,
      y:-20,
    }}

    transition={{
      duration:2,
      ease:'easeOut',
    }}

    viewport={{ once:true }}

    className="
    absolute inset-0
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

      src={SamuraiOrbit}
      alt="Samurai Background"

      className="
      w-full
      h-full

      object-cover

      opacity-40
      "
    />

  </motion.div>

  {/* DARK OVERLAY */}
  <div
    className="
    absolute inset-0
    bg-black/55
    "
  ></div>

  {/* RED ATMOSPHERE */}
  <div
    className="
    absolute

    top-1/2
    left-1/2

    -translate-x-1/2
    -translate-y-1/2

    w-[450px]
    h-[450px]

    md:w-[900px]
    md:h-[900px]

    bg-red-600/10

    blur-[180px]

    rounded-full
    "
  ></div>

  {/* GRID TEXTURE */}
  <div
    className="
    absolute inset-0

    opacity-[0.03]

    bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

    bg-[size:80px_80px]
    "
  ></div>

  {/* MAIN CONTAINER */}
  <div
    className="
    max-w-[1400px]

    mx-auto

    px-4
    sm:px-6
    md:px-8

    relative
    z-10

    grid

    grid-cols-1
    lg:grid-cols-[0.8fr_1.2fr]

    gap-14
    md:gap-20

    items-center
    "
  >

    {/* LEFT CONTENT */}
    <motion.div

      initial={{ opacity:0, y:50 }}

      whileInView={{ opacity:1, y:0 }}

      transition={{ duration:1 }}

      viewport={{ once:true }}
    >

      {/* LABEL */}
      <p
        className="
        uppercase

        tracking-[0.25em]
        md:tracking-[0.5em]

        text-red-500

        text-[10px]
        md:text-sm

        mb-4
        md:mb-6
        "
      >
        Creative Workflow
      </p>

      {/* TITLE */}
      <h2
        className="
        big-title

        text-[3rem]
        sm:text-[4rem]
        md:text-[7rem]

        leading-[0.92]

        uppercase

        mb-6
        md:mb-8
        "
      >

        CREATIVE

        <br />

        STACK

      </h2>

      {/* DESCRIPTION */}
      <p
        className="
        text-white/60

        text-base
        md:text-lg

        leading-[1.9]
        md:leading-relaxed

        max-w-full
        md:max-w-[520px]
        "
      >

        Industry-standard creative tools used
        to craft cinematic visuals,
        anime-inspired motion graphics,
        immersive CGI scenes,
        and emotionally powerful storytelling.

      </p>

    </motion.div>

    {/* SOFTWARE GRID */}
    <div
      className="
      grid

      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-3

      gap-5
      md:gap-6
      "
    >

      {[
        {
          name:'Blender',
          logo:BlenderLogo,
        },

        {
          name:'After Effects',
          logo:AeLogo,
        },

        {
          name:'Photoshop',
          logo:PsLogo,
        },

        {
          name:'Premiere Pro',
          logo:PrLogo,
        },

        {
          name:'Illustrator',
          logo:AiLogo,
        },

        {
          name:'Figma',
          logo:FigmaLogo,
        },

      ].map((software,index)=>(

        <motion.div

          key={index}

          initial={{ opacity:0, y:50 }}

          whileInView={{ opacity:1, y:0 }}

          transition={{
            duration:0.8,
            delay:index * 0.1,
          }}

          viewport={{ once:true }}

          whileHover={{
            y:-14,
            scale:1.04,
          }}

          className="
          group
          relative

          overflow-hidden

          rounded-[24px]
          md:rounded-[32px]

          border
          border-white/10

          bg-white/[0.03]

          backdrop-blur-xl

          p-6
          md:p-10

          min-h-[220px]
          md:min-h-[270px]

          flex
          flex-col

          items-center
          justify-center

          text-center

          transition
          duration-500

          hover:border-red-500/30
          hover:bg-red-500/[0.03]

          hover:shadow-[0_0_80px_rgba(255,0,0,0.22)]
          "
        >

          {/* GLOW */}
          <div
            className="
            absolute inset-0

            opacity-0
            group-hover:opacity-100

            transition
            duration-700

            bg-gradient-to-br
            from-white/[0.05]
            via-transparent
            to-red-500/[0.05]
            "
          ></div>

          {/* LOGO */}
          <img
            src={software.logo}
            alt={software.name}

            className="
            w-20
            h-20

            md:w-28
            md:h-28

            object-contain

            mb-6
            md:mb-8

            relative
            z-10

            group-hover:scale-110

            transition
            duration-500
            "
          />

          {/* NAME */}
          <h3
            className="
            text-[1.6rem]
            md:text-2xl

            big-title

            leading-none

            relative
            z-10

            group-hover:text-red-400

            transition
            duration-500
            "
          >

            {software.name}

          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* MARQUEE SECTION */}
<section
  className="
  relative

  overflow-hidden

  py-10
  md:py-16

  border-t
  border-b

  border-white/10

  bg-black
  "
>

  {/* TOP GRADIENT */}
  <div
    className="
    absolute
    top-0
    left-0

    w-full
    h-full

    bg-gradient-to-r
    from-red-900/10
    via-transparent
    to-purple-900/10
    "
  ></div>

  {/* LEFT FADE */}
  <div
    className="
    absolute

    left-0
    top-0

    w-10
    md:w-32

    h-full

    z-20

    bg-gradient-to-r
    from-black
    to-transparent
    "
  ></div>

  {/* RIGHT FADE */}
  <div
    className="
    absolute

    right-0
    top-0

    w-10
    md:w-32

    h-full

    z-20

    bg-gradient-to-l
    from-black
    to-transparent
    "
  ></div>

  {/* MARQUEE */}
  <div
    className="
    whitespace-nowrap

    flex

    overflow-hidden

    relative
    "
  >

    {/* FIRST ROW */}
    <motion.div

      animate={{
        x:['0%','-100%'],
      }}

      transition={{
        repeat:Infinity,
        duration:20,
        ease:'linear',
      }}

      className="
      flex

      shrink-0

      items-center

      gap-10
      md:gap-20

      pr-10
      md:pr-20
      "
    >

      {[
        'MOTION DESIGN',
        'CGI VISUALS',
        'ANIME EDITS',
        'STORYTELLING',
        '3D ANIMATION',
        'VISUAL DIRECTION',
        'CINEMATIC REELS',
      ].map((item,index)=>(

        <div
          key={index}

          className="
          flex
          items-center

          gap-10
          md:gap-20
          "
        >

          {/* TEXT */}
          <h2
            className="
            big-title

            text-[2rem]
            sm:text-[3rem]
            md:text-[6rem]

            uppercase

            text-white/10

            hover:text-red-500

            transition
            duration-500
            "
          >

            {item}

          </h2>

          {/* DOT */}
          <div
            className="
            w-2.5
            h-2.5

            md:w-4
            md:h-4

            rounded-full

            bg-red-500

            shadow-[0_0_20px_rgba(255,0,0,0.8)]
            "
          ></div>

        </div>

      ))}

    </motion.div>

    {/* DUPLICATE FOR LOOP */}
    <motion.div

      animate={{
        x:['0%','-100%'],
      }}

      transition={{
        repeat:Infinity,
        duration:20,
        ease:'linear',
      }}

      className="
      flex

      shrink-0

      items-center

      gap-10
      md:gap-20

      pr-10
      md:pr-20
      "
    >

      {[
        'MOTION DESIGN',
        'CGI VISUALS',
        'ANIME EDITS',
        'STORYTELLING',
        '3D ANIMATION',
        'VISUAL DIRECTION',
        'CINEMATIC REELS',
      ].map((item,index)=>(

        <div
          key={index}

          className="
          flex
          items-center

          gap-10
          md:gap-20
          "
        >

          {/* TEXT */}
          <h2
            className="
            big-title

            text-[2rem]
            sm:text-[3rem]
            md:text-[6rem]

            uppercase

            text-white/10

            hover:text-red-500

            transition
            duration-500
            "
          >

            {item}

          </h2>

          {/* DOT */}
          <div
            className="
            w-2.5
            h-2.5

            md:w-4
            md:h-4

            rounded-full

            bg-red-500

            shadow-[0_0_20px_rgba(255,0,0,0.8)]
            "
          ></div>

        </div>

      ))}

    </motion.div>

  </div>

</section>

{/* ABOUT PREVIEW SECTION */}
<section
  className="
  relative

  py-24
  md:py-40

  overflow-hidden
  "
>

  {/* BACKGROUND IMAGE */}
  <motion.div

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

    viewport={{ once:true }}

    className="
    absolute inset-0
    "

    style={{
      backgroundImage:`url(${AboutBg})`,
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
    }}
  ></motion.div>

  {/* DARK OVERLAY */}
  <div
    className="
    absolute inset-0
    bg-black/45
    "
  ></div>

  {/* RED GRADIENT */}
  <div
    className="
    absolute inset-0

    bg-gradient-to-r
    from-black
    via-black/60
    to-black/40
    "
  ></div>

  {/* RED ATMOSPHERE */}
  <div
    className="
    absolute

    top-1/2
    right-0

    -translate-y-1/2

    w-[500px]
    h-[500px]

    md:w-[800px]
    md:h-[800px]

    bg-red-600/10
    blur-[160px]
    rounded-full
    "
  ></div>

  {/* MAIN CONTAINER */}
  <div
    className="
    container

    relative z-10

    min-h-[600px]
    md:min-h-[700px]

    flex items-center

    px-4
    sm:px-6
    md:px-8
    "
  >

    {/* CONTENT */}
    <motion.div

      initial={{ opacity:0, y:60 }}

      whileInView={{ opacity:1, y:0 }}

      transition={{ duration:1 }}

      viewport={{ once:true }}

      className="
      max-w-full
      md:max-w-[650px]
      "
    >

      {/* SMALL LABEL */}
      <p
        className="
        uppercase

        tracking-[0.3em]
        md:tracking-[0.5em]

        text-red-500

        text-[10px]
        sm:text-xs
        md:text-sm

        mb-4
        md:mb-6
        "
      >
        About Me
      </p>

      {/* TITLE */}
      <h2
        className="
        big-title

        text-[3rem]
        sm:text-[4rem]
        md:text-[7rem]

        leading-[0.9]

        uppercase

        mb-6
        md:mb-10
        "
      >

        MOTION

        <br />

        DESIGNER

      </h2>

      {/* DESCRIPTION */}
      <p
        className="
        text-white/70

        text-base
        md:text-lg

        leading-relaxed

        mb-6
        md:mb-8
        "
      >

        I’m Shubh Asawa, a Motion Designer,
        Video Editor, and Blender Artist
        passionate about creating cinematic visuals
        and immersive digital experiences.

      </p>

      <p
        className="
        text-white/50

        text-sm
        md:text-base

        leading-relaxed

        mb-10
        md:mb-12
        "
      >

        I specialize in transforming ideas into
        high-quality visual content through CGI,
        3D animation, motion graphics,
        and creative storytelling.

      </p>

      {/* STATS */}
      <div
        className="
        flex flex-wrap

        gap-6
        md:gap-10

        mb-10
        md:mb-14
        "
      >

        {/* FIRST */}
        <div>

          <h3
            className="
            text-[2.8rem]
            md:text-[4rem]

            big-title

            text-red-500

            leading-none
            "
          >
            30+
          </h3>

          <p
            className="
            uppercase

            tracking-[0.15em]
            md:tracking-[0.2em]

            text-white/40

            text-[10px]
            md:text-sm

            mt-2
            "
          >
            Creative Projects
          </p>

        </div>

        {/* SECOND */}
        <div>

          <h3
            className="
            text-[2.8rem]
            md:text-[4rem]

            big-title

            text-purple-400

            leading-none
            "
          >
            2+
          </h3>

          <p
            className="
            uppercase

            tracking-[0.15em]
            md:tracking-[0.2em]

            text-white/40

            text-[10px]
            md:text-sm

            mt-2
            "
          >
            Years Learning
          </p>

        </div>

      </div>

      {/* BUTTON */}
      <Link to="/about">

        <MagneticButton>
          MORE ABOUT ME
        </MagneticButton>

      </Link>

    </motion.div>

  </div>

</section>
<ShowreelSection />

{/* <VideoShowcase /> */}
<ThankYouSection />

      <Footer />

    </div>
  )
}

export default Home