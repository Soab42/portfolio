/* eslint-disable @next/next/no-sync-scripts */
"use client";

import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Heaader from "@/components/Heaader";
import Hire from "@/components/Hire";
import Nav from "@/components/Nav";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import Testmonial from "@/components/Testmonial";
import Skills from "@/components/Skills";
import { useEffect, useRef, useState } from "react";
import "../public/assets/css/meyawo.css";
import "./globals.css";

export default function Home() {
  // Function to update scroll position
  const [scroll, setScroll] = useState(false);
  const slideInRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Add scroll event listener on component mount
  useEffect(() => {
    const updateScrollPosition = () => {
      const currentPosition = document.documentElement.scrollTop;
      if (currentPosition >= 600) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", () => {
      updateScrollPosition();
    });
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

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
    <body style={{ position: "relative" }}>
      {/* <!-- Page Navbar --> */}
      <Nav scroll={scroll} />
      {/* <!-- End of Page Navbar --> */}
      {/* <!-- page header --> */}
      <Heaader />
      {/* <!-- end of page header --> */}
      {/* <!-- about section --> */}
      <About />
      {/* <!-- end of about section --> */}
      {/* <!-- service section --> */}
      <Service />
      {/* <!-- end of service section --> */}
      {/* <!-- portfolio section --> */}
      <Portfolio />
      {/* <!-- end of portfolio section --> */}
      {/* <!-- pricing section --> */}
      {/* <Pricing /> */}
      <Skills isVisible={isVisible} slideInRef={slideInRef} />
      {/* <!-- end of pricing section --> */}
      {/* <!-- section --> */}
      <Hire />
      {/* <!-- end of section --> */}
      {/* <!-- testimonial section --> */}
      <Testmonial />
      {/* <!-- end of testimonial section --> */}
      {/* <!-- blog section --> */}
      <Blog />
      {/* <!-- end of blog section --> */}
      {/* <!-- contact section --> */}
      <Contact />
      {/* <!-- end of contact section --> */}
      {/* <!-- footer --> */}
      <Footer />
    </body>
  );
}
