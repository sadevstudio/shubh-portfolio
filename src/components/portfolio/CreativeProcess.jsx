// import { motion } from "framer-motion";

// import creativeBg from "../../assets/portfolio/creative-process-bg.png";

// function CreativeProcess() {
//   return (
//     <section
//       className="
//       relative
//       min-h-screen
//       overflow-hidden
//       bg-black
//       flex
//       items-center
//       "
//     >
//       {/* RIGHT SIDE BACKGROUND IMAGE */}
//       <motion.div
//         initial={{
//           scale: 1.08,
//         }}
//         animate={{
//           scale: 1.03,
//           y: [-15, 15, -15],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//         absolute
//         top-0
//         right-0
//         w-[65%]
//         h-full
//         "
//         style={{
//           backgroundImage: `url(${creativeBg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           filter: "brightness(0.75)",
//         }}
//       />

//       {/* LEFT BLACK BLEND */}
//       <div
//         className="
//         absolute
//         inset-0
//         bg-gradient-to-r
//         from-black
//         via-black
//         via-black/90
//         via-black/60
//         to-transparent
//         "
//       />

//       {/* TOP & BOTTOM ATMOSPHERE */}
//       <div
//         className="
//         absolute
//         inset-0
//         bg-gradient-to-b
//         from-black
//         via-transparent
//         to-black
//         "
//       />

//       {/* RED ATMOSPHERE */}
//       <div
//         className="
//         absolute
//         inset-0
//         bg-red-950/10
//         "
//       />

//       {/* CONTENT */}
//       <div
//         className="
//         relative
//         z-10
//         w-full
//         pl-16
//         md:pl-24
//         lg:pl-32
//         "
//       >
//         <div className="max-w-[620px]">
//           {/* SMALL TITLE */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -40,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//             viewport={{
//               once: true,
//             }}
//             className="
//             flex
//             items-center
//             gap-5
//             mb-8
//             "
//           >
//             <p
//               className="
//               uppercase
//               tracking-[0.5em]
//               text-red-500
//               text-sm
//               "
//             >
//               Behind The Vision
//             </p>

//             <div
//               className="
//               w-16
//               h-[1px]
//               bg-red-500
//               "
//             />
//           </motion.div>

//           {/* BIG TITLE */}
//           <motion.h2
//             initial={{
//               opacity: 0,
//               y: 60,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             className="
//             leading-[0.85]
//             uppercase
//             "
//           >
//             <span
//               className="
//               block
//               text-[5rem]
//               md:text-[7rem]
//               font-black
//               text-white
//               "
//             >
//               CREATIVE
//             </span>

//             <span
//               className="
//               block
//               text-[5rem]
//               md:text-[7rem]
//               font-black
//               text-red-600
//               "
//             >
//               PROCESS
//             </span>
//           </motion.h2>

//           {/* RED GLOW LINE */}
//           <motion.div
//             initial={{
//               width: 0,
//               opacity: 0,
//             }}
//             whileInView={{
//               width: "280px",
//               opacity: 1,
//             }}
//             transition={{
//               delay: 0.4,
//               duration: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             className="
//             h-[2px]
//             bg-red-600
//             mt-10
//             shadow-[0_0_25px_rgba(255,0,0,0.6)]
//             "
//           />

//           {/* DESCRIPTION */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               delay: 0.5,
//               duration: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             className="
//             mt-12
//             space-y-8
//             "
//           >
//             <p
//               className="
//               text-white/70
//               text-[1.35rem]
//               leading-relaxed
//               "
//             >
//               Every project is a journey —
//               from a spark of an idea
//               to a fully realized visual story.
//             </p>

//             <p
//               className="
//               text-white/55
//               text-lg
//               leading-relaxed
//               "
//             >
//               Here’s a look at how I bring visions to life
//               through creativity, passion,
//               cinematic atmosphere,
//               anime-inspired storytelling,
//               and immersive digital experiences.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* TOP FADE */}
//       <div
//         className="
//         absolute
//         top-0
//         left-0
//         w-full
//         h-[180px]
//         bg-gradient-to-b
//         from-black
//         to-transparent
//         "
//       />

//       {/* BOTTOM FADE */}
//       <div
//         className="
//         absolute
//         bottom-0
//         left-0
//         w-full
//         h-[220px]
//         bg-gradient-to-t
//         from-black
//         to-transparent
//         "
//       />
//     </section>
//   );
// }

// export default CreativeProcess;

import { motion } from "framer-motion";

import {
  Lightbulb,
  Clapperboard,
  Sparkles,
  Film,
} from "lucide-react";

import creativeBg from "../../assets/portfolio/creative-process-bg.png";

