// import Navbar from '../components/layout/Navbar'
// import Footer from '../components/layout/Footer'

// function Contact() {

//   return (
//     <div className="min-h-screen bg-black text-white">

//       <Navbar />

//       <section className="pt-40 pb-20">

//         <div className="container max-w-5xl">

//           <p className="
//           uppercase
//           tracking-[0.4em]
//           text-red-500
//           mb-6
//           ">
//             Contact
//           </p>

//           <h1 className="
//           big-title
//           text-[5rem]
//           md:text-[8rem]
//           leading-none
//           mb-20
//           ">
//             LET’S
//             <br />
//             WORK
//             <span className="gradient-text"> TOGETHER</span>
//           </h1>

//           <div className="
//           glass
//           rounded-[30px]
//           p-10
//           ">

//             <form className="space-y-8">

//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="
//                 w-full
//                 bg-transparent
//                 border border-white/10
//                 px-6 py-5
//                 outline-none
//                 focus:border-red-500
//                 transition
//                 "
//               />

//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="
//                 w-full
//                 bg-transparent
//                 border border-white/10
//                 px-6 py-5
//                 outline-none
//                 focus:border-red-500
//                 transition
//                 "
//               />

//               <textarea
//                 rows="6"
//                 placeholder="Your Message"
//                 className="
//                 w-full
//                 bg-transparent
//                 border border-white/10
//                 px-6 py-5
//                 outline-none
//                 focus:border-red-500
//                 transition
//                 "
//               ></textarea>

//               <button
//                 className="
//                 px-10 py-5
//                 bg-red-600
//                 hover:bg-red-700
//                 transition
//                 uppercase
//                 tracking-[0.25em]
//                 red-glow
//                 "
//               >
//                 Send Message
//               </button>

//             </form>

//           </div>

//         </div>

//       </section>

//       <Footer />

//     </div>
//   )
// }

// export default Contact

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaBehance,
} from 'react-icons/fa'

import { motion } from 'framer-motion'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

// CONTACT IMAGES
import heroImg from '../assets/contact/contact-hero.png'
import touchImg from '../assets/contact/contact-touch.png'
import mapImg from '../assets/contact/contact-map.png'
import footerImg from '../assets/contact/contact-footer.png'
import signatureImg from '../assets/contact/signature.png'



