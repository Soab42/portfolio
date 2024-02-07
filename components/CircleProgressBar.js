import React, { useEffect, useState } from "react";

export default function CircleProgressBar(props) {
  const [index, setIndex] = useState(0);
  const { name, skill, icon } = props.skill;
  const [status, setStatus] = useState(0);
  const [statusColor, setStatusColor] = useState("#69cddf89");
  // console.log("rendering");
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < skill) {
        props.isVisible && setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 5);

    return () => {
      clearInterval(interval);
    };
  }, [index, skill, props.isVisible]);

  useEffect(() => {
    if (index < 65) {
      setStatus(0);
      setStatusColor("#69cddf89");
    } else if (index < 80) {
      setStatus(123);
      setStatusColor("#ee725cbf");
    } else if (index <= 100) {
      setStatus(240);
      setStatusColor("#590a7489");
    }
  }, [index]);

  return (
    <div
      style={{
        display: "flex",
        color: "black",
        flexDirection: "column",
        transition: "all .5s",
      }}
    >
      <div
        className="portion"
        style={{
          background: `conic-gradient(${statusColor} ${
            index * 3.6
          }deg, transparent 0deg)`,
          transition: "all 1s",
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
          transition: "all 1s",
          overflow: "hidden",
          width: "150px",
          paddingLeft: "45px",
        }}
      >
        <div
          className="statusSkill"
          style={{ transform: `translateX(-${status}px)` }}
        >
          <div>Familiar</div>
          <div>Comfortable</div>
          <div>Expert</div>
        </div>
      </span>
    </div>
  );
}
