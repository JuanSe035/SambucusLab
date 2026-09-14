import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 text-white bg-gradient-to-br from-purple-950 via-violet-950 to-purple-900">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* IDENTIDAD */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                <span className="text-xl font-bold">
                  S
                </span>
              </div>

              <div>

                <h3 className="text-2xl font-extrabold">
                  SambucusLab
                </h3>

                <p className="text-xs uppercase tracking-[0.25em] text-purple-300 mt-1">
                  Investigación gastronómica
                </p>

              </div>

            </div>

            <p className="text-purple-200 leading-7 text-sm max-w-md">
              Plataforma web del proyecto de investigación sobre la
              aplicación del saúco (
              <span className="italic">Sambucus nigra</span>
              ) en productos tradicionales de pastelería.
            </p>

          </div>


          {/* NAVEGACIÓN */}

          <div>

            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-purple-300 mb-6">
              Navegación
            </h4>

            <ul className="grid grid-cols-2 gap-y-3 text-sm">

              <li>
                <Link
                  to="/"
                  className="text-purple-200 hover:text-white transition"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to="/investigacion"
                  className="text-purple-200 hover:text-white transition"
                >
                  Investigación
                </Link>
              </li>

              <li>
                <Link
                  to="/resultados"
                  className="text-purple-200 hover:text-white transition"
                >
                  Resultados
                </Link>
              </li>

              <li>
                <Link
                  to="/recetas"
                  className="text-purple-200 hover:text-white transition"
                >
                  Recetas
                </Link>
              </li>

              <li>
                <Link
                  to="/contacto"
                  className="text-purple-200 hover:text-white transition"
                >
                  Contacto
                </Link>
              </li>

            </ul>

          </div>


          {/* PROYECTO */}

          <div>

            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-purple-300 mb-6">
              Proyecto académico
            </h4>

            <div className="space-y-3 text-sm text-purple-200 leading-6">

              <p>
                Ingeniería de Sistemas
              </p>

              <p>
                Investigación interdisciplinaria en gastronomía,
                análisis sensorial y estadística.
              </p>

              <p>
                2026
              </p>

            </div>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="border-t border-white/10 mt-14 pt-7 flex flex-col md:flex-row justify-between gap-3 text-xs text-purple-300">

          <p>
            © 2026 SambucusLab
          </p>

          <p>
            Proyecto académico de investigación
          </p>

        </div>

      </div>

    </footer>
  );
}