import SectionTitle from "../components/SectionTitle";

export default function SobreSauco() {
  return (
    <main className="bg-[#faf8ff]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-700 text-white">

        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-purple-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-violet-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">

          <div className="max-w-4xl">

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.2em] font-semibold text-purple-200">
              Especie de estudio
            </span>

            <h1 className="mt-7 text-5xl md:text-6xl font-extrabold leading-tight">
              Sobre el
              <span className="text-purple-300"> saúco</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-purple-100 leading-8 max-w-3xl">
              Conoce las características del
              <span className="italic"> Sambucus nigra</span> y su
              potencial como ingrediente para la innovación gastronómica.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCCIÓN
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <SectionTitle
              align="left"
              subtitle="Sambucus nigra"
              title="Una fruta con potencial gastronómico"
              description="El saúco es un fruto que puede aportar características visuales y sensoriales diferenciadas a diversas preparaciones."
            />

            <div className="space-y-5 text-gray-600 leading-8">

              <p>
                El saúco pertenece al género
                <span className="italic font-semibold text-purple-800">
                  {" "}Sambucus
                </span>
                {" "}y presenta frutos pequeños agrupados en racimos.
                En su estado maduro puede presentar una coloración púrpura
                oscura característica.
              </p>

              <p>
                En el contexto gastronómico, sus propiedades de color,
                aroma y sabor permiten estudiar su incorporación en productos
                de pastelería y desarrollar preparaciones con características
                sensoriales diferenciadas.
              </p>

              <p>
                SambucusLab estudia precisamente este potencial mediante
                diferentes concentraciones aplicadas a productos tradicionales
                de pastelería.
              </p>

            </div>

          </div>


          <div className="relative group">

            <div className="absolute inset-0 bg-purple-300/20 blur-3xl rounded-full transition-all duration-500 group-hover:bg-purple-400/30" />

            <div className="
              relative
              overflow-hidden
              rounded-[2rem]
              shadow-2xl
              border
              border-purple-100
              transition-all
              duration-500
              group-hover:scale-[1.02]
              group-hover:shadow-purple-900/20
            ">

              <img
                src="https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=1000&q=85"
                alt="Frutos de saúco"
                className="
                  w-full
                  h-[420px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CLASIFICACIÓN
      ===================================================== */}

      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-violet-50">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Identificación"
            title="Características generales"
            description="Algunos elementos permiten reconocer y contextualizar la especie utilizada en la investigación."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                number: "01",
                title: "Género",
                text: "Sambucus",
              },
              {
                number: "02",
                title: "Especie",
                text: "Sambucus nigra",
              },
              {
                number: "03",
                title: "Fruto",
                text: "Baya pequeña de tonalidad oscura",
              },
              {
                number: "04",
                title: "Color",
                text: "Púrpura intenso en estado maduro",
              },
            ].map((item) => (

              <article
                key={item.number}
                className="
                  group
                  bg-white
                  rounded-3xl
                  p-7
                  border border-purple-100
                  soft-shadow
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:bg-violet-50
                  hover:border-purple-200
                  hover:shadow-xl
                  hover:shadow-purple-900/10
                  transition-all
                  duration-300
                "
              >

                <span className="
                  text-sm
                  font-bold
                  text-purple-500
                  transition-colors
                  duration-300
                  group-hover:text-purple-700
                ">
                  {item.number}
                </span>

                <h3 className="
                  mt-5
                  text-xl
                  font-bold
                  text-purple-950
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                ">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROPIEDADES
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Composición"
            title="Propiedades de interés"
            description="El interés gastronómico del saúco también se relaciona con la presencia de diferentes compuestos bioactivos."
          />

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Antocianinas",
                text: "Pigmentos responsables de tonalidades rojizas, violetas y púrpuras presentes en diferentes frutos.",
              },
              {
                title: "Polifenoles",
                text: "Grupo de compuestos fenólicos de interés estudiados por su presencia en diferentes especies vegetales.",
              },
              {
                title: "Flavonoides",
                text: "Compuestos presentes de manera natural en plantas y asociados con diferentes características bioactivas.",
              },
              {
                title: "Vitamina C",
                text: "Nutriente presente en el fruto que complementa el interés nutricional de esta especie.",
              },
            ].map((item, index) => (

              <article
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  p-8
                  bg-gradient-to-br
                  from-purple-50
                  to-violet-50
                  border
                  border-purple-100
                  hover:-translate-y-2
                  hover:scale-[1.01]
                  hover:from-violet-100
                  hover:to-purple-50
                  hover:border-purple-200
                  hover:shadow-xl
                  hover:shadow-purple-900/10
                  transition-all
                  duration-300
                "
              >

                <span className="
                  absolute
                  right-7
                  top-6
                  text-5xl
                  font-black
                  text-purple-100
                  transition-all
                  duration-300
                  group-hover:text-purple-200
                  group-hover:scale-110
                ">
                  0{index + 1}
                </span>

                <div className="relative">

                  <div className="
                    w-10
                    h-1
                    rounded-full
                    bg-gradient-to-r
                    from-purple-700
                    to-violet-400
                    mb-6
                    transition-all
                    duration-300
                    group-hover:w-16
                  " />

                  <h3 className="text-2xl font-bold text-purple-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7 max-w-xl">
                    {item.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GASTRONOMÍA
      ===================================================== */}

      <section className="py-24 px-6 bg-gradient-to-br from-purple-950 via-violet-900 to-purple-800 text-white">

        <div className="max-w-6xl mx-auto text-center">

          <span className="text-xs uppercase tracking-[0.25em] text-purple-300 font-bold">
            Aplicación gastronómica
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Del fruto a la pastelería
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-purple-100 leading-8 text-lg">
            La investigación busca estudiar cómo el saúco puede incorporarse
            a preparaciones tradicionales y cómo diferentes concentraciones
            modifican sus características sensoriales.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">

            {[
              [
                "01",
                "Preparación",
                "Obtención y preparación del fruto para su incorporación.",
              ],
              [
                "02",
                "Concentración",
                "Evaluación de diferentes niveles de sólidos solubles.",
              ],
              [
                "03",
                "Evaluación",
                "Análisis de atributos sensoriales y aceptación.",
              ],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="
                  group
                  glass-purple
                  rounded-3xl
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-white/15
                  hover:scale-[1.02]
                "
              >

                <span className="text-purple-300 text-sm font-bold">
                  {number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-purple-100 leading-7 text-sm">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONCLUSIÓN
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-xs uppercase tracking-[0.25em] text-purple-600 font-bold">
            Perspectiva
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-purple-950">
            Un ingrediente con posibilidades de innovación
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            El estudio del saúco permite relacionar la investigación
            gastronómica con el análisis sensorial y estadístico, generando
            una base experimental para explorar su utilización en productos
            de pastelería.
          </p>

        </div>

      </section>

    </main>
  );
}