"use client";

import { useState } from "react";

const ChartBar = ({ item, heighestValue, currentDay }) => {
  const [showChartValue, setShowChartValue] = useState(false);

  // closure
  // the heighestValue takes 8rem of chart height, all other values are just appropriate smaller
  const calculateChartHeight = () => {
    const chartHeightValueInRem = 8;
    return `${(item.amount / heighestValue) * chartHeightValueInRem}rem`;
  };

  return (
    <div
      style={{ minHeight: "12rem" }}
      className="flex flex-col items-center justify-end flex-1 w-8 gap-1 sm:w-10 "
    >
      <div
        style={{ width: "100%" }}
        className="flex flex-col items-center justify-end flex-1 w-8 gap-1 sm:w-10 "
      >
        {showChartValue && (
          <p className="z-10 p-1 text-xs text-white rounded bg-dark-brown">
            ${item.amount}
          </p>
        )}
        <p
          style={{
            height: calculateChartHeight(),
            width: "75%",
          }}
          className={`rounded ${
            item.day === currentDay ? "bg-cyan" : "bg-soft-red"
          } `}
          onMouseEnter={() => setShowChartValue(true)}
          onMouseLeave={() => setShowChartValue(false)}
        ></p>
      </div>
      <p className="text-xs text-medium-brown">{item.day}</p>
    </div>
  );
};

export default ChartBar;
