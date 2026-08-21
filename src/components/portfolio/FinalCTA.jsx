// import { motion } from "framer-motion";
// import { Mail, ArrowRight } from "lucide-react";

// import {
//   FaInstagram,
//   FaLinkedin,
//   FaYoutube,
// } from "react-icons/fa";

// import finalCtaBg from "../../assets/portfolio/final-cta-bg.png";

// function FinalCTA() {
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
//       {/* RIGHT SIDE IMAGE */}
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
//         w-[68%]
//         h-full
//         "
//         style={{
//           backgroundImage: `url(${finalCtaBg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center 25%",
//           backgroundRepeat: "no-repeat",
//           filter: "brightness(0.95)",
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
//         via-black/55
//         via-black/50
//         to-transparent
//         "
//       />

//       {/* TOP & BOTTOM FADE */}
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
//         <div className="max-w-[720px]">
//           {/* TOP LABEL */}
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
//               tracking-[0.45em]
//               text-red-500
//               text-sm
//               "
//             >
//               Let’s Create Something
//             </p>

//             <div
//               className="
//               w-20
//               h-[1px]
//               bg-red-500
//               "
//             />
//           </motion.div>

//           {/* TITLE */}
// <motion.h2
//   initial={{
//     opacity: 0,
//     y: 80,
//   }}
//   whileInView={{
//     opacity: 1,
//     y: 0,
//   }}
//   transition={{
//     duration: 1,
//   }}
//   viewport={{
//     once: true,
//   }}
//   className="
//   leading-[0.9]
//   uppercase
//   overflow-hidden
//   "
// >
//   {/* HAVE A */}
//   <motion.span
//     initial={{
//       opacity: 0,
//       x: -120,
//       filter: "blur(15px)",
//     }}
//     whileInView={{
//       opacity: 1,
//       x: 0,
//       filter: "blur(0px)",
//     }}
//     transition={{
//       delay: 0.1,
//       duration: 1,
//       ease: "easeOut",
//     }}
//     viewport={{
//       once: true,
//     }}
//     className="
//     block
//     text-[4.5rem]
//     md:text-[7rem]
//     font-black
//     text-white
//     "
//   >
//     HAVE A
//   </motion.span>

//   {/* PROJECT */}
//   <motion.span
//     initial={{
//       opacity: 0,
//       x: 120,
//       filter: "blur(15px)",
//     }}
//     whileInView={{
//       opacity: 1,
//       x: 0,
//       filter: "blur(0px)",
//     }}
//     transition={{
//       delay: 0.3,
//       duration: 1,
//       ease: "easeOut",
//     }}
//     viewport={{
//       once: true,
//     }}
//     className="
//     block
//     text-[4.5rem]
//     md:text-[7rem]
//     font-black
//     text-red-600
//     "
//   >
//     PROJECT
//   </motion.span>

//   {/* IN MIND */}
//   <motion.span
//     initial={{
//       opacity: 0,
//       y: 120,
//       filter: "blur(15px)",
//     }}
//     whileInView={{
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//     }}
//     transition={{
//       delay: 0.5,
//       duration: 1,
//       ease: "easeOut",
//     }}
//     viewport={{
//       once: true,
//     }}
//     className="
//     block
//     text-[4.5rem]
//     md:text-[7rem]
//     font-black
//     text-white
//     "
//   >
//     IN MIND?
//   </motion.span>
// </motion.h2>

//           {/* DESCRIPTION */}
//           <motion.p
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               delay: 0.3,
//               duration: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             className="
//             mt-10
//             text-white/70
//             text-[1.25rem]
//             leading-relaxed
//             max-w-[620px]
//             "
//           >
//             Whether you have a fully formed idea
//             or just a spark of inspiration,
//             I’d love to hear about your project
//             and bring your vision to life.
//           </motion.p>

//           {/* FEATURES */}
//           <div
//             className="
//             grid
//             grid-cols-1
//             md:grid-cols-3
//             gap-10
//             mt-16
//             "
//           >
//             {/* ITEM */}
//             <div>
//               <Mail
//                 size={34}
//                 className="text-red-500 mb-5"
//               />

//               <h4
//                 className="
//                 text-white
//                 uppercase
//                 tracking-[0.15em]
//                 text-lg
//                 mb-3
//                 "
//               >
//                 Quick Reply
//               </h4>

//               <p className="text-white/55 leading-relaxed">
//                 I respond within
//                 24 hours.
//               </p>
//             </div>

