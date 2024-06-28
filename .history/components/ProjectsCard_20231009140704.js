import Image from "next/image";
import React from "react";

export default function ProjectsCard() {
  return (
    <div className="col-md-4">
      <a href="#" className="portfolio-card">
        <Image
          width={350}
          height={350}
          src="/assets/imgs/folio-1.jpg"
          className="portfolio-card-img"
          alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
        />
        <span className="portfolio-card-overlay">
          <span className="portfolio-card-caption">
            <h4>Web Designing</h4>
            <p className="font-weight-normal">Category: Web Templates</p>
          </span>
        </span>
      </a>
    </div>
  );
}
