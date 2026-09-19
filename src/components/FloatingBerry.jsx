import { motion } from "framer-motion";

export default function FloatingBerry({
  size = 18,
  top = "20%",
  left = "10%",
  delay = 0,
  duration = 7,
  opacity = 0.6,
}) {
  return (
    <motion.div
      className="
        pointer-events-none
        absolute
        z-10
      "
      style={{
        top,
        left,
        width: size,
        height: size,
        opacity,
      }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="
          relative
          h-full
          w-full
          rounded-full
          bg-gradient-to-br
          from-fuchsia-300
          via-purple-600
          to-purple-950
          shadow-[0_0_12px_rgba(168,85,247,0.45)]
        "
      >
        {/* Brillo de la baya */}
        <div
          className="
            absolute
            left-[20%]
            top-[15%]
            h-[25%]
            w-[25%]
            rounded-full
            bg-white/60
          "
        />
      </div>
    </motion.div>
  );
}