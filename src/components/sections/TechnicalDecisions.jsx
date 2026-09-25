"use client";

import { Check, HelpCircle } from "lucide-react";

export default function TechnicalDecisions() {
  const decisions = [
    {
      title: "WHY FASTAPI INSTEAD OF FLASK / DJANGO?",
      project: "Virtual IoT Lab & Rakshak API",
      type: "Architectural Rationale",
      accent: "text-cyanflux",
      borderAccent: "border-cyanflux/30",
      reasons: [
        "Native asynchronous event loops (`async def`) for concurrent WebSocket telemetry streaming.",
        "Strict Pydantic v2 schemas providing automatic data validation on untrusted sensor payloads.",
        "Automatic OpenAPI / Swagger documentation generation without manual synchronization.",
        "High throughput (388–424 RPS measured) with low memory footprint on constrained instances.",
      ],
      tradeoff: "Requires careful handling of CPU-bound tasks in separate threadpools to avoid blocking event loops.",
    },
    {
      title: "WHY SHA-256 HASH CHAIN INSTEAD OF BLOCKCHAIN?",
      project: "Rakshak & Virtual IoT Security Lab",
      type: "Security & Complexity Rationale",
      accent: "text-secgreen",
      borderAccent: "border-secgreen/30",
      reasons: [
        "Cryptographically links each historical event to its predecessor (`prev_hash` + `record_hash`).",
        "Enables instant, deterministic 1-click tamper detection without external peer consensus.",
        "Zero tokenomics, zero gas fees, zero external RPC latency, and zero network dependency.",
        "Preserves audit integrity in strictly air-gapped or offline-first operational environments.",
      ],
      tradeoff: "Provides tamper detection and proof of historical modification, but does not provide distributed multi-party consensus.",
    },
    {
      title: "WHY THREE-TIER SEPARATION FOR KS SENTINEL 2.0?",
      project: "KS Sentinel 2.0",
      type: "Isolation Boundary",
      accent: "text-blueflux",
      borderAccent: "border-blueflux/30",
      reasons: [
        "Prevents browser-based Virtual Web OS from having direct socket access to the host workstation.",
        "Node/Express Secure Gateway handles authentication, rate limiting, and parameter validation.",
        "Windows Local Agent executes strictly authorized, pre-registered capability APIs.",
        "Zero raw shell execution APIs (`cmd`, `powershell`) exposed to web clients.",
      ],
      tradeoff: "Introduces latency overhead compared to direct local IPC and requires multi-service process orchestration.",
    },
    {
      title: "WHY TWO-STEP CONFIRMATION WITH 30s TTL IN RAKSHAK?",
      project: "Rakshak Operator Control Plane",
      type: "Safety Invariant",
      accent: "text-amberwarn",
      borderAccent: "border-amberwarn/30",
      reasons: [
        "Ensures all mutating operations (process termination, service restart, file deletion) pause for human review.",
        "Generates single-use cryptographic token cryptographically bound to the target, operator, and command.",
        "Strict 30-second TTL prevents token hoarding or delayed malicious replay.",
        "Immediate invalidation upon GUI client disconnection prevents stale execution.",
      ],
      tradeoff: "Prevents unattended automated execution of mutating commands in foundation release (Phase 1–3).",
    },
    {
      title: "WHY TF-IDF + COSINE SIMILARITY IN VEDAI?",
      project: "VedAI Scripture Retrieval",
      type: "Performance & Determinism",
      accent: "text-cyanflux",
      borderAccent: "border-cyanflux/30",
      reasons: [
        "Curated canonical dataset consists of 14 foundational verses across 5 chapters.",
        "Sub-15ms deterministic retrieval latency without downloading heavy multi-gigabyte embedding weights.",
        "100% predictable grounding with zero hallucination risk on scripture citations.",
        "Runs efficiently in memory (39MB–56MB RSS) on basic CPU instances.",
      ],
      tradeoff: "Relies on lexical token overlap and n-grams rather than semantic generalizations; full 700-verse expansion will require dense vectors.",
    },
  ];

  return (
    <section className="py-20 border-b border-control-border bg-control-bg">
      <div className="section-shell">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-secgreen">
              <HelpCircle className="h-4 w-4" />
              <span>TECHNICAL RATIONALE // FIRST-PRINCIPLES TRADE-OFFS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-control-text">
              ARCHITECTURAL DECISION LOG
            </h2>
          </div>
          <p className="font-mono text-xs text-control-textSubtle max-w-md">
            Concrete engineering motivations and documented trade-offs derived from repository architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {decisions.map((dec) => (
            <div
              key={dec.title}
              className={`rounded-xl border border-control-border bg-control-surface p-5 flex flex-col justify-between hover:border-control-borderHighlight transition`}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[0.68rem] text-control-textSubtle mb-2">
                  <span className="uppercase">{dec.project}</span>
                  <span className={dec.accent}>{dec.type}</span>
                </div>
                <h3 className="font-mono text-xs font-bold text-control-text tracking-wide mb-4 leading-snug">
                  {dec.title}
                </h3>

                <ul className="space-y-2.5 font-sans text-xs text-control-textMuted mb-4">
                  {dec.reasons.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className={`h-3.5 w-3.5 ${dec.accent} shrink-0 mt-0.5`} />
                      <span className="leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-control-border/60 font-mono text-[0.68rem] text-control-textSubtle">
                <span className="font-semibold text-control-textMuted">Known Trade-off: </span>
                {dec.tradeoff}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
