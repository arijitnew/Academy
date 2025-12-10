// import React from "react";
// import placeholder from "../assets/placeholder.png";

// export default function GrowSkillSection() {
//   return (
//     <section className="w-full flex justify-center py-10">
//       <div className="w-full max-w-6xl px-4">
//         {/* Main layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

//           {/* Left Image */}
//           <div className="flex justify-center">
//             <img
//               src={placeholder}
//               alt="Illustration"
//               className="w-full max-w-md lg:max-w-full object-contain"
//             />
//           </div>

//           {/* Right Content */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3">
//               Grow Your Skill <br /> With Title Here
//             </h2>

//             <p className="text-gray-600 text-sm mb-4 max-w-md">
//               It is a long established fact that a reader will be distracted by
//               the readable content of a page when looking at its layout.
//             </p>

//             {/* Bullet List */}
//             <ul className="space-y-2 text-sm text-gray-700 mb-6">
//               <li className="flex items-center gap-2">
//                 <span className="text-green-500 text-lg">✓</span>
//                 Certification
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-green-500 text-lg">✓</span>
//                 Certification
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-green-500 text-lg">✓</span>
//                 Certification
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-green-500 text-lg">✓</span>
//                 Certification
//               </li>
//             </ul>

//             {/* CTA Button */}
//             <button className="bg-[#E10051] text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
//               Explore Course
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import React from "react";
// import placeholder from "../assets/placeholder.png";

// export default function GrowSkillSection() {
//   return (
//     <section className="w-full flex justify-center mt-16">
//       <div
//         className="
//           w-full
//           max-w-[1290px]
//           overflow-hidden
//           bg-white
//         "
//       >
//         {/* DESKTOP */}
//         <div className="hidden md:grid grid-cols-2 w-full">
          
//           {/* LEFT IMAGE */}
//           <div className="w-full">
//             <img
//               src={placeholder}
//               alt="Grow Skill Illustration"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="w-full">
//             <div className="p-6 lg:p-10">
//               <h2 className="text-3xl font-bold leading-snug mb-4">
//                 Grow Your Skill <br /> With Title Here
//               </h2>

//               <p className="text-[15px] opacity-80 mb-5 leading-relaxed">
//                 It is a long established fact that a reader will be distracted by
//                 the readable content of a page when looking at its layout.
//               </p>

//               <ul className="space-y-2 text-sm font-medium text-gray-800 mb-6">
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500 text-lg">✓</span>
//                   Certification
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500 text-lg">✓</span>
//                   Certification
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500 text-lg">✓</span>
//                   Certification
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500 text-lg">✓</span>
//                   Certification
//                 </li>
//               </ul>

//               <button className="bg-[#E10051] text-white font-medium px-6 py-2.5 text-sm rounded-full">
//                 Explore Course
//               </button>
//             </div>
//           </div>

//         </div>

//         {/* MOBILE */}
//         <div className="flex md:hidden flex-col w-full">
          
//           <img
//             src={placeholder}
//             alt="Grow Skill"
//             className="w-full h-auto object-cover"
//           />

//           <div className="p-4 text-center">
//             <h2 className="text-2xl font-bold leading-snug mb-3">
//               Grow Your Skill <br /> With Title Here
//             </h2>

//             <p className="text-[13px] opacity-80 mb-5 leading-relaxed">
//               It is a long established fact that a reader will be distracted by
//               the readable content of a page when looking at its layout.
//             </p>

//             <ul className="space-y-2 text-sm text-gray-700 font-medium mb-6">
//               <li className="flex items-center gap-2 justify-center">
//                 <span className="text-green-500 text-lg">✓</span>
//                 Certification
//               </li>
//               <li className="flex items-center gap-2 justify-center">
//                 <span className="text-green-500 text-lg">✓</span>
//                 Certification
//               </li>
//               <li className="flex items-center gap-2 justify-center">
//                 <span className="text-green-500 text-lg">✓</span>
//                 Certification
//               </li>
//               <li className="flex items-center gap-2 justify-center">
//                 <span className="text-green-500 text-lg">✓</span>
//                 Certification
//               </li>
//             </ul>

//             <button className="bg-[#E10051] text-white font-medium px-6 py-2 rounded-full">
//               Explore Course
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
import React from "react";
import growImg from "../assets/Grow.jpeg"; // use your actual file name

export default function GrowSkillSection() {
  return (
    <section className="w-full flex justify-center mt-16">
      <div className="w-full max-w-[1290px] overflow-hidden bg-white">
        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-2 w-full items-center gap-8">
          {/* LEFT IMAGE – full image, nice big size, no crop */}
          <div className="w-full flex justify-center">
            <img
              src={growImg}
              alt="Grow Skill Illustration"
              className="
                w-full
                max-w-[460px]   /* control how big it looks */
                h-auto
                rounded-xl
                object-contain
              "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full">
            <div className="p-6 lg:p-10">
              <h2 className="text-3xl font-bold leading-snug mb-4">
                Grow Your Skill <br /> With Title Here
              </h2>

              <p className="text-[15px] opacity-80 mb-5 leading-relaxed">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>

              <ul className="space-y-2 text-sm font-medium text-gray-800 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  Certification
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  Certification
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  Certification
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  Certification
                </li>
              </ul>

              <button className="bg-[#E10051] text-white font-medium px-6 py-2.5 text-sm rounded-full">
                Explore Course
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden flex-col w-full">
          <img
            src={growImg}
            alt="Grow Skill"
            className="w-full h-auto object-cover"
          />

          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold leading-snug mb-3">
              Grow Your Skill <br /> With Title Here
            </h2>

            <p className="text-[13px] opacity-80 mb-5 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <ul className="space-y-2 text-sm text-gray-700 font-medium mb-6">
              <li className="flex items-center gap-2 justify-center">
                <span className="text-green-500 text-lg">✓</span>
                Certification
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="text-green-500 text-lg">✓</span>
                Certification
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="text-green-500 text-lg">✓</span>
                Certification
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="text-green-500 text-lg">✓</span>
                Certification
              </li>
            </ul>

            <button className="bg-[#E10051] text-white font-medium px-6 py-2 rounded-full">
              Explore Course
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}