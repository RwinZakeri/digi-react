// images
import toman from "../../../../public/images/Home_images/svg/toman.svg";
import IncredibleOffer from "../../../../public/images/Fresh_images/Banner/IncredibleOffer.png";
import ShopOk from "../../../../public/images/Fresh_images/svg/shopok.svg";

function FreshProductCard({ title, price, discount, image }) {
  return (
    <div className="w-[182px] h-full p-2 bg-white rounded-md">
      <div className="w-full py-3">
        <img src={IncredibleOffer} alt="IncredibleOffer" />
      </div>
      <img
        src={image}
        className="max-h-1/5 flex mx-auto justify-center flex-col  items-center"
        alt="itemimage"
      />

      <div className="w-full py-3 px-1 h-full break-words text-sm text-[#7e7c79]">
        {title.split(" ").slice(0, 10)}...
        <div className="flex items-center text-[10px] py-1">
          <img src={ShopOk} alt="shopok" />
          <p>موجود در انبار دیجی کالا</p>
        </div>
        <div className="h-1/5 py-1 flex items-center justify-between">
          <div className="text-white text-[12px] font-bold rounded-lg bg-red-500 px-2 py-1 ">
            <span className="leading-[16px]">{discount}%</span>
          </div>

          <div>
            <span className="flex items-center text-black leading-10 ">
              <span
                className="relative before:absolute before:text-gray-500 before:top-[17px] before:line-through before:content-[attr(data-offer)]"
                data-offer={price}
              >
                {(price - (price * discount) / 100).toLocaleString()}
              </span>
              <img src={toman} className="max-h-5" alt="toman" />
            </span>
          </div>
        </div>
        <div className="w-full text-end flex items-center justify-end ">
          <span className="text-[#F1566A]">06:12:34</span>
        </div>
      </div>
    </div>
  );
}

export default FreshProductCard;
