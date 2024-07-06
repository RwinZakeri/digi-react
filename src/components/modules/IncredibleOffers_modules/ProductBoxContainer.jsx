import { bottomArrow } from "../../../../public/images/Incredible_images/svgReturner";
import ProductCard from "./ProductCard";
import ProductBoxCard from "./ProductBoxCard";
import { Clock } from "../../../../public/images/Incredible_images/svgReturner";
// import arrow from "";
import {
  ProductBoxContainerData,
  titles,
} from "../../../data/ProductBoxContainerData";
function ProductBoxContainer() {
  return (
    <div className="w-[80%]  h-full flex-grow-0">
      <div className="w-full h-[50px] flex items-center justify-start ">
        {titles.map((item) => (
          <div key={item.id} className="text-[12.5px] px-[7px] text-black/75">
            <p
              className={`flex flex-row-reverse items-center gap-1 ${
                item.title === "مرتب سازی :" ? "font-bold" : ""
              }`}
            >
              {item.title}{" "}
              {item.title == "مرتب سازی :" ? (
                <img
                  src={
                    "../../../../public/images/Incredible_images/shegeft/svgexport-54.svg"
                  }
                  alt="arrow"
                />
              ) : (
                ""
              )}
            </p>
          </div>
        ))}
      </div>
      <div className="w-auto h-auto mr-auto flex flex-wrap">
        {ProductBoxContainerData.map((item) => (
          <ProductBoxCard key={item.id} {...item} icon={<Clock />} />
        ))}
      </div>
    </div>
  );
}

export default ProductBoxContainer;
