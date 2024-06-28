"use client";
import SlideInComponent from "@/components/SlideInComponent ";
import React, { useEffect, useState } from "react";

export default function NewCom() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this value to control when the component becomes visible during scrolling
      const scrollY = window.scrollY;
      const triggerPoint = 200; // Adjust as needed
      setIsVisible(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <SlideInComponent isVisible={isVisible} />
      <div style={{ height: "100vh" }}>
        Scroll down to see the slide-in component
      </div>
    </div>
  );
}
