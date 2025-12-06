// import React from "react";

// export default function TechStack() {
//   return (
//     <div className="w-full flex justify-center mt-16 px-4">
//       {/* Exact Figma size */}
//       <div
//         className="
//           relative
//           w-[1290px]
//           h-[324px]
//           rounded-xl
//           overflow-hidden
//           flex
//           items-center
//           px-10
//           border border-black
//         "
//         style={{
//           background:
//             "linear-gradient(90deg, rgba(225,0,81,0.14) 0%, #501A5F 100%)",
//         }}
//       >
//         {/* LEFT TEXT BLOCK */}
//         <div className="w-[45%] text-black z-10">
//           <p className="text-sm opacity-100 mb-1 font-bold">Something Goes Here</p>

//           <h2 className="text-3xl font-bold leading-snug mb-3">
//             Tech Stack We Will Use <br /> For Our Students
//           </h2>

//           <p className="text-[15px] opacity-80 mb-5 leading-relaxed">
//             There are many variations of passages of Lorem Ipsum available
//           </p>

//           <button
//             className="
//               bg-[#E10051]
//               text-white
//               font-medium
//               px-5
//               py-2.5
//               text-sm
//               rounded-full
//             "
//           >
//             Explore Course
//           </button>
//         </div>

//         {/* LOGO LAYER (ONLY LOGO 1 FOR NOW) */}
//         <div className="absolute top-[115px] left-[560px] rotate-[26deg]">
//   <div className="w-[96px] h-[96px] rounded-[20px] bg-[#8A34CD] flex items-center justify-center shadow-lg">
//     <span className="text-white text-xs font-semibold">
//       Logo 1
//     </span>
//   </div>
// </div>
//  {/* LOGO 2 – Pink tile under Logo 1 */}
// {/* LOGO 2 – pink tile under Logo 1 */}
// <div className="absolute top-[217px] left-[560px] rotate-[85deg]">
//   <div className="w-[66px] h-[66px] rounded-[20px] bg-[#E71B89] flex items-center justify-center shadow-lg">
//     <span className="text-white text-[10px] font-semibold">
//       Logo 2
//     </span>
//   </div>
// </div>
//  {/* LOGO 3 – Purple top-center */}
// <div className="absolute top-[63px] left-[721px] rotate-[162deg]">
//   <div className="w-[106px] h-[106px] rounded-[20px] bg-[#5506FD] flex items-center justify-center shadow-lg">
//     <span className="text-white text-[12px] font-semibold">
//       Logo 3
//     </span>
//   </div>
// </div>
//   {/* LOGO 4 – green tile */}
// <div className="absolute top-[230px] left-[803px] rotate-[77deg]">
//   <div className="w-[79px] h-[79px] rounded-[20px] bg-[#37E954] flex items-center justify-center shadow-lg">
//     <span className="text-white text-[10px] font-semibold">
//       Logo 4
//     </span>
//   </div>
// </div>

// {/* LOGO 5 – yellow tile */}
// <div className="absolute top-[146px] left-[902px] rotate-[-76deg]">
//   <div className="w-[79px] h-[79px] rounded-[20px] bg-[#F0D824] flex items-center justify-center shadow-lg">
//     <span className="text-white text-[10px] font-semibold">
//       Logo 5
//     </span>
//   </div>
// </div>

// {/* LOGO 6 – Blue tile */}
// <div className="absolute top-[68px] left-[959px] rotate-[75deg]">
//   <div className="w-[100px] h-[100px] rounded-[20px] bg-[#34CEF1] flex items-center justify-center shadow-lg">
//     <span className="text-white text-[12px] font-semibold">
//       Logo 6
//     </span>
//   </div>
// </div>

// {/* LOGO 7 – Pink-purple tile */}
// <div className="absolute top-[225px] left-[1027px] rotate-[-160deg]">
//   <div className="w-[94px] h-[94px] rounded-[20px] bg-[#CB37FF] flex items-center justify-center shadow-lg">
//     <span className="text-white text-[12px] font-semibold">
//       Logo 7
//     </span>
//   </div>
// </div>

// {/* LOGO 8 – orange tile */}
// <div className="absolute top-[3px] left-[1080px] rotate-[-47deg]">
//   <div className="w-[64px] h-[64px] rounded-[20px] bg-[#FFA53C] flex items-center justify-center shadow-lg">
//     <span className="text-white text-[10px] font-semibold">
//       Logo 8
//     </span>
//   </div>
// </div>

// {/* LOGO 9 – red tile */}
// <div className="absolute top-[153px] left-[1168px] rotate-[51deg]">
//   <div className="w-[120px] h-[120px] rounded-[20px] bg-[#FF2727] flex items-center justify-center shadow-lg">
//     <span className="text-white text-[14px] font-semibold">
//       Logo 9
//     </span>
//   </div>
// </div>


//       </div>
//     </div>
//   );
// }
import React from "react";

