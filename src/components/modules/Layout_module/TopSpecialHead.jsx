import React, { useEffect, useState } from "react";
// images icon , logo
import SuperLogo from "../../../../public/images/Fresh_images/svg/superLogo.svg";
import HeaderLogo from "../../../../public/images/Fresh_images/fresh-header-logo.png";
import ExitHeader from "../../../../public/images/Fresh_images/svg/exitLogo.svg";
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

function TopSpecialHead() {
  return (
    <div className="w-full h-[64px] 2xl:w-[91.5%] mx-auto flex items-center justify-between ">
      <div className="flex items-center min-w-[200px] h-full">
        <img
          src={HeaderLogo}
          className="w-[45px] h-[45px] max-h-full"
          alt="fresh logo"
        />
        <img src={SuperLogo} className="max-h-full" alt="fresh logo" />
      </div>
      <div className="w-[63%] h-full flex items-center">
        <div className="w-full h-[65%] rounded-md bg-[#F0F0F1] flex items-center px-1">
          <span className="px-2 text-[#A1A3A8]">
            <IoIosSearch size={24} />
          </span>
          <span className="text-[13px] text-[#A1A3A8]">جستجو</span>
        </div>
      </div>
      <div className="flex items-center justify-between w-[335px] h-[46px]">
        {/* login */}
        <div className="w-[100px] h-[full] p-2 rounded-lg border-[1px] border-[#E0E0E2] relative box-content after:content-[''] after:absolute after:left-[-7%] after:top-2 after:w-[1px] after:h-[25px] after:bg-[#E0E0E2]">
          <div className=" text-[13px] flex gap-1">
            <img src={ExitHeader} alt="exit logo" />
            <div className="text-[11px] leading-[25px]">ورود | ثبت‌نام</div>
          </div>
        </div>
        {/* login */}
        <div className="mx-3 xl:mx-0">
          <FaShoppingBasket size={22} />
        </div>
        <div className="w-[156px] h-full px-4 bg-[#FFF3F6] text-[#EF4656] rounded-lg">
          <div className="flex items-center justify-between h-full">
            <span className="text-[13px] font-semibold">رفتن به دیجی‌کالا</span>
            <span>
              <IoIosArrowBack />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSpecialHead;
