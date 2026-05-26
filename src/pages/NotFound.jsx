import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import NotFoundBg from '../assets/images/notfound-bg.png'

function NotFound() {

  return (

    <div className="bg-black overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN SECTION */}
      <section className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-end
      justify-center
      ">

        {/* BACKGROUND IMAGE */}
        <motion.div

          initial={{
            scale:1.06,
          }}

          animate={{
            scale:1,
            y:[-8,8,-8],
          }}

          transition={{
            duration:12,
            repeat:Infinity,
            ease:'easeInOut',
          }}

          className="
          absolute inset-0
          "

          style={{
            backgroundImage:`url(${NotFoundBg})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            filter:'brightness(0.9)',
          }}

        />

        {/* DARK OVERLAY */}
        <div className="
        absolute inset-0
        bg-black/20
        "></div>

        

        {/* BUTTON */}
        <motion.div

          initial={{
            opacity:0,
            y:80,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            delay:0.5,
            duration:1,
          }}

          className="
          relative z-10
          mb-20
          "

        >

          <Link to="/">

            <button className="
            relative
            overflow-hidden

            px-12 py-5

            rounded-none
            

            border border-red-500/30

            bg-red-600/90

            hover:bg-red-500

            transition-all duration-500

            uppercase
            tracking-[0.35em]

            text-sm
            text-white

            shadow-[0_0_40px_rgba(255,0,0,0.4)]

            hover:scale-105
            ">

              ← BACK TO HOME

            </button>

          </Link>

        </motion.div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default NotFound