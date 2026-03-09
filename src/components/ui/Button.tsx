import { type ReactNode } from "react";
import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

const variants = {
  primary: "bg-accent text-white hover:bg-accent-dark shadow-sm hover:shadow-md hover:-translate-y-0.5",
  secondary: "bg-transparent text-ink border border-border hover:border-ink hover:bg-cream",
  ghost: "bg-transparent text-mid hover:text-ink",
};

const sizes = {
  sm: "text-sm px-3.5 py-2 rounded",
  md: "text-sm font-semibold px-5 py-2.5 rounded",
  lg: "text-base font-bold px-6 py-3.5 rounded",
};

export default function Button({
  children, variant = "primary", size = "md",
  href, onClick, className, disabled, type = "button", fullWidth,
}: ButtonProps) {
  const cls = clsx(
    "inline-flex items-center justify-center gap-2 transition-all duration-200 font-display tracking-tight cursor-pointer",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} onClick={onClick} className={cls} disabled={disabled}>{children}</button>;
}
