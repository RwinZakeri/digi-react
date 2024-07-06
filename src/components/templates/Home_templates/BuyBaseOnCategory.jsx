import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../../index.css";
// data
import { BuyBaseOnCategoryData } from "../../../data/BuyBaseOnCategoryData";

function BuyBaseOnCategory() {
  return (
    <div className="w-11/12 2xl:w-4/6 mx-auto text-center my-4 py-4">
      <h1 className="text-2xl">خرید بر اساس دسته‌بندی</h1>
      <div className="w-full lg:flex gap-r-12 gap-x-12 flex-nowrap flex-col justify-center items-center hidden">
        <div className="w-full flex mx-auto justify-center items-center gap-16">
          {BuyBaseOnCategoryData.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="w-[100px] h-[150px] flex flex-col justify-between rounded-full py-4 "
            >
              <img src={item.img} alt="BuyBaseOnCategoryImage" />
              <p className="text-[12px]">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex mx-auto justify-center items-center gap-16">
          {BuyBaseOnCategoryData.slice(8, 16).map((item) => (
            <div
              key={item.id}
              className="w-[100px] h-[150px] flex flex-col justify-between rounded-full py-4"
            >
              <img src={item.img} alt="BuyBaseOnCategoryImage" />
              <p className="text-[12px]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile */}
      <div className="w-full flex gap-12 flex-wrap flex-row justify-center md:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={3}
          freeMode={true}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 7,

              spaceBetween: 50,
            },
            1536: {
              slidesPerView: 8,

              spaceBetween: 60,
            },
            1920: {
              slidesPerView: 10.5,

              spaceBetween: 7,
            },
            2560: {
              slidesPerView: 13.5,
              spaceBetween: 80,
            },
          }}
        >
          {BuyBaseOnCategoryData.slice(0, ).map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-[100px] h-[150px] flex flex-col justify-between rounded-full py-4">
                <img src={item.img} alt="image" />
                <p className="text-[12px]">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BuyBaseOnCategory;
