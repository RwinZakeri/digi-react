// icons & images
import { FaLongArrowAltLeft } from "react-icons/fa";
import shegheftangiz from "../../../../public/images/Home_images/SuperShegeft/shegheftangiz.svg";
import shopbanner from "../../../../public/images/Home_images/SuperShegeft/shopbanner.png";
// data
import { SuperData } from "../../../data/SuperShegheft";

function SuperShegeft() {
  return (
    <div className="w-11/12 2xl:w-4/6 flex flex-col h-[130px] xl:h-[100px] lg:flex-row justify-between items-start lg:items-center mx-auto h-[110px] bg-[#EBEDED] my-6 rounded-2xl px-6">
      <div className="flex flex-col w-full lg:flex-row items-center gap-4">
        <div className="flex w-full lg:w-auto">
          <img
            src={shopbanner}
            className="w-[50px] xl:w-auto"
            alt="shopbanner"
          />
          <img
            src={shegheftangiz}
            className="w-[170px] xl:w-auto"
            alt="shegheft"
          />
        </div>
        <p className="w-fit text-white bg-[#029A49] px-2 rounded-full hidden lg:block">
          تا ۶۵٪ تخفیف
        </p>
      </div>
      <div className="w-full flex items-center gap-2">
        {SuperData.map((item, index) => (
          <div key={index} className="">
            <img
              src={item.img}
              className={`rounded-full block w-[100%] h-[60px]   md:${
                index == 0 || index == 1 || index == 2 ? "block" : "block"
              } ${
                index == 0 || index == 1 || index == 2 ? "hidden" : "block"
              } `}
              alt="proimage"
            />
          </div>
        ))}
        <div className="bg-white flex items-center justify-center xl:justify-evenly px-2 h-[50px] w-[50px] md:w-[140px] md:h-[40px] text-center leading-[40px] text-[#029A49] rounded-full">
          <span className="hidden lg:block text-[12px]"> بیش از 100 کالا</span>
          <FaLongArrowAltLeft />
        </div>
      </div>
    </div>
  );
}

export default SuperShegeft;