function CreativeProcess() {
  return (
    <section
      className="
      relative
      min-h-[88vh]
      overflow-hidden
      bg-black
      flex
      items-center
      py-24
      "
    >
      {/* RIGHT SIDE BACKGROUND */}
      <motion.div
        initial={{
          scale: 1.08,
        }}
        animate={{
          scale: 1.03,
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-0
        right-0
        w-[68%]
        h-full
        "
        style={{
          backgroundImage: `url(${creativeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.7)",
        }}
      />

      {/* CINEMATIC BLEND */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black
        via-black
        via-black/95
        via-black/70
        to-transparent
        "
      />

      {/* ATMOSPHERE */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-black
        via-transparent
        to-black
        "
      />

      {/* RED GLOW */}
      <div
        className="
        absolute
        left-[-200px]
        top-[20%]
        w-[500px]
        h-[500px]
        bg-red-600/20
        blur-[140px]
        rounded-full
        "
      />

      {/* CONTENT */}
      <div
        className="
        relative
        z-10
        w-full
        px-8
        md:px-16
        lg:px-24
        "
      >
        <div
          className="
          grid
          lg:grid-cols-[620px_1fr]
          gap-20
          items-center
          "
        >
          {/* LEFT CONTENT */}
          <div>
            {/* LABEL */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className="
              flex
              items-center
              gap-5
              mb-8
              "
            >
              <p
                className="
                uppercase
                tracking-[0.45em]
                text-red-500
                text-sm
                "
              >
                Behind The Vision
              </p>

              <div
                className="
                w-20
                h-[1px]
                bg-red-500
                "
              />
            </motion.div>

            {/* TITLE */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 60,
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
              leading-[0.85]
              uppercase
              "
            >
              <span
                className="
                block
                text-[4.5rem]
                md:text-[6.5rem]
                font-black
                text-white
                tracking-tight
                "
              >
                CREATIVE
              </span>

              <span
                className="
                block
                text-[4.5rem]
                md:text-[6.5rem]
                font-black
                text-red-600
                tracking-tight
                drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]
                "
              >
                PROCESS
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
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
                delay: 0.2,
                duration: 1,
              }}
              viewport={{
                once: true,
              }}
              className="
              mt-10
              text-white/70
              text-[1.2rem]
              leading-relaxed
              max-w-[580px]
              "
            >
              Every project begins with an emotion,
              evolves through cinematic storytelling,
              and transforms into immersive visual experiences
              inspired by anime aesthetics and atmosphere.
            </motion.p>

            {/* PROCESS CARDS */}
            <div
              className="
              grid
              gap-5
              mt-14
              "
            >
              {[
                {
                  number: "01",
                  title: "Idea & Concept",
                  icon: <Lightbulb size={24} />,
                },
                {
                  number: "02",
                  title: "Storyboarding",
                  icon: <Clapperboard size={24} />,
                },
                {
                  number: "03",
                  title: "Motion & FX",
                  icon: <Sparkles size={24} />,
                },
                {
                  number: "04",
                  title: "Final Render",
                  icon: <Film size={24} />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.8,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    x: 8,
                    borderColor: "rgba(255,0,0,0.5)",
                  }}
                  className="
                  group
                  relative
                  border
                  border-white/10
                  bg-black/30
                  backdrop-blur-md
                  p-6
                  flex
                  items-center
                  gap-6
                  transition-all
                  duration-500
                  "
                >
                  {/* NUMBER */}
                  <div
                    className="
                    text-[2rem]
                    font-black
                    text-red-600
                    min-w-[70px]
                    "
                  >
                    {item.number}
                  </div>

                  {/* ICON */}
                  <div
                    className="
                    text-red-500
                    "
                  >
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                    text-white
                    uppercase
                    tracking-[0.15em]
                    text-lg
                    "
                  >
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE PANEL */}
          <div className="relative hidden lg:block">
            {/* FLOATING QUOTE PANEL */}
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              viewport={{
                once: true,
              }}
              className="
              absolute
              bottom-10
              left-[-40px]
              max-w-[500px]
              border
              border-red-500/20
              bg-black/50
              backdrop-blur-xl
              p-10
              "
            >
              <p
                className="
                uppercase
                tracking-[0.25em]
                text-red-500
                text-sm
                mb-4
                "
              >
                From Idea To Impact
              </p>

              <h3
                className="
                text-white
                text-3xl
                font-bold
                leading-snug
                "
              >
                I don’t just create visuals —
                I build cinematic experiences.
              </h3>
            </motion.div>
          </div>
        </div>
      </div>

      {/* TOP FADE */}
      <div
        className="
        absolute
        top-0
        left-0
        w-full
        h-[180px]
        bg-gradient-to-b
        from-black
        to-transparent
        "
      />

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
  );
}

export default CreativeProcess;