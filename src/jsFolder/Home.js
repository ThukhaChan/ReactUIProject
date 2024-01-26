import React from "react";
import market from "../imageFolder/market.svg";
import '../cssFolder/Home.css';

export default function Home() {
  return (
    <div className="container"id="home">
      <div className="mt-5">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="row align-items-center">
              {/* SVG photo */}
              <div
                className="col-lg-7 ml-auto order-lg-2 "
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <img src={market} className="img-fluid" alt="market"></img>
              </div>
              {/* Text  */}
              <div className="col-lg-5" 
                  data-aos="fade-up"
                  data-aos-duration="1000">

                <h1 className="header">
                  Promote Your Products by Colorlib
                </h1>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p className="para">
                    Another cool free html css template by{" "}
                    <a href="#" target="_blank" className="highlight">
                      Colorlib
                    </a>{" "}
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast
                  </p>
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <a
                    href="#feature"
                    className="btn btn-primary smoothscroll me-2 rounded-5"
                  >
                    See Features
                  </a>
                  <a
                    href="#pricing"
                    className="btn btn-outline-primary smoothscroll  me-2 rounded-5"
                  >
                    Pricing
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
