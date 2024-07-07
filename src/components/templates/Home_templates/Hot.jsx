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
function Hot() {
  return (
    <div className="w-11/12 max-w-[1336px] mx-auto border-2 rounded-xl m-8">
      <h1 className="text-center flex items-center justify-center text-[25px] p-2">
        <FaFireFlameCurved className="text-yellow-400" />
        داغ ترین چند ساعت گذشته
      </h1>
      <div className="w-full h-full flex gap-4">
        <Swiper
          slidesPerView={
            window.innerWidth >= 1600
              ? 4
              : window.innerWidth >= 1220
              ? 3
              : window.innerWidth >= 782
              ? 1
              : window.innerWidth >= 668
              ? 1
              : 1
          }
          spaceBetween={2}
          centeredSlides={false}
          className="mySwiper"
        >
          <div className="flex h-full flex-wrap">
            <SwiperSlide>
              <HotCard number="1" />
              <HotCard number="2" />
              <HotCard number="3" />
            </SwiperSlide>
            <SwiperSlide>
              <HotCard number="4" />
              <HotCard number="5" />
              <HotCard number="6" />
            </SwiperSlide>
            <SwiperSlide>
              <HotCard number="7" />
              <HotCard number="8" />
              <HotCard number="9" />
            </SwiperSlide>
            <SwiperSlide>
              <HotCard number="10" />
              <HotCard number="11" />
              <HotCard number="12" />
            </SwiperSlide>
            <SwiperSlide>
              <HotCard number="13" />
              <HotCard number="14" />
              <HotCard number="15" />
            </SwiperSlide>
            <SwiperSlide>
              <HotCard number="16" />
              <HotCard number="17" />
              <HotCard number="18" />
            </SwiperSlide>
            <SwiperSlide>
              <HotCard number="7" />
              <HotCard number="7" />
              <HotCard number="7" />
            </SwiperSlide>
            <SwiperSlide>
              <HotCard number="7" />
              <HotCard number="7" />
              <HotCard number="7" />
            </SwiperSlide>
            <SwiperSlide>
              <HotCard number="7" />
              <HotCard number="7" />
              <HotCard number="7" />
            </SwiperSlide>
            <SwiperSlide>
              <HotCard number="7" />
              <HotCard number="7" />
              <HotCard number="7" />
            </SwiperSlide>
            <SwiperSlide>
              <HotCard number="7" />
              <HotCard number="7" />
              <HotCard number="7" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Hot;
