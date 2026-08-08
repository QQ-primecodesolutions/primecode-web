import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: { src: string; alt: string };
}

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FaqItem {
  icon: LucideIcon;
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}
