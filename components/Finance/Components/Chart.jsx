"use client";

import { useState } from "react";

const Chart = ({ item }) => {
  const [showChartValue, setShowChartValue] = useState(false);

  return (
    <div
      style={{ minHeight: "14rem" }}
      className="flex flex-col items-center justify-end flex-1 w-8 gap-1 sm:w-10 "
      key={item.day}
    >
      {showChartValue && (
        <p
          id={`ID_${item.day.toUpperCase()}`}
          className="z-10 p-1 text-xs text-white rounded bg-dark-brown"
        >
          ${item.amount}
        </p>
      )}
      <p
        style={{ height: `${item.amount}%`, width: "75%" }}
        className="rounded bg-soft-red "
        onMouseEnter={() => setShowChartValue(true)}
        onMouseLeave={() => setShowChartValue(false)}
      ></p>
      <p className="text-xs text-medium-brown">{item.day}</p>
    </div>
  );
};

export default Chart;
