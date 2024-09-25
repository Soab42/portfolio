<<<<<<< HEAD
// ScrollComponent.js
"use client";
// SlideInComponent.js
import React, { useRef, useEffect, useState } from "react";

import Skills from "@/components/Skills";
const SlideInComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  // console.log(isVisible);
  useEffect(() => {
    const fetchMaps = async () => {
      const url = "";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d326fe5a38msh800035164545c8dp123f36jsn4fe2412e46fa",
          "X-RapidAPI-Host": "maptiles.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMaps();
  }, []);

  return (
    <div className="slider">
      <div className="gap">hi</div>
    </div>
  );
};

export default SlideInComponent;
=======
// ScrollComponent.js
"use client";
// SlideInComponent.js
import React, { useRef, useEffect, useState } from "react";

import Skills from "@/components/Skills";
const SlideInComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  // console.log(isVisible);
  useEffect(() => {
    const fetchMaps = async () => {
      const url = "";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d326fe5a38msh800035164545c8dp123f36jsn4fe2412e46fa",
          "X-RapidAPI-Host": "maptiles.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMaps();
  }, []);

  return (
    <div className="slider">
      <div className="gap">hi</div>
    </div>
  );
};

export default SlideInComponent;
>>>>>>> 41aacb10138a7bc96d479eebc451410c1dd06ab7
