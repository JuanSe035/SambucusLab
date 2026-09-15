import { useMemo } from "react";

export default function ParticlesBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 55 }, (_, index) => ({
      id: index,

      size: Math.floor(Math.random() * 7) + 3,

      left: Math.random() * 100,

      top: Math.random() * 100,

      duration: Math.floor(Math.random() * 12) + 8,

      delay: Math.random() * 10,

      opacity: Math.random() * 0.55 + 0.15,

      blur:
        Math.random() > 0.7
          ? Math.floor(Math.random() * 5) + 2
          : 0,

      drift: Math.floor(Math.random() * 80) - 40,
    }));
  }, []);

  return (
    <div
      className="
        fixed
        inset-0
        z-[1]
        pointer-events-none
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* =====================================================
          LUCES GRANDES DE FONDO
      ===================================================== */}

      <div
        className="
          absolute
          -top-32
          -left-32
          w-[28rem]
          h-[28rem]
          rounded-full
          bg-purple-500/10
          blur-[100px]
          animate-pulse
        "
        style={{
          animationDuration: "7s",
        }}
      />

      <div
        className="
          absolute
          top-1/3
          -right-40
          w-[32rem]
          h-[32rem]
          rounded-full
          bg-violet-500/10
          blur-[120px]
          animate-pulse
        "
        style={{
          animationDuration: "9s",
        }}
      />

      <div
        className="
          absolute
          bottom-[-10rem]
          left-1/3
          w-[30rem]
          h-[30rem]
          rounded-full
          bg-fuchsia-400/10
          blur-[110px]
          animate-pulse
        "
        style={{
          animationDuration: "11s",
        }}
      />

      {/* =====================================================
          PARTÍCULAS
      ===================================================== */}

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="
            absolute
            rounded-full
            bg-purple-400
            animate-[particleFloat_var(--duration)_ease-in-out_var(--delay)_infinite]
          "
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            filter:
              particle.blur > 0
                ? `blur(${particle.blur}px)`
                : "none",
            "--duration": `${particle.duration}s`,
            "--delay": `${particle.delay}s`,
            "--drift": `${particle.drift}px`,
          }}
        />
      ))}

      {/* =====================================================
          PARTÍCULAS PEQUEÑAS EXTRA
      ===================================================== */}

      <div
        className="
          absolute
          top-[18%]
          left-[12%]
          w-2
          h-2
          rounded-full
          bg-fuchsia-300
          shadow-[0_0_18px_rgba(216,180,254,0.9)]
          animate-pulse
        "
      />

      <div
        className="
          absolute
          top-[62%]
          left-[82%]
          w-3
          h-3
          rounded-full
          bg-purple-300
          shadow-[0_0_22px_rgba(196,181,253,0.9)]
          animate-pulse
        "
        style={{
          animationDuration: "3.5s",
        }}
      />

      <div
        className="
          absolute
          top-[38%]
          left-[55%]
          w-1.5
          h-1.5
          rounded-full
          bg-violet-300
          shadow-[0_0_14px_rgba(196,181,253,0.9)]
          animate-pulse
        "
        style={{
          animationDuration: "2.8s",
        }}
      />
    </div>
  );
}