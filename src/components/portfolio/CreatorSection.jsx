import { motion } from "framer-motion";

import creatorBg from "../../assets/portfolio/creator-bg.png";
import shubhCard from "../../assets/portfolio/shubh-card.png";
import signature from "../../assets/portfolio/signature.png";

function CreatorSection() {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      bg-black
      "
    >
      {/* BACKGROUND */}
      <motion.div
        initial={{
          scale: 1.05,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="
absolute
inset-0
opacity-25
"
        
        style={{
          backgroundImage: `url(${creatorBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        className="
        absolute
        inset-0
        bg-black/70
        "
      ></div>

      {/* CONTENT */}
      <div
        className="
        relative
        z-10
        w-full
        max-w-[1700px]
        mx-auto
        px-6
        lg:px-20
        grid
        lg:grid-cols-[0.85fr_1.15fr]
        gap-2
        items-center
        "
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className="
relative
flex
justify-start
items-start
h-screen
pt-0
-lg:ml-24
"
        >
          {/* CARD IMAGE */}
          <motion.img
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={shubhCard}
            alt="Shubh Asawa"
            className="
            relative
            z-10
            w-full
            max-w-[520px]
-lg:-mt-32
            object-contain
            drop-shadow-[0_0_25px_rgba(255,0,0,0.28)]
            "
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className="
          -ml-10
          "
        >
          {/* SMALL TITLE */}
          <p
            className="
            uppercase
            tracking-[0.8em]
            text-red-500
            text-base
            mb-8
            "
          >
            The Creator
          </p>

          {/* BIG TITLE */}
          <h2
            className="
            big-title
            text-white
            text-[5rem]
            md:text-[7rem]
            xl:text-[8rem]
            leading-[0.88]
            uppercase
            "
          >
            SHUBH
            <br />

            <span className="text-red-500">
              ASAWA
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
            mt-10
            text-white/80
            text-xl
            leading-[1.9]
            max-w-[850px]
            "
          >
            Motion Designer & 3D Artist creating
            cinematic anime visuals, CGI ads,
            high-impact edits, immersive storytelling,
            and futuristic samurai-inspired digital
            experiences that blend emotion, motion,
            and visual intensity.
          </p>

          {/* SKILLS */}
          <div
            className="
            mt-14
            grid
            grid-cols-2
            gap-y-8
            "
          >
            {[
              "Motion Design",
              "Video Editing",
              "3D Animation",
              "CGI Ads",
            ].map((item, index) => (
              <div
                key={index}
                className="
                flex
                items-center
                gap-5
                "
              >
                <div
                  className="
                  w-4
                  h-4
                  bg-red-500
                  rotate-45
                  "
                ></div>

                <span
                  className="
                  text-white
                  uppercase
                  tracking-[0.25em]
                  text-xl
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* SIGNATURE */}
          <motion.img
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            viewport={{ once: true }}
            src={signature}
            alt="signature"
            className="
mt-2
-mx-28
w-[820px]
object-contain
"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default CreatorSection;