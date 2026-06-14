import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LandingPage from "./pages/LandingPage";
import CikampekPage from "./pages/CikampekPage";
import BlogArticlePage from "./pages/BlogArticlePage";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/jasa-sedot-wc-cikampek" element={<CikampekPage />} />
          <Route path="/tips-mengatasi-wc-mampet-karawang" element={<BlogArticlePage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
