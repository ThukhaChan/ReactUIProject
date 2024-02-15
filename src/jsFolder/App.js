import "../cssFolder/App.css";
import Header from "./Header";
// import Home from "./Home";
// import DigitalService from "./DigitalService";
// import Feature1 from "./Feature1";
// import Feature2 from "./Feature2";
// import Pricing from "./Pricing";
// import Advantage from "./Advantage";
// import Feedback from "./Feedback";
// import About from "./About";
// import OurNews from "./OurNews";
// import GetIntouch from "./GetIntouch";
import Footer from "./Footer";
import Aos from "aos";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="">
      
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}
export default App;
