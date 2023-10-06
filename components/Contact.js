import React from "react";

export default function Contact() {
  return (
    <section className="section bg-white" id="contact">
      <div className="container text-center">
        <p className="section-subtitle">How can you communicate?</p>
        <h5 className="section-title mb-5">Contact Me</h5>

        {/* <!-- contact form --> */}
        <form action="" className="contact-form col-md-10 col-lg-8 m-auto">
          <div className="form-row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                size="50"
                className="form-control"
                placeholder="Your Name"
                required={true}
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                required={true}
              />
            </div>
            <div className="form-group col-sm-12">
              <textarea
                name="comment"
                id="comment"
                rows="6"
                className="form-control"
                placeholder="Write Something"
              ></textarea>
            </div>
            <div className="form-group col-sm-12 mt-3">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-outline-primary rounded"
              />
            </div>
          </div>
        </form>
        {/* <!-- end of contact form --> */}
      </div>
      {/* <!-- end of container --> */}
    </section>
  );
}
