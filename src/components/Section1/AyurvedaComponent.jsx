import React from "react";
import "./AyurvedaComponent.css";
import image1 from "../../assets/Section1Img/images/img1.png";
import image2 from "../../assets/Section1Img/images/img2.png";
import image3 from "../../assets/Section1Img/images/img3.png";
import image4 from "../../assets/Section1Img/images/img4.png";
import image5 from "../../assets/Section1Img/images/img5.png";
import image6 from "../../assets/Section1Img/images/img6.png";
import image7 from "../../assets/Section1Img/images/img7.png";
const AyurvedaComponent = () => {
  const features1 = [
    {
      title: "Personalized Wellness",
      description:
        "Get treatments made just for you based on your individual doshas (body type).",
      img: image2,
    },
    {
      title: "Focus on prevention",
      description: "Stop problems even before they start.",
      img: image3,
      id: "false",
    },
    {
      title: "Mind-Body Connection",
      description: "Keep your mind and body in sync for a happy life.",
      img: image4,
    },
  ];
  const features2 = [
    {
      title: "Holistic Healing",
      description: "Fix the root problem for long-lasting health.",
      img: image5,
    },
    {
      title: "Natural Remedies",
      description: "Using herbs and natural therapies for healing.",
      img: image6,
      id: "false",
    },
    {
      title: "Boosting immunity",
      description: "Stay strong and healthy for life, not just for today.",
      img: image7,
    },
  ];

  return (
    <div className="container2">
      <h1>Discover Ayurveda’s Magic With Us</h1>
      <p className="para">
        Ayurvedic treatment aims to balance your body and mind, bringing harmony
        and vitality. It’s like a journey to better health using ancient wisdom,
        a totally effective approach for a better life.
      </p>

      <div className="feature_text_image">
        <div className="img_text">
          {features1.map((feature, index) => (
            <div
              style={{
                position: feature.id == "false" && "absolute",
                left: "-4vw",
              }}
              className="each_item_from_array_left"
            >
              <img src={feature.img} alt="" />
              <div>
                <h3 style={{ margin: "0", color: "#2E7D32" }}>
                  {feature.title}
                </h3>
                <p style={{ margin: "0", color: "#666" }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="center_img">
          <img
            src={image1}
            alt="Ayurveda Meditation"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="img_text">
          {features2.map((feature, index) => (
            <div
              style={{
                position: feature.id == "false" && "absolute",
                left: "4vw",
              }}
              className="each_item_from_array_right"
            >
              <img src={feature.img} alt="" />
              <div>
                <h3 style={{ margin: "0", color: "#2E7D32" }}>
                  {feature.title}
                </h3>
                <p style={{ margin: "0", color: "#666" }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AyurvedaComponent;
