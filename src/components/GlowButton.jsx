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
    transition-[transform,background-color,border-color,box-shadow]
    duration-200
    ease-out
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
      shadow-[0_8px_24px_rgba(109,40,217,0.28)]
      hover:-translate-y-0.5
      hover:shadow-[0_12px_30px_rgba(109,40,217,0.38)]
      active:translate-y-0
    `,

    light: `
      text-purple-900
      bg-white
      shadow-[0_8px_24px_rgba(255,255,255,0.15)]
      hover:-translate-y-0.5
      hover:bg-purple-50
      hover:shadow-[0_12px_30px_rgba(255,255,255,0.22)]
      active:translate-y-0
    `,

    outline: `
      text-white
      bg-white/5
      border
      border-white/20
      hover:-translate-y-0.5
      hover:bg-white/10
      hover:border-white/35
      active:translate-y-0
    `,
  };

  const content = (
    <>
      {/* Brillo sutil */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-16
          w-12
          rotate-[25deg]
          bg-white/20
          opacity-0
          transition-[left,opacity]
          duration-500
          group-hover:left-[110%]
          group-hover:opacity-100
        "
      />

      {/* Texto */}

      <span className="relative z-10">
        {children}
      </span>

      {/* Icono */}

      {icon && (
        <span
          aria-hidden="true"
          className="
            relative
            z-10
            flex
            items-center
            justify-center
            text-lg
            transition-transform
            duration-200
            group-hover:-translate-y-0.5
            group-hover:translate-x-1
          "
        >
          ↗
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${variants[variant] || variants.primary}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variants[variant] || variants.primary}`}
    >
      {content}
    </button>
  );
}