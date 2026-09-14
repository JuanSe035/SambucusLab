import SectionTitle from "../components/SectionTitle";

const recetas = [
  {
    nombre: "Pavlova con saúco",
    tipo: "Postre · Merengue",
    descripcion:
      "Preparación basada en merengue horneado, utilizada para estudiar la incorporación de diferentes concentraciones de saúco.",
    ingredientes: [
      "Claras de huevo",
      "Azúcar",
      "Almidón de maíz",
      "Vinagre o ácido",
      "Crema para batir",
      "Preparación de saúco",
      "Frutas para decoración",
    ],
    concentraciones: ["4° Brix", "7° Brix", "10° Brix"],
  },
  {
    nombre: "Mousse de saúco",
    tipo: "Postre · Mousse",
    descripcion:
      "Preparación de textura aireada desarrollada para evaluar el comportamiento sensorial del saúco en diferentes concentraciones.",
    ingredientes: [
      "Crema para batir",
      "Base láctea",
      "Azúcar",
      "Gelatina",
      "Preparación de saúco",
      "Elementos de decoración",
    ],
    concentraciones: ["4° Brix", "7° Brix", "10° Brix"],
  },
  {
    nombre: "Almíbar de saúco",
    tipo: "Preparación base",
    descripcion:
      "Preparación desarrollada durante una etapa del proceso experimental para trabajar la incorporación del saúco en una preparación líquida concentrada.",
    ingredientes: [
      "Saúco",
      "Agua",
      "Azúcar",
    ],
    concentraciones: ["4° Brix", "7° Brix", "10° Brix"],
  },
];


const imagenes = [
  {
    titulo: "Fruto de saúco",
    categoria: "Materia prima",
    url: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=1000&q=85",
  },
  {
    titulo: "Preparación gastronómica",
    categoria: "Proceso",
    url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85",
  },
  {
    titulo: "Pastelería",
    categoria: "Aplicación",
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
  },
  {
    titulo: "Presentación",
    categoria: "Producto",
    url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85",
  },
];


