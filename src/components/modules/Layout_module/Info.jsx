import digiKalaMobileLogo from "../../../../public/images/Home_images/svg/digikalaLogo.svg";
import { IoIosArrowUp } from "react-icons/io";

function Info() {
  const clickHander = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="hidden w-11/12 lg:w-10/12 mx-auto md:flex items-center justify-between">
      <div className="flex justify-start items-start flex-col gap-4">
        <img src={digiKalaMobileLogo} alt="" />
        <p className="text-sm text-[#474747]">
          تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ | ۰۲۱-۹۱۰۰۰۱۰۰ | ۷ روز هفته، ۲۴ ساعته
          پاسخگوی شما هستیم
        </p>
      </div>
      <div>
        <button
          onClick={clickHander}
          className="w-fit px-6 py-2  rounded-md bg-transparent border-2 border-[#A1A3A8]"
        >
          <span className="text-[#A1A3A8] text-xs flex flex-row-reverse items-center gap-3">
            <span className="text-lg">
              <IoIosArrowUp />
            </span>
            بازگشت به بالا
          </span>
        </button>
      </div>
    </div>
  );
}

export default Info;
