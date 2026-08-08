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
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phuthaditjhaba",
    addressRegion: "Free State",
    addressCountry: "ZA",
  },
  sameAs: socialLinks.filter((link) => link.href !== "#").map((link) => link.href),
};
