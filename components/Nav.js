<<<<<<< HEAD
import { setupNavigation } from "@/public/assets/js/soab";
import React from "react";

export default function Nav({ scroll }) {
  return (
    <nav className={`custom-navbar ${scroll && "affix"}`}>
      <div className="container">
        <a className="logo" href="#">
          .Syfuddhin
        </a>
        <ul className="nav">
          <li className="item">
            <a className="link" href="#home">
              Home
            </a>
          </li>
          <li className="item">
            <a className="link" href="#about">
              About
            </a>
          </li>
          <li className="item">
            <a className="link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="item">
            <a className="link" href="#testmonial">
              Testmonial
            </a>
          </li>
          <li className="item">
            <a className="link" href="#blog">
              Blog
            </a>
          </li>
          <li className="item">
            <a className="link" href="#contact">
              Contact
            </a>
          </li>
          <li className="item ml-md-3">
            <a href="#skills" className="btn btn-primary">
              Skills
            </a>
          </li>
        </ul>
        <btn
          href="#"
          id="nav-toggle"
          onClick={() => setupNavigation()}
          className="hamburger hamburger--elastic"
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </btn>
      </div>
    </nav>
  );
}
=======
import { setupNavigation } from "@/public/assets/js/soab";
import React from "react";

export default function Nav({ scroll }) {
  return (
    <nav className={`custom-navbar ${scroll && "affix"}`}>
      <div className="container">
        <a className="logo" href="#">
          .Syfuddhin
        </a>
        <ul className="nav">
          <li className="item">
            <a className="link" href="#home">
              Home
            </a>
          </li>
          <li className="item">
            <a className="link" href="#about">
              About
            </a>
          </li>
          <li className="item">
            <a className="link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="item">
            <a className="link" href="#testmonial">
              Testmonial
            </a>
          </li>
          <li className="item">
            <a className="link" href="#blog">
              Blog
            </a>
          </li>
          <li className="item">
            <a className="link" href="#contact">
              Contact
            </a>
          </li>
          <li className="item ml-md-3">
            <a href="#skills" className="btn btn-primary">
              Skills
            </a>
          </li>
        </ul>
        <btn
          href="#"
          id="nav-toggle"
          onClick={() => setupNavigation()}
          className="hamburger hamburger--elastic"
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </btn>
      </div>
    </nav>
  );
}
>>>>>>> 41aacb10138a7bc96d479eebc451410c1dd06ab7
