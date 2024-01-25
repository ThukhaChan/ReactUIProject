import React from "react";
import person1 from "../imageFolder/person_1.jpg.webp";
import person2 from "../imageFolder/person_2.jpg.webp";
import person3 from "../imageFolder/person_3.jpg.webp";


export default function OurNews() {
  return (
    <div className=" mt-lg-5">
      <div class="untree_co-section bg-light">
        <div class="container p-5">

          <div class="row mb-4">
            <div
              class="col-12 text-center"
            >
              <h1 className="heading">Our News</h1>
              <p style={{ color: "gray" }}>
                Far from the countries Vokalia and Consonantia
              </p>
            </div>
          </div>

          <div className="row">
            <div
              class="col-md-6 mb-4 mb-lg-0 col-lg-4 "
            >
             <div className="card card-body border-0 p-5 hov float-end">
              <div class="news-item">
                <div class="vcard d-flex align-items-center mb-4">
                  <div class="img-wrap">
                    <img
                      width={'50px'}
                      src={person1}
                      alt="Image"
                      className="img-fluid rounded-5"
                    ></img>
                  </div>
                  <div class="post-meta m-3">
                    <strong>Posted by James</strong>
                    <div style={{ color:'gray' }}><span>Jun 14, 2020</span></div>
                  </div>
                </div>
                <div class="news-contents mb-4">
                  <span class="post-meta-2" style={{ color:"gray",fontSize:'13px' }}>Digital Service, 4 min read</span>
                  <h3>
                    <a href="#" className="text-decoration-none text-dark">
                      Far far away behind the word mountains far from the
                      countries
                    </a>
                  </h3>
                </div>
                <p class="mb-0">
                  <a href="#" class="read-more-arrow">
                    <svg
                      class="bi bi-arrow-right"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                      ></path>
                    </svg>
                  </a>
                </p>
              </div>
              </div>
            </div>

            <div
              class="col-md-6 mb-4 mb-lg-0 col-lg-4 "
            >
                <div className="card card-body border-0 p-5 hov">
              <div class="news-item">
                <div class="vcard d-flex align-items-center mb-4">
                  <div class="img-wrap">
                    <img
                      width={'50px'}
                      src={person2}
                      alt="Image"
                      className="img-fluid rounded-5"
                    ></img>
                  </div>
                  <div class="post-meta m-3">
                    <strong>Posted by James </strong>
                    <div style={{ color:'gray' }}><span>Jun 14, 2020</span></div>
                  </div>
                </div>

                <div class="news-contents mb-4">
                  <span class="mb-5"style={{ color:"gray",fontSize:'13px' }}>Digital Service, 4 min read</span>
                  <h3>
                    <a href="#" className="text-decoration-none text-dark">
                      Far far away behind the word mountains far from the
                      countries
                    </a>
                  </h3>
                </div>
                <p class="mb-0">
                  <a href="#" class="read-more-arrow">
                    <svg
                      class="bi bi-arrow-right"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                      ></path>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
            </div>
            <div
              class="col-md-12 col-lg-4"
            >
              <div className="card card-body border-0 p-5 hov">
              <div class="news-item">
                <div class="vcard d-flex align-items-center mb-4">
                  <div class="img-wrap">
                    <img
                      width={'50px'}
                      src={person3}
                      alt="Image"
                      className="img-fluid rounded-5"
                    ></img>
                  </div>
                  <div class="post-meta m-3">
                    <strong>Posted by James </strong>
                    <div style={{ color:'gray' }}><span>Jun 14, 2020</span></div>
                  </div>
                </div>

                <div class="news-contents mb-4">
                  <span class="post-meta-2" style={{ color:"gray",fontSize:'13px' }}>Digital Service, 4 min read</span>
                  <h3>
                    <a href="#" className="text-decoration-none text-dark">
                      Far far away behind the word mountains far from the
                      countries
                    </a>
                  </h3>
                </div>
                <p class="mb-0">
                  <a href="#" class="read-more-arrow">
                    <svg
                      class="bi bi-arrow-right"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                      ></path>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}
