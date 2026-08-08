import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary py-20 text-center text-white">
      <Container>
        <h2 className="mb-4 text-[clamp(2rem,4vw,3rem)] font-bold">Ready to Start Your Project?</h2>
        <p className="mb-8 text-xl text-white/90">
          Let&apos;s discuss your requirements and bring your vision to life with our expert development team.
        </p>
        <Button href="/contact" variant="secondary">
          Contact Us Today <ArrowRight size={18} />
        </Button>
      </Container>
    </section>
  );
}
