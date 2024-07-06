import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../../index.css";
import { FreeMode, Pagination } from "swiper/modules";
import { BuyBaseOnCategoryData } from "../../../data/BuyBaseOnCategoryData";

function IncredibleCategory() {
  return (
    <div className="w-full lg:w-11/12 h-[160px] mx-auto rounded-xl flex items-center py-4 my-4">
      <Swiper
        slidesPerView={10}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 9,
            spaceBetween: 25,
          },
          1536: {
            slidesPerView: 10,
            spaceBetween: 30,
          },
        }}
        className="mySwiper w-full"
      >
        {BuyBaseOnCategoryData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-[114px] h-[150px] rounded-xl flex flex-col justify-evenly items-center">
              <img src={item.img} className="w-[90px] h-[90px]" alt="shop" />
              <p className="text-center text-[13px]">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default IncredibleCategory;
