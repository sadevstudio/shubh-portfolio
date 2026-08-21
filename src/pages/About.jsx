// // import Navbar from "../components/layout/Navbar";
// // import { motion } from "framer-motion";
// // import {
// //   FaFilm,
// //   FaVideo,
// //   FaCube,
// //   FaMagic,
// // } from "react-icons/fa";
// // import blenderLogo from "../assets/tools/blender.png";
// // import aftereffectsLogo from "../assets/tools/aftereffects.png";
// // import premiereLogo from "../assets/tools/premiere.png";
// // import photoshopLogo from "../assets/tools/photoshop.png";
// // import illustratorLogo from "../assets/tools/illustrator.png";
// // import figmaLogo from "../assets/tools/figma.png";


// // import aboutHero from "../assets/about/about-hero.png";
// // import aboutStory from "../assets/about/about-story.png";
// // import aboutBattle from "../assets/about/about-battle.png";
// // import aboutCity from "../assets/about/about-city.png";
// // import aboutWorkspace from "../assets/about/about-workspace.png";
// // import aboutEnding from "../assets/about/about-ending.png";

// // function About() {
// //   return (
// //     <div className="bg-black text-white overflow-hidden">
// //   <Navbar />
// //       {/* HERO SECTION */}
// //       <section className="relative min-h-screen flex items-center overflow-hidden">

// //         <div className="absolute inset-0">

// //           <img
// //             src={aboutHero}
// //             alt=""
// //             className="w-full h-full object-cover scale-105 brightness-[0.95]"
// //           />

// //           <div className="absolute inset-0 bg-black/30" />

// //           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

// //           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

// //         </div>

// //         <div className="relative z-10 w-[90%] max-w-[1500px] mx-auto grid lg:grid-cols-2 items-center gap-20">

// //           <motion.div
// //             initial={{ opacity: 0, x: -80 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1 }}
// //           >

// //             <p className="uppercase tracking-[10px] text-red-500 mb-8 text-sm">
// //               About Me
// //             </p>

// //             <h1 className="text-[5rem] md:text-[9rem] leading-[0.85] font-black uppercase">
// //               SHUBH
// //               <br />
// //               <span className="gradient-text">ASAWA</span>
// //             </h1>

// //             <div className="w-[120px] h-[2px] bg-red-500 mt-10 mb-10" />

// //             <p className="text-white/70 text-lg leading-[2] max-w-[650px]">
// //               I’m Shubh Asawa, a Motion Designer, Video Editor,
// //               and Blender Artist passionate about creating cinematic
// //               visuals and immersive digital experiences.
// //             </p>

// //             <p className="text-white/55 text-lg leading-[2] max-w-[650px] mt-6">
// //               I specialize in transforming ideas into high-quality
// //               visual content through CGI, 3D animation,
// //               motion graphics, and creative storytelling.
// //             </p>

// //           </motion.div>

// //         </div>
// //       </section>

// //       {/* STORY SECTION */}
// //       <section className="grid lg:grid-cols-2 min-h-screen">

// //         {/* LEFT */}
// //         <div className="relative flex items-center px-10 md:px-24 bg-black">

// //           <motion.div
// //             initial={{ opacity: 0, x: -80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1 }}
// //           >

// //             <p className="uppercase tracking-[8px] text-red-500 mb-8 text-sm">
// //               My Story
// //             </p>

// //             <h2 className="text-[3rem] md:text-[5rem] font-black uppercase leading-[1]">
// //               Every Artist
// //               <br />
// //               Has A Story
// //             </h2>

// //             <div className="w-[100px] h-[2px] bg-red-500 mt-10 mb-10" />

// //             <p className="text-white/65 leading-[2] text-lg max-w-[600px]">
// //               Inspired by Japanese aesthetics, cinematic lighting,
// //               dark fantasy environments, and emotional storytelling,
// //               I transform ideas into immersive digital experiences.
// //             </p>

// //           </motion.div>

// //         </div>

// //         {/* RIGHT */}
// //         <div className="relative overflow-hidden">

// //           <img
// //             src={aboutStory}
// //             alt=""
// //             className="w-full h-full object-cover scale-110 brightness-[0.8]"
// //           />

// //           <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />

// //         </div>

// //       </section>

// //       {/* PHILOSOPHY SECTION */}
// //       <section className="relative min-h-screen flex items-center overflow-hidden">

// //         <img
// //           src={aboutCity}
// //           alt=""
// //           className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[0.55]"
// //         />

// //         <div className="absolute inset-0 bg-black/55" />

// //         <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

// //         <motion.div
// //           initial={{ opacity: 0, y: 80 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1 }}
// //           className="relative z-10 w-[90%] max-w-[1400px] mx-auto"
// //         >

// //           <div className="max-w-[700px]">

// //             <p className="uppercase tracking-[8px] text-red-500 mb-8 text-sm">
// //               Philosophy
// //             </p>

// //             <h2 className="text-[4rem] md:text-[7rem] leading-[0.95] font-black uppercase">
// //               Discipline.
// //               <br />
// //               Passion.
// //               <br />
// //               Purpose.
// //             </h2>

// //             <div className="w-[120px] h-[2px] bg-red-500 mt-10 mb-10" />

// //             <p className="text-white/65 leading-[2] text-lg">
// //               Like a lone samurai walking through chaos under the blood moon,
// //               my work represents discipline, emotion, cinematic atmosphere,
// //               and immersive visual storytelling.
// //             </p>

// //           </div>

// //         </motion.div>

// //       </section>

// //       {/* SKILLS SECTION */}
// //       <section className="grid lg:grid-cols-2 min-h-screen">

// //         {/* LEFT IMAGE */}
// //         <div className="relative overflow-hidden">

// //           <img
// //             src={aboutBattle}
// //             alt=""
// //             className="w-full h-full object-cover scale-110 brightness-[0.75]"
// //           />

// //           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />

// //         </div>

// //         {/* RIGHT */}
// //         <div className="flex items-center bg-black px-10 md:px-24">

// //           <motion.div
// //             initial={{ opacity: 0, x: 80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1 }}
// //           >

// //             <p className="uppercase tracking-[8px] text-red-500 mb-8 text-sm">
// //               What I Do
// //             </p>

// //             <h2 className="text-[3rem] md:text-[5rem] leading-[1] font-black uppercase">
// //               I Build Worlds
// //               <br />
// //               Through Visuals
// //             </h2>

// //             <div className="grid grid-cols-2 gap-10 mt-16">

// //               <div>
// //                 <FaFilm className="text-red-500 text-4xl mb-5" />
// //                 <h3 className="text-2xl font-bold mb-3">
// //                   Motion Design
// //                 </h3>
// //                 <p className="text-white/60 leading-[1.8]">
// //                   Cinematic motion experiences and transitions.
// //                 </p>
// //               </div>

// //               <div>
// //                 <FaCube className="text-red-500 text-4xl mb-5" />
// //                 <h3 className="text-2xl font-bold mb-3">
// //                   CGI & 3D
// //                 </h3>
// //                 <p className="text-white/60 leading-[1.8]">
// //                   Blender worlds and anime-inspired visuals.
// //                 </p>
// //               </div>

// //               <div>
// //                 <FaVideo className="text-red-500 text-4xl mb-5" />
// //                 <h3 className="text-2xl font-bold mb-3">
// //                   Video Editing
// //                 </h3>
// //                 <p className="text-white/60 leading-[1.8]">
// //                   High-energy cinematic edits and reels.
// //                 </p>
// //               </div>

