import React from "react";
import '../cssFolder/Pricing.css'
export default function () {
  return (
    <div className="container-fluid container-spacing">
    <div className=" bg-light" id="pricing">
    <div className="container ">
      <div class="row pricing-title">
        {/* Title Pricing */}
        <div
          class="col-12 text-center"
           data-aos="fade-up" 
           data-aos-delay="0"
        >
          <h2 class="heading">Pricing</h2>
          <p className="txtgr">
            Pricing for everyone. Choose your plan now!
          </p>
        </div>
        <div className="row">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row mb-5">
              {/* Free Card */}
              <div
                className="col-lg-4 mb-4"
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                <div className="card card-body border-0 p-5 rounded-5">
                <div className="pricing">
                    <div className="price ">
                      <span className="d-block plan fs-2">Free</span>
                      <span className="price fs-1 text-primary">
                        <sup>$</sup>
                        <span>0</span>
                      </span>
                    </div>
                    <ul className=" list-unstyled primary mb-5 txtgr">
                      <li className="check position-relative ps-4">There live the blind texts</li>
                      <li className="check position-relative ps-4">Far far away behind the word</li>
                      <li className="check position-relative ps-4">Far from the countries Vokalia and Consonantia</li>
                    </ul>
                    <p className="text-center mb-0">
                      <a href="#" className="btn btn-outline-primary">
                        Get Started
                      </a>
                    </p>
                </div>
              </div>
              </div>
              {/* Standard Card */}
              <div
                className="col-lg-4 mb-4 rounded-5"
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                <div className="card card-body border-0 p-5 rounded-5 ">
                <div className="pricing active ">
                  <div className="body">
                    <div className="price">
                      <span className="d-block plan fs-2">Standard</span>
                      <span className="price fs-1 text-primary">
                        <sup>$</sup>
                        <span>19.99</span>
                      </span>
                    </div>
                    <ul className=" list-unstyled primary mb-5 txtgr">
                      <li className="check position-relative ps-4">There live the blind texts</li>
                      <li className="check position-relative ps-4">Far far away behind the word</li>
                      <li className="check position-relative ps-4">Far from the countries Vokalia and Consonantia</li>
                    </ul>
                    <p className="text-center mb-0">
                      <a href="#" className="btn btn-primary">
                        Get Started
                      </a>
                    </p>
                  </div>
                </div>
                </div>
              </div>
              {/* Premium Card */}
              <div
                className="col-lg-4 mb-4"
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                <div className="card card-body border-0 p-5 rounded-5">
                <div className="pricing">
                  <div className="body">
                    <div className="price">
                      <span className="d-block plan fs-2">Premium</span>
                      <span className="price fs-1 text-primary">
                        <sup>$</sup>
                        <span>79.99</span>
                      </span>
                    </div>
                    <ul className=" list-unstyled primary mb-5 txtgr">
                      <li className="check position-relative ps-4">There live the blind texts</li>
                      <li className="check position-relative ps-4">Far far away behind the word</li>
                      <li className="check position-relative ps-4">Far from the countries Vokalia and Consonantia</li>
                    </ul>
                    <p className="text-center mb-0">
                      <a href="#" className="btn btn-outline-primary">
                        Get Started
                      </a>
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}
