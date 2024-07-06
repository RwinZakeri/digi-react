// data
import { SlideBannerData } from "../../../data/SlideBanner";

function SlideBanner() {
  return (
    <div className="w-11/12 2xl:w-8/12 mx-auto flex gap-3 items-center justify-center flex-wrap md:flex-nowrap">
      {SlideBannerData.map((item, index) => (
        <div
          key={item.id}
          className="w-2/5 xl:w-full flex justify-center overflow-hidden rounded-xl"
        >
          <img src={item.img} className="rounded-xl " alt="image banner" />
        </div>
      ))}
    </div>
  );
}

export default SlideBanner;