//             {/* ITEM */}
//             <div>
//               <ArrowRight
//                 size={34}
//                 className="text-red-500 mb-5"
//               />

//               <h4
//                 className="
//                 text-white
//                 uppercase
//                 tracking-[0.15em]
//                 text-lg
//                 mb-3
//                 "
//               >
//                 Tailored Solutions
//               </h4>

//               <p className="text-white/55 leading-relaxed">
//                 Customized approach
//                 for every project.
//               </p>
//             </div>

//             {/* ITEM */}
//             <div>
//               <FaLinkedin size={20} 
//                 className="text-red-500 mb-5"
//               />

//               <h4
//                 className="
//                 text-white
//                 uppercase
//                 tracking-[0.15em]
//                 text-lg
//                 mb-3
//                 "
//               >
//                 Dedicated Support
//               </h4>

//               <p className="text-white/55 leading-relaxed">
//                 I’m with you from
//                 start to finish.
//               </p>
//             </div>
//           </div>

//           {/* BUTTONS */}
// <div
//   className="
//   flex
//   flex-wrap
//   items-center
//   gap-6
//   mt-16
//   "
// >
//   {/* CONTACT BUTTON */}
//   <motion.a
//     href="/contact"
//     initial={{
//       opacity: 0,
//       y: 40,
//     }}
//     whileInView={{
//       opacity: 1,
//       y: 0,
//     }}
//     whileHover={{
//       scale: 1.03,
//       y: -3,
//     }}
//     whileTap={{
//       scale: 0.97,
//     }}
//     transition={{
//       duration: 0.35,
//       ease: "easeOut",
//     }}
//     viewport={{
//       once: true,
//     }}
//     className="
//     group
//     relative
//     overflow-hidden
//     h-[72px]
//     min-w-[320px]
//     px-10
//     border
//     border-red-500/40
//     bg-red-600
//     flex
//     items-center
//     justify-center
//     gap-4
//     uppercase
//     tracking-[0.22em]
//     text-white
//     font-semibold
//     "
//   >
//     {/* SHINE */}
//     <div
//       className="
//       absolute
//       top-0
//       left-[-120%]
//       w-[80%]
//       h-full
//       bg-gradient-to-r
//       from-transparent
//       via-white/20
//       to-transparent
//       skew-x-[-25deg]
//       group-hover:left-[140%]
//       transition-all
//       duration-1000
//       "
//     />

//     {/* ICON */}
//     <motion.span
//       animate={{
//         x: [0, 5, 0],
//       }}
//       transition={{
//         duration: 1.8,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//       className="relative z-10 text-xl"
//     >
//       →
//     </motion.span>

//     <span className="relative z-10">
//       LET’S WORK TOGETHER
//     </span>
//   </motion.a>

//   {/* RESUME BUTTON */}
//   <motion.a
//     href="/resume/shubh-asawa-resume.pdf"
//     download
//     target="_blank"
//     rel="noopener noreferrer"
//     initial={{
//       opacity: 0,
//       y: 40,
//     }}
//     whileInView={{
//       opacity: 1,
//       y: 0,
//     }}
//     whileHover={{
//       scale: 1.03,
//       y: -3,
//     }}
//     whileTap={{
//       scale: 0.97,
//     }}
//     transition={{
//       duration: 0.35,
//       ease: "easeOut",
//     }}
//     viewport={{
//       once: true,
//     }}
//     className="
//     group
//     relative
//     overflow-hidden
//     h-[72px]
//     min-w-[320px]
//     px-10
//     border
//     border-white/15
//     bg-black/40
//     backdrop-blur-md
//     flex
//     items-center
//     justify-center
//     gap-4
//     uppercase
//     tracking-[0.22em]
//     text-white
//     font-semibold
//     hover:border-red-500
//     "
//   >
//     {/* SHINE */}
//     <div
//       className="
//       absolute
//       top-0
//       left-[-120%]
//       w-[80%]
//       h-full
//       bg-gradient-to-r
//       from-transparent
//       via-white/15
//       to-transparent
//       skew-x-[-25deg]
//       group-hover:left-[140%]
//       transition-all
//       duration-1000
//       "
//     />

//     {/* ICON */}
//     <motion.span
//       animate={{
//         y: [0, 4, 0],
//       }}
//       transition={{
//         duration: 1.8,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//       className="
//       relative
//       z-10
//       text-red-500
//       text-xl
//       "
//     >
//       ↓
//     </motion.span>

