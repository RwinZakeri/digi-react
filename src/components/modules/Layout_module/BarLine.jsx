import FooterLogo from "../../../../public/images/Home_images/Footer_images/footerlogo2.png";
import sibApp from "../../../../public/images/Home_images/svg/sib.svg";
import more from "../../../../public/images/Home_images/Footer_images/More.png";
function BarLine() {
  return (
    <div className="hidden w-11/12 mx-auto h-[75px] rounded-md bg-[#3C4B6D] lg:flex items-center justify-between px-4">
      <div className="max-h-full flex items-center justify-start gap-4">
        <img src={FooterLogo} className="w-[45px]" alt="footer logo" />
        <h4 className="text-white text-xl"> دانلود اپلیکیشن دیجی‌کالا</h4>
      </div>
      <div className="rounded-xl flex gap-2">
        <img src={sibApp} alt="sib" />
        <img src={sibApp} alt="sib" />
        <img src={sibApp} alt="sib" />
        <img src={more} className="bg-white w-[50px] rounded-lg" alt="more" />
      </div>
    </div>
  );
}

export default BarLine;
