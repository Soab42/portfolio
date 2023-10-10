"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

export default function Slider({ data }) {
  const [position, setPosition] = useState(0);

  const prevHandle = () => {
    setPosition((position - 1 + data.length) % data.length);
  };
  const nextHandle = () => {
    setPosition((position + 1) % data.length);
  };
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "1200px",
          translate: `${-(position * 1200)}px`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255,.01)",
          }}
        >
          {data.map((image) => (
            <Image
              src={image}
              width={1200}
              height={700}
              key={image}
              alt={image}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          right: 0,
        }}
      >
        <button className="btn filter-blur scale" onClick={prevHandle}>
          <FcPrevious />
        </button>
        <button className="btn filter-blur scale" onClick={nextHandle}>
          <FcNext />
        </button>
      </div>
    </div>
  );
}
