export function SectionHeader({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <h2
        className={`relative inline-block text-[clamp(2rem,4vw,3rem)] font-bold after:absolute after:-bottom-2.5 after:left-1/2 after:h-1 after:w-[60px] after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-br after:from-primary after:to-secondary ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/90" : "text-text-secondary"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
