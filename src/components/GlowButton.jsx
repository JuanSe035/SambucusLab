import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GlowButton({
  children,
  to,
  onClick,
  variant = "primary",
  icon = true,
  className = "",
}) {
  const baseClasses = `
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-3
    overflow-hidden
    rounded-2xl
    px-6
    py-3.5
    font-semibold
    transition-all
    duration-300
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-purple-400
    focus-visible:ring-offset-2
    ${className}
  `;

  const variants = {
    primary: `
      text-white
      bg-gradient-to-r
      from-purple-700
      via-violet-600
      to-fuchsia-500
      shadow-[0_12px_35px_rgba(109,40,217,0.35)]
      hover:shadow-[0_18px_45px_rgba(109,40,217,0.5)]
    `,

    light: `
      text-purple-900
      bg-white
      shadow-[0_12px_35px_rgba(255,255,255,0.18)]
      hover:bg-purple-50
      hover:shadow-[0_18px_45px_rgba(255,255,255,0.28)]
    `,

    outline: `
      text-white
      bg-white/5
      border
      border-white/20
      backdrop-blur-md
      hover:bg-white/10
      hover:border-white/40
    `,
  };

  const content = (
    <>
      {/* Brillo que atraviesa el botón */}
      <span
        className="
          absolute
          inset-y-0
          -left-24
          w-20
          rotate-[25deg]
          bg-white/30
          blur-md
          transition-all
          duration-700
          group-hover:left-[110%]
        "
      />

      {/* Halo exterior */}
      <span
        className="
          absolute
          inset-0
          rounded-2xl
          opacity-0
          blur-xl
          bg-purple-400/40
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <span className="relative z-10">
        {children}
      </span>

      {icon && (
        <motion.span
          className="
            relative
            z-10
            flex
            items-center
            justify-center
            text-lg
          "
          whileHover={{
            x: 5,
            y: -5,
            rotate: 8,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          ↗
        </motion.span>
      )}
    </>
  );

  if (to) {
    return (
      <motion.div
        whileHover={{
          scale: 1.04,
          y: -3,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        <Link
          to={to}
          className={`${baseClasses} ${variants[variant]}`}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
      whileHover={{
        scale: 1.04,
        y: -3,
      }}
      whileTap={{
        scale: 0.97,
      }}
    >
      {content}
    </motion.button>
  );
}