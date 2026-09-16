import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 175);
      mouseY.set(e.clientY - 175);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Halo principal */}
      <motion.div
        style={{ x, y }}
        className="
          pointer-events-none
          fixed
          top-0
          left-0
          z-[999]
          h-[350px]
          w-[350px]
          rounded-full
          blur-[120px]
          opacity-30
        "
      >
        <div className="h-full w-full rounded-full bg-fuchsia-500/70" />
      </motion.div>

      {/* Halo secundario */}
      <motion.div
        style={{
          x: useSpring(mouseX, { stiffness: 60, damping: 25 }),
          y: useSpring(mouseY, { stiffness: 60, damping: 25 }),
        }}
        className="
          pointer-events-none
          fixed
          top-0
          left-0
          z-[998]
          h-[180px]
          w-[180px]
          rounded-full
          blur-[70px]
          opacity-70
        "
      >
        <div className="h-full w-full rounded-full bg-purple-400/80" />
      </motion.div>
    </>
  );
}