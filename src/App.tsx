import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LandingPage from "./pages/LandingPage";
import CikampekPage from "./pages/CikampekPage";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/jasa-sedot-wc-cikampek" element={<CikampekPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
