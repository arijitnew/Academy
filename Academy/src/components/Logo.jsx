import React from "react";

// Import each logo
import logo1 from "../assets/yourstory.png";
import logo2 from "../assets/placeholder.png";
import logo3 from "../assets/TOI.png";
import logo4 from "../assets/placeholder.png";
import logo5 from "../assets/placeholder.png";

const logos = [
  { id: 1, name: "YourStory", image: logo1 },
  { id: 2, name: "The Economic Times", image: logo2 },
  { id: 3, name: "The Times of India", image: logo3 },
  { id: 4, name: "Goa Times", image: logo4 },
  { id: 5, name: "The Goan", image: logo5 },
];

export default function AsSeenOn() {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-full max-w-6xl px-4">

        {/* Heading */}
        <h2 className="text-center text-xl font-semibold mb-4">
          As seen on
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center sm:justify-between gap-6 sm:gap-10">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center w-24 sm:w-32"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="w-full h-auto object-contain opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// import React from "react";

// Import each logo
// import logo1 from "../assets/yourstory.png";
// import logo2 from "../assets/placeholder.png";
// import logo3 from "../assets/TOI.png";
// import logo4 from "../assets/placeholder.png";
// import logo5 from "../assets/placeholder.png";

// const logos = [
//   { id: 1, name: "YourStory", image: logo1 },
//   { id: 2, name: "The Economic Times", image: logo2 },
//   { id: 3, name: "The Times of India", image: logo3 },
//   { id: 4, name: "Goa Times", image: logo4 },
//   { id: 5, name: "The Goan", image: logo5 },
// ];

// export default function AsSeenOn() {
//   return (
//     <section className="w-full flex justify-center py-10 px-0">
//       <div className="w-full max-w-[1290px] px-0">

//         {/* Heading */}
//         <h2 className="text-center text-xl font-semibold mb-4">
//           As seen on
//         </h2>

//         {/* Logos */}
//         <div className="flex flex-wrap justify-center sm:justify-between gap-6 sm:gap-10 w-full">
//           {logos.map((logo) => (
//             <div
//               key={logo.id}
//               className="flex items-center justify-center w-24 sm:w-32"
//             >
//               <img
//                 src={logo.image}
//                 alt={logo.name}
//                 className="w-full h-auto object-contain opacity-80"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
