import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-700 text-white">

      {/* Decoraciones de fondo */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -left-32 w-[30rem] h-[30rem] bg-violet-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* CONTENIDO PRINCIPAL */}
          <div>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-7">
              <span className="w-2 h-2 rounded-full bg-purple-300" />

              <span className="text-xs md:text-sm uppercase tracking-[0.18em] font-semibold text-purple-100">
                Proyecto de investigación gastronómica
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Sambucus
              <span className="text-purple-300">
                Lab
              </span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-purple-300 to-fuchsia-300 rounded-full mt-7" />

            <h2 className="mt-7 text-2xl md:text-3xl font-semibold leading-tight text-white">
              Aplicación del saúco en productos tradicionales de pastelería
            </h2>

            <p className="mt-6 text-base md:text-lg text-purple-100 leading-8 max-w-2xl">
              Investigación enfocada en analizar el comportamiento sensorial
              y gastronómico de diferentes concentraciones de saúco
              <span className="italic"> (Sambucus nigra)</span> aplicadas
              en productos tradicionales como pavlova y mousse.
            </p>

            {/* BOTONES */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/investigacion"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3.5
                  rounded-xl
                  bg-white
                  text-purple-900
                  font-bold
                  shadow-lg shadow-purple-950/20
                  hover:bg-purple-50
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                Ver investigación
              </Link>

              <Link
                to="/resultados"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3.5
                  rounded-xl
                  border border-white/30
                  bg-white/5
                  backdrop-blur-sm
                  text-white
                  font-semibold
                  hover:bg-white/15
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                Explorar resultados
              </Link>

            </div>

            {/* DATOS RÁPIDOS */}
            <div className="mt-12 grid grid-cols-3 max-w-lg border-t border-white/15 pt-7">

              <div>
                <p className="text-2xl font-bold">
                  3
                </p>

                <p className="text-xs text-purple-200 mt-1">
                  concentraciones
                </p>
              </div>

              <div className="border-l border-white/15 pl-5">
                <p className="text-2xl font-bold">
                  2
                </p>

                <p className="text-xs text-purple-200 mt-1">
                  productos
                </p>
              </div>

              <div className="border-l border-white/15 pl-5">
                <p className="text-2xl font-bold">
                  0–100
                </p>

                <p className="text-xs text-purple-200 mt-1">
                  escala sensorial
                </p>
              </div>

            </div>

          </div>

          {/* IMAGEN */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Halo */}
              <div className="absolute inset-0 bg-purple-400/20 blur-3xl rounded-full scale-110" />

              {/* Contenedor de imagen */}
              <div className="
                relative
                w-72 h-72
                md:w-96 md:h-96
                rounded-[2.5rem]
                overflow-hidden
                border
                border-white/20
                shadow-2xl
                shadow-purple-950/40
              ">

                <img
                  src="https://static.snoweb.io/images/sureau-_ArEBfW0.2e16d0ba.fill-600x600.format-jpeg.jpegquality-90.jpg"
                  alt="Frutos de saúco"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 via-transparent to-purple-700/10" />

              </div>

              {/* Etiqueta flotante */}
              <div className="
                absolute
                -bottom-5
                -left-5
                md:-left-8
                bg-white
                text-purple-950
                rounded-2xl
                px-5
                py-4
                shadow-xl
              ">

                <p className="text-xs uppercase tracking-[0.18em] text-purple-500 font-bold">
                  Especie estudiada
                </p>

                <p className="mt-1 font-bold">
                  Sambucus nigra
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}