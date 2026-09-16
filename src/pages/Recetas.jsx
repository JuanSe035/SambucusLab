import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaUtensils,
  FaFlask,
  FaLeaf,
  FaCamera,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import FloatingBerry from "../components/FloatingBerry";
import GlowButton from "../components/GlowButton";

const recetas = [
  {
    nombre: "Pavlova con saúco",
    tipo: "Postre · Merengue",
    numero: "01",
    color: "dark",
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
    concentraciones: [
      "4° Brix",
      "7° Brix",
      "10° Brix",
    ],
  },
  {
    nombre: "Mousse de saúco",
    tipo: "Postre · Mousse",
    numero: "02",
    color: "light",
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
    concentraciones: [
      "4° Brix",
      "7° Brix",
      "10° Brix",
    ],
  },
  {
    nombre: "Almíbar de saúco",
    tipo: "Preparación base",
    numero: "03",
    color: "purple",
    descripcion:
      "Preparación desarrollada durante una etapa del proceso experimental para trabajar la incorporación del saúco en una preparación líquida concentrada.",
    ingredientes: [
      "Saúco",
      "Agua",
      "Azúcar",
    ],
    concentraciones: [
      "4° Brix",
      "7° Brix",
      "10° Brix",
    ],
  },
];

const imagenes = [
  {
    titulo: "Fruto de saúco",
    categoria: "Materia prima",
    url: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=1000&q=90",
  },
  {
    titulo: "Preparación gastronómica",
    categoria: "Proceso",
    url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=90",
  },
  {
    titulo: "Pastelería",
    categoria: "Aplicación",
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=90",
  },
  {
    titulo: "Presentación",
    categoria: "Producto",
    url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=90",
  },
];

