import React from "react";
import "./AmrutamApp.css";
import appleStore from "../../assets/Section7Img/images/applestore.png";
import appStore from "../../assets/Section7Img/images/playstore.png";
import iphone13 from "../../assets/Section7Img/images/iphone13.png";
// import phoneMockup from "../assets/phone-mockup.png";

const AmrutamApp = () => {
  const innerWidth = window.innerWidth;
  return (
    <div className="container7">
      <div className="left_7">
        <div className="txet_container">
          <h1 className="app-title">Amrutam Home App</h1>
          <p className="description">
            The Amrutam Home App is your one-stop app for all things Ayurvedic.
            Apart from mimicking the significant characteristics of our website,
            it also offers a wide range of additional features.
          </p>
          <div
            className="phoneImg"
            style={{ display: innerWidth < 600 ? "flex" : "none" }}
          >
            <img src={iphone13} alt="" />
          </div>{" "}
          <p className="highlight">
            Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across
            The Globe
          </p>
        </div>
        <div className="buttons_and_getApp">
          <h2 className="app-call-to-action">Get The App Now</h2>
          <div className="app-buttons">
            <img
              src={appStore}
              alt="Get it on Google Play"
              className="store-button"
            />
            <img
              src={appleStore}
              alt="Download on the App Store"
              className="store-button"
            />
          </div>
        </div>
      </div>
      <div
        className="right_7"
        style={{ display: innerWidth > 600 ? "flex" : "none" }}
      >
        <div className="circle_7 circle1"></div>
        <div className="circle_7 circle2"></div>
        <img src={iphone13} alt="" />
      </div>
    </div>
  );
};

export default AmrutamApp;
