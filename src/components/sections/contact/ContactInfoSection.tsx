import { Users, type LucideIcon } from "lucide-react";
import { contactInfo, socialLinks } from "@/data/contactInfo";
import type { ContactLine } from "@/lib/types";

const items: { icon: LucideIcon; title: string; lines: ContactLine[] }[] = [
  contactInfo.location,
  contactInfo.email,
  contactInfo.phone,
  contactInfo.responseTime,
];

export function ContactInfoSection() {
  return (
    <div className="flex flex-col gap-8">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
            <item.icon size={22} />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">{item.title}</h3>
            {item.lines.map((line) =>
              typeof line === "string" ? (
                <p key={line} className="text-text-secondary">
                  {line}
                </p>
              ) : (
                <p key={line.href} className="text-text-secondary">
                  <a
                    href={line.href}
                    {...(line.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    className="transition-colors hover:text-primary"
                  >
                    {line.text}
                  </a>
                </p>
              ),
            )}
          </div>
        </div>
      ))}

      <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
          <Users size={22} />
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-text-primary">Follow Us</h3>
          <div className="mt-1 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white transition-transform hover:-translate-y-0.5"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
