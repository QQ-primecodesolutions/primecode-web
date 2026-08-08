import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { values } from "@/data/values";

export function OurValuesSection() {
  return (
    <section className="bg-bg-light py-20">
      <Container>
        <SectionHeader title="Our Values" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <ServiceCard key={value.title} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}
