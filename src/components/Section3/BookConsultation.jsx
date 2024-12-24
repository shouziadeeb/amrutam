import React from "react";
import "./bookConsultation.css";
import img from "../../assets/Section3Img/images/twobottle.png";
import img2 from "../../assets/Section3Img/images/fullbottle.png";
const BookConsultation = () => {
  const innerWidth = window.innerWidth;
  return (
    <div className="container3">
      <img src={innerWidth > 600 ? img : img2} alt="" />
      <div className="container3_text">
        <h1 className="heading">
          Ready to restore harmony in your mind, body and spirit?
        </h1>
        <button>Book a consultation</button>
      </div>
    </div>
  );
};

export default BookConsultation;
