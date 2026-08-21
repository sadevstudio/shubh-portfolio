// import { FaInstagram, FaLinkedin, FaBehance, FaWhatsapp } from 'react-icons/fa'

// function Footer() {

//   return (
//     <footer className="
// border-t border-white/10
// py-10

// ">

//       <div className="
//       container
//       flex flex-col md:flex-row
//       items-center justify-between
//       gap-8
//       ">

//         <div>

//           <h2 className="
//           big-title
//           text-4xl
//           ">
//             SHUBH
//             <span className="text-red-500">.</span>
//           </h2>

//           <p className="
//           text-white/50
//           mt-2
//           text-sm
//           tracking-[0.2em]
//           uppercase
//           ">
//             Motion Designer & 3D Artist
//           </p>

//         </div>

//         <div className="flex items-center gap-6 text-2xl">

//              <a
//             href="https://wa.me/917017288428"
//             target="_blank"
//           >
//             <FaWhatsapp className="hover:text-red-500 transition" />
//           </a>
//           <a
//             href="https://www.instagram.com/shubhdesign3d"
//             target="_blank"
//           >
//             <FaInstagram className="hover:text-red-500 transition" />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/shubhdesign3d/"
//             target="_blank"
//           >
//             <FaLinkedin className="hover:text-red-500 transition" />
//           </a>

//           <a
//             href="https://www.behance.net/shubhasawa1"
//             target="_blank"
//           >
//             <FaBehance className="hover:text-red-500 transition" />
//           </a>

//         </div>

//       </div>

//     </footer>
//   )
// }

// export default Footer

// import { FaInstagram, FaLinkedin, FaBehance, FaWhatsapp } from 'react-icons/fa'

// import footerBg from "../../assets/images/footer-bg.png";

// function Footer() {

//   return (

//     <footer
//       className="
//       relative
//       overflow-hidden
//       border-t border-white/10
//       py-12
//       "
//     >

//       {/* BACKGROUND IMAGE */}
//       <img
//         src={footerBg}
//         alt=""
//         className="
// absolute
// inset-0
// w-full
// h-full
// object-cover
// object-[center_60%]
// opacity-50
// scale-45

// transition-transform duration-[4000ms]
// "
//       />

//       {/* DARK OVERLAY */}
//       <div
//         className="
//         absolute
//         inset-0
//         bg-black/35
//         "
//       ></div>

//       {/* RED GLOW */}
//       <div
//         className="
//         absolute
//         bottom-[-100px]
//         left-1/2
//         -translate-x-1/2
//         w-[600px]
//         h-[300px]
//         bg-red-600/10
//         blur-[120px]
//         rounded-full
//         "
//       ></div>

//       {/* CONTENT */}
//       <div
//         className="
//         relative
//         z-10
//         container
//         flex flex-col md:flex-row
//         items-center justify-between
//         gap-8
//         "
//       >

//         {/* LEFT */}
//         <div>

//           <h2
//             className="
//             big-title
//             text-4xl
//             "
//           >
//             SHUBH
//             <span className="text-red-500">.</span>
//           </h2>

//           <p
//             className="
//             text-white/50
//             mt-2
//             text-sm
//             tracking-[0.2em]
//             uppercase
//             "
//           >
//             Motion Designer & 3D Artist
//           </p>

//         </div>

//         {/* SOCIALS */}
//         <div
//           className="
//           flex
//           items-center
//           gap-6
//           text-2xl
//           "
//         >

//           <a
//             href="https://wa.me/917017288428"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaWhatsapp className="hover:text-red-500 hover:scale-110 transition duration-300" />
//           </a>

//           <a
//             href="https://www.instagram.com/shubhdesign3d"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaInstagram className="hover:text-red-500 hover:scale-110 transition duration-300" />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/shubhdesign3d/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaLinkedin className="hover:text-red-500 hover:scale-110 transition duration-300" />
//           </a>

//           <a
//             href="https://www.behance.net/shubhasawa1"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaBehance className="hover:text-red-500 hover:scale-110 transition duration-300" />
//           </a>

//         </div>

//       </div>

//     </footer>
//   )
// }

// export default Footer


import {
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaWhatsapp,
  FaMusic
} from 'react-icons/fa'

