import { Link } from "react-router-dom";

function DigiPlus() {
  return (
    <>
      <Link
        to="/"
        className="w-full mx-auto h-auto f-sm-size:h-[110px] mt-3 flex justify-center "
      >
        <div className="w-11/12  flex flex-col f-sm-size:flex-row py-2 f-sm-size:py-0 f-sm-size:px-8 px-0 justify-between items-center h-inherit rounded-[10px] relative bg-[#f0f0f1] overflow-hidden">
          <div className="w-full h-inherit absolute top-0 left-0 right-0 bottom-0 z-[1] clock-background"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-inherit opacity-10 bg-gradient-to-l from-[#941b80] via-transparent to-[#f0f0f1]"></div>
          <div className="">
            <img
              className="hidden lg:block"
              src="/images/Incredible_images/shegeft/dastrasi-zoodtar.svg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="block lg:hidden"
              src="/images/Incredible_images/shegeft/dastrasi-zoodtar-small.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-x-2 mb-[10px]">
              <img
                src="/shegeft/purple-star.svg"
                alt="purple-star"
                className="w-[20px] h-[20px]"
              />
              <h5 className="text-[15px] font-bold text-[#b12ba4]">
                ویژه اعضای دیجی‌پلاس
              </h5>
            </div>
            <div className="flex flex-nowrap items-center text-[#941b80]">
              <div className="w-10 flex flex-col items-center bg-white rounded-[8px] px-3 py-1 ">
                <span className="font-bold text-[14px]">۲۰</span>
                <span className="text-[9px]">ثانیه</span>
              </div>
              <div className="w-10 flex flex-col items-center bg-white rounded-[8px] px-3 py-1 mx-3 ">
                <span className="font-bold text-[14px]">۰۶</span>
                <span className="text-[9px]">دقیقه</span>
              </div>
              <div className="w-10 flex flex-col items-center bg-white rounded-[8px] px-3 py-1 ">
                <span className="font-bold text-[14px]">۱۳</span>
                <span className="text-[9px]">ساعت</span>
              </div>
              <span className="font-bold text-[12px] mr-4">مانده تا شروع</span>
              <img
                src="/shegeft/purple-exclamation.svg"
                alt=""
                className="w-[16px] h-[16px] mr-1"
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default DigiPlus;
