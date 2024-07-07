import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../index.css";
// other
import { Link } from "react-router-dom";
// icons & images
import digiText from "../../../../public/images/Home_images/svg/digiText.svg";
import laugh from "../../../../public/images/Fresh_images/Banner/fresh-incredible-carousel-artwor.png";
// components
import FreshProductCard from "../../modules/Fresh_module/FreshProductCard";
// data
import { FreshBarProduct } from "../../../data/HomeProductBarData";
function FreshProductBar() {
  return (
    <div className="w-11/12 2xl:w-4/6 h-[450px] mx-auto my-4 overflow-hidden rounded-3xl ">
      {/* right */}
      <div className="bg-[#04B053] w-full h-full flex gap-4 px-4 items-center justify-center">
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={50}
          grabCursor={true}
          className="mySwiper h-[85%]"
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 6.2,

              spaceBetween: 0,
            },
            1536: {
              slidesPerView: 6,

              spaceBetween: 60,
            },
            1920: {
              slidesPerView: 6.7,

              spaceBetween: 7,
            },
            2560: {
              slidesPerView: 13.5,
              spaceBetween: 80,
            },
          }}
        >
          <SwiperSlide className="hidden md:block h-full">
            <div className="w-[150px] h-[400px] bg-[#04B053] flex items-center rounded-3xl">
              {/* right */}
              <div className="w-full h-full flex items-center flex-col justify-center ">
                <img src={digiText} className="h-[35%]" alt="text" />
                {/* <Timer /> */}
                <img src={laugh} className="h-4/12" alt="text" />
                <span className="w-full block text-center">
                  <p
                    to={"/"}
                    className="text-[#fafafa] py-2 border-2 rounded-lg"
                  >
                    مشاهده همه {">"}
                  </p>
                </span>
              </div>
            </div>
          </SwiperSlide>
          {FreshBarProduct.map((item, index) => (
            <SwiperSlide key={index}>
              <FreshProductCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FreshProductBar;

// {HomeProductData.map((item) => (
//   <ProductsCard
//     key={item.id}
//     title={item.title}
//     price={item.price}
//     discount={item.discount}
//     image={item.image}
//   />
// ))}
