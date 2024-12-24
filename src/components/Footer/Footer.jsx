import React from "react";
import "./footer.css";
import fb from "../../assets/Footer/images/f.png";
import insta from "../../assets/Footer/images/insta.png";
import yt from "../../assets/Footer/images/yt.png";
import x from "../../assets/Footer/images/x.png";
import lkin from "../../assets/Footer/images/lkin.png";
import pintrest from "../../assets/Footer/images/p.png";
const Footer = () => {
  const innerWidth = window.innerWidth;
  console.log("innerWidth=" + innerWidth);
  return (
    <div className="footer">
      <div
        className="get_in_touch"
        style={{ display: innerWidth > 600 ? "none" : "flex" }}
      >
        <h3>Get in Touch</h3>
        <p>support@amrutam.co.in</p>
        <p>
          Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar,
          Gwalior - 474001
        </p>
        <p> +91 9713171999</p>
        <div className="icons">
          <span>
            <img src={fb} alt="" />
          </span>
          <span>
            <img src={insta} alt="" />
          </span>
          <span>
            <img src={yt} alt="" />
          </span>
          <span>
            <img src={x} alt="" />
          </span>
          <span>
            <img src={lkin} alt="" />
          </span>
          <span>
            <img src={pintrest} alt="" />
          </span>
        </div>
      </div>
      <div className="footer_text">
        <h3>Information</h3>
        <p>About Us </p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <p>Privacy Policy for Mobile Apps</p>
        <p>Shipping and Returns Policy</p>
        <p>International Delivery</p>
        <p>For Businesses, Hotels and Resorts</p>
      </div>
      <div
        className="text_and_mail"
        style={{ display: innerWidth > 600 ? "none" : "flex" }}
      >
        <h3>Subscribe to our Newsletter and join Amrutam Family today!</h3>
        <div className="input_button">
          <input type="text" placeholder="Your Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
