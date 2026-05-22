import Navbar from '../components/layout/Navbar'
import ProjectCard from '../components/portfolio/ProjectCard'
import projects from '../data/projects'

function Portfolio() {

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="pt-40 pb-20">

        <div className="container">

          <div className="mb-20">

            <p className="
            uppercase
            tracking-[0.4em]
            text-red-500
            mb-6
            ">
              Featured Work
            </p>

            <h1 className="
            big-title
            text-[5rem]
            md:text-[9rem]
            leading-none
            ">
              PORTFOLIO
            </h1>

          </div>

          <div className="
          grid
          md:grid-cols-2
          gap-10
          ">

            {projects.map((project)=>(
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

          </div>

        </div>

      </section>

    </div>
  )
}

export default Portfolio