// import { motion } from "framer-motion";

// import { useState } from "react";

// import projects from "../data/projects";

// import CategoryFilter from "../components/portfolio/CategoryFilter";
// import SearchBar from "../components/portfolio/SearchBar";
// import ProjectGrid from "../components/portfolio/ProjectGrid";

// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import CreatorSection from "../components/portfolio/CreatorSection";

// import portfolioBg from "../assets/portfolio/portfolio-hero-bg.png";
// import shubhImage from "../assets/portfolio/shubh-main.png";

// function Portfolio() {
//   const [selectedCategory, setSelectedCategory] = useState("ALL");

// const [search, setSearch] = useState("");
// const filteredProjects = projects.filter((project) => {

//   const matchesCategory =
//     selectedCategory === "ALL"
//       ? true
//       : project.category === selectedCategory;

//   const matchesSearch =
//     project.title
//       .toLowerCase()
//       .includes(search.toLowerCase());

//   return matchesCategory && matchesSearch;
// });
//   return (
//     <>
//       {/* NAVBAR */}
//       <Navbar />

//       {/* HERO SECTION */}
//       <section
//         className="
//         relative
//         min-h-screen
//         overflow-hidden
//         bg-black
//         flex
//         items-center
//         justify-center
//         "
//       >
//         {/* BACKGROUND */}
//         <motion.div
//           initial={{
//             scale: 1.15,
//             opacity: 0,
//           }}
//           animate={{
//             scale: 1,
//             opacity: 1,
//           }}
//           transition={{
//             duration: 2,
//             ease: "easeOut",
//           }}
//           className="
//           absolute
//           inset-0
//           "
//           style={{
//             backgroundImage: `url(${portfolioBg})`,
//             backgroundSize: "100%",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         />

//         {/* DARK OVERLAY */}
//         <div
//           className="
//           absolute
//           inset-0
//           bg-black/25
//           "
//         ></div>

//         {/* IMAGE */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 120,
//             scale: 0.9,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//             scale: 1.2,
//           }}
//           transition={{
//             delay: 1,
//             duration: 1.5,
//             ease: "easeOut",
//           }}
//           className="
//           relative
//           z-10
//           flex
//           items-end
//           justify-center
//           h-screen
//           "
//         >
//           {/* RED GLOW */}
//         <div
//           className="
//           absolute
//           bottom-0
//           w-[500px]
//           h-[500px]
//           bg-red-500/20
//           blur-[120px]
//           rounded-full
//           "
//         ></div>
          

//           {/* PERSON IMAGE */}
//           <motion.img
//           animate={{
//             y: [-15, 15, -15],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//             src={shubhImage}
//             alt="Shubh Asawa"
//             className="
//             relative
//             z-10
//             w-[90%]
//             md:w-[55%]
//             lg:w-[50%]
//             max-w-[920px]
//             object-contain
            
//             "
//           />
//         </motion.div>

//         {/* BOTTOM FADE */}
//         <div
//           className="
//           absolute
//           bottom-0
//           left-0
//           w-full
//           h-[180px]
//           bg-gradient-to-t
//           from-black
//           to-transparent
//           "
//         ></div>
//       </section>

//       {/* SECOND SECTION*/}
//       <CreatorSection /> 
//       {/* CATEGORY + PROJECT GRID SECTION */}

// <section
//   className="
//   relative
//   py-32
//   overflow-hidden
//   bg-black
//   "
// >

//   {/* RED GLOW */}
//   <div
//     className="
//     absolute
//     top-1/2
//     left-1/2
//     -translate-x-1/2
//     -translate-y-1/2
//     w-[900px]
//     h-[900px]
//     bg-red-500/10
//     blur-[180px]
//     rounded-full
//     "
//   ></div>

//   {/* CONTENT */}
//   <div
//     className="
//     relative
//     z-10
//     max-w-[1700px]
//     mx-auto
//     px-6
//     "
//   >

