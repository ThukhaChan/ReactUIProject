import React from "react";
import "../cssFolder/Feature.css";

export default function GetIntouch() {
  return (
    <div id="contact">
      {/* <div className="p-5"> */}
        <div className="container p-5">
          {/* Title Get In Touch  */}
          <div className="row mb-4" data-aos="fade-up" data-aos-delay="0">
            <div className="col-12 text-center">
              <h1 className="heading">Get In Touch</h1>
              <p className="txtgr">
                Far from the countries Vokalia and Consonantia
              </p>
            </div>
          </div>
          <div className="row">
            {/* Text / email field/ text area */}
            <div className="col-lg-7">
              <form
                className="contact-form "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="txtgr" htmlFor="fname">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control border-end-0 border-start-0 border-top-0"
                        id="fname"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="txtgr" htmlFor="lname">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control border-end-0 border-start-0 border-top-0"
                        id="lname"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-4">
                  <label className="txtgr" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control border-end-0 border-start-0 border-top-0"
                    id="email"
                  />
                </div>
                <div className="form-group mt-4">
                  <label className="txtgr" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name=""
                    className="form-control border-end-0 border-start-0 border-top-0"
                    id="message"
                    cols={30}
                    rows={5}
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-4 rounded-5"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Contact Info  */}
            <div
              className="col-lg-4 ms-auto mt-5 p-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="h5 mb-4">Contact Info</h3>
              <address className="text-black d-flex">
                <span className="mt-1 icon-room mr-2 mb-3" />
                <span>
                  <i class="fa-solid fa-location-dot"></i> 43 Raymouth Rd.
                  Baltemoer, London 3910
                </span>
              </address>
              <ul className="list-unstyled ul-links mb-4">
                <li className="mb-3">
                  <a
                    href="tel://11234567890"
                    className="d-flex text-decoration-none text-dark"
                  >
                    <span className="mt-1 icon-phone mr-2 " />
                    <span>
                      <i class="fa-solid fa-phone"></i> +1(123)-456-7890 ,
                      +1(123)-456-7890{" "}
                    </span>
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="mailto:info@mydomain.com"
                    className="d-flex text-decoration-none text-dark"
                  >
                    <span className="mt-1 icon-envelope mr-2" />
                    <span>
                      <i class="fa-solid fa-envelope"></i> info@mydomain.com
                    </span>
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    target="_blank"
                    className="d-flex text-decoration-none text-dark"
                  >
                    <span className="mt-1 icon-globe mr-2" />
                    <span>
                      <i class="fa-solid fa-earth-americas"></i>{" "}
                      https://Colorlib.com/
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}
