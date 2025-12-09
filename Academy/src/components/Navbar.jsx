// import React from "react";

// export default function Navbar() {
//   return (
//     <header className="w-full flex justify-center bg-white">
//       <nav
//         className="
//           w-full
//           max-w-[1194px]
//           h-[54px]
//           flex
//           items-center
//           px-2 sm:px-4
//         "
//       >
//         {/* LOGO */}
//         <a href="/" className="flex items-center mr-3 sm:mr-6 md:mr-10">
//           <img
//             src="/academy-logo.png"
//             alt="Academy"
//             className="h-6 sm:h-7 md:h-8 w-auto"
//           />
//         </a>

//         {/* MENU */}
//         <div
//           className="
//             flex
//             items-center
//             gap-2 sm:gap-4 md:gap-8
//             text-[9px] sm:text-xs md:text-sm lg:text-base
//             font-normal
//             text-[#111111]
//             ml-1 sm:ml-6 md:ml-[140px]
//           "
//         >
//           {/* Explore – NO arrow */}
//           <button className="flex items-center whitespace-nowrap">
//             Explore Courses
//           </button>

//           {/* Shared arrow icon */}
//           {/*
//             You can reuse this <svg> wherever you want a dropdown arrow.
//             Size scales with w-3 h-3 – tweak if needed to match Figma.
//           */}

//           {/* Growth with arrow */}
//           <button className="flex items-center gap-1 whitespace-nowrap">
//             <span>Growth</span>
//             <svg
//               className="w-3 h-3"
//               viewBox="0 0 10 6"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M1 1L5 5L9 1"
//                 stroke="currentColor"
//                 strokeWidth="1.2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>

//           {/* Resources with same arrow */}
//           <button className="flex items-center gap-1 whitespace-nowrap">
//             <span>Resources</span>
//             <svg
//               className="w-3 h-3"
//               viewBox="0 0 10 6"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M1 1L5 5L9 1"
//                 stroke="currentColor"
//                 strokeWidth="1.2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* AUTH BUTTONS */}
//         <div className="flex flex-1 justify-end items-center gap-1 sm:gap-2 md:gap-3">
//           <button
//             className="
//               rounded-full
//               border border-gray-300
//               px-2 sm:px-3 md:px-4
//               py-[2px] sm:py-1
//               text-[9px] sm:text-xs md:text-sm
//               font-medium
//               text-gray-800
//               whitespace-nowrap
//             "
//           >
//             Login
//           </button>

//           <button
//             className="
//               rounded-full
//               bg-[#E10051]
//               px-2 sm:px-3 md:px-4
//               py-[2px] sm:py-1
//               text-[9px] sm:text-xs md:text-sm
//               font-medium
//               text-white
//               whitespace-nowrap
//             "
//           >
//             Sign Up
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }
// import React from "react";
// import academyLogo from "../assets/academy.png";

// export default function Navbar() {
//   return (
//     <header className="w-full flex justify-center bg-white">
//       <nav
//         className="
//           w-full
//           max-w-[1194px]
//           h-[54px]
//           flex
//           items-center
//           px-2 sm:px-4
//         "
//       >
//         {/* LOGO */}
//         <a href="/" className="flex items-center mr-3 sm:mr-6 md:mr-10">
//           <img
//             src={academyLogo}
//             alt="Academy"
//             className="w-[150px] h-[55px] object-contain"
//           />
//         </a>

//         {/* MENU */}
//         <div
//           className="
//             flex
//             items-center
//             gap-2 sm:gap-4 md:gap-8
//             text-[9px] sm:text-xs md:text-sm lg:text-base
//             font-normal
//             text-[#111111]
//             ml-1 sm:ml-6 md:ml-[40px]
//           "
//         >
//           {/* Explore – NO arrow */}
//           <button className="flex items-center whitespace-nowrap">
//             Explore Courses
//           </button>

//           {/* Growth with arrow */}
//           <button className="flex items-center gap-1 whitespace-nowrap">
//             <span>Growth</span>
//             <svg
//               className="w-3 h-3"
//               viewBox="0 0 10 6"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M1 1L5 5L9 1"
//                 stroke="currentColor"
//                 strokeWidth="1.2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>

//           {/* Resources with same arrow */}
//           <button className="flex items-center gap-1 whitespace-nowrap">
//             <span>Resources</span>
//             <svg
//               className="w-3 h-3"
//               viewBox="0 0 10 6"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M1 1L5 5L9 1"
//                 stroke="currentColor"
//                 strokeWidth="1.2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* AUTH BUTTONS */}
//         <div className="flex ml-auto justify-end items-center gap-1 sm:gap-2 md:gap-3">
//           <button
//             className="
//               rounded-full
//               border border-gray-300
//               px-2 sm:px-3 md:px-4
//               py-[2px] sm:py-1
//               text-[9px] sm:text-xs md:text-sm
//               font-medium
//               text-gray-800
//               whitespace-nowrap
//             "
//           >
//             Login
//           </button>

//           <button
//             className="
//               rounded-full
//               bg-[#E10051]
//               px-2 sm:px-3 md:px-4
//               py-[2px] sm:py-1
//               text-[9px] sm:text-xs md:text-sm
//               font-medium
//               text-white
//               whitespace-nowrap
//             "
//           >
//             Sign Up
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }
// import React, { useState } from "react";
// import academyLogo from "../assets/academy.png";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full flex justify-center bg-white">
//       <nav
//         className="
//           w-full
//           max-w-[1194px]
//           h-[54px]
//           flex
//           items-center
//           px-4
//           relative
//         "
//       >
//         {/* LOGO */}
//         <a href="/" className="flex items-center">
//           <img
//             src={academyLogo}
//             alt="Academy"
//             className="w-[150px] h-[55px] object-contain"
//           />
//         </a>