//     {/* TOP AREA */}
//     <div
//       className="
//       flex
//       flex-col
//       lg:flex-row
//       lg:items-center
//       lg:justify-between
//       gap-10
//       mb-20
//       "
//     >

//       {/* TITLE */}
//       <div>

//         <p
//           className="
//           uppercase
//           tracking-[0.5em]
//           text-red-500
//           text-sm
//           mb-6
//           "
//         >
//           Work Archive
//         </p>

//         <h2
//           className="
//           big-title
//           text-[4rem]
//           md:text-[7rem]
//           leading-[0.9]
//           uppercase
//           "
//         >

//           Featured
//           <br />

//           Works

//         </h2>

//       </div>

//       {/* SEARCH */}
//       <SearchBar
//         search={search}
//         setSearch={setSearch}
//       />

//     </div>

//     {/* CATEGORY FILTER */}
//     <CategoryFilter
//       selectedCategory={selectedCategory}
//       setSelectedCategory={setSelectedCategory}
//     />

//     {/* PROJECT GRID */}
//     <ProjectGrid
//       projects={filteredProjects}
//     />

//   </div>

// </section>

//       {/* FOOTER */}
//       <Footer />
//     </>
//   );
// }

// export default Portfolio;

// import { motion } from "framer-motion";
// import { useMemo, useState } from "react";

// import projects from "../data/projects";

// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// import CreatorSection from "../components/portfolio/CreatorSection";
// import CategoryFilter from "../components/portfolio/CategoryFilter";
// import SearchBar from "../components/portfolio/SearchBar";
// import ProjectGrid from "../components/portfolio/ProjectGrid";

// import FeaturedProject from "../components/portfolio/FeaturedProject";
// import CreativeProcess from "../components/portfolio/CreativeProcess";
// import ShowreelSection from "../components/portfolio/ShowreelSection";
// import FinalCTA from "../components/portfolio/FinalCTA";


// import portfolioBg from "../assets/portfolio/portfolio-hero-bg.png";
// import shubhImage from "../assets/portfolio/shubh-main.png";

// function Portfolio() {
//   const [selectedCategory, setSelectedCategory] = useState("ALL");
//   const [search, setSearch] = useState("");

//   /*
//   ==================================================
//   FILTERED PROJECTS
//   ==================================================
//   */

//   const filteredProjects = useMemo(() => {
//     return projects.filter((project) => {
//       const matchesCategory =
//         selectedCategory === "ALL"
//           ? true
//           : project.category === selectedCategory;

//       const searchValue = search.toLowerCase();

//       const matchesSearch =
//         project.title?.toLowerCase().includes(searchValue) ||
//         project.category?.toLowerCase().includes(searchValue) ||
//         project.shortDescription
//           ?.toLowerCase()
//           .includes(searchValue);

//       return matchesCategory && matchesSearch;
//     });
//   }, [selectedCategory, search]);

//   return (
//     <>
//       {/* ==================================================
//           NAVBAR
//       ================================================== */}
//       <Navbar />

//       {/* HERO SECTION */}
//       <section
//         className="
//         relative
//         min-h-screen
//         overflow-hidden
//         bg-black
//         flex
//         items-center
//         justify-center
//         "
//       >
//         {/* BACKGROUND */}
//         <motion.div
//           initial={{
//             scale: 1.15,
//             opacity: 0,
//           }}
//           animate={{
//             scale: 1,
//             opacity: 1,
//           }}
//           transition={{
//             duration: 2,
//             ease: "easeOut",
//           }}
//           className="
//           absolute
//           inset-0
//           "
//           style={{
//             backgroundImage: `url(${portfolioBg})`,
//             backgroundSize: "100%",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         />

//         {/* DARK OVERLAY */}
//         <div
//           className="
//           absolute
//           inset-0
//           bg-black/25
//           "
//         ></div>

