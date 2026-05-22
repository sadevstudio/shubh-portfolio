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
      fixed top-0 left-0 w-full z-50
      border-b border-white/10
      bg-black/30 backdrop-blur-xl
      "
    >

      <div className="
      container
      flex items-center justify-between
      py-6
      ">

        {/* LOGO */}
        <NavLink
          to="/"
          className="
          text-3xl
          font-black
          tracking-[0.3em]
          big-title
          "
        >
          SHUBH
          <span className="text-red-500">.</span>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="
        hidden md:flex
        items-center
        gap-10
        uppercase
        tracking-[0.25em]
        text-sm
        ">

          {links.map((link)=>(
            <NavLink
              key={link.name}
              to={link.path}
              className="
              text-white/70
              hover:text-red-500
              transition duration-300
              "
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
          text-white
          text-3xl
          "
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {
        menuOpen && (
          <div className="
          md:hidden
          bg-black/95
          border-t border-white/10
          ">

            <div className="
            flex flex-col
            p-8
            gap-6
            uppercase
            tracking-[0.2em]
            ">

              {links.map((link)=>(
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={()=>setMenuOpen(false)}
                  className="
                  text-white/70
                  hover:text-red-500
                  transition
                  "
                >
                  {link.name}
                </NavLink>
              ))}

            </div>

          </div>
        )
      }

    </motion.nav>

  )
}

export default Navbar