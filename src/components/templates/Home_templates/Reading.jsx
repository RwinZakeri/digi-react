// icon
import { FaLessThan } from "react-icons/fa";
// component
import ReadingCard from "../../modules/Home_module/ReadingCard";
// data
import { ReadingData } from "../../../data/ReadingData";
function Reading() {
  return (
    <div className="w-11/12 max-w-[1330px] mx-auto ">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl font-600">خواندنی‌ها</h1>
        <p className="flex items-center text-[12px] text-[#60A5FA] gap-2">
          مطالب بیشتر در دیجی‌کالا مگ
          <FaLessThan />
        </p>
      </div>
      <div className="w-full mx-auto justify-center flex flex-col lg:flex-row">
        {ReadingData.map((item) => (
          <ReadingCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Reading;