function Contact() {

  return (
    <div className="bg-black text-white overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}

<section className="relative min-h-screen overflow-hidden border-b border-white/10">

  {/* BACKGROUND IMAGE */}

  <motion.img
    initial={{ scale: 1.1 }}
    animate={{ scale: 1.05 }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: 'reverse'
    }}
    src={heroImg}
    alt="hero"
    className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-center
    "
  />

  {/* DARK OVERLAY */}

  <div
    className="
    absolute
    inset-0
    "
    style={{
      background: `
        linear-gradient(
          to right,
          rgba(0,0,0,0.95) 0%,
          rgba(0,0,0,0.82) 25%,
          rgba(0,0,0,0.62) 50%,
          rgba(0,0,0,0.38) 75%,
          rgba(0,0,0,0.55) 100%
        )
      `
    }}
  ></div>

  {/* RED GLOW */}

  <div
    className="
    absolute
    inset-0
    mix-blend-screen
    opacity-40
    "
    style={{
      background: `
        radial-gradient(
          circle at top right,
          rgba(255,0,0,0.22),
          transparent 45%
        )
      `
    }}
  ></div>

  {/* CONTENT */}

  <div className="
relative
z-10
min-h-screen
flex
items-center
justify-start
px-8
md:px-20
pt-32
md:pt-40
pb-10
">

    <div className="
max-w-2xl
ml-5
md:ml-12
">

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
        uppercase
        tracking-[0.5em]
        text-red-500
        text-sm
        mb-5
        "
      >
        Get In Touch
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
text-[4.5rem]
md:text-[6rem]
leading-[0.88]
uppercase
font-black
mb-10
tracking-tight
"
      >

        <span className="text-white">
          CONTACT
        </span>

        <span className="text-red-600 ml-4">
          ME
        </span>

      </motion.h1>

      <div className="
      w-44
      h-[2px]
      bg-red-600
      mb-10
      relative
      ">

        <div className="
        absolute
        left-1/2
        -translate-x-1/2
        -top-[5px]
        w-3
        h-3
        rotate-45
        bg-red-600
        "></div>

      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="
        text-white/75
        text-xl
        leading-[2]
        mb-8
        max-w-2xl
        "
      >
        I’m always open to discussing
        new projects, creative ideas,
        anime-inspired visuals and
        cinematic collaborations.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="
        text-white/55
        leading-[2]
        text-lg
        mb-16
        max-w-2xl
        "
      >
        Let’s create visuals that feel
        powerful, emotional and unforgettable.
      </motion.p>

      <motion.img
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        src={signatureImg}
        alt="signature"
        className="
        w-[700px]
        max-w-full
        opacity-55
        drop-shadow-[0_0_40px_rgba(255,0,0,0.4)]
        "
      />

    </div>

  </div>

</section>
      {/* CONTACT SECTION */}

      <section className="
      grid
      lg:grid-cols-2
      border-b
      border-white/10
      ">

        {/* FORM */}

        <div className="
        p-8
        md:p-16
        bg-black/90
        ">

          <h2 className="
          uppercase
          text-3xl
          text-red-500
          tracking-[0.2em]
          mb-14
          ">
            Send A Message
          </h2>

          <form className="space-y-8">

            <div className="relative">

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                bg-transparent
                border
                border-white/20
                px-6
                py-5
                outline-none
                focus:border-red-500
                transition
                "
              />

            </div>

            <div className="relative">

              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full
                bg-transparent
                border
                border-white/20
                px-6
                py-5
                outline-none
                focus:border-red-500
                transition
                "
              />

            </div>

            <div>

              <input
                type="text"
                placeholder="Subject"
                className="
                w-full
                bg-transparent
                border
                border-white/20
                px-6
                py-5
                outline-none
                focus:border-red-500
                transition
                "
              />

            </div>

            <div>

              <textarea
                rows="7"
                placeholder="Your Message"
                className="
                w-full
                bg-transparent
                border
                border-white/20
                px-6
                py-5
                outline-none
                resize-none
                focus:border-red-500
                transition
                "
              ></textarea>

            </div>

            <button
              className="
              group
              flex
              items-center
              gap-4
              px-10
              py-5
              border
              border-red-600
              hover:bg-red-600
              transition-all
              duration-500
              uppercase
              tracking-[0.3em]
              "
            >

              <FaPaperPlane />

              Send Message

            </button>

          </form>

        </div>

        {/* INFO */}

        <div className="
        relative
        overflow-hidden
        p-8
        md:p-16
        ">

          <img
            src={touchImg}
            alt=""
            className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-90
            "
          />

          <div className="
          absolute
          inset-0
          bg-black/50
          "></div>

          <div className="relative z-10">

            <h2 className="
            uppercase
            text-3xl
            text-red-500
            tracking-[0.2em]
            mb-14
            ">
              Get In Touch
            </h2>

            <div className="space-y-10">

              <div className="flex gap-6">

                <div className="
                w-16
                h-16
                border
                border-red-600
                flex
                items-center
                justify-center
                text-red-500
                text-xl
                ">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h3 className="
                  uppercase
                  tracking-[0.2em]
                  mb-2
                  ">
                    Location
                  </h3>

                  <p className="text-white/70">
                    New Delhi, India
                  </p>

                </div>

              </div>

              <div className="flex gap-6">

                <div className="
                w-16
h-16
rounded-full
bg-red-600/10
backdrop-blur-md
border
border-red-500/30
flex
items-center
justify-center
text-red-500
text-2xl
shadow-[0_0_30px_rgba(255,0,0,0.25)]
                ">
                  <FaPhoneAlt />
                </div>

                <div>

                  <h3 className="
                  uppercase
                  tracking-[0.2em]
                  mb-2
                  ">
                    Phone
                  </h3>

                  <p className="text-white/70">
                    +91 70172 84828
                  </p>

                </div>

              </div>

              <div className="flex gap-6">

                <div className="
                w-16
                h-16
                border
                border-red-600
                flex
                items-center
                justify-center
                text-red-500
                text-xl
                ">
                  <FaEnvelope />
                </div>

                <div>

                  <h3 className="
                  uppercase
                  tracking-[0.2em]
                  mb-2
                  ">
                    Email
                  </h3>

                  <p className="text-white/70 break-all">
                    shubhdesigns3d@gmail.com
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* LOCATION */}

      <section className="
      grid
      lg:grid-cols-2
      border-b
      border-white/10
      ">

        <div className="relative min-h-[450px] overflow-hidden">

          <img
            src={mapImg}
            alt=""
            className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            "
          />

          <div className="
          absolute
          inset-0
          bg-black/40
          "></div>

        </div>

        <div className="
        relative
        min-h-[450px]
        overflow-hidden
        p-8
        md:p-20
        flex
        items-center
        ">

          <img
            src={footerImg}
            alt=""
            className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-40
            "
          />

          <div className="
          absolute
          inset-0
          bg-black/80
          "></div>

          <div className="relative z-10 max-w-xl">

            <p className="
            uppercase
            text-red-500
            tracking-[0.3em]
            text-3xl
            mb-8
            ">
              Based In New Delhi, India
            </p>

            <div className="
            w-24
            h-[2px]
            bg-red-600
            mb-8
            "></div>

            <p className="
            text-white/70
            leading-[2]
            text-lg
            mb-8
            ">
              Open to freelance work,
              creative collaborations and
              cinematic visual projects worldwide.
            </p>

            <p className="
            text-white/50
            leading-[2]
            ">
              Let’s create something that
              feels powerful, emotional
              and unforgettable.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER CTA */}

      <section className="
      grid
      lg:grid-cols-2
      border-b
      border-white/10
      ">

        <div className="
        relative
        overflow-hidden
        p-8
        md:p-20
        ">

          <img
            src={heroImg}
            alt=""
            className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-90
            "
          />

          <div className="
          absolute
          inset-0
          bg-black/65
          "></div>

          <div className="relative z-10">

            <h2 className="
            text-4xl
            uppercase
            mb-8
            text-red-500
            tracking-[0.2em]
            ">
              Let’s Create Something Epic.
            </h2>

            <p className="
            text-white/70
            leading-[2]
            mb-10
            ">
              Have a project in mind
              or just want to say hello?
              I’d love to hear from you.
            </p>

            <a
              href="/resume/shubh-asawa-resume.pdf"
              download
              className="
              inline-flex
              items-center
              gap-4
              px-10
              py-5
              border
              border-red-600
              hover:bg-red-600
              transition-all
              duration-500
              uppercase
              tracking-[0.3em]
              "
            >

              <FaPaperPlane />

              Download Resume

            </a>

          </div>

        </div>

        {/* SOCIALS */}

        <div className="
        relative
        overflow-hidden
        p-8
        md:p-20
        ">

          <img
            src={touchImg}
            alt=""
            className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-90
            "
          />

          <div className="
          absolute
          inset-0
          bg-black/55
          "></div>

          <div className="relative z-10">

            <h2 className="
            text-4xl
            uppercase
            mb-12
            text-red-500
            tracking-[0.2em]
            ">
              Follow Me
            </h2>

            <div className="flex flex-wrap gap-10">

  <a
    href="https://www.behance.net/shubhasawa1"
    target="_blank"
    rel="noreferrer"
    className="
    text-5xl
    text-white/50
    hover:text-red-500
    transition-all
    duration-500
    hover:scale-125
    "
  >
    <FaBehance />
  </a>

  <a
    href="https://www.instagram.com/shubhdesign3d"
    target="_blank"
    rel="noreferrer"
    className="
    text-5xl
    text-white/50
    hover:text-red-500
    transition-all
    duration-500
    hover:scale-125
    "
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.linkedin.com/in/shubhdesign3d/"
    target="_blank"
    rel="noreferrer"
    className="
    text-5xl
    text-white/50
    hover:text-red-500
    transition-all
    duration-500
    hover:scale-125
    "
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://wa.me/917017288428"
    target="_blank"
    rel="noreferrer"
    className="
    text-5xl
    text-white/50
    hover:text-red-500
    transition-all
    duration-500
    hover:scale-125
    "
  >
    <FaWhatsapp />
  </a>

</div>

            <p className="
            mt-20
            uppercase
            tracking-[0.4em]
            text-white/40
            text-sm
            ">
              Motion Beyond Reality.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Contact