// //               <div>
// //                 <FaMagic className="text-red-500 text-4xl mb-5" />
// //                 <h3 className="text-2xl font-bold mb-3">
// //                   Storytelling
// //                 </h3>
// //                 <p className="text-white/60 leading-[1.8]">
// //                   Emotional narratives and immersive atmosphere.
// //                 </p>
// //               </div>

// //             </div>

// //           </motion.div>

// //         </div>

// //       </section>

// //       {/* WORKSPACE SECTION */}
// //       <section className="grid lg:grid-cols-2 min-h-screen">

// //         {/* LEFT */}
// //         <div className="flex items-center px-10 md:px-24 bg-black">

// //           <motion.div
// //             initial={{ opacity: 0, x: -80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1 }}
// //           >

// //             <p className="uppercase tracking-[8px] text-red-500 mb-8 text-sm">
// //               Tools Of Creation
// //             </p>

// //             <h2 className="text-[3rem] md:text-[5rem] leading-[1] font-black uppercase">
// //               The Weapons
// //               <br />
// //               Behind Every Frame
// //             </h2>

// //             <div className="flex flex-wrap gap-6 mt-16">

// //               {[
// //   aftereffectsLogo,
// //   premiereLogo,
// //   photoshopLogo,
// //   illustratorLogo,
// //   blenderLogo,
// //   figmaLogo,
// // ].map((logo, index) => (

// //   <div
// //   key={index}
// //   className="
// //   flex items-center justify-center
// //   hover:scale-125
// //   transition duration-500
// //   "
// // >

// //     <img
// //   src={logo}
// //   alt=""
// //   className="
// // w-[72px]
// // md:w-[82px]
// // object-contain
// // rounded-[22px]
// // opacity-90
// // hover:opacity-100
// // transition duration-500
// // "
// // />

// //   </div>

// // ))}
// //             </div>

// //           </motion.div>

// //         </div>

// //         {/* RIGHT */}
// //         <div className="relative overflow-hidden">

// //           <img
// //             src={aboutWorkspace}
// //             alt=""
// //             className="w-full h-full object-cover scale-110 brightness-[0.75]"
// //           />

// //           <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />

// //         </div>

// //       </section>

// //       {/* ENDING */}
// //       <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">

// //         <img
// //           src={aboutEnding}
// //           alt=""
// //           className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[0.7]"
// //         />

// //         <div className="absolute inset-0 bg-black/55" />

// //         <motion.div
// //           initial={{ opacity: 0, y: 80 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1 }}
// //           className="relative z-10 px-6"
// //         >

// //           <p className="uppercase tracking-[10px] text-red-500 mb-8 text-sm">
// //             The Journey Continues
// //           </p>

// //           <h2 className="text-[4rem] md:text-[8rem] leading-[0.9] font-black uppercase">
// //             New Worlds
// //             <br />
// //             New Stories
// //           </h2>

// //           <div className="w-[140px] h-[2px] bg-red-500 mx-auto mt-10 mb-10" />

// //           <p className="text-white/65 leading-[2] text-lg max-w-[700px] mx-auto">
// //             Every project is a cinematic universe.
// //             Let’s create visuals that feel unforgettable.
// //           </p>

// //         </motion.div>

// //       </section>

// //     </div>
// //   );
// // }

// // export default About;

// // import Navbar from "../components/layout/Navbar";
// // import { motion } from "framer-motion";

// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // import { useEffect, useRef } from "react";

// // import {
// //   FaFilm,
// //   FaVideo,
// //   FaCube,
// //   FaMagic,
// // } from "react-icons/fa";

// // import blenderLogo from "../assets/tools/blender.png";
// // import aftereffectsLogo from "../assets/tools/aftereffects.png";
// // import premiereLogo from "../assets/tools/premiere.png";
// // import photoshopLogo from "../assets/tools/photoshop.png";
// // import illustratorLogo from "../assets/tools/illustrator.png";
// // import figmaLogo from "../assets/tools/figma.png";

// // import aboutHero from "../assets/about/about-hero.png";
// // import aboutStory from "../assets/about/about-story.png";
// // import aboutBattle from "../assets/about/about-battle.png";
// // import aboutCity from "../assets/about/about-city.png";
// // import aboutWorkspace from "../assets/about/about-workspace.png";
// // import aboutEnding from "../assets/about/about-ending.png";

// // gsap.registerPlugin(ScrollTrigger);

// // function About() {

// //   const heroRef = useRef(null);
// //   const storyRef = useRef(null);
// //   const cityRef = useRef(null);
// //   const battleRef = useRef(null);
// //   const workspaceRef = useRef(null);
// //   const endingRef = useRef(null);

// //   useEffect(() => {

// //     const refs = [
// //       heroRef,
// //       storyRef,
// //       cityRef,
// //       battleRef,
// //       workspaceRef,
// //       endingRef,
// //     ];

// //     refs.forEach((ref) => {

// //       gsap.to(ref.current, {
// //         y: -100,
// //         scale: 1.1,
// //         ease: "none",

// //         scrollTrigger: {
// //           trigger: ref.current,
// //           start: "top bottom",
// //           end: "bottom top",
// //           scrub: true,
// //         },
// //       });

// //     });

// //   }, []);

// //   return (

// //     <div className="bg-black text-white overflow-hidden">

// //       <Navbar />

// //       {/* HERO */}
// //       <section className="relative min-h-screen flex items-center overflow-hidden">

// //         <div className="absolute inset-0 overflow-hidden">

// //           <img
// //             ref={heroRef}
// //             src={aboutHero}
// //             alt=""
// //             className="
// //             w-full h-full
// //             object-cover
// //             scale-110
// //             brightness-[1]
// //             "
// //           />

// //           <div className="absolute inset-0 bg-black/25" />

// //           <div className="
// //           absolute inset-0
// //           bg-gradient-to-r
// //           from-black/80
// //           via-black/30
// //           to-transparent
// //           "></div>

// //         </div>

// //         <div className="
// //         relative z-10
// //         w-[90%]
// //         max-w-[1500px]
// //         mx-auto
// //         ">

// //           <motion.div
// //             initial={{ opacity:0, y:80 }}
// //             animate={{ opacity:1, y:0 }}
// //             transition={{ duration:1.2 }}
// //           >

// //             <p className="
// //             uppercase
// //             tracking-[10px]
// //             text-red-500
// //             mb-8
// //             text-sm
// //             ">

// //               About Me

// //             </p>

// //             <h1 className="
// //             text-[5rem]
// //             md:text-[9rem]
// //             leading-[0.85]
// //             font-black
// //             uppercase
// //             ">

// //               SHUBH
// //               <br />

// //               <span className="gradient-text">
// //                 ASAWA
// //               </span>

// //             </h1>

// //             <div className="
// //             w-[120px]
// //             h-[2px]
// //             bg-red-500
// //             mt-10
// //             mb-10
// //             "></div>

// //             <p className="
// //             text-white/70
// //             text-lg
// //             leading-[2]
// //             max-w-[650px]
// //             ">

// //               I’m Shubh Asawa, a Motion Designer,
// //               Video Editor, and Blender Artist
// //               passionate about cinematic visuals
// //               and immersive digital experiences.

// //             </p>

// //           </motion.div>

// //         </div>

// //       </section>

// //       {/* STORY */}
// //       <section className="grid lg:grid-cols-2 min-h-screen">

// //         <div className="
// //         flex items-center
// //         px-10 md:px-24
// //         bg-black
// //         ">

