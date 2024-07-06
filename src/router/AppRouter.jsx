import { Route, Routes } from "react-router-dom";
import IncredibleOffers from "../pages/Incredible-Offers";
import Home from "../pages/Home";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/incredible-offers" element={<IncredibleOffers />} />
    </Routes>
  );
}

export default AppRouter;
