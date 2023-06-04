import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PortfolioComingSoon from "./pages/PortfolioComingSoon";
import CaseStudySteward from "./pages/case-studies/CaseStudySteward";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioComingSoon />} />
        <Route path="/steward" element={<CaseStudySteward />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
