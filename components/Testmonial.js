import Image from "next/image";
import React from "react";

export default function Testmonial() {
  return (
    <section className="section bg-white" id="testmonial">
      <div className="container text-center">
        <p className="section-subtitle">What Think Client About Me ?</p>
        <h5 className="section-title mb-6">Testmonial</h5>

        {/* <!-- row --> */}
        <div className="row">
          <div className="col-md-6">
            <div className="testimonial-card">
              <div className="testimonial-card-img-holder">
                <Image
                  width={80}
                  height={70}
                  src="/assets/imgs/avatar2.jpg"
                  className="testimonial-card-img"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
              </div>
              <div className="testimonial-card-body">
                <p className="testimonial-card-subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque doloribus autem aperiam earum nostrum omnis blanditiis
                  corporis perspiciatis adipisci nihil.
                </p>
                <h5 className="testimonial-card-title">Emily Reb</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial-card">
              <div className="testimonial-card-img-holder">
                <Image
                  width={80}
                  height={70}
                  src="/assets/imgs/avatar3.jpg"
                  className="testimonial-card-img"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
              </div>
              <div className="testimonial-card-body">
                <p className="testimonial-card-subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque doloribus autem aperiam earum nostrum omnis blanditiis
                  corporis perspiciatis adipisci nihil.
                </p>
                <h5 className="testimonial-card-title">Emily Reb</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end of container --> */}
    </section>
  );
}
