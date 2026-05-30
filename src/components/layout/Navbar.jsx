// import { NavLink } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useState } from 'react'

// function Navbar() {

//   const [menuOpen, setMenuOpen] = useState(false)

//   const links = [
//     { name:'Home', path:'/' },
//     { name:'About', path:'/about' },
//     { name:'Portfolio', path:'/portfolio' },
//     { name:'Resume', path:'/resume' },
//     { name:'Contact', path:'/contact' },
//   ]

//   return (

//     <motion.nav
//       initial={{ y:-100, opacity:0 }}
//       animate={{ y:0, opacity:1 }}
//       transition={{ duration:1 }}
//       className="
//       fixed top-0 left-0 w-full z-50
//       border-b border-white/10
//       bg-black/30 backdrop-blur-xl
//       "
//     >

//       <div className="
//       container
//       flex items-center justify-between
//       py-6
//       ">

//         {/* LOGO */}
//         <NavLink
//           to="/"
//           className="
//           text-3xl
//           font-black
//           tracking-[0.3em]
//           big-title
//           "
//         >
//           SHUBH
//           <span className="text-red-500">.</span>
//         </NavLink>

//         {/* DESKTOP MENU */}
//         <div className="
//         hidden md:flex
//         items-center
//         gap-10
//         uppercase
//         tracking-[0.25em]
//         text-sm
//         ">

//           {links.map((link)=>(
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className="
//               text-white/70
//               hover:text-red-500
//               transition duration-300
//               "
//             >
//               {link.name}
//             </NavLink>
//           ))}

//         </div>

//         {/* MOBILE BUTTON */}
//         <button
//           onClick={()=>setMenuOpen(!menuOpen)}
//           className="
//           md:hidden
//           text-white
//           text-3xl
//           "
//         >
//           ☰
//         </button>

//       </div>

//       {/* MOBILE MENU */}
//       {
//         menuOpen && (
//           <div className="
//           md:hidden
//           bg-black/95
//           border-t border-white/10
//           ">

//             <div className="
//             flex flex-col
//             p-8
//             gap-6
//             uppercase
//             tracking-[0.2em]
//             ">

//               {links.map((link)=>(
//                 <NavLink
//                   key={link.name}
//                   to={link.path}
//                   onClick={()=>setMenuOpen(false)}
//                   className="
//                   text-white/70
//                   hover:text-red-500
//                   transition
//                   "
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}

//             </div>

//           </div>
//         )
//       }

//     </motion.nav>

//   )
// }

// export default Navbar

import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name:'Home', path:'/' },
    { name:'About', path:'/about' },
    { name:'Portfolio', path:'/portfolio' },
    { name:'Resume', path:'/resume' },
    { name:'Contact', path:'/contact' },
  ]

  return (

    <motion.nav

      initial={{ y:-100, opacity:0 }}

      animate={{ y:0, opacity:1 }}

      transition={{ duration:1 }}

      className="
      fixed
      top-0
      left-0

      w-full

      z-[999]

      border-b
      border-white/10

      bg-black/30

      backdrop-blur-xl

      supports-[backdrop-filter]:bg-black/20
      "
    >

      {/* NAV CONTAINER */}
      <div
        className="
        w-[92%]
        max-w-[1600px]

        mx-auto

        flex
        items-center
        justify-between

        py-4
        md:py-6
        "
      >

        {/* LOGO */}
        <NavLink
          to="/"

          className="
          text-[1.5rem]
          md:text-3xl

          font-black

          tracking-[0.2em]
          md:tracking-[0.3em]

          big-title

          relative
          z-[999]
          "
        >

          SHUBH

          <span className="text-red-500">
            .
          </span>

        </NavLink>

        {/* DESKTOP MENU */}
        <div
          className="
          hidden
          md:flex

          items-center

          gap-6
          lg:gap-10

          uppercase

          tracking-[0.18em]
          lg:tracking-[0.25em]

          text-[11px]
          lg:text-sm
          "
        >

          {links.map((link)=>(

            <NavLink
              key={link.name}
              to={link.path}

              className={({ isActive }) => `
                relative

                text-white/70

                hover:text-red-500

                transition
                duration-300

                ${isActive ? 'text-red-500' : ''}
              `}
            >

              {link.name}

            </NavLink>

          ))}

        </div>

        {/* MOBILE BUTTON */}
        <button

          onClick={()=>setMenuOpen(!menuOpen)}

          className="
          md:hidden

          relative
          z-[999]

          flex
          flex-col

          justify-center

          gap-[6px]

          w-[40px]
          h-[40px]
          "
        >

          <motion.span

            animate={{
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 8 : 0,
            }}

            className="
            block

            w-full
            h-[2px]

            bg-white
            "
          />

          <motion.span

            animate={{
              opacity: menuOpen ? 0 : 1,
            }}

            className="
            block

            w-full
            h-[2px]

            bg-white
            "
          />

          <motion.span

            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? -8 : 0,
            }}

            className="
            block

            w-full
            h-[2px]

            bg-white
            "
          />

        </button>

      </div>

      {/* MOBILE MENU */}
      <motion.div

        initial={false}

        animate={{
          height: menuOpen ? '100vh' : 0,
          opacity: menuOpen ? 1 : 0,
        }}

        transition={{
          duration:0.5,
          ease:'easeInOut',
        }}

        className="
        md:hidden

        overflow-hidden

        bg-black/95

        backdrop-blur-2xl

        border-t
        border-white/10
        "
      >

        <div
          className="
          flex
          flex-col

          items-center
          justify-center

          h-full

          gap-8

          uppercase

          tracking-[0.25em]

          text-lg
          "
        >

          {links.map((link,index)=>(

            <motion.div

              key={link.name}

              initial={{
                opacity:0,
                y:20,
              }}

              animate={{
                opacity:menuOpen ? 1 : 0,
                y:menuOpen ? 0 : 20,
              }}

              transition={{
                delay:index * 0.08,
              }}
            >

              <NavLink

                to={link.path}

                onClick={()=>setMenuOpen(false)}

                className={({ isActive }) => `
                  text-white/70

                  hover:text-red-500

                  transition
                  duration-300

                  ${isActive ? 'text-red-500' : ''}
                `}
              >

                {link.name}

              </NavLink>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </motion.nav>

  )
}

export default Navbar