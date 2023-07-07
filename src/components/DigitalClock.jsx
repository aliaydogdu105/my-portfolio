import React from "react";
import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[time.getDay()];
  useEffect(() => {
    const timeId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timeId);
    };
  });

  return (
    <div className="text-center text-white font-monospace p-1">
      <h5>{dayName}</h5>
      <hr className=" bg-light" />
      <h6
        className=" text-bg-dark p-1 rounded"
        style={{
          opacity:0.7,
          backdropFilter: "blur(3px)",
        }}
      >
        {time.toLocaleTimeString()}
      </h6>
    </div>
  );
};
export const Day = () => {
  const today = new Date();
  return <div>{today}</div>;
};

export default DigitalClock;
