import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CVLayout } from "./components/CVLayout";
import { cvDataEs, cvDataEn } from "./data/cvData";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta raíz: Carga datos en Español */}
        <Route path="/" element={<CVLayout data={cvDataEs} locale="es" />} />

        {/* Ruta inglés: Carga datos en Inglés */}
        <Route
          path="/en"
          element={<CVLayout data={cvDataEn} locale="en" />}
        />

        {/* Redirección por defecto */}
        <Route path="*" element={<CVLayout data={cvDataEs} locale="es" />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
