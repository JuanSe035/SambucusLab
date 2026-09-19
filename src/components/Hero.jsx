import { motion } from "framer-motion";
import { FaArrowDown, FaFlask, FaLeaf } from "react-icons/fa";

import frutoSauco from "../assets/icons/Fruto_Sauco.png";
import FloatingBerry from "./FloatingBerry";
import GlowButton from "./GlowButton";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[calc(100vh-76px)]
        overflow-hidden
        bg-gradient-to-br
        from-purple-950
        via-violet-900
        to-purple-700
        text-white
      "
    >
      {/* =====================================================
          FONDOS DECORATIVOS ESTÁTICOS
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[38rem]
          w-[38rem]
          rounded-full
          bg-fuchsia-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-purple-300/10
        "
      />

      {/* =====================================================
          PARTÍCULAS
          ===================================================== */}

      <FloatingBerry
        size={14}
        top="18%"
        left="8%"
        delay={0}
        duration={8}
        opacity={0.6}
      />

      <FloatingBerry
        size={22}
        top="25%"
        left="87%"
        delay={1.5}
        duration={9}
        opacity={0.4}
      />

      {/* =====================================================
          CUADRÍCULA
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
          bg-[size:60px_60px]
          opacity-[0.06]
        "
      />

      {/* =====================================================
          CONTENIDO
          ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[calc(100vh-76px)]
          max-w-7xl
          items-center
          px-6
          py-20
          md:py-28
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
          "
        >
          {/* =================================================
              TEXTO
              ================================================= */}

          <div>
            {/* ETIQUETA */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
            >
              <span
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                "
                style={{
                  color: "#ffffff",
                  textShadow:
                    "0 2px 7px rgba(255, 249, 249, 0.47)",
                }}
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-purple-300
                  "
                />

                Proyecto de investigación gastronómica
              </span>
            </motion.div>

            {/* TÍTULO */}

            <motion.h1
              className="
                mt-8
                text-5xl
                font-extrabold
                leading-[0.98]
                tracking-tight
                sm:text-6xl
                lg:text-7xl
              "
              style={{
                color: "#ffffff",
                textShadow:
                  "0 4px 16px rgba(255, 255, 255, 0.5), 0 1px 3px rgba(255, 255, 255, 0.6)",
              }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: "easeOut",
              }}
            >
              Sambucus

              <span
                className="block"
                style={{
                  color: "#d8b4fe",
                  textShadow:
                    "0 3px 14px rgba(253, 251, 255, 0.45)",
                }}
              >
                Lab
              </span>
            </motion.h1>

            {/* SUBTÍTULO */}

            <motion.h2
              className="
                mt-7
                max-w-3xl
                text-2xl
                font-bold
                leading-tight
                md:text-3xl
              "
              style={{
                color: "#ffffff",
                textShadow:
                  "0 3px 12px rgba(255, 255, 255, 0.51)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.16,
                ease: "easeOut",
              }}
            >
              Aplicación del saúco en productos
              tradicionales de pastelería
            </motion.h2>

            {/* DESCRIPCIÓN */}

            <motion.p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                md:text-lg
              "
              style={{
                color: "#f3e8ff",
                textShadow:
                  "0 2px 8px rgba(255, 255, 255, 0.51)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.24,
                ease: "easeOut",
              }}
            >
              Investigación enfocada en analizar
              el comportamiento sensorial y
              gastronómico de diferentes
              concentraciones de saúco
              (<span className="italic">Sambucus nigra</span>)
              aplicadas a productos como pavlova
              y mousse.
            </motion.p>

            {/* BOTONES */}

            <motion.div
              className="
                mt-9
                flex
                flex-col
                gap-4
                sm:flex-row
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.32,
                ease: "easeOut",
              }}
            >
              <GlowButton
                to="/investigacion"
                variant="light"
              >
                Ver investigación
              </GlowButton>

              <GlowButton
                to="/resultados"
                variant="outline"
              >
                Explorar resultados
              </GlowButton>
            </motion.div>

            {/* MINI DATOS */}

            <motion.div
              className="
                mt-12
                grid
                max-w-xl
                grid-cols-3
                border-t
                border-white/10
                pt-7
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.42,
                ease: "easeOut",
              }}
            >
              <div>
                <p
                  className="text-3xl font-extrabold"
                  style={{
                    color: "#ffffff",
                    textShadow:
                      "0 2px 8px rgba(255, 255, 255, 0.53)",
                  }}
                >
                  4°
                </p>

                <p
                  className="mt-1 text-xs uppercase tracking-wider"
                  style={{
                    color: "#d8b4fe",
                  }}
                >
                  Brix
                </p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <p
                  className="text-3xl font-extrabold"
                  style={{
                    color: "#ffffff",
                    textShadow:
                      "0 2px 8px rgba(255, 253, 253, 0.52)",
                  }}
                >
                  7°
                </p>

                <p
                  className="mt-1 text-xs uppercase tracking-wider"
                  style={{
                    color: "#d8b4fe",
                  }}
                >
                  Brix
                </p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <p
                  className="text-3xl font-extrabold"
                  style={{
                    color: "#ffffff",
                    textShadow:
                      "0 2px 8px rgba(255, 255, 255, 0.51)",
                  }}
                >
                  10°
                </p>

                <p
                  className="mt-1 text-xs uppercase tracking-wider"
                  style={{
                    color: "#d8b4fe",
                  }}
                >
                  Brix
                </p>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              ELEMENTO VISUAL
              ================================================= */}

          <div
            className="
              relative
              hidden
              min-h-[500px]
              items-center
              justify-center
              md:flex
            "
          >
            <div
              className="
                relative
                h-[430px]
                w-[360px]
                lg:h-[500px]
                lg:w-[430px]
              "
            >
              {/* HALO ESTÁTICO */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[-30px]
                  rounded-full
                  bg-purple-400/10
                "
              />

              {/* TARJETA */}

              <div
                className="
                  absolute
                  inset-5
                  overflow-hidden
                  rounded-[2.5rem]
                  border
                  border-white/20
                  bg-white/10
                  shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                "
              >
                {/* IMAGEN */}

                <img
                  src={frutoSauco}
                  alt="Fruto de saúco"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    scale-105
                    object-cover
                    opacity-80
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-purple-950
                    via-purple-950/30
                    to-purple-900/10
                  "
                />

                {/* INFORMACIÓN */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-8
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                    style={{
                      color: "#e9d5ff",
                      textShadow:
                        "0 2px 7px rgba(255, 253, 253, 0.51)",
                    }}
                  >
                    <FaLeaf />

                    <span className="text-xs font-bold uppercase tracking-[0.2em]">
                      Sambucus nigra
                    </span>
                  </div>

                  <h3
                    className="mt-3 text-3xl font-extrabold"
                    style={{
                      color: "#ffffff",
                      textShadow:
                        "0 3px 10px rgba(255, 255, 255, 0.54)",
                    }}
                  >
                    El fruto
                  </h3>

                  <p
                    className="mt-3 text-sm leading-6"
                    style={{
                      color: "#f3e8ff",
                      textShadow:
                        "0 2px 7px rgba(255, 255, 255, 0.49)",
                    }}
                  >
                    Color, aroma y sabor como
                    variables de interés
                    gastronómico.
                  </p>
                </div>
              </div>

              {/* =================================================
                  BADGE SUPERIOR
                  ================================================= */}

              <div
                className="
                  absolute
                  -right-4
                  -top-2
                  z-30
                  rounded-2xl
                  border
                  border-purple-100
                  bg-white
                  px-5
                  py-4
                  text-purple-950
                  shadow-[0_12px_30px_rgba(0,0,0,0.22)]
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-purple-100
                    "
                  >
                    <FaFlask className="text-purple-700" />
                  </div>

                  <div>
                    <p
                      className="text-xs font-bold uppercase"
                      style={{
                        color: "#9333ea",
                      }}
                    >
                      Investigación
                    </p>

                    <p
                      className="text-sm font-extrabold"
                      style={{
                        color: "#2e1065",
                      }}
                    >
                      Análisis sensorial
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  BADGE INFERIOR
                  ================================================= */}

              <div
                className="
                  absolute
                  -bottom-5
                  -left-5
                  z-30
                  rounded-2xl
                  border
                  border-white/15
                  bg-purple-950/90
                  px-5
                  py-4
                  shadow-[0_12px_30px_rgba(0,0,0,0.22)]
                "
              >
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{
                    color: "#d8b4fe",
                  }}
                >
                  Productos
                </p>

                <p
                  className="mt-1 font-bold"
                  style={{
                    color: "#ffffff",
                    textShadow:
                      "0 2px 7px rgba(243, 243, 243, 0.51)",
                  }}
                >
                  Pavlova · Mousse
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          INDICADOR DE SCROLL
          ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          md:flex
        "
        style={{
          color: "#e9d5ff",
          textShadow:
            "0 2px 7px rgba(249, 247, 247, 0.51)",
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Explorar
        </span>

        <FaArrowDown className="text-sm" />
      </div>
    </section>
  );
}