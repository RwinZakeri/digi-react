import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../index.css";
// other

import { Link } from "react-router-dom";
// icons & images
import digiText from "../../../../public/images/Home_images/svg/digiText.svg";
import laugh from "../../../../public/images/Home_images/svg/laugh.svg";
// components
import ProductsCard from "../../modules/Home_module/ProductsCard";
// data
import { HomeProductData } from "../../../data/HomeProductBarData";
function ProductBar() {
  return (
    <div className="w-11/12 2xl:w-4/6 h-[300px] mx-auto overflow-hidden rounded-3xl ">
      {/* right */}
      <div className="bg-[#D92F4E] w-full h-full flex gap-4 px-4 items-center justify-center">
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
              slidesPerView: 7.2,

              spaceBetween: 7,
            },
            2560: {
              slidesPerView: 13.5,
              spaceBetween: 80,
            },
          }}
        >
          <SwiperSlide className="hidden md:block">
            <div className="w-full max-h-[235px] bg-[#D92F4E] flex items-center rounded-3xl">
              {/* right */}
              <div className="w-full flex items-center flex-col justify-center">
                <img src={digiText} className="h-[20%]" alt="text" />
                {/* <Timer /> */}
                <img src={laugh} className="h-4/12" alt="text" />
                <span className="w-full block text-center">
                  <p to={"/"} className="text-[#fafafa]">
                    مشاهده همه {">"}
                  </p>
                </span>
              </div>
            </div>
          </SwiperSlide>
          {HomeProductData.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductsCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductBar;

// {HomeProductData.map((item) => (
//   <ProductsCard
//     key={item.id}
//     title={item.title}
//     price={item.price}
//     discount={item.discount}
//     image={item.image}
//   />
// ))}
