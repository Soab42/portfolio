/* eslint-disable @next/next/no-sync-scripts */
"use client";

import Nav from "@/components/Nav";
import "../public/assets/css/meyawo.css";
import "./globals.css";
import { useEffect, useState } from "react";
import Heaader from "@/components/Heaader";
import About from "@/components/About";
import Service from "@/components/Service";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testmonial from "@/components/Testmonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import Hire from "@/components/Hire";

export default function Home() {
  // Function to update scroll position
  const [scroll, setScroll] = useState(false);
  const updateScrollPosition = () => {
    const currentPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentPosition >= 600) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

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
      <Pricing />
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
