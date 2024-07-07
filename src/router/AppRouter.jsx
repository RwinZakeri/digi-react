import { Route, Routes } from "react-router-dom";
import IncredibleOffers from "../pages/Incredible-Offers";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Fresh from "../pages/Fresh";
function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incredible-offers" element={<IncredibleOffers />} />
        <Route path="/fresh" element={<Fresh />} />
      </Routes>
    </Layout>
  );
}

export default AppRouter;
