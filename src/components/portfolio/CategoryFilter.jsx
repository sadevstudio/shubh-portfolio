// import { motion } from "framer-motion";

// import categories from "../../data/categories";

// function CategoryFilter({
//   selectedCategory,
//   setSelectedCategory,
// }) {
//   return (
//     <div
//       className="
//       relative
//       mb-20
//       "
//     >
//       {/* WRAPPER */}
//       <div
//         className="
//         flex
//         gap-4
//         overflow-x-auto
//         pb-4
//         scrollbar-hide
//         "
//       >
//         {categories.map((category) => {
//           const active =
//             selectedCategory === category;

//           return (
//             <motion.button
//               key={category}
//               whileHover={{
//                 y: -2,
//               }}
//               whileTap={{
//                 scale: 0.98,
//               }}
//               onClick={() =>
//                 setSelectedCategory(category)
//               }
//               className={`
//                 relative
//                 px-7
//                 py-4
//                 uppercase
//                 tracking-[0.2em]
//                 text-sm
//                 whitespace-nowrap
//                 transition-all
//                 duration-300
//                 border

//                 ${
//                   active
//                     ? `
//                     bg-red-600
//                     border-red-500
//                     text-white
//                     shadow-[0_0_40px_rgba(239,68,68,0.35)]
//                   `
//                     : `
//                     bg-white/[0.03]
//                     border-white/10
//                     text-zinc-400
//                     hover:text-white
//                     hover:border-red-500/40
//                     hover:bg-red-500/10
//                   `
//                 }
//               `}
//             >
//               {/* ACTIVE LINE */}
//               {active && (
//                 <motion.div
//                   layoutId="active-category"
//                   className="
//                   absolute
//                   bottom-0
//                   left-0
//                   w-full
//                   h-[2px]
//                   bg-white
//                   "
//                 />
//               )}

//               {category}
//             </motion.button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default CategoryFilter;

import { motion } from "framer-motion";
import { useRef } from "react";

import categories from "../../data/categories";

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // Convert vertical mouse-wheel scroll into horizontal scroll
  const handleWheel = (e) => {
    if (!scrollRef.current) return;
    if (e.deltaY === 0) return;
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  // Drag-to-scroll with mouse
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.pageX - startX.current;
    scrollRef.current.scrollLeft = scrollLeftStart.current - dx;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <div className="relative mb-20">
      {/* WRAPPER */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        className="
        flex
        gap-4
        overflow-x-auto
        pb-4
        scrollbar-hide
        cursor-grab
        active:cursor-grabbing
        "
      >
        {categories.map((category) => {
          const active = selectedCategory === category;

          return (
            <motion.button
              key={category}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(category)}
              className={`
                relative
                flex-shrink-0
                px-7
                py-4
                uppercase
                tracking-[0.2em]
                text-sm
                whitespace-nowrap
                transition-all
                duration-300
                border

                ${
                  active
                    ? `
                    bg-red-600
                    border-red-500
                    text-white
                    shadow-[0_0_40px_rgba(239,68,68,0.35)]
                  `
                    : `
                    bg-white/[0.03]
                    border-white/10
                    text-zinc-400
                    hover:text-white
                    hover:border-red-500/40
                    hover:bg-red-500/10
                  `
                }
              `}
            >
              {active && (
                <motion.div
                  layoutId="active-category"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                />
              )}
              {category}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryFilter;