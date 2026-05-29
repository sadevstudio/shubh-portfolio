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

import { FaInstagram, FaLinkedin, FaBehance, FaWhatsapp } from 'react-icons/fa'

import footerBg from "../../assets/images/footer-bg.png";

function Footer() {

  return (

    <footer
      className="
      relative
      overflow-hidden
      border-t border-white/10
      py-12
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
object-[center_60%]
opacity-70
scale-45

transition-transform duration-[4000ms]
"
      />

      {/* DARK OVERLAY */}
      <div
        className="
        absolute
        inset-0
        bg-black/25
        "
      ></div>

      {/* RED GLOW */}
      <div
        className="
        absolute
        bottom-[-100px]
        left-1/2
        -translate-x-1/2
        w-[600px]
        h-[300px]
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
        container
        flex flex-col md:flex-row
        items-center justify-between
        gap-8
        "
      >

        {/* LEFT */}
        <div>

          <h2
            className="
            big-title
            text-4xl
            "
          >
            SHUBH
            <span className="text-red-500">.</span>
          </h2>

          <p
            className="
            text-white/50
            mt-2
            text-sm
            tracking-[0.2em]
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
          gap-6
          text-2xl
          "
        >

          <a
            href="https://wa.me/917017288428"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="hover:text-red-500 hover:scale-110 transition duration-300" />
          </a>

          <a
            href="https://www.instagram.com/shubhdesign3d"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="hover:text-red-500 hover:scale-110 transition duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/shubhdesign3d/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-red-500 hover:scale-110 transition duration-300" />
          </a>

          <a
            href="https://www.behance.net/shubhasawa1"
            target="_blank"
            rel="noreferrer"
          >
            <FaBehance className="hover:text-red-500 hover:scale-110 transition duration-300" />
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer