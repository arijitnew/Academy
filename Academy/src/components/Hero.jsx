
// import React from "react";
// import placeholder from"../assets/placeholder.png"
// export default function Hero() {
//   return (
//     <div
//       className="
//         w-full
//         max-w-[1259.75px]
//         h-[419px]
//         rounded-xl
//         overflow-hidden
//         relative
//         mx-auto
//         flex
//       "
//     >
//       {/* BASE PURPLE */}
//       <div className="absolute inset-0 bg-[#501A5F]" />

//       {/* GRADIENT UNDER TEXT */}
//       <div
//         className="absolute inset-y-0 left-0"
//         style={{
//           width: "570.71px",
//           background:
//             "linear-gradient(90deg, #501A5F 0%, #501A5F 65%, #C5322A 75%, #C5322A 100%)",
//         }}
//       />

//       {/* LEFT CONTENT (570.71px) */}
//       <div
//         className="
//           relative
//           z-10
//           flex
//           flex-col
//           justify-center
//           text-white
//           px-10
//         "
//         style={{ width: "570.71px" }}
//       >
//         <h1 className="text-5xl font-bold leading-tight mb-3">
//           Learn something <br /> new everyday.
//         </h1>

//         <p className="text-sm opacity-90 mb-6">
//           Become professionals and ready to join the world.
//         </p>

//         <button
//           className="
//             bg-white
//             text-[#501A5F]
//             font-semibold
//             px-6
//             py-2
//             rounded-full
//             w-fit
//           "
//         >
//           Explore After Effects
//         </button>
//       </div>

//       {/* RIGHT IMAGE (689.04px × 419px) */}
//       <div
//         className="relative"
//         style={{ width: "689.04px", height: "419px" }}
//       >
//         <img
//           src={placeholder}
//           alt=""
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }
import React from "react";
import placeholder from "../assets/placeholder.png";

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* HERO CARD */}
      <div
        className="
          relative
          w-full
          max-w-[1259.75px]
          h-[419px]
          rounded-xl
          overflow-hidden
          flex
          mx-auto
        "
      >
        {/* BASE PURPLE */}
        <div className="absolute inset-0 bg-[#501A5F]" />

        {/* GRADIENT */}
        <div
          className="absolute inset-y-0 left-0"
          style={{
            width: "570.71px",
            background:
              "linear-gradient(90deg, #501A5F 0%, #501A5F 65%, #C5322A 75%, #C5322A 100%)",
          }}
        />

        {/* LEFT ARROW */}
        <button
          className="
            absolute
            z-20
            left-0
            top-1/2
            -translate-y-1/2
            w-7
            h-20
            flex
            items-center
            justify-center
            bg-white/15
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* RIGHT ARROW */}
        <button
          className="
            absolute
            z-20
            right-0
            top-1/2
            -translate-y-1/2
            w-7
            h-20
            flex
            items-center
            justify-center
            bg-white/15
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
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
            z-10
            flex
            flex-col
            justify-center
            text-white
            px-10
          "
          style={{ width: "570.71px" }}
        >
          <h1 className="text-5xl font-bold leading-tight mb-3">
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
        <div
          className="relative"
          style={{ width: "689.04px", height: "419px" }}
        >
          <img
            src={placeholder}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* DOTS OUTSIDE */}
   {/* DOTS OUTSIDE */}
<div className="flex items-center gap-3 mt-3">
  {/* Active dot (big, pink) */}
  <div className="w-2.5 h-2.5 rounded-full bg-[#E10051]" />

  {/* Inactive dots (small, gray) */}
  <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
  <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
  <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
</div>

    </div>
  );
}










