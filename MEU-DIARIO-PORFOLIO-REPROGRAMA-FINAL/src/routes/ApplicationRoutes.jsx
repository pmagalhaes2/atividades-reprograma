import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre/Sobre";
import Portfolio from "../pages/Portfolio/Portfolio";
import Comentarios from "../pages/Comentarios/Comentarios";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import Diario from "../pages/Diario/Diario";
import Contato from "../pages/Contato/Contato";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/diario-reprograma" element={<Diario />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/comentarios" element={<Comentarios />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer text="Desenvolvido por Patricia Magalhães" />
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
