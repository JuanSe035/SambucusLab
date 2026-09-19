import { motion } from "framer-motion";

const opciones = [
  {
    valor: "4°",
    titulo: "4° Brix",
    descripcion: "Baja concentración",
    color: "from-purple-400 to-violet-500",
  },
  {
    valor: "7°",
    titulo: "7° Brix",
    descripcion: "Concentración media",
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    valor: "10°",
    titulo: "10° Brix",
    descripcion: "Alta concentración",
    color: "from-violet-700 to-purple-900",
  },
];

export default function BrixSelector({ value, onChange }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {opciones.map((opcion) => {
        const activo = value === opcion.valor;

        return (
          <motion.button
            key={opcion.valor}
            whileHover={{
              y: -6,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => onChange(opcion.valor)}
            className={`
              relative overflow-hidden rounded-[1.8rem]
              border transition-all duration-300
              p-5 text-center
              ${
                activo
                  ? "border-fuchsia-400 shadow-[0_0_30px_rgba(192,132,252,.45)] bg-white/15"
                  : "border-white/15 bg-white/5 hover:bg-white/10"
              }
            `}
          >
            {/* Glow interno */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${opcion.color} opacity-20`}
              animate={{
                opacity: activo ? 0.35 : 0.15,
                scale: activo ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{
                  rotate: activo ? [0, 8, -8, 0] : 0,
                  scale: activo ? 1.1 : 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className={`
                  w-16 h-16 rounded-full flex items-center justify-center
                  text-2xl font-black mb-4
                  ${
                    activo
                      ? "bg-gradient-to-br from-fuchsia-400 to-violet-500 text-white"
                      : "bg-white text-purple-800"
                  }
                `}
              >
                {opcion.valor}
              </motion.div>

              <h4 className="font-bold text-lg text-white">
                {opcion.titulo}
              </h4>

              <p className="mt-2 text-sm text-purple-100">
                {opcion.descripcion}
              </p>

              {activo && (
                <motion.div
                  layoutId="brix-selected"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-4 px-3 py-1 rounded-full bg-fuchsia-400 text-white text-xs font-bold uppercase tracking-wider"
                >
                  Seleccionado
                </motion.div>
              )}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}