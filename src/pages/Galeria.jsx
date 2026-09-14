import SectionTitle from "../components/SectionTitle";

const imagenes = [
  {
    titulo: "Frutos de saúco",
    categoria: "Materia prima",
    descripcion:
      "El fruto de Sambucus nigra constituye la materia prima utilizada durante el desarrollo experimental.",
    imagen:
      "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titulo: "Preparación del saúco",
    categoria: "Proceso",
    descripcion:
      "El fruto es seleccionado y preparado antes de obtener las diferentes concentraciones utilizadas en la investigación.",
    imagen:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titulo: "Concentración",
    categoria: "Experimentación",
    descripcion:
      "Las diferentes relaciones entre fruto y agua permiten obtener los niveles experimentales de sólidos solubles.",
    imagen:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titulo: "Pavlova",
    categoria: "Producto final",
    descripcion:
      "Preparación de pastelería utilizada para evaluar la incorporación del saúco.",
    imagen:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titulo: "Mousse",
    categoria: "Producto final",
    descripcion:
      "Producto de textura cremosa empleado en la evaluación sensorial.",
    imagen:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titulo: "Presentación gastronómica",
    categoria: "Gastronomía",
    descripcion:
      "Aplicación del saúco en productos tradicionales de pastelería.",
    imagen:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Galeria() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-purple-300 text-sm font-semibold">
            Registro visual
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4">
            Galería
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-purple-100 leading-8">
            Un recorrido visual por la materia prima, el proceso experimental
            y las aplicaciones gastronómicas desarrolladas durante
            SambucusLab.
          </p>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            subtitle="Registro del proyecto"
            title="Del fruto al producto"
            description="La galería permite visualizar las diferentes etapas relacionadas con la aplicación del saúco en productos tradicionales de pastelería."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black text-purple-800">
                01
              </div>

              <h3 className="mt-4 text-xl font-bold text-purple-950">
                Materia prima
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Selección y preparación de los frutos de saúco.
              </p>
            </div>

            <div className="bg-purple-50 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black text-purple-800">
                02
              </div>

              <h3 className="mt-4 text-xl font-bold text-purple-950">
                Experimentación
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Elaboración de las diferentes concentraciones y preparaciones.
              </p>
            </div>

            <div className="bg-purple-50 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black text-purple-800">
                03
              </div>

              <h3 className="mt-4 text-xl font-bold text-purple-950">
                Resultado
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Presentación de los productos desarrollados durante el estudio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-24 px-6 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Fotografías"
            title="Proceso experimental"
            description="Registro visual de las diferentes etapas del desarrollo gastronómico."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {imagenes.map((item) => (
              <article
                key={item.titulo}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                  <span className="absolute top-4 left-4 bg-purple-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.categoria}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-purple-950">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {item.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="Metodología visual"
            title="Etapas del desarrollo"
            description="El proceso gastronómico se relacionó directamente con las etapas experimentales de la investigación."
          />

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-start bg-purple-50 rounded-3xl p-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-900 text-white flex items-center justify-center text-xl font-bold">
                01
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-950">
                  Selección del fruto
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Se seleccionaron frutos maduros de saúco con una coloración
                  púrpura intensa y características apropiadas para el
                  procesamiento.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-purple-50 rounded-3xl p-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-900 text-white flex items-center justify-center text-xl font-bold">
                02
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-950">
                  Obtención del zumo
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  El fruto fue procesado utilizando diferentes relaciones entre
                  cantidad de saúco y cantidad de agua para obtener las
                  concentraciones experimentales.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-purple-50 rounded-3xl p-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-900 text-white flex items-center justify-center text-xl font-bold">
                03
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-950">
                  Elaboración
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Las diferentes concentraciones fueron incorporadas en
                  preparaciones tradicionales de pastelería como pavlova y
                  mousse.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-purple-50 rounded-3xl p-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-900 text-white flex items-center justify-center text-xl font-bold">
                04
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-950">
                  Evaluación sensorial
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Los productos fueron evaluados considerando atributos como
                  color, aroma, sabor, textura, dulzor y aceptación general.
                </p>
              </div>
            </div>
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
            Investigación, gastronomía y experimentación
          </h2>

          <p className="mt-6 text-purple-200 text-lg leading-8">
            Cada preparación representa una etapa del proceso de investigación
            y una oportunidad para explorar el potencial gastronómico del
            saúco.
          </p>
        </div>
      </section>
    </main>
  );
}