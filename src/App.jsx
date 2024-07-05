import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