//         {/* IMAGE */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 120,
//             scale: 0.9,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//             scale: 1.2,
//           }}
//           transition={{
//             delay: 1,
//             duration: 1.5,
//             ease: "easeOut",
//           }}
//           className="
//           relative
//           z-10
//           flex
//           items-end
//           justify-center
//           h-screen
//           "
//         >
//           {/* RED GLOW */}
//         <div
//           className="
//           absolute
//           bottom-0
//           w-[500px]
//           h-[500px]
//           bg-red-500/20
//           blur-[120px]
//           rounded-full
//           "
//         ></div>
          

//           {/* PERSON IMAGE */}
//           <motion.img
//           animate={{
//             y: [-15, 15, -15],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//             src={shubhImage}
//             alt="Shubh Asawa"
//             className="
//             relative
//             z-10
//             w-[90%]
//             md:w-[55%]
//             lg:w-[50%]
//             max-w-[920px]
//             object-contain
            
//             "
//           />
//         </motion.div>

//         {/* BOTTOM FADE */}
//         <div
//           className="
//           absolute
//           bottom-0
//           left-0
//           w-full
//           h-[180px]
//           bg-gradient-to-t
//           from-black
//           to-transparent
//           "
//         ></div>
//       </section>

//       {/* ==================================================
//           CREATOR SECTION
//       ================================================== */}
//       <CreatorSection />
       

//       {/* ==================================================
//           PROJECT ARCHIVE SECTION
//       ================================================== */}
//       <section
//         className="
//         relative
//         py-32
//         overflow-hidden
//         bg-black
//         "
//       >
//         {/* GRID TEXTURE */}
//         <div
//           className="
//           absolute
//           inset-0
//           opacity-[0.04]
//           bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
//           bg-[size:80px_80px]
//           "
//         />

//         {/* RED LIGHT */}
//         <div
//           className="
//           absolute
//           top-1/2
//           left-1/2
//           -translate-x-1/2
//           -translate-y-1/2
//           w-[700px]
//           h-[700px]
//           bg-red-600/10
//           blur-[100px]
//           rounded-full
//           "
//         />

//         {/* CONTENT */}
//         <div
//           className="
//           relative
//           z-10
//           max-w-[1700px]
//           mx-auto
//           px-6
//           "
//         >
//           {/* TOP AREA */}
//           <div
//             className="
//             flex
//             flex-col
//             lg:flex-row
//             lg:items-center
//             lg:justify-between
//             gap-10
//             mb-20
//             "
//           >
//             {/* TITLE */}
//             <div>
//               <p
//                 className="
//                 uppercase
//                 tracking-[0.5em]
//                 text-red-500
//                 text-sm
//                 mb-6
//                 "
//               >
//                 Work Archive
//               </p>

//               <h2
//                 className="
//                 text-white
//                 uppercase
//                 leading-[0.9]
//                 font-black
//                 text-[3rem]
//                 md:text-[6rem]
//                 "
//               >
//                 Featured
//                 <br />
//                 Works
//               </h2>
//             </div>

//             {/* SEARCH */}
//             <SearchBar
//               search={search}
//               setSearch={setSearch}
//             />
//           </div>

//           {/* CATEGORY FILTER */}
//           <CategoryFilter
//             selectedCategory={selectedCategory}
//             setSelectedCategory={setSelectedCategory}
//           />

//           {/* PROJECT GRID */}
//           {filteredProjects.length > 0 ? (
//             <ProjectGrid
//               projects={filteredProjects}
//             />
//           ) : (
//             <div
//               className="
//               py-32
//               text-center
//               border
//               border-white/10
//               bg-white/[0.02]
//               backdrop-blur-sm
//               "
//             >
//               <h3
//                 className="
//                 text-3xl
//                 text-white
//                 uppercase
//                 tracking-widest
//                 "
//               >
//                 No Projects Found
//               </h3>