// //           <motion.div
// //             initial={{ opacity:0, x:-80 }}
// //             whileInView={{ opacity:1, x:0 }}
// //             transition={{ duration:1 }}
// //           >

// //             <p className="
// //             uppercase
// //             tracking-[8px]
// //             text-red-500
// //             mb-8
// //             text-sm
// //             ">

// //               My Story

// //             </p>

// //             <h2 className="
// //             text-[3rem]
// //             md:text-[5rem]
// //             font-black
// //             uppercase
// //             leading-[1]
// //             ">

// //               Every Artist
// //               <br />
// //               Has A Story

// //             </h2>

// //             <div className="
// //             w-[100px]
// //             h-[2px]
// //             bg-red-500
// //             mt-10
// //             mb-10
// //             "></div>

// //             <p className="
// //             text-white/65
// //             leading-[2]
// //             text-lg
// //             max-w-[600px]
// //             ">

// //               Inspired by Japanese aesthetics,
// //               cinematic lighting, dark fantasy
// //               worlds, and emotional storytelling.

// //             </p>

// //           </motion.div>

// //         </div>

// //         <div className="
// //         relative
// //         overflow-hidden
// //         ">

// //           <img
// //             ref={storyRef}
// //             src={aboutStory}
// //             alt=""
// //             className="
// //             w-full h-full
// //             object-cover
// //             scale-110
// //             brightness-[0.9]
// //             "
// //           />

// //           <div className="
// //           absolute inset-0
// //           bg-gradient-to-r
// //           from-black
// //           via-transparent
// //           to-transparent
// //           "></div>

// //         </div>

// //       </section>

// //       {/* PHILOSOPHY */}
// //       <section className="
// //       relative
// //       min-h-screen
// //       flex items-center
// //       overflow-hidden
// //       ">

// //         <img
// //           ref={cityRef}
// //           src={aboutCity}
// //           alt=""
// //           className="
// //           absolute inset-0
// //           w-full h-full
// //           object-cover
// //           scale-110
// //           brightness-[0.7]
// //           "
// //         />

// //         <div className="
// //         absolute inset-0
// //         bg-black/45
// //         "></div>

// //         <div className="
// //         absolute inset-0
// //         bg-gradient-to-r
// //         from-black/90
// //         via-black/30
// //         to-transparent
// //         "></div>

// //         <div className="
// //         relative z-10
// //         w-[90%]
// //         max-w-[1400px]
// //         mx-auto
// //         ">

// //           <motion.div
// //             initial={{ opacity:0, y:80 }}
// //             whileInView={{ opacity:1, y:0 }}
// //             transition={{ duration:1 }}
// //             className="max-w-[700px]"
// //           >

// //             <p className="
// //             uppercase
// //             tracking-[8px]
// //             text-red-500
// //             mb-8
// //             text-sm
// //             ">

// //               Philosophy

// //             </p>

// //             <h2 className="
// //             text-[4rem]
// //             md:text-[7rem]
// //             leading-[0.95]
// //             font-black
// //             uppercase
// //             ">

// //               Discipline.
// //               <br />
// //               Passion.
// //               <br />
// //               Purpose.

// //             </h2>

// //           </motion.div>

// //         </div>

// //       </section>

// //       {/* SKILLS */}
// //       <section className="grid lg:grid-cols-2 min-h-screen">

// //         <div className="
// //         relative
// //         overflow-hidden
// //         ">

// //           <img
// //             ref={battleRef}
// //             src={aboutBattle}
// //             alt=""
// //             className="
// //             w-full h-full
// //             object-cover
// //             scale-110
// //             brightness-[0.8]
// //             "
// //           />

// //         </div>

// //         <div className="
// //         flex items-center
// //         bg-black
// //         px-10 md:px-24
// //         ">

// //           <motion.div
// //             initial={{ opacity:0, x:80 }}
// //             whileInView={{ opacity:1, x:0 }}
// //             transition={{ duration:1 }}
// //           >

// //             <p className="
// //             uppercase
// //             tracking-[8px]
// //             text-red-500
// //             mb-8 text-sm
// //             ">

// //               What I Do

// //             </p>

// //             <h2 className="
// //             text-[3rem]
// //             md:text-[5rem]
// //             leading-[1]
// //             font-black
// //             uppercase
// //             ">

// //               I Build Worlds
// //               <br />
// //               Through Visuals

// //             </h2>

// //             <div className="
// //             grid grid-cols-2
// //             gap-10
// //             mt-16
// //             ">

// //               <div>
// //                 <FaFilm className="text-red-500 text-4xl mb-5" />
// //                 <h3 className="text-2xl font-bold mb-3">
// //                   Motion Design
// //                 </h3>
// //               </div>

// //               <div>
// //                 <FaCube className="text-red-500 text-4xl mb-5" />
// //                 <h3 className="text-2xl font-bold mb-3">
// //                   CGI & 3D
// //                 </h3>
// //               </div>

// //               <div>
// //                 <FaVideo className="text-red-500 text-4xl mb-5" />
// //                 <h3 className="text-2xl font-bold mb-3">
// //                   Video Editing
// //                 </h3>
// //               </div>

// //               <div>
// //                 <FaMagic className="text-red-500 text-4xl mb-5" />
// //                 <h3 className="text-2xl font-bold mb-3">
// //                   Storytelling
// //                 </h3>
// //               </div>

// //             </div>

// //           </motion.div>

// //         </div>

// //       </section>

// //       {/* WORKSPACE */}
// //       <section className="grid lg:grid-cols-2 min-h-screen">

// //         <div className="
// //         flex items-center
// //         px-10 md:px-24
// //         bg-black
// //         ">

// //           <div>

// //             <p className="
// //             uppercase
// //             tracking-[8px]
// //             text-red-500
// //             mb-8 text-sm
// //             ">

// //               Tools Of Creation

// //             </p>

// //             <h2 className="
// //             text-[3rem]
// //             md:text-[5rem]
// //             leading-[1]
// //             font-black
// //             uppercase
// //             ">

// //               The Weapons
// //               <br />
// //               Behind Every Frame

// //             </h2>

// //             <div className="
// //             flex flex-wrap
// //             gap-10
// //             mt-16
// //             items-center
// //             ">

// //               {[
// //                 aftereffectsLogo,
// //                 premiereLogo,
// //                 photoshopLogo,
// //                 illustratorLogo,
// //                 blenderLogo,
// //                 figmaLogo,
// //               ].map((logo, index) => (

// //                 <div
// //                   key={index}
// //                   className="
// //                   flex items-center justify-center
// //                   hover:scale-125
// //                   transition duration-500
// //                   "
// //                 >

// //                   <img
// //                     src={logo}
// //                     alt=""
// //                     className="
// //                     w-[72px]
// //                     md:w-[82px]
// //                     object-contain
// //                     rounded-[22px]
// //                     opacity-90
// //                     hover:opacity-100
// //                     transition duration-500
// //                     "
// //                   />

// //                 </div>

// //               ))}

// //             </div>

// //           </div>

// //         </div>

// //         <div className="
// //         relative
// //         overflow-hidden
// //         ">

// //           <img
// //             ref={workspaceRef}
// //             src={aboutWorkspace}
// //             alt=""
// //             className="
// //             w-full h-full
// //             object-cover
// //             scale-110
// //             brightness-[0.8]
// //             "
// //           />

// //         </div>

// //       </section>

// //       {/* ENDING */}
// //       <section className="
// //       relative
// //       min-h-screen
// //       flex items-center justify-center
// //       overflow-hidden
// //       text-center
// //       ">

