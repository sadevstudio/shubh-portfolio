import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({
  project,
}) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="block "
    >
      <motion.article
        whileHover={{
          y: -10,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className="
        group
        relative
        overflow-hidden
        
        bg-[#080808]
        border
        border-white/10
        "
      >
        {/* IMAGE AREA */}
        <div
  className={`
    relative
    overflow-hidden

    aspect-[16/10]
`}
>
          {/* IMAGE */}
          <img
            src={project.thumbnail}
            alt={project.title}
            className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
            "
          />

          {/* DARK OVERLAY */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
from-black/90
via-black/20
to-transparent
            "
          />

          {/* RED ATMOSPHERE */}
          <div
            className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-700
            bg-gradient-to-t
            from-red-950/40
            via-transparent
            to-transparent
            "
          />

          {/* TOP LABEL */}
          <div
            className="
            absolute
            top-6
            left-6
            z-20
            "
          >
            <span
              className="
              px-4
              py-2
              text-xs
              uppercase
              tracking-[0.3em]
              bg-black/60
              backdrop-blur-sm
              border
              border-white/10
              text-red-400
              "
            >
              {project.category}
            </span>
          </div>

          {/* CONTENT */}
          <div
            className="
            absolute
bottom-6
left-0
            w-full
            p-8
            md:p-10
            z-20
            "
          >
            {/* TITLE */}
            <motion.h3
              className={`
              uppercase
              font-black
              text-white
              leading-[0.95]
              mb-5

              text-3xl md:text-4xl
            `}
            >
              {project.title}
            </motion.h3>

            {/* DESCRIPTION */}
            <p
              className="
              text-zinc-300
              leading-relaxed
              max-w-[600px]
              "
            >
              {project.shortDescription}
            </p>

            {/* CTA */}
            <div
              className="
              mt-8
              flex
              items-center
              gap-4
              "
            >
              <span
                className="
                uppercase
                tracking-[0.25em]
                text-sm
                text-white
                "
              >
                Enter Archive
              </span>

              <motion.div
                className="
                w-12
                h-[1px]
                bg-red-500
                "
                initial={{
                  width: 40,
                }}
                whileHover={{
                  width: 80,
                }}
              />
            </div>
          </div>

          {/* BORDER GLOW */}
          <div
            className="
            absolute
            inset-0
            border
            border-red-500/0
            group-hover:border-red-500/40
            transition-all
            duration-500
            pointer-events-none
            "
          />
        </div>
      </motion.article>
    </Link>
  );
}

export default ProjectCard;