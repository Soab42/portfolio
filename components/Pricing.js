import Image from "next/image";
import React from "react";

export default function Pricing() {
  return (
    <section className="section bg-white" id="pricing">
      <div className="container text-center">
        <p className="section-subtitle">How Much I Charge ?</p>
        <h5 className="section-title mb-6">My Pricing</h5>

        {/* <!-- row --> */}
        <div className="pricing-wrapper">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <Image
                width={80}
                height={70}
                className="pricing-card-icon"
                src="/assets/imgs/scooter.svg"
                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
              />
            </div>
            <div className="pricing-card-body">
              <h5 className="pricing-card-title">Free</h5>
              <div className="pricing-card-list">
                <p>accusamus reprehenderit</p>
                <p>provident dolorem </p>
                <p>quos neque</p>
                <p>fugiat quibusdam</p>
                <p>
                  <i className="ti-close"></i>
                </p>
                <p>
                  <i className="ti-close"></i>
                </p>
              </div>
            </div>
            <div className="pricing-card-footer">
              <span>$</span>
              <span>0.00/Month</span>
            </div>
            <a href="#" className="btn btn-primary mt-3 pricing-card-btn">
              Subscribe
            </a>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-header">
              <Image
                width={80}
                height={70}
                className="pricing-card-icon"
                src="/assets/imgs/shipped.svg"
                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
              />
            </div>
            <div className="pricing-card-body">
              <h5 className="pricing-card-title">Basic</h5>
              <div className="pricing-card-list">
                <p>accusamus reprehenderit</p>
                <p>provident dolorem </p>
                <p>quos neque</p>
                <p>fugiat quibusdam</p>
                <p>accusamus laboriosam</p>
                <p>
                  <i className="ti-close"></i>
                </p>
              </div>
            </div>
            <div className="pricing-card-footer">
              <span>$</span>
              <span>9.99/Month</span>
            </div>
            <a href="#" className="btn btn-primary mt-3 pricing-card-btn">
              Subscribe
            </a>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-header">
              <Image
                width={80}
                height={70}
                className="pricing-card-icon"
                src="/assets/imgs/startup.svg"
                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
              />
            </div>
            <div className="pricing-card-body">
              <h5 className="pricing-card-title">Premium</h5>
              <div className="pricing-card-list">
                <p>accusamus reprehenderit</p>
                <p>provident dolorem </p>
                <p>quos neque</p>
                <p>fugiat quibusdam</p>
                <p>accusamus laboriosam</p>
                <p>inventore omnis</p>
              </div>
            </div>
            <div className="pricing-card-footer">
              <span>$</span>
              <span>99.9/Month</span>
            </div>
            <a href="#" className="btn btn-primary mt-3 pricing-card-btn">
              Subscribe
            </a>
          </div>
        </div>
        {/* <!-- end of pricing wrapper --> */}
      </div>
      {/* <!-- end of container --> */}
    </section>
  );
}