function Recipe3DCard({ receta, index }) {
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const handleMouseMove = (event) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  const dark = receta.color === "dark";

  return (
    <Reveal
      direction={index % 2 === 0 ? "left" : "right"}
      delay={index * 0.1}
    >
      <motion.article
        className="
          relative
          min-h-[600px]
          cursor-pointer
        "
        style={{
          perspective: 1200,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* =================================================
            SOMBRA
        ================================================= */}

        <motion.div
          className="
            absolute
            inset-8
            rounded-[2.5rem]
            bg-purple-700/30
            blur-3xl
          "
          animate={{
            opacity: hovered ? 0.75 : 0.25,
            scale: hovered ? 1.05 : 0.95,
          }}
        />

        {/* =================================================
            TARJETA 3D
        ================================================= */}

        <motion.div
          className={`
            relative
            h-full
            min-h-[600px]
            overflow-hidden
            rounded-[2.5rem]
            border
            p-8
            md:p-10
            transform-gpu
            ${
              dark
                ? "bg-gradient-to-br from-purple-950 via-violet-900 to-purple-800 border-purple-700/50"
                : receta.color === "light"
                ? "bg-gradient-to-br from-white via-purple-50 to-violet-100 border-purple-100"
                : "bg-gradient-to-br from-purple-800 via-purple-700 to-fuchsia-700 border-purple-500/30"
            }
          `}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          animate={{
            scale: hovered ? 1.015 : 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {/* =================================================
              GLOW
          ================================================= */}

          <motion.div
            className="
              absolute
              -right-24
              -top-24
              w-80
              h-80
              rounded-full
              bg-fuchsia-400/20
              blur-3xl
            "
            animate={{
              scale: hovered ? 1.3 : 1,
              opacity: hovered ? 0.8 : 0.35,
            }}
          />

          {/* =================================================
              NUMERO
          ================================================= */}

          <motion.span
            className={`
              absolute
              right-8
              top-5
              text-8xl
              font-black
              pointer-events-none
              ${
                dark
                  ? "text-white/5"
                  : "text-purple-900/5"
              }
            `}
            style={{
              transform: "translateZ(30px)",
            }}
          >
            {receta.numero}
          </motion.span>

          <div
            className="relative z-10"
            style={{
              transform: "translateZ(50px)",
            }}
          >
            {/* HEADER */}

            <div className="flex items-center justify-between">
              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  font-bold
                "
                style={{
                  color: dark ? "#d8b4fe" : "#7e22ce",
                }}
              >
                {receta.tipo}
              </span>

              <motion.div
                className={`
                  w-12
                  h-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  ${
                    dark
                      ? "bg-white/10 border border-white/10"
                      : "bg-purple-100"
                  }
                `}
                animate={{
                  rotate: hovered ? 8 : 0,
                  scale: hovered ? 1.1 : 1,
                }}
              >
                <FaUtensils
                  style={{
                    color: dark ? "#e9d5ff" : "#6b21a8",
                  }}
                />
              </motion.div>
            </div>

            {/* TITULO */}

            <h2
              className="
                mt-8
                text-4xl
                md:text-5xl
                font-extrabold
                leading-tight
              "
              style={{
                color: dark ? "#ffffff" : "#2e1065",
                textShadow: dark
                  ? "0 3px 10px rgba(255, 255, 255, 0.5)"
                  : "none",
              }}
            >
              {receta.nombre}
            </h2>

            <p
              className="
                mt-5
                leading-8
              "
              style={{
                color: dark ? "#f3e8ff" : "#374151",
                textShadow: dark
                  ? "0 2px 7px rgba(255, 255, 255, 0.52)"
                  : "none",
              }}
            >
              {receta.descripcion}
            </p>

            {/* CONCENTRACIONES */}

            <div className="mt-8">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  font-bold
                "
                style={{
                  color: dark ? "#d8b4fe" : "#7e22ce",
                }}
              >
                Concentraciones
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {receta.concentraciones.map(
                  (concentracion) => (
                    <motion.span
                      key={concentracion}
                      className={`
                        rounded-full
                        px-4
                        py-2
                        text-xs
                        font-bold
                        border
                        ${
                          dark
                            ? "bg-white/10 border-white/10"
                            : "bg-white border-purple-100"
                        }
                      `}
                      style={{
                        color: dark
                          ? "#f3e8ff"
                          : "#581c87",
                      }}
                      whileHover={{
                        y: -3,
                        scale: 1.05,
                      }}
                    >
                      {concentracion}
                    </motion.span>
                  )
                )}
              </div>
            </div>

            {/* INGREDIENTES */}

            <div className="mt-9">
              <div className="flex items-center gap-3">
                <FaLeaf
                  style={{
                    color: dark ? "#d8b4fe" : "#7e22ce",
                  }}
                />

                <h3
                  className="font-bold text-lg"
                  style={{
                    color: dark ? "#ffffff" : "#2e1065",
                    textShadow: dark
                      ? "0 2px 7px rgba(255, 255, 255, 0.51)"
                      : "none",
                  }}
                >
                  Ingredientes
                </h3>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-2.5">
                {receta.ingredientes.map(
                  (ingrediente) => (
                    <motion.div
                      key={ingrediente}
                      className={`
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        border
                        ${
                          dark
                            ? "bg-white/5 border-white/10"
                            : "bg-white border-purple-100"
                        }
                      `}
                      style={{
                        color: dark
                          ? "#f3e8ff"
                          : "#374151",
                      }}
                      whileHover={{
                        x: 5,
                      }}
                    >
                      {ingrediente}
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.article>
    </Reveal>
  );
}

export default function Recetas() {
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
        <FloatingBerry
          size={18}
          top="25%"
          left="8%"
          delay={0}
          duration={7}
          opacity={0.5}
        />

        <FloatingBerry
          size={24}
          top="65%"
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
                color: "#ffffff",
                textShadow:
                  "0 2px 7px rgba(255, 255, 255, 0.51)",
              }}
            >
              Gastronomía experimental
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
                  "0 4px 15px rgba(255, 255, 255, 0.53)",
              }}
            >
              Recetas
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
                textShadow:
                  "0 2px 8px rgba(255, 255, 255, 0.52)",
              }}
            >
              Preparaciones, concentraciones y registro
              visual del proceso gastronómico desarrollado
              en SambucusLab.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionTitle
              subtitle="Aplicación gastronómica"
              title="Experimentar también es crear"
              description="Las preparaciones permiten trasladar el análisis experimental al contexto gastronómico."
            />
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          TARJETAS 3D
      ===================================================== */}

      <section
        className="
          relative
          py-10
          pb-28
          px-6
          bg-white
        "
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {recetas.map((receta, index) => (
            <Recipe3DCard
              key={receta.nombre}
              receta={receta}
              index={index}
            />
          ))}
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
          bg-gradient-to-br
          from-purple-950
          via-violet-900
          to-purple-800
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
          left="90%"
          delay={2}
          duration={8}
          opacity={0.4}
        />

        <div className="relative max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">

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
                    "0 2px 6px rgba(255, 255, 255, 0.51)",
                }}
              >
                Base experimental
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
                    "0 3px 12px rgba(255, 255, 255, 0.56)",
                }}
              >
                Concentraciones utilizadas
              </h2>

              <p
                className="
                  mt-5
                  leading-8
                "
                style={{
                  color: "#f3e8ff",
                  textShadow:
                    "0 2px 7px rgba(255, 255, 255, 0.51)",
                }}
              >
                Los niveles de concentración se expresan
                en grados Brix y forman parte del diseño
                experimental.
              </p>

            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              ["4°", "150 g de fruto + 300 ml de agua"],
              ["7°", "150 g de fruto + 150 ml de agua"],
              ["10°", "250 g de fruto + 150 ml de agua"],
            ].map(([brix, formula], index) => (
              <Reveal
                key={brix}
                delay={index * 0.1}
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
                    text-center
                  "
                  whileHover={{
                    y: -10,
                    scale: 1.04,
                  }}
                >
                  <div
                    className="
                      absolute
                      inset-x-0
                      top-0
                      h-1
                      bg-gradient-to-r
                      from-purple-300
                      via-fuchsia-300
                      to-violet-300
                    "
                  />

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
                        "0 2px 6px rgba(255, 255, 255, 0.53)",
                    }}
                  >
                    Nivel 0{index + 1}
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
                        "0 3px 12px rgba(255, 255, 255, 0.51)",
                    }}
                  >
                    {brix}
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
                      className="
                        text-xs
                        uppercase
                        tracking-wider
                      "
                      style={{ color: "#d8b4fe" }}
                    >
                      Relación utilizada
                    </p>

                    <p
                      className="
                        mt-3
                        leading-7
                      "
                      style={{
                        color: "#f3e8ff",
                        textShadow:
                          "0 2px 6px rgba(255, 254, 254, 0.51)",
                      }}
                    >
                      {formula}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GALERÍA
      ===================================================== */}

      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <Reveal>
            <SectionTitle
              subtitle="Registro visual"
              title="Galería del proyecto"
              description="Una recopilación visual del ingrediente, las preparaciones y el contexto gastronómico."
            />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-7">
            {imagenes.map((imagen, index) => (
              <Reveal
                key={imagen.titulo}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.08}
              >
                <motion.article
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    bg-purple-950
                    shadow-lg
                  "
                  whileHover={{
                    y: -8,
                  }}
                >
                  <img
                    src={imagen.url}
                    alt={imagen.titulo}
                    className="
                      w-full
                      h-[380px]
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-purple-950
                      via-purple-950/20
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-7
                    "
                  >
                    <div className="flex items-center gap-2">

                      <FaCamera
                        style={{
                          color: "#d8b4fe",
                        }}
                      />

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
                            "0 2px 6px rgba(255, 255, 255, 0.51)",
                        }}
                      >
                        {imagen.categoria}
                      </span>

                    </div>

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-bold
                      "
                      style={{
                        color: "#ffffff",
                        textShadow:
                          "0 3px 10px rgba(255, 255, 255, 0.52)",
                      }}
                    >
                      {imagen.titulo}
                    </h3>
                  </div>

                  <span
                    className="
                      absolute
                      top-5
                      right-5
                      w-10
                      h-10
                      rounded-full
                      bg-white/10
                      border
                      border-white/10
                      backdrop-blur-md
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-bold
                    "
                    style={{
                      color: "#ffffff",
                      textShadow:
                        "0 2px 6px rgba(255, 255, 255, 0.51)",
                    }}
                  >
                    0{index + 1}
                  </span>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESO
      ===================================================== */}

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
              subtitle="Proceso"
              title="Del ingrediente al producto"
              description="La investigación conecta diferentes etapas del trabajo gastronómico."
            />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                numero: "01",
                titulo: "Materia prima",
                texto:
                  "Selección y preparación del fruto de saúco para el desarrollo experimental.",
              },
              {
                numero: "02",
                titulo: "Transformación",
                texto:
                  "Incorporación del ingrediente en preparaciones y diferentes niveles de concentración.",
              },
              {
                numero: "03",
                titulo: "Evaluación",
                texto:
                  "Observación y valoración de las características sensoriales de los productos.",
              },
            ].map((item, index) => (
              <Reveal
                key={item.numero}
                delay={index * 0.1}
              >
                <motion.article
                  className="
                    rounded-[2rem]
                    bg-white
                    border
                    border-purple-100
                    p-8
                    shadow-sm
                    group
                  "
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                >
                  <span
                    className="
                      text-5xl
                      font-black
                      group-hover:text-purple-300
                      transition-colors
                    "
                    style={{
                      color: "#e9d5ff",
                    }}
                  >
                    {item.numero}
                  </span>

                  <h3
                    className="
                      mt-5
                      text-2xl
                      font-bold
                    "
                    style={{ color: "#2e1065" }}
                  >
                    {item.titulo}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                    "
                    style={{ color: "#374151" }}
                  >
                    {item.texto}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CIERRE
      ===================================================== */}

      <section
        className="
          py-24
          px-6
          bg-purple-950
        "
      >
        <div className="max-w-4xl mx-auto text-center">

          <Reveal direction="zoom">

            <FaFlask
              className="
                mx-auto
                text-3xl
              "
              style={{
                color: "#d8b4fe",
              }}
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
                  "0 3px 12px rgba(255, 255, 255, 0.51)",
              }}
            >
              De la investigación a la preparación
            </h2>

            <p
              className="
                mt-6
                leading-8
                text-lg
              "
              style={{
                color: "#f3e8ff",
                textShadow:
                  "0 2px 7px rgba(255, 255, 255, 0.52)",
              }}
            >
              Las recetas y el registro visual permiten
              trasladar el análisis experimental al
              contexto gastronómico.
            </p>

            <div className="mt-9">
              <GlowButton
                to="/resultados"
                variant="light"
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