import React, { useRef, useState } from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../index.css";
// import required modules
import { Pagination } from "swiper/modules";
// components
import HotCard from "../../modules/Home_module/HotCard";
function Hot({ data, text }) {
  console.log(data);
  return (
    <div className="w-11/12 max-w-[1336px] mx-auto border-2 rounded-xl m-8">
      <h1 className="text-center flex items-center justify-center text-[20px] p-2">
        <FaFireFlameCurved className="text-yellow-400" />

        {text}
      </h1>
      <div className="w-full h-full flex gap-4">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,

              spaceBetween: 5,
            },
            1536: {
              slidesPerView: 4,

              spaceBetween: 60,
            },
            1920: {
              slidesPerView: 4,

              spaceBetween: 7,
            },
            2560: {
              slidesPerView: 13.5,
              spaceBetween: 80,
            },
          }}
          spaceBetween={2}
          centeredSlides={false}
          navigation
          className="slider2 w-full h-full"
        >
          {data.map((item, index) => (
            <SwiperSlide className="w-full h-full">
              {item.products.map((item) => (
                <HotCard key={item.id} {...item} />
              ))}
            </SwiperSlide>
          ))}
          ;
        </Swiper>
      </div>
    </div>
  );
}

export default Hot;
