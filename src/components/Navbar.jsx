import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "Inicio", path: "/" },
    { name: "Sobre el saúco", path: "/sobre-sauco" },
    { name: "Investigación", path: "/investigacion" },
    { name: "Resultados", path: "/resultados" },
    { name: "Recetas", path: "/recetas" },
    { name: "Galería", path: "/galeria" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-purple-950/95 backdrop-blur-md border-b border-purple-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-white tracking-tight"
          >
            Sambucus<span className="text-purple-300">Lab</span>
          </NavLink>

          {/* NAVEGACIÓN */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? "bg-purple-700 text-white"
                      : "text-purple-200 hover:bg-purple-800 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}