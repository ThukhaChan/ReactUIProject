import React, { useState } from "react";
import "../cssFolder/Feature.css";
import "../cssFolder/App.css";
import about from "../imageFolder/about.svg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function About() {
  const [counterOn, setConterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setConterOn(true)}
      onExit={() => setConterOn(false)}
    >
      <div className="mt-lg-5" id="about">
        <div className="container p-lg-5">
          <div className="row justify-content-between">
            {/* SVG photo Section */}
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <img src={about} className="img-fluid" alt="market"></img>
            </div>
            {/*  About Us paragraph Section */}
            <div className="col-lg-4">
              {/* Title About Us  */}
              <div className="mb-4" data-aos="fade-up" data-aos-delay="0">
                <span className="caption text-primary">
                  <b>About</b>
                </span>
                <h1 className="heading">About Us</h1>
              </div>
              {/* paragraph  */}
              <div
                className="mb-4 txtgr"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast
                </p>
                <p>
                  Separated they{" "}
                  <span className="highlight">
                    live in Bookmarksgrove right at the coast of the Semantics
                  </span>
                  , a large language ocean. A small river named Duden flows by
                  their place and supplies it with the necessary regelialia.
                </p>
              </div>
              {/* list  */}
              <ul
                className="list-unstyled primary mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ color: "gray" }}
              >
                <li className="check position-relative ps-4">
                  There live the blind texts
                </li>
                <li className="check position-relative ps-4">
                  Far far away behind the word
                </li>
                <li className="check position-relative ps-4">
                  Their place and supplies
                </li>
              </ul>
              {/* CountUp  */}
              <div className="row count-numbers">
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0">
                  <h1>
                    <span className="counter d-block">
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={90}
                          duration={20}
                          delay={0}
                        ></CountUp>
                      )}
                      <span>M</span>
                    </span>
                  </h1>
                  <span className="caption-2 txtgr fs-6">Members</span>
                </div>

                <div
                  className="col-lg-6 "
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h1>
                    <span className="counter d-block">
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={15}
                          duration={25}
                          delay={0}
                        ></CountUp>
                      )}
                      <span />
                    </span>
                  </h1>
                  <span className="caption-2 txtgr fs-6">Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
