import Image from "next/image";
import React from "react";

export default function Service() {
  return (
    <section className="section bg-white" id="service">
      <div className="container text-center">
        <p className="section-subtitle">What I Do ?</p>
        <h5 className="section-title mb-6">Service</h5>

        {/* <!-- row --> */}
        <div className="row ">
          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <div className="body">
                <Image
                  width={60}
                  height={50}
                  src="/assets/imgs/pencil-case.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h5 className="title">Front-End</h5>
                <p className="subtitle">
                  I craft engaging web interfaces ensuring seamless user
                  experiences and captivating designs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <div className="body">
                <Image
                  width={60}
                  height={50}
                  src="/assets/imgs/responsive.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />

                <h5 className="title">Cross Application</h5>
                <p className="subtitle">
                  Labore velit culpa adipisci excepturi consequuntur itaque in
                  nam molestias dolorem iste quod.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <div className="body">
                <Image
                  width={60}
                  height={50}
                  src="/assets/imgs/toolbox.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h5 className="title">Placeat</h5>
                <p className="subtitle">
                  Labore velit culpa adipisci excepturi consequuntur itaque in
                  nam molestias dolorem iste quod.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <div className="body">
                <Image
                  width={60}
                  height={50}
                  src="/assets/imgs/analytics.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h5 className="title">Iusto</h5>
                <p className="subtitle">
                  Labore velit culpa adipisci excepturi consequuntur itaque in
                  nam molestias dolorem iste quod.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end of row --> */}
      </div>
    </section>
  );
}
