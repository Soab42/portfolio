import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="section pt-5 bg-white" id="about">
      {/* <!-- container --> */}
      <div className="container text-center">
        {/* <!-- about wrapper --> */}
        <div className="about">
          <div className="about-img-holder">
            <Image
              width={400}
              height={400}
              src="/assets/imgs/man.png"
              className="about-img"
              alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
            />
          </div>
          <div className="about-caption">
            <p className="section-subtitle">Who Am I ?</p>
            <h2 className="section-title mb-3">About Me</h2>
            <div>
              <span>
                I am a dedicated web developer with a passion for creating
                digital experiences that leave a mark.
              </span>

              <span>
                Beyond the screen, I&apos;m a sports enthusiast, finding joy in
                playing cricket and football under the open sky. Traveling is my
                escape, as it exposes me to diverse cultures and fuels my
                creativity. Writing is not just a skill; it&apos;s an art form I
                cherish. Honesty is my cornerstone, and teamwork is my strength.
              </span>
              <span>
                I&apos;m a diligent, quick learner who thrives on challenges and
                embraces them as opportunities. My hunger for knowledge is
                insatiable, and I relish acquiring new skills and exploring the
                ever-evolving world of web development. Every day is a chance to
                grow and innovate.
                <hr />
              </span>
            </div>
            <button className="btn-rounded btn btn-outline-primary mt-4">
              Download CV
            </button>
          </div>
        </div>
        {/* <!-- end of about wrapper --> */}
      </div>
      {/* <!-- end of container --> */}
    </section>
  );
}
