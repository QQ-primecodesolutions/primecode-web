import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[1.1rem] font-semibold transition-all duration-300";

const variantClasses = {
  primary:
    "bg-gradient-to-br from-primary to-secondary text-white hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(37,99,235,0.3)]",
  secondary:
    "border-2 border-white/30 bg-white/10 text-white backdrop-blur-md hover:-translate-y-1 hover:bg-white/20 hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)]",
};

type Variant = keyof typeof variantClasses;

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type LinkButtonProps = CommonProps & { href: string };
type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...rest
}: LinkButtonProps | NativeButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
