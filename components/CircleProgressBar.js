"use client";
import React, { useEffect, useState } from "react";

export default function CircleProgressBar(props) {
  // console.log(props.skill);
  const [index, setIndex] = useState(0);
  const { name, skill, icon } = props.skill;
  //   const status = 80;
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < skill) {
        setIndex((previndex) => previndex + 1);
      } else {
        clearInterval(interval); // Stop the interval when done
      }
    }, 5);

    return () => {
      clearInterval(interval); // Cleanup when the component unmounts
    };
  }, [index, skill]);

  let status;
  let statusColor;
  switch (true) {
    case index < 65:
      status = "Familiar";
      statusColor = "#69cddf89";
      break;
    case index < 80:
      status = "Comfortable";
      statusColor = "#ee725cbf";
      break;
    case index <= 100:
      status = "Expert";
      statusColor = "#590a7489";
      break;
    default:
      break;
  }

  return (
    <div style={{ display: "flex", color: "black", flexDirection: "column" }}>
      <div
        className="portion"
        style={{
          background: `conic-gradient(${statusColor} ${
            index * 3.6
          }deg, transparent 0deg)`,
        }}
      >
        <div className="content-skill">
          <span>{icon}</span>
          <strong>{name.replace("_", " ")}</strong>
        </div>
      </div>
      <span
        className="status"
        style={{
          background: statusColor,
        }}
      >
        {status}
      </span>
    </div>
  );
}
