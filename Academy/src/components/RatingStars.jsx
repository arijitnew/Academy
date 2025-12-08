import React from "react";

export default function RatingStars({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center text-yellow-400 text-[13px] leading-none">
      {Array(full).fill().map((_, i) => (
        <span key={"f" + i}>★</span>
      ))}

      {half && (
        <span className="relative inline-block">
          <span className="text-yellow-400/30">★</span>
          <span
            className="absolute top-0 left-0 overflow-hidden text-yellow-400"
            style={{ width: "50%" }}
          >
            ★
          </span>
        </span>
      )}

      {Array(empty).fill().map((_, i) => (
        <span key={"e" + i} className="text-yellow-400/30">
          ★
        </span>
      ))}
    </div>
  );
}
