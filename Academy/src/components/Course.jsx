import React from "react";

export default function CourseHighlightBanner() {
  return (
    <section className="w-full flex justify-center mt-16 px-4">
      <div
        className="
          w-full
          max-w-[1290px]
          rounded-2xl
          text-white
          flex
          flex-col
          items-center
          justify-center
          text-center
          py-16
        "
        style={{
          background:
            "linear-gradient(90deg, rgba(225,0,81,0.14) 0%, #501A5F 100%)",
        }}
      >
        <p className="text-sm font-semibold tracking-wide opacity-90">
          Something Goes Here
        </p>

        <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-tight">
          Random Title Here
        </h2>

        <p className="mt-4 text-sm md:text-base max-w-lg opacity-90">
          There are many variations of passages of Lorem Ipsum available
        </p>

        <button
          className="
            mt-7
            px-7
            py-3
            rounded-full
            bg-white
            text-[#E10051]
            font-semibold
            text-sm
            shadow-md
            hover:bg-[#FFE2EE]
            transition-all
            duration-200
          "
        >
          Explore Course
        </button>
      </div>
    </section>
  );
}

