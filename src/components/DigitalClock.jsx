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
  let dayName = days[time.getDay()];
  useEffect(() => {
    let timeId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timeId);
    };
  });

  return (
    <div
      style={{ color: "white", fontFamily: "monospace", fontWeight: "lighter" }}
    >
      {dayName}
      <hr />
      {time.toLocaleTimeString()}
    </div>
  );
};
export const Day = () => {
  let today = new Date();
  return <div style={{ color: "yellow" }}>{today} </div>;
};

export default DigitalClock;

// export default function DigitalClock() {
//   const current = new Date();
//   const date = `${current.getDate()}/${
//     current.getMonth() + 1
//   }/${current.getFullYear()}-${current.getHours()}-${current.getMinutes()}-${current.getSeconds()}`;

//   return (
//     <div className="App text-bg-light">
//       <h1>Current date is {date}</h1>
//     </div>
//   );
// }
