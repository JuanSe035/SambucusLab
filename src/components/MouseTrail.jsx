import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  const mouse = useRef({
    x: -100,
    y: -100,
  });

  const position = useRef({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;

    const animate = () => {
      position.current.x +=
        (mouse.current.x - position.current.x) * 0.18;

      position.current.y +=
        (mouse.current.y - position.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(
            ${position.current.x - 5}px,
            ${position.current.y - 5}px,
            0
          )
        `;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `
          translate3d(
            ${position.current.x - 28}px,
            ${position.current.y - 28}px,
            0
          )
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          HALO GRANDE
      ===================================================== */}

      <div
        ref={glowRef}
        className="
          fixed
          top-0
          left-0
          w-14
          h-14
          rounded-full
          pointer-events-none
          z-[9998]
          bg-purple-500/10
          border
          border-purple-300/10
          blur-[2px]
          transition-opacity
          duration-300
        "
        aria-hidden="true"
      />

      {/* =====================================================
          PUNTO CENTRAL
      ===================================================== */}

      <div
        ref={cursorRef}
        className="
          fixed
          top-0
          left-0
          w-2.5
          h-2.5
          rounded-full
          pointer-events-none
          z-[10000]
          bg-purple-300
          shadow-[0_0_10px_rgba(216,180,254,1),0_0_25px_rgba(168,85,247,0.8)]
        "
        aria-hidden="true"
      />
    </>
  );
}