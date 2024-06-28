import React from "react";

export default function Heaader() {
  return (
    <header id="home" className="header">
      <div className="overlay"></div>
      <div className="header-content container">
        <h1 className="header-title">
          <span className="up">HI!</span>
          <span className="down">I am Soab Mahmud </span>
        </h1>
        <p className="header-subtitle">FRONTEND WEB DEVELOPER</p>

        <a href="#portfolio" className="btn btn-primary">
          Visit My Works
        </a>
      </div>
    </header>
  );
}
