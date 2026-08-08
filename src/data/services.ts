import { Code, Server, Smartphone } from "lucide-react";
import type { ServiceItem } from "@/lib/types";

export const services: ServiceItem[] = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "PrimeCode Solutions specializes in crafting engaging and responsive user interfaces (UI) using cutting-edge frontend technologies. Our frontend development expertise ensures seamless and intuitive user experiences, aligning with the latest design principles and industry standards.",
    image: { src: "/images/front-end.png", alt: "Frontend Development" },
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Our backend development services focus on creating robust, scalable, and secure server-side architecture. From database design to API development, we engineer the backbone of your applications, optimizing performance and ensuring smooth data flow, processing, and storage.",
    image: { src: "/images/backend.jpeg", alt: "Backend Development" },
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "PrimeCode Solutions excels in mobile app development across various platforms, including iOS and Android. Leveraging the latest frameworks and technologies, we design and build custom mobile applications that deliver superior performance, intuitive navigation, and a compelling user experience.",
    image: { src: "/images/mobile1.png", alt: "Mobile Development" },
  },
];
