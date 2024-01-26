import React from "react";
import "../cssFolder/Feature.css";
export default function Footer() {
  return (
    <div className="site.footer">
      <div className=" mt-lg-5">
        <div class="untree_co-section bg-light pt-5">
          <div className="container">
            <div className="row">
              {/* --------- */}

              {/* Contact  Social Icon  */}
              <div className="col-lg-4 p-5">
                <div className="widget p-3">
                  <h5 className="">
                    About Launch<span class="text-primary">.</span>{" "}
                  </h5>
                  <p className="txtgr">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="widget p-3">
                  <h5>Connect</h5>
                  <ul className="list-unstyled d-flex">
                    <li>
                      <a href="#">
                        <span className="icon-instagram">
                          <i class="fa-brands fa-square-instagram"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-twitter">
                          <i class="fa-brands fa-twitter"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-facebook">
                          <i class="fa-brands fa-facebook"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-linkedin">
                          <i class="fa-brands fa-linkedin"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-pinterest">
                          <i class="fa-brands fa-pinterest"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-dribbble">
                          <i class="fa-brands fa-dribbble"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/*   Projects */}
              <div className="col-lg-2 ml-auto p-5">
                <div className="widget p-3">
                  <h5 className="">Projects</h5>
                  <ul className="list-unstyled float-left links">
                    <li>
                      <a href="#" className="text-decoration-none txtgr">
                        La Lega Stadium
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none txtgr">
                        France Building
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none txtgr">
                        22 New Homes
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none txtgr">
                        Manage Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none txtgr">
                        Sports Hall
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service */}
              <div className="col-lg-2 p-5">
                <div className="widget p-3">
                  <h5 className="">Services</h5>
                  <ul className="list-unstyled float-left links">
                    <li>
                      <a href="#" className="text-decoration-none txtgr">
                        Architect
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none txtgr">
                        Interior Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none txtgr">
                        Landscape Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none txtgr">
                        Consultancy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/*   Contact */}
              <div class="col-lg-3 p-5">
                <div class="widget p-3">
                  <h5 className="">Contact</h5>
                  <address className="txtgr">
                    43 Raymouth Rd. Baltemoer, London 3910
                  </address>
                  <ul class="list-unstyled links mb-4">
                    <li>
                      <a
                        href="tel://11234567890"
                        className="text-decoration-none txtgr"
                      >
                        +1(123)-456-7890
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel://11234567890"
                        className="text-decoration-none txtgr"
                      >
                        +1(123)-456-7890
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@mydomain.com"
                        className="text-decoration-none txtgr"
                      >
                        info@mydomain.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* copy right */}
              <div class="row mt-5 p-5">
                <div class="col-12 text-center">
                  <p className="txtgr">
                    Copyright ©
                    <script>document.write(new Date().getFullYear());</script>
                    2024 All rights reserved | This template is made with{" "}
                    <i
                      class="icon-heart text-danger"
                      aria-hidden="true"
                    ></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
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
