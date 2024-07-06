// data
import { doubelBoxData } from "../../../data/DoubelBox";
function DoubelBoxOne() {
  return (
    <div className="w-full 2xl:w-4/6 mx-auto flex gap-3 items-center justify-center flex-wrap md:flex-nowrap">
      {doubelBoxData.slice(0, 2).map((item) => (
        <div
          key={item.img}
          className="w-[85%] md:w-full flex justify-center overflow-hidden rounded-xl"
        >
          <img src={item.img} className="rounded-xl " alt="" />
        </div>
      ))}
    </div>
  );
}

export default DoubelBoxOne;
