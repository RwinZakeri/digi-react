import monitor from "../../../../public/images/Home_images/monitor.png";
function HotCard({ number }) {
  return (
    <div className="w-full max-w-[300px] h-[86px] flex py-4 flex-row gap-2 items-center border-b-2">
      <img src={monitor} className="w-[86px] h-[86px]" alt="rob" />
      <span className="text-[#19BFD3] text-3xl">{number || "1"}</span>
      <p className="text-[12px] ">رب گوجه فرنگی چین چین - 800 گرم</p>
    </div>
  );
}

export default HotCard;
