import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

const concentraciones = [
  {
    brix: "4° Brix",
    formula: "150 g de saúco + 300 ml de agua",
    nivel: "Concentración baja",
  },
  {
    brix: "7° Brix",
    formula: "150 g de saúco + 150 ml de agua",
    nivel: "Concentración media",
  },
  {
    brix: "10° Brix",
    formula: "250 g de saúco + 150 ml de agua",
    nivel: "Concentración alta",
  },
];

const atributos = [
  "Color",
  "Aroma",
  "Sabor",
  "Textura",
  "Dulzor",
  "Aceptación general",
];

export default function Resultados() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-purple-300 text-sm font-semibold">
            Análisis experimental
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4">
            Resultados
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-purple-100 leading-8">
            Resultados obtenidos a partir de la evaluación de diferentes
            concentraciones de saúco aplicadas a productos tradicionales de
            pastelería.
          </p>
        </div>
      </section>

      {/* CONCENTRACIONES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Análisis de resultados"
            title="Concentraciones evaluadas"
            description="El estudio comparó tres niveles de concentración de saúco para analizar su comportamiento en las preparaciones desarrolladas."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {concentraciones.map((item) => (
              <div
                key={item.brix}
                className="bg-purple-50 rounded-3xl p-8 border border-purple-100 shadow-sm"
              >
                <div className="text-4xl font-black text-purple-800">
                  {item.brix}
                </div>

                <h3 className="mt-4 text-xl font-bold text-purple-950">
                  {item.nivel}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.formula}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-24 px-6 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Productos evaluados"
            title="Pavlova y mousse"
            description="Las formulaciones fueron aplicadas principalmente en dos productos de pastelería para realizar la evaluación sensorial."
          />

          <div className="grid md:grid-cols-2 gap-10">
            <article className="bg-white rounded-3xl p-10 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-800">
                P
              </div>

              <h3 className="mt-6 text-3xl font-bold text-purple-950">
                Pavlova
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                Preparación basada en merengue horneado en la que se evaluó la
                incorporación del saúco y su influencia sobre las características
                sensoriales del producto.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-10 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-800">
                M
              </div>

              <h3 className="mt-6 text-3xl font-bold text-purple-950">
                Mousse
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                Preparación de textura cremosa utilizada para estudiar el
                comportamiento del saúco en diferentes niveles de concentración.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* EVALUACIÓN SENSORIAL */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="Evaluación sensorial"
            title="Variables analizadas"
            description="La evaluación se realizó mediante un formulario en línea utilizando una escala de 0 a 100."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {atributos.map((atributo, index) => (
              <div
                key={atributo}
                className="bg-purple-50 rounded-2xl p-6 text-center border border-purple-100"
              >
                <span className="text-sm text-purple-500 font-semibold">
                  0{index + 1}
                </span>

                <h3 className="mt-2 text-lg font-bold text-purple-900">
                  {atributo}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-purple-950 text-white rounded-3xl p-10 text-center">
            <p className="text-purple-300 uppercase tracking-widest text-sm font-semibold">
              Escala utilizada
            </p>

            <div className="text-6xl font-black mt-4">
              0 — 100
            </div>

            <p className="mt-5 text-purple-200 leading-7">
              0 representa la valoración más baja y 100 la valoración más alta.
            </p>
          </div>
        </div>
      </section>

      {/* HALLAZGOS */}
      <section className="py-24 px-6 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Interpretación"
            title="Principales hallazgos"
            description="Los resultados experimentales permiten establecer relaciones entre la concentración del zumo y la percepción sensorial de los productos."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-purple-900">
                Color
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                El aumento de la concentración permite obtener tonalidades
                púrpuras más marcadas, convirtiendo al saúco en una alternativa
                de coloración natural.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-purple-900">
                Sabor y aroma
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Las diferentes concentraciones modifican la intensidad de las
                características propias del fruto y permiten comparar su
                percepción sensorial.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-purple-900">
                Aceptación
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                La evaluación sensorial permite identificar qué formulaciones
                presentan mayor aceptación entre los participantes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className="py-24 px-6 bg-purple-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            subtitle="Conclusión"
            title="Viabilidad gastronómica del saúco"
            description="El saúco presenta potencial para incorporarse en productos tradicionales de pastelería, aportando características diferenciadas de color, sabor y aroma."
          />

          <Link
            to="/investigacion"
            className="inline-block mt-8 bg-white text-purple-900 px-8 py-4 rounded-xl font-semibold hover:bg-purple-200 transition"
          >
            Volver a investigación
          </Link>
        </div>
      </section>
    </main>
  );
}