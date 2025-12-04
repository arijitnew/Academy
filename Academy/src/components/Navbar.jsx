import React from "react";

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
            src="/academy-logo.png"
            alt="Academy"
            className="h-6 sm:h-7 md:h-8 w-auto"
          />
        </a>

        {/* MENU – same place, just shrunk on small screens */}
        <div
          className="
            flex
            items-center
            gap-2 sm:gap-4 md:gap-8
            text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base
            font-normal
            text-[#111111]
            ml-1 sm:ml-6 md:ml-[140px]
          "
        >
          <button className="flex items-center gap-1 whitespace-nowrap">
            Explore Courses
            <span className="text-[8px] sm:text-[10px] md:text-xs">▼</span>
          </button>

          <button className="flex items-center gap-1 whitespace-nowrap">
            Growth
            <span className="text-[8px] sm:text-[10px] md:text-xs">▼</span>
          </button>

          <button className="flex items-center gap-1 whitespace-nowrap">
            Resources
            <span className="text-[8px] sm:text-[10px] md:text-xs">▼</span>
          </button>
        </div>

        {/* AUTH BUTTONS – same position, slimmer on mobile */}
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