// //         <img
// //           ref={endingRef}
// //           src={aboutEnding}
// //           alt=""
// //           className="
// //           absolute inset-0
// //           w-full h-full
// //           object-cover
// //           scale-110
// //           brightness-[0.8]
// //           "
// //         />

// //         <div className="
// //         absolute inset-0
// //         bg-black/50
// //         "></div>

// //         <motion.div
// //           initial={{ opacity:0, y:80 }}
// //           whileInView={{ opacity:1, y:0 }}
// //           transition={{ duration:1 }}
// //           className="
// //           relative z-10
// //           px-6
// //           "
// //         >

// //           <p className="
// //           uppercase
// //           tracking-[10px]
// //           text-red-500
// //           mb-8 text-sm
// //           ">

// //             The Journey Continues

// //           </p>

// //           <h2 className="
// //           text-[4rem]
// //           md:text-[8rem]
// //           leading-[0.9]
// //           font-black
// //           uppercase
// //           ">

// //             New Worlds
// //             <br />
// //             New Stories

// //           </h2>

// //         </motion.div>

// //       </section>

// //     </div>
// //   );
// // }

// // export default About;

// import Footer from '../components/layout/Footer'
// import Navbar from "../components/layout/Navbar";
// import { motion } from "framer-motion";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { useEffect, useRef } from "react";

// import {
//   FaFilm,
//   FaVideo,
//   FaCube,
//   FaMagic,
// } from "react-icons/fa";
// import SplitType from "split-type";
// import blenderLogo from "../assets/tools/blender.png";
// import aftereffectsLogo from "../assets/tools/aftereffects.png";
// import premiereLogo from "../assets/tools/premiere.png";
// import photoshopLogo from "../assets/tools/photoshop.png";
// import illustratorLogo from "../assets/tools/illustrator.png";
// import figmaLogo from "../assets/tools/figma.png";

// import aboutHero from "../assets/about/about-hero.png";
// import aboutStory from "../assets/about/about-story.png";
// import aboutBattle from "../assets/about/about-battle.png";
// import aboutCity from "../assets/about/about-city.png";
// import aboutWorkspace from "../assets/about/about-workspace.png";
// import aboutEnding from "../assets/about/about-ending.png";
// import signatureImage from "../assets/about/signature.png";

// gsap.registerPlugin(ScrollTrigger);

// function About() {

  
//   const sectionsRef = useRef([]);

// useEffect(() => {

//   sectionsRef.current.forEach((section) => {

//     const image = section.querySelector(".parallax-image");

//     if (!image) return;

//     gsap.to(image, {
//       scale: 1.18,
//       yPercent: -8,
//       ease: "none",

//       scrollTrigger: {
//         trigger: section,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: 1.5,
//       },
//     });

//   });

// }, []);

//   return (

//     <div className="bg-black text-white overflow-hidden">

//       <Navbar />

//       {/* HERO */}
// <section
//   ref={(el) => sectionsRef.current[0] = el}
//   className="
//   relative
//   min-h-screen
//   flex items-center
//   overflow-hidden
//   "
// >

//   {/* BACKGROUND IMAGE */}
//   <motion.img

//     initial={{
//       scale: 1.12,
//     }}

//     animate={{
//       scale: 1.03,
//       y: [-10, 10, -10],
//     }}

//     transition={{
//       duration: 8,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}

//     src={aboutHero}
//     alt=""

//     className="
//     parallax-image

//     absolute inset-0

//     w-full
//     h-full

//     object-cover

//     object-[center_top]
//     md:object-[center_top]

//     brightness-[1.15]
//     "

//     style={{
//       objectPosition: 'center 80px',
//     }}
//   />

//   {/* DARK OVERLAY */}
//   <div
//     className="
//     absolute inset-0
//     bg-black/25
//     "
//   ></div>

//   {/* GRADIENT */}
//   <div
//     className="
//     absolute inset-0

//     bg-gradient-to-r
//     from-black
//     via-black/40
//     to-transparent
//     "
//   ></div>

//   {/* CONTENT */}
//   <div
//     className="
//     relative z-10

//     w-[92%]
//     md:w-[90%]

//     max-w-[1500px]

//     mx-auto

//     pt-28
//     md:pt-32
//     "
//   >

//     <motion.div
//       initial={{ opacity:0, y:100 }}
//       animate={{ opacity:1, y:0 }}
//       transition={{ duration:1.2 }}
//     >

//       {/* LABEL */}
//       <p
//         className="
//         uppercase

//         tracking-[6px]
//         md:tracking-[14px]

//         text-red-600

//         mb-4
//         md:mb-6

//         text-[10px]
//         md:text-sm

//         font-semibold
//         "
//       >
//         About Me
//       </p>

//       {/* TITLE */}
//       <h1
//         className="
//         text-[3.5rem]
//         sm:text-[4.5rem]
//         md:text-[8rem]

//         leading-[0.88]
//         md:leading-[0.82]

//         font-black
//         uppercase
//         "
//       >
//         ABOUT{" "}

//         <span className="text-red-600">
//           ME
//         </span>

//       </h1>

//       {/* LINE */}
//       <div
//         className="
//         w-[70px]
//         md:w-[90px]

//         h-[2px]

//         bg-red-600

//         mt-6
//         md:mt-8

//         mb-6
//         md:mb-8
//         "
//       ></div>

//       {/* DESCRIPTION */}
//       <p
//         className="
//         text-white/85

//         text-base
//         md:text-[1.3rem]

//         leading-[1.9]
//         md:leading-[2]

//         max-w-full
//         md:max-w-[650px]

//         font-light
//         "
//       >

//         I'm Shubh Asawa, a Motion Designer,
//         3D Artist and Visual Storyteller
//         from{" "}

//         <span className="text-red-500 font-medium">
//           New Delhi, India.
//         </span>

//       </p>

//       {/* SECOND PARAGRAPH */}
//       <p
//         className="
//         text-white/60

//         text-sm
//         md:text-lg

//         leading-[1.9]
//         md:leading-[2]

//         max-w-full
//         md:max-w-[620px]

//         mt-6
//         md:mt-8
//         "
//       >

//         I create cinematic visuals that connect
//         emotions with motion. From concept
//         to creation, I love turning ideas
//         into powerful visual stories.

//       </p>

//       {/* SIGNATURE */}
//       <div
//         className="
//         mt-2

//         flex flex-col
//         items-start
//         "
//       >

//         <img
//           src={signatureImage}
//           alt="Shubh Asawa Signature"

//           className="
//           w-[260px]
//           sm:w-[340px]
//           md:w-[720px]

//           max-w-none

//           object-contain

//           -ml-6
//           md:-ml-32

//           mt-2
//           "
//         />

//       </div>

//     </motion.div>

//   </div>

// </section>

//       {/* WHO IS SHUBH */}
// <section
//   ref={(el) => sectionsRef.current[1] = el}
//   className="
//   relative
//   min-h-screen
//   overflow-hidden
//   flex items-center
//   "
// >

//   {/* BACKGROUND IMAGE */}
//   <motion.img

//     initial={{
//       scale: 1.12,
//     }}

//     animate={{
//       scale: 1.03,
//       y: [-10, 10, -10],
//     }}

//     transition={{
//       duration: 8,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}

//     src={aboutStory}
//     alt=""

//     className="
//     absolute inset-0

//     w-full
//     h-full

//     object-cover

//     brightness-[1]

//     scale-[1.15]
//     "
//   />

//   {/* DARK OVERLAY */}
//   <div
//     className="
//     absolute inset-0
//     bg-black/30
//     "
//   ></div>

