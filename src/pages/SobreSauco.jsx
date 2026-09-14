import SectionTitle from "../components/SectionTitle";

export default function SobreSauco() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-purple-300 text-sm font-semibold">
            Sambucus nigra
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Sobre el Saúco
          </h1>

          <p className="mt-6 text-lg text-purple-200 max-w-3xl leading-8">
            Conoce las características botánicas, nutricionales y gastronómicas
            del saúco, el ingrediente principal de la investigación desarrollada
            en SambucusLab.
          </p>

        </div>
      </section>

      {/* ¿QUÉ ES EL SAÚCO? */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Introducción"
            title="¿Qué es el saúco?"
            description="El saúco (Sambucus nigra) es una planta reconocida por sus frutos ricos en pigmentos naturales y compuestos antioxidantes. Su uso tradicional se ha extendido desde aplicaciones medicinales hasta preparaciones gastronómicas."
          />

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?q=80&w=1200&auto=format&fit=crop"
                alt="Frutos de saúco"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6 text-lg leading-8">

              <p>
                <strong>Sambucus nigra</strong> pertenece a la familia
                Adoxaceae y es conocida por producir pequeñas bayas de color
                púrpura oscuro o negro.
              </p>

              <p>
                Estas bayas contienen una elevada concentración de
                <strong> antocianinas</strong>, compuestos responsables de su
                color intenso y de gran interés para la industria alimentaria.
              </p>

              <p>
                En Colombia, el saúco ha sido utilizado en bebidas, almíbares,
                mermeladas y preparaciones artesanales, aunque su potencial en
                pastelería aún ha sido poco explorado.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CLASIFICACIÓN */}
      <section className="py-20 bg-purple-50 px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Botánica"
            title="Clasificación científica"
            description="Información taxonómica básica del fruto estudiado en la investigación."
          />

          <div className="grid md:grid-cols-2 gap-8">

            {[
              ["Reino", "Plantae"],
              ["División", "Magnoliophyta"],
              ["Clase", "Magnoliopsida"],
              ["Orden", "Dipsacales"],
              ["Familia", "Adoxaceae"],
              ["Género", "Sambucus"],
              ["Especie", "Sambucus nigra L."],
              ["Nombre común", "Saúco"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="bg-white p-6 rounded-2xl shadow border border-purple-100"
              >
                <h3 className="text-purple-700 font-semibold uppercase text-sm tracking-wider">
                  {title}
                </h3>

                <p className="mt-3 text-xl font-bold text-gray-800">
                  {value}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROPIEDADES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Composición"
            title="Propiedades nutricionales y funcionales"
            description="Las bayas del saúco poseen compuestos bioactivos de interés científico y gastronómico."
          />

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                title: "Antocianinas",
                text: "Pigmentos naturales responsables del color púrpura intenso.",
              },
              {
                title: "Polifenoles",
                text: "Compuestos antioxidantes presentes en la pulpa y la cáscara.",
              },
              {
                title: "Flavonoides",
                text: "Sustancias bioactivas asociadas con propiedades antioxidantes.",
              },
              {
                title: "Vitamina C",
                text: "Nutriente presente en los frutos frescos del saúco.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-purple-900 text-white rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-purple-200 leading-7 text-sm">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Aplicaciones"
            title="¿Por qué el saúco es importante en alimentos?"
            description="El interés del proyecto se centra en el uso del saúco como ingrediente innovador para productos de pastelería."
          />

          <div className="grid md:grid-cols-2 gap-10">

            {[
              {
                title: "Colorante natural",
                text: "Las antocianinas permiten aportar color sin utilizar colorantes artificiales.",
              },
              {
                title: "Ingrediente funcional",
                text: "Su composición química ha despertado interés en alimentos funcionales y saludables.",
              },
              {
                title: "Aroma y sabor",
                text: "Aporta notas frutales y florales que enriquecen preparaciones dulces.",
              },
              {
                title: "Innovación gastronómica",
                text: "Permite desarrollar nuevas recetas y productos con identidad local.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl bg-purple-50 p-8 border border-purple-100"
              >
                <h3 className="text-2xl font-bold text-purple-900">
                  {card.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {card.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* GASTRONOMÍA */}
      <section className="py-20 bg-purple-950 text-white px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle
            subtitle="Gastronomía"
            title="Usos del saúco en cocina y pastelería"
            description="El proyecto SambucusLab explora la incorporación del saúco en preparaciones tradicionales mediante diferentes concentraciones."
          />

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Pavlova",
                text: "Merengue horneado enriquecido con zumo de saúco para evaluar color, sabor y textura.",
              },
              {
                title: "Mousse",
                text: "Preparación fría utilizada para estudiar la aceptación sensorial del fruto.",
              },
              {
                title: "Almíbar de saúco",
                text: "Preparación desarrollada en la primera fase del proyecto como base para aplicaciones gastronómicas.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-purple-900 rounded-3xl p-8 border border-purple-700"
              >
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 text-purple-200 leading-8">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CIERRE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <SectionTitle
            subtitle="Conclusión"
            title="El saúco como ingrediente de innovación gastronómica"
            description="La investigación desarrollada en SambucusLab busca aportar evidencia experimental sobre el potencial del saúco en productos de pastelería mediante análisis sensorial y estadístico."
          />

          <div className="bg-purple-50 rounded-3xl p-10 mt-10 border border-purple-100">

            <p className="text-lg leading-8 text-gray-700">
              A partir del estudio de diferentes concentraciones de sólidos
              solubles (°Brix), el proyecto analiza cómo el saúco modifica el
              color, aroma, sabor, textura y aceptación de preparaciones como la
              pavlova y el mousse, promoviendo el aprovechamiento de este fruto
              dentro de la gastronomía colombiana.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}