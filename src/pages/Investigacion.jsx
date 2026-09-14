import SectionTitle from "../components/SectionTitle";

export default function Investigacion() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-purple-300 text-sm font-semibold">
            Proyecto de Investigación
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Investigación
          </h1>

          <p className="mt-6 text-lg text-purple-200 max-w-3xl leading-8">
            Análisis estadístico multivariante con diferentes niveles de
            concentración de saúco (Sambucus nigra) aplicado en productos
            tradicionales de pastelería.
          </p>

        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Contexto"
            title="¿En qué consiste esta investigación?"
            description="SambucusLab desarrolla una investigación experimental para evaluar el comportamiento del saúco en preparaciones tradicionales de pastelería mediante diferentes concentraciones de sólidos solubles (°Brix)."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6 text-lg leading-8">
              <p>
                El estudio analiza cómo diferentes concentraciones de zumo de
                saúco modifican atributos sensoriales como el color, aroma,
                sabor, textura y aceptación general en productos de pastelería.
              </p>

              <p>
                Para ello se elaboraron diferentes formulaciones utilizando el
                fruto <strong>Sambucus nigra</strong>, evaluando posteriormente
                la percepción de los consumidores mediante un panel sensorial.
              </p>

              <p>
                Los resultados fueron analizados utilizando herramientas de
                estadística descriptiva y análisis multivariante para identificar
                diferencias significativas entre las concentraciones evaluadas.
              </p>
            </div>

            <div className="bg-purple-50 rounded-3xl p-10 border border-purple-100 shadow">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">
                Datos generales del proyecto
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li><strong>Fruto estudiado:</strong> Sambucus nigra.</li>
                <li><strong>Área:</strong> Gastronomía experimental.</li>
                <li><strong>Enfoque:</strong> Investigación cuantitativa experimental.</li>
                <li><strong>Productos:</strong> Pavlova y mousse.</li>
                <li><strong>Variable principal:</strong> Concentración de sólidos solubles (°Brix).</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-20 bg-purple-50 px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Planteamiento"
            title="Problema de investigación"
          />

          <div className="bg-white rounded-3xl p-10 shadow border border-purple-100">
            <p className="text-lg leading-8 text-gray-700">
              Aunque el saúco posee un alto potencial gastronómico gracias a sus
              pigmentos naturales y compuestos bioactivos, existe poca evidencia
              experimental sobre cómo diferentes niveles de concentración afectan
              las características sensoriales de productos tradicionales de
              pastelería.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Esta investigación busca determinar si la variación en la
              concentración del saúco produce diferencias significativas en la
              aceptación de preparaciones como la pavlova y el mousse.
            </p>
          </div>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Objetivos"
            title="Objetivo general y objetivos específicos"
          />

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-purple-900 text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-5">
                Objetivo general
              </h3>

              <p className="leading-8 text-purple-100">
                Analizar el efecto de diferentes niveles de concentración de
                saúco (Sambucus nigra) sobre las características sensoriales de
                productos tradicionales de pastelería mediante herramientas de
                análisis estadístico multivariante.
              </p>
            </div>

            <div className="bg-purple-50 rounded-3xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-purple-900 mb-5">
                Objetivos específicos
              </h3>

              <ul className="space-y-4 text-gray-700 leading-7 list-disc list-inside">
                <li>Preparar diferentes concentraciones de zumo de saúco.</li>
                <li>Aplicar las concentraciones en pavlova y mousse.</li>
                <li>Evaluar atributos sensoriales mediante un panel de consumidores.</li>
                <li>Comparar estadísticamente los resultados obtenidos.</li>
                <li>Identificar la concentración con mejor aceptación.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="py-20 bg-purple-950 text-white px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Metodología"
            title="Diseño experimental"
            description="El estudio se desarrolló mediante un proceso experimental dividido en varias etapas de preparación y evaluación."
          />

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            {[
              {
                step: "01",
                title: "Preparación del fruto",
                text: "Selección y procesamiento del saúco para obtener el zumo.",
              },
              {
                step: "02",
                title: "Medición °Brix",
                text: "Determinación de sólidos solubles mediante refractómetro.",
              },
              {
                step: "03",
                title: "Elaboración de productos",
                text: "Preparación de pavlova y mousse con cada concentración.",
              },
              {
                step: "04",
                title: "Evaluación sensorial",
                text: "Análisis de percepción de los consumidores mediante atributos sensoriales.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-purple-900 rounded-3xl p-6 border border-purple-700"
              >
                <span className="text-purple-300 text-4xl font-black">
                  {item.step}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-purple-200 text-sm leading-7">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONCENTRACIONES */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Variable independiente"
            title="Concentraciones evaluadas (°Brix)"
            description="Las formulaciones se prepararon utilizando diferentes relaciones entre fruto y agua para obtener tres niveles de concentración."
          />

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                brix: "4° Brix",
                title: "Concentración baja",
                relation: "150 g de fruto + 300 ml de agua",
                color: "bg-purple-50",
              },
              {
                brix: "7° Brix",
                title: "Concentración media",
                relation: "150 g de fruto + 150 ml de agua",
                color: "bg-purple-100",
              },
              {
                brix: "10° Brix",
                title: "Concentración alta",
                relation: "250 g de fruto + 150 ml de agua",
                color: "bg-purple-200",
              },
            ].map((item) => (
              <div
                key={item.brix}
                className={`${item.color} rounded-3xl p-8 border border-purple-100 shadow-md`}
              >
                <h3 className="text-5xl font-bold text-purple-800">
                  {item.brix}
                </h3>

                <p className="mt-5 text-xl font-semibold text-purple-900">
                  {item.title}
                </p>

                <p className="mt-6 leading-7 text-gray-700">
                  {item.relation}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-20 bg-purple-50 px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Productos de estudio"
            title="Aplicación del saúco en preparaciones de pastelería"
            description="Cada concentración fue incorporada en dos productos tradicionales para comparar su comportamiento sensorial."
          />

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl shadow-lg p-8 border border-purple-100">
              <h3 className="text-3xl font-bold text-purple-900">
                Pavlova
              </h3>

              <p className="mt-6 leading-8 text-gray-700">
                Se elaboró una pavlova utilizando las diferentes concentraciones
                de saúco para evaluar cambios en color, dulzor, aroma y textura
                del merengue horneado.
              </p>

              <ul className="mt-6 space-y-3 text-gray-600 list-disc list-inside">
                <li>Color superficial.</li>
                <li>Textura del merengue.</li>
                <li>Sabor característico del saúco.</li>
                <li>Aceptación general.</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 border border-purple-100">
              <h3 className="text-3xl font-bold text-purple-900">
                Mousse
              </h3>

              <p className="mt-6 leading-8 text-gray-700">
                El mousse permitió analizar el comportamiento del saúco en una
                preparación fría, comparando la intensidad de sabor y la
                percepción sensorial entre las formulaciones.
              </p>

              <ul className="mt-6 space-y-3 text-gray-600 list-disc list-inside">
                <li>Color del producto.</li>
                <li>Aroma frutal.</li>
                <li>Dulzor percibido.</li>
                <li>Textura cremosa.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* VARIABLES */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Variables"
            title="Diseño de la investigación"
          />

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Variable independiente",
                text: "Concentración del zumo de saúco medida en grados Brix.",
              },
              {
                title: "Variables dependientes",
                text: "Color, aroma, sabor, textura y aceptación general de los productos.",
              },
              {
                title: "Instrumento de medición",
                text: "Escala hedónica aplicada durante la evaluación sensorial de consumidores.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-purple-50 rounded-3xl p-8 border border-purple-100"
              >
                <h3 className="text-xl font-bold text-purple-900">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-700 leading-7">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* EVALUACIÓN SENSORIAL */}
      <section className="py-20 bg-purple-50 px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Evaluación"
            title="Atributos sensoriales analizados"
            description="Cada participante evaluó diferentes características de los productos preparados con saúco."
          />

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Color",
              "Aroma",
              "Sabor",
              "Textura",
              "Dulzor",
              "Aceptación general",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-8 text-center shadow border border-purple-100"
              >
                <div className="w-16 h-16 rounded-full bg-purple-700 text-white flex items-center justify-center mx-auto text-2xl font-bold">
                  {item.charAt(0)}
                </div>

                <h3 className="mt-6 text-xl font-bold text-purple-900">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ANÁLISIS ESTADÍSTICO */}
      <section className="py-20 bg-purple-950 text-white px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Análisis estadístico"
            title="Herramientas utilizadas en la investigación"
            description="Los datos obtenidos fueron procesados utilizando diferentes métodos estadísticos para identificar patrones y diferencias significativas."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            {[
              {
                title: "Estadística descriptiva",
                text: "Resumen de medias, frecuencias y comportamiento general de los datos obtenidos.",
              },
              {
                title: "ANOVA",
                text: "Comparación entre las concentraciones para identificar diferencias estadísticamente significativas.",
              },
              {
                title: "Prueba de Tukey",
                text: "Comparación múltiple entre tratamientos después del ANOVA.",
              },
              {
                title: "Chi-cuadrado",
                text: "Análisis de asociación entre variables categóricas del estudio sensorial.",
              },
              {
                title: "PCA",
                text: "Análisis de Componentes Principales para reducir dimensionalidad y visualizar patrones.",
              },
              {
                title: "Clustering y MCA",
                text: "Agrupamiento de observaciones y análisis de correspondencias múltiples para interpretar relaciones entre variables.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-purple-900 rounded-3xl p-8 border border-purple-700"
              >
                <h3 className="text-xl font-bold text-purple-100">
                  {card.title}
                </h3>

                <p className="mt-5 text-purple-300 leading-8 text-sm">
                  {card.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">

          <SectionTitle
            subtitle="Conclusión metodológica"
            title="Una investigación basada en evidencia experimental"
            description="SambucusLab integra gastronomía, evaluación sensorial y análisis estadístico para estudiar el potencial del saúco como ingrediente innovador en productos de pastelería."
          />

          <div className="bg-purple-50 rounded-3xl p-10 border border-purple-100 mt-10">
            <p className="text-lg leading-8 text-gray-700">
              El diseño experimental permite comparar objetivamente diferentes
              niveles de concentración de saúco y determinar cuáles generan una
              mejor percepción sensorial en los consumidores, proporcionando una
              base científica para futuras aplicaciones gastronómicas.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}