//               <p
//                 className="
//                 mt-4
//                 text-zinc-500
//                 "
//               >
//                 Try searching with another keyword.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* {/* ==================================================
//           FEATURED MASTERPIECE
//       ================================================== *
//       <FeaturedProject /> */}

//       {/* ==================================================
//           CREATIVE PROCESS
//       ================================================== */}
//       <CreativeProcess />

//       {/* ==================================================
//           SHOWREEL
//       ================================================== */}
//       {/* <ShowreelSection /> */}

//       {/* ==================================================
//           FINAL CTA
//       ================================================== */}
//       <FinalCTA />

//       {/* ==================================================
//           FOOTER
//       ================================================== */}
//       <Footer />
//     </>
//   );
// }

// export default Portfolio;


import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import projects from "../data/projects";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CreatorSection from "../components/portfolio/CreatorSection";
import CategoryFilter from "../components/portfolio/CategoryFilter";
import SearchBar from "../components/portfolio/SearchBar";
import ProjectGrid from "../components/portfolio/ProjectGrid";

import FeaturedProject from "../components/portfolio/FeaturedProject";
import CreativeProcess from "../components/portfolio/CreativeProcess";
import ShowreelSection from "../components/portfolio/ShowreelSection";
import FinalCTA from "../components/portfolio/FinalCTA";


import portfolioBg from "../assets/portfolio/portfolio-hero-bg.png";
import shubhImage from "../assets/portfolio/shubh-main.png";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [search, setSearch] = useState("");

  /*
  ==================================================
  FILTERED PROJECTS
  ==================================================
  */

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "ALL"
          ? true
          : project.category === selectedCategory;

      const searchValue = search.toLowerCase();

      const matchesSearch =
        project.title?.toLowerCase().includes(searchValue) ||
        project.category?.toLowerCase().includes(searchValue) ||
        project.shortDescription
          ?.toLowerCase()
          .includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <>
      {/* ==================================================
          NAVBAR
      ================================================== */}
      <Navbar />

      
{/* HERO SECTION */}
<section
  className="
  relative
  min-h-screen
  overflow-hidden
  bg-black

  flex
  items-center
  justify-center
  "
