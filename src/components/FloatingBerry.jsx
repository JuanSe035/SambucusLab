import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

export default function FloatingBerry({
  size = 18,
  top = "20%",
  left = "10%",
  delay = 0,
  duration = 5,
  opacity = 0.6,
}) {
  return (
    <motion.div
      className="
        absolute
        pointer-events-none
        z-10
      "
      style={{
        top,
        left,
      }}
      animate={{
        y: [0, -18, 0, 12, 0],
        x: [0, 8, -5, 6, 0],
        rotate: [0, 10, -8, 6, 0],
        scale: [1, 1.08, 0.95, 1.05, 1],
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
          flex
          items-center
          justify-center
        "
        style={{
          width: size,
          height: size,
          opacity,
        }}
      >
        {/* Halo */}
        <div
          className="
            absolute
            inset-[-70%]
            rounded-full
            bg-fuchsia-500/20
            blur-xl
          "
        />

        {/* Baya */}
        <div
          className="
            relative
            w-full
            h-full
            rounded-full
            bg-gradient-to-br
            from-fuchsia-300
            via-purple-600
            to-purple-950
            shadow-[0_0_20px_rgba(168,85,247,0.7)]
          "
        >
          <div
            className="
              absolute
              top-[15%]
              left-[20%]
              w-[25%]
              h-[25%]
              rounded-full
              bg-white/60
              blur-[1px]
            "
          />
        </div>

        {/* Pequeño brillo */}
        <FaCircle
          className="
            absolute
            text-purple-200/30
          "
          style={{
            fontSize: size * 0.35,
          }}
        />
      </div>
    </motion.div>
  );
}