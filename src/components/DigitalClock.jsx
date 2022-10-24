import React from "react";
import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let timeId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timeId);
    };
  });

  return <div style={{ color: "white" }}>{time.toLocaleTimeString()} </div>;
};

export default DigitalClock;
