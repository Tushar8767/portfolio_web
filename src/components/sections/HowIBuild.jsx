"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, Terminal } from "lucide-react";

export default function HowIBuild() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Understand the Problem",
      detail:
        "Deconstruct the root domain constraints before writing code. Determine whether the system is CPU-bound, I/O-bound, offline-first, or exposed to hostile networks.",
      deliverable: "Problem statement & threat assumptions",
    },
    {
      num: "02",
      title: "Define Requirements & Invariants",
      detail:
        "Lock non-negotiable invariants (e.g. 'Zero shell execution', 'Localhost loopback confinement', 'Fail-closed policy', 'Advisory-only AI').",
      deliverable: "Security invariants & API schemas",
    },
    {
      num: "03",
      title: "Design Architecture & Boundaries",
      detail:
        "Isolate trust levels and decouple layers. Establish strict data boundaries between UI presentations, gateway brokers, and native OS interaction layers.",
      deliverable: "Multi-tier architecture diagrams & state machines",
    },
    {
      num: "04",
      title: "Build the Core System",
      detail:
        "Implement deterministic foundational modules sequentially. Avoid monolithic bloat by creating isolated dataclasses, routers, and handlers.",
      deliverable: "Executable foundation & capability registries",
    },
    {
      num: "05",
      title: "Add Security Boundaries & Controls",
      detail:
        "Enforce fail-closed authorization, single-use confirmation tokens for mutating operations, rate limits, and cryptographic hash chaining.",
      deliverable: "Policy engines & audit ledgers",
    },
    {
      num: "06",
      title: "Test Failure Cases & Adversarial Vectors",
      detail:
        "Test for race conditions, PID reuse, replay attacks, parameter fuzzing, path traversal escapes, and prompt injection attempts.",
      deliverable: "Comprehensive pytest/Jest regression suites",
    },
    {
      num: "07",
      title: "Deploy, Monitor & Validate",
      detail:
        "Deploy to reproducible containerized or cloud environments (Render, Docker, local service). Stream health telemetry via WebSockets.",
      deliverable: "Production blueprints & SOC consoles",
    },
    {
      num: "08",
      title: "Document Architecture & Audit Trails",
      detail:
        "Document every invariant, architectural trade-off, release audit report, and recovery CLI guide for maintainability.",
      deliverable: "Release audit reports & technical case studies",
    },
  ];

  return (
    <section id="engineering" className="py-20 border-b border-control-border bg-control-surface">
      <div className="section-shell">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyanflux">
              <Terminal className="h-4 w-4" />
              <span>ENGINEERING METHODOLOGY // CANONICAL WORKFLOW</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-control-text">
              HOW I BUILD
            </h2>
          </div>
          <p className="font-mono text-xs text-control-textSubtle max-w-md">
            A disciplined, 8-stage engineering process focused on verifiable invariants, security boundaries, and deterministic testing.
          </p>
        </div>

        {/* Step Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-xl border p-5 transition duration-200 flex flex-col justify-between ${
                  isActive
                    ? "border-cyanflux bg-control-bg shadow-glow"
                    : "border-control-border bg-control-bg/60 hover:border-control-borderHighlight"
                }`}
                role="button"
                tabIndex={0}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono">
                    <span className="text-xs font-bold text-cyanflux">{step.num}</span>
                    <span className="text-[0.65rem] text-control-textSubtle uppercase">STAGE</span>
                  </div>
                  <h3 className="font-sans text-base font-bold text-control-text mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-control-textMuted leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-control-border/60 font-mono text-[0.68rem] text-control-textSubtle flex items-center justify-between">
                  <span className="truncate">Deliverable: {step.deliverable}</span>
                  <ChevronRight className="h-3 w-3 text-cyanflux shrink-0 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
