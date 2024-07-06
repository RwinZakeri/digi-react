import watch from "../../../../public/images/Home_images/ChessProduct/watch.jpg";
import { Link } from "react-router-dom";
import ChoosedCard from "../../modules/Home_module/ChoosedCard";
// data
import { ChoosedData } from "../../../data/ChoosedData";
function Choosed() {
  return (
    <div className="w-full h-auto xl:h-[800px] flex justify-center px-3 lg:px-4">
      <div className="w-full max-w-[1336px] h-inherit mx-auto border border-[#e0e0e2] rounded-[20px] flex flex-col gap-y-1">
        <div className="flex items-center justify-center h-fit gap-x-3 py-5">
          {/* <img
            src="/images/svg/selected-discount.svg"
            alt=""
            className="w-[24px] h-[24px]"
          /> */}
          <h3 className="text-neutral-900  text-[18px] lg:text-[21px]">
            منتخب محصولات تخفیف و حراج
          </h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 pt-3">

          {
            ChoosedData.map((item)=> (
              <ChoosedCard img={item.imgUrl} {...item} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Choosed;
