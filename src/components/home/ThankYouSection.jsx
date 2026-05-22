import { motion } from 'framer-motion'
import ThankYouBg from '../../assets/images/thankyou-bg.png'

const text = 'THANK YOU'

function ThankYouSection() {

  return (

    <section className="
    relative
    min-h-screen
    overflow-hidden
    flex items-center justify-center
    ">

      {/* BACKGROUND */}
      <motion.div
        initial={{ scale:1.15 }}
        whileInView={{ scale:1 }}
        transition={{ duration:4 }}
        viewport={{ once:true }}
        className="
        absolute inset-0
        "
        style={{
          backgroundImage:`url(${ThankYouBg})`,
          backgroundPosition:'center',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat',
          filter:'brightness(0.75)',
        }}
      ></motion.div>

      {/* SOFT DARK OVERLAY */}
      <div className="
      absolute inset-0
      bg-black/35
      "></div>

      {/* CINEMATIC SHADOW */}
      <div className="
      absolute inset-0
      bg-gradient-to-t
      from-black
      via-transparent
      to-black/20
      "></div>

      {/* CONTENT */}
      <div className="
      relative z-10
      text-center
      px-6
      ">

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
          tracking-[0.7em]
          text-red-500
          text-sm
          mb-10
          "
        >

          Cinematic Ending

        </motion.p>

        {/* LETTER ANIMATION */}
        <div className="
        flex
        justify-center
        flex-wrap
        gap-2
        ">

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
              text-[4rem]
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
          text-lg
          max-w-[850px]
          mx-auto
          mt-12
          leading-relaxed
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
          mt-14
          shadow-[0_0_30px_rgba(255,0,0,0.8)]
          "
        ></motion.div>

      </div>

    </section>
  )
}

export default ThankYouSection