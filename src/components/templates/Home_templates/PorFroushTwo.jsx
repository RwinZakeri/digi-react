import React from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../index.css";
import { Pagination } from "swiper/modules";
import ProforoushCard from "../../modules/Home_module/PorFouroshCard";

function PorFroush() {
  return (
    <div className="w-11/12 max-w-[1336px] mx-auto border-2 rounded-xl m-8">
      <h1 className="text-center flex items-center justify-center text-[25px] p-2">
        <FaFireFlameCurved className="text-yellow-400" />
        داغ ترین چند ساعت گذشته
      </h1>
      <div className="w-full h-full flex gap-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          centeredSlides={false}
          breakpoints={{
            668: {
              slidesPerView: 1,
            },
            782: {
              slidesPerView: 2,
            },
            1220: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {Array.from({ length: 8 }, (_, index) => (
            <SwiperSlide key={index}>
              <ProforoushCard number={index + 1} />
              <ProforoushCard number={index + 2} />
              <ProforoushCard number={index + 3} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PorFroush;
