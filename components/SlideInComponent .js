// SlideInComponent.js
"use client";

import React from "react";
import "./SlideIn.css";

const SlideInComponent = ({ isVisible }) => {
  return (
    <div className={`slide-in ${isVisible ? "visible" : ""}`}>
      Content to slide in
    </div>
  );
};

export default SlideInComponent;
