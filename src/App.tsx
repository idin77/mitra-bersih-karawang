import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CikampekPage from "./pages/CikampekPage";
import BekasiPage from "./pages/BekasiPage";
import KarawangBaratPage from "./pages/KarawangBaratPage";
import BlogArticlePage from "./pages/BlogArticlePage";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cikampek/*" element={<CikampekPage />} />
          <Route path="/bekasi/*" element={<BekasiPage />} />
          <Route path="/jasa-sedot-wc-karawang-barat/*" element={<KarawangBaratPage />} />
          <Route path="/tips-mengatasi-wc-mampet-karawang" element={<BlogArticlePage />} />
        </Routes>
      </BrowserRouter>
  );
}
