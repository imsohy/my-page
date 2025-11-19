import { type ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "accent";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return <span className={`chip ${variant === "accent" ? "accent" : ""}`}>{children}</span>;
}

