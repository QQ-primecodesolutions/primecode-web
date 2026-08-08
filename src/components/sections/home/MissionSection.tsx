import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MissionSection() {
  return (
    <section className="bg-card py-20">
      <Container>
        <SectionHeader title="Mission" />
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <p className="text-lg leading-loose text-text-secondary">
            Our mission is dual-fold. Firstly, we are dedicated to delivering cutting-edge frontend and backend
            development, mobile development, and other software engineering services, prioritizing client
            satisfaction and industry excellence. Secondly, we are committed to advocating for the pivotal role of
            technology in modern education, cultivating a skilled tech workforce, and catalyzing positive societal
            change. Through our unwavering commitment to excellence, innovation, and community engagement, we
            strive to bridge the gap between technological potential and tangible achievements.
          </p>
          <div className="relative overflow-hidden rounded-[20px] shadow-xl transition-transform duration-300 [transform:perspective(1000px)_rotateY(-5deg)] hover:[transform:perspective(1000px)_rotateY(0deg)_scale(1.02)] md:block">
            <Image
              src="/images/mission.jpg"
              alt="Our Mission"
              width={600}
              height={400}
              className="h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
