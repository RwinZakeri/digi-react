import menuData from "../../../data/db.json";
// components
import BoxTitle from "./BoxTitle";
// icon
import { CiLocationOn } from "react-icons/ci";

import {
  Menu,
  Special,
  SuperMarket,
  Gift,
  Popular,
  Sales,
} from "../../../assets/images/header_images/NavIcon/Icon";
function BottomHead() {
  const { mega } = menuData;
  const headerTitles = [
    {
      id: 1,
      text: "دسته‌بندی کالاها",
      icon: <Menu />,
      link: "/",
    },
    {
      id: 2,
      text: "شگفت‌انگیزها",
      icon: <Special />,
      link: "incredible-offers",
    },
    {
      id: 3,
      text: "سوپرمارکت",
      icon: <SuperMarket />,
      link: "fresh",
    },
    {
      id: 4,
      text: "کارت هدیه",
      link: "",
      icon: <Gift />,
    },
    {
      id: 5,
      text: "پرفروش‌ترین‌ها",
      link: "",
      icon: <Popular />,
    },
    {
      id: 6,
      text: "تخفیف‌ها و پیشنهادها",
      link: "",
      icon: <Sales />,
    },
    {
      id: 7,
      text: "سوالی دارید؟",
      link: "",
      icon: "",
    },
    {
      id: 8,
      text: "در دیجی‌کالا بفروشید!",
      link: "",
      icon: "",
    },
  ];
  return (
    <div className="w-full 2xl:w-11/12  mx-auto h-full hidden lg:flex">
      <nav className="w-full mx-auto h-2/5  hidden lg:flex">
        {headerTitles.map((item, index) => (
          <BoxTitle key={item.id} {...item} index={index} mega={mega} />
        ))}
      </nav>
      <div className="w-1/5 h-full leading-[44px] flex items-center justify-end pl-6">
        <CiLocationOn width={15} height={15} alt="logo" />
        <span className="text-[10px] 2xl:text-[12px] xl:text-[11px] lg:text-[10px]">
          لطفا شهر خود را انتخاب کنید
        </span>
      </div>
    </div>
  );
}

export default BottomHead;
