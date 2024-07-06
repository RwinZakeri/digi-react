import React, { useState } from "react";
import enamad from "../../../../public/images/Home_images/Footer_images/enamad.png";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

function LastPart() {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive((e) => !e);
  };
  return (
    <>
      {!active ? (
        <>
          <div className="lg:flex items-start justify-between lg:border-y border-[#e0e0e2] lg:py-8 gap-x-3 lg:my-3 px-20 pb-16">
            <div className="w-full lg:w-[75%] pt-5">
              <div
                className="relative h-[125px] text-neutral-500 leading-6 lg:leading-7 overflow-hidden before:content-[''] before:block before:absolute before:left-0 before:bottom-0 before:w-full before:bg-gradient-to-t from-[#fff] before:h-[100px]"
                id="container"
              >
                <h1 className="font-bold text-[12px] lg:text-[20px] mb-1">
                  فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
                </h1>
                <p className="text-[10px] lg:text-[12px]">
                  یک<strong> خرید</strong> اینترنتی مطمئن، نیازمند فروشگاهی است
                  که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت
                  زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم
                  داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست
                  بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود
                  را داشته باشد.
                  <br />
                  یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌
                  اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به
                  دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با
                  فروشنده کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران
                  خود قرار می‌دهد. هر یک&nbsp;از &nbsp;دیجی‌کالا که محصولات
                  دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در
                  روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از
                  گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل
                  مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم
                  که&nbsp;امکان برای آن ها وجود دارد.&nbsp;
                </p>
              </div>
              <Link
                className="flex items-center mt-2 cursor-pointer"
                id="show-more"
                onClick={clickHandler}
              >
                <p className=" lg: text-[14px] lg:text-[12px]" id="text">
                  مشاهده بیشتر
                </p>
                <FaLongArrowAltLeft className="" />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="lg:flex items-start justify-between lg:border-y border-[#e0e0e2] lg:py-8 gap-x-3 lg:my-3 px-20 pb-16">
            <div className="w-full lg:w-[75%] pt-5">
              <div
                className="relative h-auto  leading-6 lg:leading-7 "
                id="container"
              >
                <h1 className="font-bold text-[12px] lg:text-[20px] mb-1">
                  فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
                </h1>
                <p className="text-[10px] lg:text-[12px]">
                  یک<strong> خرید</strong> اینترنتی مطمئن، نیازمند فروشگاهی است
                  که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت
                  زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم
                  داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست
                  بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود
                  را داشته باشد.
                  <br />
                  یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌
                  اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به
                  دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با
                  فروشنده کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران
                  خود قرار می‌دهد. هر یک&nbsp;از
                  <Link
                    className=""
                    to="https://www.digikala.com/landing/delivery/"
                  >
                    روش های ارسال دیجی کالا
                  </Link>
                  شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای
                  کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر
                  مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از
                  وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و
                  به دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به
                  روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه،
                  ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و
                  فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست
                </p>
                <h2 className="font-bold text-[14px] lg:text-[16px] mb-2">
                  کدام محصولات در دیجی‌کالا قابل سفارش هستند؟
                </h2>
                <p className="text-[10px] lg:text-[12px]">
                  تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان
                  خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی
                  روزهای هفته و تمامی شبانه روز یا در روزهای خاصی مثل
                  <Link
                    className=""
                    to="https://www.digikala.com/landing/nowruz/"
                  >
                    <strong>حراج نوروز</strong>
                  </Link>
                  &nbsp;دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود
                  را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب
                  منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های
                  پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به
                  معرفی آن‌ها می‌پردازیم که&nbsp;امکان
                  <Link
                    className=""
                    to="https://www.digikala.com/landing/sameday-delivery/"
                  >
                    <strong>ارسال امروز</strong>
                  </Link>
                  برای آن ها وجود دارد.&nbsp;
                </p>
                <h2 className="font-bold text-[14px] lg:text-[16px] mb-2">
                  کالای دیجیتال
                </h2>
                <p className="text-[10px] lg:text-[12px]">
                  انواع گوشی موبایل از برندهای مختلفی مثل آیفون، &nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-mobile-phone/samsung/"
                    target="_blank"
                  >
                    گوشی سامسونگ
                  </Link>
                  ،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-mobile-phone/nokia/"
                    target="_blank"
                  >
                    گوشی نوکیا
                  </Link>
                  ،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-mobile-phone/xiaomi/"
                    target="_blank"
                  >
                    گوشی شیائومی
                  </Link>
                  ،&nbsp;
                  <Link
                    to="https://www.digikala.com/search/category-mobile-phone/huawei/"
                    target="_blank"
                  >
                    گوشی هواوی
                  </Link>
                  ، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار
                  مثل&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-tablet/samsung/"
                    target="_blank"
                  >
                    تبلت سامسونگ
                  </Link>
                  &nbsp;نوت 10، انواع هندزفری مثل&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-headphone/"
                    target="_blank"
                  >
                    هندزفری بی سیم
                  </Link>
                  ،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-tv2/"
                    target="_blank"
                  >
                    تلوزیون
                  </Link>
                  &nbsp;از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع
                  مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-3g-4g-and-5g-modem-Router/mtn-irancell/"
                    target="_blank"
                  >
                    مودم ایرانسل
                  </Link>
                  ،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-lighting-antenna/"
                    target="_blank"
                  >
                    آنتن
                  </Link>
                  &nbsp;و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای
                  دیجیتال در دیجی‌کالا قرار دارند.
                </p>
                <h2 className="font-bold text-[14px] lg:text-[16px] mb-2">
                  خودرو، ابزار و تجهیزات صنعتی
                </h2>
                <p className="text-[10px] lg:text-[12px]">
                  انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا
                  و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی
                  خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و
                  صفحه کلاج و... و لوازم مصرفی خودرو مثل&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-car-coating/sana-3d/"
                    target="_blank"
                  >
                    کفپوش سانا
                  </Link>
                  &nbsp;در این گروه قرار می‌گیرند.
                </p>
                <h2 className="font-bold text-[14px] lg:text-[16px] mb-2">
                  مد و پوشاک
                </h2>
                <p className="text-[10px] lg:text-[12px]">
                  محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس
                  راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر،
                  شال و روسری و... جزو مواردی هستند که می‌توانید آن‌ها را از
                  برندهای مطرح ایرانی و خارجی موجود در دیجی کالا مثل آدیداس،
                  نایکی، دبنهامز، آلدو، درسا و... خریداری کنید.
                </p>
                <h2 className="font-bold text-[14px] lg:text-[16px] mb-2">
                  اسباب بازی کودک و نوزاد
                </h2>
                <p className="text-[10px] lg:text-[12px]">
                  در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام
                  کودک و نوزاد، انواع پوشاک و کفش،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-tablet/"
                    target="_blank"
                  >
                    تبلت
                  </Link>
                  ،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-toys/"
                    target="_blank"
                  >
                    اسباب‌بازی
                  </Link>
                  ، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و
                  ... قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و
                  آسان تبدیل کند.
                </p>
                <h2 className="font-bold text-[14px] lg:text-[16px] mb-2">
                  کالاهای سوپر مارکتی
                </h2>
                <p className="text-[10px] lg:text-[12px]">
                  هر چیزی از مواد خوراکی که به آن نیاز دارید، در&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/main/food-beverage/"
                    target="_blank"
                  >
                    سوپرمارکت
                  </Link>
                  &nbsp;دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-peanut-butter/"
                    target="_blank"
                  >
                    کره بادام‌زمینی
                  </Link>
                  ،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-honey/"
                    target="_blank"
                  >
                    عسل
                  </Link>
                  ،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-sauce-dressing/"
                    target="_blank"
                  >
                    سس
                  </Link>
                  ،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-coffee/"
                    target="_blank"
                  >
                    قهوه
                  </Link>
                  ،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-saffron/"
                    target="_blank"
                  >
                    زعفران
                  </Link>
                  ، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/brand/nestle/"
                    target="_blank"
                  >
                    نستله
                  </Link>
                  ، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما
                  هستند و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.
                </p>
                <h2 className="font-bold text-[14px] lg:text-[16px] mb-2">
                  زیبایی و سلامت
                </h2>
                <p className="text-[10px] lg:text-[12px]">
                  انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت
                  و... همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل
                  انواع شامپو، کرم،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-face-masque/"
                    target="_blank"
                  >
                    ماسک صورت
                  </Link>
                  ، ضد تعریق،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-hair-mask/"
                    target="_blank"
                  >
                    ماسک مو
                  </Link>
                  &nbsp; و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر
                  و اسپری، انواع زیورآلات طلا و نقره مثل&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-women-gold-jewelry-sets/"
                    target="_blank"
                  >
                    سرویس طلا
                  </Link>
                  ، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در گروه
                  زیبایی و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای
                  مطرحی مثل اسنس، پنبه ریز، سینره و... حضور دارند.
                </p>
                <h2 className="font-bold text-[14px] lg:text-[16px] mb-2">
                  خانه و آشپزخانه
                </h2>
                <p className="text-[10px] lg:text-[12px]">
                  یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه
                  است که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا
                  انواع&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-household-furniture/"
                    target="_blank"
                  >
                    مبل راحتی
                  </Link>
                  ، انواع آبگرمکن مثل&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-water-heater/butane/"
                    target="_blank"
                  >
                    آبگرمکن بوتان
                  </Link>
                  ، لباسشویی‌های متنوع مثل انواع&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-washing-machines/snowa/"
                    target="_blank"
                  >
                    لباسشویی اسنوا
                  </Link>
                  ، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم
                  برقی آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی
                  را برای مشتریان فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا،
                  برندهای معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس
                  و... حضور دارند.
                </p>
                <h2 className="font-bold text-[14px] lg:text-[16px] mb-2">
                  کتاب، لوازم تحریر و هنر
                </h2>
                <p className="text-[10px] lg:text-[12px]">
                  بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از
                  متنوع‌ترین بخش‌های این فروشگاه اینترنتی است. انواع کتاب و
                  مجله،
                  <Link
                    className=""
                    to="https://www.digikala.com/landing/language-learning-books/"
                  >
                    کتاب زبان
                  </Link>
                  ، بازی، لوازم تحریر با طرح‌های مختلف مانند
                  <Link
                    className=""
                    to="https://www.digikala.com/tags/miraculous/"
                  >
                    دختر کفشدوزکی
                  </Link>
                  ، سازهایی مثل&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-pianos/"
                    target="_blank"
                  >
                    پیانو
                  </Link>
                  ،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-dulcimer/"
                    target="_blank"
                  >
                    سنتور
                  </Link>
                  ،&nbsp;
                  <Link
                    className=""
                    to="https://www.digikala.com/search/category-percussion/"
                    target="_blank"
                  >
                    هنگ درام
                  </Link>
                  &nbsp; و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما
                  قرار دارند.
                </p>
                <h2 className="font-bold text-[14px] lg:text-[16px] mb-2">
                  ورزش و سفر
                </h2>
              </div>

              <Link
                className="flex items-center mt-2 cursor-pointer"
                id="show-more"
                onClick={clickHandler}
              >
                <p
                  className="text-[#a1a3a8] lg: text-[14px] lg:text-[12px]"
                  id="text"
                >
                  مشاهده کمتر
                </p>
                <FaLongArrowAltLeft className="" />
              </Link>
            </div>
            <div className="w-[25%] hidden lg:flex grow items-center justify-end gap-x-2">
              <Link
                to="#"
                className="p-4 border border-[#e0e0e2] rounded-[5px]"
              >
                <img
                  src={enamad}
                  alt=""
                  className="w-[75px] h-[75px] object-cover"
                />
              </Link>
              <Link
                to="#"
                className="p-4 border border-[#e0e0e2] rounded-[5px]"
              >
                <img
                  src={enamad}
                  alt=""
                  className="w-[75px] h-[75px] object-contain"
                />
              </Link>
              <Link
                to="#"
                className="p-4 border border-[#e0e0e2] rounded-[5px]"
              >
                <img
                  src={enamad}
                  alt=""
                  className="w-[75px] h-[75px] object-cover"
                />
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex text-neutral-500 text-center items-center flex-col justify-between text-[12px] py-8">
            <p>
              برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
              کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
              (فروشگاه آنلاین دیجی‌کالا) است.
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default LastPart;
