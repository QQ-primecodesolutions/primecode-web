import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { whyChooseUs } from "@/data/whyChooseUs";

export function WhyChooseUsSection() {
  return (
    <section className="bg-card py-20">
      <Container>
        <SectionHeader title="Why Choose PrimeCode Solutions?" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <ServiceCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}
