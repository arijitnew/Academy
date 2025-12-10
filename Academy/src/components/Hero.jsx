// import React from "react";
// import placeholder from "../assets/placeholder.png";

// export default function Hero() {
//   return (
//     <div className="w-full flex flex-col items-center">
//       {/* HERO CARD */}
//       <div
//         className="
//           relative
//           w-full
//           max-w-[1259.75px]
//           rounded-xl
//           overflow-hidden
//           flex flex-col md:flex-row
//           mx-auto
//           h-auto md:h-[419px]
//         "
//       >
//         {/* BASE PURPLE */}
//         <div className="absolute inset-0 bg-[#501A5F]" />

//         {/* LEFT ARROW (hide in mobile) */}
//         <button
//           className="
//             hidden md:flex
//             absolute
//             z-20
//             left-0
//             top-1/2
//             -translate-y-1/2
//             w-7
//             h-20
//             items-center
//             justify-center
//             bg-white/15
//           "
//         >
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//             <path
//               d="M10 12L6 8L10 4"
//               stroke="white"
//               strokeWidth="1.6"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>

//         {/* RIGHT ARROW (hide in mobile) */}
//         <button
//           className="
//             hidden md:flex
//             absolute
//             z-20
//             right-0
//             top-1/2
//             -translate-y-1/2
//             w-7
//             h-20
//             items-center
//             justify-center
//             bg-white/15
//           "
//         >
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//             <path
//               d="M6 12L10 8L6 4"
//               stroke="white"
//               strokeWidth="1.6"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>

//         {/* LEFT TEXT */}
//         <div
//           className="
//             relative
//             z-10
//             flex
//             flex-col
//             justify-center
//             text-white
//             p-6 md:px-10
//             w-full md:w-[570.71px]
//             h-auto md:h-full
//           "
//         >
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
//             Learn something <br /> new everyday.
//           </h1>

//           <p className="text-sm opacity-90 mb-6">
//             Become professionals and ready to join the world.
//           </p>

//           <button
//             className="
//               bg-white
//               text-[#501A5F]
//               font-semibold
//               px-6
//               py-2
//               rounded-full
//               w-fit
//             "
//           >
//             Explore After Effects
//           </button>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div
//           className="relative w-full md:w-[689.04px] h-[240px] md:h-[419px]"
//         >
//           <img
//             src={placeholder}
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* DOTS OUTSIDE */}
//       <div className="flex items-center gap-3 mt-3">
//         <div className="w-2.5 h-2.5 rounded-full bg-[#E10051]" />
//         <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
//         <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
//         <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import placeholder from "../assets/placeholder.png";

// export default function Hero() {
//   return (
//     <div className="w-full flex flex-col items-center px-4 sm:px-6">
//       {/* HERO CARD */}
//       <div
//         className="
//           relative
//           w-full
//           max-w-[1259.75px]
//           rounded-xl
//           overflow-hidden
//           flex flex-col md:flex-row
//           mx-auto
//           h-auto md:h-[419px]
//         "
//       >
//         {/* BASE PURPLE */}
//         <div className="absolute inset-0 bg-[#501A5F]" />

//         {/* LEFT ARROW DESKTOP */}
//         <button
//           className="
//             hidden md:flex
//             absolute
//             z-20
//             left-0
//             top-1/2
//             -translate-y-1/2
//             w-7
//             h-20
//             items-center
//             justify-center
//             bg-white/15
//           "
//         >
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//             <path
//               d="M10 12L6 8L10 4"
//               stroke="white"
//               strokeWidth="1.6"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>

//         {/* RIGHT ARROW DESKTOP */}
//         <button
//           className="
//             hidden md:flex
//             absolute
//             z-20
//             right-0
//             top-1/2
//             -translate-y-1/2
//             w-7
//             h-20
//             items-center
//             justify-center
//             bg-white/15
//           "
//         >
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//             <path
//               d="M6 12L10 8L6 4"
//               stroke="white"
//               strokeWidth="1.6"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>

//         {/* LEFT TEXT */}
//         <div
//           className="
//             relative
//             z-11
//             flex
//             flex-col
//             justify-center
//             text-white
//             p-6 md:px-10
//             w-full md:w-[570.71px]
//             h-auto md:h-full
//           "
//         >
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
//             Learn something <br /> new everyday.
//           </h1>

//           <p className="text-sm opacity-90 mb-6">
//             Become professionals and ready to join the world.
//           </p>

//           <button
//             className="
//               bg-white
//               text-[#501A5F]
//               font-semibold
//               px-6
//               py-2
//               rounded-full
//               w-fit
//             "
//           >
//             Explore After Effects
//           </button>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative w-full md:w-[689.04px] h-[240px] md:h-[419px]">
//           <img
//             src={placeholder}
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* DOTS OUTSIDE */}
//       <div className="flex items-center gap-3 mt-3">
//         <div className="w-2.5 h-2.5 rounded-full bg-[#E10051]" />
//         <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
//         <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
//         <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
//       </div>
//     </div>
//   );
// }
import React from "react";
import big from "../assets/big.jpeg";

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6">
      {/* HERO CARD */}
      <div
        className="
          relative
          w-full
          max-w-[1259.75px]
          rounded-xl
          overflow-hidden
          flex flex-col md:flex-row
          mx-auto
          h-auto md:h-[419px]
        "
      >
        {/* BASE PURPLE */}
        <div className="absolute inset-0 bg-[#501A5F]" />

        {/* LEFT ARROW DESKTOP */}
        <button
          className="
            hidden md:flex
            absolute
            z-20
            left-0
            top-1/2
            -translate-y-1/2
            w-7
            h-20
            items-center
            justify-center
            bg-white/15
          "
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* RIGHT ARROW DESKTOP */}
        <button
          className="
            hidden md:flex
            absolute
            z-20
            right-0
            top-1/2
            -translate-y-1/2
            w-7
            h-20
            items-center
            justify-center
            bg-white/15
          "
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* LEFT TEXT */}
        <div
          className="
            relative
            z-11
            flex
            flex-col
            justify-center
            text-white
            p-6 md:px-10
            w-full md:w-[570.71px]
            h-auto md:h-full
          "
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
            Learn something <br /> new everyday.
          </h1>

          <p className="text-sm opacity-90 mb-6">
            Become professionals and ready to join the world.
          </p>

          <button
            className="
              bg-white
              text-[#501A5F]
              font-semibold
              px-6
              py-2
              rounded-full
              w-fit
            "
          >
            Explore After Effects
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full md:w-[689.04px] h-[240px] md:h-[419px]">
          <img
            src={big}
            alt="Hero Banner"
            className="w-full h-full object-cover object-left"
          />
        </div>
      </div>

      {/* DOTS OUTSIDE */}
      <div className="flex items-center gap-3 mt-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#E10051]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
      </div>
    </div>
  );
}
