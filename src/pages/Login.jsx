import { useState } from "react";

function Login() {
  const [text, setText] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const chageHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <main className="h-[60vh]w-full my-8 flex flex-col justify-center items-center">
      <div className="w-inherit lg:w-[450px] h-[440px] lg:border lg:border-[#e0e0e2] lg:rounded-[8px] font-digikala">
        <a href="index-2.html" className="flex justify-center py-6">
          <img
            src="../../public/images/Fresh_images/svg/digiLogoLogin.svg"
            alt=""
            className="w-[150px] h-[40px]"
          />
        </a>
        <div className="flex flex-col px-8 gap-y-3">
          <div className="flex justify-start text-[20px] font-bold gap-x-3 ">
            <p>ورود</p>
            <span>|</span>
            <p>ثبت‌نام</p>
          </div>
          <div className="flex flex-col gap-y-1 text-[13px] pt-2">
            <p>سلام!</p>
            <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
          </div>
          <form className="flex flex-col">
            <label className="w-full grow">
              <input
                type="text"
                name="email"
                className="w-full outline-none rounded-[10px] border-red-600 border p-3"
                onChange={chageHandler}
                onFocus={() => setIsClicked(true)}
              />
            </label>
            <p className="text-[13px] mt-1 text-[#b2001a]">
              {!text.length && isClicked ? "لطفا این قسمت را خالی نگذارید" : ""}
            </p>
            <button
              type="submit"
              className="flex items-center justify-center rounded-[10px]  text-neutral-50 bg-[#ef4056] p-3 mt-12"
            >
              ورود
            </button>
          </form>
          <p className="text-[12px] text-neutral-700 mt-4">
            ورود شما به معنای پذیرش
            <a className="mx-1 inline-block text-[#19bfd3]" href="#">
              شرایط دیجی‌کالا
            </a>
            و
            <a className="mx-1 inline-block text-[#19bfd3]" href="#">
              قوانین حریم‌خصوصی
            </a>
            است
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
