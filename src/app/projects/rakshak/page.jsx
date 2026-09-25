"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Layers,
  Terminal,
  FileText,
  Key,
  Database,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { getProjectBySlug } from "@/data/projects";

export default function RakshakCaseStudy() {
  const project = getProjectBySlug("rakshak");
  const [activeStage, setActiveStage] = useState(0);
  const [capabilityTab, setCapabilityTab] = useState("mutating");

  if (!project) return null;

  const pipelineStages = [
    {
      id: "input",
      title: "INPUT",
      subtitle: "Operator CLI, Desktop GUI, or Local API",
      detail:
        "Every operation originates as structured input via the CLI (python -m rakshak.main), Tauri desktop console, or the loopback-bound FastAPI backend (127.0.0.1:8765). Raw shell input is strictly prohibited.",
      invariant: "Zero shell execution; loopback client verification enforced.",
    },
    {
      id: "identity",
      title: "IDENTITY",
      subtitle: "Who is requesting?",
      detail:
        "IdentityResolver determines request provenance into immutable models. Supported identity types: LOCAL_USER, CLI, VOICE, AI_AGENT, SERVICE, REMOTE.",
      invariant: "Unauthenticated requests immediately fail closed (IDENTITY_UNAUTHENTICATED).",
    },
    {
      id: "authority",
      title: "AUTHORITY",
      subtitle: "What trust level do they hold?",
      detail:
        "Deterministic 4-tier hierarchy: UNTRUSTED < USER < TRUSTED < ADMIN < SYSTEM. LOCAL_USER/CLI resolves to USER; external or AI identities resolve to UNTRUSTED.",
      invariant: "Anti-Self-Promotion Principle: identities cannot elevate their own authority level.",
    },
    {
      id: "intent",
      title: "INTENT / COMMAND",
      subtitle: "What structured operation is requested?",
      detail:
        "IntentParser translates natural language into structured, immutable Command dataclasses. Prompt-injection filters reject override strings, shell meta-characters (&&, |, ;) and destructive attempts.",
      invariant: "Advisory-only boundary: intent parsing performs 0 authorization and 0 execution.",
    },
    {
      id: "policy",
      title: "POLICY",
      subtitle: "Is this operation permissible under current state?",
      detail:
        "Deterministic Policy Engine evaluates: DENY > REQUIRE_CONFIRMATION > ALLOW. Unknown actions or missing authority strictly result in DENY. Independent of any LLM judgment.",
      invariant: "Zero execution in policy layer; evaluations are pure and side-effect free.",
    },
    {
      id: "confirmation",
      title: "HUMAN CONFIRMATION",
      subtitle: "Mandatory two-step cryptographic challenge",
      detail:
        "Mutating capabilities generate a single-use confirmation token cryptographically bound to the target, operator, and command with a strict 30-second TTL. Replay attempts fail immediately.",
      invariant: "Tokens are consumed atomically; desktop disconnect purges all active challenges.",
    },
    {
      id: "execution",
      title: "EXECUTION GATE",
      subtitle: "Policy-authorized dispatch gate",
      detail:
        "The Execution Broker verifies that a valid PolicyResult(decision=ALLOW) exists matching the command before dispatching. Direct handler invocation attempts are blocked.",
      invariant: "Non-bypassable dispatch boundary.",
    },
    {
      id: "dispatcher",
      title: "DISPATCHER",
      subtitle: "Platform boundary enforcement",
      detail:
        "SystemOperationDispatcher maps the command to allowlisted platform capabilities. Inspects OS PlatformType and enforces fail-closed handling on unsupported platforms.",
      invariant: "Static capability registry; runtime registration is physically impossible.",
    },
    {
      id: "handler",
      title: "HANDLER / ENGINE",
      subtitle: "Deterministic, shell-free system interactions",
      detail:
        "Handlers use native APIs (e.g., psutil for process inspection and Windows API bindings) rather than invoking shell interpreters (no subprocess, no os.system, no eval).",
      invariant: "Target PID self-protection: refusal to terminate current process or PIDs 0, 1, 4.",
    },
    {
      id: "os",
      title: "OS OPERATION",
      subtitle: "Sandboxed execution on Windows host",
      detail:
        "Platform actions execute within bounded resource quotas. File operations are strictly confined within canonical paths to prevent directory traversal escapes (../ or ..\\).",
      invariant: "Bounded memory buffers and timeout limits.",
    },
    {
      id: "audit",
      title: "AUDIT LEDGER",
      subtitle: "Tamper-evident SHA-256 hash chaining",
      detail:
        "Every evaluation, decision, and execution is recorded in an append-only JSONL log. Each record links the previous record hash (SHA-256). Cryptographic break detection detects any historical alteration.",
      invariant: "Immutable historical log; audit failures fail closed.",
    },
  ];

  return (
    <main className="min-h-screen bg-control-bg text-control-text pb-24 pt-20">
      <div className="section-shell">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-control-textMuted hover:text-cyanflux transition mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Control Room Projects</span>
        </Link>

        {/* Case Study Header */}
        <div className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-8 mb-10 shadow-panel">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-secgreen uppercase tracking-wider">
              CYBERSECURITY // LOCAL-FIRST CONTROL PLANE
            </span>
            <span className="rounded border border-control-border bg-control-bg px-2.5 py-0.5 font-mono text-[0.68rem] text-control-textMuted">
              {project.statusBadge}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-control-text mb-3">
            RAKSHAK
          </h1>
          <p className="font-sans text-base sm:text-lg text-control-textMuted max-w-3xl leading-relaxed mb-6">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-control-border/60">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-control-border bg-control-bg px-4 font-mono text-xs font-semibold text-control-text hover:border-control-borderHighlight hover:text-white transition"
            >
              <Github className="h-4 w-4" />
              <span>GitHub Repository (Tushar8767/Rakshak)</span>
            </a>
            <span className="font-mono text-xs text-control-textSubtle px-2">
              Status: Local-first Desktop / Loopback Platform (No public web demo)
            </span>
          </div>
        </div>

        {/* Core Invariants Callout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="rounded-lg border border-control-border bg-control-surface p-4">
            <div className="flex items-center gap-2 font-mono text-xs text-secgreen mb-1 font-bold">
              <Lock className="h-4 w-4" />
              <span>FAIL-CLOSED POLICY</span>
            </div>
            <p className="font-sans text-xs text-control-textMuted leading-relaxed">
              Any unknown capability, mismatched parameter, or missing confirmation token strictly resolves to DENY.
            </p>
          </div>
          <div className="rounded-lg border border-control-border bg-control-surface p-4">
            <div className="flex items-center gap-2 font-mono text-xs text-cyanflux mb-1 font-bold">
              <Terminal className="h-4 w-4" />
              <span>ZERO SHELL INVARIANT</span>
            </div>
            <p className="font-sans text-xs text-control-textMuted leading-relaxed">
              Zero subprocess, zero os.system, zero eval/exec. All interactions utilize bounded psutil and Windows APIs.
            </p>
          </div>
          <div className="rounded-lg border border-control-border bg-control-surface p-4">
            <div className="flex items-center gap-2 font-mono text-xs text-amberwarn mb-1 font-bold">
              <Shield className="h-4 w-4" />
              <span>ADVISORY-ONLY AI</span>
            </div>
            <p className="font-sans text-xs text-control-textMuted leading-relaxed">
              Machine learning models are treated as untrusted metadata with zero authorization or execution rights.
            </p>
          </div>
        </div>

        {/* Section 1: Canonical Security Spine Interactive Visualization */}
        <section className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-8 mb-12 shadow-panel" id="spine">
          <div className="border-b border-control-border pb-4 mb-6">
            <span className="font-mono text-xs text-secgreen uppercase tracking-wider block mb-1">
              ARCHITECTURAL SPINE // NON-BYPASSABLE EXECUTION
            </span>
            <h2 className="font-display text-2xl font-bold text-control-text">
              11-Stage Canonical Security Control Pipeline
            </h2>
            <p className="font-sans text-xs text-control-textMuted mt-1">
              Click any stage in the security pipeline to inspect its exact security invariants and responsibilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
            {/* Step Selector Pipeline */}
            <div className="space-y-1.5 font-mono text-xs">
              {pipelineStages.map((stage, idx) => {
                const isSelected = activeStage === idx;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={`w-full flex items-center justify-between rounded-lg border px-3 py-2 transition text-left ${
                      isSelected
                        ? "border-secgreen bg-secgreen/15 text-secgreen font-bold shadow-glow-green"
                        : "border-control-border bg-control-bg text-control-textMuted hover:border-control-borderHighlight hover:text-control-text"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[0.65rem] text-control-textSubtle">{String(idx + 1).padStart(2, "0")}</span>
                      <span>{stage.title}</span>
                    </div>
                    <ChevronRight className={`h-3.5 w-3.5 ${isSelected ? "text-secgreen" : "text-control-textSubtle"}`} />
                  </button>
                );
              })}
            </div>

            {/* Stage Detail Card */}
            <div className="rounded-xl border border-control-border bg-control-bg p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-control-border pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-secgreen">
                    STAGE {String(activeStage + 1).padStart(2, "0")} // {pipelineStages[activeStage].title}
                  </span>
                  <span className="font-mono text-[0.68rem] text-control-textSubtle">
                    {pipelineStages[activeStage].subtitle}
                  </span>
                </div>

                <p className="font-sans text-sm text-control-text leading-relaxed mb-6">
                  {pipelineStages[activeStage].detail}
                </p>
              </div>

              <div className="rounded-lg border border-control-border bg-control-surface p-4 font-mono text-xs">
                <span className="text-secgreen font-bold block mb-1">Mandatory Security Invariant:</span>
                <span className="text-control-textMuted">{pipelineStages[activeStage].invariant}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Capability Model (35 Locked Capabilities) */}
        <section className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-8 mb-12 shadow-panel" id="capabilities">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-control-border pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-cyanflux uppercase tracking-wider block mb-1">
                CAPABILITY REGISTRY // 35 REGISTERED CAPABILITIES
              </span>
              <h2 className="font-display text-2xl font-bold text-control-text">
                Locked Capability Model (26 Read-Only · 9 Mutating)
              </h2>
            </div>

            <div className="flex rounded-lg border border-control-border bg-control-bg p-0.5 font-mono text-xs">
              <button
                type="button"
                onClick={() => setCapabilityTab("mutating")}
                className={`rounded px-3 py-1 text-xs transition ${
                  capabilityTab === "mutating"
                    ? "bg-amberwarn/20 text-amberwarn border border-amberwarn/30 font-bold"
                    : "text-control-textMuted hover:text-control-text"
                }`}
              >
                9 Mutating (Token Required)
              </button>
              <button
                type="button"
                onClick={() => setCapabilityTab("readonly")}
                className={`rounded px-3 py-1 text-xs transition ${
                  capabilityTab === "readonly"
                    ? "bg-cyanflux/20 text-cyanflux border border-cyanflux/30 font-bold"
                    : "text-control-textMuted hover:text-control-text"
                }`}
              >
                26 Read-Only (Observation)
              </button>
            </div>
          </div>

          {capabilityTab === "mutating" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
              {project.capabilityModel.mutating.map((cap) => (
                <div
                  key={cap.name}
                  className="rounded-lg border border-control-border bg-control-bg p-3.5 space-y-1 hover:border-amberwarn/40 transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amberwarn">{cap.name}</span>
                    <span className="text-[0.62rem] text-control-textSubtle uppercase">{cap.category}</span>
                  </div>
                  <p className="font-sans text-xs text-control-textMuted">{cap.desc}</p>
                  <span className="text-[0.62rem] text-control-textSubtle block pt-1">
                    Requirement: 30s confirmation token
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3 font-mono text-xs">
              <p className="font-sans text-xs text-control-textMuted mb-2">
                All 26 read-only capabilities provide bounded, sanitized host telemetry without modifying system state. File reads are capped at 1 MiB with canonical path confinement.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[0.72rem]">
                {[
                  "system.info", "system.status", "file.list", "file.inspect", "file.read",
                  "process.list", "process.inspect", "service.list", "service.inspect",
                  "network.interfaces", "network.interface.inspect", "network.routes", "network.dns", "network.hostname",
                  "security.monitor.summary", "security.monitor.processes", "security.monitor.services", "security.monitor.startup",
                  "security.monitor.accounts", "security.risk.summary", "security.risk.assess", "audit.query", "audit.summary",
                  "audit.correlate", "audit.verify", "forensic.summary",
                ].map((cap) => (
                  <div key={cap} className="rounded border border-control-border bg-control-bg px-2.5 py-1.5 text-control-textMuted">
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Section 3: Testing & Release Audit Matrix */}
        <section className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-8 mb-12 shadow-panel" id="testing">
          <div className="border-b border-control-border pb-4 mb-6">
            <span className="font-mono text-xs text-secgreen uppercase tracking-wider block mb-1">
              QUALITY ASSURANCE // RELEASE CERTIFICATION
            </span>
            <h2 className="font-display text-2xl font-bold text-control-text">
              1,387 Regression Tests · Release Audit Report (P3.7)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            <div className="space-y-3">
              <div className="rounded-lg border border-control-border bg-control-bg p-4 space-y-2">
                <span className="text-secgreen font-bold block">Pytest Regression Test Results:</span>
                <div className="text-control-text text-sm font-bold">1,387 passed, 0 failed, 0 errors in 385.91s</div>
                <p className="font-sans text-xs text-control-textMuted leading-relaxed">
                  Verified across unit, integration, and security test suites including token challenge replays, PID reuse detection, and WebSocket telemetry stream backpressure.
                </p>
              </div>

              <div className="rounded-lg border border-control-border bg-control-bg p-4 space-y-2">
                <span className="text-cyanflux font-bold block">Frontend & Desktop Shell Builds:</span>
                <div className="text-control-text text-sm font-bold">Tauri v2 + React 19: 0 errors</div>
                <p className="font-sans text-xs text-control-textMuted leading-relaxed">
                  Production executable compiled to rakshak-gui.exe with strict Content Security Policy and zero native shell plugin footprint.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-control-border bg-control-bg p-4 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-control-text font-bold block mb-2">Cryptographic Audit Chain Invariant:</span>
                <p className="font-sans text-xs text-control-textMuted leading-relaxed">
                  Rakshak stores all decisions and operations in security_audit.jsonl with SHA-256 hash chaining.
                  The verification engine (python -m rakshak.cli audit-verify) validates the unbroken hash chain from repository inception.
                </p>
              </div>

              <div className="pt-3 border-t border-control-border font-mono text-[0.68rem] text-control-textSubtle">
                Verified against physical repository at: <code className="text-secgreen">E:\CyberSecurity\Projects\Rakshak</code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
