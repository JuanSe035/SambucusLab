export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
}) {
  const isLeft = align === "left";

  return (
    <div
      className={`
        max-w-3xl mb-14
        ${isLeft ? "text-left" : "text-center mx-auto"}
      `}
    >
      <div
        className={`
          inline-flex items-center gap-3
          mb-4
          ${isLeft ? "" : "justify-center"}
        `}
      >
        <span className="w-8 h-[2px] bg-gradient-to-r from-purple-700 to-violet-400" />

        <p className="uppercase tracking-[0.22em] text-purple-700 text-xs font-bold">
          {subtitle}
        </p>

        <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-purple-700" />
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-purple-950 leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-gray-600 text-base md:text-lg leading-8">
          {description}
        </p>
      )}
    </div>
  );
}