import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="p-3">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand" href="">
            <h4>
              <b>
                Lunch<span className=" text-primary">.</span>
              </b>
            </h4>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#" to={"/home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to={"/"}
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
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
                <Link to={"/feature2"} className="nav-link" href="#">
                  Feature
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/pricing"} className="nav-link" href="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/getintouch"} className="nav-link" href="#">
                  Contact
                </Link>
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
