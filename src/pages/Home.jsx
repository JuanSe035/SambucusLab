export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div>
            <p className="text-purple-300 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Proyecto de investigación
            </p>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Sambucus<span className="text-purple-300">Lab</span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-purple-100">
              Aplicación del saúco en productos tradicionales de pastelería
            </h2>

            <p className="mt-6 text-lg text-purple-200 leading-relaxed max-w-xl">
              Investigación experimental sobre el uso de diferentes
              concentraciones de saúco en preparaciones como pavlova y mousse,
              evaluando sus características sensoriales y su aceptación.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/investigacion"
                className="px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-purple-100 transition"
              >
                Conocer la investigación
              </a>

              <a
                href="/resultados"
                className="px-6 py-3 border border-purple-300 text-white font-semibold rounded-lg hover:bg-purple-800 transition"
              >
                Ver resultados
              </a>
            </div>
          </div>

          {/* Tarjeta visual */}
          <div className="flex justify-center">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-purple-700/50 border border-purple-400/30 flex items-center justify-center shadow-2xl">

              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-purple-800 border border-purple-300/30 flex flex-col items-center justify-center text-center">

                <div className="text-7xl mb-4">
                  🫐
                </div>

                <h3 className="text-2xl font-bold">
                  Sambucus nigra
                </h3>

                <p className="mt-2 text-purple-300">
                  Saúco
                </p>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="bg-white text-gray-800 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-purple-700 uppercase tracking-widest text-sm font-semibold">
            Sobre el proyecto
          </p>

          <h2 className="text-4xl font-bold text-purple-900 mt-3">
            ¿Por qué investigar el saúco?
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            El saúco es un fruto que puede aportar características distintivas
            de color, sabor y aroma a diferentes preparaciones gastronómicas.
            SambucusLab estudia su incorporación en productos tradicionales de
            pastelería mediante diferentes niveles de concentración.
          </p>

        </div>
      </section>

      {/* CONCENTRACIONES */}
      <section className="bg-purple-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-purple-700 uppercase tracking-widest text-sm font-semibold">
              Diseño experimental
            </p>

            <h2 className="text-4xl font-bold text-purple-900 mt-3">
              Tres concentraciones estudiadas
            </h2>

            <p className="mt-4 text-gray-600">
              La relación entre fruto y agua permitió obtener diferentes
              concentraciones de sólidos solubles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* 4 Brix */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="text-5xl font-bold text-purple-700">
                4°
              </div>

              <p className="text-sm text-gray-500 mt-1">
                °Brix
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6">
                Concentración baja
              </h3>

              <p className="mt-3 text-gray-600">
                150 g de fruto + 300 ml de agua
              </p>

              <div className="mt-6 h-2 bg-purple-100 rounded-full">
                <div className="h-2 bg-purple-400 rounded-full w-1/3"></div>
              </div>
            </div>

            {/* 7 Brix */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-500">
              <div className="text-5xl font-bold text-purple-800">
                7°
              </div>

              <p className="text-sm text-gray-500 mt-1">
                °Brix
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6">
                Concentración base
              </h3>

              <p className="mt-3 text-gray-600">
                150 g de fruto + 150 ml de agua
              </p>

              <div className="mt-6 h-2 bg-purple-100 rounded-full">
                <div className="h-2 bg-purple-600 rounded-full w-2/3"></div>
              </div>
            </div>

            {/* 10 Brix */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="text-5xl font-bold text-purple-900">
                10°
              </div>

              <p className="text-sm text-gray-500 mt-1">
                °Brix
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6">
                Concentración alta
              </h3>

              <p className="mt-3 text-gray-600">
                250 g de fruto + 150 ml de agua
              </p>

              <div className="mt-6 h-2 bg-purple-100 rounded-full">
                <div className="h-2 bg-purple-800 rounded-full w-full"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-purple-700 uppercase tracking-widest text-sm font-semibold">
              Aplicaciones
            </p>

            <h2 className="text-4xl font-bold text-purple-900 mt-3">
              Productos evaluados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="rounded-2xl bg-purple-900 text-white p-10">
              <span className="text-purple-300 text-sm uppercase tracking-widest">
                Producto 01
              </span>

              <h3 className="text-3xl font-bold mt-3">
                Pavlova
              </h3>

              <p className="mt-4 text-purple-200 leading-relaxed">
                Preparación basada en merengue en la que se exploró la
                incorporación del saúco para aportar características
                sensoriales diferenciadas.
              </p>
            </div>

            <div className="rounded-2xl bg-purple-100 text-purple-900 p-10">
              <span className="text-purple-600 text-sm uppercase tracking-widest">
                Producto 02
              </span>

              <h3 className="text-3xl font-bold mt-3">
                Mousse
              </h3>

              <p className="mt-4 text-purple-700 leading-relaxed">
                Preparación empleada para analizar la percepción sensorial
                asociada a las diferentes concentraciones de saúco.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RESULTADOS DESTACADOS */}
      <section className="bg-purple-950 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-purple-300 uppercase tracking-widest text-sm font-semibold">
            Hallazgos
          </p>

          <h2 className="text-4xl font-bold mt-3">
            ¿Qué encontramos?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">

            <div>
              <div className="text-3xl font-bold text-purple-300">
                Color
              </div>

              <p className="mt-3 text-purple-200">
                El saúco aporta una coloración característica a las
                preparaciones.
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-purple-300">
                Sabor
              </div>

              <p className="mt-3 text-purple-200">
                La concentración influye en la percepción del sabor
                característico del fruto.
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-purple-300">
                Aceptación
              </div>

              <p className="mt-3 text-purple-200">
                Las concentraciones evaluadas permitieron analizar
                diferencias en la aceptación sensorial.
              </p>
            </div>

          </div>

          <a
            href="/resultados"
            className="inline-block mt-12 px-7 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-purple-100 transition"
          >
            Explorar los resultados
          </a>

        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold text-purple-900">
            Ciencia, gastronomía y saúco
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            SambucusLab busca aportar una base experimental para explorar y
            estandarizar el uso del saúco en productos de pastelería y
            contribuir a su aprovechamiento dentro de la gastronomía
            colombiana.
          </p>

        </div>
      </section>

    </main>
  );
}