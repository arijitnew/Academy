// src/components/TopCourses.jsx
import React from "react";
import placeholder from "../assets/placeholder.png";
import RatingStars from "./RatingStars";

const categories = ["Design", "Developer", "Business", "Marketing", "Photography"];

const courses = new Array(8).fill({
  title: "Adobe Illustrator Scretch Course",
  instructor: "Nigel Quadros",
  ratingText: "(1.2K)",
  price: "24.92",
  oldPrice: "32.90",
  rating: 4.5,
});

export default function TopCourses() {
  return (
    <section className="w-full flex justify-center mt-16 px-4">
      <div className="w-full max-w-[1290px]">
        
        {/* Heading */}
        <h2 className="text-center font-semibold text-2xl md:text-3xl">
          Browse Our Top Courses
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`text-sm md:text-base ${
                index === 0
                  ? "font-semibold border-b-2 border-[#e10051] pb-1 text-black"
                  : "text-black/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden w-full">
      
      {/* Thumbnail */}
      <div className="relative w-full h-32">
        <img
          src={placeholder}
          alt={course.title}
          className="w-full h-full object-cover"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2 text-[10px] font-semibold">
          <span className="px-2 py-[3px] rounded-full bg-[#00C853] text-white">
            Best Seller
          </span>
          <span className="px-2 py-[3px] rounded-full bg-[#E100FF] text-white">
            20% OFF
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-3 pb-4">
        <h3 className="text-[14px] font-semibold leading-snug">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="text-[12px] text-[#e10051] mt-[2px] flex items-center gap-1 font-medium">
          <span role="img" aria-label="user">👤</span>
          {course.instructor}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-[11px] mt-2">
          <RatingStars rating={course.rating} />
          <span className="text-gray-500">{course.ratingText}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[16px] font-bold">${course.price}</span>
          <span className="text-[12px] text-gray-400 line-through">
            ${course.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

