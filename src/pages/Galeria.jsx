import SectionTitle from "../components/SectionTitle";

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

export default function Galeria() {
  return (
    <main className="bg-[#faf8ff]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-700 text-white">

        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">

          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.2em] text-purple-200 font-semibold">
            Registro visual
          </span>

          <h1 className="mt-7 text-5xl md:text-6xl font-extrabold">
            Galería
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-purple-100 leading-8">
            Una recopilación visual del ingrediente, las preparaciones y
            el contexto gastronómico del proyecto.
          </p>

        </div>

      </section>


      {/* GALERÍA */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="SambucusLab"
            title="Exploración visual"
            description="Estas imágenes sirven como referencia visual mientras se incorporan posteriormente los recursos gráficos propios del proyecto."
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
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:shadow-purple-900/20
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
                    group-hover:scale-110
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-purple-950
                  via-purple-950/20
                  to-transparent
                  transition-opacity
                  duration-300
                  group-hover:via-purple-950/30
                " />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

                  <span className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-purple-300
                    font-bold
                  ">
                    {imagen.categoria}
                  </span>

                  <h3 className="
                    mt-2
                    text-2xl
                    font-bold
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  ">
                    {imagen.titulo}
                  </h3>

                  <div className="
                    mt-3
                    w-8
                    h-1
                    rounded-full
                    bg-purple-300
                    transition-all
                    duration-300
                    group-hover:w-14
                  " />

                </div>

                <span className="
                  absolute
                  top-5
                  right-5
                  w-9
                  h-9
                  rounded-full
                  bg-white/10
                  border
                  border-white/15
                  flex
                  items-center
                  justify-center
                  text-sm
                  text-white
                  transition-all
                  duration-300
                  group-hover:bg-white/20
                  group-hover:scale-110
                ">
                  0{index + 1}
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* PROCESO */}

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
                  group
                  rounded-3xl
                  bg-white
                  border border-purple-100
                  p-8
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


      {/* FUTUROS ASSETS */}

      <section className="py-24 px-6 bg-purple-950 text-white">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-xs uppercase tracking-[0.25em] text-purple-300 font-bold">
            Próxima etapa
          </span>

          <h2 className="mt-5 text-4xl font-extrabold">
            Recursos visuales propios
          </h2>

          <p className="mt-6 text-purple-100 leading-8 text-lg">
            Posteriormente, esta galería puede incorporar fotografías propias
            del fruto, preparación de las concentraciones, elaboración de
            pavlova y mousse, y presentación final de los productos.
          </p>

        </div>

      </section>

    </main>
  );
}