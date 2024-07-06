import gift from "../../../../public/images/Home_images/DigiClubBanner/gift.png";
import digiClubImage from "../../../../public/images/Home_images/svg/digiclub.svg";
function DigiClubBanner() {
  return (
    <div className="w-11/12 2xl:w-4/6 flex flex-col h-[130px] xl:h-[100px] lg:flex-row justify-between items-start lg:items-center mx-auto h-[110px] bg-[#007295] my-6 rounded-2xl px-6">
      <div className="w-auto h-full flex items-center">
        <img
          src={digiClubImage}
          className="w-[100px] pt-3 xl:w-auto"
          alt="shopbanner"
        />
      </div>
      <div className=" w-full py-2 flex items-center gap-2 justify-end object-contain h-full	">
        <img src={gift} className="rounded-xl w-1/5 h-[80%]" alt="" />
        <img src={gift} className="rounded-xl w-1/5 h-[80%]" alt="" />
        <img src={gift} className="rounded-xl w-1/5 h-[80%]" alt="" />
      </div>
    </div>
  );
}

export default DigiClubBanner;
