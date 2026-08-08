import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LocationMapSection() {
  return (
    <section className="bg-bg-light py-16">
      <Container>
        <SectionHeader title="Find Us" subtitle="We're located in Phuthaditjhaba, Free State. Visit us or reach out digitally." />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224262.87157409827!2d28.653416579755778!3d-28.566538435140814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef2b0f9699e0c9b%3A0x23ea9ed3793f6557!2sPhuthaditjhaba!5e0!3m2!1sen!2sza!4v1707415087183!5m2!1sen!2sza"
          width="100%"
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PrimeCode Solutions location in Phuthaditjhaba"
          className="rounded-2xl shadow-lg"
        />
      </Container>
    </section>
  );
}
