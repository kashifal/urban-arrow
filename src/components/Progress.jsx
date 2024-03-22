import React from "react";

function Progress({ color, pro }) {
  return (
    <svg className="w-[90px] h-[90px]" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        className="text-gray-200 stroke-current"
      ></circle>
      <circle
        cx="50"
        cy="50"
        r="40"
        strokeWidth={10}
        fill="transparent"
        className={`text-[${color}]   progress-ring__circle stroke-current`}
      ></circle>
      <text
        x="50"
        y="50"
        alignmentBaseline="middle"
        fontFamily="Verdana"
        fontSize="20"
        textAnchor="middle"
        fontWeight={600}
      >
        {pro}%
      </text>
    </svg>
  );
}

export default Progress;
