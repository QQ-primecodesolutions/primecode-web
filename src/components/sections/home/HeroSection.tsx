"use client";

import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-82px)] items-center overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-br after:from-primary/10 after:to-secondary/5"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(37,99,235,0.9) 0%, rgba(6,182,212,0.8) 100%), url(/images/space-digital.webp)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-24 text-center sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 bg-gradient-to-br from-white to-slate-200 bg-clip-text text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-tight tracking-tight text-transparent"
        >
          Transforming Ideas into Seamless Digital Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mx-auto mb-10 max-w-[600px] text-[clamp(1.1rem,2vw,1.25rem)] leading-relaxed text-white/90"
        >
          At PrimeCode Solutions, we are a dynamic team of experts specializing in cutting-edge software
          engineering: web development, and mobile app creation. With a passion for innovation and a commitment to
          precision, we turn your concepts into flawless digital solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button href="/services" variant="primary">
            Explore Services <ArrowRight size={18} />
          </Button>
          <Button href="/contact" variant="secondary">
            Get Started <ExternalLink size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
