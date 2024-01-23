import React from "react";
import "./Header.css";

export default function Header() {
  return (
    
      <div>
        <nav className="navbar navbar-expand-lg " id="navbar-custom">
          <div className="container">
            <a className="navbar-brand" href="#">
              <b>GIC Shopping</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Menu Two 
                        <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Testimonials
                          </a>
                        </li>
                      </ul>
                      </a>
                      
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Menu Three
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Feature
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contant
                  </a>
                </li>
              </ul>
              <div className="">
                <a className="btn btn-outline-dark me-3  rounded-5" href="#">
                  Sign in
                </a>
                <a className="btn btn-primary rounded-5" href="#">
                  Register
                </a>
              </div>

              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                /> */}
              {/* <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    
  );
}
