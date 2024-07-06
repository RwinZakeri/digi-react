import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../../index.css";
import { CiBullhorn } from "react-icons/ci";

// component
import OrderCard from "../../modules/IncredibleOffers_modules/OrderCard";
// data
import { OrderData } from "../../../data/OrderData";

function Order() {
  return (
    <div className="w-11/12 h-auto flex justify-center rounded-sm font-digikala mx-auto mt-5">
      <div className="w-full flex flex-col mx-auto my-auto border border-[#e0e0e2] rounded-lg bg-white overflow-hidden">
        <div className="flex flex-col gap-y-2 px-6 py-5">
          <div className="flex justify-start items-center gap-x-2">
            <CiBullhorn size={21} className="text-pink-500" />
            <span className="text-[15px] font-bold pt-2">
              شگفت‌انگیز سفارشی
            </span>
          </div>
          <div className="bg-red-600 w-20 h-[2px]"></div>
        </div>
        <div className="w-full flex flex-col md:flex-row">
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
            {OrderData.map((product, index) => (
              <SwiperSlide className="max-w-full" key={index}>
                <OrderCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Order;
