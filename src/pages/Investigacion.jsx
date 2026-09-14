import SectionTitle from "../components/SectionTitle";

export default function Investigacion() {
  return (
    <main className="bg-[#faf8ff]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-700 text-white">

        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-purple-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">

          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.2em] text-purple-200 font-semibold">
            Metodología
          </span>

          <h1 className="mt-7 max-w-5xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Investigación sobre la aplicación del saúco en pastelería
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-purple-100 leading-8">
            Diseño experimental orientado a estudiar el comportamiento de
            diferentes concentraciones de saúco en productos tradicionales
            de pastelería.
          </p>

        </div>

      </section>


      {/* =====================================================
          CONTEXTO
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Contexto"
            title="Planteamiento de la investigación"
            description="El proyecto parte del interés por ampliar el uso gastronómico del saúco y evaluar experimentalmente su incorporación en productos de pastelería."
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <article
              className="
                group
                rounded-3xl
                bg-gradient-to-br
                from-purple-50
                to-white
                border border-purple-100
                p-9
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.015]
                hover:bg-violet-50
                hover:border-purple-200
                hover:shadow-xl
                hover:shadow-purple-900/10
              "
            >

              <span className="text-xs uppercase tracking-[0.2em] font-bold text-purple-600">
                Problema
              </span>

              <h3 className="
                mt-4
                text-2xl
                font-bold
                text-purple-950
                group-hover:text-purple-900
              ">
                Uso limitado del saúco
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                A pesar de sus características, el saúco presenta un uso
                limitado en determinados productos de la gastronomía
                colombiana. Esto plantea la posibilidad de estudiar nuevas
                aplicaciones mediante procedimientos controlados.
              </p>

            </article>


            <article
              className="
                group
                rounded-3xl
                bg-gradient-to-br
                from-violet-50
                to-purple-50
                border border-violet-100
                p-9
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.015]
                hover:bg-violet-100/70
                hover:border-violet-200
                hover:shadow-xl
                hover:shadow-violet-900/10
              "
            >

              <span className="text-xs uppercase tracking-[0.2em] font-bold text-violet-600">
                Pregunta de interés
              </span>

              <h3 className="
                mt-4
                text-2xl
                font-bold
                text-purple-950
                group-hover:text-purple-900
              ">
                ¿Cómo influye la concentración?
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                El estudio busca analizar cómo diferentes niveles de
                concentración pueden modificar las características sensoriales
                y la aceptación de productos elaborados con saúco.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          OBJETIVOS
      ===================================================== */}

      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-violet-50">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Propósito"
            title="Objetivos del proyecto"
            description="La investigación integra preparación gastronómica, evaluación sensorial y análisis estadístico."
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <article
              className="
                group
                bg-gradient-to-br
                from-purple-950
                to-violet-800
                text-white
                rounded-[2rem]
                p-10
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.015]
                hover:shadow-2xl
                hover:shadow-purple-900/20
              "
            >

              <span className="text-purple-300 text-sm uppercase tracking-[0.2em] font-bold">
                Objetivo general
              </span>

              <h3 className="mt-5 text-3xl font-bold">
                Analizar el efecto de diferentes concentraciones de saúco
              </h3>

              <p className="mt-6 text-purple-100 leading-8">
                Estudiar la aplicación de diferentes niveles de concentración
                de saúco en productos tradicionales de pastelería, considerando
                sus características sensoriales y su aceptación.
              </p>

            </article>


            <article
              className="
                group
                bg-white
                rounded-[2rem]
                border border-purple-100
                p-10
                soft-shadow
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.015]
                hover:bg-violet-50/60
                hover:border-purple-200
                hover:shadow-xl
                hover:shadow-purple-900/10
              "
            >

              <span className="text-purple-600 text-sm uppercase tracking-[0.2em] font-bold">
                Enfoques específicos
              </span>

              <div className="mt-6 space-y-6">

                {[
                  "Preparar diferentes concentraciones de saúco.",
                  "Aplicarlas en productos tradicionales de pastelería.",
                  "Evaluar características sensoriales mediante una escala de 0 a 100.",
                  "Analizar la información obtenida mediante herramientas estadísticas.",
                ].map((text, index) => (

                  <div
                    key={text}
                    className="flex gap-4 group/item"
                  >

                    <span className="
                      flex-shrink-0
                      w-8
                      h-8
                      rounded-full
                      bg-purple-100
                      text-purple-700
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-bold
                      transition-all
                      duration-300
                      group-hover/item:bg-purple-200
                      group-hover/item:scale-110
                    ">
                      {index + 1}
                    </span>

                    <p className="text-gray-600 leading-7">
                      {text}
                    </p>

                  </div>

                ))}

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          METODOLOGÍA
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Procedimiento"
            title="Metodología experimental"
            description="El proceso combina preparación del ingrediente, desarrollo de productos y evaluación sensorial."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                number: "01",
                title: "Obtención",
                text: "Selección de frutos maduros de saúco para el desarrollo experimental.",
              },
              {
                number: "02",
                title: "Preparación",
                text: "Lavado, transporte y conservación del fruto antes de su procesamiento.",
              },
              {
                number: "03",
                title: "Formulación",
                text: "Preparación de concentraciones de 4°, 7° y 10° Brix.",
              },
              {
                number: "04",
                title: "Evaluación",
                text: "Valoración sensorial de los productos mediante Google Forms.",
              },
            ].map((item) => (

              <article
                key={item.number}
                className="
                  group
                  rounded-3xl
                  border border-purple-100
                  bg-purple-50/60
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:bg-violet-100/70
                  hover:border-purple-200
                  hover:shadow-xl
                  hover:shadow-purple-900/10
                "
              >

                <span className="
                  text-4xl
                  font-extrabold
                  text-purple-200
                  transition-colors
                  duration-300
                  group-hover:text-purple-300
                ">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-purple-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONCENTRACIONES
      ===================================================== */}

      <section className="py-24 px-6 bg-gradient-to-br from-purple-950 via-violet-900 to-purple-800 text-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <span className="text-xs uppercase tracking-[0.25em] text-purple-300 font-bold">
              Diseño experimental
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
              Niveles de concentración
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                brix: "4°",
                fruit: "150 g",
                water: "300 ml",
                label: "Concentración baja",
              },
              {
                brix: "7°",
                fruit: "150 g",
                water: "150 ml",
                label: "Concentración media",
              },
              {
                brix: "10°",
                fruit: "250 g",
                water: "150 ml",
                label: "Concentración alta",
              },
            ].map((item) => (

              <article
                key={item.brix}
                className="
                  group
                  rounded-3xl
                  bg-white/10
                  border border-white/10
                  backdrop-blur-sm
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:bg-white/15
                  hover:border-white/20
                "
              >

                <p className="text-purple-300 text-sm uppercase tracking-[0.2em] font-bold">
                  {item.label}
                </p>

                <p className="
                  mt-5
                  text-5xl
                  font-extrabold
                  transition-transform
                  duration-300
                  group-hover:scale-105
                  origin-left
                ">
                  {item.brix}
                </p>

                <p className="text-purple-200 mt-1">
                  grados Brix
                </p>

                <div className="mt-7 pt-6 border-t border-white/10 space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span className="text-purple-200">Fruto</span>
                    <span className="font-semibold">
                      {item.fruit}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-purple-200">Agua</span>
                    <span className="font-semibold">
                      {item.water}
                    </span>
                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTOS Y VARIABLES
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Evaluación"
            title="Productos y variables analizadas"
            description="Las preparaciones se evaluaron considerando diferentes atributos sensoriales."
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <article
              className="
                group
                rounded-[2rem]
                bg-gradient-to-br
                from-purple-50
                to-violet-50
                border border-purple-100
                p-9
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.015]
                hover:shadow-xl
                hover:shadow-purple-900/10
              "
            >

              <h3 className="text-3xl font-bold text-purple-950">
                Productos
              </h3>

              <div className="mt-7 space-y-4">

                {["Pavlova", "Mousse"].map((product) => (

                  <div
                    key={product}
                    className="
                      group/item
                      flex
                      items-center
                      gap-4
                      bg-white
                      rounded-2xl
                      p-5
                      border border-purple-100
                      transition-all
                      duration-300
                      hover:bg-violet-50
                      hover:border-purple-200
                      hover:translate-x-1
                    "
                  >

                    <div className="
                      w-10
                      h-10
                      rounded-xl
                      bg-purple-900
                      text-white
                      flex
                      items-center
                      justify-center
                      font-bold
                      transition-transform
                      duration-300
                      group-hover/item:scale-110
                    ">
                      ✓
                    </div>

                    <span className="font-semibold text-purple-950">
                      {product}
                    </span>

                  </div>

                ))}

              </div>

            </article>


            <article
              className="
                group
                rounded-[2rem]
                bg-white
                border border-purple-100
                p-9
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.015]
                hover:bg-violet-50/50
                hover:border-purple-200
                hover:shadow-xl
                hover:shadow-purple-900/10
              "
            >

              <h3 className="text-3xl font-bold text-purple-950">
                Atributos sensoriales
              </h3>

              <div className="mt-7 flex flex-wrap gap-3">

                {[
                  "Sabor",
                  "Aroma",
                  "Apariencia",
                  "Textura",
                  "Color",
                  "Aceptación general",
                ].map((attribute) => (

                  <span
                    key={attribute}
                    className="
                      px-4
                      py-2.5
                      rounded-full
                      bg-purple-50
                      border border-purple-100
                      text-purple-800
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      hover:bg-violet-100
                      hover:border-purple-200
                      hover:-translate-y-1
                      hover:shadow-sm
                    "
                  >
                    {attribute}
                  </span>

                ))}

              </div>

              <p className="mt-7 text-gray-600 leading-7">
                La valoración se realizó utilizando una escala de 0 a 100,
                donde los valores permitieron expresar la percepción de los
                participantes frente a las características evaluadas.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          MÉTODOS ESTADÍSTICOS
      ===================================================== */}

      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-violet-50">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Análisis de datos"
            title="Herramientas estadísticas"
            description="La investigación contempla diferentes técnicas para estudiar los resultados obtenidos."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              ["ANOVA", "Comparación de medias entre grupos."],
              ["Tukey", "Análisis posterior para identificar diferencias entre grupos."],
              ["Chi-cuadrado", "Análisis de asociación entre variables categóricas."],
              ["Modelo multinomial", "Análisis de respuestas categóricas con múltiples alternativas."],
              ["PCA", "Análisis de componentes principales para explorar relaciones multivariantes."],
              ["Clustering / MCA", "Exploración de agrupaciones y relaciones entre variables categóricas."],
            ].map(([title, text]) => (

              <article
                key={title}
                className="
                  group
                  bg-white
                  rounded-3xl
                  border border-purple-100
                  p-7
                  soft-shadow
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:bg-violet-50
                  hover:border-purple-200
                  hover:shadow-xl
                  hover:shadow-purple-900/10
                "
              >

                <h3 className="
                  text-xl
                  font-bold
                  text-purple-900
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                ">
                  {title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  {text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CIERRE
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-xs uppercase tracking-[0.25em] text-purple-600 font-bold">
            Síntesis metodológica
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-purple-950">
            Gastronomía + datos + investigación
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            El proyecto integra procedimientos gastronómicos con evaluación
            sensorial y herramientas estadísticas para estudiar el potencial
            del saúco en productos tradicionales de pastelería.
          </p>

        </div>

      </section>

    </main>
  );
}