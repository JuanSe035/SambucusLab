import SectionTitle from "../components/SectionTitle";

const recetas = [
  {
    nombre: "Pavlova de saúco",
    categoria: "Producto de pastelería",
    descripcion:
      "Preparación basada en merengue horneado, complementada con saúco para evaluar sus características de color, aroma, sabor y aceptación sensorial.",
    concentracion: "4° Brix",
    ingredientes: [
      "Claras de huevo",
      "Azúcar",
      "Fécula de maíz",
      "Vinagre o zumo de limón",
      "Crema de leche",
      "Saúco",
    ],
    pasos: [
      "Preparar el merengue hasta obtener una estructura firme y estable.",
      "Incorporar los ingredientes de acuerdo con la formulación establecida.",
      "Formar las bases de pavlova sobre una bandeja.",
      "Hornear a temperatura controlada hasta obtener una textura firme en el exterior.",
      "Preparar el complemento de saúco.",
      "Montar la pavlova y añadir el componente de saúco.",
    ],
  },
  {
    nombre: "Mousse de saúco",
    categoria: "Producto de pastelería",
    descripcion:
      "Postre de textura cremosa desarrollado para analizar el comportamiento del saúco en diferentes niveles de concentración.",
    concentracion: "7° Brix",
    ingredientes: [
      "Crema de leche",
      "Azúcar",
      "Gelatina sin sabor",
      "Agua",
      "Saúco",
    ],
    pasos: [
      "Preparar el zumo de saúco según la concentración experimental.",
      "Hidratar y disolver la gelatina.",
      "Batir la crema de leche hasta alcanzar una textura semimontada.",
      "Integrar cuidadosamente el zumo de saúco.",
      "Añadir la gelatina previamente preparada.",
      "Distribuir la mezcla en recipientes y refrigerar hasta obtener la textura deseada.",
    ],
  },
  {
    nombre: "Almíbar de saúco",
    categoria: "Preparación base",
    descripcion:
      "Preparación utilizada como parte del desarrollo experimental para evaluar la incorporación del zumo de saúco en técnicas tradicionales de pastelería.",
    concentracion: "10° Brix",
    ingredientes: [
      "Saúco",
      "Agua",
      "Azúcar",
    ],
    pasos: [
      "Lavar y seleccionar los frutos de saúco.",
      "Procesar los frutos con la cantidad de agua correspondiente.",
      "Filtrar el zumo obtenido.",
      "Agregar el azúcar de acuerdo con la formulación.",
      "Calentar la preparación hasta alcanzar la concentración requerida.",
      "Dejar enfriar y conservar adecuadamente.",
    ],
  },
];

const concentraciones = [
  {
    brix: "4° Brix",
    formula: "150 g de saúco + 300 ml de agua",
    descripcion: "Concentración baja.",
  },
  {
    brix: "7° Brix",
    formula: "150 g de saúco + 150 ml de agua",
    descripcion: "Concentración media.",
  },
  {
    brix: "10° Brix",
    formula: "250 g de saúco + 150 ml de agua",
    descripcion: "Concentración alta.",
  },
];

