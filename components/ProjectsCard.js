import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";
import Slider from "./Slider";

export default function ProjectsCard({ project }) {
  const { imgLink, title, category, link, github, previewImages } = project;
  const [open, setOpen] = useState(false);

  return (
    <div className="col-md-4">
      <Modal open={open} setOpen={setOpen}>
        <Slider data={previewImages} />
      </Modal>
      <div className="portfolio-card">
        <Image
          width={500}
          height={250}
          src={imgLink}
          className="portfolio-card-img"
          alt="Loan Calculator"
        />

        <span className="portfolio-card-overlay">
          <span className="portfolio-card-caption">
            <h4>{title}</h4>
            <p className="font-weight-normal">{category}</p>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <button
              className="btn-rounded btn btn-outline-primary mt-4"
              onClick={() => setOpen(true)}
            >
              Preview
            </button>
            <a
              href={link}
              target="_blank"
              className="btn-rounded btn btn-outline-primary mt-4"
            >
              Live
            </a>
            <a
              href={github}
              target="_blank"
              className="btn-rounded btn btn-outline-primary mt-4"
            >
              GitHub
            </a>
          </span>
        </span>
      </div>
    </div>
  );
}
