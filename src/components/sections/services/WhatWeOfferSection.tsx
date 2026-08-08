import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export function WhatWeOfferSection() {
  return (
    <section className="bg-gradient-to-br from-bg-light to-slate-200 py-20">
      <Container>
        <SectionHeader
          title="What We Offer"
          subtitle="Our software engineering services encompass the entire software development lifecycle. From conceptualization and design to coding, testing, and deployment, we apply industry best practices to deliver robust, scalable, and maintainable software solutions tailored to your specific business needs."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
              cta={{ label: "Get Started", href: "/contact" }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
