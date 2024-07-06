import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Check from "./Check";

function AllIncredibleCard(props) {
  const [position, setPosition] = useState(false);
  const [position2, setPosition2] = useState(false);
  const [elementInfo, setElementInfo] = useState(null);
  const targetRef = useRef(null);
  const detect = () => {
    const target = targetRef.current;
    const info = target.getBoundingClientRect();
    setElementInfo(info);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      detect();
    });
  }, []);

  const categories = [
    {
      id: 1,
      title: "آردن سان",
    },
    {
      id: 2,
      title: "آکوآ اسپرینگ",
    },
    {
      id: 3,
      title: "آی جواهر",
    },
    {
      id: 4,
      title: "اپل",
    },
    {
      id: 5,
      title: "استوریا",
    },
    {
      id: 6,
      title: "آردن سان",
    },
    {
      id: 7,
      title: "آردن سان",
    },
    {
      id: 7,
      title: "آردن سان",
    },
  ];
  const clickhandler = () => {
    setPosition((e) => !e);
  };
  const clickhandler2 = () => {
    setPosition2((e) => !e);
  };
  return (
    <div className="w-[260px] h-full flex flex-col flex-shrink-0 border-2 rounded-xl ">
      <div
        className={`w-[260px] min-h-[617px] rounded-xl p-4 ${
          elementInfo?.y >= props.position?.y &&
          elementInfo?.y <= 180 &&
          props.position?.y >= -1200
            ? "fixed top-32 border-2 rounded-xl"
            : props.position?.y >= -1065
            ? "static "
            : " absolute bottom-0 border-2 rounded-xl"
        }`}
        ref={targetRef}
      >
        <p className="w-full flex items-center justify-between">
          <span className="w-2xl">فیلتر ها</span>
          <span className="text-blue-400 text-sm">حذف فیلتر ها</span>
        </p>
        <div className="w-full my-4 ">
          <div
            className="flex items-center justify-between py-2"
            onClick={clickhandler}
          >
            <p>برند</p>
            {position ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDown className="text-[#414141]" />
            )}
          </div>
          <div
            className={`${
              position ? "block" : "hidden"
            } flex flex-col justify-center pt-3 overflow-hidden`}
          >
            <div className="w-full h-full overflow-y-scroll max-h-[280px]">
              <input
                type="text"
                placeholder="جستنجو"
                className="rounded-lg w-4/5 h-[40px] outline-none px-2 bg-transparent border-gray-300 border-[2px]"
              />
              <p className="py-2 text-sm mt-2 text-gray-300">همه‌ی برند‌ها</p>
              <ul>
                {categories.map((item) => (
                  <>
                    <div className="w-full flex border-b-[1px] border-gray-400 gap-2">
                      <input
                        type="checkbox"
                        className="w-[20px] rounded-xl"
                        name=""
                        id=""
                      />
                      <li className="p-2 my-1">{item.title}</li>
                    </div>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Check />
        <Check />
        <Check />
        <div className="w-full my-4 ">
          <div
            className="flex items-center justify-between py-2"
            onClick={clickhandler2}
          >
            <p>محدوده قیمت</p>
            {position2 ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDown className="text-[#414141]" />
            )}
          </div>
          <div
            className={`${
              position2 ? "block" : "hidden"
            } flex flex-col justify-center pt-3 overflow-hidden py-4`}
          >
            <div className="w-full h-full max-h-[280px]">
              <p className="py-2 text-sm mt-2 text-gray-300">همه قیمت ها</p>
            </div>
          </div>
          <Check />
          <Check />
        </div>
      </div>
    </div>
  );
}

export default AllIncredibleCard;
