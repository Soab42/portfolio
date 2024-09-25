import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  // console.log(isVisible);
  const slideInRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        entry.isIntersecting && observer.unobserve(slideInRef.current);
      },
      {
        threshold: 0.5,
      }
    );
    // console.log(observer);
    observer.observe(slideInRef.current);

    return () => observer.unobserve(slideInRef.current);
  }, [isVisible]);
  // console.log(isVisible);
  return (
    <section className="section pt-5 bg-white" id="about">
      {/* <!-- container --> */}
      <div className="container text-center">
        {/* <!-- about wrapper --> */}
        <div className="about">
          <div className="about-img-holder">
            <Image
              width={600}
              height={400}
              ref={slideInRef}
              src="/assets/imgs/saif/saif-9.png"
              className={`about-img ${isVisible ? "avatar" : ""}`}
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
            <Link
              href="https://drive.google.com/file/d/1ZslBLg90a-m8SYdq24ch68PvvuNPtpx_/view?usp=drivesdk"
              className="btn-rounded btn btn-outline-primary mt-4"
            >
              Download CV
            </Link>
          </div>
        </div>
        {/* <!-- end of about wrapper --> */}
      </div>
      {/* <!-- end of container --> */}
    </section>
  );
}
