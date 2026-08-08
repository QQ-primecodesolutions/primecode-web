import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WhatWeOfferSection } from "@/components/sections/services/WhatWeOfferSection";
import { WhyChooseUsSection } from "@/components/sections/services/WhyChooseUsSection";
import { CtaSection } from "@/components/sections/services/CtaSection";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive software engineering services including frontend development, backend development, and mobile app development by PrimeCode Solutions.",
  keywords: [
    "frontend development",
    "backend development",
    "mobile development",
    "software engineering services",
    "web development",
  ],
  openGraph: {
    title: "Our Services - PrimeCode Solutions",
    description:
      "Professional software engineering services covering the entire development lifecycle - from web development to mobile applications.",
    images: ["/images/front-end.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" />
      <WhatWeOfferSection />
      <WhyChooseUsSection />
      <CtaSection />
    </>
  );
}
