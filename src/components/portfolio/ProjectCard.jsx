import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function ProjectCard({project}) {

  return (
    <motion.div
      whileHover={{ y:-10 }}
      transition={{ duration:0.4 }}
      className="
      relative
      overflow-hidden
      rounded-[30px]
      group
      glass
      "
    >

      <Link to={`/project/${project.slug}`}>

        <div className="relative overflow-hidden h-[500px]">

          <img
            src={project.image}
            alt={project.title}
            className="
            w-full h-full object-cover
            group-hover:scale-110
            transition duration-700
            "
          />

          <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black via-black/20 to-transparent
          "></div>

          <div className="
          absolute bottom-0 left-0
          p-8
          ">

            <p className="
            uppercase
            tracking-[0.3em]
            text-red-500
            text-xs
            mb-4
            ">
              {project.category}
            </p>

            <h3 className="
            text-4xl
            font-bold
            big-title
            ">
              {project.title}
            </h3>

          </div>

        </div>

      </Link>

    </motion.div>
  )
}

export default ProjectCard