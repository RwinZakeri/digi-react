// icons
import digikalaLogo from "../../../assets/images/header_images/digikalaLogo.svg";
import searchLogo from "../../../assets/images/header_images/search.svg";
import shopLogo from "../../../assets/images/header_images/shop.svg";
import exit from "../../../assets/images/header_images/exit.svg";
import { Link } from "react-router-dom";

function TopHead() {
  return (
    <div className="w-full h-3/5 2xl:w-11/12 flex mx-auto md:pb-1 z-50  ">
      <div className="lx:w-4/5 w-full h-full flex items-center px-4 ">
        <Link to={"/"}>
          <img
            src={digikalaLogo}
            alt="main logo"
            className="ml-5 hidden lg:block"
          />
        </Link>
        <div className="w-full lg:w-[600px] h-[44px] bg-[#F0F0F1] px-3 rounded-md flex items-center">
          <button className="h-full px-5">
            <img src={searchLogo} alt="search" />
          </button>
          <span className="font-body text-[#81858B]">
            <span className="lg:hidden flex items-center gap-2">
              <span>جستجو</span>
              <img src={digikalaLogo} alt="mobile" />
            </span>
            <span className="hidden lg:block">جستجو</span>
          </span>
        </div>
      </div>
      <div className="w-1/5 items-center justify-end px-4 hidden lg:flex ">
        <div className="w-[135px] h-[40px] border-[1px] bg-transparent-600 rounded-lg cursor-pointer border-[#7d7d8de1] text-[13px] ">
          <div className="w-full h-full flex items-center justify-center ">
            <img src={exit} alt="logo" className="ml-3" />
            <span className="text-[#3333339a]  text-[12px] 2xl:text-[14px] leading-[40px]">
              <Link to={"/login"}>ورود | ثبت نام</Link>
            </span>
          </div>
        </div>
        <div className="h-2/5 w-[1px] mx-2 bg-[#8c8c8d77]"></div>
        <button className="p-2">
          <img src={shopLogo} alt="shop" />
        </button>
      </div>
    </div>
  );
}

export default TopHead;
