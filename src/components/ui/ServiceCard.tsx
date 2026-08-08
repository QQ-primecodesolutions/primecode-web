import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: { src: string; alt: string };
  cta?: { label: string; href: string };
}

export function ServiceCard({ icon: Icon, title, description, image, cta }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-border bg-card p-10 text-center shadow-md transition-all duration-400 ease-out hover:-translate-y-2.5 hover:border-primary hover:shadow-xl">
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-br from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100" />
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[20px] bg-gradient-to-br from-primary to-secondary text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
        <Icon size={32} />
      </div>
      <h3 className="mb-4 font-mono text-2xl font-bold text-text-primary">{title}</h3>
      <p className="text-base leading-relaxed text-text-secondary">{description}</p>
      {image && (
        <div className="mt-8">
          <Image
            src={image.src}
            alt={image.alt}
            width={200}
            height={200}
            className="mx-auto h-auto w-full max-w-[200px] rounded-[10px] object-cover"
          />
        </div>
      )}
      {cta && (
        <Link
          href={cta.href}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 hover:translate-x-1 hover:text-primary-dark"
        >
          {cta.label} <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