//         {/* DESKTOP MENU */}
//         <div
//           className="
//             hidden md:flex
//             items-center
//             gap-8
//             ml-10
//             text-sm
//             font-normal
//             text-[#111111]
//           "
//         >
//           <button className="whitespace-nowrap">Explore Courses</button>

//           <button className="flex items-center gap-1 whitespace-nowrap">
//             <span>Growth</span>
//             <svg
//               className="w-3 h-3"
//               viewBox="0 0 10 6"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M1 1L5 5L9 1"
//                 stroke="currentColor"
//                 strokeWidth="1.2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>

//           <button className="flex items-center gap-1 whitespace-nowrap">
//             <span>Resources</span>
//             <svg
//               className="w-3 h-3"
//               viewBox="0 0 10 6"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M1 1L5 5L9 1"
//                 stroke="currentColor"
//                 strokeWidth="1.2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* DESKTOP AUTH BUTTONS */}
//         <div className="hidden md:flex ml-auto items-center gap-3">
//           <button
//             className="
//               rounded-full
//               border border-gray-300
//               px-4
//               py-1
//               text-sm
//               font-medium
//               text-gray-800
//               whitespace-nowrap
//             "
//           >
//             Login
//           </button>

//           <button
//             className="
//               rounded-full
//               bg-[#E10051]
//               px-4
//               py-1
//               text-sm
//               font-medium
//               text-white
//               whitespace-nowrap
//             "
//           >
//             Sign Up
//           </button>
//         </div>

//         {/* MOBILE HAMBURGER */}
//         <button
//           className="ml-auto md:hidden flex flex-col gap-[4px] justify-center items-center w-9 h-9"
//           onClick={() => setOpen((prev) => !prev)}
//           aria-label="Toggle menu"
//         >
//           <span className="block w-5 h-[2px] bg-black" />
//           <span className="block w-5 h-[2px] bg-black" />
//           <span className="block w-5 h-[2px] bg-black" />
//         </button>

//         {/* MOBILE MENU (FIXED SO IT'S NEVER CUT) */}
//         {open && (
//           <div className="fixed top-[60px] right-4 w-[220px] bg-white shadow-lg border border-gray-100 rounded-xl overflow-hidden flex flex-col text-sm z-[10000]">
//             <button className="px-4 py-3 text-left hover:bg-gray-50">
//               Explore Courses
//             </button>

//             <button className="px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50">
//               <span>Growth</span>
//               <svg
//                 className="w-3 h-3"
//                 viewBox="0 0 10 6"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M1 1L5 5L9 1"
//                   stroke="currentColor"
//                   strokeWidth="1.2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>

//             <button className="px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50">
//               <span>Resources</span>
//               <svg
//                 className="w-3 h-3"
//                 viewBox="0 0 10 6"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M1 1L5 5L9 1"
//                   stroke="currentColor"
//                   strokeWidth="1.2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>

//             <div className="h-px bg-gray-100" />

//             <button className="px-4 py-3 text-left hover:bg-gray-50">
//               Login
//             </button>

//             <button className="px-4 py-3 text-left hover:bg-gray-50 text-[#E10051] font-medium">
//               Sign Up
//             </button>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }
import React, { useState, useRef, useEffect } from "react";
import academyLogo from "../assets/academy.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="w-full flex justify-center bg-white">
      <nav
        className="
          w-full
          max-w-[1194px]
          h-[54px]
          flex
          items-center
          px-4
          relative
        "
      >
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src={academyLogo}
            alt="Academy"
            className="w-[150px] h-[55px] object-contain"
          />
        </a>

        {/* DESKTOP MENU */}
        <div
          className="
            hidden md:flex
            items-center
            gap-8
            ml-10
            text-sm
            font-normal
            text-[#111111]
          "
        >
          <button className="whitespace-nowrap">Explore Courses</button>

          <button className="flex items-center gap-1 whitespace-nowrap">
            <span>Growth</span>
            <svg
              className="w-3 h-3"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="flex items-center gap-1 whitespace-nowrap">
            <span>Resources</span>
            <svg
              className="w-3 h-3"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* DESKTOP AUTH BUTTONS */}
        <div className="hidden md:flex ml-auto items-center gap-3">
          <button
            className="
              rounded-full
              border border-gray-300
              px-4
              py-1
              text-sm
              font-medium
              text-gray-800
              whitespace-nowrap
            "
          >
            Login
          </button>

          <button
            className="
              rounded-full
              bg-[#E10051]
              px-4
              py-1
              text-sm
              font-medium
              text-white
              whitespace-nowrap
            "
          >
            Sign Up
          </button>
        </div>

        {/* MOBILE: hamburger + popover wrapper (used for click-outside) */}
        <div ref={menuRef} className="ml-auto md:hidden relative">
          {/* MOBILE HAMBURGER */}
          <button
            className="flex flex-col gap-[4px] justify-center items-center w-9 h-9"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-[2px] bg-black" />
            <span className="block w-5 h-[2px] bg-black" />
            <span className="block w-5 h-[2px] bg-black" />
          </button>

          {/* MOBILE MENU (POPOVER) */}
          {open && (
            <div className="fixed top-[60px] right-4 w-[220px] bg-white shadow-lg border border-gray-100 rounded-xl overflow-hidden flex flex-col text-sm z-[10000]">
              <button className="px-4 py-3 text-left hover:bg-gray-50">
                Explore Courses
              </button>

              <button className="px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50">
                <span>Growth</span>
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50">
                <span>Resources</span>
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="h-px bg-gray-100" />

              <button className="px-4 py-3 text-left hover:bg-gray-50">
                Login
              </button>

              <button className="px-4 py-3 text-left hover:bg-gray-50 text-[#E10051] font-medium">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
