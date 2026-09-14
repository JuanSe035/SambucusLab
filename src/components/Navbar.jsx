import { NavLink } from "react-router-dom";

const links = [
  { name: "Inicio", path: "/" },
  { name: "Sobre el saúco", path: "/sobre-sauco" },
  { name: "Investigación", path: "/investigacion" },
  { name: "Resultados", path: "/resultados" },
  { name: "Recetas", path: "/recetas" },
  { name: "Galería", path: "/galeria" },
  { name: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-purple-950/95 backdrop-blur-md border-b border-purple-800 z-50">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <NavLink to="/" className="text-3xl font-bold text-white">
          Sambucus<span className="text-purple-300">Lab</span>
        </NavLink>

        <div className="hidden lg:flex gap-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "text-purple-200 hover:bg-purple-800 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}