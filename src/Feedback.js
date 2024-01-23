import React from "react";
import "./App.css";

export default function Feedback() {
  return (
    <div className="mt-5 p-5">
      <div className="untree_co-section" id="features-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <span
                className="caption"
                style={{ color: "blue", fontStyle: "oblique" }}
              >
                Digital Services
              </span>
              <h1 className="heading mb-4">Our Customers Feedbck</h1>
              <div></div>
              <div>
                <a
                  href="#"
                  className="js-custom-prev-v2 cusotm-slider-nav custom-prev"
                >
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
               <a
                  href="#"
                  className="js-custom-next-v2 cusotm-slider-nav custom-next"
                >
                </a>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
