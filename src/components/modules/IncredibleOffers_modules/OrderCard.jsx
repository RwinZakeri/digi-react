import orderLogo from "../../../../public/images/Incredible_images/shegeft/PromotedIncredibleOffer.png";
function OrderCard({
  image,
  name,
  price,
  originalPrice,
  discount,
  shipping,
  code,
}) {
  return (
    <div className="w-6/6 h-border-b-[2px] border-r-[1px] flex flex-col items-end justify-between gap-5  p-4  text-center min-h-[440px] max-h-[440px] ">
      <div className="text-pink-500 text-start w-full font-bold mb-2">
        شگفت‌انگیز سفارشی
      </div>
      <img
        src={image}
        alt={name}
        className="mx-auto mb-4 w-24 h-24 object-contain"
      />
      <div className="mb-2 text-[12px] text-right">{name}</div>
      <div className="flex items-center justify-between w-full">
        <span className="ml-2 pl-1 pr-1 text-white text-[12px] bg-red-500 rounded-full ">
          <span className="text-[12px]">{discount}</span>
          <span className="text-[11px]">%</span>
        </span>
        <div
          className="text-[16px] relative font-bold mb-2 before:content-[attr(data-originalPrice)] before:absolute before:top-[20px] before:text-[12px] before:text-gray-400"
          data-originalPrice={originalPrice}
        >
          <span className="text-[14px] font-medium">
            {price} <span className="text-[10px]">تومان</span>
          </span>
        </div>
      </div>
      <div className="mt-2 text-red-500 text-left text-[12px]">02:16:20</div>
    </div>
  );
}

export default OrderCard;
