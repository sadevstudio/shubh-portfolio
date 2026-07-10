// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'


// import { Link } from 'react-router-dom'
// import MagneticButton from '../ui/MagneticButton'
// import projects from '../../data/projects'


// import SamuraiShowreel from '../../assets/images/samurai-showreel.png'

// const reels = [...projects]

//   .filter((project) => project.showreelVideo)

//   .sort(() => 0.5 - Math.random())

//   .slice(0, 4)

//   .map((project) => ({

//     video: project.showreelVideo,

//     title: project.title,

//     subtitle: project.category,

//     slug: project.slug,

//   }))

// function ShowreelSection() {

//   const [current,setCurrent] = useState(0)

//   useEffect(()=>{

//     const interval = setInterval(()=>{

//       setCurrent((prev)=>
//         prev === reels.length - 1 ? 0 : prev + 1
//       )

//     },5000)

//     return ()=> clearInterval(interval)

//   },[])

//   const nextReel = ()=>{

//     setCurrent((prev)=>
//       prev === reels.length - 1 ? 0 : prev + 1
//     )

//   }

//   const prevReel = ()=>{

//     setCurrent((prev)=>
//       prev === 0 ? reels.length - 1 : prev - 1
//     )

//   }

//   return (

//     <section className="
//     relative
//     py-28
//     overflow-hidden
//     border-t border-white/10
//     ">

//       {/* BACKGROUND IMAGE */}
//       <motion.div

//         initial={{
//     scale: 1.12,
//   }}

//   animate={{
//     scale: 1.03,
//     y: [-10, 10, -10],
//   }}

//   transition={{
//     duration: 8,
//     repeat: Infinity,
//     ease: "easeInOut",
//   }}

//         viewport={{ once:true }}

//         className="
//         absolute inset-0
//         "
//       >

//         <img
//           src={SamuraiShowreel}
//           alt="Samurai Showreel"
//           className="
//           w-full
//           h-full
//           object-cover
//           opacity-70
//           "
//         />

//       </motion.div>

//       {/* DARK OVERLAY */}
//       <div className="
//       absolute inset-0
//       bg-black/70
//       "></div>

//       {/* RED ATMOSPHERE */}
//       <div className="
//       absolute
//       top-1/2
//       left-1/2
//       -translate-x-1/2
//       -translate-y-1/2
//       w-[900px]
//       h-[900px]
//       bg-red-600/10
//       blur-[180px]
//       rounded-full
//       "></div>

//       <div className="
//       max-w-[1500px]
//       mx-auto
//       px-8
//       relative z-10
//       grid
//       lg:grid-cols-[0.5fr_1.5fr]
//       gap-14
//       items-center
//       ">

//         {/* LEFT CONTENT */}
//         <motion.div

//           initial={{
//             opacity:0,
//             x:-60,
//           }}

//           whileInView={{
//             opacity:1,
//             x:0,
//           }}

//           transition={{
//             duration:1,
//           }}

//           viewport={{ once:true }}

//         >

//           <p className="
//           uppercase
//           tracking-[0.5em]
//           text-red-500
//           text-sm
//           mb-6
//           ">
//             Cinematic Reel Experience
//           </p>

//           <h2 className="
//           big-title
//           text-[4rem]
//           md:text-[7rem]
//           leading-[0.9]
//           uppercase
//           mb-8
//           ">

//             SHOWREEL

//           </h2>

//           <p className="
//           text-white/60
//           text-lg
//           leading-relaxed
//           max-w-[500px]
//           mb-10
//           ">

//             A cinematic collection of anime-inspired
//             motion visuals,
//             CGI storytelling,
//             dramatic edits,
//             and immersive creative direction.

//           </p>
          

//          <motion.div
//   initial={{ opacity:0, y:40 }}
//   whileInView={{ opacity:1, y:0 }}
//   transition={{ delay:0.8, duration:1 }}
//   viewport={{ once:true }}
//   className="
//   flex flex-wrap
//   items-center
//   gap-6
//   mt-12
//   "
// >

//   <Link to="/portfolio">

//     <MagneticButton>
//       WATCH MORE
//     </MagneticButton>

//   </Link>

// </motion.div>

//         </motion.div>

//         {/* VIDEO FRAME */}
//         <motion.div

//           initial={{
//             opacity:0,
//             x:60,
//           }}

//           whileInView={{
//             opacity:1,
//             x:0,
//           }}

//           transition={{
//             duration:1,
//           }}

//           viewport={{ once:true }}

//           className="
// relative
// overflow-hidden
// rounded-[45px]
// border border-white/10
// bg-black
// shadow-[0_0_120px_rgba(255,0,0,0.15)]
// aspect-video
// min-h-[650px]
// w-full
// "
//         >

