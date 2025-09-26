import React, { useState, useEffect } from "react";

function Nav() {
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 16777215); // hex range
      const randomColor = "#" + randomNum.toString(16).padStart(6, "0"); // always 6 digits
      setColor(randomColor);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full bg-red-100 flex justify-center items-center sticky top-0 z-50 shadow-lg px-4 py-3">
        <p
          className="text-base sm:text-xl md:text-2xl font-poppins font-medium tracking-wide text-center"
          style={{ color: color }}
        >
          Jay Maa Durga <span className="text-red-400">🚩🚩</span>
        </p>
      </div>
    </>
  );
}

export default Nav;
