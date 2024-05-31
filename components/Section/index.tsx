import { Outfit } from "next/font/google";
import React from "react";
type Props = {
  title?: string;
  description?: string;
  titleSize?: "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
  titleColor?: "primary" | "secondary" | "black";
};

const titleSizeClasses = {
  "5xl": "text-5xl",
  "4xl": "text-4xl",
  "3xl": "text-3xl",
  "2xl": "text-2xl",
  xl: "text-xl",
  lg: "text-lg",
  md: "text-md",
  sm: "text-sm",
  xs: "text-xs",
};

export default function Section({
  title = "",
  titleSize = "xl",
  description,
  children,
  className,
  titleColor = "primary",
}: Props) {
  const titleClass = `${titleSizeClasses[titleSize]} font-bold  ${
    titleColor === "primary"
      ? "text-[var(--nutmeg)]"
      : titleColor === "secondary"
        ? "text-[var(--dark-raspberry)]"
        : "text-[var(--dark-charcoal)]"
  }`;

  const sectionClass = `flex flex-col space-y-4 p-6 sm:p-4 text-[var(--nutmeg)] mb-2   ${className} `;

  return (
    <section className={sectionClass}>
      {title && <h3 className={titleClass}>{title}</h3>}
      {description && (
        <p className="text-[var(--dark-charcoal)]">{description}</p>
      )}
      {children}
    </section>
  );
}
