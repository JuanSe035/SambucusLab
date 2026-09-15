import { motion } from "framer-motion";
import {
  FaChartBar,
  FaChartPie,
  FaFlask,
  FaStar,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import FloatingBerry from "../components/FloatingBerry";
import GlowButton from "../components/GlowButton";

const concentraciones = [
  {
    brix: "4°",
    nombre: "Nivel bajo",
    descripcion:
      "Concentración de menor intensidad utilizada para explorar perfiles sensoriales más suaves.",
  },
  {
    brix: "7°",
    nombre: "Nivel medio",
    descripcion:
      "Concentración intermedia utilizada para comparar intensidad y aceptación sensorial.",
  },
  {
    brix: "10°",
    nombre: "Nivel alto",
    descripcion:
      "Mayor concentración utilizada para estudiar una expresión sensorial más intensa.",
  },
];

const atributos = [
  {
    nombre: "Sabor",
    descripcion:
      "Percepción gustativa del producto y presencia característica del saúco.",
    icono: "S",
  },
  {
    nombre: "Aroma",
    descripcion:
      "Percepción aromática asociada a la preparación y al ingrediente.",
    icono: "A",
  },
  {
    nombre: "Apariencia",
    descripcion:
      "Evaluación visual de la presentación general del producto.",
    icono: "AP",
  },
  {
    nombre: "Textura",
    descripcion:
      "Percepción de las características físicas durante el consumo.",
    icono: "T",
  },
  {
    nombre: "Color",
    descripcion:
      "Valoración visual de la tonalidad desarrollada en las preparaciones.",
    icono: "C",
  },
  {
    nombre: "Aceptación",
    descripcion:
      "Valoración general del producto por parte de los participantes.",
    icono: "✓",
  },
];

export default function Resultados() {
  return (
    <main className="overflow-hidden bg-[#faf8ff]">
      {/* HERO */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-purple-950
          via-violet-900
          to-purple-700
          text-white
        "
      >
        <div
          className="
            absolute
            -top-40
            right-[-10rem]
            w-[35rem]
            h-[35rem]
            rounded-full
            bg-fuchsia-500/10
            blur-[110px]
          "
        />

        <FloatingBerry
          size={16}
          top="22%"
          left="7%"
          delay={0}
          duration={7}
          opacity={0.5}
        />

        <FloatingBerry
          size={20}
          top="70%"
          left="90%"
          delay={1}
          duration={8}
          opacity={0.4}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">
          <Reveal>
            <span
              className="
                inline-flex
                px-4
                py-2
                rounded-full
                bg-white/10
                border
                border-white/10
                text-xs
                uppercase
                tracking-[0.22em]
                font-bold
              "
              style={{
                color: "#f3e8ff",
                textShadow: "0 2px 6px rgba(0,0,0,0.35)",
              }}
            >
              Análisis de resultados
            </span>

            <h1
              className="
                mt-7
                text-5xl
                md:text-6xl
                font-extrabold
              "
              style={{
                color: "#ffffff",
                textShadow:
                  "0 3px 12px rgba(0,0,0,0.45)",
              }}
            >
              Resultados
            </h1>

            <p
              className="
                mt-6
                max-w-3xl
                text-lg
                leading-8
              "
              style={{
                color: "#f3e8ff",
                textShadow: "0 2px 7px rgba(0,0,0,0.35)",
              }}
            >
              Explora la relación entre las concentraciones
              de saúco y las características sensoriales
              evaluadas en los productos desarrollados.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONCENTRACIONES */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionTitle
              subtitle="Variable experimental"
              title="Niveles de concentración"
              description="El estudio trabajó con tres niveles expresados en grados Brix."
            />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {concentraciones.map((item, index) => (
              <Reveal
                key={item.brix}
                delay={index * 0.12}
              >
                <motion.article
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-purple-100
                    bg-gradient-to-br
                    from-purple-50
                    to-violet-50
                    p-8
                    text-center
                  "
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                  }}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-purple-300/10
                      to-fuchsia-300/10
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />

                  <div className="relative">
                    <span
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        font-bold
                      "
                      style={{ color: "#7e22ce" }}
                    >
                      {item.nombre}
                    </span>

                    <p
                      className="
                        mt-5
                        text-6xl
                        font-black
                      "
                      style={{ color: "#2e1065" }}
                    >
                      {item.brix}
                    </p>

                    <p
                      className="font-semibold"
                      style={{ color: "#7e22ce" }}
                    >
                      Brix
                    </p>

                    <p
                      className="
                        mt-5
                        leading-7
                      "
                      style={{ color: "#374151" }}
                    >
                      {item.descripcion}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section
        className="
          py-24
          md:py-32
          px-6
          bg-gradient-to-br
          from-purple-50
          via-white
          to-violet-50
        "
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionTitle
              subtitle="Productos evaluados"
              title="Pavlova y mousse"
              description="Ambas preparaciones fueron utilizadas para estudiar el comportamiento sensorial del saúco."
            />
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-7">
            <Reveal direction="left">
              <motion.article
                className="
                  group
                  rounded-[2rem]
                  bg-purple-950
                  text-white
                  p-9
                  overflow-hidden
                  relative
                "
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
              >
                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    w-60
                    h-60
                    rounded-full
                    bg-purple-500/20
                    blur-3xl
                  "
                />

                <div className="relative">
                  <FaStar
                    className="text-2xl"
                    style={{ color: "#d8b4fe" }}
                  />

                  <h3
                    className="
                      mt-5
                      text-3xl
                      font-extrabold
                    "
                    style={{
                      color: "#ffffff",
                      textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                    }}
                  >
                    Pavlova
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                    "
                    style={{ color: "#f3e8ff" }}
                  >
                    Producto basado en merengue horneado
                    utilizado para evaluar diferentes
                    atributos sensoriales.
                  </p>
                </div>
              </motion.article>
            </Reveal>

            <Reveal direction="right">
              <motion.article
                className="
                  group
                  rounded-[2rem]
                  bg-white
                  border
                  border-purple-100
                  p-9
                  relative
                  overflow-hidden
                "
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
              >
                <div
                  className="
                    absolute
                    -left-20
                    -bottom-20
                    w-60
                    h-60
                    rounded-full
                    bg-purple-200/40
                    blur-3xl
                  "
                />

                <div className="relative">
                  <FaFlask
                    className="text-2xl"
                    style={{ color: "#6b21a8" }}
                  />

                  <h3
                    className="
                      mt-5
                      text-3xl
                      font-extrabold
                    "
                    style={{ color: "#2e1065" }}
                  >
                    Mousse
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                    "
                    style={{ color: "#374151" }}
                  >
                    Preparación de textura aireada empleada
                    para estudiar la influencia del saúco
                    en el perfil sensorial.
                  </p>
                </div>
              </motion.article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ATRIBUTOS */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionTitle
              subtitle="Evaluación sensorial"
              title="Atributos analizados"
              description="La evaluación consideró diferentes características de los productos."
            />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {atributos.map((atributo, index) => (
              <Reveal
                key={atributo.nombre}
                direction="up"
                delay={index * 0.06}
              >
                <motion.article
                  className="
                    group
                    rounded-2xl
                    bg-gradient-to-br
                    from-purple-50
                    to-violet-50
                    border
                    border-purple-100
                    p-6
                    text-center
                  "
                  whileHover={{
                    y: -7,
                    scale: 1.03,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 18,
                  }}
                >
                  <div
                    className="
                      mx-auto
                      w-14
                      h-14
                      rounded-2xl
                      bg-white
                      border
                      border-purple-100
                      flex
                      items-center
                      justify-center
                      font-extrabold
                      shadow-sm
                      group-hover:bg-purple-900
                      group-hover:text-white
                      group-hover:rotate-6
                      transition-all
                      duration-300
                    "
                    style={{ color: "#6b21a8" }}
                  >
                    {atributo.icono}
                  </div>

                  <h3
                    className="
                      mt-5
                      text-xl
                      font-bold
                    "
                    style={{ color: "#2e1065" }}
                  >
                    {atributo.nombre}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                    "
                    style={{ color: "#374151" }}
                  >
                    {atributo.descripcion}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESCALA */}
      <section
        className="
          py-24
          md:py-32
          px-6
          bg-gradient-to-br
          from-purple-950
          via-violet-900
          to-purple-800
          text-white
        "
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center">
              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  font-bold
                "
                style={{ color: "#d8b4fe" }}
              >
                Instrumento de evaluación
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  font-extrabold
                "
                style={{
                  color: "#ffffff",
                  textShadow:
                    "0 3px 12px rgba(0,0,0,0.45)",
                }}
              >
                Escala sensorial
              </h2>

              <p
                className="
                  mt-5
                  leading-8
                  max-w-2xl
                  mx-auto
                "
                style={{ color: "#f3e8ff" }}
              >
                La valoración sensorial utilizó una escala
                de 0 a 100, donde los extremos representan
                los niveles mínimo y máximo de valoración.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              className="
                mt-14
                rounded-[2rem]
                bg-white/10
                border
                border-white/10
                backdrop-blur-md
                p-8
                md:p-10
              "
            >
              <div
                className="
                  flex
                  justify-between
                  text-sm
                "
                style={{ color: "#e9d5ff" }}
              >
                <span>0 · menor valoración</span>
                <span>100 · mayor valoración</span>
              </div>

              <div
                className="
                  relative
                  mt-6
                  h-5
                  rounded-full
                  bg-white/10
                  overflow-hidden
                "
              >
                <motion.div
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-purple-700
                    via-fuchsia-500
                    to-purple-200
                  "
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    transformOrigin: "left",
                  }}
                />
              </div>

              <div
                className="
                  mt-6
                  grid
                  grid-cols-3
                  text-center
                "
              >
                <div>
                  <p className="text-2xl font-extrabold">
                    0
                  </p>

                  <p
                    className="text-xs"
                    style={{ color: "#d8b4fe" }}
                  >
                    mínimo
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold">
                    50
                  </p>

                  <p
                    className="text-xs"
                    style={{ color: "#d8b4fe" }}
                  >
                    punto medio
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold">
                    100
                  </p>

                  <p
                    className="text-xs"
                    style={{ color: "#d8b4fe" }}
                  >
                    máximo
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RADAR */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-purple-100
                bg-gradient-to-br
                from-purple-50
                via-white
                to-violet-50
                p-10
                text-center
                md:p-14
              "
            >
              <div
                className="
                  absolute
                  -top-24
                  left-1/2
                  h-72
                  w-72
                  -translate-x-1/2
                  rounded-full
                  bg-purple-200/30
                  blur-3xl
                "
              />

              <div className="relative">
                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-purple-900
                    text-white
                    shadow-lg
                  "
                >
                  <FaChartBar className="text-xl" />
                </div>

                <h2
                  className="
                    mt-7
                    text-3xl
                    font-extrabold
                    md:text-4xl
                  "
                  style={{ color: "#2e1065" }}
                >
                  Radar sensorial
                </h2>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-2xl
                    leading-8
                  "
                  style={{ color: "#374151" }}
                >
                  Esta sección está preparada para integrar
                  los resultados estadísticos reales de sabor,
                  aroma, apariencia, textura, color y aceptación.
                </p>

                <div
                  className="
                    relative
                    mx-auto
                    mt-10
                    flex
                    aspect-square
                    max-w-xl
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-dashed
                    border-purple-200
                  "
                >
                  <div
                    className="
                      absolute
                      inset-[15%]
                      rounded-full
                      border
                      border-purple-200
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-[30%]
                      rounded-full
                      border
                      border-purple-200
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-[45%]
                      rounded-full
                      border
                      border-purple-200
                    "
                  />

                  <div
                    className="
                      absolute
                      h-full
                      w-px
                      bg-purple-200
                    "
                  />

                  <div
                    className="
                      absolute
                      h-px
                      w-full
                      bg-purple-200
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-semibold
                    "
                    style={{ color: "#7e22ce" }}
                  >
                    Datos pendientes de integración
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
      <section
        className="
          py-24
          px-6
          bg-purple-950
          text-white
        "
      >
        <div className="max-w-4xl mx-auto text-center">
          <Reveal direction="zoom">
            <FaChartPie
              className="
                mx-auto
                text-3xl
              "
              style={{ color: "#d8b4fe" }}
            />

            <h2
              className="
                mt-6
                text-4xl
                md:text-5xl
                font-extrabold
              "
              style={{
                color: "#ffffff",
                textShadow:
                  "0 3px 12px rgba(0,0,0,0.45)",
              }}
            >
              Los datos cuentan la historia
            </h2>

            <p
              className="
                mt-6
                leading-8
                text-lg
              "
              style={{ color: "#f3e8ff" }}
            >
              Cuando integremos los resultados estadísticos,
              esta sección permitirá visualizar las diferencias
              entre concentraciones y atributos sensoriales.
            </p>

            <div className="mt-9">
              <GlowButton
                to="/recetas"
                variant="light"
              >
                Explorar recetas
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}