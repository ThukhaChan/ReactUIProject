import React from "react";
import "./App.css";
import person1 from "./person_1.jpg.webp";
import person2 from "./person_2.jpg.webp";
// import person3 from "./person_3.jpg.webp";
export default function Feedback() {
  return (
    <div className="mt-lg-5  mb-5" id="feedback">
      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <span
                className="caption"
                style={{ color: "blue", fontStyle: "oblique" }}
              >
                TESTIMONIALS
              </span>
              <h1 className="heading mb-4">Our Customers Feedback</h1>
              <div></div>
              <div className="col-4">
                <a href="#" className=" ">
                  <span
                    style={{
                      width: "100px",
                      height: "50px",
                      backgroundColor: "gray",
                    }}
                    className="p-2  rounded-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#ffff"
                      class="bi bi-arrow-left-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                      />
                    </svg>
                  </span>
                </a>

                <a href="#" className="">
                  <span
                    style={{
                      width: "100px",
                      height: "50px",
                      backgroundColor: "gray",
                    }}
                    className="p-2 m-2 rounded-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#ffff"
                      class="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              </div>
              <div className="col-8">
                <div className="row">
                  
                  <div className="col-6">
                  <div className="text">
                      <blockquote><i>
                        “Separated they{" "}
                        <span className="highlight">
                          live in Bookmarksgrove right at the coast of the
                          Semantics
                        </span>
                        , a large language ocean. A small river named Duden
                        flows by their place and supplies it with the necessary
                        regelialia. ”</i>
                      </blockquote>

                      <div className="author d-flex">
                        <div className="pic mr-3">
                          <img
                            width={'50px'}
                            src={person2}
                            alt="Image"
                            className="img-fluid rounded-5"
                          />
                        </div>
                        <div style={{ fontSize:'13px' }}>
                          <strong className="d-block">James Anderson</strong>
                          <span className="d-block" style={{ color:'gray' }}>
                            Facebook, Product Lead
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                 
                  <div className="col-6">
                  <div className="text">
                      <blockquote><i>
                        “Separated they{" "}
                        <span className="highlight">
                          live in Bookmarksgrove right at the coast of the
                          Semantics
                        </span>
                        , a large language ocean. A small river named Duden
                        flows by their place and supplies it with the necessary
                        regelialia. ”</i>
                      </blockquote>

                      <div className="author d-flex">
                        <div className="pic mr-3">
                          <img
                            width={'50px'}
                            src={person1}
                            alt="Image"
                            className="img-fluid rounded-5"
                          />
                        </div>
                        <div style={{ fontSize:'13px' }}>
                          <strong className="d-block">James Anderson</strong>
                          <span className="d-block" style={{ color:'gray' }}>
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
    
  );
}
