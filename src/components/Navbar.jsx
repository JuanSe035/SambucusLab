import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaFlask,
  FaTimes,
} from "react-icons/fa";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Investigación",
    path: "/investigacion",
  },
  {
    name: "Resultados",
    path: "/resultados",
  },
  {
    name: "Recetas",
    path: "/recetas",
  },
  {
    name: "Contacto",
    path: "/contacto",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-[9000]
          transition-all
          duration-500
          ${
            scrolled
              ? "px-3 md:px-6 pt-3"
              : "px-0 pt-0"
          }
        `}
      >
        <nav
          className={`
            relative
            mx-auto
            transition-all
            duration-500
            ${
              scrolled
                ? `
                  max-w-7xl
                  rounded-2xl
                  bg-purple-950/75
                  backdrop-blur-2xl
                  border
                  border-white/10
                  shadow-[0_15px_50px_rgba(46,16,101,0.35)]
                `
                : `
                  w-full
                  bg-gradient-to-r
                  from-purple-950
                  via-violet-900
                  to-purple-800
                  border-b
                  border-white/10
                `
            }
          `}
        >
          {/* Glow superior */}
          <div
            className="
              absolute
              -top-20
              left-1/2
              -translate-x-1/2
              w-96
              h-20
              bg-purple-500/20
              blur-3xl
              pointer-events-none
            "
          />

          <div
            className="
              relative
              h-[76px]
              px-5
              md:px-7
              flex
              items-center
              justify-between
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className="group flex items-center gap-3"
            >
              <motion.div
                className="
                  relative
                  w-11
                  h-11
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  bg-white/10
                  border
                  border-white/15
                  overflow-hidden
                "
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-purple-400/30
                    to-fuchsia-400/10
                  "
                />

                <FaFlask
                  className="
                    relative
                    text-purple-200
                    text-lg
                  "
                />

                <motion.div
                  className="
                    absolute
                    inset-0
                    border
                    border-purple-300/20
                    rounded-xl
                  "
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              <div className="leading-none">
                <span
                  className="
                    block
                    text-xl
                    font-extrabold
                    tracking-tight
                    text-white
                  "
                >
                  Sambucus
                </span>

                <span
                  className="
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.35em]
                    text-purple-300
                    mt-1
                  "
                >
                  Lab
                </span>
              </div>
            </NavLink>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className="relative px-3 py-2"
                >
                  {({ isActive }) => (
                    <motion.div
                      className={`
                        relative
                        px-4
                        py-2.5
                        rounded-xl
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "text-white"
                            : "text-purple-100/75 hover:text-white"
                        }
                      `}
                      whileHover={{
                        y: -2,
                      }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active"
                          className="
                            absolute
                            inset-0
                            rounded-xl
                            bg-white/10
                            border
                            border-white/10
                            shadow-[0_0_20px_rgba(168,85,247,0.18)]
                          "
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 28,
                          }}
                        />
                      )}

                      <span className="relative z-10">
                        {link.name}
                      </span>

                      {isActive && (
                        <motion.span
                          layoutId="navbar-dot"
                          className="
                            absolute
                            bottom-1
                            left-1/2
                            -translate-x-1/2
                            w-1
                            h-1
                            rounded-full
                            bg-purple-300
                            shadow-[0_0_10px_rgba(216,180,254,0.9)]
                          "
                        />
                      )}
                    </motion.div>
                  )}
                </NavLink>
              ))}
            </div>

            {/* =================================================
                INDICADOR DESKTOP
            ================================================= */}

            <div className="hidden xl:flex items-center gap-2">
              <span
                className="
                  relative
                  flex
                  h-2
                  w-2
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-purple-300
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-purple-300
                  "
                />
              </span>

              <span className="text-xs text-purple-200">
                Proyecto activo
              </span>
            </div>

            {/* =================================================
                MOBILE BUTTON
            ================================================= */}

            <motion.button
              type="button"
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="
                lg:hidden
                w-11
                h-11
                rounded-xl
                flex
                items-center
                justify-center
                text-white
                bg-white/10
                border
                border-white/10
              "
              whileTap={{
                scale: 0.9,
              }}
              aria-label={
                mobileOpen
                  ? "Cerrar menú"
                  : "Abrir menú"
              }
            >
              {mobileOpen ? (
                <FaTimes className="text-lg" />
              ) : (
                <FaBars className="text-lg" />
              )}
            </motion.button>
          </div>
        </nav>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="
              fixed
              inset-0
              z-[8999]
              lg:hidden
              bg-purple-950/95
              backdrop-blur-2xl
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <div
              className="
                absolute
                inset-0
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  -top-32
                  -right-32
                  w-96
                  h-96
                  rounded-full
                  bg-purple-600/20
                  blur-3xl
                "
              />

              <div
                className="
                  absolute
                  -bottom-32
                  -left-32
                  w-96
                  h-96
                  rounded-full
                  bg-fuchsia-600/10
                  blur-3xl
                "
              />
            </div>

            <div
              className="
                relative
                min-h-screen
                flex
                flex-col
                justify-center
                px-8
              "
            >
              <div className="mb-10">
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-purple-300
                    font-bold
                  "
                >
                  Navegación
                </p>

                <h2
                  className="
                    mt-3
                    text-3xl
                    font-extrabold
                    text-white
                  "
                >
                  SambucusLab
                </h2>
              </div>

              <div className="space-y-3">
                {links.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.07,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className={({ isActive }) => `
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        px-5
                        py-4
                        text-lg
                        font-semibold
                        transition-all
                        ${
                          isActive
                            ? "bg-white text-purple-950"
                            : "text-purple-100 bg-white/5 border border-white/5"
                        }
                      `}
                    >
                      <span>{link.name}</span>

                      <span className="text-sm">
                        →
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-sm text-purple-300 leading-7">
                  Investigación gastronómica,
                  análisis sensorial y aplicación
                  del saúco en pastelería.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}