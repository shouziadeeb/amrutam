import React from "react";
import "./stories.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Stories = () => {
  const reviewArray = [
    {
      consulted: "Skin",
      name: "Sophie Moore",
      review: "“One of a kind service”",
      rating: "★★★★★",
      date: "17/02/24",
      location: "Chennai",
      para: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
    {
      consulted: "Hair",
      name: "Sophie Moore",
      review: "“One of a kind service”",
      rating: "★★★★★",
      date: "17/02/24",
      location: "Chennai",
      para: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
    {
      consulted: "Hair",
      name: "Sophie Moore",
      review: "“One of a kind service”",
      rating: "★★★★★",
      date: "17/02/24",
      location: "Chennai",
      para: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
  ];

  return (
    <div className="container5">
      <div className="heading">
        <h1>STORIES FROM OUR VALUED CUSTOMERS!</h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={-10}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
      >
        {reviewArray.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="story_card">
              <div className="story_card_header">
                <div
                  className="consulted_by"
                  style={{
                    backgroundColor:
                      item.consulted === "Skin" ? "#ECE7FF" : "#ECFEE7",
                  }}
                >
                  <p>Consulted for {item.consulted}</p>
                </div>
                <div className="name_date_loct">
                  <div className="span_name">
                    <span></span>
                    <div>
                      <p
                        style={{
                          fontWeight: "bold",
                          color: "#414141",
                        }}
                      >
                        {item.name}
                      </p>
                      <p style={{ color: "#C3C3C3" }}>{item.location}</p>
                    </div>
                  </div>

                  <p>{item.date}</p>
                </div>
              </div>
              <div className="stars">
                <p>{item.rating}</p>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
              <div className="story_card_content">
                <p className="review">{item.review}</p>
                <p className="para">{item.para}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Stories;
