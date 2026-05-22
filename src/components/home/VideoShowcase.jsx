import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import video1 from '../../assets/videos/Comp 2_1.mp4'
import video2 from '../../assets/videos/couple.mp4'
import video3 from '../../assets/videos/India comp.mp4'

const videos = [

  {
    src: video1,
    title:'KARNA CINEMATIC',
    subtitle:'Anime Inspired Motion Reel',
  },

  {
    src: video2,
    title:'ANIME VISUAL',
    subtitle:'Emotional Storytelling Motion',
  },

  {
    src: video3,
    title:'CGI EXPERIENCE',
    subtitle:'Cinematic Motion Design',
  },

]

function VideoShowcase() {

  const [current,setCurrent] = useState(0)

  // AUTO CHANGE
  useEffect(()=>{

    const interval = setInterval(()=>{

      setCurrent((prev)=>
        prev === videos.length - 1 ? 0 : prev + 1
      )

    },6000)

    return ()=> clearInterval(interval)

  },[])

  const nextVideo = ()=>{

    setCurrent((prev)=>
      prev === videos.length - 1 ? 0 : prev + 1
    )

  }

  const prevVideo = ()=>{

    setCurrent((prev)=>
      prev === 0 ? videos.length - 1 : prev - 1
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
      bg-gradient-to-br
      from-black
      via-red-950/10
      to-black
      "></div>

      {/* GLOW */}
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
      ">

        {/* HEADING */}
        <div className="mb-16">

          <p className="
          uppercase
          tracking-[0.5em]
          text-red-500
          text-sm
          mb-6
          ">
            Motion Showcase
          </p>

          <h2 className="
          big-title
          text-[4rem]
          md:text-[7rem]
          leading-[0.9]
          uppercase
          ">
            VIDEO
            <br />
            EXPERIENCE
          </h2>

        </div>

        {/* VIDEO CONTAINER */}
        <div className="
        relative
        h-[750px]
        overflow-hidden
        rounded-[50px]
        border border-white/10
        bg-black
        ">

          {/* VIDEO */}
          <AnimatePresence mode="wait">

            <motion.video
              key={current}
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              exit={{ opacity:0 }}
              transition={{ duration:1 }}
              className="
              absolute inset-0
              w-full h-full
              object-cover
              "
            >

              <source
                src={videos[current].src}
                type="video/mp4"
              />

            </motion.video>

          </AnimatePresence>

          {/* DARK OVERLAY */}
          <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
          "></div>

          {/* CONTENT */}
          <div className="
          absolute bottom-10 left-10
          z-20
          ">

            <motion.p
              key={videos[current].subtitle}
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6 }}
              className="
              uppercase
              tracking-[0.4em]
              text-red-500
              text-sm
              mb-4
              "
            >
              {videos[current].subtitle}
            </motion.p>

            <motion.h3
              key={videos[current].title}
              initial={{ opacity:0, y:30 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              className="
              big-title
              text-[3rem]
              md:text-[6rem]
              leading-[0.9]
              uppercase
              "
            >
              {videos[current].title}
            </motion.h3>

          </div>

          {/* CONTROLS */}
          <div className="
          absolute bottom-10 right-10
          z-20
          flex gap-4
          ">

            <button
              onClick={prevVideo}
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
              onClick={nextVideo}
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

        </div>

      </div>

    </section>
  )
}

export default VideoShowcase