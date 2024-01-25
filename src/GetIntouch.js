import React from "react";

export default function GetIntouch() {
  return (
    <div id="contact">
      <div className="p-5">
        <div className="container p-5">

          <div className="row mb-4" data-aos="fade-up" data-aos-delay="0">
            <div className="col-12 text-center">
              <h1 className="heading">Get In Touch</h1>
              <p style={{ color: "gray" }}>
                Far from the countries Vokalia and Consonantia
              </p>
            </div>
          </div>

          <div className="row">
            {/* Text / email field */}
            <div className="col-lg-7">
              <form className="contact-form" data-aos="fade-up" data-aos-delay="100" >

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="" htmlFor="fname" style={{ color:'gray' }}>
                        First name
                      </label>
                      <input type="text" className="form-control" id="fname" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="" htmlFor="lname"style={{ color:'gray' }}>
                        Last name
                      </label>
                      <input type="text" className="form-control" id="lname" />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-4">
                  <label className="" htmlFor="email"style={{ color:'gray' }}>
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group mt-4">
                  <label className="" htmlFor="message"style={{ color:'gray' }}>
                    Message
                  </label>
                  <textarea
                    name=""
                    className="form-control"
                    id="message"
                    cols={30}
                    rows={5}
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-4 rounded-5">
                  Send Message
                </button>
              </form>
            </div>

            <div
              className="col-lg-4 ms-auto" data-aos="fade-up" data-aos-delay="200">
              <h3 className="h5 mb-4">Contact Info</h3>

              <address className="text-black d-flex">
                <span className="mt-1 icon-room mr-2 mb-3" />
                <span><i class="fa-solid fa-location-dot"></i>  43 Raymouth Rd. Baltemoer, London 3910</span>
              </address>
              <ul className="list-unstyled ul-links mb-4">
                <li className="mb-3">
                  <a href="tel://11234567890" className="d-flex text-decoration-none text-dark">
                    <span className="mt-1 icon-phone mr-2 " />
                    <span><i class="fa-solid fa-phone"></i> +1(123)-456-7890</span>
                  </a>
                </li>
                <li className="mb-3">
                  <a href="tel://11234567890" className="d-flex text-decoration-none text-dark">
                    <span className="mt-1 icon-phone mr-2 " />
                    <span> <i class="fa-solid fa-phone"></i> +1(123)-456-7890</span>
                  </a>
                </li>
                <li className="mb-3">
                  <a href="mailto:info@mydomain.com" className="d-flex text-decoration-none text-dark">
                    <span className="mt-1 icon-envelope mr-2" />
                    <span><i class="fa-solid fa-envelope"></i> info@mydomain.com</span>
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" target="_blank" className="d-flex text-decoration-none text-dark">
                    <span className="mt-1 icon-globe mr-2" />
                    <span><i class="fa-solid fa-earth-americas"></i> https://Colorlib.com/</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
