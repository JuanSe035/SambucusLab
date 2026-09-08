import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SobreSauco from "../pages/SobreSauco";
import Investigacion from "../pages/Investigacion";
import Resultados from "../pages/Resultados";
import Recetas from "../pages/Recetas";
import Galeria from "../pages/Galeria";
import Contacto from "../pages/Contacto";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-sauco" element={<SobreSauco />} />
      <Route path="/investigacion" element={<Investigacion />} />
      <Route path="/resultados" element={<Resultados />} />
      <Route path="/recetas" element={<Recetas />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}