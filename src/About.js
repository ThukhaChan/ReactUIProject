import React, { useState } from "react";
import about from "./about.svg";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
export default function () {
  const [counterOn, setConterOn]=useState(false);
  return (
    <ScrollTrigger onEnter={()=>setConterOn(true)}onExit={()=> setConterOn(false)}  >
    <div className="mt-lg-5" id="about">
      <div className="container p-lg-5">
        <div className="row justify-content-between">
          
            <div className="col-lg-8"data-aos="fade-up" 
              data-aos-delay="100">
              <img src={about} className="img-fluid" alt="market"></img>
            </div>

            <div className="col-lg-4">
              <div
                className="mb-4"
                data-aos="fade-up" 
              data-aos-delay="0"
              >
                <span className="caption"style={{ color:'blue' }}><b>About</b></span>
                <h1 className="heading">About Us</h1>
              </div>
              <div
                className="mb-4 "
                style={{ color:"gray" }}
                data-aos="fade-up" 
              data-aos-delay="100"
              >
                <p >
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
              <ul
                className="list-unstyled ul-check primary mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ color:"gray" }}
              >
                <li>There live the blind texts</li>
                <li>Far far away behind the word</li>
                <li>Their place and supplies</li>
              </ul>
              <div className="row count-numbers">
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <span className="counter d-block" style={{ fontSize:'50px' }}>
                    {/* <span data-number={59} >59</span> */}
                    {counterOn &&<CountUp start={0} end={59} duration={10} delay={0}></CountUp>}
                    <span>M</span>
                  </span>
                  <span className="caption-2"style={{ fontSize:'13px' , color:'gray'}}>Members</span>
                </div>
                <div
                  className="col-lg-6 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className="counter d-block" style={{ fontSize:'50px' }}>
                    {/* <span data-number={14}>14</span> */}
                    {counterOn &&<CountUp start={0} end={14} duration={15} delay={0}></CountUp>}
                    <span />
                  </span>
                  <span className="caption-2" style={{ fontSize:'13px' , color:'gray'}}>Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ScrollTrigger>
  );
}
