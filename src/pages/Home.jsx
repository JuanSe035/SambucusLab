import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight, FaFlask, FaLeaf, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

import frutoSauco from "../assets/icons/Fruto_Sauco2.png";
import pavlovaImage from "../assets/icons/Pavlova.png";
import mousseImage from "../assets/icons/Mousse.png";
import almibarImage from "../assets/icons/Almibar.png";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import FloatingBerry from "../components/FloatingBerry";
import GlowButton from "../components/GlowButton";
import SensorialLab from "../components/SensorialLab";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -250]
  );

  return (
    <main className="overflow-hidden bg-[#faf8ff]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero />

      {/* =====================================================
          BARRA DE PROGRESO
      ===================================================== */}

      <motion.div
        className="
          fixed
          top-0
          left-0
          right-0
          h-1
          bg-gradient-to-r
          from-fuchsia-500
          via-purple-500
          to-violet-300
          origin-left
          z-[9999]
        "
        style={{
          scaleX: scrollYProgress,
        }}
      />

      {/* =====================================================
          INTRODUCCIÓN
      ===================================================== */}

      <section className="relative py-24 md:py-32 px-6 bg-white overflow-hidden">

        <FloatingBerry
          size={15}
          top="15%"
          left="5%"
          delay={0}
          duration={7}
          opacity={0.45}
        />

        <FloatingBerry
          size={22}
          top="70%"
          left="92%"
          delay={1}
          duration={8}
          opacity={0.35}
        />

        <motion.div
          style={{
            y: backgroundY,
          }}
          className="
            absolute
            -top-40
            right-[-10rem]
            w-[35rem]
            h-[35rem]
            rounded-full
            bg-purple-100/60
            blur-[100px]
            pointer-events-none
          "
        />

        <div className="relative max-w-7xl mx-auto">

          <Reveal direction="up">
            <SectionTitle
              subtitle="Sambucus nigra"
              title="Conociendo el saúco"
              description="El ingrediente central de nuestra investigación."
            />
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* TEXTO */}

            <Reveal direction="left">

              <div
                className="
                  space-y-6
                  leading-8
                "
                style={{
                  color: "#374151",
                }}
              >

                <p>
                  El saúco pertenece al género{" "}
                  <span
                    className="italic font-semibold"
                    style={{ color: "#581c87" }}
                  >
                    Sambucus
                  </span>{" "}
                  y presenta frutos pequeños agrupados en racimos.
                  En su estado maduro puede presentar una coloración
                  púrpura oscura característica.
                </p>

                <p>
                  En el contexto gastronómico, sus características de
                  color, aroma y sabor permiten estudiar su incorporación
                  en productos de pastelería y analizar su comportamiento
                  dentro de diferentes formulaciones.
                </p>

                <p>
                  SambucusLab estudia este potencial mediante diferentes
                  concentraciones aplicadas a productos tradicionales
                  de pastelería, relacionando la formulación con la
                  percepción sensorial.
                </p>

              </div>

              {/* DATOS */}

              <div className="mt-10 grid sm:grid-cols-2 gap-4">

                {[
                  ["Género", "Sambucus"],
                  ["Especie", "Sambucus nigra"],
                  ["Fruto", "Baya pequeña de tonalidad oscura"],
                  ["Color", "Púrpura intenso en estado maduro"],
                ].map(([title, text], index) => (

                  <motion.div
                    key={title}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      bg-purple-50
                      border
                      border-purple-100
                      p-5
                      cursor-default
                    "
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.6,
                    }}
                    whileHover={{
                      y: -7,
                      scale: 1.02,
                    }}
                  >

                    <div
                      className="
                        absolute
                        -right-8
                        -top-8
                        w-24
                        h-24
                        rounded-full
                        bg-purple-200/30
                        blur-2xl
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                      "
                    />

                    <p
                      className="
                        relative
                        text-xs
                        uppercase
                        tracking-[0.15em]
                        font-bold
                      "
                      style={{ color: "#7e22ce" }}
                    >
                      {title}
                    </p>

                    <p
                      className="
                        relative
                        mt-2
                        font-semibold
                      "
                      style={{ color: "#2e1065" }}
                    >
                      {text}
                    </p>

                  </motion.div>

                ))}

              </div>

            </Reveal>

            {/* IMAGEN */}

            <Reveal direction="right">

              <motion.div
                className="
                  relative
                  mx-auto
                  max-w-xl
                  w-full
                "
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.5,
                }}
              >

                <div
                  className="
                    absolute
                    inset-[-30px]
                    rounded-full
                    bg-purple-300/20
                    blur-[60px]
                  "
                />

                <motion.div
                  className="
                    relative
                    overflow-hidden
                    rounded-[2.5rem]
                    border
                    border-purple-100
                    shadow-[0_30px_70px_rgba(76,29,149,0.18)]
                  "
                  whileHover={{
                    rotateX: 2,
                    rotateY: -2,
                  }}
                  style={{
                    perspective: 1000,
                  }}
                >

                  <img
                  src={frutoSauco}
                  alt="Fruto de saúco"
                    className="
                      w-full
                      h-[420px]
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-purple-950/60
                      via-transparent
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-8
                    "
                    style={{
                      color: "#ffffff",
                      textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                    }}
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          w-10
                          h-10
                          rounded-xl
                          bg-white/10
                          border
                          border-white/15
                          backdrop-blur-md
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <FaLeaf className="text-purple-200" />
                      </div>

                      <div>

                        <p
                          className="
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            font-bold
                          "
                          style={{ color: "#e9d5ff" }}
                        >
                          Ingrediente central
                        </p>

                        <p
                          className="text-lg font-bold"
                          style={{ color: "#ffffff" }}
                        >
                          Sambucus nigra
                        </p>

                      </div>

                    </div>

                  </div>

                </motion.div>

              </motion.div>

            </Reveal>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROPIEDADES
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
          overflow-hidden
        "
      >

        <FloatingBerry
          size={18}
          top="20%"
          left="94%"
          delay={1}
          duration={7}
          opacity={0.4}
        />

        <FloatingBerry
          size={12}
          top="80%"
          left="7%"
          delay={2}
          duration={6}
          opacity={0.5}
        />

        <div className="
          absolute
          -left-40
          top-20
          w-96
          h-96
          rounded-full
          bg-fuchsia-200/30
          blur-[100px]
        " />

        <div className="relative max-w-7xl mx-auto">

          <Reveal>

            <SectionTitle
              subtitle="Composición"
              title="Propiedades de interés"
              description="El saúco presenta diferentes componentes de interés para el estudio gastronómico y alimentario."
            />

          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                number: "01",
                icon: "A",
                title: "Antocianinas",
                text:
                  "Pigmentos responsables de tonalidades rojizas, violetas y púrpuras presentes en diferentes frutos.",
              },
              {
                number: "02",
                icon: "P",
                title: "Polifenoles",
                text:
                  "Grupo de compuestos fenólicos de interés estudiados por su presencia en diferentes especies vegetales.",
              },
              {
                number: "03",
                icon: "F",
                title: "Flavonoides",
                text:
                  "Compuestos presentes de manera natural en plantas y asociados con diferentes características bioactivas.",
              },
              {
                number: "04",
                icon: "C",
                title: "Vitamina C",
                text:
                  "Nutriente presente en el fruto que complementa el interés nutricional de esta especie.",
              },
            ].map((item, index) => (

              <Reveal
                key={item.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.08}
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
                    cursor-default
                  "
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >

                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -right-20
                      -top-20
                      w-52
                      h-52
                      rounded-full
                      bg-purple-200/40
                      blur-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />

                  <div className="relative">

                    <div className="flex items-start justify-between">

                      <div
                        className="
                          w-14
                          h-14
                          rounded-2xl
                          bg-gradient-to-br
                          from-purple-700
                          to-violet-500
                          text-white
                          flex
                          items-center
                          justify-center
                          text-xl
                          font-extrabold
                          shadow-lg
                          group-hover:rotate-6
                          group-hover:scale-110
                          transition-all
                          duration-300
                        "
                      >
                        {item.icon}
                      </div>

                      <span
                        className="
                          text-5xl
                          font-black
                          group-hover:text-purple-200
                          transition-colors
                        "
                        style={{ color: "#ede9fe" }}
                      >
                        {item.number}
                      </span>

                    </div>

                    <h3
                      className="
                        mt-7
                        text-2xl
                        font-bold
                      "
                      style={{ color: "#2e1065" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        leading-7
                      "
                      style={{ color: "#374151" }}
                    >
                      {item.text}
                    </p>

                    <div
                      className="
                        mt-7
                        h-1
                        w-12
                        rounded-full
                        bg-gradient-to-r
                        from-purple-700
                        to-fuchsia-400
                        group-hover:w-24
                        transition-all
                        duration-500
                      "
                    />

                  </div>

                </motion.article>

              </Reveal>

            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESO
      ===================================================== */}

      <section className="relative py-24 md:py-32 px-6 bg-white overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-0
            bottom-0
            w-px
            bg-gradient-to-b
            from-transparent
            via-purple-200
            to-transparent
            hidden
            lg:block
          "
        />

        <div className="relative max-w-7xl mx-auto">

          <Reveal>

            <SectionTitle
              subtitle="Aplicación gastronómica"
              title="Del fruto a la pastelería"
              description="La investigación conecta el ingrediente, la formulación y la evaluación sensorial."
            />

          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                number: "01",
                title: "Preparación",
                icon: FaLeaf,
                text:
                  "Obtención y preparación del fruto para su incorporación en las formulaciones experimentales.",
              },
              {
                number: "02",
                title: "Concentración",
                icon: FaFlask,
                text:
                  "Evaluación de diferentes niveles de sólidos solubles expresados en grados Brix.",
              },
              {
                number: "03",
                title: "Evaluación",
                icon: FaChartLine,
                text:
                  "Análisis de atributos sensoriales y aceptación de los productos desarrollados.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  direction="up"
                  delay={index * 0.15}
                >

                  <motion.article
                    className="
                      group
                      relative
                      rounded-[2rem]
                      bg-gradient-to-br
                      from-purple-50
                      to-violet-50
                      border
                      border-purple-100
                      p-8
                      text-center
                      overflow-hidden
                    "
                    whileHover={{
                      y: -10,
                      scale: 1.025,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                  >

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-purple-500/0
                        via-purple-500/0
                        to-fuchsia-500/10
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />

                    <div className="relative">

                      <div
                        className="
                          mx-auto
                          w-16
                          h-16
                          rounded-2xl
                          bg-purple-900
                          text-white
                          flex
                          items-center
                          justify-center
                          shadow-lg
                          group-hover:rotate-6
                          group-hover:scale-110
                          transition-all
                          duration-300
                        "
                      >
                        <Icon className="text-xl" />
                      </div>

                      <span
                        className="
                          block
                          mt-6
                          text-sm
                          font-extrabold
                          tracking-[0.2em]
                        "
                        style={{ color: "#7e22ce" }}
                      >
                        {item.number}
                      </span>

                      <h3
                        className="
                          mt-3
                          text-2xl
                          font-bold
                        "
                        style={{ color: "#2e1065" }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          leading-7
                        "
                        style={{ color: "#374151" }}
                      >
                        {item.text}
                      </p>

                    </div>

                  </motion.article>

                </Reveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          CONCENTRACIONES BRIX
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
            blur-[100px]
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
            blur-[100px]
          "
        />

        <FloatingBerry
          size={16}
          top="17%"
          left="8%"
          delay={0}
          duration={7}
          opacity={0.5}
        />

        <FloatingBerry
          size={24}
          top="78%"
          left="90%"
          delay={1}
          duration={9}
          opacity={0.4}
        />

        <div className="relative max-w-7xl mx-auto">

          <Reveal>

            <div className="max-w-3xl mx-auto text-center">

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
                  tracking-[0.25em]
                  font-bold
                "
                style={{ color: "#e9d5ff" }}
              >
                Diseño experimental
              </span>

              <h2
                className="
                  mt-6
                  text-4xl
                  md:text-5xl
                  font-extrabold
                  leading-tight
                "
                style={{
                  color: "#ffffff",
                  textShadow: "0 3px 12px rgba(0,0,0,0.35)",
                }}
              >
                Tres concentraciones
                <span
                  className="block"
                  style={{ color: "#d8b4fe" }}
                >
                  para estudiar
                </span>
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                "
                style={{ color: "#f3e8ff" }}
              >
                La investigación analiza diferentes
                niveles de sólidos solubles expresados
                en grados Brix.
              </p>

            </div>

          </Reveal>

          <div className="
            mt-14
            grid
            md:grid-cols-3
            gap-6
          ">

            {[
              {
                brix: "4°",
                label: "Nivel bajo",
                text:
                  "Concentración de menor intensidad para explorar perfiles sensoriales más suaves.",
              },
              {
                brix: "7°",
                label: "Nivel medio",
                text:
                  "Concentración intermedia utilizada para comparar intensidad y aceptación sensorial.",
              },
              {
                brix: "10°",
                label: "Nivel alto",
                text:
                  "Mayor concentración utilizada para estudiar una expresión sensorial más intensa.",
              },
            ].map((item, index) => (

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
                    p-8
                    border
                    border-white/10
                    bg-white/10
                    backdrop-blur-md
                    cursor-default
                  "
                  whileHover={{
                    y: -12,
                    scale: 1.035,
                    rotateX: 3,
                    rotateY: index === 1 ? 0 : index === 0 ? -2 : 2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  style={{
                    perspective: 1000,
                  }}
                >

                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-1
                      bg-gradient-to-r
                      from-purple-300
                      via-fuchsia-300
                      to-violet-300
                      opacity-70
                    "
                  />

                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      font-bold
                    "
                    style={{ color: "#d8b4fe" }}
                  >
                    {item.label}
                  </span>

                  <p
                    className="
                      mt-6
                      text-6xl
                      font-black
                    "
                    style={{
                      color: "#ffffff",
                      textShadow: "0 3px 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    {item.brix}
                  </p>

                  <p
                    className="
                      text-lg
                      font-semibold
                    "
                    style={{ color: "#d8b4fe" }}
                  >
                    grados Brix
                  </p>

                  <p
                    className="
                      mt-6
                      leading-7
                    "
                    style={{ color: "#f3e8ff" }}
                  >
                    {item.text}
                  </p>

                  <div className="
                    mt-7
                    pt-5
                    border-t
                    border-white/10
                    flex
                    items-center
                    justify-between
                  ">

                    <span
                      className="
                        text-xs
                        uppercase
                        tracking-wider
                      "
                      style={{ color: "#d8b4fe" }}
                    >
                      Concentración
                    </span>

                    <motion.span
                      className="
                        text-xl
                      "
                      style={{ color: "#e9d5ff" }}
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>

                  </div>

                </motion.article>

              </Reveal>

            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTOS
      ===================================================== */}

      <section className="relative py-24 md:py-32 px-6 bg-white overflow-hidden">

        <FloatingBerry
          size={14}
          top="18%"
          left="96%"
          delay={1}
          duration={6}
          opacity={0.35}
        />

        <div className="relative max-w-7xl mx-auto">

          <Reveal>

            <SectionTitle
              subtitle="Aplicaciones gastronómicas"
              title="Productos desarrollados"
              description="Las concentraciones estudiadas fueron incorporadas en preparaciones tradicionales de pastelería."
            />

          </Reveal>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* PAVLOVA */}

            <Reveal direction="left">

              <motion.article
                className="
                  group
                  relative
                  isolate
                  overflow-hidden
                  rounded-[2.5rem]
                  border
                  border-white/15
                  text-white
                  p-10
                  md:p-12
                  shadow-[0_30px_80px_rgba(76,29,149,0.3)]
                  min-h-[420px]
                  bg-cover
                  bg-center
                  bg-no-repeat
                "
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.45), rgba(88, 28, 135, 0.38)), url(${pavlovaImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  rotateX: 1.5,
                  rotateY: -1.5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
              >

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.35),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.32),transparent_28%)]" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#12071d]/80 via-[#12071d]/20 to-transparent" />

                <div
                  className="
                    absolute
                    -right-24
                    -top-24
                    w-72
                    h-72
                    rounded-full
                    bg-fuchsia-400/20
                    blur-[90px]
                    group-hover:scale-125
                    transition-transform
                    duration-700
                  "
                />

                <div className="absolute inset-x-5 top-5 h-px bg-white/25" />

                <div className="relative flex h-full flex-col justify-end z-10">

                  <span
                    className="
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      px-3
                      py-1.5
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      font-bold
                      backdrop-blur-md
                    "
                    style={{ color: "#f5d0fe" }}
                  >
                    <span className="h-2 w-2 rounded-full bg-fuchsia-300" />
                    Producto 01
                  </span>

                  <h3
                    className="
                      mt-5
                      text-4xl
                      md:text-5xl
                      font-extrabold
                      leading-none
                    "
                    style={{
                      color: "#ffffff",
                      textShadow: "0 3px 12px rgba(0,0,0,0.45)",
                    }}
                  >
                    Pavlova
                  </h3>

                  <p
                    className="
                      mt-5
                      leading-8
                      max-w-xl
                      text-sm
                      md:text-base
                    "
                    style={{ color: "#fdf2f8" }}
                  >
                    Preparación basada en merengue horneado,
                    utilizada para analizar el efecto de las
                    diferentes concentraciones de saúco sobre
                    atributos como color, textura, aroma y sabor.
                  </p>

                  <Link
                    to="/recetas"
                    className="
                      group/button
                      inline-flex
                      items-center
                      gap-3
                      mt-8
                      rounded-2xl
                      bg-white/85
                      text-purple-900
                      px-6
                      py-3.5
                      font-bold
                      shadow-[0_15px_40px_rgba(255,255,255,0.2)]
                      hover:bg-white
                      hover:shadow-[0_20px_50px_rgba(255,255,255,0.25)]
                      transition-all
                      duration-300
                      w-fit
                      backdrop-blur-sm
                    "
                  >
                    Ver preparación

                    <FaArrowRight
                      className="
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-2
                      "
                    />
                  </Link>

                </div>

              </motion.article>

            </Reveal>

            {/* MOUSSE */}

            <Reveal direction="right">

              <motion.article
                className="
                  group
                  relative
                  isolate
                  overflow-hidden
                  rounded-[2.5rem]
                  border
                  border-white/15
                  text-white
                  p-10
                  md:p-12
                  shadow-[0_30px_80px_rgba(109,40,217,0.25)]
                  min-h-[420px]
                  bg-cover
                  bg-center
                  bg-no-repeat
                "
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(17, 24, 39, 0.32), rgba(109, 40, 217, 0.42)), url(${mousseImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  rotateX: 1.5,
                  rotateY: 1.5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
              >

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,132,252,0.38),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.24),transparent_32%)]" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1a102d]/80 via-[#1a102d]/15 to-transparent" />

                <div
                  className="
                    absolute
                    -left-24
                    -bottom-24
                    w-72
                    h-72
                    rounded-full
                    bg-violet-300/20
                    blur-[90px]
                    group-hover:scale-125
                    transition-transform
                    duration-700
                  "
                />

                <div className="absolute inset-x-5 top-5 h-px bg-white/25" />

                <div className="relative flex h-full flex-col justify-end z-10">

                  <span
                    className="
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      px-3
                      py-1.5
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      font-bold
                      backdrop-blur-md
                    "
                    style={{ color: "#f3e8ff" }}
                  >
                    <span className="h-2 w-2 rounded-full bg-violet-300" />
                    Producto 02
                  </span>

                  <h3
                    className="
                      mt-5
                      text-4xl
                      md:text-5xl
                      font-extrabold
                      leading-none
                    "
                    style={{
                      color: "#ffffff",
                      textShadow: "0 3px 12px rgba(0,0,0,0.45)",
                    }}
                  >
                    Mousse
                  </h3>

                  <p
                    className="
                      mt-5
                      leading-8
                      max-w-xl
                      text-sm
                      md:text-base
                    "
                    style={{ color: "#f5f3ff" }}
                  >
                    Preparación de textura aireada empleada
                    para estudiar la influencia del saúco
                    en el perfil sensorial y en la aceptación
                    general del producto.
                  </p>

                  <Link
                    to="/recetas"
                    className="
                      group/button
                      inline-flex
                      items-center
                      gap-3
                      mt-8
                      rounded-2xl
                      bg-white/85
                      text-purple-900
                      px-6
                      py-3.5
                      font-bold
                      shadow-[0_15px_40px_rgba(255,255,255,0.2)]
                      hover:bg-white
                      hover:shadow-[0_20px_50px_rgba(255,255,255,0.25)]
                      transition-all
                      duration-300
                      w-fit
                      backdrop-blur-sm
                    "
                  >
                    Ver preparación

                    <FaArrowRight
                      className="
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-2
                      "
                    />
                  </Link>

                </div>

              </motion.article>

            </Reveal>

            {/* ALMÍBAR */}

            <Reveal direction="up">

              <motion.article
                className="
                  group
                  relative
                  isolate
                  overflow-hidden
                  rounded-[2.5rem]
                  border
                  border-white/15
                  text-white
                  p-10
                  md:p-12
                  shadow-[0_30px_80px_rgba(88,28,135,0.3)]
                  min-h-[420px]
                  bg-cover
                  bg-center
                  bg-no-repeat
                "
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(49, 46, 129, 0.58), rgba(168, 85, 247, 0.32)), url(${almibarImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  rotateX: -1.5,
                  rotateY: 1.5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
              >

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,180,254,0.34),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.28),transparent_30%)]" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#140d2c]/80 via-[#140d2c]/20 to-transparent" />

                <div
                  className="
                    absolute
                    -right-20
                    -bottom-20
                    w-72
                    h-72
                    rounded-full
                    bg-violet-300/20
                    blur-[90px]
                    group-hover:scale-125
                    transition-transform
                    duration-700
                  "
                />

                <div className="absolute inset-x-5 top-5 h-px bg-white/25" />

                <div className="relative flex h-full flex-col justify-end z-10">

                  <span
                    className="
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      px-3
                      py-1.5
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      font-bold
                      backdrop-blur-md
                    "
                    style={{ color: "#ddd6fe" }}
                  >
                    <span className="h-2 w-2 rounded-full bg-violet-200" />
                    Producto 03
                  </span>

                  <h3
                    className="
                      mt-5
                      text-4xl
                      md:text-5xl
                      font-extrabold
                      leading-none
                    "
                    style={{
                      color: "#ffffff",
                      textShadow: "0 3px 12px rgba(0,0,0,0.45)",
                    }}
                  >
                    Almíbar
                  </h3>

                  <p
                    className="
                      mt-5
                      leading-8
                      max-w-xl
                      text-sm
                      md:text-base
                    "
                    style={{ color: "#f5f3ff" }}
                  >
                    Base líquida utilizada para aportar
                    dulzor, brillo y un perfil aromático
                    característico del saúco en aplicaciones
                    de pastelería y postres.
                  </p>

                  <Link
                    to="/recetas"
                    className="
                      group/button
                      inline-flex
                      items-center
                      gap-3
                      mt-8
                      rounded-2xl
                      bg-white/85
                      text-purple-900
                      px-6
                      py-3.5
                      font-bold
                      shadow-[0_15px_40px_rgba(255,255,255,0.2)]
                      hover:bg-white
                      hover:shadow-[0_20px_50px_rgba(255,255,255,0.25)]
                      transition-all
                      duration-300
                      w-fit
                      backdrop-blur-sm
                    "
                  >
                    Ver preparación

                    <FaArrowRight
                      className="
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-2
                      "
                    />
                  </Link>

                </div>

              </motion.article>

            </Reveal>

          </div>
        </div>
      </section>

      {/* =====================================================
          LLAMADO A RESULTADOS
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
          via-violet-950
          to-purple-900
          text-white
        "
      >

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[40rem]
            h-[40rem]
            rounded-full
            bg-purple-500/10
            blur-[120px]
          "
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <FloatingBerry
          size={18}
          top="18%"
          left="10%"
          delay={1}
          duration={8}
          opacity={0.4}
        />

        <FloatingBerry
          size={12}
          top="72%"
          left="88%"
          delay={2}
          duration={7}
          opacity={0.5}
        />

        <div className="relative max-w-4xl mx-auto text-center">

          <Reveal direction="zoom">

            <span
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white/10
                border
                border-white/10
                text-xs
                uppercase
                tracking-[0.25em]
                font-bold
              "
              style={{ color: "#d8b4fe" }}
            >
              <span className="
                w-2
                h-2
                rounded-full
                bg-purple-300
                animate-pulse
              " />
              Resultados del estudio
            </span>

            <h2
              className="
                mt-7
                text-4xl
                md:text-6xl
                font-extrabold
                leading-tight
              "
              style={{
                color: "#ffffff",
                textShadow: "0 3px 12px rgba(0,0,0,0.4)",
              }}
            >
              ¿Cómo influyó la concentración
              <span
                className="block"
                style={{ color: "#d8b4fe" }}
              >
                de saúco?
              </span>
            </h2>

            <p
              className="
                mt-7
                text-lg
                leading-8
                max-w-2xl
                mx-auto
              "
              style={{ color: "#f3e8ff" }}
            >
              Explora los principales hallazgos del
              análisis sensorial y conoce cómo las
              concentraciones modificaron las
              características percibidas en los
              productos desarrollados.
            </p>

            <div className="mt-10">

              <GlowButton
                to="/resultados"
                variant="light"
              >
                Explorar resultados
              </GlowButton>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          CIERRE
      ===================================================== */}

      <section className="py-20 px-6 bg-[#faf8ff]">

        <div className="max-w-5xl mx-auto">

          <Reveal direction="up">

            <div
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-purple-100
                bg-white
                p-10
                md:p-14
                text-center
                shadow-[0_20px_60px_rgba(76,29,149,0.08)]
              "
            >

              <div
                className="
                  absolute
                  -top-24
                  left-1/2
                  -translate-x-1/2
                  w-64
                  h-64
                  rounded-full
                  bg-purple-100
                  blur-3xl
                "
              />

              <div className="relative">

                <FaFlask
                  className="
                    mx-auto
                    text-3xl
                    text-purple-700
                  "
                />

                <h2
                  className="
                    mt-5
                    text-3xl
                    md:text-4xl
                    font-extrabold
                  "
                  style={{ color: "#2e1065" }}
                >
                  Investigación + gastronomía
                </h2>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    mx-auto
                    leading-8
                  "
                  style={{ color: "#374151" }}
                >
                  SambucusLab conecta el análisis
                  experimental con la aplicación
                  gastronómica para estudiar el
                  comportamiento del saúco en
                  productos tradicionales de pastelería.
                </p>

                <div className="mt-8">

                  <GlowButton
                    to="/investigacion"
                    variant="primary"
                  >
                    Conocer el proyecto
                  </GlowButton>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  );
}