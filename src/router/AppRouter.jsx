import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Investigacion from "../pages/Investigacion";
import Resultados from "../pages/Resultados";
import Recetas from "../pages/Recetas";
import Contacto from "../pages/Contacto";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/investigacion"
        element={<Investigacion />}
      />

      <Route
        path="/resultados"
        element={<Resultados />}
      />

      <Route
        path="/recetas"
        element={<Recetas />}
      />

      <Route
        path="/contacto"
        element={<Contacto />}
      />
    </Routes>
  );
}