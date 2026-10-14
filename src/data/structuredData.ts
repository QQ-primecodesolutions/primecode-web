import { siteConfig } from "@/data/siteConfig";
import { socialLinks } from "@/data/contactInfo";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  image: `${siteConfig.url}/images/logo.png`,
  email: "primecode-solutions@outlook.com",
  telephone: siteConfig.phoneE164,
  areaServed: [
    { "@type": "City", name: "Phuthaditjhaba" },
    { "@type": "Place", name: "QwaQwa" },
    { "@type": "State", name: "Free State" },
    { "@type": "Country", name: "South Africa" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phuthaditjhaba",
    addressRegion: "Free State",
    addressCountry: "ZA",
  },
  sameAs: socialLinks
    .filter((link) => link.href !== "#" && link.href !== siteConfig.whatsappUrl)
    .map((link) => link.href),
};
