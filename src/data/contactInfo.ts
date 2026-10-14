import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import type { ContactLine, SocialLink } from "@/lib/types";
import { siteConfig } from "@/data/siteConfig";

export const contactInfo = {
  location: {
    icon: MapPin,
    title: "Our Location",
    lines: ["Phuthaditjhaba, QwaQwa, Free State", "On-site visits to clients, or fully remote"],
  },
  email: {
    icon: Mail,
    title: "Email Address",
    lines: ["primecode-solutions@outlook.com"],
  },
  phone: {
    icon: Phone,
    title: "Call or WhatsApp",
    lines: [
      { text: siteConfig.phone, href: `tel:${siteConfig.phoneE164}` },
      { text: "Chat with us on WhatsApp", href: siteConfig.whatsappUrl },
    ] satisfies ContactLine[],
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
  { label: "WhatsApp", href: siteConfig.whatsappUrl, icon: FaWhatsapp },
];
