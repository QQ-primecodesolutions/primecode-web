import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function VisionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] py-20 text-white">
      <Container className="relative z-10">
        <SectionHeader title="Vision" light />
        <p className="mx-auto max-w-3xl text-center text-lg leading-loose text-white/95">
          PrimeCode Solutions envisions itself as a prominent force driving technological innovation, shaping a
          future where excellence in business solutions contributes to societal advancement. Our vision is to
          establish a reputation as a premier tech solutions provider, influencing industries, communities, and the
          educational landscape.
        </p>
      </Container>
    </section>
  );
}
