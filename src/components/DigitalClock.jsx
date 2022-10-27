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
    <div className="text-center text-white font-monospace p-1 ">
      {dayName}
      <hr className=" bg-light" />
      {time.toLocaleTimeString()}
    </div>
  );
};
export const Day = () => {
  const today = new Date();
  return <div>{today}</div>;
};

export default DigitalClock;
