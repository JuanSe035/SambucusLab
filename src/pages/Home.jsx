import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>

      <Hero />

      {/* Proyecto */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Sambucus nigra"
            title="¿Por qué investigar el saúco?"
            description="El saúco es una fruta con alto contenido de antocianinas y compuestos fenólicos. Esta investigación analiza su potencial gastronómico mediante diferentes concentraciones aplicadas a productos tradicionales de pastelería."
          />

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Color natural",
                text: "Las antocianinas aportan tonalidades púrpuras intensas.",
              },
              {
                title: "Sabor y aroma",
                text: "Cada concentración modifica la percepción sensorial.",
              },
              {
                title: "Innovación gastronómica",
                text: "El saúco puede utilizarse como ingrediente funcional.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-purple-50 rounded-2xl p-8 shadow hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-purple-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Concentraciones */}
      <section className="py-24 px-6 bg-purple-50">
        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Diseño experimental"
            title="Concentraciones evaluadas"
            description="Se analizaron tres niveles de concentración medidos en grados Brix."
          />

          <div className="grid md:grid-cols-3 gap-8">

            {[
              ["4° Brix", "Concentración baja"],
              ["7° Brix", "Concentración media"],
              ["10° Brix", "Concentración alta"],
            ].map(([brix, label]) => (
              <div
                key={brix}
                className="bg-white rounded-2xl p-10 text-center shadow-md border border-purple-100 hover:-translate-y-2 transition"
              >
                <div className="text-5xl font-bold text-purple-800">
                  {brix}
                </div>

                <p className="mt-4 text-gray-600">
                  {label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Productos */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Aplicaciones"
            title="Productos desarrollados"
            description="Las concentraciones fueron incorporadas en preparaciones tradicionales de pastelería."
          />

          <div className="grid md:grid-cols-2 gap-10">

            <div className="rounded-3xl bg-purple-900 text-white p-10">
              <h3 className="text-3xl font-bold">
                Pavlova
              </h3>

              <p className="mt-5 text-purple-200 leading-8">
                Evaluación del comportamiento del saúco en un merengue horneado,
                considerando color, textura y aceptación.
              </p>
            </div>

            <div className="rounded-3xl bg-purple-100 p-10">
              <h3 className="text-3xl font-bold text-purple-900">
                Mousse
              </h3>

              <p className="mt-5 text-purple-700 leading-8">
                Estudio sensorial de mousse enriquecido con diferentes
                concentraciones de saúco.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Resultados */}
      <section className="py-24 px-6 bg-purple-950 text-white">
        <div className="max-w-5xl mx-auto text-center">

          <SectionTitle
            subtitle="Hallazgos"
            title="Explora los resultados del proyecto"
            description="Descubre cómo las concentraciones influyen en el color, aroma, sabor y aceptación sensorial."
          />

          <Link
            to="/resultados"
            className="inline-block mt-8 bg-white text-purple-900 px-8 py-4 rounded-xl font-semibold hover:bg-purple-200 transition"
          >
            Ver resultados completos
          </Link>

        </div>
      </section>

    </main>
  );
}