import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-700 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="uppercase tracking-[0.3em] text-purple-300 text-sm font-semibold">
            Proyecto de investigación gastronómica
          </p>

          <h1 className="text-6xl md:text-7xl font-black mt-4 leading-tight">
            SambucusLab
          </h1>

          <h2 className="mt-6 text-2xl text-purple-100 font-semibold">
            Aplicación del saúco en productos tradicionales de pastelería
          </h2>

          <p className="mt-6 text-lg text-purple-200 leading-8">
            Investigación enfocada en analizar el comportamiento sensorial
            y gastronómico de diferentes concentraciones de saúco
            (Sambucus nigra) en pavlova y mousse.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
              to="/investigacion"
              className="bg-white text-purple-900 px-6 py-3 rounded-xl font-semibold hover:bg-purple-200 transition"
            >
              Ver investigación
            </Link>

            <Link
              to="/resultados"
              className="border border-purple-300 px-6 py-3 rounded-xl hover:bg-purple-800 transition"
            >
              Explorar resultados
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-purple-800 border-8 border-purple-500 shadow-2xl flex items-center justify-center">
            <span className="text-8xl">🫐</span>
          </div>
        </div>

      </div>
    </section>
  );
}