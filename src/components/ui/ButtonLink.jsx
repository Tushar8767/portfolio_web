"use client";

/**
 * Reusable button/link component.
 * variant: "primary" | "secondary" | "ghost" | "danger"
 * size: "sm" | "md" | "lg"
 */
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  target,
  rel,
  onClick,
  className = "",
  disabled = false,
  as: Component,
}) {
  const variantStyles = {
    primary:
      "border-cyanflux/50 bg-cyanflux/12 text-white hover:bg-cyanflux/20 hover:border-cyanflux/70 shadow-glow",
    secondary:
      "border-white/12 bg-white/[0.05] text-slate-200 hover:border-white/22 hover:bg-white/[0.09] hover:text-white",
    ghost: "border-transparent bg-transparent text-slate-300 hover:bg-white/[0.06] hover:text-white",
    green:
      "border-secgreen/40 bg-secgreen/10 text-secgreen hover:bg-secgreen/18 hover:border-secgreen/60",
    danger: "border-alertred/40 bg-alertred/10 text-alertred hover:bg-alertred/18",
  };

  const sizeStyles = {
    sm: "min-h-9 px-4 text-xs gap-1.5",
    md: "min-h-11 px-5 text-sm gap-2",
    lg: "min-h-12 px-6 text-base gap-2.5",
  };

  const baseStyles =
    "inline-flex items-center justify-center rounded-lg border font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyanflux focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const allStyles = `${baseStyles} ${variantStyles[variant] ?? variantStyles.secondary} ${sizeStyles[size] ?? sizeStyles.md} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" ? <Icon className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
      {children}
      {Icon && iconPosition === "right" ? <Icon className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
    </>
  );

  if (Component) {
    return (
      <Component href={href} className={allStyles} onClick={onClick} disabled={disabled}>
        {content}
      </Component>
    );
  }

  if (onClick && !href) {
    return (
      <button type="button" className={allStyles} onClick={onClick} disabled={disabled}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={allStyles}
      target={target}
      rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
      aria-disabled={disabled}
    >
      {content}
    </a>
  );
}

