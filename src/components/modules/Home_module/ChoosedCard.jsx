import { Link } from "react-router-dom";

function ChoosedCard({ img, price, discount }) {
  return (
    <Link
      to="#"
      className="flex flex-col gap-y-3 p-4 lg:border-l xl:border-l-0 xl:border-b-0 border-[#f0f0f1] border-2"
    >
      <img src={img} alt="" className="!w-[150px] !h-[150px] mx-auto" />
      <div className="flex flex-col gap-x-1 grow ">
        <div className="flex items-center justify-between">
          <div className="bg-[#d32f2f] w-[35px] h-[20px] rounded-[16px] flex items-center justify-center">
            <span className="text-white text-[12px] font-bold px-1">
              {discount}٪
            </span>
          </div>
          <div className="flex items-center justify-end gap-x-1">
            <span className="text-neutral-700 text-[15px] font-bold">
              {Math.round(price * 100 - discount / 100)}{" "}
              <span className="text-[11px]">تومان</span>
            </span>
          </div>
        </div>
        <span className="text-neutral-300 line-through text-[13px] ml-[20px] flex justify-end">
          4,000,000
        </span>
      </div>
    </Link>
  );
}

export default ChoosedCard;
