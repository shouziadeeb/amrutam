import React from "react";
import "./consultations.css";
import upparImg from "../../assets/Section3Img/images/upparimg.png";
import lower1 from "../../assets/Section3Img/images/lower1.png";
import lower2 from "../../assets/Section3Img/images/lower2.png";
const Consultations = () => {
  const innerWidth = window.innerWidth;
  return (
    <div className="ayurveda-container">
      <h2 className="title">What sets Ayurvedic consultations apart?</h2>
      <div className="grid">
        <div className="uppar_grid">
          <div
            className="lower-grid-item bordered"
            style={{
              width:
                innerWidth > 600
                  ? `calc(522 * var(--curr-device-width) / var(--ideal-viewport-width))`
                  : `80vw`,
              height: innerWidth < 600 && `70vw`,
            }}
          >
            <h3 className="sanskrit-text">
              “स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं”
            </h3>
            <p className="meaning">
              [ Meaning: The Goal of Ayurveda is to maintain the health of a
              healthy person and to cure the disease of a diseased person. ]
            </p>
          </div>
          <div
            className="uppar_img"
            style={{
              width:
                innerWidth > 600
                  ? `calc(522 * var(--curr-device-width) / var(--ideal-viewport-width))`
                  : `80vw`,
              // backgroundColor: "red",
            }}
          >
            <img
              src={upparImg}
              alt="milega"
              style={{
                width:
                  innerWidth > 600
                    ? `calc(522 * var(--curr-device-width) / var(--ideal-viewport-width))`
                    : `80vw`,
                height: innerWidth < 600 && `70vw`,
              }}
            />
          </div>
          <div
            className="lower-grid-item bordered"
            style={{
              width:
                innerWidth > 600
                  ? `calc(522 * var(--curr-device-width) / var(--ideal-viewport-width))`
                  : `80vw`,
              height: innerWidth < 600 && `70vw`,
            }}
          >
            <h3>Precise Diagnosis</h3>
            <p>
              Ayurveda’s core principles revolve around Vata, Pitta, and Kapha
              doshas, guiding you with precise diagnosis and treatment.
            </p>
          </div>
        </div>
        <div className="lower_grid">
          <div
            className="lower-grid-item bordered"
            style={{
              width:
                innerWidth > 600
                  ? `calc(522 * var(--curr-device-width) / var(--ideal-viewport-width))`
                  : `80vw`,
              height: innerWidth < 600 && `70vw`,
            }}
          >
            <h3>Zero side-effects</h3>
            <p>
              Ayurvedic treatments are devoid of chemicals and are based
              completely on natural herbs.
            </p>
          </div>

          <div
            className="lower_img"
            style={{
              width:
                innerWidth > 600
                  ? `calc(522 * var(--curr-device-width) / var(--ideal-viewport-width))`
                  : `80vw`,
              textAlign: "center",
              height: innerWidth < 600 && `70vw`,
            }}
          >
            <img src={lower1} alt="milega" />
          </div>

          <div
            className="lower-grid-item bordered"
            style={{
              width:
                innerWidth > 600
                  ? `calc(522 * var(--curr-device-width) / var(--ideal-viewport-width))`
                  : `80vw`,
              height: innerWidth < 600 && `70vw`,
            }}
          >
            <h3>Individual Treatment</h3>
            <p>
              All treatments are personalized based on a person's unique
              constitution and health concerns.
            </p>
          </div>

          <div
            className="lower_img"
            style={{
              width:
                innerWidth > 600
                  ? `calc(522 * var(--curr-device-width) / var(--ideal-viewport-width))`
                  : `80vw`,
              height: innerWidth < 600 && `70vw`,
            }}
          >
            <img src={lower2} alt="milega" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultations;
