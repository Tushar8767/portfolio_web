"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Shield, Cpu, Terminal, ArrowUpRight, ExternalLink, X } from "lucide-react";

export default function EngineeringProof() {
  const [selectedProof, setSelectedProof] = useState(null);

  const proofItems = [
    {
      id: "rakshak-tests",
      metric: "1,387 / 1,387",
      label: "Regression Tests Passed",
      sublabel: "Rakshak Core & API Suite",
      system: "Rakshak",
      systemSlug: "rakshak",
      badge: "100% Pass Rate",
      accent: "secgreen",
      borderAccent: "border-secgreen/40",
      textAccent: "text-secgreen",
      details: {
        file: "tests/unit, tests/integration, tests/security",
        summary:
          "Full Pytest regression test suite for Rakshak Phase 3 release certification (P3.7). Validates identity resolvers, authority tiers, fail-closed policy engine, loopback API, and WebSocket backpressure.",
        executionTime: "385.91 seconds (0 failed, 0 errors)",
        verificationFile: "docs/release-audit.md (Section 20: Comprehensive Test Matrix)",
      },
    },
    {
      id: "iot-tests",
      metric: "117 / 117",
      label: "Automated IoT Tests",
      sublabel: "Proteus & Cloud Backend",
      system: "Virtual IoT Security Laboratory",
      systemSlug: "virtual-iot",
      badge: "100% Pass Rate",
      accent: "cyanflux",
      borderAccent: "border-cyanflux/40",
      textAccent: "text-cyanflux",
      details: {
        file: "backend/tests (test_phase0 to test_phase9)",
        summary:
          "End-to-end automated tests covering Proteus ARM7 firmware serial frames, UART bridge ingestion, token authentication, rate-limiting, detection rules, and SHA-256 audit ledger hash chaining.",
        executionTime: "23.4 seconds (117 passed, 0 failed)",
        verificationFile: "FINAL_PROJECT_REPORT.md (Section 11: QA & Verification)",
      },
    },
    {
      id: "rakshak-caps",
      metric: "35 Locked",
      label: "Capability Model",
      sublabel: "26 Read-Only · 9 Mutating",
      system: "Rakshak",
      systemSlug: "rakshak",
      badge: "Zero Dynamic Escapes",
      accent: "secgreen",
      borderAccent: "border-secgreen/40",
      textAccent: "text-secgreen",
      details: {
        file: "DEFAULT_CAPABILITY_REGISTRY (MappingProxyType)",
        summary:
          "Structurally immutable capability registry preventing dynamic expansion. Exactly 9 mutating capabilities (file.write, file.delete, process.terminate, service operations) strictly require two-step cryptographic token confirmation.",
        executionTime: "Static Allowlist Enforced",
        verificationFile: "docs/architecture.md & docs/permissions.md",
      },
    },
    {
      id: "iot-scenarios",
      metric: "7 Scenarios",
      label: "Attack Simulation Suite",
      sublabel: "MITRE ATT&CK Aligned",
      system: "Virtual IoT Security Laboratory",
      systemSlug: "virtual-iot",
      badge: "Deterministic Execution",
      accent: "cyanflux",
      borderAccent: "border-cyanflux/40",
      textAccent: "text-cyanflux",
      details: {
        file: "attack_simulator/scenarios_a_to_g.py",
        summary:
          "Automated attack simulations: Scenario A (Unregistered Device), B (Brute-Force Auth Flood), C (Telemetry Flood DoS), D (Sensor Tampering 105°C), E (Silent Drop Deadman), F (Device Impersonation), and G (Unauthorized Command).",
        executionTime: "Deterministic Automated Runner",
        verificationFile: "FINAL_PROJECT_REPORT.md (Section 7: Attack Scenarios)",
      },
    },
    {
      id: "vedai-safety",
      metric: "5 Layers",
      label: "Crisis Safety Interception",
      sublabel: "Zero Clinical Claims",
      system: "VedAI",
      systemSlug: "vedai",
      badge: "India 112 / 14416 / US 988",
      accent: "blueflux",
      borderAccent: "border-blueflux/40",
      textAccent: "text-blueflux",
      details: {
        file: "backend/services/safetyService.js",
        summary:
          "Multi-tiered safety architecture intercepting direct English, leetspeak, Hinglish ('ab jeena nahi'), Marathi ('mala jagaycha nahiye'), and indirect despair expressions (<10ms) with benign idiom filtering ('killing it').",
        executionTime: "100% Pass across SAFE-001..007 suites",
        verificationFile: "FINAL_CLAIM_AUDIT.md & test/layered-safety.test.js",
      },
    },
    {
      id: "sentinel-sandbox",
      metric: "3-Tier",
      label: "Air-Gapped Isolation",
      sublabel: "Web OS -> Gateway -> Windows Agent",
      system: "KS Sentinel 2.0",
      systemSlug: "ks-sentinel",
      badge: "Zero Shell Execution",
      accent: "cyanflux",
      borderAccent: "border-cyanflux/40",
      textAccent: "text-cyanflux",
      details: {
        file: "docs/SECURITY_BOUNDARY.md & server/src/routes/api.js",
        summary:
          "Rigorous three-tier boundary ensuring browser clients cannot execute shell commands on the developer workstation. All operations are mediated through pre-authorized capability APIs with path validation.",
        executionTime: "Module 0–27 Architecture Roadmap",
        verificationFile: "KS_Sentinel_2.0_Master_Plan.md",
      },
    },
  ];

  return (
    <section id="proof" className="py-16 border-b border-control-border bg-control-bg">
      <div className="section-shell">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-secgreen">
              <CheckCircle2 className="h-4 w-4" />
              <span>EMPIRICAL VALIDATION // ZERO FABRICATED METRICS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-control-text">
              ENGINEERING PROOF
            </h2>
          </div>
          <p className="font-mono text-xs text-control-textSubtle max-w-md">
            Click any metric to inspect repository test reports, execution logs, and cryptographic verification evidence.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proofItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedProof(item)}
              className="flex flex-col justify-between text-left p-5 rounded-xl border border-control-border bg-control-surface hover:border-control-borderHighlight hover:bg-control-surfaceHover transition group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-mono text-[0.68rem]">
                  <span className="text-control-textSubtle uppercase tracking-wider">{item.system}</span>
                  <span className={`px-2 py-0.5 rounded border border-control-border bg-control-bg text-control-textMuted`}>
                    {item.badge}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className={`font-mono text-3xl sm:text-4xl font-extrabold ${item.textAccent}`}>
                    {item.metric}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-control-textSubtle group-hover:text-control-text transition" />
                </div>
                <h3 className="font-sans text-sm font-semibold text-control-text mt-2">
                  {item.label}
                </h3>
                <p className="font-mono text-xs text-control-textSubtle mt-0.5">
                  {item.sublabel}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-control-border/60 flex items-center justify-between font-mono text-[0.68rem] text-control-textMuted">
                <span>Inspect Verified Evidence</span>
                <span className="text-cyanflux">→ View</span>
              </div>
            </button>
          ))}
        </div>

        {/* Evidence Inspection Modal */}
        {selectedProof && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProof(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="w-full max-w-lg rounded-xl border border-control-border bg-control-surface p-6 shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between border-b border-control-border pb-3">
                <div>
                  <span className="font-mono text-[0.68rem] text-secgreen uppercase tracking-wider">
                    VERIFIED EVIDENCE DOSSIER // {selectedProof.system}
                  </span>
                  <h3 className="font-display text-xl font-bold text-control-text mt-1">
                    {selectedProof.metric} — {selectedProof.label}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProof(null)}
                  className="rounded p-1 text-control-textMuted hover:text-control-text"
                  aria-label="Close evidence modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-control-textSubtle block mb-1">Architecture Summary:</span>
                  <p className="font-sans text-sm text-control-text leading-relaxed">
                    {selectedProof.details.summary}
                  </p>
                </div>

                <div className="rounded-lg border border-control-border bg-control-bg p-3 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-control-textSubtle">Repository Source:</span>
                    <span className="text-control-text">{selectedProof.details.file}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-control-textSubtle">Execution Status:</span>
                    <span className="text-secgreen font-semibold">{selectedProof.details.executionTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-control-textSubtle">Audit Documentation:</span>
                    <span className="text-cyanflux">{selectedProof.details.verificationFile}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-control-border">
                <Link
                  href={`/projects/${selectedProof.systemSlug}`}
                  onClick={() => setSelectedProof(null)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-cyanflux/40 bg-cyanflux/10 px-4 py-2 font-mono text-xs font-semibold text-cyanflux hover:bg-cyanflux/20 transition"
                >
                  <span>Open Full Case Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedProof(null)}
                  className="font-mono text-xs text-control-textMuted hover:text-control-text"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
