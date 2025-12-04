// // src/components/PromoBanner.jsx
// import React from "react";

// export default function PromoBanner() {
//   return (
//     <div className="w-full bg-[#501A5F] text-center text-white text-sm py-2">
//       Use promo code <span className="font-bold">"nqacademy"</span> to avail 50% off
//     </div>
//   );
// }
// src/components/PromoBanner.jsx
import React from "react";

export default function PromoBanner() {
  return (
    <div className="w-full bg-[#501A5F] text-white">
      <div
        className="
          mx-auto
          max-w-[1194px]
          px-3
          py-2
          text-center
          text-xs
          sm:text-sm
          md:text-base
        "
      >
        Use promo code{" "}
        <span className="font-semibold">"nqacademy"</span> to avail 50% off
      </div>
    </div>
  );
}

