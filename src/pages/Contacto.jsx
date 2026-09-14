import SectionTitle from "../components/SectionTitle";

export default function Contacto() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-purple-300 text-sm font-semibold">
            Comunicación
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4">
            Contacto
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-purple-100 leading-8">
            Conoce más sobre el proyecto SambucusLab o utiliza este espacio
            para comunicarte con el equipo de investigación.
          </p>
        </div>
      </section>

      {/* INFORMACIÓN */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="SambucusLab"
            title="Información del proyecto"
            description="Proyecto académico enfocado en la aplicación del saúco en productos tradicionales de pastelería."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-purple-50 rounded-3xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-purple-900 text-white flex items-center justify-center text-xl font-bold">
                01
              </div>

              <h3 className="mt-6 text-2xl font-bold text-purple-950">
                Proyecto académico
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Investigación interdisciplinaria relacionada con gastronomía,
                análisis estadístico y desarrollo de productos.
              </p>
            </article>

            <article className="bg-purple-50 rounded-3xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-purple-900 text-white flex items-center justify-center text-xl font-bold">
                02
              </div>

              <h3 className="mt-6 text-2xl font-bold text-purple-950">
                Área de investigación
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Aplicación de diferentes concentraciones de saúco en productos
                tradicionales de pastelería.
              </p>
            </article>

            <article className="bg-purple-50 rounded-3xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-purple-900 text-white flex items-center justify-center text-xl font-bold">
                03
              </div>

              <h3 className="mt-6 text-2xl font-bold text-purple-950">
                Año
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Proyecto desarrollado dentro del contexto académico durante
                2026.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACTO + FORMULARIO */}
      <section className="py-24 px-6 bg-purple-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          {/* INFORMACIÓN */}
          <div>
            <p className="uppercase tracking-[0.3em] text-purple-600 text-sm font-semibold">
              Comunicación
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-purple-950 mt-3">
              Hablemos sobre el proyecto
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Si deseas obtener más información sobre la investigación, las
              preparaciones desarrolladas o el análisis realizado, puedes
              utilizar el formulario de contacto.
            </p>

            <div className="mt-10 space-y-5">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-sm uppercase tracking-wider text-purple-500 font-semibold">
                  Proyecto
                </p>

                <p className="mt-2 text-xl font-bold text-purple-950">
                  SambucusLab
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-sm uppercase tracking-wider text-purple-500 font-semibold">
                  Área
                </p>

                <p className="mt-2 text-gray-700">
                  Investigación gastronómica y análisis estadístico.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-sm uppercase tracking-wider text-purple-500 font-semibold">
                  Tema
                </p>

                <p className="mt-2 text-gray-700">
                  Aplicación del saúco en productos tradicionales de pastelería.
                </p>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-purple-950">
              Enviar mensaje
            </h3>

            <p className="mt-3 text-gray-600">
              Completa los siguientes campos para registrar tu consulta.
            </p>

            <form className="mt-8 space-y-6">
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
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

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
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

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
                  placeholder="Motivo del mensaje"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-purple-950 mb-2"
                >
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  rows="6"
                  placeholder="Escribe tu mensaje..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full bg-purple-900 text-white py-4 rounded-xl font-semibold hover:bg-purple-800 transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-24 px-6 bg-purple-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-purple-300 text-sm font-semibold">
            SambucusLab
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Gracias por visitar el proyecto
          </h2>

          <p className="mt-6 text-purple-200 text-lg leading-8">
            La investigación busca aportar una base experimental para fomentar
            el uso del saúco en la gastronomía colombiana.
          </p>
        </div>
      </section>
    </main>
  );
}