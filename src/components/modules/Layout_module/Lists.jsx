import { FaInstagram } from "react-icons/fa";

function Lists() {
  return (
    <div className="hidden lg:flex w-11/12 lg:w-full mx-auto h-[270px] justify-between lg:px-[5%]">
      <div className="w-2/6 ">
        <ul>
          <li className="font-bold">با دیجی‌کالا</li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
        </ul>
      </div>
      <div className="w-2/6">
        <ul>
          <li className="font-bold">با دیجی‌کالا</li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
        </ul>
      </div>
      <div className="w-2/6 ">
        <ul>
          <li className="font-bold">با دیجی‌کالا</li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
          <li className="text-[15px] text-black/60 my-2 font-light">
            اتاق خبر دیجی‌کالا
          </li>
        </ul>
      </div>
      <div className="w-1/6 flex flex-col gap-4">
        <h2 className="text-lg">همراه ما باشید!</h2>
        <div className="w-full flex gap-4">
          <FaInstagram className="w-full text-black/55" size={40} />
          <FaInstagram className="w-full text-black/55" size={40} />
          <FaInstagram className="w-full text-black/55" size={40} />
          <FaInstagram className="w-full text-black/55" size={40} />
        </div>
        <h1 className="text-lg font-normal">
          با ثبت ایمیل، از تخفیف‌ها با‌خبر شوید
        </h1>
        <div className="w-full">
          <input
            className="rounded-lg w-4/6 h-[42px] bg-[#F0F0F1] ml-2 px-2"
            type="text"
            name=""
            id=""
            placeholder="ایمیل شما"
          />
          <button className="bg-[#e0e0e0] rounded-lg w-3/12 h-[42px] text-white text-[12px]">
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lists;
