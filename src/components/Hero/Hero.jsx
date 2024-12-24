import React from "react";

import img1 from "../../assets/HeroImg/images/img1.png";
import img2 from "../../assets/HeroImg/images/img2.png";
import img3 from "../../assets/HeroImg/images/img3.png";
import img4 from "../../assets/HeroImg/images/img4.png";
import menImg from "../../assets/HeroImg/images/men.png";
import men_forphoneImg from "../../assets/HeroImg/images/for_phone.png";
import menu from "../../assets/HeroImg/images/menu.png";
import logo from "../../assets/HeroImg/images/logo.png";
import "./hero.css";
const Hero = () => {
  const innerWidhth = window.innerWidth;
  const array = [
    {
      img: img1,
      text: "Convenient Online & In- Clinic Consultations",
    },
    {
      img: img2,
      text: "Safe and effective treatment",
    },
    {
      img: img3,
      text: "Experienced Ayurvedic Practitioners",
    },
    {
      img: img4,
      text: "personalized Treatment Plans & Guidance",
    },
  ];
  return (
    <div className="container ">
      <div
        className="main_header"
        style={{ display: innerWidhth > 600 ? "none" : "flex" }}
      >
        <div className="header_content">
          <div className="header_icon">
            <img src={menu} alt="" />
          </div>
          <img src={logo} alt="" className="logo" />
        </div>
      </div>
      <div className="photo_div">
        <div
          className="for_phone_img"
          style={{ display: innerWidhth > 600 ? "none" : "block" }}
        >
          <img src={men_forphoneImg} alt="" />
        </div>
        <div
          className="left_color_div"
          style={{ display: innerWidhth < 600 ? "none" : "block" }}
        ></div>
        <div
          className="right_photo_div"
          style={{ display: innerWidhth < 600 ? "none" : "block" }}
        >
          <img src={menImg} alt="" />
        </div>
        <div className="linier_gredient">
          <div className="hero_text">
            <h3>Namaste, Welcome to Amrutam </h3>
            <h1>
              Step into Holistic Healing with Ayurveda Book Consultation with
              certified Experts.
            </h1>
            <p>
              Dive into the world of ayurveda and Experience Personalized Health
              Solutions and Holistic Guidance from Trusted Ayurvedic Doctors
              Anytime, anywhere.
            </p>
            <button>Book an Appointment</button>
          </div>
        </div>
      </div>

      <div className="text_and_img">
        {array.map((item, index) => (
          <div key={index} className="hero_img_container">
            <img src={item.img} alt="" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
