import Image from "next/image";

export default function ProjectsCard({ project }) {
  const { imgLink, title, category } = project;
  return (
    <div className="col-md-4">
      <button className="portfolio-card">
        <Image
          width={450}
          height={350}
          src={imgLink}
          className="portfolio-card-img"
          alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
        />
        <span className="portfolio-card-overlay">
          <span className="portfolio-card-caption">
            <h4>{title}</h4>
            <p className="font-weight-normal">Category: {category}</p>
          </span>
        </span>
      </button>
    </div>
  );
}
