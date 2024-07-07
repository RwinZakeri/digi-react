import React, { useEffect, useState } from "react";
// images icon , logo
import SuperLogo from "../../../../public/images/Fresh_images/svg/superLogo.svg";
import HeaderLogo from "../../../../public/images/Fresh_images/fresh-header-logo.png";
import ExitHeader from "../../../../public/images/Fresh_images/svg/exitLogo.svg";
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import TopSpecialHead from "./TopSpecialHead";
import BottomHead from "./BottomHead";

function SpecialHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Adjust this value as needed
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <nav
      className={`w-full h-[110px] transition-all px-2 duration-300 ease-in-out`}
    >
      <TopSpecialHead />
      {/* <BottomSpecialHead /> */}
      <BottomHead visiable={[0,1,6]} />
    </nav>
  );
}

export default SpecialHeader;
