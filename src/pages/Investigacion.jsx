import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaFlask,
  FaChartBar,
  FaUsers,
  FaMapMarkerAlt,
  FaClipboardCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import FloatingBerry from "../components/FloatingBerry";
import GlowButton from "../components/GlowButton";

const etapas = [
  {
    numero: "01",
    icono: FaBookOpen,
    titulo: "Investigación",
    texto:
      "Revisión del potencial gastronómico del saúco y de sus características de interés para su aplicación en productos de pastelería.",
  },
  {
    numero: "02",
    icono: FaFlask,
    titulo: "Experimentación",
    texto:
      "Desarrollo de preparaciones utilizando diferentes niveles de concentración expresados en grados Brix.",
  },
  {
    numero: "03",
    icono: FaUsers,
    titulo: "Evaluación sensorial",
    texto:
      "Valoración de características como sabor, aroma, apariencia, textura, color y aceptación general.",
  },
  {
    numero: "04",
    icono: FaChartBar,
    titulo: "Análisis estadístico",
    texto:
      "Aplicación de herramientas estadísticas para estudiar las relaciones entre concentración, atributos sensoriales y aceptación.",
  },
];

const concentraciones = [
  {
    brix: "4°",
    fruta: "150 g",
    agua: "300 ml",
    nivel: "Concentración baja",
  },
  {
    brix: "7°",
    fruta: "150 g",
    agua: "150 ml",
    nivel: "Concentración media",
  },
  {
    brix: "10°",
    fruta: "250 g",
    agua: "150 ml",
    nivel: "Concentración alta",
  },
];

const metodos = [
  "ANOVA",
  "Tukey",
  "Chi-cuadrado",
  "Modelo multinomial",
  "PCA",
  "Clustering",
  "MCA",
];

