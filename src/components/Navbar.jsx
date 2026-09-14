import { NavLink } from "react-router-dom";

const links = [
  { name: "Inicio", path: "/" },
  { name: "Investigación", path: "/investigacion" },
  { name: "Resultados", path: "/resultados" },
  { name: "Recetas", path: "/recetas" },
  { name: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-r from-purple-950 via-violet-900 to-purple-800 border-b border-white/10 shadow-lg">

        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}

          <NavLink
            to="/"
            className="group flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-inner">
              <span className="text-xl font-bold text-white">
                S
              </span>
            </div>

            <div className="leading-none">
              <span className="block text-xl font-extrabold text-white tracking-tight">
                Sambucus
              </span>

              <span className="block text-xs font-semibold text-purple-300 tracking-[0.25em] uppercase mt-1">
                Lab
              </span>
            </div>
          </NavLink>


          {/* NAVEGACIÓN */}

          <div className="hidden md:flex items-center gap-1">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `
                  relative
                  px-4
                  py-2.5
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-white text-purple-900 shadow-md"
                      : "text-purple-100 hover:bg-white/10 hover:text-white"
                  }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>


          {/* INDICADOR */}

          <div className="hidden lg:flex xl:hidden">
            <span className="text-xs text-purple-200">
              Proyecto de investigación
            </span>
          </div>

        </nav>

      </div>
    </header>
  );
}