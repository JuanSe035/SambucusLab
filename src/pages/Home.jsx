import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>

      <Hero />


      {/* =====================================================
          SOBRE EL SAÚCO
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Sambucus nigra"
            title="Conociendo el saúco"
            description="El saúco es el ingrediente central de esta investigación y representa una alternativa de interés para la innovación gastronómica."
          />


          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* INFORMACIÓN */}

            <div>

              <div className="space-y-5 text-gray-600 leading-8">

                <p>
                  El saúco pertenece al género
                  <span className="italic font-semibold text-purple-800">
                    {" "}Sambucus
                  </span>
                  {" "}y presenta frutos pequeños agrupados en racimos.
                  En su estado maduro puede presentar una coloración
                  púrpura oscura característica.
                </p>

                <p>
                  En el contexto gastronómico, sus propiedades de color,
                  aroma y sabor permiten estudiar su incorporación en
                  productos de pastelería y desarrollar preparaciones
                  con características sensoriales diferenciadas.
                </p>

                <p>
                  SambucusLab estudia este potencial mediante diferentes
                  concentraciones aplicadas a productos tradicionales
                  de pastelería.
                </p>

              </div>


              {/* DATOS */}

              <div className="mt-9 grid sm:grid-cols-2 gap-4">

                {[
                  ["Género", "Sambucus"],
                  ["Especie", "Sambucus nigra"],
                  ["Fruto", "Baya pequeña de tonalidad oscura"],
                  ["Color", "Púrpura intenso en estado maduro"],
                ].map(([title, text]) => (

                  <div
                    key={title}
                    className="
                      rounded-2xl
                      bg-purple-50
                      border border-purple-100
                      p-5
                      hover:bg-violet-50
                      hover:border-purple-200
                      hover:-translate-y-1
                      hover:shadow-lg
                      transition-all duration-300
                    "
                  >

                    <p className="text-xs uppercase tracking-[0.15em] text-purple-600 font-bold">
                      {title}
                    </p>

                    <p className="mt-2 text-purple-950 font-semibold">
                      {text}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* IMAGEN */}

            <div className="relative">

              <div className="absolute inset-0 bg-purple-300/20 blur-3xl rounded-full" />

              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-purple-100">

                <img
                  src="https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=1000&q=85"
                  alt="Frutos de saúco"
                  className="
                    w-full
                    h-[420px]
                    object-cover
                    hover:scale-105
                    transition-transform duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent" />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROPIEDADES DEL SAÚCO
      ===================================================== */}

      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-violet-50">

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
                  bg-white
                  border border-purple-100
                  hover:bg-purple-50
                  hover:border-purple-200
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all duration-300
                "
              >

                <span className="
                  absolute
                  right-7
                  top-6
                  text-5xl
                  font-black
                  text-purple-100
                  group-hover:text-purple-200
                  transition-colors
                ">
                  0{index + 1}
                </span>

                <div className="relative">

                  <div className="w-10 h-1 rounded-full bg-gradient-to-r from-purple-700 to-violet-400 mb-6" />

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
          APLICACIÓN GASTRONÓMICA
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Aplicación gastronómica"
            title="Del fruto a la pastelería"
            description="La investigación estudia cómo el saúco puede incorporarse a preparaciones tradicionales y cómo diferentes concentraciones modifican sus características sensoriales."
          />

          <div className="grid md:grid-cols-3 gap-6">

            {[
              [
                "01",
                "Preparación",
                "Obtención y preparación del fruto para su incorporación en las formulaciones.",
              ],
              [
                "02",
                "Concentración",
                "Evaluación de diferentes niveles de sólidos solubles expresados en grados Brix.",
              ],
              [
                "03",
                "Evaluación",
                "Análisis de atributos sensoriales y aceptación de los productos desarrollados.",
              ],
            ].map(([number, title, text]) => (

              <article
                key={number}
                className="
                  rounded-3xl
                  bg-gradient-to-br from-purple-50 to-violet-50
                  border border-purple-100
                  p-8
                  hover:bg-purple-100/60
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all duration-300
                "
              >

                <span className="text-4xl font-extrabold text-purple-200">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-purple-950">
                  {title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONCENTRACIONES
      ===================================================== */}

      <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-violet-50">

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-purple-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Diseño experimental"
            title="Tres concentraciones de estudio"
            description="La investigación analiza diferentes niveles de sólidos solubles expresados en grados Brix."
          />

          <div className="grid md:grid-cols-3 gap-7">

            {[
              {
                brix: "4°",
                label: "Nivel bajo",
                description:
                  "Concentración de menor intensidad, orientada a explorar perfiles sensoriales más suaves.",
              },
              {
                brix: "7°",
                label: "Nivel medio",
                description:
                  "Concentración intermedia utilizada para comparar intensidad y aceptación sensorial.",
              },
              {
                brix: "10°",
                label: "Nivel alto",
                description:
                  "Mayor concentración utilizada para estudiar una expresión sensorial más intensa del saúco.",
              },
            ].map((item, index) => (

              <article
                key={item.brix}
                className={`
                  relative
                  overflow-hidden
                  rounded-3xl
                  p-8
                  border
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all duration-300
                  ${
                    index === 1
                      ? "bg-gradient-to-br from-purple-900 to-violet-700 text-white border-purple-800"
                      : "bg-white border-purple-100"
                  }
                `}
              >

                <p
                  className={
                    index === 1
                      ? "text-sm uppercase tracking-[0.2em] text-purple-200 font-bold"
                      : "text-sm uppercase tracking-[0.2em] text-purple-500 font-bold"
                  }
                >
                  {item.label}
                </p>

                <p
                  className={
                    index === 1
                      ? "mt-5 text-5xl font-extrabold"
                      : "mt-5 text-5xl font-extrabold text-purple-900"
                  }
                >
                  {item.brix}
                </p>

                <p
                  className={
                    index === 1
                      ? "text-lg font-semibold text-purple-200 mt-1"
                      : "text-lg font-semibold text-purple-700 mt-1"
                  }
                >
                  Brix
                </p>

                <p
                  className={
                    index === 1
                      ? "mt-5 text-purple-100 leading-7"
                      : "mt-5 text-gray-600 leading-7"
                  }
                >
                  {item.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTOS
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Aplicaciones gastronómicas"
            title="Productos desarrollados"
            description="Las concentraciones estudiadas fueron incorporadas en preparaciones tradicionales de pastelería."
          />

          <div className="grid lg:grid-cols-2 gap-8">

            {/* PAVLOVA */}

            <article
              className="
                rounded-[2rem]
                bg-gradient-to-br
                from-purple-950
                via-purple-900
                to-violet-800
                text-white
                p-10
                shadow-xl
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all duration-300
              "
            >

              <span className="text-xs uppercase tracking-[0.2em] text-purple-300 font-bold">
                Producto 01
              </span>

              <h3 className="mt-5 text-4xl font-extrabold">
                Pavlova
              </h3>

              <p className="mt-5 text-purple-100 leading-8">
                Preparación basada en merengue horneado, utilizada para
                analizar el efecto de las diferentes concentraciones de
                saúco sobre atributos como color, textura, aroma y sabor.
              </p>

              <Link
                to="/recetas"
                className="
                  inline-flex
                  mt-8
                  px-5
                  py-3
                  rounded-xl
                  bg-white
                  text-purple-900
                  font-semibold
                  hover:bg-purple-50
                  transition
                "
              >
                Ver preparación
              </Link>

            </article>


            {/* MOUSSE */}

            <article
              className="
                rounded-[2rem]
                bg-gradient-to-br
                from-purple-50
                to-violet-100
                border border-purple-100
                p-10
                shadow-lg
                hover:-translate-y-2
                hover:bg-violet-50
                hover:shadow-xl
                transition-all duration-300
              "
            >

              <span className="text-xs uppercase tracking-[0.2em] text-purple-600 font-bold">
                Producto 02
              </span>

              <h3 className="mt-5 text-4xl font-extrabold text-purple-950">
                Mousse
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                Preparación de textura aireada empleada para estudiar la
                influencia del saúco en el perfil sensorial y en la
                aceptación general del producto.
              </p>

              <Link
                to="/recetas"
                className="
                  inline-flex
                  mt-8
                  px-5
                  py-3
                  rounded-xl
                  bg-purple-900
                  text-white
                  font-semibold
                  hover:bg-purple-800
                  transition
                "
              >
                Ver preparación
              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESULTADOS
      ===================================================== */}

      <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-purple-950 via-violet-950 to-purple-900 text-white">

        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">

          <span className="inline-block text-xs uppercase tracking-[0.25em] text-purple-300 font-bold">
            Resultados del estudio
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight">
            ¿Cómo influyó la concentración de saúco?
          </h2>

          <p className="mt-6 text-purple-100 text-lg leading-8 max-w-2xl mx-auto">
            Explora los principales hallazgos del análisis sensorial y
            conoce cómo la concentración modificó las características
            percibidas en los productos desarrollados.
          </p>

          <Link
            to="/resultados"
            className="
              inline-flex
              mt-9
              items-center
              px-7
              py-4
              rounded-xl
              bg-white
              text-purple-900
              font-bold
              shadow-lg
              hover:bg-purple-50
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            Explorar resultados
          </Link>

        </div>

      </section>

    </main>
  );
}