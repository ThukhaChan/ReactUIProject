import React from "react";
import '../cssFolder/Feature.css'
import dashboard from "../imageFolder/dashboard.jpg.webp";
import avatar from "../imageFolder/avatar5.png";

export default function About() {
  return (
    <>
      <div className="mt-5 p-5"style={{ fontStyle:"Nunito"}} id="feature">
        <div className="untree_co-section" id="features-section">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <span
                  className=""
                  data-aos="fade-up"
                  data-aos-delay={0}
                  style={{ color:'blue',fontStyle:'oblique' }}
                >
                  Digital Services
                </span>
                <h1
                  className="heading mb-4 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  Selling Digital Services
                </h1>
                <div
                  className="mb-4"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  style={{ color:'gray'}}
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
              <div
                className="col-lg-7 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <a>
                  {/* <span className="wrap-icon-play">
                    <svg
                      className="bi bi-play-fill"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                  </span> */}
                  <img
                    src={dashboard}
                    className="img-fluid img-shadow"
                    alt="dashboard"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
