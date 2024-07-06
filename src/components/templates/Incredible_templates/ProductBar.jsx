import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../../index.css";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { PiShootingStarBold } from "react-icons/pi";
// compnents
import ProductBarCard from "../../modules/IncredibleOffers_modules/ProductBarCard";
// data
import { IncredibleProductBarData } from "../../../data/IncredibleData";

function ProductBard() {
  return (
    <div className="w-full lg:w-11/12 h-[400px] md:h-[340px] mx-auto my-4 bg-[#E4123C] rounded-xl">
      <div className="p-4 text-white flex items-center gap-4 mb-2">
        <PiShootingStarBold size={32} />
        <h3>شگفت‌انگیز روز</h3>
      </div>
      <div className="w-full overflow-x-auto flex items-center justify-center">
        <Swiper
          slidesPerView={2.2}
          spaceBetween={30}
          freeMode={true}
          className="mySwiper"
        >
          {IncredibleProductBarData.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductBarCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductBard;
