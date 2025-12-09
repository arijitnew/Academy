// import React from "react";
// import google from "../assets/goo.png";
// import capterra from "../assets/capterra.png";
// import g2 from "../assets/g2.png";

// export default function Ratings() {
//   const reviews = [
//     {
//       name: "Google",
//       logo: google,
//       rating: "4.6/5",
//     },
//     {
//       name: "Capterra",
//       logo: capterra,
//       rating: "4.7/5",
//     },
//     {
//       name: "G2",
//       logo: g2,
//       rating: "4.6/5",
//     },
//   ];

//   return (
//     <div className="w-full flex justify-center mt-10">
//       <div className="flex gap-0">
//         {reviews.map((item, i) => (
//           <div
//             key={i}
//             className="
//               flex items-center
//               bg-white
//               border border-gray-200
//               py-3 px-6
//               shadow-sm
//               hover:shadow-md
//               transition
//               first:rounded-l-lg
//               last:rounded-r-lg
//               rounded-none
//             "
//           >
//             {/* Logo */}
//             <img
//               src={item.logo}
//               alt={item.name}
//               className="h-5 object-contain mr-2"
//             />

//             {/* Stars + Score */}
//             <div className="flex items-center gap-0.5">
//               {[1, 2, 3, 4, 5].map((_, index) => (
//                 <svg
//                   key={index}
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-4 h-4 text-[#E10051] fill-[#E10051]"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.688a1 1 0 00.95.69h3.874c.969 0 1.371 1.24.588 1.81l-3.134 2.27a1 1 0 00-.364 1.118l1.2 3.688c.3.921-.755 1.688-1.54 1.118l-3.134-2.27a1 1 0 00-1.176 0l-3.134 2.27c-.785.57-1.84-.197-1.54-1.118l1.2-3.688a1 1 0 00-.364-1.118l-3.134-2.27c-.783-.57-.38-1.81.588-1.81h3.874a1 1 0 00.95-.69l1.2-3.688z"/>
//                 </svg>
//               ))}

//               {/* Score */}
//               <span className="text-sm text-[#111] font-medium ml-2">
//                 {item.rating}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";
import google from "../assets/goo.png";
import capterra from "../assets/capterra.png";
import g2 from "../assets/g2.png";
import RatingStars from "./RatingStars";

export default function Ratings() {
  const reviews = [
    { name: "Google", logo: google, rating: "4.6/5" },
    { name: "Capterra", logo: capterra, rating: "4.7/5" },
    { name: "G2", logo: g2, rating: "4.6/5" },
  ];

  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div
        className="
          w-full max-w-[900px]
          flex flex-col md:flex-row
          items-center md:items-stretch
          justify-center
          gap-4 md:gap-2
        "
      >
        {reviews.map((item, i) => (
          <div
            key={i}
            className="
              flex items-center
              bg-white border border-gray-200
              rounded-xl
              py-3 px-4 md:px-6
              shadow-sm hover:shadow-md transition
              w-[250px] md:w-auto
            "
          >
            {/* Logo */}
            <img
              src={item.logo}
              alt={item.name}
              className="h-11 w-auto object-contain mr-3"
            />

            {/* Stars + Score */}
            <div className="flex items-center gap-2">
              {/* Static 4.5 stars */}
              <RatingStars rating={4.5} />

              <span className="text-sm text-[#111] font-medium">
                {item.rating}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
