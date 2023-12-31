import Link from "next/link";
import React from "react";

export default function Hire() {
  return (
    <section className="section-sm bg-primary ">
      {/* <!-- container --> */}
      <div className="container text-center text-sm-left">
        {/* <!-- row --> */}
        <div className="row align-items-center">
          <div className="col-sm offset-md-1 mb-4 mb-md-0">
            <h5 className="title text-light">Want to work with me?</h5>
            <p className="m-0 text-light">
              Always feel Free to Contact & Hire me
            </p>
          </div>
          <div className="col-sm offset-sm-2 offset-md-3">
            <Link
              className="btn btn-lg my-font btn-light rounded"
              href={"#contact"}
            >
              Hire Me
            </Link>
          </div>
        </div>
        {/* <!-- end of row --> */}
      </div>
      {/* <!-- end of container --> */}
    </section>
  );
}
