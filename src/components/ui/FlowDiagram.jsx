"use client";

import { ChevronDown } from "lucide-react";

/**
 * Vertical workflow / pipeline diagram for case studies.
 * steps: Array of { label: string, detail?: string }
 * color: "cyan" | "green" | "violet"
 */
export default function FlowDiagram({ steps, color = "cyan", title }) {
  const colorStyles = {
    cyan: {
      step: "border-cyanflux/30 bg-cyanflux/8",
      label: "text-cyanflux",
      line: "text-cyanflux/40",
    },
    green: {
      step: "border-secgreen/30 bg-secgreen/8",
      label: "text-secgreen",
      line: "text-secgreen/40",
    },
    violet: {
      step: "border-violetflux/30 bg-violetflux/8",
      label: "text-violetflux",
      line: "text-violetflux/40",
    },
  };

  const styles = colorStyles[color] ?? colorStyles.cyan;

  return (
    <div className="space-y-1">
      {title ? (
        <p className="terminal-label mb-4">{title}</p>
      ) : null}
      {steps.map((step, index) => (
        <div key={step.label} className="flex flex-col items-center">
          <div
            className={`w-full rounded-lg border px-4 py-3 text-center ${styles.step}`}
          >
            <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${styles.label}`}>
              {step.label}
            </p>
            {step.detail ? (
              <p className="mt-1 text-xs text-slate-400">{step.detail}</p>
            ) : null}
          </div>
          {index < steps.length - 1 ? (
            <ChevronDown className={`h-4 w-4 my-0.5 ${styles.line}`} aria-hidden="true" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

