import { clsx } from "clsx";
import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "success" | "warning" | "danger" | "neutral" | "accent";
  size?: "sm" | "md";
}

const variants = {
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  danger: "bg-danger-soft text-danger",
  neutral: "bg-cream text-mid",
  accent: "bg-accent-soft text-accent",
};

export default function Badge({ children, variant = "neutral", size = "sm" }: BadgeProps) {
  return (
    <span className={clsx(
      "inline-flex items-center gap-1 rounded-full font-semibold",
      size === "sm" ? "text-xs px-2.5 py-1" : "text-sm px-3 py-1.5",
      variants[variant]
    )}>
      {children}
    </span>
  );
}
