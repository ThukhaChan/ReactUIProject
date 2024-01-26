import React from "react";
import "../cssFolder/Feature.css";

export default function Advantage() {
  return (
    <div className="mt-5">
      <div className="p-5">
        <div className="">
          <div className="container">
            {/* title Advantage  */}
            <div className="row mb-4">
              <div
                className="col-12 text-center"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <h1 className="heading">Advantage of using our products</h1>
                <p className="txtgr">
                  Far from the countries Vokalia and Consonantia
                </p>
              </div>
            </div>
            <div className="row">
              {/* service -- Grow Your Business  */}
              <div
                className="col-lg-6 mb-4"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service horizontal d-flex">
                  <div className="service-icons color-1  m-1  shadow-sm rounded-3">
                    <svg
                      className="bi bi-app-indicator"
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      fill="#ffff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                      />
                      <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                  </div>
                  <div className="service-contents">
                    <h5>Grow Your Business</h5>
                    <p className="txtgr">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p>
                      <a href="#" className="read-more m-1">
                        <small>Learn More</small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* service -- Build Products */}
              <div
                className="col-lg-6 mb-4"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service horizontal d-flex">
                  <div className="service-icons color-2  m-1 shadow-sm rounded-3">
                    <svg
                      className="bi bi-arrow-repeat"
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      fill="#ffff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"
                      />
                    </svg>
                  </div>
                  <div className="service-contents">
                    <h5>Build Products</h5>
                    <p className="txtgr">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p>
                      <a href="#" className="read-more m-1">
                        <small>Learn More</small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* service -- Success Every Day  */}
              <div
                className="col-lg-6 mb-4"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service horizontal d-flex">
                  <div className="service-icons color-3  m-1 shadow-sm rounded-3">
                    <svg
                      className="bi bi-briefcase"
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      fill="#ffff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                      />
                    </svg>
                  </div>
                  <div className="service-contents">
                    <h5>Success Every Day</h5>
                    <p className="txtgr">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p>
                      <a href="#" className="read-more m-1">
                        <small>Learn More</small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* service -- Bring Ideas to Life  */}
              <div
                className="col-lg-6 mb-4"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service horizontal d-flex">
                  <div className="service-icons color-4  m-1 shadow-sm rounded-3">
                    <svg
                      className="bi bi-collection"
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      fill="#ffff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
                      />
                    </svg>
                  </div>
                  <div className="service-contents m-1">
                    <h5>Bring Ideas to Life</h5>
                    <p className="txtgr">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p>
                      <a href="#" className="read-more">
                        <small>Learn More</small>
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
  );
}
