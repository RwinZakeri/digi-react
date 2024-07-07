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
function Hot({ data }) {
  return (
    <div className="w-11/12 max-w-[1336px] mx-auto border-2 rounded-xl m-8">
      <h1 className="text-center flex items-center justify-center text-[25px] p-2">
        <FaFireFlameCurved className="text-yellow-400" />
        داغ ترین چند ساعت گذشته
      </h1>
      <div className="w-full h-full flex gap-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={2}
          centeredSlides={false}
          navigation
          className="slider2"
        >
          <div className="flex h-full flex-wrap">
            {/* <SwiperSlide>
              <HotCard number="1" />
              <HotCard number="2" />
              <HotCard number="3" />
            </SwiperSlide> */}
            {data.slice(0, 1).map((item, index) => (
              <>
                <SwiperSlide>
                  <HotCard number={item.id} />
                  <HotCard number={item.id} />
                  <HotCard number={item.id} />
                </SwiperSlide>
              </>
            ))}
            {data.slice(0, 1).map((item, index) => (
              <>
                <SwiperSlide>
                  <HotCard number={item.id} />
                  <HotCard number={item.id} />
                  <HotCard number={item.id} />
                </SwiperSlide>
              </>
            ))}
            {data.slice(0, 1).map((item, index) => (
              <>
                <SwiperSlide>
                  <HotCard number={item.id} />
                  <HotCard number={item.id} />
                  <HotCard number={item.id} />
                </SwiperSlide>
              </>
            ))}
            {data.slice(0, 1).map((item, index) => (
              <>
                <SwiperSlide>
                  <HotCard number={item.id} />
                  <HotCard number={item.id} />
                  <HotCard number={item.id} />
                </SwiperSlide>
              </>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Hot;
