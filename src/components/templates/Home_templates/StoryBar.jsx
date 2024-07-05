import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../../../index.css";
// data
import storyData from "../../../data/db.json";
// components
import StoryCard from "../../modules/Home_module/StoryCard";

function StoryBar() {
  return (
    <div className="w-full lg:w-[90%] mx-auto h-[155px] pt-8">
      <div className="w-11/12 2xl:w-10/12 h-full mx-auto flex row">
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={50}
          grabCursor={true}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 10,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 11.8,

              spaceBetween: 50,
            },
            1536: {
              slidesPerView: 12.5,

              spaceBetween: 60,
            },
            1920: {
              slidesPerView: 14.9,

              spaceBetween: 7,
            },
            2560: {
              slidesPerView: 13.5,
              spaceBetween: 80,
            },
          }}
        >
          {storyData.story.map((item, index) => (
            <SwiperSlide key={index}>
              <StoryCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default StoryBar;
