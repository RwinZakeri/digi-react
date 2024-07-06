// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "../../../index.css";
// // import required modules
// import { Pagination } from "swiper/modules";
// // other
// import { Link } from "react-router-dom";
// // images
// import digiText from "../../../../public/images/Home_images/svg/digiText.svg";
// import shoe from "../../../../public/images/Incredible_images/General.png";
// // components
// import ShegeftMontakhabProductCard from "../../modules/IncredibleOffers_modules/ShegeftMontakhabProductCard";
// function ShegeftMontakhab() {
//   return (
//     <div className="w-11/12 2xl:w-11/12 h-[300px] mx-auto overflow-hidden rounded-3xl ">
//       {/* right */}
//       <div className="bg-[#D92F4E] w-full h-full flex gap-4 px-4 items-center justify-center">
//         <Swiper
//           slidesPerView={8}
//           spaceBetween={2}
//           centeredSlides={false}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <div className="w-full max-h-[235px] bg-[#D92F4E] flex items-center rounded-3xl">
//               {/* right */}
//               <div className="w-full flex items-center flex-col justify-center">
//                 <img src={digiText} className="h-[20%]" alt="text" />
//                 <img src={shoe} className="h-[130px]" alt="text" />
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <ShegeftMontakhabProductCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <ShegeftMontakhabProductCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <ShegeftMontakhabProductCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <ShegeftMontakhabProductCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <ShegeftMontakhabProductCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <ShegeftMontakhabProductCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <ShegeftMontakhabProductCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <ShegeftMontakhabProductCard />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// export default ShegeftMontakhab;

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../index.css";
// import required modules
import { Pagination } from "swiper/modules";
// other
import { Link } from "react-router-dom";
// images
import digiText from "../../../../public/images/Home_images/svg/digiText.svg";
import shoe from "../../../../public/images/Incredible_images/General.png";
// components
import ShegeftMontakhabProductCard from "../../modules/IncredibleOffers_modules/ShegeftMontakhabProductCard";
import { ShegeftMontakhabProductData } from "../../../data/ShegeftMontakhabProductData";
//
const MySwiperComponent = () => {
  return (
    <div className="w-11/12 2xl:w-11/12 h-[300px] mx-auto overflow-hidden rounded-3xl ">
      <div className="bg-[#D92F4E] w-full h-full flex gap-4 px-4 items-center justify-center">
        <Swiper
          slidesPerView={2}
          spaceBetween={2}
          centeredSlides={false}
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
            1536: {
              slidesPerView: 10,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full max-h-[235px] bg-[#D92F4E] flex items-center rounded-3xl">
              <div className="w-full flex items-center flex-col justify-center">
                <img src={digiText} className="h-[20%]" alt="text" />
                <img src={shoe} className="h-[130px]" alt="text" />
              </div>
            </div>
          </SwiperSlide>

          {ShegeftMontakhabProductData.map((item) => (
            <SwiperSlide key={item.id}>
              <ShegeftMontakhabProductCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MySwiperComponent;
