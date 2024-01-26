import React from "react";

export default function Header() {
  return (
    <div className="p-3">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h4>
              <b>
                Lunch<span className=" text-primary">.</span>
              </b>
            </h4>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
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
                    <a className="dropdown-item" href="#feedback">
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
                <a className="nav-link" href="#feature">
                  Feature
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="Log Button">
              <a className="btn btn-outline-primary me-3  rounded-5" href="#">
                Sign in
              </a>
              <a className="btn btn-primary rounded-5" href="#">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
