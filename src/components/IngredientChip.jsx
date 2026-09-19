import { motion } from "framer-motion";

export default function IngredientChip({
  nombre,
  activo,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-4 py-3 rounded-2xl
        text-sm font-semibold transition-all duration-300
        border
        ${
          activo
            ? "bg-purple-700 text-white border-purple-500 shadow-lg"
            : "bg-white text-purple-900 border-purple-100 hover:bg-purple-50"
        }
      `}
    >
      {nombre}
    </motion.button>
  );
}