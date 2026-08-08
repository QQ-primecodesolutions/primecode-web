import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { VisionSection } from "@/components/sections/home/VisionSection";
import { MissionSection } from "@/components/sections/home/MissionSection";
import { KeyServicesSection } from "@/components/sections/home/KeyServicesSection";

export const metadata: Metadata = {
  title: "Transforming Ideas into Seamless Digital Experiences",
  description:
    "PrimeCode Solutions is a software engineering company delivering frontend development, backend development, and mobile app development end to end.",
  openGraph: {
    title: "PrimeCode Solutions - Transforming Ideas into Seamless Digital Experiences",
    description:
      "PrimeCode Solutions is a software engineering company delivering frontend development, backend development, and mobile app development end to end.",
    images: ["/images/space-digital.webp"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <MissionSection />
      <KeyServicesSection />
    </>
  );
}
