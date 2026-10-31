import Image from "next/image";

export function PageHero({ title }: { title: string }) {
  return (
    <section
      className="relative flex min-h-[40vh] items-end justify-center overflow-hidden pb-12 text-center after:absolute after:inset-0 after:bg-gradient-to-br after:from-primary/90 after:to-secondary/80"
    >
      <Image src="/images/background4.jpeg" alt="" fill preload fetchPriority="high" sizes="100vw" className="object-cover" />
      <h1 className="relative z-10 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-white">
        {title}
      </h1>
    </section>
  );
}
