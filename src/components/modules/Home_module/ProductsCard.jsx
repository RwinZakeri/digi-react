// images
import toman from "../../../../public/images/Home_images/svg/toman.svg";

function ProductsCard({ title, price, discount, image }) {
  return (
    <div className="w-[160px] h-full p-2 bg-white rounded-md">
      <img
        src={image}
        className="max-h-1/5 flex mx-auto justify-center flex-col items-center"
        alt="itemimage"
      />
      <div className="w-full h-full break-words text-sm text-[#7e7c79]">
        {title.split(" ").slice(0, 10)}...
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
      </div>
    </div>
  );
}

export default ProductsCard;
