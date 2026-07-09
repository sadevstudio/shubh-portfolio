// import ProjectCard from "./ProjectCard";

// function ProjectGrid({
//   projects,
// }) {
//   return (
//     <div
//       className="
//       grid
//       grid-cols-1
//       lg:grid-cols-12
//       gap-8
//       "
//     >
//       {projects.map((project, index) => {
//         /*
//         ==================================================
//         CINEMATIC LAYOUT RHYTHM
//         ==================================================
//         */

//         const large =
//           index % 3 === 0;

//         return (
//           <div
//             key={project.slug}
//             className={`
//               ${
//                 large
//                   ? "lg:col-span-6"
//                   : "lg:col-span-6"
//               }
//             `}
//           >
//             <ProjectCard
//               project={project}
//               large={large}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default ProjectGrid;

import ProjectCard from "./ProjectCard";

function ProjectGrid({
  projects,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;