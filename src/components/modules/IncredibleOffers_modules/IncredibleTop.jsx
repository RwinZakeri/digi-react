import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "../../../index.css";
function IncredibleOffersTop() {
  const imgData = [
    {
      id: 1,
      src: "../../../../public/images/Incredible_images/shgeft.png",
    },
    {
      id: 2,
      src: "../../../../public/images/Incredible_images/shgeft.png",
    },
    {
      id: 3,
      src: "../../../../public/images/Incredible_images/shgeft.png",
    },
  ];
  return (
    <div className="w-full mx-auto h-[400px] xl:w-11/12 mxa-w-[1330px]">
      <Swiper className="mySwiper w-full h-full">
        {imgData.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.src} className="object-cover h-full" alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default IncredibleOffersTop;