import footerBg from "../../assets/images/footer-bg.png";

function Footer() {

  return (

    <footer
      className="
      relative
      overflow-hidden

      border-t
      border-white/10

      py-10
      sm:py-12
      md:py-14
      lg:py-16
      "
    >

      {/* BACKGROUND IMAGE */}
      <img
        src={footerBg}
        alt=""
        className="
        absolute
        inset-0

        w-full
        h-full

        object-cover

        object-[center_68%]

        opacity-45

        scale-[1.6]
        sm:scale-[1.35]
        md:scale-[1.05]
        lg:scale-[0.9]

        transition-transform
        duration-[4000ms]
        "
      />
      {/* TOP BLACK FADE */}
<div
  className="
  absolute
  top-0
  left-0

  w-full
  h-[120px]
  sm:h-[160px]
  md:h-[220px]

  bg-gradient-to-b
  from-black
  via-black/20
  to-transparent

  z-[1]
  "
></div>
      {/* LEFT BLACK FADE */}
<div
  className="
  absolute
  top-0
  left-0

  w-[180px]
  sm:w-[240px]
  md:w-[320px]

  h-full

  bg-gradient-to-r
  from-black
  via-black/80
  to-transparent

  z-[1]
  "
></div>

{/* RIGHT BLACK FADE */}
<div
  className="
  absolute
  top-0
  right-0

  w-[180px]
  sm:w-[240px]
  md:w-[320px]

  h-full

  bg-gradient-to-l
  from-black
  via-black/80
  to-transparent

  z-[1]
  "
></div>

      {/* DARK OVERLAY */}
      <div
        className="
        absolute
        inset-0

        bg-black/45
        "
      ></div>

      {/* RED GLOW */}
      <div
        className="
        absolute

        bottom-[-120px]
        left-1/2
        -translate-x-1/2

        w-[300px]
        sm:w-[500px]
        md:w-[700px]

        h-[180px]
        sm:h-[260px]
        md:h-[320px]

        bg-red-600/10

        blur-[120px]

        rounded-full
        "
      ></div>

      {/* CONTENT */}
      <div
        className="
        relative
        z-10

        w-[92%]
        sm:w-[90%]

        max-w-[1400px]

        mx-auto

        flex
        flex-col
        md:flex-row

        items-center
        md:items-center

        justify-between

        gap-8
        md:gap-10
        "
      >

        {/* LEFT */}
        <div
          className="
          text-center
          md:text-left
          "
        >

          <h2
            className="
            big-title

            text-[2.5rem]
            sm:text-[3rem]
            md:text-[3.5rem]
            "
          >
            SHUBH
            <span className="text-red-500">.</span>
          </h2>

          <p
            className="
            text-white/50

            mt-2

            text-[11px]
            sm:text-xs
            md:text-sm

            tracking-[0.18em]
            sm:tracking-[0.22em]

            uppercase
            "
          >
            Motion Designer & 3D Artist
          </p>

        </div>

        {/* SOCIALS */}
        <div
          className="
          flex
          items-center
          justify-center

          gap-5
          sm:gap-6
          md:gap-7

          text-[20px]
          sm:text-[22px]
          md:text-[24px]
          "
        >

          <a
            href="https://wa.me/917017288428"
            target="_blank"
            rel="noreferrer"
            className="
            text-white/70

            hover:text-red-500
            hover:scale-110

            transition
            duration-300
            "
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/shubhdesign3d"
            target="_blank"
            rel="noreferrer"
            className="
            text-white/70

            hover:text-red-500
            hover:scale-110

            transition
            duration-300
            "
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/shubhdesign3d/"
            target="_blank"
            rel="noreferrer"
            className="
            text-white/70

            hover:text-red-500
            hover:scale-110

            transition
            duration-300
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.behance.net/shubhasawa1"
            target="_blank"
            rel="noreferrer"
            className="
            text-white/70

            hover:text-red-500
            hover:scale-110

            transition
            duration-300
            "
          >
            <FaBehance />
          </a>
          <a
          href="https://designtime.ai.studio/"
    target="_blank"
    rel="noreferrer"
    className="
    text-white/70

    hover:text-red-500
    hover:scale-110

    transition
    duration-300
    "
  >
    <FaMusic />
  </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer

