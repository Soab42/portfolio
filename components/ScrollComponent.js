// ScrollComponent.js
"use client";
// SlideInComponent.js
import React, { useRef, useEffect, useState } from "react";

const SlideInComponent = () => {
  const slideInRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  console.log(slideInRef);
  useEffect(() => {
    const handleScroll = () => {
      if (slideInRef.current) {
        const rect = slideInRef.current.getBoundingClientRect();
        // Adjust the trigger point as needed
        const triggerPoint = window.innerHeight - rect.height / 2;
        setIsVisible(rect.top < triggerPoint);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={slideInRef} className={`slide-in ${isVisible ? "visible" : ""}`}>
      Content to slide in
    </div>
  );
};

export default SlideInComponent;
