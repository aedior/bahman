"use client";

import type React from "react";
import { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = 1738236910777 + 600 * 575 * 24 * 310; // تاریخ افتتاح را اینجا تنظیم کنید

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now.getTime();
      console.log(difference);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div
          key={key}
          className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
          <span className="countdown font-mono text-5xl ">
            <span
              className="countText"
              style={{ "--value": value } as React.CSSProperties}
            ></span>
          </span>
          {key}
        </div>
      ))}
    </div>
  );
};

export default Countdown;
