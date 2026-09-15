import { motion } from "framer-motion";

const variants = {
  up: {
    hidden: {
      opacity: 0,
      y: 70,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  },

  left: {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  right: {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  zoom: {
    hidden: {
      opacity: 0,
      scale: 0.75,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  rotate: {
    hidden: {
      opacity: 0,
      y: 50,
      rotate: -4,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
    },
  },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  className = "",
}) {
  const selectedVariant =
    variants[direction] || variants.up;

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
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}