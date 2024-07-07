import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../../index.css";
import { CiBullhorn } from "react-icons/ci";
// icon
import { IoIosArrowBack } from "react-icons/io";

// component
import OrderCard from "../../modules/IncredibleOffers_modules/OrderCard";
// data
import { OrderData } from "../../../data/OrderData";
import FreshOrderCard from "../../modules/Fresh_module/FreshOrderCard";

function FreshOrder({ title, data }) {
  return (
    <div className="w-11/12 2xl:w-8/12 h-auto flex justify-center rounded-sm font-digikala mx-auto mt-5">
      <div className="w-full flex flex-col mx-auto my-auto border border-[#e0e0e2] rounded-lg bg-white overflow-hidden">
        <div className="flex flex-col gap-y-2 px-6 py-5">
          <div className="flex justify-between w-full items-center gap-x-2">
            <span className="text-[15px] font-bold pt-2">{title}</span>
            <span className="text-[12px] flex items-center  text-[#54C6D7]">
              مشاهده همه <IoIosArrowBack />
            </span>
          </div>
          <div className="bg-[#029A49] w-20 h-[2px]"></div>
        </div>
        <div className="w-full flex flex-col md:flex-row pb-6">
          <Swiper
            slidesPerView={2}
            spaceBetween={0}
            freeMode={true}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1536: { slidesPerView: 6 },
            }}
          >
            {data.map((product, index) => (
              <SwiperSlide className="w-[180px]" key={index}>
                <FreshOrderCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default FreshOrder;
