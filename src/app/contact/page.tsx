import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactInfoSection } from "@/components/sections/contact/ContactInfoSection";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { LocationMapSection } from "@/components/sections/contact/LocationMapSection";
import { FaqSection } from "@/components/sections/contact/FaqSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PrimeCode Solutions for professional software engineering services. Contact us for frontend, backend, and mobile development projects.",
  keywords: ["contact PrimeCode Solutions", "software development contact", "get in touch", "project inquiry"],
  openGraph: {
    title: "Contact Us - PrimeCode Solutions",
    description: "Ready to start your next software project? Contact PrimeCode Solutions today for professional development services.",
    images: ["/images/logo.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" />
      <section className="bg-bg-light py-20">
        <Container>
          <SectionHeader
            title="Get In Touch"
            subtitle="Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          />
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
            <ContactInfoSection />
            <ContactForm />
          </div>
        </Container>
      </section>
      <LocationMapSection />
      <FaqSection />
    </>
  );
}
