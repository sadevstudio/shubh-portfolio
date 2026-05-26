import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CreatorSection from "../components/portfolio/CreatorSection";

import portfolioBg from "../assets/portfolio/portfolio-hero-bg.png";
import shubhImage from "../assets/portfolio/shubh-main.png";

function Portfolio() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        flex
        items-center
        justify-center
        "
      >
        {/* BACKGROUND */}
        <motion.div
          initial={{
            scale: 1.15,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="
          absolute
          inset-0
          "
          style={{
            backgroundImage: `url(${portfolioBg})`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* DARK OVERLAY */}
        <div
          className="
          absolute
          inset-0
          bg-black/25
          "
        ></div>

        {/* IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 120,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1.2,
          }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: "easeOut",
          }}
          className="
          relative
          z-10
          flex
          items-end
          justify-center
          h-screen
          "
        >
          {/* RED GLOW */}
        <div
          className="
          absolute
          bottom-0
          w-[500px]
          h-[500px]
          bg-red-500/20
          blur-[120px]
          rounded-full
          "
        ></div>
          

          {/* PERSON IMAGE */}
          <motion.img
          animate={{
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
            src={shubhImage}
            alt="Shubh Asawa"
            className="
            relative
            z-10
            w-[90%]
            md:w-[55%]
            lg:w-[50%]
            max-w-[920px]
            object-contain
            
            "
          />
        </motion.div>

        {/* BOTTOM FADE */}
        <div
          className="
          absolute
          bottom-0
          left-0
          w-full
          h-[180px]
          bg-gradient-to-t
          from-black
          to-transparent
          "
        ></div>
      </section>

      {/* SECOND SECTION*/}
      <CreatorSection /> 

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Portfolio;