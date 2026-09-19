import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaArrowDown, FaFlask, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

import frutoSauco from "../assets/icons/Fruto_Sauco.png";
import FloatingBerry from "./FloatingBerry";
import GlowButton from "./GlowButton";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const rotateX = useTransform(
    smoothY,
    [-300, 300],
    [5, -5]
  );

  const rotateY = useTransform(
    smoothX,
    [-300, 300],
    [-5, 5]
  );

  const handleMouseMove = (event) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(
      event.clientX -
        (rect.left + rect.width / 2)
    );

    mouseY.set(
      event.clientY -
        (rect.top + rect.height / 2)
    );
  };

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
      onMouseMove={handleMouseMove}
    >
      {/* =====================================================
          FONDOS LUMINOSOS
      ===================================================== */}

      <motion.div
        className="
          absolute
          -top-40
          -left-40
          w-[38rem]
          h-[38rem]
          rounded-full
          bg-fuchsia-500/15
          blur-[110px]
        "
        animate={{
          x: [0, 70, -20, 0],
          y: [0, 30, 80, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          -right-40
          top-20
          w-[34rem]
          h-[34rem]
          rounded-full
          bg-purple-400/15
          blur-[120px]
        "
        animate={{
          x: [0, -60, 20, 0],
          y: [0, 70, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          PARTÍCULAS DECORATIVAS
      ===================================================== */}

      <FloatingBerry
        size={14}
        top="18%"
        left="8%"
        delay={0}
        duration={7}
        opacity={0.65}
      />

      <FloatingBerry
        size={22}
        top="25%"
        left="87%"
        delay={1.5}
        duration={8}
        opacity={0.45}
      />

      <FloatingBerry
        size={10}
        top="72%"
        left="12%"
        delay={2}
        duration={6}
        opacity={0.7}
      />

      <FloatingBerry
        size={17}
        top="80%"
        left="82%"
        delay={3}
        duration={9}
        opacity={0.5}
      />

      {/* =====================================================
          CUADRÍCULA
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          pointer-events-none
          bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div
        className="
          relative
          z-20
          max-w-7xl
          mx-auto
          px-6
          py-20
          md:py-28
          min-h-[calc(100vh-76px)]
          flex
          items-center
        "
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center w-full">

          {/* =================================================
              TEXTO
          ================================================= */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
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
                  backdrop-blur-md
                  px-4
                  py-2
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  font-semibold
                  shadow-[0_0_25px_rgba(168,85,247,0.15)]
                "
                style={{
                  color: "#ffffff",
                  textShadow: "0 2px 7px rgba(255, 249, 249, 0.47)",
                }}
              >
                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-purple-300
                    shadow-[0_0_10px_rgba(216,180,254,1)]
                    animate-pulse
                  "
                />

                Proyecto de investigación gastronómica
              </span>
            </motion.div>

            <motion.h1
              className="
                mt-8
                text-5xl
                sm:text-6xl
                lg:text-7xl
                font-extrabold
                tracking-tight
                leading-[0.98]
              "
              style={{
                color: "#ffffff",
                textShadow:
                  "0 4px 16px rgba(255, 255, 255, 0.5), 0 1px 3px rgba(255, 255, 255, 0.6)",
              }}
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
            >
              Sambucus

              <span
                className="block text-glow"
                style={{
                  color: "#d8b4fe",
                  textShadow:
                    "0 3px 14px rgba(253, 251, 255, 0.45)",
                }}
              >
                Lab
              </span>
            </motion.h1>

            <motion.h2
              className="
                mt-7
                text-2xl
                md:text-3xl
                font-bold
                max-w-3xl
                leading-tight
              "
              style={{
                color: "#ffffff",
                textShadow:
                  "0 3px 12px rgba(255, 255, 255, 0.51)",
              }}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
            >
              Aplicación del saúco en productos
              tradicionales de pastelería
            </motion.h2>

            <motion.p
              className="
                mt-6
                max-w-2xl
                text-base
                md:text-lg
                leading-8
              "
              style={{
                color: "#f3e8ff",
                textShadow:
                  "0 2px 8px rgba(255, 255, 255, 0.51)",
              }}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
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

            {/* =================================================
                BOTONES
            ================================================= */}

            <motion.div
              className="
                mt-9
                flex
                flex-col
                sm:flex-row
                gap-4
              "
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.55,
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

            {/* =================================================
                MINI DATOS
            ================================================= */}

            <motion.div
              className="
                mt-12
                grid
                grid-cols-3
                max-w-xl
                border-t
                border-white/10
                pt-7
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 0.8,
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
                  style={{ color: "#d8b4fe" }}
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
                  style={{ color: "#d8b4fe" }}
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
                  style={{ color: "#d8b4fe" }}
                >
                  Brix
                </p>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              ELEMENTO VISUAL 3D
          ================================================= */}

          <motion.div
            className="
              relative
              hidden
              md:flex
              justify-center
              items-center
              min-h-[500px]
            "
            style={{
              perspective: 1200,
            }}
          >
            <motion.div
              className="
                relative
                w-[360px]
                h-[430px]
                lg:w-[430px]
                lg:h-[500px]
              "
              style={{
                rotateX,
                rotateY,
              }}
            >
              {/* Halo */}

              <motion.div
                className="
                  absolute
                  inset-[-50px]
                  rounded-full
                  bg-purple-400/20
                  blur-[80px]
                "
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Tarjeta principal */}

              <div
                className="
                  absolute
                  inset-5
                  rounded-[2.5rem]
                  overflow-hidden
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-xl
                  shadow-[0_30px_80px_rgba(0,0,0,0.3)]
                "
              >
                {/* Imagen */}

                <img
                  src={frutoSauco}
                  alt="Fruto de saúco"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    opacity-80
                    scale-105
                  "
                />

                {/* Overlay */}

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

                {/* Información */}

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

                    <span className="text-xs uppercase tracking-[0.2em] font-bold">
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

              <motion.div
                className="
                  absolute
                  -top-2
                  -right-4
                  z-30
                  rounded-2xl
                  bg-white
                  text-purple-950
                  px-5
                  py-4
                  shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                  border
                  border-purple-100
                "
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-purple-100
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaFlask className="text-purple-700" />
                  </div>

                  <div>
                    <p
                      className="text-xs font-bold uppercase"
                      style={{ color: "#9333ea" }}
                    >
                      Investigación
                    </p>

                    <p
                      className="text-sm font-extrabold"
                      style={{ color: "#2e1065" }}
                    >
                      Análisis sensorial
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  BADGE INFERIOR
              ================================================= */}

              <motion.div
                className="
                  absolute
                  -bottom-5
                  -left-5
                  z-30
                  rounded-2xl
                  bg-purple-950/80
                  backdrop-blur-xl
                  border
                  border-white/15
                  px-5
                  py-4
                  shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                "
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "#d8b4fe" }}
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
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          z-30
          hidden
          md:flex
          flex-col
          items-center
          gap-2
        "
        style={{
          color: "#e9d5ff",
          textShadow:
            "0 2px 7px rgba(249, 247, 247, 0.51)",
        }}
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Explorar
        </span>

        <FaArrowDown className="text-sm" />
      </motion.div>
    </section>
  );
}