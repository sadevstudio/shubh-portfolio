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

function Home() {

  return (

    <div className="
    bg-black
    text-white
    overflow-hidden
    ">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="
      relative
      min-h-screen
      overflow-hidden
      flex items-center
      ">

        {/* BACKGROUND */}
        <div className="
        absolute inset-0
        bg-black
        "></div>

        {/* RED ATMOSPHERE */}
        <div className="
        absolute top-0 right-0
        w-[1200px] h-[1200px]
        bg-red-700/20
        blur-[180px]
        rounded-full
        "></div>

        {/* PURPLE ATMOSPHERE */}
        <div className="
        absolute bottom-0 left-0
        w-[900px] h-[900px]
        bg-purple-700/10
        blur-[180px]
        rounded-full
        "></div>

        {/* CINEMATIC IMAGE COMPOSITION */}
        <motion.div
          initial={{ opacity:0, scale:1.1 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:1.5 }}
          className="
          absolute
          inset-0
          z-0
          "
        >

          {/* IMAGE */}
          <div
            className="
            absolute
            top-0
            right-[-10%]
            w-[75vw]
            h-screen
            "
            style={{
              backgroundImage:`url(${SamuraiHero})`,
              backgroundRepeat:'no-repeat',
              backgroundPosition:'center right',
              backgroundSize:'contain',
            }}
          ></div>

          {/* LEFT DARK FADE */}
          <div className="
          absolute inset-0
          bg-gradient-to-r
          from-black
          via-black/70
          to-transparent
          "></div>

          {/* BOTTOM FADE */}
          <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black
          via-transparent
          to-transparent
          "></div>

          {/* RED OVERLAY */}
          <div className="
          absolute inset-0
          bg-red-900/10
          mix-blend-screen
          "></div>

        </motion.div>

        {/* SOCIAL SIDEBAR */}
        <div className="
        hidden lg:flex
        absolute left-10 top-1/2
        -translate-y-1/2
        flex-col gap-8
        z-30
        ">

          <a
  href="https://wa.me/917017288428"
  target="_blank"
  rel="noreferrer"
  className="
  text-white/60
  hover:text-red-500
  transition
  duration-300
  text-xl
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
            text-xl
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
            text-xl
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
            text-xl
            "
          >
            <FaBehance />
          </a>

        </div>

        {/* MAIN CONTENT */}
        <div className="
        container
        relative z-20
        min-h-screen
        flex items-center
        ">

          <div className="
          max-w-[650px]
          pt-24
          ">

            <motion.p
              initial={{ opacity:0, y:30 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:1 }}
              className="
              uppercase
              tracking-[0.5em]
              text-red-500
              mb-8
              text-sm
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
              text-[5rem]
              md:text-[8rem]
              xl:text-[10rem]
              leading-[0.85]
              uppercase
              "
            >

              SHUBH

              <br />

              <span className="
              gradient-text
              drop-shadow-[0_0_60px_rgba(255,0,0,0.8)]
              ">
                ASAWA
              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:0.4, duration:1 }}
              className="
              text-white/60
              text-lg
              leading-relaxed
              max-w-xl
              mt-8
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
              gap-6
              mt-12
              "
            >

              <Link to="/portfolio">

                <MagneticButton>
                  VIEW PORTFOLIO
                </MagneticButton>

              </Link>

              <Link to="/contact">

  <button className="
  px-10 py-5
  border border-purple-500/30
  bg-purple-500/10
  backdrop-blur-xl
  hover:bg-purple-500/20
  hover:border-purple-400
  transition
  uppercase
  tracking-[0.25em]
  purple-glow
  ">

    CONTACT US

  </button>

