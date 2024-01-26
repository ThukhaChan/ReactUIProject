import React from "react";
import "../cssFolder/Feature.css";
import person1 from "../imageFolder/person_1.jpg.webp";
import person2 from "../imageFolder/person_2.jpg.webp";
// import person3 from "../imageFolder/person_3.jpg.webp";

export default function Feedback() {
  return (
    <div className="">
      <div className="">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-sm-12 col-lg-4 arrow-center">
              <span className="caption text-primary">TESTIMONIALS</span>
              <h1 className="heading mb-4 ">Our Customers Feedback</h1>
              {/* arrow right button */}
              <a data-bs-target="#demo" data-bs-slide="prev" href="#">
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
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
              </a>
              {/* arrow right button */}
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
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </a>
            </div>
            {/* Carousel  */}
            <div className="col-sm-12 col-lg-8">
              <div className="carousel slide" id="demo" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {/* carousel 1 */}
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-6 caro">
                        <div className="media">
                          <blockquote>
                            <i>
                              “Separated they{" "}
                              <span className="highlight">
                                live in Bookmarksgrove right at the coast of the
                                Semantics
                              </span>
                              , a large language ocean. A small river named
                              Duden flows.”
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
                            <div className="fs-6">
                              <strong className="d-block">
                                James Anderson
                              </strong>
                              <span className="d-block txtgr">
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
                              Duden flows. ”
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
                            <div className="fs-6">
                              <strong className="d-block">
                                James Anderson
                              </strong>
                              <span className="d-block txtgr">
                                Facebook, Product Lead
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* carousel 2  */}
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
                              Duden flows. ”
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
                            <div className="fs-6">
                              <strong className="d-block">
                                James Anderson
                              </strong>
                              <span className="d-block txtgr">
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
                              Duden flows. ”
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
                            <div className="fs-6">
                              <strong className="d-block">
                                James Anderson
                              </strong>
                              <span className="d-block txtgr">
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