//     <span className="relative z-10">
//       DOWNLOAD RESUME
//     </span>
//   </motion.a>
// </div>

          
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

// export default FinalCTA;

import { motion } from "framer-motion";

import { Mail, ArrowRight } from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import finalCtaBg from "../../assets/portfolio/final-cta-bg.png";

function FinalCTA() {

  return (

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

      {/* RIGHT SIDE IMAGE */}
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

        w-full
        lg:w-[68%]

        h-full
        "

        style={{
          backgroundImage: `url(${finalCtaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.95)",
        }}
      />

      {/* LEFT BLACK BLEND */}
      <div
        className="
        absolute
        inset-0

        bg-gradient-to-r
        from-black
        via-black
        via-black/55
        via-black/50
        to-transparent
        "
      />

      {/* TOP & BOTTOM FADE */}
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

      {/* RED ATMOSPHERE */}
      <div
        className="
        absolute
        inset-0

        bg-red-950/10
        "
      />

      {/* CONTENT */}
      <div
        className="
        relative
        z-10

        w-full

        px-4
        sm:px-6
        md:px-16
        lg:px-32

        py-24
        "
      >

        <div
          className="
          max-w-full
          lg:max-w-[720px]
          "
        >

          {/* TOP LABEL */}
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

            gap-4
            md:gap-5

            mb-6
            md:mb-8
            "
          >

            <p
              className="
              uppercase

              tracking-[0.25em]
              md:tracking-[0.45em]

              text-red-500

              text-[10px]
              md:text-sm
              "
            >
              Let’s Create Something
            </p>

            <div
              className="
              w-12
              md:w-20

              h-[1px]

              bg-red-500
              "
            />

          </motion.div>

          {/* TITLE */}
          <motion.h2

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
            leading-[0.92]
            uppercase
            overflow-hidden
            "
          >

            {/* HAVE A */}
            <motion.span

              initial={{
                opacity: 0,
                x: -120,
                filter: "blur(15px)",
              }}

              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}

              transition={{
                delay: 0.1,
                duration: 1,
                ease: "easeOut",
              }}

              viewport={{
                once: true,
              }}

              className="
              block

              text-[3rem]
              sm:text-[4rem]
              md:text-[7rem]

              font-black

              text-white
              "
            >
              HAVE A
            </motion.span>

            {/* PROJECT */}
            <motion.span

              initial={{
                opacity: 0,
                x: 120,
                filter: "blur(15px)",
              }}

              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}

              transition={{
                delay: 0.3,
                duration: 1,
                ease: "easeOut",
              }}

              viewport={{
                once: true,
              }}

              className="
              block

              text-[3rem]
              sm:text-[4rem]
              md:text-[7rem]

              font-black

              text-red-600
              "
            >
              PROJECT
            </motion.span>

            {/* IN MIND */}
            <motion.span

              initial={{
                opacity: 0,
                y: 120,
                filter: "blur(15px)",
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}

              transition={{
                delay: 0.5,
                duration: 1,
                ease: "easeOut",
              }}

              viewport={{
                once: true,
              }}

              className="
              block

              text-[3rem]
              sm:text-[4rem]
              md:text-[7rem]

              font-black

              text-white
              "
            >
              IN MIND?
            </motion.span>

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
              delay: 0.3,
              duration: 1,
            }}

            viewport={{
              once: true,
            }}

            className="
            mt-6
            md:mt-10

            text-white/70

            text-base
            md:text-[1.25rem]

            leading-[1.8]
            md:leading-relaxed

            max-w-full
            md:max-w-[620px]
            "
          >

            Whether you have a fully formed idea
            or just a spark of inspiration,
            I’d love to hear about your project
            and bring your vision to life.

          </motion.p>

          {/* FEATURES */}
          <div
            className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-8
            md:gap-10

            mt-12
            md:mt-16
            "
          >

            {/* ITEM */}
            <div>

              <Mail
                size={30}
                className="text-red-500 mb-4 md:mb-5"
              />

              <h4
                className="
                text-white

                uppercase

                tracking-[0.1em]
                md:tracking-[0.15em]

                text-base
                md:text-lg

                mb-2
                md:mb-3
                "
              >
                Quick Reply
              </h4>

              <p
                className="
                text-white/55

                leading-relaxed

                text-sm
                md:text-base
                "
              >
                I respond within
                24 hours.
              </p>

            </div>

            {/* ITEM */}
            <div>

              <ArrowRight
                size={30}
                className="text-red-500 mb-4 md:mb-5"
              />

              <h4
                className="
                text-white

                uppercase

                tracking-[0.1em]
                md:tracking-[0.15em]

                text-base
                md:text-lg

                mb-2
                md:mb-3
                "
              >
                Tailored Solutions
              </h4>

              <p
                className="
                text-white/55

                leading-relaxed

                text-sm
                md:text-base
                "
              >
                Customized approach
                for every project.
              </p>

            </div>

            {/* ITEM */}
            <div>

              <FaLinkedin
                size={20}
                className="text-red-500 mb-4 md:mb-5"
              />

              <h4
                className="
                text-white

                uppercase

                tracking-[0.1em]
                md:tracking-[0.15em]

                text-base
                md:text-lg

                mb-2
                md:mb-3
                "
              >
                Dedicated Support
              </h4>

              <p
                className="
                text-white/55

                leading-relaxed

                text-sm
                md:text-base
                "
              >
                I’m with you from
                start to finish.
              </p>

            </div>

          </div>

          {/* BUTTONS */}
          <div
            className="
            flex
            flex-col
            sm:flex-row

            items-stretch
            sm:items-center

            gap-4
            md:gap-6

            mt-12
            md:mt-16
            "
          >

            {/* CONTACT BUTTON */}
            <motion.a

              href="/contact"

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              whileHover={{
                scale: 1.03,
                y: -3,
              }}

              whileTap={{
                scale: 0.97,
              }}

              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}

              viewport={{
                once: true,
              }}

              className="
              group
              relative

              overflow-hidden

              h-[64px]
              md:h-[72px]

              w-full
              sm:min-w-[280px]

              px-6
              md:px-10

              border
              border-red-500/40

              bg-red-600

              flex
              items-center
              justify-center

              gap-3
              md:gap-4

              uppercase

              tracking-[0.15em]
              md:tracking-[0.22em]

              text-white

              text-sm
              md:text-base

              font-semibold
              "
            >

              {/* SHINE */}
              <div
                className="
                absolute

                top-0
                left-[-120%]

                w-[80%]
                h-full

                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent

                skew-x-[-25deg]

                group-hover:left-[140%]

                transition-all
                duration-1000
                "
              />

              {/* ICON */}
              <motion.span

                animate={{
                  x: [0, 5, 0],
                }}

                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}

                className="
                relative
                z-10

                text-lg
                md:text-xl
                "
              >
                →
              </motion.span>

              <span className="relative z-10">
                START A PROJECT
              </span>

            </motion.a>

            {/* RESUME BUTTON */}
            <motion.a

              href="/resume/shubh-asawa-resume.pdf"

              download

              target="_blank"

              rel="noopener noreferrer"

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              whileHover={{
                scale: 1.03,
                y: -3,
              }}

              whileTap={{
                scale: 0.97,
              }}

              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}

              viewport={{
                once: true,
              }}

              className="
              group
              relative

              overflow-hidden

              h-[64px]
              md:h-[72px]

              w-full
              sm:min-w-[280px]

              px-6
              md:px-10

              border
              border-white/15

              bg-black/40

              backdrop-blur-md

              flex
              items-center
              justify-center

              gap-3
              md:gap-4

              uppercase

              tracking-[0.15em]
              md:tracking-[0.22em]

              text-white

              text-sm
              md:text-base

              font-semibold

              hover:border-red-500
              "
            >

              {/* SHINE */}
              <div
                className="
                absolute

                top-0
                left-[-120%]

                w-[80%]
                h-full

                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent

                skew-x-[-25deg]

                group-hover:left-[140%]

                transition-all
                duration-1000
                "
              />

              {/* ICON */}
              <motion.span

                animate={{
                  y: [0, 4, 0],
                }}

                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}

                className="
                relative
                z-10

                text-red-500

                text-lg
                md:text-xl
                "
              >
                ↓
              </motion.span>

              <span className="relative z-10">
                DOWNLOAD RESUME
              </span>

            </motion.a>

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

        h-[120px]
        md:h-[180px]

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

        h-[140px]
        md:h-[220px]

        bg-gradient-to-t
        from-black
        to-transparent
        "
      />

    </section>

  );
}

export default FinalCTA;