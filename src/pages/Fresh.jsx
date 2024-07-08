import Banner_Fresh from "../components/templates/Fresh_templates/Banner_Fresh";
import FreshOrder from "../components/templates/Fresh_templates/FreshOrder";
import FreshProductBar from "../components/templates/Fresh_templates/FreshProductBar";
import BuyBaseOnCategory from "../components/templates/Home_templates/BuyBaseOnCategory";
import ProductBar from "../components/templates/Home_templates/ProductBar";
// components
import PorFroush from "../components/templates/Home_templates/PorFroush";
// data
import { FreshBuyBaseOnCategoryData } from "../data/BuyBaseOnCategoryData";
import { OrderData } from "../data/OrderData";
import { FreshHeadlthProducts } from "../data/OrderData";
import { FreshDiaryData } from "../data/OrderData";
import { GoodTasteData } from "../data/OrderData";
import { FreshPorFroushData } from "../data/PorFroushData";
// Component
import Hot from "../components/templates/Home_templates/Hot";
function Fresh() {
  return (
    <div className="w-full">
      <Banner_Fresh />
      <FreshProductBar />
      <BuyBaseOnCategory
        FreshBuyBaseOnCategoryData={FreshBuyBaseOnCategoryData}
      />
      <FreshOrder title={"میوه‌های تازه"} data={OrderData} />
      <FreshOrder title={"بهداشتی و نظافت"} data={FreshHeadlthProducts} />
      <FreshOrder title={"لبنیات روز"} data={FreshDiaryData} />
      <FreshOrder title={"مزه‌های خوشمزه"} data={GoodTasteData} />
      <Hot data={FreshPorFroushData} text="پرفروش‌ترین کالاها" />
      <Hot data={FreshPorFroushData} text="داغ ترین چند ساعت گذشته" />
      <Hot data={FreshPorFroushData} text="داغ ترین چند ساعت گذشته" />
    </div>
  );
}

export default Fresh;