</Link>

            </motion.div>

          </div>

        </div>

      </section>

      {/* EXPERTISE SECTION */}
      <section className="
      py-24
      border-t border-white/10
      border-b border-white/10
      bg-white/[0.02]
      ">

        <div className="
        container
        grid md:grid-cols-2 lg:grid-cols-4
        gap-8
        ">

          {[
            'Motion Design',
            'Anime Edits',
            'CGI Visuals',
            'Visual Storytelling',
          ].map((item,index)=>(

            <div
              key={index}
              className="
              glass
              rounded-[30px]
              p-8
              hover:-translate-y-2
              transition duration-500
              "
            >

              <p className="
              text-red-500
              uppercase
              tracking-[0.3em]
              text-xs
              mb-4
              ">
                Expertise
              </p>

              <h3 className="
              text-4xl
              big-title
              leading-none
              ">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      {/* RECENT WORK SECTION */}
<section className="
py-32
relative
overflow-hidden
">

  {/* BACKGROUND GLOW */}
  <div className="
  absolute top-1/2 left-1/2
  -translate-x-1/2
  -translate-y-1/2
  w-[900px] h-[900px]
  bg-red-600/10
  blur-[180px]
  rounded-full
  "></div>

  <div className="container relative z-10">

    {/* SECTION HEADING */}
    <div className="mb-20">

      <p className="
      uppercase
      tracking-[0.5em]
      text-red-500
      text-sm
      mb-6
      ">
        Recent Work
      </p>

      <h2 className="
      big-title
      text-[4rem]
      md:text-[7rem]
      leading-[0.9]
      uppercase
      ">

        CINEMATIC
        <br />

        PROJECTS

      </h2>

    </div>

    {/* PROJECT GRID */}
    <div className="
    grid
    md:grid-cols-2
    xl:grid-cols-4
    gap-6
    ">

      {[
        {
          title:'Karna Reel',
          image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
        },

        {
          title:'Anime Edit',
          image:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
        },

        {
          title:'CGI Product',
          image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
        },

        {
          title:'Motion Typography',
          image:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
        },

      ].map((project,index)=>(

        <motion.div
          key={index}
          whileHover={{ y:-10 }}
          className="
          relative
          group
          overflow-hidden
          rounded-[30px]
          border border-white/10
          bg-white/[0.03]
          "
        >

          {/* IMAGE */}
          <img
            src={project.image}
            alt={project.title}
            className="
            h-[450px]
            w-full
            object-cover
            group-hover:scale-110
            transition duration-700
            "
          />

          {/* OVERLAY */}
          <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
          "></div>

          {/* RED GLOW */}
          <div className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          bg-red-500/10
          transition duration-500
          "></div>

          {/* CONTENT */}
          <div className="
          absolute bottom-0 left-0
          p-6
          z-10
          ">

            <p className="
            uppercase
            tracking-[0.3em]
            text-red-500
            text-xs
            mb-3
            ">
              Featured Work
            </p>

            <h3 className="
            text-4xl
            big-title
            leading-none
            ">
              {project.title}
            </h3>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* FEATURED PROJECT SECTION */}
<section className="
relative
py-40
overflow-hidden
border-t border-white/10
">

  {/* BACKGROUND ATMOSPHERE */}
  <div className="
  absolute inset-0
  bg-gradient-to-br
  from-red-900/10
  via-black
  to-purple-900/10
  "></div>

  {/* RED GLOW */}
  <div className="
  absolute top-1/2 left-1/2
  -translate-x-1/2
  -translate-y-1/2
  w-[1000px]
  h-[1000px]
  bg-red-600/10
  blur-[180px]
  rounded-full
  "></div>

  <div className="
  container
  relative z-10
  grid lg:grid-cols-2
  gap-20
  items-center
  ">

    {/* LEFT IMAGE */}
    <motion.div
      initial={{ opacity:0, x:-60 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{ duration:1 }}
      viewport={{ once:true }}
      className="
      relative
      group
      "
    >

      {/* IMAGE */}
      <img
        src={SamuraiHero}
        alt="Featured Project"
        className="
        rounded-[40px]
        border border-white/10
        shadow-[0_0_80px_rgba(255,0,0,0.2)]
        group-hover:scale-[1.02]
        transition duration-700
        "
      />

      {/* OVERLAY */}
      <div className="
      absolute inset-0
      bg-gradient-to-t
      from-black
      via-transparent
      to-transparent
      rounded-[40px]
      "></div>

      {/* FLOATING TAG */}
      <div className="
      absolute
      top-6 left-6
      glass
      px-5 py-3
      rounded-full
      text-xs
      uppercase
      tracking-[0.3em]
      text-red-500
      ">
        Featured Project
      </div>

    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
      initial={{ opacity:0, x:60 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{ duration:1 }}
      viewport={{ once:true }}
    >

      <p className="
      uppercase
      tracking-[0.5em]
      text-red-500
      text-sm
      mb-6
      ">
        Cinematic Storytelling
      </p>

      <h2 className="
      big-title
      text-[4rem]
      md:text-[7rem]
      leading-[0.9]
      uppercase
      mb-8
      ">

        KARNA
        <br />

        CINEMATIC

      </h2>

      <p className="
      text-white/60
      text-lg
      leading-relaxed
      mb-10
      ">
        A cinematic anime-inspired motion project
        focused on powerful storytelling,
        dramatic visuals,
        emotional atmosphere,
        and immersive motion design inspired by
        mythological warrior aesthetics.
      </p>

      {/* TOOLS */}
      <div className="
      flex flex-wrap
      gap-4
      mb-12
      ">

        {[
          'Blender',
          'After Effects',
          'Photoshop',
          'Premiere Pro',
        ].map((tool,index)=>(

          <div
            key={index}
            className="
            px-5 py-3
            rounded-full
            border border-white/10
            bg-white/[0.03]
            text-sm
            uppercase
            tracking-[0.2em]
            "
          >
            {tool}
          </div>

        ))}

      </div>

      {/* BUTTONS */}
      <div className="
      flex flex-wrap
      gap-6
      ">

        <MagneticButton>
          WATCH PROJECT
        </MagneticButton>

        <Link to="/portfolio">

          <button className="
          px-10 py-5
          border border-purple-500/30
          bg-purple-500/10
          backdrop-blur-xl
          hover:bg-purple-500/20
          hover:border-purple-400
          transition
          uppercase
          tracking-[0.25em]
          purple-glow
          ">

            VIEW MORE

          </button>

        </Link>

      </div>

    </motion.div>

  </div>

</section>

MARQUEE SECTION
<section className="
relative
overflow-hidden
py-16
border-t border-b border-white/10
bg-black
">

  {/* TOP GRADIENT */}
  <div className="
  absolute top-0 left-0
  w-full h-full
  bg-gradient-to-r
  from-red-900/10
  via-transparent
  to-purple-900/10
  "></div>

  {/* MARQUEE */}
  <div className="
  whitespace-nowrap
  flex
  overflow-hidden
  relative
  ">

    <motion.div
      animate={{ x:['0%','-100%'] }}
      transition={{
        repeat:Infinity,
        duration:20,
        ease:'linear',
      }}
      className="
      flex shrink-0
      items-center
      gap-20
      pr-20
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
          flex items-center
          gap-20
          "
        >

          <h2 className="
          big-title
          text-[4rem]
          md:text-[6rem]
          uppercase
          text-white/10
          hover:text-red-500
          transition duration-500
          ">

            {item}

          </h2>

          {/* DOT */}
          <div className="
          w-4 h-4
          rounded-full
          bg-red-500
          shadow-[0_0_20px_rgba(255,0,0,0.8)]
          "></div>

        </div>

      ))}

    </motion.div>

    {/* DUPLICATE FOR INFINITE LOOP */}
    <motion.div
      animate={{ x:['0%','-100%'] }}
      transition={{
        repeat:Infinity,
        duration:20,
        ease:'linear',
      }}
      className="
      flex shrink-0
      items-center
      gap-20
      pr-20
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
          flex items-center
          gap-20
          "
        >

          <h2 className="
          big-title
          text-[4rem]
          md:text-[6rem]
          uppercase
          text-white/10
          hover:text-red-500
          transition duration-500
          ">

            {item}

          </h2>

          {/* DOT */}
          <div className="
          w-4 h-4
          rounded-full
          bg-red-500
          shadow-[0_0_20px_rgba(255,0,0,0.8)]
          "></div>

        </div>

      ))}

    </motion.div>

  </div>

</section>

{/* ABOUT PREVIEW SECTION */}
<section className="
relative
py-40
overflow-hidden
">

  {/* BACKGROUND IMAGE */}
  <div
    className="
    absolute inset-0
    "
    style={{
      backgroundImage:`url(${AboutBg})`,
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
    }}
  ></div>

  {/* DARK OVERLAY */}
  <div className="
  absolute inset-0
  bg-black/45
  "></div>

  {/* RED GRADIENT */}
  <div className="
  absolute inset-0
  bg-gradient-to-r
  from-black
  via-black/60
  to-black/40
  "></div>

  {/* RED ATMOSPHERE */}
  <div className="
  absolute top-1/2 right-0
  -translate-y-1/2
  w-[800px]
  h-[800px]
  bg-red-600/10
  blur-[160px]
  rounded-full
  "></div>

  <div className="
  container
  relative z-10
  min-h-[700px]
  flex items-center
  ">

    {/* CONTENT */}
    <motion.div
      initial={{ opacity:0, y:60 }}
      whileInView={{ opacity:1, y:0 }}
      transition={{ duration:1 }}
      viewport={{ once:true }}
      className="
      max-w-[650px]
      "
    >

      {/* SMALL LABEL */}
      <p className="
      uppercase
      tracking-[0.5em]
      text-red-500
      text-sm
      mb-6
      ">
        About Me
      </p>

      {/* TITLE */}
      <h2 className="
      big-title
      text-[4rem]
      md:text-[7rem]
      leading-[0.9]
      uppercase
      mb-10
      ">

        MOTION
        <br />

        DESIGNER

      </h2>

      {/* DESCRIPTION */}
      <p className="
      text-white/70
      text-lg
      leading-relaxed
      mb-8
      ">

        I’m Shubh Asawa, a Motion Designer,
        Video Editor, and Blender Artist
        passionate about creating cinematic visuals
        and immersive digital experiences.

      </p>

      <p className="
      text-white/50
      leading-relaxed
      mb-12
      ">

        I specialize in transforming ideas into
        high-quality visual content through CGI,
        3D animation, motion graphics,
        and creative storytelling.

      </p>

      {/* STATS */}
      <div className="
      flex flex-wrap
      gap-10
      mb-14
      ">

        <div>

          <h3 className="
          text-[4rem]
          big-title
          text-red-500
          leading-none
          ">
            30+
          </h3>

          <p className="
          uppercase
          tracking-[0.2em]
          text-white/40
          text-sm
          mt-2
          ">
            Creative Projects
          </p>

        </div>

        <div>

          <h3 className="
          text-[4rem]
          big-title
          text-purple-400
          leading-none
          ">
            2+
          </h3>

          <p className="
          uppercase
          tracking-[0.2em]
          text-white/40
          text-sm
          mt-2
          ">
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