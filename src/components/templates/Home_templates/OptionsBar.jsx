import React from "react";
// icons
import { BsThreeDots } from "react-icons/bs";

// data
import imageData from "../../../data/imageData";

function OptionsBar() {
  return (
    <div className="w-full mx-auto min-h-[130px] p-2 pt-6">
      <div className="w-full 2xl:w-8/12 mx-auto flex flex-nowrap items-center justify-around cursor-pointer overflow-x-auto scrollbar-hide">
        {imageData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center p-4"
          >
            <img
              src={item.src}
              className={`min-w-[55px] h-[50px] ${
                item.src !== "/images/Home_images/dots.png" ? "block" : "hidden"
              }`}
              alt="option image"
            />
            <div
              className={`${
                item.src !== "/images/Home_images/dots.png"
                  ? "hidden"
                  : "flex flex-col justify-between bg-[#F0F0F1] rounded-full "
              }`}
            >
              <img
                src={item.src}
                className="min-w-[55px] h-[50px]"
                alt="option image"
              />
            </div>
            <span className="py-2 text-[12px] text-center">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OptionsBar;
