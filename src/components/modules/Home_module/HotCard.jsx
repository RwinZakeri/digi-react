import monitor from "../../../../public/images/Home_images/monitor.png";
function HotCard({ rank, img, id, title }) {
  console.log(id % 3);
  return (
    <div
      className={`w-full max-w-[300px] h-[86px] flex py-4 flex-row gap-2 items-center ${
        rank % 3 == 0 ? "" : "border-b-[1px] "
      }`}
    >
      <img src={img} className="w-[86px] h-[86px]" alt="rob" />
      <span className="text-[#19BFD3] text-3xl font-IranSans">
        {rank || "1"}
      </span>
      <p className="text-[12px] ">{title}</p>
    </div>
  );
}

export default HotCard;
