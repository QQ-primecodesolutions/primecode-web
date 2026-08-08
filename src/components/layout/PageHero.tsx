export function PageHero({ title }: { title: string }) {
  return (
    <section
      className="relative flex min-h-[40vh] items-end justify-center pb-12 text-center after:absolute after:inset-0 after:bg-gradient-to-br after:from-primary/90 after:to-secondary/80"
      style={{
        backgroundImage: "url(/images/background4.jpeg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="relative z-10 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-white">
        {title}
      </h1>
    </section>
  );
}
