import React from "react";
import '../cssFolder/Feature.css'
import dashboard from "../imageFolder/dashboard.jpg.webp";
import avatar from "../imageFolder/person_1.jpg.webp";

export default function DigitalService() {
  return (
    <>
      <div className="mt-5 p-5"style={{ fontStyle:"Nunito"}} id="feature">
          <div className="container">
            <div className="row justify-content-between">
              {/* paragraph */}
              <div className="col-lg-4">

                {/*  Text Digitel Service */}
                <span
                  className=" text-primary"
                  data-aos="fade-up"
                  data-aos-delay={0}
                 
                >
                  Digital Services
                </span>
                {/* Selling Digital Services */}
                <h1
                  className="heading mb-4"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  Selling Digital Services
                </h1>
                {/* paragraph 1 ->"far far away" */}
                <div
                  className=" txtgr mb-4"
                  data-aos="fade-up"
                  data-aos-delay={200}
                 
                >
                  <p >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast
                  </p>
                  <ul className=" list-unstyled">
                    <li className="check position-relative ps-4"> There live the blind texts</li>
                    <li className="check position-relative ps-4">Far far away behind the word</li>
                  </ul>
                </div>
                {/* paragraph 2 -> "seprated they--" */}
                <div
                  className="mb-4"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className=" d-flex">
                    <div className="text">
                      <blockquote>
                        “Separated they{" "}
                        <span className="highlight">
                          live in Bookmarksgrove right at the coast of the
                          Semantics
                        </span>
                        , a large language ocean. A small river named Duden
                        flows by their place and supplies it with the necessary
                        regelialia. ”
                      </blockquote>
                      <div className="author d-flex">
                        <div className="pic mr-3">
                          <img
                             width={'50px'}
                            src={avatar}
                            alt="Image"
                            className="img-fluid rounded-5"
                          />
                        </div>
                        <div>
                          <strong className="d-block">James Anderson</strong>
                          <span className="d-block">
                            Facebook, Product Lead
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end div paragraph */}

              {/* div photo */}
              <div className="col-lg-7" data-aos="fade-up" data-aos-delay={400} >
                  <img src={dashboard} className="img-fluid img-shadow" alt="dashboard" ></img>
              </div>
              {/* end div photo */}
            </div>
          </div>
        </div>
    </>
  );
}
