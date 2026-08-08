import {
  CircleQuestionMark,
  Clock,
  Banknote,
  LifeBuoy,
  Code,
  Handshake,
} from "lucide-react";
import type { FaqItem } from "@/lib/types";

export const faqs: FaqItem[] = [
  {
    icon: CircleQuestionMark,
    question: "What services do you offer?",
    answer:
      "We specialize in frontend development, backend development, and mobile app development. We handle the complete software development lifecycle from planning to deployment and maintenance.",
  },
  {
    icon: Clock,
    question: "How long does a project take?",
    answer:
      "Project timelines vary based on complexity and requirements. Simple websites may take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline after discussing your needs.",
  },
  {
    icon: Banknote,
    question: "How do you price your services?",
    answer:
      "We offer competitive pricing based on project scope, complexity, and timeline. We provide detailed quotes after understanding your requirements and can work with various budget ranges.",
  },
  {
    icon: LifeBuoy,
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer ongoing maintenance, updates, and support for all our projects. We believe in building long-term relationships with our clients and ensuring their success.",
  },
  {
    icon: Code,
    question: "What technologies do you use?",
    answer:
      "We work with modern technologies including React, Node.js, Python, React Native, Flutter, and various databases. We choose the best technology stack for each project's specific needs.",
  },
  {
    icon: Handshake,
    question: "How do we get started?",
    answer:
      "Simply fill out the contact form above or send us an email. We'll schedule a consultation to discuss your project requirements, timeline, and budget to create a customized solution for you.",
  },
];
