import React from "react";
import market from "./market.svg";

export default function Home() {
  return (
    
    <div className="container">
      <div className="mt-5">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="row align-items-center">
              <div
                className="col-lg-7 ml-auto order-lg-2 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay={400}
              >
                <img src={market} className="img-fluid" alt="market"></img>
              </div>

              <div className="col-lg-5">
                <h1 style={{ fontSize: "70px" }}>
                  Promote Your Products by Colorlib
                </h1>

                <div
                  className="excerpt aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <p style={{ color:"gray" }}>
                    Another cool free html css template by{" "}
                    <a href="#" target="_blank" className="highlight">
                      Colorlib
                    </a >{" "}
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast
                  </p>
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="aos-init aos-animate"
                >
                  <a
                    href="#features-section"
                    className="btn btn-primary smoothscroll me-2 rounded-5"
                  >
                    See Features
                  </a>
                  <a
                    href="#pricing-section"
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
