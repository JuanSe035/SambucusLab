import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
        mt-20
        text-white
        bg-gradient-to-br
        from-purple-950
        via-violet-950
        to-purple-900
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* =================================================
              MARCA
          ================================================= */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white/10
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <span
                  className="text-xl font-black"
                  style={{
                    color: "#ffffff",
                  }}
                >
                  S
                </span>
              </div>

              <div>

                <h3
                  className="
                    text-2xl
                    font-black
                  "
                  style={{
                    color: "#ffffff",
                    textShadow:
                      "0 2px 8px rgba(0,0,0,0.35)",
                  }}
                >
                  SambucusLab
                </h3>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    mt-1
                    font-bold
                  "
                  style={{
                    color: "#e9d5ff",
                  }}
                >
                  Investigación gastronómica
                </p>

              </div>

            </div>

            <p
              className="
                leading-7
                text-sm
                max-w-md
                font-medium
              "
              style={{
                color: "#f3e8ff",
              }}
            >
              Plataforma web del proyecto de investigación
              sobre la aplicación del saúco (
              <span
                className="italic font-semibold"
                style={{
                  color: "#ffffff",
                }}
              >
                Sambucus nigra
              </span>
              ) en productos tradicionales de pastelería.
            </p>

          </div>

          {/* =================================================
              NAVEGACIÓN
          ================================================= */}

          <div>

            <h4
              className="
                text-sm
                font-black
                uppercase
                tracking-[0.2em]
                mb-6
              "
              style={{
                color: "#ffffff",
              }}
            >
              Navegación
            </h4>

            <ul className="grid grid-cols-2 gap-y-4 text-sm">

              <li>
                <Link
                  to="/"
                  className="
                    font-medium
                    transition-all
                    duration-300
                    hover:translate-x-1
                    inline-block
                  "
                  style={{
                    color: "#f3e8ff",
                  }}
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to="/investigacion"
                  className="
                    font-medium
                    transition-all
                    duration-300
                    hover:translate-x-1
                    inline-block
                  "
                  style={{
                    color: "#f3e8ff",
                  }}
                >
                  Investigación
                </Link>
              </li>

              <li>
                <Link
                  to="/resultados"
                  className="
                    font-medium
                    transition-all
                    duration-300
                    hover:translate-x-1
                    inline-block
                  "
                  style={{
                    color: "#f3e8ff",
                  }}
                >
                  Resultados
                </Link>
              </li>

              <li>
                <Link
                  to="/recetas"
                  className="
                    font-medium
                    transition-all
                    duration-300
                    hover:translate-x-1
                    inline-block
                  "
                  style={{
                    color: "#f3e8ff",
                  }}
                >
                  Recetas
                </Link>
              </li>

              <li>
                <Link
                  to="/contacto"
                  className="
                    font-medium
                    transition-all
                    duration-300
                    hover:translate-x-1
                    inline-block
                  "
                  style={{
                    color: "#f3e8ff",
                  }}
                >
                  Contacto
                </Link>
              </li>

            </ul>

          </div>

          {/* =================================================
              PROYECTO
          ================================================= */}

          <div>

            <h4
              className="
                text-sm
                font-black
                uppercase
                tracking-[0.2em]
                mb-6
              "
              style={{
                color: "#ffffff",
              }}
            >
              Proyecto académico
            </h4>

              <div className="space-y-3 text-sm leading-6 font-medium">

                <p
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Ingeniería de Sistemas
                </p>

                <p
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Investigación interdisciplinaria en
                  gastronomía, análisis sensorial y estadística.
                </p>

                <p
                  style={{
                    color: "#ffffff",
                  }}
                >
                  2026
                </p>

              </div>

          </div>

        </div>

        {/* =================================================
            LÍNEA INFERIOR
        ================================================= */}

        <div
          className="
            border-t
            border-white/20
            mt-14
            pt-7
            flex
            flex-col
            md:flex-row
            justify-between
            gap-3
            text-xs
            font-medium
          "
        >

          <p
            style={{
              color: "#e9d5ff",
            }}
          >
            © 2026 SambucusLab
          </p>

          <p
            style={{
              color: "#e9d5ff",
            }}
          >
            Proyecto académico de investigación
          </p>

        </div>

      </div>
    </footer>
  );
}