>

  {/* BACKGROUND */}
  <motion.div
    initial={{
      scale: 1.08,
      opacity: 0,
    }}

    animate={{
      scale: 1,
      opacity: 1,
    }}

    transition={{
      duration: 2,
      ease: "easeOut",
    }}

    className="
    absolute
    inset-0
    "
    style={{
      backgroundImage: `url(${portfolioBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />

  {/* DARK OVERLAY */}
  <div
    className="
    absolute
    inset-0
    bg-black/30
    "
  ></div>

  {/* MAIN CONTENT */}
  <motion.div

    initial={{
      opacity: 0,
      y: 80,
      scale: 0.96,
    }}

    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}

    transition={{
      delay: 0.6,
      duration: 1.3,
      ease: "easeOut",
    }}

    className="
    relative
    z-10

    flex
    items-end
    justify-center

    w-full
    h-screen

    pt-28
    "
  >

    {/* RED GLOW */}
    <div
      className="
      absolute
      bottom-[-120px]

      w-[320px]
      sm:w-[420px]
      md:w-[520px]
      lg:w-[650px]

      h-[320px]
      sm:h-[420px]
      md:h-[520px]
      lg:h-[650px]

      bg-red-500/20

      blur-[120px]

      rounded-full
      "
    ></div>

    {/* PERSON IMAGE */}
    <motion.img

      animate={{
        y: [-12, 12, -12],
      }}

      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      src={shubhImage}
      alt="Shubh Asawa"

      className="
      relative
      z-10

      object-contain

      w-[95%]
      sm:w-[85%]
      md:w-[72%]
      lg:w-[62%]
      xl:w-[55%]

      max-w-[980px]

      max-h-[82vh]
      sm:max-h-[84vh]
      md:max-h-[88vh]

      "
    />

  </motion.div>

  {/* BOTTOM FADE */}
  <div
    className="
    absolute
    bottom-0
    left-0

    w-full

    h-[140px]
    md:h-[180px]

    bg-gradient-to-t
    from-black
    to-transparent
    "
  ></div>

</section>



      {/* ==================================================
          CREATOR SECTION
      ================================================== */}
      <CreatorSection />
       

      
{/* ==================================================
    PROJECT ARCHIVE SECTION
================================================== */}
<section
  className="
  relative
  overflow-hidden
  bg-black

  py-20
  sm:py-24
  md:py-28
  lg:py-32
  "
>

  {/* GRID TEXTURE */}
  <div
    className="
    absolute
    inset-0

    opacity-[0.04]

    bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

    bg-[size:40px_40px]
    sm:bg-[size:60px_60px]
    md:bg-[size:80px_80px]
    "
  />

  {/* RED LIGHT */}
  <div
    className="
    absolute

    top-1/2
    left-1/2

    -translate-x-1/2
    -translate-y-1/2

    w-[300px]
    h-[300px]

    sm:w-[450px]
    sm:h-[450px]

    md:w-[650px]
    md:h-[650px]

    lg:w-[800px]
    lg:h-[800px]

    bg-red-600/10

    blur-[80px]
    md:blur-[120px]

    rounded-full
    "
  />

  {/* CONTENT */}
  <div
    className="
    relative
    z-10

    w-[92%]
    sm:w-[90%]

    max-w-[1700px]

    mx-auto
    "
  >

    {/* TOP AREA */}
    <div
      className="
      flex
      flex-col

      xl:flex-row
      xl:items-end
      xl:justify-between

      gap-8
      md:gap-12

      mb-14
      md:mb-20
      "
    >

      {/* TITLE */}
      <div>

        <p
          className="
          uppercase

          tracking-[0.35em]
          md:tracking-[0.5em]

          text-red-500

          text-[10px]
          sm:text-xs
          md:text-sm

          mb-4
          md:mb-6
          "
        >
          Work Archive
        </p>

        <h2
          className="
          text-white
          uppercase
          font-black

          leading-[0.92]

          text-[2.5rem]
          sm:text-[3.5rem]
          md:text-[5rem]
          lg:text-[6rem]
          "
        >

          Featured

          <br />

          Works

        </h2>

      </div>

      {/* SEARCH */}
      <div
        className="
        w-full
        xl:w-auto
        "
      >
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

    </div>

    {/* CATEGORY FILTER */}
    <div
  className="
  mb-12
  md:mb-16

  w-full
  overflow-x-auto
  scrollbar-hide
  "
>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>

    {/* PROJECT GRID */}
    {filteredProjects.length > 0 ? (

      <ProjectGrid
        projects={filteredProjects}
      />

    ) : (

      <div
        className="
        py-20
        md:py-32

        px-6

        text-center

        border
        border-white/10

        bg-white/[0.02]

        backdrop-blur-sm

        rounded-[24px]
        "
      >

        <h3
          className="
          text-2xl
          md:text-3xl

          text-white

          uppercase

          tracking-[0.2em]
          md:tracking-widest
          "
        >
          No Projects Found
        </h3>

        <p
          className="
          mt-4

          text-sm
          md:text-base

          text-zinc-500
          "
        >
          Try searching with another keyword.
        </p>

      </div>

    )}

  </div>

</section>



      {/* {/* ==================================================
          FEATURED MASTERPIECE
      ================================================== *
      <FeaturedProject /> */}

      {/* ==================================================
          CREATIVE PROCESS
      ================================================== */}
      <CreativeProcess />

      {/* ==================================================
          SHOWREEL
      ================================================== */}
      {/* <ShowreelSection /> */}

      {/* ==================================================
          FINAL CTA
      ================================================== */}
      <FinalCTA />

      {/* ==================================================
          FOOTER
      ================================================== */}
      <Footer />
    </>
  );
}

export default Portfolio;