export default function Recetas() {
  return (
    <main className="bg-[#faf8ff]">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-700 text-white">

        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-purple-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-violet-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">

          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.2em] text-purple-200 font-semibold">
            Gastronomía y registro visual
          </span>

          <h1 className="mt-7 text-5xl md:text-6xl font-extrabold">
            Recetas
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-purple-100 leading-8">
            Preparaciones, concentraciones y registro visual del proceso
            gastronómico desarrollado en SambucusLab.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRODUCCIÓN
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-5xl mx-auto">

          <SectionTitle
            subtitle="Aplicación gastronómica"
            title="Del ingrediente al producto"
            description="Las recetas forman parte de la aplicación práctica de la investigación y permiten estudiar el comportamiento del saúco en diferentes preparaciones de pastelería."
          />

        </div>

      </section>


      {/* =====================================================
          RECETAS
      ===================================================== */}

      <section className="pb-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto space-y-10">

          {recetas.map((receta, index) => (

            <article
              key={receta.nombre}
              className="
                group
                overflow-hidden
                rounded-[2rem]
                border border-purple-100
                bg-gradient-to-br from-purple-50 via-white to-violet-50
                shadow-sm
                hover:-translate-y-1
                hover:shadow-xl
                transition-all duration-300
              "
            >

              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">


                {/* PANEL IZQUIERDO */}

                <div
                  className="
                    relative
                    overflow-hidden
                    bg-gradient-to-br
                    from-purple-950
                    via-violet-900
                    to-purple-800
                    text-white
                    p-9
                    md:p-11
                  "
                >

                  <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-purple-400/10 blur-3xl" />

                  <div className="relative">

                    <span className="text-xs uppercase tracking-[0.2em] text-purple-300 font-bold">
                      0{index + 1}
                    </span>

                    <p className="mt-8 text-sm text-purple-300 uppercase tracking-[0.15em] font-semibold">
                      {receta.tipo}
                    </p>

                    <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
                      {receta.nombre}
                    </h2>

                    <p className="mt-6 text-purple-100 leading-8">
                      {receta.descripcion}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">

                      {receta.concentraciones.map((concentracion) => (

                        <span
                          key={concentracion}
                          className="
                            px-3
                            py-1.5
                            rounded-full
                            bg-white/10
                            border border-white/10
                            text-xs
                            text-purple-100
                            hover:bg-white/20
                            transition
                          "
                        >
                          {concentracion}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>


                {/* PANEL DERECHO */}

                <div className="p-9 md:p-11">

                  <p className="text-xs uppercase tracking-[0.2em] text-purple-600 font-bold">
                    Componentes principales
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-purple-950">
                    Ingredientes
                  </h3>

                  <div className="mt-7 grid sm:grid-cols-2 gap-3">

                    {receta.ingredientes.map((ingrediente) => (

                      <div
                        key={ingrediente}
                        className="
                          group/item
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          bg-white
                          border border-purple-100
                          px-4
                          py-3
                          hover:bg-purple-50
                          hover:border-purple-200
                          hover:-translate-y-0.5
                          transition-all duration-200
                        "
                      >

                        <span
                          className="
                            w-2
                            h-2
                            rounded-full
                            bg-purple-600
                            flex-shrink-0
                            group-hover/item:scale-125
                            transition-transform
                          "
                        />

                        <span className="text-sm text-gray-700">
                          {ingrediente}
                        </span>

                      </div>

                    ))}

                  </div>


                  {/* NOTA */}

                  <div
                    className="
                      mt-8
                      p-5
                      rounded-2xl
                      bg-purple-50
                      border border-purple-100
                      hover:bg-violet-50
                      transition-colors duration-300
                    "
                  >

                    <p className="text-sm font-bold text-purple-900">
                      Nota experimental
                    </p>

                    <p className="mt-2 text-sm text-gray-600 leading-6">
                      Las concentraciones indicadas corresponden a los niveles
                      estudiados dentro del proyecto. Las cantidades finales
                      de formulación deben mantenerse de acuerdo con el
                      protocolo experimental utilizado.
                    </p>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          CONCENTRACIONES
      ===================================================== */}

      <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-purple-950 via-violet-900 to-purple-800 text-white">

        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-purple-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-violet-400/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto">


          <div className="max-w-3xl mx-auto text-center mb-14">

            <div className="inline-flex items-center justify-center gap-3 mb-4">

              <span className="w-8 h-[2px] bg-purple-300 rounded-full" />

              <p className="uppercase tracking-[0.22em] text-purple-300 text-xs font-bold">
                Base experimental
              </p>

              <span className="w-8 h-[2px] bg-purple-300 rounded-full" />

            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Concentraciones utilizadas
            </h2>

            <p className="mt-5 text-purple-100 text-base md:text-lg leading-8">
              Los niveles de concentración se expresan en grados Brix y fueron
              utilizados como parte del diseño experimental.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            {[
              ["4°", "150 g de fruto + 300 ml de agua"],
              ["7°", "150 g de fruto + 150 ml de agua"],
              ["10°", "250 g de fruto + 150 ml de agua"],
            ].map(([brix, formula], index) => (

              <article
                key={brix}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-white/10
                  border border-white/10
                  p-8
                  backdrop-blur-sm
                  hover:bg-white/15
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all duration-300
                "
              >

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-1
                    bg-gradient-to-r
                    from-purple-300
                    to-violet-300
                    opacity-70
                  "
                />

                <span className="text-xs uppercase tracking-[0.2em] text-purple-300 font-bold">
                  Nivel 0{index + 1}
                </span>

                <p className="mt-5 text-5xl font-extrabold">
                  {brix}
                </p>

                <p className="text-purple-300 font-semibold mt-1">
                  Brix
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">

                  <p className="text-xs uppercase tracking-[0.15em] text-purple-300 font-bold">
                    Relación utilizada
                  </p>

                  <p className="mt-3 text-purple-100 leading-7">
                    {formula}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GALERÍA INTEGRADA
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Registro visual"
            title="Galería del proyecto"
            description="Una recopilación visual del ingrediente, las preparaciones y el contexto gastronómico de SambucusLab."
          />


          <div className="grid md:grid-cols-2 gap-7">

            {imagenes.map((imagen, index) => (

              <article
                key={imagen.titulo}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  bg-purple-950
                  shadow-lg
                  hover:-translate-y-1
                  hover:shadow-2xl
                  transition-all duration-500
                "
              >

                <img
                  src={imagen.url}
                  alt={imagen.titulo}
                  className="
                    w-full
                    h-[360px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

                  <span className="text-xs uppercase tracking-[0.2em] text-purple-300 font-bold">
                    {imagen.categoria}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
                    {imagen.titulo}
                  </h3>

                </div>

                <span className="
                  absolute
                  top-5
                  right-5
                  w-9
                  h-9
                  rounded-full
                  bg-white/10
                  border border-white/15
                  flex
                  items-center
                  justify-center
                  text-sm
                  text-white
                ">
                  0{index + 1}
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESO VISUAL
      ===================================================== */}

      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-violet-50">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Proceso"
            title="Del ingrediente al producto"
            description="La investigación conecta diferentes etapas del trabajo gastronómico."
          />


          <div className="grid md:grid-cols-3 gap-7">

            {[
              {
                number: "01",
                title: "Materia prima",
                text: "Selección y preparación del fruto de saúco para el desarrollo experimental.",
              },
              {
                number: "02",
                title: "Transformación",
                text: "Incorporación del ingrediente en preparaciones y diferentes niveles de concentración.",
              },
              {
                number: "03",
                title: "Evaluación",
                text: "Observación y valoración de las características sensoriales de los productos.",
              },
            ].map((item) => (

              <article
                key={item.number}
                className="
                  rounded-3xl
                  bg-white
                  border border-purple-100
                  p-8
                  soft-shadow
                  hover:bg-purple-50
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all duration-300
                "
              >

                <span className="text-4xl font-extrabold text-purple-200">
                  {item.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-purple-950">
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
          CIERRE
      ===================================================== */}

      <section className="py-24 px-6 bg-purple-950 text-white">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-xs uppercase tracking-[0.25em] text-purple-300 font-bold">
            SambucusLab
          </span>

          <h2 className="mt-5 text-4xl font-extrabold">
            De la investigación a la preparación
          </h2>

          <p className="mt-6 text-purple-100 leading-8 text-lg">
            Las recetas y el registro visual permiten trasladar el análisis
            experimental al contexto gastronómico y observar de forma práctica
            el comportamiento del saúco en productos de pastelería.
          </p>

        </div>

      </section>

    </main>
  );
}