import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  return (
    <section className="bg-card py-20">
      <Container>
        <SectionHeader title="Frequently Asked Questions" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[20px] border border-border bg-bg-light p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                <faq.icon size={24} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-text-primary">{faq.question}</h3>
              <p className="leading-relaxed text-text-secondary">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
