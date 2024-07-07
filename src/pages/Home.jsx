import StoryBar from "../components/templates/Home_templates/StoryBar";
import Banner from "../components/templates/Home_templates/Banner";
import OptionsBar from "../components/templates/Home_templates/OptionsBar";
import ProductBar from "../components/templates/Home_templates/ProductBar";
import SuperShegeft from "../components/templates/Home_templates/SuperShegeft";
import SlideBanner from "../components/templates/Home_templates/SlideBanner";
import BuyBaseOnCategory from "../components/templates/Home_templates/BuyBaseOnCategory";
import DoubelBoxOne from "../components/templates/Home_templates/DoubelBoxOne";
import Brand from "../components/templates/Home_templates/Brand";
import DoubelBoxTwo from "../components/templates/Home_templates/DoubelBoxTwo";
import ChessProductOne from "../components/templates/Home_templates/ChessProductOne";
import ChessProductTwo from "../components/templates/Home_templates/ChessProductTwo";
import DigiClubBanner from "../components/templates/Home_templates/DigiClubBanner";
import PorFroush from "../components/templates/Home_templates/PorFroush";
import Choosed from "../components/templates/Home_templates/Choosed";
// import PorFroushTwo from "../components/templates/Home_templates/PorFroushTwo";
import Hot from "../components/templates/Home_templates/Hot";
import Reading from "../components/templates/Home_templates/Reading";
function Home() {
  return (
    <div>

      <StoryBar />
      <Banner />
      <OptionsBar />
      <ProductBar />
      <SuperShegeft />
      <SlideBanner />
      <BuyBaseOnCategory />
      <DoubelBoxOne />
      <Brand />
      <DoubelBoxTwo />
      <ChessProductOne />
      <DigiClubBanner />
      <PorFroush />
      <ChessProductTwo />
      <Choosed />
      {/* <PorFroushTwo /> */}
      <Hot />
      <Reading />
    </div>
  );
}

export default Home;
