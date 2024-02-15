import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './jsFolder/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.css';
import 'aos/dist/aos.css';
import Home from './jsFolder/Home';
import Feature1 from './jsFolder/Feature1';
import Feature2 from './jsFolder/Feature2';
import DigitalService from './jsFolder/DigitalService';
import Pricing from './jsFolder/Pricing';
import Advantage from './jsFolder/Advantage';
import Feedback from './jsFolder/Feedback';
import About from './jsFolder/About';
import OurNews from './jsFolder/OurNews';
import GetIntouch from './jsFolder/GetIntouch';
import Footer from './jsFolder/Footer';
import Aos from "aos";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  Aos.init();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/home",
        element: <Home/>,
    },
    {
        path: "/DigitalService",
        element: <DigitalService/>,
    },
    {
        path: "/Feature1",
        element: <Feature1/>,
    },
    {
        path: "/Feature2",
        element: <Feature2/>,
    },
    {
        path: "/Pricing",
        element: <Pricing/>,
    },
    {
        path: "/Advantage",
        element: <Advantage/>,
    },
    {
        path: "/Feedback",
        element: <Feedback/>,
    },
    {
        path: "/About",
        element: <About/>,
    },
    {
        path: "/OurNews",
        element: <OurNews/>,
    },
    {
        path: "/GetIntouch",
        element: <GetIntouch/>,
    },
    {
        path: "/Footer",
        element: <Footer/>,
    },
  ]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);
