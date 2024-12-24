import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./ayurvedaExperts.css";
import womenImg from "../../assets/Sectiion6Img/Images/women.png";

const AyurvedaExperts = () => {
  const experts = [
    {
      name: "Dr. Vaishali Sharma",
      qualification: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      specialty: "Skin Specialist",
      rating: 4.5,
      image: womenImg,
    },
    {
      name: "Dr. Vaishali Sharma",
      qualification: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      specialty: "Skin Specialist",
      rating: 4.5,
      image: womenImg,
    },
    {
      name: "Dr. Vaishali Sharma",
      qualification: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      specialty: "Skin Specialist",
      rating: 4.5,
      image: womenImg,
    },
    {
      name: "Dr. Vaishali Sharma",
      qualification: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      specialty: "Skin Specialist",
      rating: 4.5,
      image: womenImg,
    },
    {
      name: "Dr. Vaishali Sharma",
      qualification: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      specialty: "Skin Specialist",
      rating: 4.5,
      image: womenImg,
    },
  ];

  return (
    <div className="container6">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Meet Our Ayurveda Experts
      </h1>
      <div className="swiper_div">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={1}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          <div className="card_container">
            {experts.map((expert, index) => (
              <SwiperSlide key={index}>
                <div className="experts_card">
                  <div className="img_div">
                    <img src={expert.image} alt={expert.name} />
                    <div className="ratings_stars">{expert.rating} ⭐</div>
                  </div>
                  <h4>{expert.name}</h4>
                  <p style={{ color: "#838383" }}>{expert.qualification}</p>
                  <p>{expert.experience}</p>
                  <p className="specialty_text">{expert.specialty}</p>
                  <button>Book a session</button>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <button className="find_more">Find more experts </button>
    </div>
  );
};

export default AyurvedaExperts;
