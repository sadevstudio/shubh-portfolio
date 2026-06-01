// import { Search } from "lucide-react";

// function SearchBar({
//   search,
//   setSearch,
// }) {
//   return (
//     <div
//       className="
//       relative
//       w-full
//       lg:w-[420px]
//       "
//     >
//       {/* ICON */}
//       <Search
//         size={18}
//         className="
//         absolute
//         top-1/2
//         left-5
//         -translate-y-1/2
//         text-red-500
//         z-10
//         "
//       />

//       {/* INPUT */}
//       <input
//         type="text"
//         placeholder="Search cinematic archive..."
//         value={search}
//         onChange={(e) =>
//           setSearch(e.target.value)
//         }
//         className="
//         w-full
//         h-[64px]
//         pl-14
//         pr-6

//         bg-white/[0.03]
//         backdrop-blur-md

//         border
//         border-white/10

//         text-white
//         placeholder:text-zinc-500

//         outline-none

//         transition-all
//         duration-300

//         focus:border-red-500
//         focus:bg-red-500/[0.03]
//         focus:shadow-[0_0_40px_rgba(239,68,68,0.15)]
//         "
//       />
//     </div>
//   );
// }

// export default SearchBar;


import { Search } from "lucide-react";

function SearchBar({
  search,
  setSearch,
}) {
  return (

    <div
      className="
      relative

      w-full
      sm:w-full
      md:w-[420px]
      "
    >

      {/* ICON */}
      <Search
        size={18}
        className="
        absolute

        top-1/2
        left-4
        md:left-5

        -translate-y-1/2

        text-red-500

        z-10
        "
      />

      {/* INPUT */}
      <input
        type="text"
        placeholder="Search cinematic archive..."

        value={search}

        onChange={(e) =>
          setSearch(e.target.value)
        }

        className="
        w-full

        h-[54px]
        md:h-[64px]

        pl-12
        md:pl-14

        pr-4
        md:pr-6

        text-sm
        md:text-base

        bg-white/[0.03]

        backdrop-blur-md

        border
        border-white/10

        rounded-[18px]
        md:rounded-[22px]

        text-white

        placeholder:text-zinc-500
        placeholder:text-sm
        md:placeholder:text-base

        outline-none

        transition-all
        duration-300

        focus:border-red-500
        focus:bg-red-500/[0.03]

        focus:shadow-[0_0_40px_rgba(239,68,68,0.15)]
        "
      />

    </div>

  );
}

export default SearchBar;