export default function Investigacion() {
  return (
    <main className="overflow-hidden bg-[#faf8ff]">

      {/* =====================================================
          HERO
      ===================================================== */}

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
            -right-40
            w-[35rem]
            h-[35rem]
            rounded-full
            bg-fuchsia-500/10
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-40
            w-[35rem]
            h-[35rem]
            rounded-full
            bg-purple-400/10
            blur-[110px]
          "
        />

        <FloatingBerry
          size={16}
          top="25%"
          left="8%"
          delay={0}
          duration={7}
          opacity={0.5}
        />

        <FloatingBerry
          size={20}
          top="65%"
          left="90%"
          delay={1}
          duration={8}
          opacity={0.4}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">

          <Reveal direction="up">

            <span
              className="
                inline-flex
                px-4
                py-2
                rounded-full
                bg-white/10
                border
                border-white/10
                backdrop-blur-md
                text-xs
                uppercase
                tracking-[0.22em]
                font-bold
              "
              style={{
                color: "#ffffff",
                textShadow:
                  "0 2px 7px rgba(0,0,0,0.35)",
              }}
            >
              Metodología científica
            </span>

            <h1
              className="
                mt-7
                max-w-5xl
                text-5xl
                md:text-6xl
                font-extrabold
                leading-[1.05]
              "
              style={{
                color: "#ffffff",
                textShadow:
                  "0 4px 15px rgba(0,0,0,0.45)",
              }}
            >
              Investigación
            </h1>

            <p
              className="
                mt-6
                max-w-3xl
                text-lg
                md:text-xl
                leading-8
              "
              style={{
                color: "#f3e8ff",
                textShadow:
                  "0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              Análisis del comportamiento del saúco
              en productos tradicionales de pastelería
              mediante experimentación, evaluación
              sensorial y herramientas estadísticas.
            </p>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          PLANTEAMIENTO
      ===================================================== */}

      <section className="relative py-24 md:py-32 px-6 bg-white">

        <FloatingBerry
          size={14}
          top="20%"
          left="94%"
          delay={1}
          duration={6}
          opacity={0.35}
        />

        <div className="max-w-7xl mx-auto">

          <Reveal>

            <SectionTitle
              subtitle="Contexto"
              title="¿Qué estudia SambucusLab?"
              description="La investigación aborda la aplicación gastronómica del saúco y su comportamiento en productos tradicionales de pastelería."
            />

          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10">

            <Reveal direction="left">

              <article
                className="
                  rounded-[2rem]
                  border
                  border-purple-100
                  bg-gradient-to-br
                  from-purple-50
                  to-violet-50
                  p-8
                  md:p-10
                  h-full
                "
              >

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    font-bold
                  "
                  style={{ color: "#7e22ce" }}
                >
                  Problema de investigación
                </span>

                <h2
                  className="
                    mt-5
                    text-3xl
                    font-extrabold
                  "
                  style={{ color: "#2e1065" }}
                >
                  Uso limitado del saúco
                </h2>

                <p
                  className="
                    mt-6
                    leading-8
                  "
                  style={{ color: "#374151" }}
                >
                  El proyecto parte del interés por estudiar
                  el bajo uso del saúco dentro de la gastronomía
                  colombiana, particularmente en productos de
                  pastelería.
                </p>

                <p
                  className="
                    mt-5
                    leading-8
                  "
                  style={{ color: "#374151" }}
                >
                  A partir de esta situación se plantea analizar
                  cómo diferentes niveles de concentración pueden
                  modificar las características sensoriales de
                  productos desarrollados con este fruto.
                </p>

              </article>

            </Reveal>

            <Reveal direction="right">

              <article
                className="
                  rounded-[2rem]
                  bg-purple-950
                  p-8
                  md:p-10
                  h-full
                  relative
                  overflow-hidden
                "
              >

                <div
                  className="
                    absolute
                    -right-24
                    -top-24
                    w-72
                    h-72
                    rounded-full
                    bg-purple-500/20
                    blur-3xl
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
                    style={{
                      color: "#d8b4fe",
                      textShadow:
                        "0 2px 6px rgba(0,0,0,0.35)",
                    }}
                  >
                    Propósito
                  </span>

                  <h2
                    className="
                      mt-5
                      text-3xl
                      font-extrabold
                    "
                    style={{
                      color: "#ffffff",
                      textShadow:
                        "0 3px 10px rgba(0,0,0,0.4)",
                    }}
                  >
                    Experimentar y comparar
                  </h2>

                  <p
                    className="
                      mt-6
                      leading-8
                    "
                    style={{
                      color: "#f3e8ff",
                      textShadow:
                        "0 2px 7px rgba(0,0,0,0.35)",
                    }}
                  >
                    El estudio busca relacionar las
                    concentraciones de saúco con las
                    características sensoriales percibidas
                    en preparaciones de pastelería.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">

                    <div
                      className="
                        rounded-2xl
                        bg-white/10
                        border
                        border-white/10
                        p-5
                      "
                    >
                      <p
                        className="text-3xl font-extrabold"
                        style={{
                          color: "#ffffff",
                          textShadow:
                            "0 2px 7px rgba(0,0,0,0.4)",
                        }}
                      >
                        3
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          uppercase
                        "
                        style={{ color: "#d8b4fe" }}
                      >
                        concentraciones
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        bg-white/10
                        border
                        border-white/10
                        p-5
                      "
                    >
                      <p
                        className="text-3xl font-extrabold"
                        style={{
                          color: "#ffffff",
                          textShadow:
                            "0 2px 7px rgba(0,0,0,0.4)",
                        }}
                      >
                        2
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          uppercase
                        "
                        style={{ color: "#d8b4fe" }}
                      >
                        productos
                      </p>
                    </div>

                  </div>

                </div>

              </article>

            </Reveal>

          </div>
        </div>
      </section>

      {/* =====================================================
          ETAPAS
      ===================================================== */}

      <section
        className="
          relative
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
              subtitle="Metodología"
              title="De la investigación al análisis"
              description="El proyecto integra diferentes etapas para conectar la experimentación gastronómica con la evaluación estadística."
            />

          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">

            {etapas.map((etapa, index) => {

              const Icon = etapa.icono;

              return (
                <Reveal
                  key={etapa.numero}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.1}
                >

                  <motion.article
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[2rem]
                      bg-white
                      border
                      border-purple-100
                      p-8
                      shadow-sm
                    "
                    whileHover={{
                      y: -8,
                      scale: 1.015,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 20,
                    }}
                  >

                    <div
                      className="
                        absolute
                        -right-16
                        -top-16
                        w-48
                        h-48
                        rounded-full
                        bg-purple-200/40
                        blur-3xl
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />

                    <div className="relative flex gap-6">

                      <div
                        className="
                          flex-shrink-0
                          w-16
                          h-16
                          rounded-2xl
                          bg-gradient-to-br
                          from-purple-800
                          to-violet-500
                          flex
                          items-center
                          justify-center
                          shadow-lg
                          group-hover:rotate-6
                          group-hover:scale-110
                          transition-all
                          duration-300
                        "
                        style={{
                          color: "#ffffff",
                          textShadow:
                            "0 2px 6px rgba(0,0,0,0.35)",
                        }}
                      >
                        <Icon className="text-xl" />
                      </div>

                      <div>

                        <span
                          className="
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            font-bold
                          "
                          style={{ color: "#9333ea" }}
                        >
                          Etapa {etapa.numero}
                        </span>

                        <h3
                          className="
                            mt-2
                            text-2xl
                            font-bold
                          "
                          style={{ color: "#2e1065" }}
                        >
                          {etapa.titulo}
                        </h3>

                        <p
                          className="
                            mt-3
                            leading-7
                          "
                          style={{ color: "#374151" }}
                        >
                          {etapa.texto}
                        </p>

                      </div>

                    </div>

                  </motion.article>

                </Reveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          MUESTRA Y CONTEXTO
      ===================================================== */}

      <section className="py-24 md:py-32 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <Reveal>

            <SectionTitle
              subtitle="Trabajo de campo"
              title="Obtención y preparación del fruto"
              description="El proceso experimental contempló diferentes condiciones para la obtención, conservación y preparación del saúco."
            />

          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6">

            <Reveal delay={0}>

              <motion.article
                className="
                  rounded-[2rem]
                  bg-purple-50
                  border
                  border-purple-100
                  p-8
                  h-full
                "
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >

                <FaMapMarkerAlt
                  className="text-2xl"
                  style={{ color: "#6b21a8" }}
                />

                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                  "
                  style={{ color: "#2e1065" }}
                >
                  Ubicación
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                  "
                  style={{ color: "#374151" }}
                >
                  Los frutos fueron recolectados en espacios
                  públicos de Bogotá, en la localidad de
                  Engativá, cerca de la zona de Titan Plaza.
                </p>

              </motion.article>

            </Reveal>

            <Reveal delay={0.1}>

              <motion.article
                className="
                  rounded-[2rem]
                  bg-purple-50
                  border
                  border-purple-100
                  p-8
                  h-full
                "
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >

                <FaClipboardCheck
                  className="text-2xl"
                  style={{ color: "#6b21a8" }}
                />

                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                  "
                  style={{ color: "#2e1065" }}
                >
                  Características
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                  "
                  style={{ color: "#374151" }}
                >
                  Se trabajó con frutos maduros, caracterizados
                  por una coloración púrpura oscura y las
                  características físicas observadas durante
                  el proceso.
                </p>

              </motion.article>

            </Reveal>

            <Reveal delay={0.2}>

              <motion.article
                className="
                  rounded-[2rem]
                  bg-purple-50
                  border
                  border-purple-100
                  p-8
                  h-full
                "
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >

                <FaFlask
                  className="text-2xl"
                  style={{ color: "#6b21a8" }}
                />

                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                  "
                  style={{ color: "#2e1065" }}
                >
                  Conservación
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                  "
                  style={{ color: "#374151" }}
                >
                  Después de la recolección, los frutos fueron
                  lavados, transportados y sometidos a
                  condiciones de refrigeración o congelación
                  según la etapa del proceso.
                </p>

              </motion.article>

            </Reveal>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONCENTRACIONES
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          py-24
          md:py-32
          px-6
          bg-purple-950
          text-white
        "
      >

        <FloatingBerry
          size={16}
          top="15%"
          left="8%"
          delay={0}
          duration={7}
          opacity={0.5}
        />

        <FloatingBerry
          size={22}
          top="75%"
          left="92%"
          delay={2}
          duration={8}
          opacity={0.4}
        />

        <div className="relative max-w-7xl mx-auto">

          <Reveal>

            <div className="max-w-3xl mx-auto text-center">

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  font-bold
                "
                style={{
                  color: "#d8b4fe",
                  textShadow:
                    "0 2px 6px rgba(0,0,0,0.4)",
                }}
              >
                Diseño experimental
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
                Concentraciones estudiadas
              </h2>

              <p
                className="
                  mt-5
                  leading-8
                "
                style={{
                  color: "#f3e8ff",
                  textShadow:
                    "0 2px 7px rgba(0,0,0,0.35)",
                }}
              >
                Las formulaciones utilizaron diferentes
                relaciones entre fruto y agua para obtener
                los niveles experimentales.
              </p>

            </div>

          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-6">

            {concentraciones.map((item, index) => (

              <Reveal
                key={item.brix}
                direction="up"
                delay={index * 0.12}
              >

                <motion.article
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    bg-white/10
                    border
                    border-white/10
                    backdrop-blur-md
                    p-8
                  "
                  whileHover={{
                    y: -12,
                    scale: 1.04,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 230,
                  }}
                >

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-fuchsia-500/10
                      to-transparent
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
                      style={{
                        color: "#d8b4fe",
                        textShadow:
                          "0 2px 6px rgba(0,0,0,0.35)",
                      }}
                    >
                      {item.nivel}
                    </span>

                    <p
                      className="
                        mt-5
                        text-6xl
                        font-black
                      "
                      style={{
                        color: "#ffffff",
                        textShadow:
                          "0 3px 12px rgba(0,0,0,0.45)",
                      }}
                    >
                      {item.brix}
                    </p>

                    <p
                      className="font-semibold"
                      style={{ color: "#d8b4fe" }}
                    >
                      Brix
                    </p>

                    <div
                      className="
                        mt-7
                        pt-6
                        border-t
                        border-white/10
                      "
                    >

                      <p
                        className="text-sm"
                        style={{ color: "#d8b4fe" }}
                      >
                        Relación experimental
                      </p>

                      <p
                        className="
                          mt-3
                          text-lg
                          font-semibold
                        "
                        style={{
                          color: "#ffffff",
                          textShadow:
                            "0 2px 6px rgba(0,0,0,0.35)",
                        }}
                      >
                        {item.fruta} de fruto
                      </p>

                      <p
                        style={{
                          color: "#e9d5ff",
                          textShadow:
                            "0 2px 6px rgba(0,0,0,0.35)",
                        }}
                      >
                        +
                      </p>

                      <p
                        className="
                          text-lg
                          font-semibold
                        "
                        style={{
                          color: "#ffffff",
                          textShadow:
                            "0 2px 6px rgba(0,0,0,0.35)",
                        }}
                      >
                        {item.agua} de agua
                      </p>

                    </div>

                  </div>

                </motion.article>

              </Reveal>

            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          MÉTODOS ESTADÍSTICOS
      ===================================================== */}

      <section className="py-24 md:py-32 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <Reveal>

            <SectionTitle
              subtitle="Análisis"
              title="Herramientas estadísticas"
              description="El proyecto contempla diferentes técnicas para analizar los datos obtenidos durante la evaluación."
            />

          </Reveal>

          <div className="flex flex-wrap justify-center gap-4">

            {metodos.map((metodo, index) => (

              <Reveal
                key={metodo}
                direction="zoom"
                delay={index * 0.05}
              >

                <motion.div
                  className="
                    rounded-2xl
                    border
                    border-purple-100
                    bg-purple-50
                    px-6
                    py-4
                    font-semibold
                    shadow-sm
                  "
                  style={{ color: "#581c87" }}
                  whileHover={{
                    y: -6,
                    scale: 1.06,
                    rotate: index % 2 === 0 ? 2 : -2,
                  }}
                >
                  {metodo}
                </motion.div>

              </Reveal>

            ))}

          </div>

          <Reveal delay={0.2}>

            <div className="mt-14 text-center">

              <GlowButton
                to="/resultados"
                variant="primary"
              >
                Ver resultados
              </GlowButton>

            </div>

          </Reveal>

        </div>
      </section>

    </main>
  );
}