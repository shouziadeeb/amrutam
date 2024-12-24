import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./approach.css";

const Approach = () => {
  const dataArray = [
    {
      num: 1,
      headding: "Make Appointment",
      para: "You must make an appointment in advance, to choose the service and date.",
    },
    {
      num: 2,
      headding: "Consultations",
      para: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      num: 3,
      headding: "Treatment Planning",
      para: "The Ayurvedic practitioner creates a personalized treatment plan for you.",
    },
    {
      num: 4,
      headding: "Maintenance",
      para: "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];

  return (
    <div className="container4">
      <div className="heading_and_text">
        <h1>Our Ayurvedic Approach</h1>
        <p>
          At Amrutam, we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={-3}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1424: { slidesPerView: 4 },
        }}
        className="data_array_boxes"
      >
        {dataArray.map((item) => (
          <SwiperSlide key={item.num}>
            <div className="approach_item_card">
              <div className="circle">{item.num}</div>
              <h1>{item.headding}</h1>
              <p>{item.para}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Approach;
