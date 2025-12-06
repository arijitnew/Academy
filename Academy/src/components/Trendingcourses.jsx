
// import React from "react";
// import placeholder from "../assets/placeholder.png";

// const courses = [
//   {
//     id: 1,
//     title: "Design Fundamentals",
//     instructor: "Nigel Quadros",
//     description:
//       "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
//     price: "$24.92",
//     oldPrice: "$32.90",
//     ratingText: "(1.2K)",
//     showViews: true,
//   },
//   {
//     id: 2,
//     title: "Ionic - Build iOS, Android & Web",
//     instructor: "Nigel Quadros",
//     description:
//       "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
//     price: "$24.92",
//     oldPrice: "$32.90",
//     ratingText: "(1.2K)",
//   },
//   {
//     id: 3,
//     title: "Bootcamp Vue.js Web Framework",
//     instructor: "Nigel Quadros",
//     description:
//       "Learn how to make web application with Vue.js Framework.",
//     price: "$24.92",
//     oldPrice: "$32.90",
//     ratingText: "(1.2K)",
//   },
//   {
//     id: 4,
//     title: "Bootcamp Vue.js Web Framework",
//     instructor: "Nigel Quadros",
//     description:
//       "Learn how to make web application with Vue.js Framework.",
//     price: "$24.92",
//     oldPrice: "$32.90",
//     ratingText: "(1.2K)",
//   },
// ];

// function CourseCard({ course }) {
//   return (
//     <div className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden w-full">
//       {/* Thumbnail with badges */}
//       <div className="relative w-full h-32">
//         <img
//           src={placeholder}
//           alt={course.title}
//           className="w-full h-full object-cover"
//         />

//         {/* Top-left badges */}
//         <div className="absolute top-2 left-2 flex gap-2 text-[10px] font-semibold">
//           <span className="px-2 py-[3px] rounded-full bg-[#00C853] text-white">
//             Best Seller
//           </span>
//           <span className="px-2 py-[3px] rounded-full bg-[#E100FF] text-white">
//             20% OFF
//           </span>
//         </div>

//         {/* 100K+ badge on first card */}
//         {course.showViews && (
//           <div className="absolute top-2 right-2 px-2 py-[3px] rounded-full bg-black/70 text-white text-[10px] font-semibold">
//             100K+
//           </div>
//         )}
//       </div>

//       {/* Text content */}
//       <div className="px-4 pt-3 pb-4">
//         <h3 className="text-[14px] font-semibold mt-[2px] leading-snug">
//           {course.title}
//         </h3>
//         <p className="text-[12px] text-gray-500 mt-[2px] flex items-center gap-1">
//   <span role="img" aria-label="user">👤</span>
//   {course.instructor}
// </p>



//         <p className="text-[11px] text-gray-500 mt-1 leading-snug line-clamp-2">
//           {course.description}
//         </p>

//         {/* Rating */}
//         {/* <div className="flex items-center gap-1 text-[11px] mt-2">
//           <span className="text-yellow-400 text-[13px]">★★★★★</span>
//           <span className="text-gray-500">{course.ratingText}</span>
//         </div> */}
//         {/* Rating */}
// <div className="flex items-center gap-1 text-[11px] mt-2">
//   <div className="flex items-center text-yellow-400 text-[13px] leading-none">
//     <span>★</span>
//     <span>★</span>
//     <span>★</span>
//     <span>★</span>

//     {/* HALF STAR */}
//     <span className="relative inline-block">
//       {/* outline star */}
//       <span className="text-yellow-400/30">★</span>

//       {/* half overlay */}
//       <span
//         className="absolute top-0 left-0 overflow-hidden text-yellow-400"
//         style={{ width: "50%" }}
//       >
//         ★
//       </span>
//     </span>
//   </div>

//   <span className="text-gray-500">{course.ratingText}</span>
// </div>


//         {/* Price */}
//         <div className="flex items-center gap-2 mt-1">
//           <span className="text-[16px] font-bold">{course.price}</span>
//           <span className="text-[12px] text-gray-400 line-through">
//             {course.oldPrice}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function TrendingCourses() {
//   return (
//     <section className="w-full flex justify-center py-10">
//       <div className="w-full max-w-6xl px-4">
//         {/* Heading */}
//         <h2 className="text-center text-2xl font-bold mb-6">
//           Trending Courses
//         </h2>

//         {/* 2 equal halves on large screens, same height */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
//           {/* LEFT FEATURED CARD */}
//           <div className="h-full">
//             <div className="relative rounded-3xl overflow-hidden w-full h-full shadow-md">
//               <img
//                 src={placeholder}
//                 alt="Masterclass in Design Thinking"
//                 className="w-full h-full object-cover"
//               />

