// import IncredibleOffersTop from "../components/templates/IncredibleOffers_modules/IncredibleTop";
// import ProductBard from "../components/modules/IncredibleOffers_modules/ProductBar";

import IncredibleOffersTop from "../components/modules/IncredibleOffers_modules/IncredibleTop";
import ProductBard from "../components/templates/Incredible_templates/ProductBar";
import IncredibleCategory from "../components/templates/Incredible_templates/IncredibleCategory";
import ShegeftMontakhab from "../components/templates/Incredible_templates/ShegeftMontakhab";
import SuperShegeftIncredible from "../components/templates/Incredible_templates/SuperShegeftIncredible";
import DigiPlus from "../components/templates/Incredible_templates/DigiPlus";
import Order from "../components/templates/Incredible_templates/Order";
import IncredibleComponent from "../components/templates/Incredible_templates/IncredibleComponent";
function IncredibleOffers() {
  return (
    <div>
      <IncredibleOffersTop />
      <ProductBard />
      <IncredibleCategory />
      <ShegeftMontakhab />
      <SuperShegeftIncredible />
      <DigiPlus />
      <Order/>
      <IncredibleComponent/>
    </div>
  );
}

export default IncredibleOffers;
