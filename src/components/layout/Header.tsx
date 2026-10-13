"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-white/95 px-[5%] py-4 shadow-[0_2px_5px_rgba(0,0,0,0.1)] backdrop-blur-sm">
        <Link href="/" aria-label="PrimeCode Solutions home" className="group flex shrink-0 items-center gap-3">
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={512}
            height={512}
            className="h-12 w-12 transition-transform group-hover:-translate-y-0.5"
            priority
          />
          <span className="flex flex-col leading-none text-logo-navy">
            <span className="text-xl font-bold tracking-tight">PrimeCode</span>
            <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.42em]">SOLUTIONS</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-md px-4 py-2 text-[1rem] font-medium transition-colors ${
                    isActive ? "bg-primary text-white" : "text-text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
          className="p-2 text-text-primary md:hidden"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* Rendered as a sibling of <nav>, not nested inside it: nav's backdrop-blur
          establishes a CSS containing block for fixed-position descendants, which
          would shrink this overlay to nav's own height instead of the viewport. */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[9998] bg-black/40 md:hidden"
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 z-[9999] h-screen w-[250px] border-l border-border bg-white shadow-[-5px_0_15px_rgba(0,0,0,0.1)] md:hidden"
            >
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-text-primary hover:bg-black/5 hover:text-primary"
              >
                <X size={22} />
              </button>
              <ul className="flex h-full flex-col gap-2 px-4 pt-16 pb-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href} className="w-full">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-md p-4 text-[1rem] ${
                          isActive ? "bg-primary text-white" : "text-text-primary hover:bg-primary hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
