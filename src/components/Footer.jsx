import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-purple-200 py-14 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-2xl font-bold text-white">
            SambucusLab
          </h3>

          <p className="mt-4 leading-7 text-sm">
            Plataforma web del proyecto de investigación sobre la aplicación del
            saúco (Sambucus nigra) en productos tradicionales de pastelería.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">
            Navegación
          </h4>

          <ul className="space-y-2 text-sm">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobre-sauco">Sobre el saúco</Link></li>
            <li><Link to="/investigacion">Investigación</Link></li>
            <li><Link to="/resultados">Resultados</Link></li>
            <li><Link to="/recetas">Recetas</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">
            Proyecto académico
          </h4>

          <p className="text-sm leading-7">
            Ingeniería de Sistemas

            <br />

            Investigación interdisciplinaria en gastronomía y análisis estadístico.

            <br />

            2026
          </p>
        </div>

      </div>

      <div className="border-t border-purple-800 mt-10 pt-6 text-center text-sm text-purple-400">
        © 2026 SambucusLab · Todos los derechos reservados.
      </div>
    </footer>
  );
}