//   {/* CINEMATIC GRADIENT */}
//   <div
//     className="
//     absolute inset-0

//     bg-gradient-to-t
//     from-black
//     via-black/5
//     to-transparent
//     "
//   ></div>

//   {/* CONTENT */}
//   <div
//     className="
//     relative z-10

//     w-[92%]
//     md:w-[90%]

//     max-w-[1500px]

//     mx-auto

//     px-4
//     sm:px-6
//     md:px-8
//     "
//   >

//     <motion.div

//       initial={{ opacity: 0, y: 100 }}

//       whileInView={{ opacity: 1, y: 0 }}

//       transition={{ duration: 1.2 }}

//       className="
//       max-w-full
//       md:max-w-[850px]
//       "
//     >

//       {/* LABEL */}
//       <p
//         className="
//         uppercase

//         tracking-[5px]
//         md:tracking-[10px]

//         text-red-500

//         mb-5
//         md:mb-8

//         text-[10px]
//         md:text-sm
//         "
//       >
//         Who Is Shubh?
//       </p>

//       {/* TITLE */}
//       <h2
//         className="
//         text-[3rem]
//         sm:text-[4rem]
//         md:text-[8rem]

//         leading-[0.95]
//         md:leading-[0.88]

//         font-black
//         uppercase
//         "
//       >

//         I Don't

//         <br />

//         Just Create

//         <br />

//         Visuals.

//       </h2>

//       {/* LINE */}
//       <div
//         className="
//         w-[90px]
//         md:w-[140px]

//         h-[2px]

//         bg-red-500

//         mt-6
//         md:mt-10

//         mb-6
//         md:mb-10
//         "
//       ></div>

//       {/* FIRST PARAGRAPH */}
//       <p
//         className="
//         text-white/75

//         text-base
//         md:text-xl

//         leading-[1.9]
//         md:leading-[2]

//         max-w-full
//         md:max-w-[750px]
//         "
//       >

//         I create cinematic experiences that people can feel.
//         My work is inspired by anime storytelling,
//         emotional visuals, cinematic lighting,
//         and immersive digital worlds.

//       </p>

//       {/* SECOND PARAGRAPH */}
//       <p
//         className="
//         text-white/60

//         text-sm
//         md:text-lg

//         leading-[1.9]
//         md:leading-[2]

//         mt-6
//         md:mt-8

//         max-w-full
//         md:max-w-[700px]
//         "
//       >

//         Every frame I design carries atmosphere,
//         emotion, movement, and intensity.
//         From motion graphics and CGI
//         to anime-inspired edits and 3D visuals —
//         I focus on building worlds
//         that feel alive.

//       </p>

//     </motion.div>

//   </div>

// </section>

//       {/* PHILOSOPHY */}
// <section
//   ref={(el) => sectionsRef.current[2] = el}
//   className="
//   relative
//   min-h-screen
//   overflow-hidden
//   flex items-center
//   "
// >

//   {/* BACKGROUND IMAGE */}
//   <motion.img

//     initial={{
//       scale: 1.12,
//     }}

//     animate={{
//       scale: 1.03,
//       y: [-10, 10, -10],
//     }}

//     transition={{
//       duration: 8,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}

//     src={aboutCity}
//     alt=""

//     className="
//     parallax-image

//     absolute inset-0

//     w-full
//     h-full

//     object-cover

//     brightness-[0.75]

//     scale-110
//     "
//   />

//   {/* DARK OVERLAY */}
//   <div
//     className="
//     absolute inset-0
//     bg-black/45
//     "
//   ></div>

//   {/* GRADIENT */}
//   <div
//     className="
//     absolute inset-0

//     bg-gradient-to-r
//     from-black
//     via-black/20
//     to-transparent
//     "
//   ></div>

//   {/* CONTENT */}
//   <motion.div

//     initial={{ opacity:0, x:-100 }}

//     whileInView={{ opacity:1, x:0 }}

//     transition={{ duration:1 }}

//     className="
//     relative z-10

//     w-[92%]
//     md:w-[90%]

//     max-w-[1500px]

//     mx-auto

//     px-4
//     sm:px-6
//     md:px-8
//     "
//   >

//     <div
//       className="
//       max-w-full
//       md:max-w-[800px]
//       "
//     >

//       {/* LABEL */}
//       <p
//         className="
//         uppercase

//         tracking-[5px]
//         md:tracking-[10px]

//         text-red-500

//         mb-5
//         md:mb-8

//         text-[10px]
//         md:text-sm
//         "
//       >

//         Philosophy

//       </p>

//       {/* TITLE */}
//       <h2
//         className="
//         text-[3rem]
//         sm:text-[4rem]
//         md:text-[8rem]

//         leading-[0.95]
//         md:leading-[0.9]

//         font-black
//         uppercase
//         "
//       >

//         Discipline.

//         <br />

//         Passion.

//         <br />

//         Purpose.

//       </h2>

//     </div>

//   </motion.div>

// </section>

//       {/* SKILLS */}
// <section
//   ref={(el) => sectionsRef.current[3] = el}
//   className="
//   relative
//   min-h-screen
//   overflow-hidden
//   flex items-center
//   "
// >

//   {/* BACKGROUND */}
//   <motion.img

//     initial={{
//       scale: 1.12,
//     }}

//     animate={{
//       scale: 1.03,
//       y: [-10, 10, -10],
//     }}

//     transition={{
//       duration: 8,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}

//     src={aboutBattle}
//     alt=""

//     className="
//     parallax-image

//     absolute inset-0

//     w-full
//     h-full

//     object-cover

//     brightness-[0.9]

//     scale-110
//     "
//   />

//   {/* OVERLAY */}
//   <div
//     className="
//     absolute inset-0
//     bg-black/30
//     "
//   ></div>

//   {/* GRADIENT */}
//   <div
//     className="
//     absolute inset-0

//     bg-gradient-to-l
//     from-black
//     via-black/30
//     to-transparent
//     "
//   ></div>

//   {/* CONTENT */}
//   <div
//     className="
//     relative z-10

//     w-[92%]
//     md:w-[90%]

//     max-w-[1500px]

//     mx-auto

//     flex justify-end

//     px-4
//     sm:px-6
//     md:px-8
//     "
//   >

//     <motion.div

//       initial={{ opacity:0, x:100 }}

//       whileInView={{ opacity:1, x:0 }}

//       transition={{ duration:1 }}

//       className="
//       max-w-full
//       md:max-w-[650px]
//       "
//     >

//       {/* LABEL */}
//       <p
//         className="
//         uppercase

//         tracking-[5px]
//         md:tracking-[10px]

//         text-red-500

//         mb-5
//         md:mb-8

//         text-[10px]
//         md:text-sm
//         "
//       >

//         What I Do

//       </p>

//       {/* TITLE */}
//       <h2
//         className="
//         text-[3rem]
//         sm:text-[4rem]
//         md:text-[7rem]

//         leading-[0.95]

//         font-black
//         uppercase
//         "
//       >

//         I Build

//         <br />

//         Cinematic

//         <br />

//         Worlds

//       </h2>

//       {/* GRID */}
//       <div
//         className="
//         grid

//         grid-cols-1
//         sm:grid-cols-2

//         gap-6
//         md:gap-10

//         mt-10
//         md:mt-16
//         "
//       >

//         {/* ITEM */}
//         <div>

//           <FaFilm
//             className="
//             text-red-500

//             text-3xl
//             md:text-4xl

//             mb-4
//             md:mb-5
//             "
//           />

