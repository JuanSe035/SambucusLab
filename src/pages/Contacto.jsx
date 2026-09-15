import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaArrowRight,
  FaMapMarkerAlt,
  FaFlask,
} from "react-icons/fa";

import Reveal from "../components/Reveal";
import FloatingBerry from "../components/FloatingBerry";
import GlowButton from "../components/GlowButton";

export default function Contacto() {
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
        "
      >
        <FloatingBerry
          size={16}
          top="20%"
          left="8%"
          delay={0}
          duration={7}
          opacity={0.5}
        />

        <FloatingBerry
          size={22}
          top="70%"
          left="90%"
          delay={1}
          duration={8}
          opacity={0.4}
        />

        <FloatingBerry
          size={12}
          top="42%"
          left="56%"
          delay={0.5}
          duration={6}
          opacity={0.35}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">

          <Reveal>

            {/* ETIQUETA */}

            <span
              className="
                inline-flex
                px-4
                py-2
                rounded-full
                bg-white/15
                border
                border-white/25
                text-xs
                uppercase
                tracking-[0.22em]
                font-bold
              "
              style={{
                color: "#ffffff",
                textShadow: "0 2px 8px rgba(0,0,0,0.35)",
              }}
            >
              SambucusLab
            </span>

            {/* TÍTULO PRINCIPAL */}

            <h1
              className="
                mt-7
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                leading-none
              "
              style={{
                color: "#ffffff",
                textShadow:
                  "0 3px 12px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              Contacto
            </h1>

            {/* SUBTÍTULO */}

            <p
              className="
                mt-7
                max-w-3xl
                text-lg
                md:text-xl
                leading-8
                font-medium
              "
              style={{
                color: "#f3e8ff",
                textShadow: "0 2px 7px rgba(0,0,0,0.35)",
              }}
            >
              Información de contacto y contexto académico
              del proyecto de investigación.
            </p>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          INFORMACIÓN DE CONTACTO
      ===================================================== */}

      <section className="py-24 md:py-32 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* =================================================
                COLUMNA IZQUIERDA
            ================================================= */}

            <Reveal direction="left">

              <div>

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    font-bold
                  "
                  style={{
                    color: "#7e22ce",
                  }}
                >
                  Proyecto académico
                </span>

                {/* TÍTULO */}

                <h2
                  className="
                    mt-5
                    text-4xl
                    md:text-5xl
                    font-black
                    leading-tight
                  "
                  style={{
                    color: "#2e1065",
                  }}
                >
                  Hablemos sobre

                  <span
                    className="block"
                    style={{
                      color: "#9333ea",
                    }}
                  >
                    SambucusLab
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    leading-8
                    max-w-xl
                    text-lg
                    font-medium
                  "
                  style={{
                    color: "#374151",
                  }}
                >
                  SambucusLab es una plataforma desarrollada
                  para presentar el proceso de investigación
                  relacionado con la aplicación del saúco
                  en productos tradicionales de pastelería.
                </p>

                {/* TARJETAS DE INFORMACIÓN */}

                <div className="mt-10 space-y-4">

                  {/* ÁREA */}

                  <motion.div
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      bg-purple-50
                      border
                      border-purple-100
                      p-5
                      shadow-sm
                    "
                    whileHover={{
                      x: 7,
                      scale: 1.015,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >

                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-purple-900
                        flex
                        items-center
                        justify-center
                        shadow-md
                      "
                      style={{
                        color: "#ffffff",
                      }}
                    >
                      <FaFlask />
                    </div>

                    <div>

                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-wider
                          font-bold
                        "
                        style={{
                          color: "#7e22ce",
                        }}
                      >
                        Área
                      </p>

                      <p
                        className="
                          mt-1
                          font-bold
                          text-lg
                        "
                        style={{
                          color: "#2e1065",
                        }}
                      >
                        Investigación gastronómica
                      </p>

                    </div>

                  </motion.div>

                  {/* CONTEXTO */}

                  <motion.div
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      bg-purple-50
                      border
                      border-purple-100
                      p-5
                      shadow-sm
                    "
                    whileHover={{
                      x: 7,
                      scale: 1.015,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >

                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-purple-900
                        flex
                        items-center
                        justify-center
                        shadow-md
                      "
                      style={{
                        color: "#ffffff",
                      }}
                    >
                      <FaMapMarkerAlt />
                    </div>

                    <div>

                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-wider
                          font-bold
                        "
                        style={{
                          color: "#7e22ce",
                        }}
                      >
                        Contexto
                      </p>

                      <p
                        className="
                          mt-1
                          font-bold
                          text-lg
                        "
                        style={{
                          color: "#2e1065",
                        }}
                      >
                        Bogotá, Colombia
                      </p>

                    </div>

                  </motion.div>

                </div>

              </div>

            </Reveal>

            {/* =================================================
                TARJETA DEL PROYECTO
            ================================================= */}

            <Reveal direction="right">

              <motion.div
                className="
                  relative
                  overflow-hidden
                  rounded-[2.5rem]
                  bg-gradient-to-br
                  from-purple-950
                  via-violet-900
                  to-purple-800
                  p-8
                  md:p-10
                  shadow-[0_25px_70px_rgba(76,29,149,0.2)]
                "
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

                {/* BRILLO SUPERIOR */}

                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    w-72
                    h-72
                    rounded-full
                    bg-fuchsia-500/10
                    blur-3xl
                  "
                />

                {/* BRILLO INFERIOR */}

                <div
                  className="
                    absolute
                    -bottom-20
                    -left-20
                    w-72
                    h-72
                    rounded-full
                    bg-purple-400/10
                    blur-3xl
                  "
                />

                <div className="relative">

                  {/* ICONO */}

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-white/15
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      shadow-lg
                    "
                  >
                    <FaEnvelope
                      className="text-2xl"
                      style={{
                        color: "#ffffff",
                      }}
                    />
                  </div>

                  {/* TÍTULO DE TARJETA */}

                  <h3
                    className="
                      mt-7
                      text-3xl
                      md:text-4xl
                      font-black
                      leading-tight
                    "
                    style={{
                      color: "#ffffff",
                      textShadow:
                        "0 3px 10px rgba(0,0,0,0.4)",
                    }}
                  >
                    Información del proyecto
                  </h3>

                  {/* TEXTO */}

                  <p
                    className="
                      mt-5
                      text-lg
                      leading-8
                      font-medium
                    "
                    style={{
                      color: "#f3e8ff",
                      textShadow:
                        "0 2px 6px rgba(0,0,0,0.25)",
                    }}
                  >
                    Para consultar el código y la estructura
                    técnica del proyecto puedes acceder al
                    repositorio.
                  </p>

                  {/* BOTÓN */}

                  <div className="mt-8">

                    <GlowButton
                      to="https://github.com/JuanSe035/SambucusLab"
                      variant="light"
                    >
                      Ver repositorio
                    </GlowButton>

                  </div>

                </div>

              </motion.div>

            </Reveal>

          </div>

        </div>

      </section>

      {/* =====================================================
          FLUJO DE NAVEGACIÓN
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

        <div className="max-w-6xl mx-auto">

          <Reveal>

            <div className="text-center">

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  font-bold
                "
                style={{
                  color: "#7e22ce",
                }}
              >
                Explora SambucusLab
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  font-black
                "
                style={{
                  color: "#2e1065",
                }}
              >
                Continúa explorando
              </h2>

            </div>

          </Reveal>

          <div
            className="
              mt-12
              grid
              md:grid-cols-3
              gap-6
            "
          >

            {[
              {
                titulo: "Investigación",
                texto:
                  "Conoce la metodología y el diseño experimental.",
                enlace: "/investigacion",
              },
              {
                titulo: "Resultados",
                texto:
                  "Explora la evaluación sensorial y el análisis.",
                enlace: "/resultados",
              },
              {
                titulo: "Recetas",
                texto:
                  "Descubre las preparaciones desarrolladas.",
                enlace: "/recetas",
              },
            ].map((item, index) => (

              <Reveal
                key={item.titulo}
                delay={index * 0.1}
              >

                <motion.div
                  className="
                    group
                    rounded-[2rem]
                    bg-white
                    border
                    border-purple-100
                    p-7
                    shadow-sm
                  "
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                >

                  <h3
                    className="
                      text-xl
                      font-black
                    "
                    style={{
                      color: "#2e1065",
                    }}
                  >
                    {item.titulo}
                  </h3>

                  <p
                    className="
                      mt-3
                      leading-7
                    "
                    style={{
                      color: "#374151",
                    }}
                  >
                    {item.texto}
                  </p>

                  <Link
                    to={item.enlace}
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      transition-colors
                    "
                    style={{
                      color: "#7e22ce",
                    }}
                  >
                    Explorar

                    <FaArrowRight
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-2
                      "
                    />

                  </Link>

                </motion.div>

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
              className="mx-auto text-3xl"
              style={{
                color: "#d8b4fe",
              }}
            />

            <h2
              className="
                mt-6
                text-4xl
                md:text-5xl
                font-black
              "
              style={{
                color: "#ffffff",
                textShadow:
                  "0 3px 12px rgba(0,0,0,0.45)",
              }}
            >
              SambucusLab
            </h2>

            <p
              className="
                mt-5
                text-lg
                leading-8
                font-medium
              "
              style={{
                color: "#f3e8ff",
              }}
            >
              Investigación, gastronomía y análisis
              sensorial en una misma experiencia.
            </p>

            <div
              className="
                mt-8
                flex
                justify-center
              "
            >

              <GlowButton
                to="/"
                variant="light"
              >
                Volver al inicio
              </GlowButton>

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  );
}