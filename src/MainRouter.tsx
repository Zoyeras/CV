import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CVLayout } from "./components/CVLayout";
import { cvDataEs, cvDataEn } from "./data/cvData";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta raíz: Carga datos en Español */}
        <Route path="/" element={<CVLayout data={cvDataEs} />} />

        {/* Ruta inglés: Carga datos en Inglés */}
        <Route path="/en" element={<CVLayout data={cvDataEn} />} />

        {/* Redirección por defecto */}
        <Route path="*" element={<CVLayout data={cvDataEs} />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
