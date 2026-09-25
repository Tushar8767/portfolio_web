"use client";

/**
 * Reusable Badge / Tag component for skills, tech stack, categories.
 * variant: "default" | "cyan" | "green" | "violet" | "plasma" | "red"
 * size: "sm" | "md"
 */
export default function Badge({ children, variant = "default", size = "md", className = "" }) {
  const variantStyles = {
    default: "border-white/12 bg-white/[0.06] text-slate-300",
    cyan: "border-cyanflux/20 bg-cyanflux/10 text-cyan-200",
    green: "border-secgreen/25 bg-secgreen/10 text-green-300",
    violet: "border-violetflux/22 bg-violetflux/10 text-violet-200",
    plasma: "border-plasma/20 bg-plasma/10 text-emerald-200",
    red: "border-alertred/25 bg-alertred/10 text-red-300",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-[0.65rem]",
    md: "px-2.5 py-1.5 text-xs",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border font-medium ${variantStyles[variant] ?? variantStyles.default} ${sizeStyles[size] ?? sizeStyles.md} ${className}`}
    >
      {children}
    </span>
  );
}

