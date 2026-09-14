import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

export default function Resultados() {
  return (
    <main className="bg-[#faf8ff]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-700 text-white">

        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">

          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.2em] text-purple-200 font-semibold">
            Hallazgos
          </span>

          <h1 className="mt-7 text-5xl md:text-6xl font-extrabold">
            Resultados del estudio
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-purple-100 leading-8">
            Exploración de los principales hallazgos obtenidos durante la
            evaluación sensorial de productos elaborados con diferentes
            concentraciones de saúco.
          </p>

        </div>

      </section>


      {/* =====================================================
          CONCENTRACIONES
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Diseño experimental"
            title="Concentraciones evaluadas"
            description="Las preparaciones fueron desarrolladas utilizando tres niveles de concentración expresados en grados Brix."
          />

          <div className="grid md:grid-cols-3 gap-7">

            {[
              ["4°", "Brix", "Concentración baja"],
              ["7°", "Brix", "Concentración media"],
              ["10°", "Brix", "Concentración alta"],
            ].map(([number, unit, label], index) => (
              <article
                key={number}
                className={`
                  rounded-3xl p-9 border
                  ${
                    index === 1
                      ? "bg-gradient-to-br from-purple-950 to-violet-800 text-white border-purple-800 shadow-xl"
                      : "bg-purple-50 border-purple-100"
                  }
                `}
              >

                <p
                  className={
                    index === 1
                      ? "text-purple-300 text-xs uppercase tracking-[0.2em] font-bold"
                      : "text-purple-600 text-xs uppercase tracking-[0.2em] font-bold"
                  }
                >
                  {label}
                </p>

                <div className="mt-5 flex items-end gap-2">

                  <span className="text-6xl font-extrabold">
                    {number}
                  </span>

                  <span
                    className={
                      index === 1
                        ? "text-purple-200 mb-2"
                        : "text-purple-700 mb-2"
                    }
                  >
                    {unit}
                  </span>

                </div>

                <div
                  className={
                    index === 1
                      ? "mt-6 border-t border-white/10 pt-5 text-purple-100"
                      : "mt-6 border-t border-purple-100 pt-5 text-gray-600"
                  }
                >
                  Nivel utilizado dentro del diseño experimental.
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTOS
      ===================================================== */}

      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-violet-50">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Preparaciones"
            title="Productos evaluados"
            description="El análisis se centró en dos preparaciones tradicionales de pastelería."
          />

          <div className="grid md:grid-cols-2 gap-8">

            <article className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-purple-950 to-violet-800 text-white p-10">

              <span className="text-xs uppercase tracking-[0.2em] text-purple-300 font-bold">
                Producto 01
              </span>

              <h3 className="mt-5 text-4xl font-extrabold">
                Pavlova
              </h3>

              <p className="mt-5 text-purple-100 leading-8">
                Preparación basada en merengue horneado, evaluada considerando
                sus características visuales, aromáticas, gustativas y de
                textura.
              </p>

            </article>


            <article className="rounded-[2rem] bg-white border border-purple-100 p-10 shadow-sm">

              <span className="text-xs uppercase tracking-[0.2em] text-purple-600 font-bold">
                Producto 02
              </span>

              <h3 className="mt-5 text-4xl font-extrabold text-purple-950">
                Mousse
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                Preparación de textura aireada utilizada para analizar el efecto
                de las diferentes concentraciones de saúco sobre la percepción
                sensorial.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          ATRIBUTOS
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Evaluación sensorial"
            title="Atributos analizados"
            description="La percepción de los productos se estudió mediante diferentes dimensiones sensoriales."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

            {[
              "Sabor",
              "Aroma",
              "Apariencia",
              "Textura",
              "Color",
              "Aceptación general",
            ].map((attribute, index) => (
              <div
                key={attribute}
                className="rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 p-6 text-center"
              >

                <span className="text-xs font-bold text-purple-400">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-lg font-bold text-purple-950">
                  {attribute}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ESCALA
      ===================================================== */}

      <section className="py-24 px-6 bg-gradient-to-br from-purple-950 via-violet-900 to-purple-800 text-white">

        <div className="max-w-5xl mx-auto text-center">

          <span className="text-xs uppercase tracking-[0.25em] text-purple-300 font-bold">
            Escala de valoración
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Evaluación de 0 a 100
          </h2>

          <p className="mt-6 text-purple-100 leading-8 text-lg max-w-3xl mx-auto">
            Los participantes valoraron las características de los productos
            mediante una escala numérica de 0 a 100.
          </p>

          <div className="mt-12">

            <div className="flex justify-between text-sm text-purple-200 mb-3">
              <span>0 · menor valoración</span>
              <span>100 · mayor valoración</span>
            </div>

            <div className="h-5 rounded-full bg-white/10 overflow-hidden border border-white/10">

              <div className="h-full w-full bg-gradient-to-r from-purple-400 via-violet-300 to-fuchsia-300 rounded-full" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HALLAZGOS CUALITATIVOS
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Interpretación"
            title="Principales hallazgos"
            description="Los resultados permiten identificar tendencias generales en el comportamiento sensorial de las preparaciones."
          />

          <div className="grid md:grid-cols-3 gap-7">

            {[
              {
                title: "Color",
                text: "El saúco aporta tonalidades púrpuras distintivas que pueden diferenciar visualmente las preparaciones.",
              },
              {
                title: "Sabor y aroma",
                text: "El incremento de concentración modifica la intensidad de las características propias del fruto.",
              },
              {
                title: "Aceptación",
                text: "Las concentraciones medias y altas mostraron mayor interés sensorial, mientras que una concentración baja puede resultar apropiada para perfiles más suaves.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 p-8 soft-shadow"
              >

                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-purple-700 to-violet-400" />

                <h3 className="mt-6 text-2xl font-bold text-purple-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.text}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONCLUSIÓN
      ===================================================== */}

      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-violet-50">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-xs uppercase tracking-[0.25em] text-purple-600 font-bold">
            Conclusión
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-purple-950">
            El saúco demuestra potencial gastronómico
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Los hallazgos respaldan la viabilidad del saúco como ingrediente
            en pavlova y mousse, aportando características de color, sabor y
            aroma diferenciadas.
          </p>

          <Link
            to="/investigacion"
            className="inline-flex mt-9 px-7 py-4 rounded-xl bg-purple-900 text-white font-bold hover:bg-purple-800 transition"
          >
            Revisar metodología
          </Link>

        </div>

      </section>

    </main>
  );
}