export default function TechStack() {
  return (
    <div className="w-full flex justify-center mt-16 px-4">
      <div
        className="
          w-full
          max-w-[1290px]
          rounded-xl
          overflow-hidden
          border border-black/20
        "
        style={{
          background:
            "linear-gradient(90deg, rgba(225,0,81,0.14) 0%, #501A5F 100%)",
        }}
      >
        {/* ===== DESKTOP / TABLET (md and up) – exact Figma layout ===== */}
        <div className="hidden md:flex relative w-full h-[324px] items-center px-6 lg:px-10">
          {/* LEFT TEXT BLOCK */}
          <div className="w-[45%] text-black z-10">
            <p className="text-sm opacity-100 mb-1 font-bold">
              Something Goes Here
            </p>

            <h2 className="text-3xl font-bold leading-snug mb-3">
              Tech Stack We Will Use <br /> For Our Students
            </h2>

            <p className="text-[15px] opacity-80 mb-5 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available
            </p>

            <button
              className="
                bg-[#E10051]
                text-white
                font-medium
                px-5
                py-2.5
                text-sm
                rounded-full
              "
            >
              Explore Course
            </button>
          </div>

          {/* LOGO LAYER – exact positions */}
          {/* LOGO 1 */}
          <div className="absolute top-[115px] left-[560px] rotate-[26deg]">
            <div className="w-[96px] h-[96px] rounded-[20px] bg-[#8A34CD] flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-semibold">Logo 1</span>
            </div>
          </div>

          {/* LOGO 2 */}
          <div className="absolute top-[217px] left-[560px] rotate-[85deg]">
            <div className="w-[66px] h-[66px] rounded-[20px] bg-[#E71B89] flex items-center justify-center shadow-lg">
              <span className="text-white text-[10px] font-semibold">
                Logo 2
              </span>
            </div>
          </div>

          {/* LOGO 3 */}
          <div className="absolute top-[63px] left-[721px] rotate-[162deg]">
            <div className="w-[106px] h-[106px] rounded-[20px] bg-[#5506FD] flex items-center justify-center shadow-lg">
              <span className="text-white text-[12px] font-semibold">
                Logo 3
              </span>
            </div>
          </div>

          {/* LOGO 4 */}
          <div className="absolute top-[230px] left-[803px] rotate-[77deg]">
            <div className="w-[79px] h-[79px] rounded-[20px] bg-[#37E954] flex items-center justify-center shadow-lg">
              <span className="text-white text-[10px] font-semibold">
                Logo 4
              </span>
            </div>
          </div>

          {/* LOGO 5 */}
          <div className="absolute top-[146px] left-[902px] rotate-[-76deg]">
            <div className="w-[79px] h-[79px] rounded-[20px] bg-[#F0D824] flex items-center justify-center shadow-lg">
              <span className="text-white text-[10px] font-semibold">
                Logo 5
              </span>
            </div>
          </div>

          {/* LOGO 6 */}
          <div className="absolute top-[68px] left-[959px] rotate-[75deg]">
            <div className="w-[100px] h-[100px] rounded-[20px] bg-[#34CEF1] flex items-center justify-center shadow-lg">
              <span className="text-white text-[12px] font-semibold">
                Logo 6
              </span>
            </div>
          </div>

          {/* LOGO 7 */}
          <div className="absolute top-[225px] left-[1027px] rotate-[-160deg]">
            <div className="w-[94px] h-[94px] rounded-[20px] bg-[#CB37FF] flex items-center justify-center shadow-lg">
              <span className="text-white text-[12px] font-semibold">
                Logo 7
              </span>
            </div>
          </div>

          {/* LOGO 8 */}
          <div className="absolute top-[3px] left-[1080px] rotate-[-47deg]">
            <div className="w-[64px] h-[64px] rounded-[20px] bg-[#FFA53C] flex items-center justify-center shadow-lg">
              <span className="text-white text-[10px] font-semibold">
                Logo 8
              </span>
            </div>
          </div>

          {/* LOGO 9 */}
          <div className="absolute top-[153px] left-[1168px] rotate-[51deg]">
            <div className="w-[120px] h-[120px] rounded-[20px] bg-[#FF2727] flex items-center justify-center shadow-lg">
              <span className="text-white text-[14px] font-semibold">
                Logo 9
              </span>
            </div>
          </div>
        </div>

        {/* ===== MOBILE (below md) – stacked layout ===== */}
        <div className="flex md:hidden flex-col items-center text-center py-8 px-5">
          <p className="text-xs font-semibold mb-1">Something Goes Here</p>

          <h2 className="text-2xl font-bold leading-snug mb-3">
            Tech Stack We Will Use <br /> For Our Students
          </h2>

          <p className="text-[13px] opacity-80 mb-5 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available
          </p>

          <button className="bg-[#E10051] text-white font-medium px-5 py-2 text-sm rounded-full">
            Explore Course
          </button>

          {/* simple responsive grid of logos */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="w-20 h-20 rounded-[20px] bg-[#8A34CD] flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-semibold">Logo 1</span>
            </div>
            <div className="w-16 h-16 rounded-[20px] bg-[#E71B89] flex items-center justify-center shadow-lg mx-auto">
              <span className="text-white text-[10px] font-semibold">
                Logo 2
              </span>
            </div>
            <div className="w-20 h-20 rounded-[20px] bg-[#5506FD] flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-semibold">Logo 3</span>
            </div>
            <div className="w-16 h-16 rounded-[20px] bg-[#37E954] flex items-center justify-center shadow-lg mx-auto">
              <span className="text-white text-[10px] font-semibold">
                Logo 4
              </span>
            </div>
            <div className="w-16 h-16 rounded-[20px] bg-[#F0D824] flex items-center justify-center shadow-lg mx-auto">
              <span className="text-white text-[10px] font-semibold">
                Logo 5
              </span>
            </div>
            <div className="w-20 h-20 rounded-[20px] bg-[#34CEF1] flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-semibold">Logo 6</span>
            </div>
            <div className="w-20 h-20 rounded-[20px] bg-[#CB37FF] flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-semibold">Logo 7</span>
            </div>
            <div className="w-16 h-16 rounded-[20px] bg-[#FFA53C] flex items-center justify-center shadow-lg mx-auto">
              <span className="text-white text-[10px] font-semibold">
                Logo 8
              </span>
            </div>
            <div className="w-20 h-20 rounded-[20px] bg-[#FF2727] flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-semibold">Logo 9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


