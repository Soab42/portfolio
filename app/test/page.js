"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [index, setIndex] = useState(0);
  const props = 80;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < props) {
        setIndex((previndex) => previndex + 1);
      } else {
        clearInterval(interval); // Stop the interval when done
      }
    }, 5);

    return () => {
      clearInterval(interval); // Cleanup when the component unmounts
    };
  }, [index]);

  return (
    <div className="body-new">
      <div className="four-portion-circle">
        <div
          className="portion"
          style={{
            background: `conic-gradient(#3498db ${
              index * 3.6
            }deg, transparent 0deg)`,
          }}
        ></div>
      </div>

      <div className="line-border-new">
        <div className="fill-line-new" style={{ width: `${index}%` }}>
          {index}%
        </div>
      </div>
    </div>
  );
}
