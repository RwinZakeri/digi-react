import orderLogo from "../../../../public/images/Incredible_images/shegeft/PromotedIncredibleOffer.png";
import Plus from "../../../../public/images/Fresh_images/svg/plus.svg";
import shopok from "../../../../public/images/Fresh_images/svg/shopok.svg";
function FreshOrderCard({
  image,
  name,
  price,
  originalPrice,
  discount,
  shipping,
  code,
}) {
  return (
    <div className="w-6/6 h-border-b-[2px] border-r-[1px] flex flex-col items-end justify-between gap-5  p-4  text-center h-[305px] pb-6 object-cove">
      <img
        src={image}
        alt={name}
        className="mx-auto mb-4 w-24 h-24 object-contain"
      />

      <div className="w-full text-start">
        <div className="w-[25px] h-[25px] rounded-full border-[#05BA58] border-[1px]">
          <img src={Plus} alt="plus" />
        </div>
      </div>
      <div className="mb-2 text-[12px] w-full text-right">
        {name}
      </div>
      <div className="w-full text-end">
        <div className="flex items-center text-[10px]">
          <img src={shopok} alt="shop" />
          <span>موجود در انبار دیجی کالا</span>
        </div>
        <div
          className="text-[16px] relative font-bold mb-2 before:content-[attr(data-originalPrice)] before:absolute before:top-[20px] before:text-[12px] before:text-gray-400  font-IranSans"
          data-originalPrice={originalPrice}
        >
          <span className="text-[14px] font-semibold font-IranSans">
            {price} <span className="text-[10px]">تومان</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FreshOrderCard;
