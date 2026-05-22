import { useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import projects from '../data/projects'

function ProjectDetails() {

  const { slug } = useParams()

  const project = projects.find((p)=>p.slug === slug)

  if(!project){
    return (
      <div className="h-screen bg-black text-white flex items-center justify-center">
        Project Not Found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="pt-40 pb-20">

        <div className="container">

          <div className="max-w-5xl mx-auto">

            <p className="
            uppercase
            tracking-[0.4em]
            text-red-500
            mb-6
            ">
              {project.category}
            </p>

            <h1 className="
            big-title
            text-[5rem]
            md:text-[9rem]
            leading-none
            mb-10
            ">
              {project.title}
            </h1>

            <div className="
            overflow-hidden
            rounded-[30px]
            glass
            ">

              <img
                src={project.image}
                alt={project.title}
                className="w-full"
              />

            </div>

            <div className="mt-20 max-w-3xl">

              <h2 className="
              text-4xl
              mb-8
              gradient-text
              big-title
              ">
                PROJECT OVERVIEW
              </h2>

              <p className="
              text-white/70
              leading-relaxed
              text-lg
              ">
                This cinematic visual project was designed to showcase
                immersive storytelling, emotional composition,
                premium motion aesthetics, and futuristic CGI visuals.
                The final experience combines anime-inspired direction,
                cinematic lighting, and modern motion design principles.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default ProjectDetails