//           {/* <AnimatePresence mode="wait"> */}

//   <Link
//     to={`/portfolio/${reels[current].slug}`}
//     className="absolute inset-0"
//   >

//     <motion.video
//   key={current}

//   autoPlay
//   muted
//   loop
//   playsInline
//   preload="auto"

//   initial={{
//     opacity:0,
//     scale:1.05,
//   }}

//   animate={{
//     opacity:1,
//     scale:1,
//   }}

//   exit={{
//     opacity:0,
//     scale:1.05,
//   }}

//   transition={{
//     duration:1,
//     ease:"easeOut",
//   }}

//   style={{
//     imageRendering: "auto",
//   }}

//   className="
//   absolute inset-0
//   w-full h-full
//   object-cover
//   cursor-pointer

//   will-change-transform
//   transform-gpu
//   backface-hidden
//   "
// >

//       <source
//         src={reels[current].video}
//         type="video/mp4"
//       />

//     </motion.video>

//   </Link>

// {/* </AnimatePresence> */}

//           {/* OVERLAY */}
//           <div className="
//           absolute inset-0
//           bg-gradient-to-t
//           from-black
//           via-black/10
//           to-transparent
//           "></div>

//           {/* CONTENT */}
//           <div className="
//           absolute
//           bottom-10 left-10
//           z-20
//           ">

//             <motion.p
//               key={reels[current].subtitle}
//               initial={{ opacity:0, y:20 }}
//               animate={{ opacity:1, y:0 }}
//               transition={{ duration:0.5 }}
//               className="
//               uppercase
//               tracking-[0.4em]
//               text-red-500
//               text-xs
//               mb-4
//               "
//             >

//               {reels[current].subtitle}

//             </motion.p>

//             <motion.h3
//               key={reels[current].title}
//               initial={{ opacity:0, y:30 }}
//               animate={{ opacity:1, y:0 }}
//               transition={{ duration:0.7 }}
//               className="
//               big-title
//               text-[2.5rem]
//               md:text-[4rem]
//               leading-[0.9]
//               uppercase
//               "
//             >

//               {reels[current].title}

//             </motion.h3>

//           </div>

//           {/* CONTROLS */}
//           <div className="
//           absolute
//           bottom-10 right-10
//           z-20
//           flex
//           items-center
//           gap-4
//           ">

//             <button
//               onClick={prevReel}
//               className="
//               w-14 h-14
//               rounded-full
//               border border-white/10
//               bg-black/40
//               backdrop-blur-xl
//               hover:bg-red-500
//               transition
//               "
//             >
//               ←
//             </button>

//             <button
//               onClick={nextReel}
//               className="
//               w-14 h-14
//               rounded-full
//               border border-white/10
//               bg-black/40
//               backdrop-blur-xl
//               hover:bg-red-500
//               transition
//               "
//             >
//               →
//             </button>

//           </div>

//         </motion.div>

//       </div>

//     </section>
//   )
// }

// export default ShowreelSection

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Link } from 'react-router-dom'
import MagneticButton from '../ui/MagneticButton'
import projects from '../../data/projects'

import SamuraiShowreel from '../../assets/images/samurai-showreel.png'

// Pull the first video found in each project (new `results` array first,
// falling back to legacy `video` / `showreelVideo` fields), along with
// its own aspect ratio so each reel plays at its correct natural size.
function getProjectVideo(project) {
  if (project.results && project.results.length > 0) {
    const videoItem = project.results.find((r) => r.type === "video");
    if (videoItem) {
      const ratio =
        videoItem.aspectRatio ||
        (videoItem.orientation === "portrait" ? "9/16" : "16/9");
      return { src: videoItem.src, aspectRatio: ratio };
    }
  }

  if (project.showreelVideo) {
    return {
      src: project.showreelVideo,
      aspectRatio: project.resultOrientation === "portrait" ? "9/16" : "16/9",
    };
  }

  if (project.video) {
    return {
      src: project.video,
      aspectRatio: project.resultOrientation === "portrait" ? "9/16" : "16/9",
    };
  }

  return null;
}

const reels = [...projects]
  .map((project) => {
    const videoData = getProjectVideo(project);
    if (!videoData) return null;

    return {
      video: videoData.src,
      aspectRatio: videoData.aspectRatio,
      title: project.title,
      subtitle: project.category,
      slug: project.slug,
    };
  })
  .filter(Boolean)
  .sort(() => 0.5 - Math.random())
  .slice(0, 4);

