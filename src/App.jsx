import { Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import AppRouter from "./routes/router";
import Home from "./pages/Home";
import IncredibleOffers from "./pages/Incredible-Offers";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Layout>
       <AppRouter/>
      </Layout>
    </div>
  );
}

export default App;
