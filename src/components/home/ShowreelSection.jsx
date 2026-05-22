import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import reel1 from '../../assets/videos/reel1.mp4'
import reel2 from '../../assets/videos/reel2.mp4'
import reel3 from '../../assets/videos/reel3.mp4'
import reel4 from '../../assets/videos/reel4.mp4'

const reels = [

  {
    video: reel1,
    title:'KARNA CINEMATIC',
    subtitle:'Anime Inspired Motion Experience',
  },

  {
    video: reel2,
    title:'HYPER ANIME EDIT',
    subtitle:'Fast Transition Visual Storytelling',
  },

  {
    video: reel3,
    title:'CGI MOTION',
    subtitle:'Cinematic 3D Visual Direction',
  },

  {
    video: reel4,
    title:'MOTION EXPERIENCE',
    subtitle:'Immersive Creative Reel',
  },

]

function ShowreelSection() {

  const [current,setCurrent] = useState(0)

  // AUTO CHANGE
  useEffect(()=>{

    const interval = setInterval(()=>{

      setCurrent((prev)=>
        prev === reels.length - 1 ? 0 : prev + 1
      )

    },5000)

    return ()=> clearInterval(interval)

  },[])

  // NEXT
  const nextReel = ()=>{

    setCurrent((prev)=>
      prev === reels.length - 1 ? 0 : prev + 1
    )

  }

  // PREV
  const prevReel = ()=>{

    setCurrent((prev)=>
      prev === 0 ? reels.length - 1 : prev - 1
    )

  }

  return (

    <section className="
    relative
    py-40
    overflow-hidden
    ">

      {/* BACKGROUND */}
      <div className="
      absolute inset-0
      bg-black
      "></div>

      {/* RED GLOW */}
      <div className="
      absolute top-1/2 left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[1200px]
      h-[1200px]
      bg-red-600/10
      blur-[220px]
      rounded-full
      "></div>

      <div className="
      container
      relative z-10
      ">

        {/* HEADING */}
        <div className="mb-20">

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
          md:text-[8rem]
          leading-[0.9]
          uppercase
          ">
            HYPER
            <br />
            SHOWREEL
          </h2>

        </div>

        {/* VIDEO WRAPPER */}
        <div className="
        relative
        h-[850px]
        overflow-hidden
        rounded-[60px]
        border border-white/10
        bg-black
        shadow-[0_0_120px_rgba(255,0,0,0.12)]
        ">

          {/* VIDEOS */}
          <AnimatePresence mode="wait">

            <motion.video
              key={current}
              autoPlay
              muted
              loop
              playsInline
              initial={{
                opacity:0,
                scale:1.08,
                filter:'blur(20px)',
              }}
              animate={{
                opacity:1,
                scale:1,
                filter:'blur(0px)',
              }}
              exit={{
                opacity:0,
                scale:1.1,
                filter:'blur(20px)',
              }}
              transition={{
                duration:0.8,
              }}
              className="
              absolute inset-0
              w-full h-full
              object-cover
              "
            >

              <source
                src={reels[current].video}
                type="video/mp4"
              />

            </motion.video>

          </AnimatePresence>

          {/* OVERLAY */}
          <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
          "></div>

          {/* SIDE FADE */}
          <div className="
          absolute inset-0
          bg-gradient-to-r
          from-black/70
          via-transparent
          to-black/20
          "></div>

          {/* CONTENT */}
          <div className="
          absolute
          bottom-14 left-14
          z-20
          max-w-[700px]
          ">

            <motion.p
              key={reels[current].subtitle}
              initial={{
                opacity:0,
                y:30,
              }}
              animate={{
                opacity:1,
                y:0,
              }}
              transition={{
                duration:0.6,
              }}
              className="
              uppercase
              tracking-[0.5em]
              text-red-500
              text-sm
              mb-6
              "
            >

              {reels[current].subtitle}

            </motion.p>

            <motion.h3
              key={reels[current].title}
              initial={{
                opacity:0,
                y:40,
              }}
              animate={{
                opacity:1,
                y:0,
              }}
              transition={{
                duration:0.8,
              }}
              className="
              big-title
              text-[4rem]
              md:text-[7rem]
              leading-[0.9]
              uppercase
              "
            >

              {reels[current].title}

            </motion.h3>

          </div>

          {/* CONTROLS */}
          <div className="
          absolute
          bottom-14 right-14
          z-20
          flex items-center gap-5
          ">

            <button
              onClick={prevReel}
              className="
              w-16 h-16
              rounded-full
              border border-white/10
              bg-black/40
              backdrop-blur-xl
              hover:bg-red-500
              transition
              text-xl
              "
            >
              ←
            </button>

            <button
              onClick={nextReel}
              className="
              w-16 h-16
              rounded-full
              border border-white/10
              bg-black/40
              backdrop-blur-xl
              hover:bg-red-500
              transition
              text-xl
              "
            >
              →
            </button>

          </div>

          {/* REEL INDICATORS */}
          <div className="
          absolute
          top-10 right-10
          z-20
          flex gap-3
          ">

            {reels.map((_,index)=>(

              <div
                key={index}
                className={`
                h-2 rounded-full transition-all duration-500

                ${current === index
                  ? 'w-20 bg-red-500'
                  : 'w-8 bg-white/30'
                }
                `}
              ></div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default ShowreelSection