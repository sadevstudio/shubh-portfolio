import { FaInstagram, FaLinkedin, FaBehance, FaWhatsapp } from 'react-icons/fa'

function Footer() {

  return (
    <footer className="
    border-t border-white/10
    py-10
    mt-20
    ">

      <div className="
      container
      flex flex-col md:flex-row
      items-center justify-between
      gap-8
      ">

        <div>

          <h2 className="
          big-title
          text-4xl
          ">
            SHUBH
            <span className="text-red-500">.</span>
          </h2>

          <p className="
          text-white/50
          mt-2
          text-sm
          tracking-[0.2em]
          uppercase
          ">
            Motion Designer & 3D Artist
          </p>

        </div>

        <div className="flex items-center gap-6 text-2xl">

             <a
            href="https://wa.me/917017288428"
            target="_blank"
          >
            <FaWhatsapp className="hover:text-red-500 transition" />
          </a>
          <a
            href="https://www.instagram.com/shubhdesign3d"
            target="_blank"
          >
            <FaInstagram className="hover:text-red-500 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/shubhdesign3d/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-red-500 transition" />
          </a>

          <a
            href="https://www.behance.net/shubhasawa1"
            target="_blank"
          >
            <FaBehance className="hover:text-red-500 transition" />
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer