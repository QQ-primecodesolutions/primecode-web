import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const objectives = [
  {
    title: "Strategic Technological Integration",
    description: "Identify key areas for technology application and initiate the development of tailored solutions.",
  },
  {
    title: "Skill Development Initiatives",
    description: "Implement training and mentorship programs to cultivate local talent and enhance digital capabilities.",
  },
  {
    title: "Community Engagement",
    description:
      "Establish robust connections with residents, local businesses, and organizations to gain insights into specific needs and challenges, ensuring a targeted approach to solution development.",
  },
];

export function OurStorySection() {
  return (
    <section className="bg-card py-20">
      <Container>
        <SectionHeader
          title="Our Story"
          subtitle="Founded by passionate software engineers dedicated to driving technological innovation and fostering community development through strategic technology implementation."
        />

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-2xl font-bold text-text-primary">Incorporation and Founding Vision</h3>
            <p className="mb-6 leading-relaxed text-text-secondary">
              Founded on January 15, 2024, by Morongwe Molaba and Retshidisitswe Radebe – PrimeCode Solutions was
              established with a clear vision to address the technological gaps in our hometown. The primary
              objective is to foster community development through strategic technology implementation.
            </p>
            <h3 className="mb-3 text-2xl font-bold text-text-primary">Team Composition</h3>
            <p className="leading-relaxed text-text-secondary">
              PrimeCode Solutions is composed of a collaborative and diverse team of skilled software engineers,
              dedicated to leveraging their collective expertise for the benefit of the community.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[20px] shadow-xl">
            <Image
              src="/images/about.jpg"
              alt="About PrimeCode Solutions"
              width={600}
              height={400}
              className="h-[400px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[20px] shadow-xl md:order-1">
            <Image
              src="/images/gap.jpeg"
              alt="Bridging Technology Gap"
              width={600}
              height={400}
              className="h-[400px] w-full object-cover"
            />
          </div>
          <div className="md:order-2">
            <h3 className="mb-3 text-2xl font-bold text-text-primary">Mission and Immediate Objectives</h3>
            <p className="mb-4 leading-relaxed text-text-secondary">
              PrimeCode Solutions aims to empower the community through a phased approach to technological
              integration. Our immediate objectives include:
            </p>
            <ul className="space-y-4">
              {objectives.map((objective) => (
                <li key={objective.title} className="text-text-secondary">
                  <strong className="text-primary">{objective.title}:</strong> {objective.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