function ShowreelSection() {

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (reels.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === reels.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // No reels to show — render nothing instead of crashing.
  if (reels.length === 0) {
    return null;
  }

  const nextReel = () => {
    setCurrent((prev) =>
      prev === reels.length - 1 ? 0 : prev + 1
    )
  }

  const prevReel = () => {
    setCurrent((prev) =>
      prev === 0 ? reels.length - 1 : prev - 1
    )
  }

  const activeReel = reels[current];
  const isPortrait = activeReel.aspectRatio === "9/16";

  return (

    <section className="
    relative
    py-28
    overflow-hidden
    border-t border-white/10
    ">

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

        viewport={{ once: true }}

        className="
        absolute inset-0
        "
      >

        <img
          src={SamuraiShowreel}
          alt="Samurai Showreel"
          className="
          w-full
          h-full
          object-cover
          opacity-70
          "
        />

      </motion.div>

      {/* DARK OVERLAY */}
      <div className="
      absolute inset-0
      bg-black/70
      "></div>

      {/* RED ATMOSPHERE */}
      <div className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[900px]
      h-[900px]
      bg-red-600/10
      blur-[180px]
      rounded-full
      "></div>

      <div className="
      max-w-[1500px]
      mx-auto
      px-8
      relative z-10
      grid
      lg:grid-cols-[0.5fr_1.5fr]
      gap-14
      items-center
      ">

        {/* LEFT CONTENT */}
        <motion.div

          initial={{
            opacity: 0,
            x: -60,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
          }}

          viewport={{ once: true }}

        >

          <p className="
          uppercase
          tracking-[0.5em]
          text-red-500
          text-sm
          mb-6
          ">
            Cinematic Reel Experience
          </p>

          <h2 className="
          big-title
          text-[4rem]
          md:text-[7rem]
          leading-[0.9]
          uppercase
          mb-8
          ">

            SHOWREEL

          </h2>

          <p className="
          text-white/60
          text-lg
          leading-relaxed
          max-w-[500px]
          mb-10
          ">

            A cinematic collection of anime-inspired
            motion visuals,
            CGI storytelling,
            dramatic edits,
            and immersive creative direction.

          </p>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
            className="
            flex flex-wrap
            items-center
            gap-6
            mt-12
            "
          >

            <Link to="/portfolio">

              <MagneticButton>
                WATCH MORE
              </MagneticButton>

            </Link>

          </motion.div>

        </motion.div>

        {/* VIDEO FRAME */}
        <motion.div

          initial={{
            opacity: 0,
            x: 60,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
          }}

          viewport={{ once: true }}

          className={`
          relative
          overflow-hidden
          rounded-[45px]
          border border-white/10
          bg-black
          shadow-[0_0_120px_rgba(255,0,0,0.15)]
          mx-auto
          ${isPortrait ? "max-w-[400px] w-full" : "w-full"}
          `}
          style={{ aspectRatio: activeReel.aspectRatio.replace("/", " / ") }}
        >

          <Link
            to={`/portfolio/${activeReel.slug}`}
            className="absolute inset-0"
          >

            <motion.video
              key={current}

              autoPlay
              muted
              loop
              playsInline
              preload="auto"

              initial={{
                opacity: 0,
                scale: 1.05,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                scale: 1.05,
              }}

              transition={{
                duration: 1,
                ease: "easeOut",
              }}

              style={{
                imageRendering: "auto",
              }}

              className="
              absolute inset-0
              w-full h-full
              object-cover
              cursor-pointer

              will-change-transform
              transform-gpu
              backface-hidden
              "
            >

              <source
                src={activeReel.video}
                type="video/mp4"
              />

            </motion.video>

          </Link>

          {/* OVERLAY */}
          <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black
          via-black/10
          to-transparent
          "></div>

          {/* CONTENT */}
          <div className="
          absolute
          bottom-10 left-10
          z-20
          ">

            <motion.p
              key={activeReel.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
              uppercase
              tracking-[0.4em]
              text-red-500
              text-xs
              mb-4
              "
            >

              {activeReel.subtitle}

            </motion.p>

            <motion.h3
              key={activeReel.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
              big-title
              text-[2.5rem]
              md:text-[4rem]
              leading-[0.9]
              uppercase
              "
            >

              {activeReel.title}

            </motion.h3>

          </div>

          {/* CONTROLS */}
          <div className="
          absolute
          bottom-10 right-10
          z-20
          flex
          items-center
          gap-4
          ">

            <button
              onClick={prevReel}
              className="
              w-14 h-14
              rounded-full
              border border-white/10
              bg-black/40
              backdrop-blur-xl
              hover:bg-red-500
              transition
              "
            >
              ←
            </button>

            <button
              onClick={nextReel}
              className="
              w-14 h-14
              rounded-full
              border border-white/10
              bg-black/40
              backdrop-blur-xl
              hover:bg-red-500
              transition
              "
            >
              →
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default ShowreelSection