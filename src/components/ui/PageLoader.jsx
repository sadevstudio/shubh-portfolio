// import { motion } from 'framer-motion'

// function PageLoader() {

//   return (
//     <motion.div
//       initial={{ opacity:1 }}
//       animate={{ opacity:0 }}
//       transition={{ delay:1.5,duration:1 }}
//       className="
//       fixed inset-0
//       bg-black
//       flex items-center justify-center
//       z-[99999]
//       pointer-events-none
//       "
//     >

//       <motion.h1
//         initial={{ scale:0.8, opacity:0 }}
//         animate={{ scale:1, opacity:1 }}
//         transition={{ duration:1 }}
//         className="
//         big-title
//         text-[5rem]
//         md:text-[10rem]
//         gradient-text
//         "
//       >
//         SHUBH
//       </motion.h1>

//     </motion.div>
//   )
// }

// export default PageLoader

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import loaderImage from "../../assets/images/loader-character.png";

function PageLoader() {

  const [showName, setShowName] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowName(true);
    }, 1200);

    return () => clearTimeout(timer);

  }, []);

  return (

    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="
      fixed inset-0
      bg-black
      flex items-center justify-center
      z-[99999]
      overflow-hidden
      pointer-events-none
      "
    >

      {/* RED GLOW */}
      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        rounded-full
        bg-red-600/10
        blur-[140px]
        "
      />

      {/* <AnimatePresence mode="wait">

        {
          !showName ? (

            <motion.div
              key="image"
              initial={{
  opacity: 0,
  rotateY: -90
}}
animate={{
  opacity: 1,
  rotateY: 0
}}
exit={{
  opacity: 0,
  rotateY: 90
}}
transition={{
  duration: 0.45,
  ease: "linear"
}}
              className="perspective-[2000px]"
            >

              <img
                src={loaderImage}
                alt="loader"
                className="
w-[320px]
md:w-[480px]
object-contain
drop-shadow-[0_0_60px_rgba(255,0,0,0.45)]
"
              />

            </motion.div>

          ) : (

            <motion.h1
              key="name"
              initial={{
  opacity: 0,
  rotateX: -90
}}
animate={{
  opacity: 1,
  rotateX: 0
}}
              exit={{
                opacity: 0
              }}
              transition={{
  duration: 0.45,
  ease: "linear"
}}
              className="
              big-title
              text-[5rem]
              md:text-[10rem]
              gradient-text
              "
            >
              SHUBH
            </motion.h1>

          )
        }

      </AnimatePresence> */}

      <motion.div
  initial={{
    opacity: 0,
    rotateY: -90,
    scale: 1.15
  }}
  animate={{
    opacity: 1,
    rotateY: 0,
    scale: 1
  }}
  transition={{
  duration: 1.5,
  ease: [0.22, 1, 0.36, 1]
}}
  className="perspective-[2000px]"
>

  <img
    src={loaderImage}
    alt="loader"
    className="
    w-[320px]
    md:w-[480px]
    object-contain
    drop-shadow-[0_0_60px_rgba(255,0,0,0.45)]
    "
  />

</motion.div>

    </motion.div>

  );
}

export default PageLoader;