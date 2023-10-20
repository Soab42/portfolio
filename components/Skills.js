import { skills } from "@/data/skills";
import CircleProgressBar from "./CircleProgressBar";

export default function Skills({ isVisible, slideInRef }) {
  return (
    <>
      <section className={`section bg-white `} id="skills" ref={slideInRef}>
        <div className="container text-center">
          <p className="section-subtitle">What I Can Do ?</p>
          <h5 className="section-title mb-6">Skills</h5>
          <div className="portion-circle">
            {skills.map((skill, i) => (
              <CircleProgressBar skill={skill} key={i} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
