import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { OurStorySection } from "@/components/sections/about/OurStorySection";
import { OurValuesSection } from "@/components/sections/about/OurValuesSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PrimeCode Solutions - founded by experienced software engineers to drive technological innovation and community development.",
  openGraph: {
    title: "About PrimeCode Solutions - Our Story & Mission",
    description:
      "Discover our journey from founding to becoming a premier tech solutions provider focused on community development and innovation.",
    images: ["/images/about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" />
      <OurStorySection />
      <OurValuesSection />
    </>
  );
}
