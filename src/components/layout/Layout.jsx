// location
import { useLocation } from "react-router-dom";
// Components
import Footer from "./Footer";
import Header from "./Header";
// Icons
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import SpecialHeader from "../modules/Layout_module/SpecialHeader";
function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="">
      {location.pathname !== "/fresh" ? <Header /> : <SpecialHeader />}
      {children}
      <Footer />
      {/* head nav */}
      <div className="w-full h-fit  bg-white flex justify-center shadow-[0_0_5px_0.2px_#333] lg:hidden sticky bottom-0 z-50	">
        <div className="w-11/12	 h-fit flex items-center justify-around">
          <div className="w-1/4 flex flex-col items-center justify-center gap-1 py-3">
            <BiHomeAlt2 className="w-[25px] h-fit text-neutral-500" />
            <p className="md:text-base	text-xs text-neutral-500">خانه</p>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-center gap-1 py-3">
            <TbCategory className="w-[25px] h-fit text-neutral-500" />
            <p className="md:text-base	text-xs text-neutral-500">دسته بندی</p>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-center gap-1 py-3">
            <PiShoppingCartSimpleBold className="w-[25px] h-fit text-neutral-500" />
            <p className="md:text-base	text-xs text-neutral-500">سبد خرید </p>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-center gap-1 py-3">
            <FaRegUser className="w-[25px] h-fit text-neutral-500" />
            <p className="md:text-base	text-xs text-neutral-500">
              دیجی کالای من{" "}
            </p>
          </div>
        </div>
      </div>
      {/* head nav */}
    </div>
  );
}

export default Layout;
