import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Prices from "./pages/Prices";
import SalesTracker from "./pages/SalesTracker";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/sales-tracker" element={<SalesTracker />} />
      </Routes>
    </>
  );
}

export default App;
