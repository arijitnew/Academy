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
import React from "react";
import academyLogo from "../assets/academy.png";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center bg-white">
      <nav
        className="
          w-full
          max-w-[1194px]
          h-[54px]
          flex
          items-center
          px-2 sm:px-4
        "
      >
        {/* LOGO */}
        <a href="/" className="flex items-center mr-3 sm:mr-6 md:mr-10">
        <img
  src={academyLogo}
  alt="Academy"
  className="w-[150px] h-[55px] object-contain"
/>

        </a>

        {/* MENU */}
        <div
          className="
            flex
            items-center
            gap-2 sm:gap-4 md:gap-8
            text-[9px] sm:text-xs md:text-sm lg:text-base
            font-normal
            text-[#111111]
            ml-1 sm:ml-6 md:ml-[140px]
          "
        >
          {/* Explore – NO arrow */}
          <button className="flex items-center whitespace-nowrap">
            Explore Courses
          </button>

          {/* Growth with arrow */}
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

          {/* Resources with same arrow */}
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

        {/* AUTH BUTTONS */}
        <div className="flex flex-1 justify-end items-center gap-1 sm:gap-2 md:gap-3">
          <button
            className="
              rounded-full
              border border-gray-300
              px-2 sm:px-3 md:px-4
              py-[2px] sm:py-1
              text-[9px] sm:text-xs md:text-sm
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
              px-2 sm:px-3 md:px-4
              py-[2px] sm:py-1
              text-[9px] sm:text-xs md:text-sm
              font-medium
              text-white
              whitespace-nowrap
            "
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}








