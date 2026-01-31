import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import App_EN from "./App_EN";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/en" element={<App_EN />} />
        {/* Redirección por defecto */}
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
