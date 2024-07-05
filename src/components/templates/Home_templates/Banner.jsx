import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../index.css";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Data
import sliderData from "../../../data/db.json";

function Banner() {
  const { slider } = sliderData;

  return (
    <div className="w-full h-full object-fill flex row">
      <div className="w-full h-full mx-auto relative hidden md:block">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slider.map((item) => (
            <SwiperSlide key={item.id} className="bg-red-500">
              <div>
                <img
                  src={item.desktop}
                  className="w-full mx-auto bg-red-400"
                  alt={item.id}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full h-full relative block md:hidden mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slider.map((item) => (
            <SwiperSlide className=" mx-auto" key={item.id}>
              <div>
                <img src={item.phone} className=" mx-auto" alt={item.id} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
