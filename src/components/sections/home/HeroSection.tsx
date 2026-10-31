import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

// The heading and intro are the page's largest content, so they render visible
// straight away and only slide in; fading them from opacity 0 would delay LCP.
export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-82px)] items-center overflow-hidden">
      <Image
        src="/images/space-digital.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.9)_0%,rgba(6,182,212,0.8)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-24 text-center sm:px-8">
        <h1 className="mb-6 animate-rise bg-gradient-to-br from-white to-slate-200 bg-clip-text text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-tight tracking-tight text-transparent">
          Transforming Ideas into Seamless Digital Experiences
        </h1>
        <p className="mx-auto mb-10 max-w-[600px] animate-rise text-[clamp(1.1rem,2vw,1.25rem)] leading-relaxed text-white/90 [animation-delay:150ms]">
          At PrimeCode Solutions, based in Phuthaditjhaba, QwaQwa, we are a dynamic team of experts specializing in
          cutting-edge software engineering: web development, and mobile app creation. With a passion for innovation
          and a commitment to precision, we turn your concepts into flawless digital solutions.
        </p>
        <div className="flex animate-fade-up flex-wrap justify-center gap-4 [animation-delay:300ms]">
          <Button href="/services" variant="primary">
            Explore Services <ArrowRight size={18} />
          </Button>
          <Button href="/contact" variant="secondary">
            Get Started <ExternalLink size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
