import React from "react";
import "../cssFolder/Feature.css";
import dashboard1 from "../imageFolder/dashboard1.jpg.webp";
export default function Feature1() {
  return (
    <div className="p-5 bg-light">
      <div className="">
        <div className="container">
          <div className="row justify-content-between">
            {/* div Photo */}
            <div className="col-lg-7 p-lg-3 shadow-lg">
              <img src={dashboard1} alt="Image" className="img-fluid" />
            </div>
            {/* end div Photo */}

            <div className="col-lg-5 p-lg-3 js-custom-dots">
              {/* Service Link -> Grow Your Business */}
              <a
                href="#"
                className="service link horizontal d-flex  text-decoration-none text-dark"
                data-aos="fade-up"
                data-aos-delay={0}
                data-index={1}
              >
                <div className="service-icon1 color-1 mb-2 mt-3 shadow-lg rounded-3">
                  <svg
                    class="bi bi-app-indicator"
                    width="1.7em"
                    height="1.7em"
                    viewBox="0 0 16 16"
                    fill="#ffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                    ></path>
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                  </svg>
                </div>
                <div className="service-contents p-2 mt-2">
                  <h5>Grow Your Business</h5>
                  <p style={{ color: "gray" }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                </div>
              </a>
              {/* Service Link -> Build Products */}
              <a
                href="#"
                className="service link horizontal d-flex  text-decoration-none text-dark"
                data-aos="fade-up"
                data-aos-delay={100}
                data-index={2}
              >
                <div className="service-icon1 color-2 mb-2 mt-3 shadow-lg rounded-3">
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
                <div className="service-contents p-2">
                  <h5>Build Products</h5>
                  <p style={{ color: "gray" }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                </div>
              </a>
              {/* Service Link -> Success Every Day */}
              <a
                href="#"
                className="service link horizontal d-flex text-decoration-none text-dark"
                data-aos="fade-up"
                data-aos-delay={200}
                data-index={3}
              >
                <div className="service-icon1 color-3 mb-2 mt-3 shadow-lg rounded-3">
                  <svg
                    className="bi bi-briefcase"
                    width="1.7em"
                    height="1.7em"
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
                <div className="service-contents p-2">
                  <h5>Success Every Day</h5>
                  <p style={{ color: "gray" }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                </div>
              </a>
              {/* Service Link -> Bring Ideas to Life */}
              <a
                href="#"
                className="service link horizontal d-flex active text-decoration-none text-dark"
                data-aos="fade-up"
                data-aos-delay={300}
                data-index={4}
              >
                <div className="service-icon1 color-4 mb-2 mt-3 shadow-lg rounded-3">
                  <svg
                    className="bi bi-collection"
                    width="1.7em"
                    height="1.7em"
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
                <div className="service-contents p-2">
                  <h5>Bring Ideas to Life</h5>
                  <p style={{ color: "gray" }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
