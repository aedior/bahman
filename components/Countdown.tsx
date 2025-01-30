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
    const targetDate = 1738235667624 + 60 * 60 * 24 * 10; // تاریخ افتتاح را اینجا تنظیم کنید

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24)) + 30;
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

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
