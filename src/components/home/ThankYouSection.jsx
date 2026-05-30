// import { motion } from 'framer-motion'
// import ThankYouBg from '../../assets/images/thankyou-bg.png'

// const text = 'THANK YOU'

// function ThankYouSection() {

//   return (

//     <section className="
//     relative
//     h-[70vh]
//     overflow-hidden
//     flex items-center justify-center
//     ">

//       {/* BACKGROUND */}
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
//         style={{
//           backgroundImage:`url(${ThankYouBg})`,
//           backgroundPosition:'center 22%',
//           backgroundSize:'cover',
//           backgroundRepeat:'no-repeat',
//           filter:'brightness(0.75)',
//         }}
//       ></motion.div>

//       {/* SOFT DARK OVERLAY */}
//       <div className="
//       absolute inset-0
//       bg-black/35
//       "></div>

//       {/* CINEMATIC SHADOW */}
//       <div className="
//       absolute inset-0
//       bg-gradient-to-t
//       from-black
//       via-transparent
//       to-black/20
//       "></div>

//       {/* CONTENT */}
//       <div className="
//       relative z-10
//       text-center
//       px-6
//       ">

//         {/* SMALL TEXT */}
//         <motion.p
//           initial={{
//             opacity:0,
//             y:30,
//           }}
//           whileInView={{
//             opacity:1,
//             y:0,
//           }}
//           transition={{
//             duration:1,
//           }}
//           viewport={{ once:true }}
//           className="
//           uppercase
//           tracking-[0.7em]
//           text-red-500
//           text-sm
//           mb-10
//           "
//         >

//           Cinematic Ending

//         </motion.p>

//         {/* LETTER ANIMATION */}
//         <div className="
//         flex
//         justify-center
//         flex-wrap
//         gap-2
//         ">

//           {text.split('').map((char,index)=>(

//             <motion.span
//               key={index}
//               initial={{
//                 opacity:0,
//                 y:120,
//                 rotate:10,
//                 filter:'blur(20px)',
//               }}
//               whileInView={{
//                 opacity:1,
//                 y:0,
//                 rotate:0,
//                 filter:'blur(0px)',
//               }}
//               transition={{
//                 delay:index * 0.08,
//                 duration:0.8,
//                 ease:'easeOut',
//               }}
//               viewport={{ once:true }}
//               className="
//               big-title
//               text-[4rem]
//               md:text-[10rem]
//               leading-none
//               inline-block
//               text-white
//               drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]
//               "
//             >

//               {char === ' ' ? '\u00A0' : char}

//             </motion.span>

//           ))}

//         </div>

//         {/* DESCRIPTION */}
//         <motion.p
//           initial={{
//             opacity:0,
//             y:40,
//           }}
//           whileInView={{
//             opacity:1,
//             y:0,
//           }}
//           transition={{
//             delay:1.2,
//             duration:1,
//           }}
//           viewport={{ once:true }}
//           className="
//           text-white/75
//           text-lg
//           max-w-[850px]
//           mx-auto
//           mt-12
//           leading-relaxed
//           "
//         >

//           Thank you for exploring my world of
//           cinematic motion design,
//           anime-inspired visuals,
//           CGI storytelling,
//           and immersive digital experiences.

//         </motion.p>

//         {/* GLOW LINE */}
//         <motion.div
//           initial={{
//             width:0,
//             opacity:0,
//           }}
//           whileInView={{
//             width:'200px',
//             opacity:1,
//           }}
//           transition={{
//             delay:1.5,
//             duration:1,
//           }}
//           viewport={{ once:true }}
//           className="
//           h-[2px]
//           bg-red-500
//           mx-auto
//           mt-14
//           shadow-[0_0_30px_rgba(255,0,0,0.8)]
//           "
//         ></motion.div>

//       </div>

//     </section>
//   )
// }

// export default ThankYouSection

import { motion } from 'framer-motion'
import ThankYouBg from '../../assets/images/thankyou-bg.png'

const text = 'THANK YOU'

function ThankYouSection() {

  return (

    <section
      className="
      relative

      min-h-[75vh]
      md:min-h-screen

      overflow-hidden

      flex
      items-center
      justify-center

      py-20
      md:py-32
      "
    >

      {/* BACKGROUND */}
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
          backgroundImage:`url(${ThankYouBg})`,
          backgroundPosition:'center 22%',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat',
          filter:'brightness(0.75)',
        }}
      ></motion.div>

      {/* SOFT DARK OVERLAY */}
      <div
        className="
        absolute inset-0
        bg-black/35
        "
      ></div>

      {/* CINEMATIC SHADOW */}
      <div
        className="
        absolute inset-0

        bg-gradient-to-t
        from-black
        via-transparent
        to-black/20
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

        w-[400px]
        h-[400px]

        md:w-[900px]
        md:h-[900px]

        bg-red-600/10

        blur-[180px]

        rounded-full
        "
      ></div>

      {/* CONTENT */}
      <div
        className="
        relative z-10

        text-center

        px-4
        sm:px-6

        max-w-[1400px]

        mx-auto
        "
      >

        {/* SMALL TEXT */}
        <motion.p

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:1,
          }}

          viewport={{ once:true }}

          className="
          uppercase

          tracking-[0.3em]
          md:tracking-[0.7em]

          text-red-500

          text-[10px]
          md:text-sm

          mb-6
          md:mb-10
          "
        >

          Cinematic Ending

        </motion.p>

        {/* LETTER ANIMATION */}
        <div
          className="
          flex
          justify-center
          flex-wrap

          gap-1
          md:gap-2
          "
        >

          {text.split('').map((char,index)=>(

            <motion.span

              key={index}

              initial={{
                opacity:0,
                y:120,
                rotate:10,
                filter:'blur(20px)',
              }}

              whileInView={{
                opacity:1,
                y:0,
                rotate:0,
                filter:'blur(0px)',
              }}

              transition={{
                delay:index * 0.08,
                duration:0.8,
                ease:'easeOut',
              }}

              viewport={{ once:true }}

              className="
              big-title

              text-[2.8rem]
              sm:text-[4rem]
              md:text-[10rem]

              leading-none

              inline-block

              text-white

              drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]
              "
            >

              {char === ' ' ? '\u00A0' : char}

            </motion.span>

          ))}

        </div>

        {/* DESCRIPTION */}
        <motion.p

          initial={{
            opacity:0,
            y:40,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            delay:1.2,
            duration:1,
          }}

          viewport={{ once:true }}

          className="
          text-white/75

          text-base
          md:text-lg

          max-w-full
          md:max-w-[850px]

          mx-auto

          mt-8
          md:mt-12

          leading-[1.9]
          md:leading-relaxed
          "
        >

          Thank you for exploring my world of
          cinematic motion design,
          anime-inspired visuals,
          CGI storytelling,
          and immersive digital experiences.

        </motion.p>

        {/* GLOW LINE */}
        <motion.div

          initial={{
            width:0,
            opacity:0,
          }}

          whileInView={{
            width:'200px',
            opacity:1,
          }}

          transition={{
            delay:1.5,
            duration:1,
          }}

          viewport={{ once:true }}

          className="
          h-[2px]

          bg-red-500

          mx-auto

          mt-10
          md:mt-14

          shadow-[0_0_30px_rgba(255,0,0,0.8)]
          "
        ></motion.div>

      </div>

    </section>
  )
}

export default ThankYouSection