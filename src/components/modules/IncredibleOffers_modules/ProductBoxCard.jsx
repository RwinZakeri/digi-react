import React from "react";
import { Clock } from "../../../../public/images/Incredible_images/svgReturner";
import { IoStar } from "react-icons/io5";
import toman from "../../../../public/images/Home_images/svg/toman.svg";
function ProductBoxCard({
  image,
  icon,
  persianTitle,
  price,
  discount,
  rate,
  imgUrl,
}) {
  return (
    <div className="w-1/5 border-l-[1px] hover:shadow-lg border-black/20 flex flex-col gap-2">
      <p className="text-[#EE384E] text-[13px] p-2 font-bold">
        شگفت انگیز اختصاصی اپ
      </p>
      <img src={imgUrl} alt="product" />
      <div className="w-full flex flex-col text-sm text-black/85 px-2 ">
        <p>{persianTitle}</p>
      </div>
      <div className="flex items-center justify-between p-2">
        <span>{icon}</span>
        <div className="flex items-center gap-1">
          <span className="text-sm">{rate}</span>
          <span className="text-yellow-400">
            <IoStar />
          </span>
        </div>
      </div>
      <div
        className="w-full relative flex justify-end before:content-[attr(data-discount)] before:absolute before:top-5 before:left-6 before:text-black/55 before:line-through px-2"
        data-discount={price}
      >
        <span>{(price * (100 - discount)) / 100}</span>
        <img src={toman} alt="" />
      </div>
      <div className="text-end px-3 py-4 text-[#EE384E]">
        <span>2</span>
        <span>:</span>
        <span>24</span>
        <span>:</span>
        <span>30</span>
      </div>
    </div>
  );
}

export default ProductBoxCard;