//           <h3
//             className="
//             text-xl
//             md:text-2xl

//             font-bold
//             "
//           >
//             Motion Design
//           </h3>

//         </div>

//         {/* ITEM */}
//         <div>

//           <FaCube
//             className="
//             text-red-500

//             text-3xl
//             md:text-4xl

//             mb-4
//             md:mb-5
//             "
//           />

//           <h3
//             className="
//             text-xl
//             md:text-2xl

//             font-bold
//             "
//           >
//             CGI & 3D
//           </h3>

//         </div>

//         {/* ITEM */}
//         <div>

//           <FaVideo
//             className="
//             text-red-500

//             text-3xl
//             md:text-4xl

//             mb-4
//             md:mb-5
//             "
//           />

//           <h3
//             className="
//             text-xl
//             md:text-2xl

//             font-bold
//             "
//           >
//             Editing
//           </h3>

//         </div>

//         {/* ITEM */}
//         <div>

//           <FaMagic
//             className="
//             text-red-500

//             text-3xl
//             md:text-4xl

//             mb-4
//             md:mb-5
//             "
//           />

//           <h3
//             className="
//             text-xl
//             md:text-2xl

//             font-bold
//             "
//           >
//             Storytelling
//           </h3>

//         </div>

//       </div>

//     </motion.div>

//   </div>

// </section>

// {/* WORKSPACE */}
// <section
//   ref={(el) => sectionsRef.current[4] = el}
//   className="
//   relative
//   min-h-screen
//   overflow-hidden
//   flex items-center
//   "
// >

//   <motion.img

//   initial={{
//     scale: 1.08,
//     y: 0,
//   }}

//   animate={{
//     scale: 1.02,
//     y: [-6, 6, -6],
//   }}

//   transition={{
//     duration: 10,
//     repeat: Infinity,
//     ease: "easeInOut",
//   }}

//   src={aboutWorkspace}
//   alt=""

//   className="
//   parallax-image

//   absolute
//   inset-0

//   w-full
//   h-full

//   object-cover

//   brightness-[0.9]

//   will-change-transform
//   transform-gpu

//   [backface-visibility:hidden]
//   [transform:translateZ(0)]
//   "
// />

//   {/* OVERLAY */}
//   <div
//     className="
//     absolute inset-0
//     bg-black/30
//     "
//   ></div>

//   {/* GRADIENT */}
//   <div
//     className="
//     absolute inset-0

//     bg-gradient-to-r
//     from-black
//     via-black/40
//     to-transparent
//     "
//   ></div>

//   {/* CONTENT */}
//   <div
//     className="
//     relative z-10

//     w-[92%]
//     md:w-[90%]

//     max-w-[1500px]

//     mx-auto

//     px-4
//     sm:px-6
//     md:px-8
//     "
//   >

//     <motion.div

//       initial={{ opacity:0, y:80 }}

//       whileInView={{ opacity:1, y:0 }}

//       transition={{ duration:1 }}
//     >

//       {/* LABEL */}
//       <p
//         className="
//         uppercase

//         tracking-[5px]
//         md:tracking-[10px]

//         text-red-500

//         mb-5
//         md:mb-8

//         text-[10px]
//         md:text-sm
//         "
//       >

//         Tools Of Creation

//       </p>

//       {/* TITLE */}
//       <h2
//         className="
//         text-[3rem]
//         sm:text-[4rem]
//         md:text-[7rem]

//         leading-[0.95]
//         md:leading-[0.9]

//         font-black
//         uppercase
//         "
//       >

//         Behind

//         <br />

//         Every Frame

//       </h2>

//       {/* LOGOS */}
//       <div
//         className="
//         flex flex-wrap

//         gap-6
//         md:gap-12

//         mt-10
//         md:mt-16

//         items-center
//         "
//       >

//         {[
//           aftereffectsLogo,
//           premiereLogo,
//           photoshopLogo,
//           illustratorLogo,
//           blenderLogo,
//           figmaLogo,
//         ].map((logo, index) => (

//           <motion.img

//             key={index}

//             whileHover={{
//               scale:1.15,
//               y:-8,
//             }}

//             transition={{
//               duration:0.35,
//             }}

//             src={logo}
//             alt=""

//             className="
//             w-[58px]
//             sm:w-[65px]
//             md:w-[85px]

//             object-contain

//             rounded-[18px]
//             md:rounded-[22px]

//             opacity-90
//             "
//           />

//         ))}

//       </div>

//     </motion.div>

//   </div>

// </section>

//       {/* ENDING */}
//       <section
//         ref={(el) => sectionsRef.current[5] = el}
//         className="
//         relative
//         min-h-screen
//         overflow-hidden
//         flex items-center justify-center
//         text-center
//         "
//       >

//         <motion.img

//           initial={{
//             scale: 1.12,
//           }}

//           animate={{
//             scale: 1.03,
//             y: [-10, 10, -10],
//           }}

//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           src={aboutEnding}
//           alt=""
//           className="
//           parallax-image
//           absolute inset-0
//           w-full h-full
//           object-cover
//           brightness-[0.75]
//           scale-110
//           "
//         />

//         <div className="
//         absolute inset-0
//         bg-black/50
//         "></div>

//         <motion.div
//           initial={{ opacity:0, y:100 }}
//           whileInView={{ opacity:1, y:0 }}
//           transition={{ duration:1 }}
//           className="
//           relative z-10
//           px-6
//           "
//         >

//           <p className="
//           uppercase
//           tracking-[10px]
//           text-red-500
//           mb-8
//           text-sm
//           ">

//             The Journey Continues

//           </p>

//           <h2 className="
//           text-[4rem]
//           md:text-[9rem]
//           leading-[0.85]
//           font-black
//           uppercase
//           ">

//             New Worlds
//             <br />
//             New Stories

//           </h2>

//         </motion.div>

//       </section>

//        <Footer />

//     </div>
//   );
// }

// export default About;


import Footer from '../components/layout/Footer'
import Navbar from "../components/layout/Navbar";
import { motion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useRef } from "react";

import {
  FaFilm,
  FaVideo,
  FaCube,
  FaMagic,
} from "react-icons/fa";

import blenderLogo from "../assets/tools/blender.png";
import aftereffectsLogo from "../assets/tools/aftereffects.png";
import premiereLogo from "../assets/tools/premiere.png";
import photoshopLogo from "../assets/tools/photoshop.png";
import illustratorLogo from "../assets/tools/illustrator.png";
import figmaLogo from "../assets/tools/figma.png";

import aboutHero from "../assets/about/about-hero.png";
import aboutStory from "../assets/about/about-story.png";
import aboutBattle from "../assets/about/about-battle.png";
import aboutCity from "../assets/about/about-city.png";
import aboutWorkspace from "../assets/about/about-workspace.png";
import aboutEnding from "../assets/about/about-ending.png";
import signatureImage from "../assets/about/signature.png";

gsap.registerPlugin(ScrollTrigger);

