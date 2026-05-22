import { motion } from 'framer-motion'

function PageLoader() {

  return (
    <motion.div
      initial={{ opacity:1 }}
      animate={{ opacity:0 }}
      transition={{ delay:1.5,duration:1 }}
      className="
      fixed inset-0
      bg-black
      flex items-center justify-center
      z-[99999]
      pointer-events-none
      "
    >

      <motion.h1
        initial={{ scale:0.8, opacity:0 }}
        animate={{ scale:1, opacity:1 }}
        transition={{ duration:1 }}
        className="
        big-title
        text-[5rem]
        md:text-[10rem]
        gradient-text
        "
      >
        SHUBH
      </motion.h1>

    </motion.div>
  )
}

export default PageLoader