import React from "react";

export default function Stats() {
  const stats = [
    {
      // people icon
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="3" stroke="#E10051" strokeWidth="1.8" />
          <circle cx="16" cy="8" r="2.5" stroke="#E10051" strokeWidth="1.8" />
          <path
            d="M5 18C5.8 15.8 7.7 14.5 9.9 14.5C12.1 14.5 14 15.8 14.8 18"
            stroke="#E10051"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M14.5 14C16.3 14.1 17.8 15 18.6 16.8"
            stroke="#E10051"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      value: "3.2K+",
      title: "Active Learners",
      subtitle: "Growing community",
    },

    {
      // book icon
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 5.5C7.7 4.8 9.3 4.5 11 4.5C12.7 4.5 14.3 4.8 16 5.5V18.5C14.3 17.8 12.7 17.5 11 17.5C9.3 17.5 7.7 17.8 6 18.5V5.5Z"
            stroke="#E10051"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 4.5V17.5"
            stroke="#E10051"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      value: "20+",
      title: "Expert Courses",
      subtitle: "Across all categories",
    },

    {
      // certificate icon
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="8"
            r="4"
            stroke="#E10051"
            strokeWidth="1.8"
          />
          <path
            d="M10 12L8.5 18L12 16L15.5 18L14 12"
            stroke="#E10051"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      value: "1.2K+",
      title: "Certificates Issued",
      subtitle: "Career advancement",
    },

    {
      // updated chart icon (no bottom line)
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* rising curve */}
          <path
            d="M6 16L10 12.5L13.5 14.5L18 9"
            stroke="#E10051"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* arrow head */}
          <path
            d="M15 9H18V12"
            stroke="#E10051"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      value: "100%",
      title: "Success Rate",
      subtitle: "Student satisfaction",
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto py-16">
      <div className="grid grid-cols-4 text-center gap-6">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            
            {/* Icon circle */}
            <div className="w-16 h-16 rounded-full bg-[#E10051]/10 flex items-center justify-center mb-4">
              {item.icon}
            </div>

            <p className="text-[24px] font-semibold text-[#111] mb-1">
              {item.value}
            </p>

            <p className="text-sm text-[#111] font-medium leading-tight">
              {item.title}
            </p>

            <p className="text-xs text-[#666] mt-1">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}




