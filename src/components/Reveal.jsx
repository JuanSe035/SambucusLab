import { motion } from "framer-motion";

const variants = {
  up: {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  left: {
    hidden: {
      opacity: 0,
      x: -24,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  right: {
    hidden: {
      opacity: 0,
      x: 24,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  zoom: {
    hidden: {
      opacity: 0,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  rotate: {
    hidden: {
      opacity: 0,
      y: 20,
      rotate: -1,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
    },
  },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.45,
  once = true,
  amount = 0.15,
  className = "",
}) {
  const selectedVariant = variants[direction] || variants.up;

  return (
    <motion.div
      className={className}
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}