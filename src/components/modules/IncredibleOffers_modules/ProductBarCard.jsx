import IncredibleOffer from "../../../../public/images/Incredible_images/IncredibleOffer.png";
// icon
import { FaStar } from "react-icons/fa";
import toman from "../../../../public/images/Home_images/svg/toman.svg";
import Speaker from "../../../../public/images/Incredible_images/speaker.png";

// title: "
// price: "
// discount
// rate: "4
// time: ""
// src: "..
function ProductBarCard({ title, price, discount, rate, src }) {
  return (
    <div className="w-[150px] md:w-full h-[320px] md:h-[250px] relative bg-white p-4  rounded-xl flex flex-col md:flex-row">
      <div className="">
        <img
          src={IncredibleOffer}
          className="w-[100px] absolute top-[10px] h-[15px]"
          alt="off"
        />
      </div>
      <div className="w-6/6 h-[250px] flex justify-normal">
        <img
          src={src}
          className="h-[100px] w-full md:h-full object-cover max-h-full"
          alt="oofer"
        />
      </div>
      <div className="w-full h-full py-4 relative">
        <p className="text-[14px]">{title}</p>
        <div className="flex items-center justify-between px-2">
          <p className="py-4 flex items-center gap-2">
            <span className="bg-black w-[12px] block h-[12px] rounded-full "></span>
            مشکی{" "}
          </p>
          <div className="flex gap-3">
            <span className="text-[15px] text-gray-600 ">{rate}</span>
            <FaStar className="text-yellow-400" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="block w-[42px] leading-[25px] text-white h-[25px] bg-[#D32F2F] rounded-full text-center text-[12px]">
            {discount}%
          </span>
          <span
            data-price={price}
            className="relative flex gap-1 px-2 before:content-[attr(data-price)] before:absolute before:top-[25px] before:text-[13px] before:text-[#ccc4c5cb] before:line-through"
          >
            <span>
              {Math.round((price * (100 - discount)) / 100).toLocaleString()}
            </span>
            <span>
              <img src={toman} alt="toman" />
            </span>
          </span>
        </div>
        <div className="absolute bottom-2 left-0 px-2 text-[12px] text-[#D32F2F]">
          <span>24</span>
          <span>:</span>
          <span>12</span>
          <span>:</span>
          <span>30</span>
        </div>
      </div>
    </div>
  );
}

export default ProductBarCard;
