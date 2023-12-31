// ScrollComponent.js
"use client";
// SlideInComponent.js
import React, { useRef, useEffect, useState } from "react";
import "../../css/slide.css";
import Skills from "@/components/Skills";
const SlideInComponent = () => {
  const slideInRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  // console.log(isVisible);
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
  }, [isVisible]);

  return (
    <div className="slider">
      <div className="gap"></div>
      <Skills isVisible={isVisible} slideInRef={slideInRef} />
    </div>
  );
};

export default SlideInComponent;