function About() {

  const sectionsRef = useRef([]);

  useEffect(() => {

    const ctx = gsap.context(() => {

      sectionsRef.current.forEach((section) => {

        if (!section) return;

        const image = section.querySelector(".parallax-image");

        if (!image) return;

        // Scroll-linked parallax scale/shift (scroll-scrubbed)
        gsap.fromTo(
          image,
          { scale: 1.12, yPercent: 0 },
          {
            scale: 1.22,
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );

        // Gentle idle float — same engine (GSAP), so it composites
        // cleanly with the scroll animation above instead of fighting it.
        gsap.to(image, {
          y: "+=10",
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

      });

      // Recalculate trigger positions once images/layout settle
      ScrollTrigger.refresh();

    });

    return () => ctx.revert();

  }, []);

  return (

    <div className="bg-black text-white overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section
        ref={(el) => sectionsRef.current[0] = el}
        className="
        relative
        min-h-screen
        flex items-center
        overflow-hidden
        "
      >

        {/* BACKGROUND IMAGE */}
        <img
          src={aboutHero}
          alt=""
          loading="eager"
          className="
          parallax-image

          absolute inset-0

          w-full
          h-full

          object-cover

          object-[center_top]
          md:object-[center_top]

          brightness-[1.15]

          will-change-transform
          "

          style={{
            objectPosition: 'center 80px',
          }}
        />

        {/* DARK OVERLAY */}
        <div
          className="
          absolute inset-0
          bg-black/25
          "
        ></div>

        {/* GRADIENT */}
        <div
          className="
          absolute inset-0

          bg-gradient-to-r
          from-black
          via-black/40
          to-transparent
          "
        ></div>

        {/* CONTENT */}
        <div
          className="
          relative z-10

          w-[92%]
          md:w-[90%]

          max-w-[1500px]

          mx-auto

          pt-28
          md:pt-32
          "
        >

          <motion.div
            initial={{ opacity:0, y:100 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:1.2 }}
          >

            {/* LABEL */}
            <p
              className="
              uppercase

              tracking-[6px]
              md:tracking-[14px]

              text-red-600

              mb-4
              md:mb-6

              text-[10px]
              md:text-sm

              font-semibold
              "
            >
              About Me
            </p>

            {/* TITLE */}
            <h1
              className="
              text-[3.5rem]
              sm:text-[4.5rem]
              md:text-[8rem]

              leading-[0.88]
              md:leading-[0.82]

              font-black
              uppercase
              "
            >
              ABOUT{" "}

              <span className="text-red-600">
                ME
              </span>

            </h1>

            {/* LINE */}
            <div
              className="
              w-[70px]
              md:w-[90px]

              h-[2px]

              bg-red-600

              mt-6
              md:mt-8

              mb-6
              md:mb-8
              "
            ></div>

            {/* DESCRIPTION */}
            <p
              className="
              text-white/85

              text-base
              md:text-[1.3rem]

              leading-[1.9]
              md:leading-[2]

              max-w-full
              md:max-w-[650px]

              font-light
              "
            >

             I'm Shubh Asawa, a multidisciplinary designer, working across motion design, 3D, visual design, video editing, from {" "} 

              <span className="text-red-500 font-medium">
                New Delhi, India.
              </span>

            </p>

            {/* SECOND PARAGRAPH */}
            <p
              className="
              text-white/60

              text-sm
              md:text-lg

              leading-[1.9]
              md:leading-[2]

              max-w-full
              md:max-w-[620px]

              mt-6
              md:mt-8
              "
            >

              I create visual experiences that connect design, motion, and storytelling. From the first concept to the final frame, I enjoy transforming ideas into thoughtful, engaging visuals that communicate clearly and leave an impression.

            </p>

            {/* SIGNATURE */}
            <div
              className="
              mt-2

              flex flex-col
              items-start
              "
            >

              <img
                src={signatureImage}
                alt="Shubh Asawa Signature"
                loading="lazy"

                className="
                w-[260px]
                sm:w-[340px]
                md:w-[720px]

                max-w-none

                object-contain

                -ml-6
                md:-ml-32

                mt-2
                "
              />

            </div>

          </motion.div>

        </div>

      </section>

      {/* WHO IS SHUBH */}
      <section
        ref={(el) => sectionsRef.current[1] = el}
        className="
        relative
        min-h-screen
        overflow-hidden
        flex items-center
        "
      >

        {/* BACKGROUND IMAGE */}
        <img
          src={aboutStory}
          alt=""
          loading="lazy"

          className="
          parallax-image

          absolute inset-0

          w-full
          h-full

          object-cover

          brightness-[1]

          will-change-transform
          "
        />

        {/* DARK OVERLAY */}
        <div
          className="
          absolute inset-0
          bg-black/30
          "
        ></div>

        {/* CINEMATIC GRADIENT */}
        <div
          className="
          absolute inset-0

          bg-gradient-to-t
          from-black
          via-black/5
          to-transparent
          "
        ></div>

        {/* CONTENT */}
        <div
          className="
          relative z-10

          w-[92%]
          md:w-[90%]

          max-w-[1500px]

          mx-auto

          px-4
          sm:px-6
          md:px-8
          "
        >

          <motion.div

            initial={{ opacity: 0, y: 100 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 1.2 }}

            className="
            max-w-full
            md:max-w-[850px]
            "
          >

            {/* LABEL */}
            <p
              className="
              uppercase

              tracking-[5px]
              md:tracking-[10px]

              text-red-500

              mb-5
              md:mb-8

              text-[10px]
              md:text-sm
              "
            >
              Who Is Shubh?
            </p>

            {/* TITLE */}
            <h2
              className="
              text-[3rem]
              sm:text-[4rem]
              md:text-[8rem]

              leading-[0.95]
              md:leading-[0.88]

              font-black
              uppercase
              "
            >

              I Don't

              <br />

              Just DESIGN

              <br />

              Visuals

            </h2>

            {/* LINE */}
            <div
              className="
              w-[90px]
              md:w-[140px]

              h-[2px]

              bg-red-500

              mt-6
              md:mt-10

              mb-6
              md:mb-10
              "
            ></div>

            {/* FIRST PARAGRAPH */}
            <p
              className="
              text-white/75

              text-base
              md:text-xl

              leading-[1.9]
              md:leading-[2]

              max-w-full
              md:max-w-[750px]
              "
            >

              I create visual experiences that combine design, motion, 3D, and storytelling. My work is driven by curiosity, visual experimentation, and a passion for turning simple ideas into something people remember.
            </p>

            {/* SECOND PARAGRAPH */}
            <p
              className="
              text-white/60

              text-sm
              md:text-lg

              leading-[1.9]
              md:leading-[2]

              mt-6
              md:mt-8

              max-w-full
              md:max-w-[700px]
              "
            >

              Whether I'm creating motion graphics, 3D visuals, CGI advertisements, video edits, or visual designs, I focus on the details that give each project its own character from composition and lighting to movement, rhythm, and atmosphere.



            </p>

          </motion.div>

        </div>

      </section>

      {/* PHILOSOPHY */}
      <section
        ref={(el) => sectionsRef.current[2] = el}
        className="
        relative
        min-h-screen
        overflow-hidden
        flex items-center
        "
      >

        {/* BACKGROUND IMAGE */}
        <img
          src={aboutCity}
          alt=""
          loading="lazy"

          className="
          parallax-image

          absolute inset-0

          w-full
          h-full

          object-cover

          brightness-[0.75]

          will-change-transform
          "
        />

        {/* DARK OVERLAY */}
        <div
          className="
          absolute inset-0
          bg-black/45
          "
        ></div>

        {/* GRADIENT */}
        <div
          className="
          absolute inset-0

          bg-gradient-to-r
          from-black
          via-black/20
          to-transparent
          "
        ></div>

        {/* CONTENT */}
        <motion.div

          initial={{ opacity:0, x:-100 }}

          whileInView={{ opacity:1, x:0 }}

          transition={{ duration:1 }}

          className="
          relative z-10

          w-[92%]
          md:w-[90%]

          max-w-[1500px]

          mx-auto

          px-4
          sm:px-6
          md:px-8
          "
        >

          <div
            className="
            max-w-full
            md:max-w-[800px]
            "
          >

            {/* LABEL */}
            <p
              className="
              uppercase

              tracking-[5px]
              md:tracking-[10px]

              text-red-500

              mb-5
              md:mb-8

              text-[10px]
              md:text-sm
              "
            >

              Philosophy

            </p>

            {/* TITLE */}
            <h2
              className="
              text-[3rem]
              sm:text-[4rem]
              md:text-[8rem]

              leading-[0.95]
              md:leading-[0.9]

              font-black
              uppercase
              "
            >

              Discipline

              <br />

              Passion

              <br />

              Purpose

            </h2>

          </div>

        </motion.div>

      </section>

      {/* SKILLS */}
      <section
        ref={(el) => sectionsRef.current[3] = el}
        className="
        relative
        min-h-screen
        overflow-hidden
        flex items-center
        "
      >

        {/* BACKGROUND */}
        <img
          src={aboutBattle}
          alt=""
          loading="lazy"

          className="
          parallax-image

          absolute inset-0

          w-full
          h-full

          object-cover

          brightness-[0.9]

          will-change-transform
          "
        />

        {/* OVERLAY */}
        <div
          className="
          absolute inset-0
          bg-black/30
          "
        ></div>

        {/* GRADIENT */}
        <div
          className="
          absolute inset-0

          bg-gradient-to-l
          from-black
          via-black/30
          to-transparent
          "
        ></div>

        {/* CONTENT */}
        <div
          className="
          relative z-10

          w-[92%]
          md:w-[90%]

          max-w-[1500px]

          mx-auto

          flex justify-end

          px-4
          sm:px-6
          md:px-8
          "
        >

          <motion.div

            initial={{ opacity:0, x:100 }}

            whileInView={{ opacity:1, x:0 }}

            transition={{ duration:1 }}

            className="
            max-w-full
            md:max-w-[650px]
            "
          >

            {/* LABEL */}
            <p
              className="
              uppercase

              tracking-[5px]
              md:tracking-[10px]

              text-red-500

              mb-5
              md:mb-8

              text-[10px]
              md:text-sm
              "
            >

              What I Do

            </p>

            {/* TITLE */}
            <h2
              className="
              text-[3rem]
              sm:text-[4rem]
              md:text-[7rem]

              leading-[0.95]

              font-black
              uppercase
              "
            >

              I 

              <br />

              CREATE 

              <br />

              VISUALS

            </h2>

            {/* GRID */}
            <div
              className="
              grid

              grid-cols-1
              sm:grid-cols-2

              gap-6
              md:gap-10

              mt-10
              md:mt-16
              "
            >

              {/* ITEM */}
              <div>

                <FaFilm
                  className="
                  text-red-500

                  text-3xl
                  md:text-4xl

                  mb-4
                  md:mb-5
                  "
                />

                <h3
                  className="
                  text-xl
                  md:text-2xl

                  font-bold
                  "
                >
                  Motion Design
                </h3>

              </div>

              {/* ITEM */}
              <div>

                <FaCube
                  className="
                  text-red-500

                  text-3xl
                  md:text-4xl

                  mb-4
                  md:mb-5
                  "
                />

                <h3
                  className="
                  text-xl
                  md:text-2xl

                  font-bold
                  "
                >
                  CGI & 3D
                </h3>

              </div>

              {/* ITEM */}
              <div>

                <FaVideo
                  className="
                  text-red-500

                  text-3xl
                  md:text-4xl

                  mb-4
                  md:mb-5
                  "
                />

                <h3
                  className="
                  text-xl
                  md:text-2xl

                  font-bold
                  "
                >
                  Editing
                </h3>

              </div>

              {/* ITEM */}
              <div>

                <FaMagic
                  className="
                  text-red-500

                  text-3xl
                  md:text-4xl

                  mb-4
                  md:mb-5
                  "
                />

                <h3
                  className="
                  text-xl
                  md:text-2xl

                  font-bold
                  "
                >
                  Storytelling
                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* WORKSPACE */}
      <section
        ref={(el) => sectionsRef.current[4] = el}
        className="
        relative
        min-h-screen
        overflow-hidden
        flex items-center
        "
      >

        <img
          src={aboutWorkspace}
          alt=""
          loading="lazy"

          className="
          parallax-image

          absolute
          inset-0

          w-full
          h-full

          object-cover

          brightness-[0.9]

          will-change-transform
          "
        />

        {/* OVERLAY */}
        <div
          className="
          absolute inset-0
          bg-black/30
          "
        ></div>

        {/* GRADIENT */}
        <div
          className="
          absolute inset-0

          bg-gradient-to-r
          from-black
          via-black/40
          to-transparent
          "
        ></div>

        {/* CONTENT */}
        <div
          className="
          relative z-10

          w-[92%]
          md:w-[90%]

          max-w-[1500px]

          mx-auto

          px-4
          sm:px-6
          md:px-8
          "
        >

          <motion.div

            initial={{ opacity:0, y:80 }}

            whileInView={{ opacity:1, y:0 }}

            transition={{ duration:1 }}
          >

            {/* LABEL */}
            <p
              className="
              uppercase

              tracking-[5px]
              md:tracking-[10px]

              text-red-500

              mb-5
              md:mb-8

              text-[10px]
              md:text-sm
              "
            >

              Tools Of Creation

            </p>

            {/* TITLE */}
            <h2
              className="
              text-[3rem]
              sm:text-[4rem]
              md:text-[7rem]

              leading-[0.95]
              md:leading-[0.9]

              font-black
              uppercase
              "
            >

              Behind

              <br />

              Every Frame

            </h2>

            {/* LOGOS */}
            <div
              className="
              flex flex-wrap

              gap-6
              md:gap-12

              mt-10
              md:mt-16

              items-center
              "
            >

              {[
                aftereffectsLogo,
                premiereLogo,
                photoshopLogo,
                illustratorLogo,
                blenderLogo,
                figmaLogo,
              ].map((logo, index) => (

                <motion.img

                  key={index}

                  whileHover={{
                    scale:1.15,
                    y:-8,
                  }}

                  transition={{
                    duration:0.35,
                  }}

                  src={logo}
                  alt=""
                  loading="lazy"

                  className="
                  w-[58px]
                  sm:w-[65px]
                  md:w-[85px]

                  object-contain

                  rounded-[18px]
                  md:rounded-[22px]

                  opacity-90
                  "
                />

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* ENDING */}
      <section
        ref={(el) => sectionsRef.current[5] = el}
        className="
        relative
        min-h-screen
        overflow-hidden
        flex items-center justify-center
        text-center
        "
      >

        <img
          src={aboutEnding}
          alt=""
          loading="lazy"
          className="
          parallax-image
          absolute inset-0
          w-full h-full
          object-cover
          brightness-[0.75]

          will-change-transform
          "
        />

        <div className="
        absolute inset-0
        bg-black/50
        "></div>

        <motion.div
          initial={{ opacity:0, y:100 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="
          relative z-10
          px-6
          "
        >

          <p className="
          uppercase
          tracking-[10px]
          text-red-500
          mb-8
          text-sm
          ">

            The Journey Continues

          </p>

          <h2 className="
          text-[4rem]
          md:text-[9rem]
          leading-[0.85]
          font-black
          uppercase
          ">

            New Worlds
            <br />
            New Stories

          </h2>

        </motion.div>

      </section>

       <Footer />

    </div>
  );
}

export default About;