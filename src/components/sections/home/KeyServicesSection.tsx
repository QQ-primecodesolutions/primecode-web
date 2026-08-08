import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export function KeyServicesSection() {
  return (
    <section className="bg-gradient-to-br from-bg-light to-slate-200 py-20">
      <Container>
        <SectionHeader
          title="Key Services"
          subtitle="We are a software engineering company that delivers end-to-end solutions, covering everything from web development and mobile applications to system architecture and maintenance."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              cta={{ label: "Learn More", href: "/services" }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
