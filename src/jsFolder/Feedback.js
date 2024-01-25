import React from "react";
import person1 from "../imageFolder/person_1.jpg.webp";
import person2 from "../imageFolder/person_2.jpg.webp";
// import person3 from "../imageFolder/person_3.jpg.webp";

export default function Feedback() {
  return (
    <div className="">
      <div className="">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-sm-12 col-lg-4">
              <span
                className="caption"
                style={{ color: "blue", fontStyle: "oblique" }}
              >
                TESTIMONIALS
              </span>
              <h1 className="heading mb-4 ">Our Customers Feedback</h1>

              <a
                // className="carousel-control-prev"
                data-bs-target="#demo"
                data-bs-slide="prev"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  fill="black"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                  />
                </svg>
              </a>
              <a
                
                // className="carousel-control-next"
                data-bs-target="#demo"
                data-bs-slide="next"
                className="p-5"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  fill="black"
                  class="bi bi-arrow-right-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                  />
                </svg>
              </a>
            </div>

            <div className="col-sm-12 col-lg-8">
              <div className="carousel slide" id="demo" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-6">
                        <div className="media">
                          <blockquote>
                            <i>
                              “Separated they{" "}
                              <span className="highlight">
                                live in Bookmarksgrove right at the coast of the
                                Semantics
                              </span>
                              , a large language ocean. A small river named
                              Duden flows by their place and supplies it with
                              the necessary regelialia. ”
                            </i>
                          </blockquote>

                          <div className="author d-flex">
                            <div className="pic mr-3">
                              <img
                                width={"50px"}
                                src={person2}
                                alt="Image"
                                className="img-fluid rounded-5"
                              />
                            </div>
                            <div style={{ fontSize: "13px" }}>
                              <strong className="d-block">
                                James Anderson
                              </strong>
                              <span
                                className="d-block"
                                style={{ color: "gray" }}
                              >
                                Facebook, Product Lead
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="media">
                          <blockquote>
                            <i>
                              “Separated they{" "}
                              <span className="highlight">
                                live in Bookmarksgrove right at the coast of the
                                Semantics
                              </span>
                              , a large language ocean. A small river named
                              Duden flows by their place and supplies it with
                              the necessary regelialia. ”
                            </i>
                          </blockquote>
                          <div className="author d-flex">
                            <div className="pic mr-3">
                              <img
                                width={"50px"}
                                src={person1}
                                alt="Image"
                                className="img-fluid rounded-5"
                              />
                            </div>
                            <div style={{ fontSize: "13px" }}>
                              <strong className="d-block">
                                James Anderson
                              </strong>
                              <span
                                className="d-block"
                                style={{ color: "gray" }}
                              >
                                Facebook, Product Lead
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-6">
                        <div className="media">
                          <blockquote>
                            <i>
                              “Separated they{" "}
                              <span className="highlight">
                                live in Bookmarksgrove right at the coast of the
                                Semantics
                              </span>
                              , a large language ocean. A small river named
                              Duden flows by their place and supplies it with
                              the necessary regelialia. ”
                            </i>
                          </blockquote>

                          <div className="author d-flex">
                            <div className="pic mr-3">
                              <img
                                width={"50px"}
                                src={person2}
                                alt="Image"
                                className="img-fluid rounded-5"
                              />
                            </div>
                            <div style={{ fontSize: "13px" }}>
                              <strong className="d-block">
                                James Anderson
                              </strong>
                              <span
                                className="d-block"
                                style={{ color: "gray" }}
                              >
                                Facebook, Product Lead
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="media">
                          <blockquote>
                            <i>
                              “Separated they{" "}
                              <span className="highlight">
                                live in Bookmarksgrove right at the coast of the
                                Semantics
                              </span>
                              , a large language ocean. A small river named
                              Duden flows by their place and supplies it with
                              the necessary regelialia. ”
                            </i>
                          </blockquote>

                          <div className="author d-flex">
                            <div className="pic mr-3">
                              <img
                                width={"50px"}
                                src={person2}
                                alt="Image"
                                className="img-fluid rounded-5"
                              />
                            </div>
                            <div style={{ fontSize: "13px" }}>
                              <strong className="d-block">
                                James Anderson
                              </strong>
                              <span
                                className="d-block"
                                style={{ color: "gray" }}
                              >
                                Facebook, Product Lead
                              </span>
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
    </div>
  );
}