//               {/* Gradient overlay bottom */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

//               {/* Text inside card */}
//               <div className="absolute bottom-6 left-6 text-white">
//                 <p className="text-[13px] mb-1">Ana Kursova</p>
//                 <h3 className="text-xl font-semibold max-w-md leading-snug">
//                   Masterclass in Design Thinking, Innovation & Creativity
//                 </h3>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT GRID OF 4 CARDS */}
//           <div className="h-full">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {courses.map((course) => (
//                 <CourseCard key={course.id} course={course} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import placeholder from "../assets/placeholder.png";

const courses = [
  {
    id: 1,
    title: "Design Fundamentals",
    instructor: "Nigel Quadros",
    description:
      "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    price: "$24.92",
    oldPrice: "$32.90",
    ratingText: "(1.2K)",
    showViews: true,
  },
  {
    id: 2,
    title: "Ionic - Build iOS, Android & Web",
    instructor: "Nigel Quadros",
    description:
      "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    price: "$24.92",
    oldPrice: "$32.90",
    ratingText: "(1.2K)",
  },
  {
    id: 3,
    title: "Bootcamp Vue.js Web Framework",
    instructor: "Nigel Quadros",
    description:
      "Learn how to make web application with Vue.js Framework.",
    price: "$24.92",
    oldPrice: "$32.90",
    ratingText: "(1.2K)",
  },
  {
    id: 4,
    title: "Bootcamp Vue.js Web Framework",
    instructor: "Nigel Quadros",
    description:
      "Learn how to make web application with Vue.js Framework.",
    price: "$24.92",
    oldPrice: "$32.90",
    ratingText: "(1.2K)",
  },
];

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden w-full">
      {/* Thumbnail with badges */}
      <div className="relative w-full h-32">
        <img
          src={placeholder}
          alt={course.title}
          className="w-full h-full object-cover"
        />

        {/* Top-left badges */}
        <div className="absolute top-2 left-2 flex gap-2 text-[10px] font-semibold">
          <span className="px-2 py-[3px] rounded-full bg-[#00C853] text-white">
            Best Seller
          </span>
          <span className="px-2 py-[3px] rounded-full bg-[#E100FF] text-white">
            20% OFF
          </span>
        </div>

        {/* 100K+ badge on first card */}
        {course.showViews && (
          <div className="absolute top-2 right-2 px-2 py-[3px] rounded-full bg-black/70 text-white text-[10px] font-semibold">
            100K+
          </div>
        )}
      </div>

      {/* Text content */}
      <div className="px-4 pt-3 pb-4">
        <h3 className="text-[14px] font-semibold mt-[2px] leading-snug">
          {course.title}
        </h3>

        <p className="text-[12px] text-gray-500 mt-[2px] flex items-center gap-1">
          <span role="img" aria-label="user">
            👤
          </span>
          {course.instructor}
        </p>

        <p className="text-[11px] text-gray-500 mt-1 leading-snug line-clamp-2">
          {course.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-[11px] mt-2">
          <div className="flex items-center text-yellow-400 text-[13px] leading-none">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>

            {/* HALF STAR */}
            <span className="relative inline-block">
              {/* outline star */}
              <span className="text-yellow-400/30">★</span>

              {/* half overlay */}
              <span
                className="absolute top-0 left-0 overflow-hidden text-yellow-400"
                style={{ width: "50%" }}
              >
                ★
              </span>
            </span>
          </div>

          <span className="text-gray-500">{course.ratingText}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[16px] font-bold">{course.price}</span>
          <span className="text-[12px] text-gray-400 line-through">
            {course.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TrendingCourses() {
    return (
      <section className="w-full flex justify-center mt-16 px-4">
        <div className="w-full max-w-[1290px] bg-white rounded-xl py-10 px-0">
  
          {/* Heading */}
          <h2 className="text-center text-2xl font-bold mb-8">
            Trending Courses
          </h2>
  
          {/* 2 equal halves on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
  
            {/* LEFT FEATURED CARD */}
            <div className="h-full">
              <div className="relative rounded-3xl overflow-hidden w-full h-full min-h-[260px] shadow-md">
                <img
                  src={placeholder}
                  alt="Masterclass in Design Thinking"
                  className="w-full h-full object-cover"
                />
  
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
  
                {/* Text */}
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[13px] mb-1">Ana Kursova</p>
                  <h3 className="text-xl font-semibold max-w-md leading-snug">
                    Masterclass in Design Thinking, Innovation & Creativity
                  </h3>
                </div>
              </div>
            </div>
  
            {/* RIGHT GRID OF 4 CARDS */}
            <div className="h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  

