import { skills } from "@/data/skills";
import CircleProgressBar from "./CircleProgressBar";

export default function Skills() {
  return (
    <>
      <section className="section bg-white" id="service">
        <div className="container text-center">
          <p className="section-subtitle">What I Can Do ?</p>
          <h5 className="section-title mb-6">Skills</h5>
          <div className="portion-circle">
            {skills.map((skill) => (
              <CircleProgressBar skill={skill} key={skill.skill} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
