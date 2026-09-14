import SectionTitle from "../components/SectionTitle";

export default function Contacto() {
  return (
    <main className="bg-[#faf8ff]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-700 text-white">

        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">

          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.2em] text-purple-200 font-semibold">
            Proyecto académico
          </span>

          <h1 className="mt-7 text-5xl md:text-6xl font-extrabold">
            Contacto
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-purple-100 leading-8">
            Información de referencia para conocer el proyecto y establecer
            contacto con el equipo académico.
          </p>

        </div>

      </section>


      {/* =====================================================
          INFORMACIÓN
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="SambucusLab"
            title="Información del proyecto"
            description="Este sitio presenta los elementos principales de una investigación interdisciplinaria entre gastronomía, análisis sensorial y estadística."
          />

          <div className="grid lg:grid-cols-3 gap-7">

            <article
              className="
                group
                rounded-3xl
                bg-gradient-to-br
                from-purple-950
                to-violet-800
                text-white
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:shadow-2xl
                hover:shadow-purple-900/20
              "
            >

              <span className="text-xs uppercase tracking-[0.2em] text-purple-300 font-bold">
                Proyecto
              </span>

              <h3 className="
                mt-5
                text-2xl
                font-bold
                transition-transform
                duration-300
                group-hover:translate-x-1
              ">
                SambucusLab
              </h3>

              <p className="mt-4 text-purple-100 leading-7">
                Plataforma web desarrollada para presentar el proceso de
                investigación sobre la aplicación del saúco en productos
                tradicionales de pastelería.
              </p>

            </article>


            <article
              className="
                group
                rounded-3xl
                bg-purple-50
                border border-purple-100
                p-8
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

              <span className="text-xs uppercase tracking-[0.2em] text-purple-600 font-bold">
                Área académica
              </span>

              <h3 className="mt-5 text-2xl font-bold text-purple-950">
                Ingeniería de Sistemas
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Desarrollo de una plataforma web para comunicar información
                científica, gastronómica y experimental.
              </p>

            </article>


            <article
              className="
                group
                rounded-3xl
                bg-violet-50
                border border-violet-100
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:bg-purple-50
                hover:border-purple-200
                hover:shadow-xl
                hover:shadow-purple-900/10
              "
            >

              <span className="text-xs uppercase tracking-[0.2em] text-violet-600 font-bold">
                Enfoque
              </span>

              <h3 className="mt-5 text-2xl font-bold text-purple-950">
                Investigación interdisciplinaria
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Integración de gastronomía, evaluación sensorial, análisis
                estadístico y desarrollo tecnológico.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          FORMULARIO
      ===================================================== */}

      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-violet-50">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">

          <div>

            <SectionTitle
              align="left"
              subtitle="Comunicación"
              title="¿Tienes alguna pregunta?"
              description="Puedes utilizar este formulario como elemento visual de contacto dentro de la plataforma."
            />

            <div className="space-y-4">

              {[
                [
                  "01",
                  "Investigación",
                  "Información sobre el proyecto y su metodología.",
                ],
                [
                  "02",
                  "Resultados",
                  "Consulta sobre las variables y evaluaciones realizadas.",
                ],
                [
                  "03",
                  "Gastronomía",
                  "Información sobre las preparaciones desarrolladas.",
                ],
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="
                    group
                    flex
                    gap-4
                    bg-white
                    rounded-2xl
                    border border-purple-100
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-violet-50
                    hover:border-purple-200
                    hover:shadow-lg
                    hover:shadow-purple-900/10
                  "
                >

                  <span className="
                    text-purple-300
                    font-extrabold
                    transition-all
                    duration-300
                    group-hover:text-purple-500
                    group-hover:scale-110
                  ">
                    {number}
                  </span>

                  <div>

                    <h3 className="font-bold text-purple-950">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-600 leading-6">
                      {text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* FORMULARIO */}

          <div className="
            bg-white
            rounded-[2rem]
            border border-purple-100
            p-8
            md:p-10
            shadow-xl
            transition-all
            duration-300
            hover:shadow-2xl
            hover:shadow-purple-900/10
          ">

            <h3 className="text-2xl font-bold text-purple-950">
              Formulario de contacto
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Completa los siguientes campos.
            </p>

            <form className="mt-8 space-y-6">

              {/* NOMBRE */}

              <div>

                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-purple-950 mb-2"
                >
                  Nombre
                </label>

                <input
                  id="nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    border border-purple-100
                    bg-purple-50/40
                    outline-none
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-100
                    focus:bg-white
                    transition-all
                  "
                />

              </div>


              {/* CORREO */}

              <div>

                <label
                  htmlFor="correo"
                  className="block text-sm font-semibold text-purple-950 mb-2"
                >
                  Correo electrónico
                </label>

                <input
                  id="correo"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    border border-purple-100
                    bg-purple-50/40
                    outline-none
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-100
                    focus:bg-white
                    transition-all
                  "
                />

              </div>


              {/* ASUNTO */}

              <div>

                <label
                  htmlFor="asunto"
                  className="block text-sm font-semibold text-purple-950 mb-2"
                >
                  Asunto
                </label>

                <input
                  id="asunto"
                  type="text"
                  placeholder="Motivo del contacto"
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    border border-purple-100
                    bg-purple-50/40
                    outline-none
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-100
                    focus:bg-white
                    transition-all
                  "
                />

              </div>


              {/* MENSAJE */}

              <div>

                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-purple-950 mb-2"
                >
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  rows="5"
                  placeholder="Escribe tu mensaje..."
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    border border-purple-100
                    bg-purple-50/40
                    outline-none
                    resize-none
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-100
                    focus:bg-white
                    transition-all
                  "
                />

              </div>


              {/* BOTÓN */}

              <button
                type="button"
                className="
                  w-full
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-900
                  to-violet-700
                  text-white
                  font-bold
                  shadow-lg
                  shadow-purple-900/20
                  hover:from-purple-800
                  hover:to-violet-600
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                Enviar mensaje
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          CIERRE
      ===================================================== */}

      <section className="py-20 px-6 bg-purple-950 text-white">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold">
            SambucusLab
          </h2>

          <p className="mt-4 text-purple-200 leading-7">
            Investigación, gastronomía y tecnología en un mismo proyecto.
          </p>

        </div>

      </section>

    </main>
  );
}