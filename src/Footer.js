import React from "react";
import "./App.css";
export default function Footer() {
  return (
    <div className="site.footer">
      <div className=" mt-lg-5">
        <div class="untree_co-section bg-light pt-5">
          <div className="container">
            <div className="row">
              {/* --------- */}

              <div className="col-lg-4 p-5">
                <div className="widget p-3">
                  <h6 className="">
                    About Launch<span class="text-primary">.</span>{" "}
                  </h6>
                  <p style={{ color:'gray', fontSize:'14px' }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="widget p-3">
                  <h6>Connect</h6>
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

              {/*   ---------- */}

              <div className="col-lg-2 ml-auto p-5">
                <div className="widget p-3">
                  <h6 className="">Projects</h6>
                  <ul className="list-unstyled float-left links">
                    <li>
                      <a href="#"  className="text-decoration-none " style={{ color:'gray',fontSize:'14px',}}>La Lega Stadium</a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none " style={{ color:'gray',fontSize:'14px',}}>France Building</a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none " style={{ color:'gray',fontSize:'14px',}}>22 New Homes</a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none " style={{ color:'gray',fontSize:'14px',}}>Manage Center</a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none " style={{ color:'gray',fontSize:'14px',}}>Sports Hall</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* --------- */}

              <div className="col-lg-2 p-5">
                <div className="widget p-3">
                  <h6 className="">Services</h6>
                  <ul className="list-unstyled float-left links">
                    <li>
                      <a href="#" className="text-decoration-none " style={{ color:'gray',fontSize:'14px',}}>Architect</a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none " style={{ color:'gray',fontSize:'14px',}}>Interior Design</a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none " style={{ color:'gray',fontSize:'14px',}}>Landscape Design</a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none " style={{ color:'gray',fontSize:'14px',}}>Consultancy</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/*   --------- */}

              <div class="col-lg-3 p-5">
                <div class="widget p-3">
                  <h6 className="">Contact</h6>
                  <address style={{ color:'gray',fontSize:'14px',}}>43 Raymouth Rd. Baltemoer, London 3910</address>
                  <ul class="list-unstyled links mb-4">
                    <li>
                      <a href="tel://11234567890" className="text-decoration-none " style={{ color:'gray',fontSize:'14px',}}>+1(123)-456-7890</a>
                    </li>
                    <li>
                      <a href="tel://11234567890" className="text-decoration-none " style={{ color:'gray',fontSize:'14px',}}>+1(123)-456-7890</a>
                    </li>
                    <li>
                      <a href="mailto:info@mydomain.com" className="text-decoration-none " style={{ color:'gray',fontSize:'14px',}}>info@mydomain.com</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* copy right */}

              <div class="row mt-5 p-5">
                <div class="col-12 text-center">
                  <p style={{ color:'gray',fontSize:'14px' }}>
                    Copyright ©
                    <script>document.write(new Date().getFullYear());</script>
                    2024 All rights reserved | This template is made with{" "}
                    <i class="icon-heart text-danger" aria-hidden="true"></i> by{" "}
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
