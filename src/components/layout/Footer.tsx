import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/nav";
import { contactInfo, socialLinks } from "@/data/contactInfo";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-bg-dark to-[#1e293b] pt-16 pb-8 text-white before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-br before:from-primary before:to-secondary">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 sm:px-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="PrimeCode Solutions Logo"
              width={160}
              height={50}
              className="mb-6 h-[50px] w-auto rounded-lg bg-white/95 p-2"
            />
          </Link>
          <p className="leading-relaxed text-white/80">
            At PrimeCode Solutions, we combine technical expertise with a commitment to innovation, ensuring that
            our clients receive high-quality solutions that meet the evolving demands of the digital landscape.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Quick Links</h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Get In Touch</h3>
          <p className="mb-6 text-white/80">Email: {contactInfo.email.lines[0]}</p>
          <h3 className="mb-4 text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:shadow-[0_8px_25px_rgba(37,99,235,0.3)]"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 bg-black/30 py-6 text-center">
        <p className="text-sm text-white/60">
          &copy; {year} {siteConfig.legalName}. All rights reserved. | Developed and Maintained by{" "}
          <strong>{siteConfig.name}</strong>
        </p>
      </div>
    </footer>
  );
}
