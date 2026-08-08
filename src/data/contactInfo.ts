import { MapPin, Mail, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import type { SocialLink } from "@/lib/types";

export const contactInfo = {
  location: {
    icon: MapPin,
    title: "Our Location",
    lines: ["Phuthaditjhaba, Free State", "South Africa"],
  },
  email: {
    icon: Mail,
    title: "Email Address",
    lines: ["primecode-solutions@outlook.com"],
  },
  responseTime: {
    icon: Clock,
    title: "Response Time",
    lines: ["We typically respond within 24 hours", "Monday to Friday, 9AM to 5PM"],
  },
};

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://web.facebook.com/profile.php?id=61586481160186", icon: FaFacebook },
  { label: "Instagram", href: "https://www.instagram.com/primecode_solutions/", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedin },
];
