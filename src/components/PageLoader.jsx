import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      className="
        fixed inset-0 z-[99999]
        flex items-center justify-center
        overflow-hidden
        bg-gradient-to-br
        from-[#1f0037]
        via-[#3b0764]
        to-[#6d28d9]
      "
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Luces de fondo */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-fuchsia-500/20 blur-[140px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-400/20 blur-[120px]"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Contenido */}
      <div className="relative text-center px-6">
        {/* Logo */}
        <motion.div
          className="mx-auto mb-8 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-28 h-28 rounded-full border-4 border-fuchsia-400/40 flex items-center justify-center backdrop-blur-md bg-white/5 shadow-[0_0_60px_rgba(236,72,153,0.45)]">
            <motion.div
              className="w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-400 via-purple-300 to-violet-200"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* Nombre */}
        <motion.h1
          className="
            mt-6
            text-6xl md:text-7xl
            font-black
            tracking-tight
            text-white
            loader-text-white
          "
          style={{
            textShadow: `
              0 0 12px rgba(255, 255, 255, 0.55),
              0 0 24px rgba(255, 255, 255, 0.52),
              0 0 40px rgba(255, 255, 255, 0.5)
            `,
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sambucus
          <span className="block text-white loader-text-white">
            Lab
          </span>
        </motion.h1>

        {/* Subtítulo MUCHO MÁS VISIBLE */}
        <motion.p
          className="
            mt-7
            text-2xl md:text-3xl
            font-extrabold
            uppercase
            tracking-[0.15em]
            text-white
            loader-text-white
          "
          style={{
            textShadow: `
              0 0 10px rgba(255, 255, 255, 0.5),
              0 0 20px rgba(255, 255, 255, 0.5)
            `,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Investigación Gastronómica Experimental
        </motion.p>

        {/* Descripción */}
        <motion.p
          className="
            mt-6
            max-w-2xl
            mx-auto
            text-lg md:text-xl
            leading-8
            font-medium
            text-white
            loader-text-white
          "
          style={{
            textShadow: "0 0 8px rgba(255, 255, 255, 0.51)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Aplicación del zumo de saúco en productos de pasteleria, conuntamente trabajado con la ingeniería de sistemas y la gastronomía.
        </motion.p>

        {/* Barra de carga */}
        <div className="mt-12 w-72 md:w-96 mx-auto">
          <div className="h-2 rounded-full bg-white/15 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 via-purple-300 to-violet-200 shadow-[0_0_25px_rgba(216,180,254,1)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2.3,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.p
            className="
              mt-5
              text-sm
              font-bold
              uppercase
              tracking-[0.35em]
              text-white
              loader-text-white
            "
            style={{
              textShadow: "0 0 10px rgba(255, 255, 255, 0.52)",
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
            }}
          >
            Cargando experiencia...
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}