function RecipeCard({ receta }) {
  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-md border border-purple-100 hover:shadow-xl transition duration-300">
      <div className="h-3 bg-purple-800" />

      <div className="p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            {receta.categoria}
          </span>

          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">
            {receta.concentracion}
          </span>
        </div>

        <h3 className="text-3xl font-bold text-purple-950 mt-5">
          {receta.nombre}
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          {receta.descripcion}
        </p>

        <div className="mt-8">
          <h4 className="text-xl font-bold text-purple-900 mb-4">
            Ingredientes
          </h4>

          <ul className="space-y-2">
            {receta.ingredientes.map((ingrediente) => (
              <li
                key={ingrediente}
                className="flex items-start gap-3 text-gray-600"
              >
                <span className="text-purple-600 font-bold">•</span>
                <span>{ingrediente}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-bold text-purple-900 mb-4">
            Procedimiento
          </h4>

          <ol className="space-y-4">
            {receta.pasos.map((paso, index) => (
              <li
                key={paso}
                className="flex items-start gap-4 text-gray-600 leading-7"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center">
                  {index + 1}
                </span>

                <span>{paso}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}

export default function Recetas() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-purple-300 text-sm font-semibold">
            Aplicación gastronómica
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4">
            Recetas con saúco
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-purple-100 leading-8">
            Preparaciones desarrolladas durante la investigación para evaluar
            la incorporación de diferentes concentraciones de saúco en
            productos tradicionales de pastelería.
          </p>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            subtitle="Del laboratorio a la cocina"
            title="Aplicación del saúco"
            description="Las preparaciones permiten observar cómo la concentración del zumo de saúco puede modificar características sensoriales y gastronómicas de productos tradicionales."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">01</div>

              <h3 className="text-xl font-bold text-purple-900">
                Selección
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Se seleccionan frutos maduros de saúco con coloración púrpura
                intensa y características adecuadas para el procesamiento.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">02</div>

              <h3 className="text-xl font-bold text-purple-900">
                Concentración
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                El fruto se procesa con diferentes relaciones de fruto y agua
                para obtener los niveles experimentales de grados Brix.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">03</div>

              <h3 className="text-xl font-bold text-purple-900">
                Aplicación
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                El zumo se incorpora a preparaciones de pastelería para
                analizar sus características sensoriales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCENTRACIONES */}
      <section className="py-24 px-6 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Formulación experimental"
            title="Concentraciones de saúco"
            description="La relación entre la cantidad de fruto y agua permitió obtener diferentes niveles de sólidos solubles."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {concentraciones.map((item) => (
              <div
                key={item.brix}
                className="bg-white rounded-3xl p-8 shadow-md border border-purple-100 text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-2xl font-black text-purple-800">
                    {item.brix.replace("° Brix", "°")}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-purple-950">
                  {item.brix}
                </h3>

                <p className="mt-3 text-purple-700 font-semibold">
                  {item.descripcion}
                </p>

                <div className="mt-6 bg-gray-50 rounded-xl p-5">
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    Formulación
                  </p>

                  <p className="mt-2 text-gray-700 font-medium">
                    {item.formula}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECETAS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Preparaciones"
            title="Recetario experimental"
            description="Estas preparaciones reúnen las principales aplicaciones gastronómicas desarrolladas durante el proyecto."
          />

          <div className="grid lg:grid-cols-2 gap-10">
            {recetas.map((receta) => (
              <RecipeCard key={receta.nombre} receta={receta} />
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANCIA GASTRONÓMICA */}
      <section className="py-24 px-6 bg-purple-950 text-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="Innovación"
            title="El saúco como ingrediente"
            description="La investigación demuestra el potencial del saúco como materia prima para desarrollar productos de pastelería con características sensoriales diferenciadas."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="border border-purple-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold">Color</h3>

              <p className="mt-4 text-purple-200 leading-7">
                Las tonalidades púrpuras del fruto permiten generar una
                presentación visual distintiva en las preparaciones.
              </p>
            </div>

            <div className="border border-purple-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold">Sabor</h3>

              <p className="mt-4 text-purple-200 leading-7">
                La concentración utilizada influye en la intensidad del sabor
                característico del saúco.
              </p>
            </div>

            <div className="border border-purple-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold">Aroma</h3>

              <p className="mt-4 text-purple-200 leading-7">
                La incorporación del fruto aporta características aromáticas
                que pueden modificar la percepción global del producto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOTA FINAL */}
      <section className="py-20 px-6 bg-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-950">
            Una aplicación gastronómica basada en evidencia
          </h2>

          <p className="mt-6 text-gray-700 leading-8 text-lg">
            Las recetas forman parte del componente práctico de SambucusLab.
            Su propósito no es únicamente presentar preparaciones, sino
            documentar cómo diferentes concentraciones de saúco pueden
            incorporarse a productos tradicionales de pastelería y ser
            posteriormente evaluadas mediante análisis sensorial y estadístico.
          </p>
        </div>
      </section>
    </main>
  );
}