// import IncredibleOffersTop from "../components/templates/IncredibleOffers_modules/IncredibleTop";
// import ProductBard from "../components/modules/IncredibleOffers_modules/ProductBar";

import IncredibleOffersTop from "../components/modules/IncredibleOffers_modules/IncredibleTop";
import ProductBard from "../components/templates/Incredible_templates/ProductBar";
import IncredibleCategory from "../components/templates/Incredible_templates/IncredibleCategory";
import ShegeftMontakhab from "../components/templates/Incredible_templates/ShegeftMontakhab";
import SuperShegeftIncredible from "../components/templates/Incredible_templates/SuperShegeftIncredible";
function IncredibleOffers() {
  return (
    <div>
      <IncredibleOffersTop />
      <ProductBard />
      <IncredibleCategory />
      <ShegeftMontakhab />
      <SuperShegeftIncredible />
    </div>
  );
}

export default IncredibleOffers;
