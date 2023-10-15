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
import { useEffect, useState } from "react";
import "../public/assets/css/meyawo.css";
import "./globals.css";

export default function Home() {
  // Function to update scroll position
  const [scroll, setScroll] = useState(false);
  const updateScrollPosition = () => {
    const currentPosition = document.documentElement.scrollTop;
    if (currentPosition >= 600) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", () => {
      updateScrollPosition();
      revelsElement();
    });
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  function revelsElement() {}

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
      <Skills />
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
