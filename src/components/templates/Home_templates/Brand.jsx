import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../index.css";
// import required modules
import { Pagination } from "swiper/modules";
// icon
import { FaRegStar } from "react-icons/fa";
// data
import { BrandData } from "../../../data/BrandData";
function Brand() {
  return (
    <div className="w-11/12 2xl:w-4/6 mx-auto flex flex-col border-2 rounded-lg my-8 justify-center items-center">
      <div className="flex items-center gap-3 py-4 my-2">
        <FaRegStar size={24} style={{ color: "yellow" }} />
        <h1 className="text-2xl">محبوب‌ترین برندها</h1>
      </div>

      <div className="w-full h-full">
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={50}
          grabCursor={true}
          navigation
          className="slider2"
          breakpoints={{
            640: {
              slidesPerView: 3.8,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5.5,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 6.8,

              spaceBetween: 5,
            },
            1536: {
              slidesPerView: 6,

              spaceBetween: 60,
            },
            1920: {
              slidesPerView: 8,

              spaceBetween: 7,
            },
            2560: {
              slidesPerView: 13.5,
              spaceBetween: 80,
            },
          }}
        >
          {BrandData.map((item) => (
            <SwiperSlide className="border-l-2 h-[170px]" key={item.id}>
              <div className="w-[150px] h-[120px] px-4 py-2object-cover flex justify-center items-center">
                <img
                  src={item.img}
                  className="min-w-full min-h-full"
                  alt="brand"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Brand;
