export default function SectionTitle({
  subtitle,
  title,
  description,
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">

      <p className="uppercase tracking-[0.3em] text-purple-600 text-sm font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl md:text-5xl font-bold text-purple-900">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-gray-600 text-lg leading-8">
          {description}
        </p>
      )}

    </div>
  );
}