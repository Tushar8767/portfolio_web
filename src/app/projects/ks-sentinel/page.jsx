"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Layers,
  Shield,
  Lock,
  Terminal,
  Server,
  Laptop,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { getProjectBySlug } from "@/data/projects";

export default function KSSentinelCaseStudy() {
  const project = getProjectBySlug("ks-sentinel");
  const [activeTier, setActiveTier] = useState(0);

  if (!project) return null;

  const tiers = [
    {
      id: "tier1",
      title: "TIER 1: Web OS Client (React 18 + Vite)",
      icon: Laptop,
      color: "text-cyanflux",
      borderColor: "border-cyanflux/40",
      role: "Sandboxed Browser Presentation Layer",
      desc:
        "The browser runs a modular Virtual Desktop environment with window managers, dock, file explorers, and status indicators. The frontend has zero direct network access to the workstation host operating system.",
      securityControls: [
        "Zero raw terminal / shell execution prompts",
        "Scoped JWT authentication headers attached to API requests",
        "Strict Content Security Policy (CSP)",
        "State synchronization via WebSocket telemetry channels",
      ],
    },
    {
      id: "tier2",
      title: "TIER 2: Secure Gateway (Node.js + Express)",
      icon: Server,
      color: "text-blueflux",
      borderColor: "border-blueflux/40",
      role: "Centralized Authentication & Policy Broker",
      desc:
        "The server gateway mediates all requests from web clients before communicating with the Local Agent. It enforces session validation, rate limiting, request sanitization, and parameter checks.",
      securityControls: [
        "Mandatory authentication on all capability routes",
        "Canonical path validation preventing ../ traversal attacks",
        "Token-bucket rate limiting against brute force and DoS",
        "Zero arbitrary shell command pass-throughs",
      ],
    },
    {
      id: "tier3",
      title: "TIER 3: Windows Local Agent (Host Service)",
      icon: Terminal,
      color: "text-secgreen",
      borderColor: "border-secgreen/40",
      role: "Sandboxed Local Resource Broker",
      desc:
        "A background daemon executing strictly on the user's local Windows machine. Communicates with the Gateway via secure IPC/WebSocket channels to execute pre-registered, allowlisted capabilities.",
      securityControls: [
        "Confined to authorized filesystem boundaries",
        "Explicit developer authorization required for new folder access",
        "Agent lifecycle monitoring (heartbeats & auto-disconnect on failure)",
        "Host stability protection (PID validation and resource bounds)",
      ],
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
            <span className="font-mono text-xs font-bold text-cyanflux uppercase tracking-wider">
              SOFTWARE SYSTEMS // SECURE WORKSPACE OS
            </span>
            <span className="rounded border border-secgreen/40 bg-secgreen/10 px-2.5 py-0.5 font-mono text-[0.68rem] text-secgreen">
              ● Production Live Deployment
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-control-text mb-3">
            KS SENTINEL 2.0
          </h1>
          <p className="font-sans text-base sm:text-lg text-control-textMuted max-w-3xl leading-relaxed mb-6">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-control-border/60">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-cyanflux/50 bg-cyanflux/15 px-4 font-mono text-xs font-semibold text-cyanflux hover:bg-cyanflux/25 transition shadow-glow"
            >
              <span>Launch Live Server</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-control-border bg-control-bg px-4 font-mono text-xs font-semibold text-control-text hover:border-control-borderHighlight hover:text-white transition"
            >
              <Github className="h-4 w-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Section 1: Three-Tier Architecture Visualization (Requirement 13) */}
        <section className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-8 mb-12 shadow-panel">
          <div className="border-b border-control-border pb-4 mb-6">
            <span className="font-mono text-xs text-cyanflux uppercase tracking-wider block mb-1">
              AIR-GAPPED ARCHITECTURE // THREE-TIER ISOLATION
            </span>
            <h2 className="font-display text-2xl font-bold text-control-text">
              Decoupled Three-Tier Architecture
            </h2>
            <p className="font-sans text-xs text-control-textMuted mt-1">
              Click any tier below to inspect its boundaries, network isolation, and security controls.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
            {/* Tier Selector Buttons */}
            <div className="space-y-2 font-mono text-xs">
              {tiers.map((tier, idx) => {
                const isSelected = activeTier === idx;
                const Icon = tier.icon;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setActiveTier(idx)}
                    className={`w-full flex items-center justify-between rounded-lg border p-4 transition text-left ${
                      isSelected
                        ? `${tier.borderColor} bg-control-bg ${tier.color} shadow-panel font-bold`
                        : "border-control-border bg-control-bg text-control-textMuted hover:border-control-borderHighlight hover:text-control-text"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 shrink-0" />
                      <div>
                        <span className="block text-sm font-semibold">{tier.title}</span>
                        <span className="text-[0.68rem] text-control-textSubtle">{tier.role}</span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0" />
                  </button>
                );
              })}
            </div>

            {/* Selected Tier Inspector */}
            <div className="rounded-xl border border-control-border bg-control-bg p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-control-border pb-3 mb-4 font-mono text-xs">
                  <span className={`font-bold ${tiers[activeTier].color}`}>
                    {tiers[activeTier].title}
                  </span>
                  <span className="text-control-textSubtle uppercase">ACTIVE INSPECTION</span>
                </div>

                <p className="font-sans text-sm text-control-text leading-relaxed mb-6">
                  {tiers[activeTier].desc}
                </p>
              </div>

              <div className="rounded-lg border border-control-border bg-control-surface p-4 font-mono text-xs">
                <span className="text-cyanflux font-bold block mb-2">Enforced Security Invariants:</span>
                <ul className="space-y-1.5 text-control-textMuted font-sans text-xs">
                  {tiers[activeTier].securityControls.map((ctrl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyanflux font-mono">✓</span>
                      <span>{ctrl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Filesystem Security & Path Validation */}
        <section className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-8 mb-12 shadow-panel">
          <div className="border-b border-control-border pb-4 mb-6">
            <span className="font-mono text-xs text-secgreen uppercase tracking-wider block mb-1">
              FILESYSTEM SECURITY // PATH VALIDATION
            </span>
            <h2 className="font-display text-2xl font-bold text-control-text">
              Sandbox Boundaries & Escapes Prevention
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="rounded-lg border border-control-border bg-control-bg p-4 space-y-2">
              <span className="text-cyanflux font-bold block">Canonical Path Resolution:</span>
              <p className="font-sans text-xs text-control-textMuted leading-relaxed">
                All file read/write targets are converted to absolute canonical paths. Traversal patterns like ../ or ..\ are resolved and verified strictly against pre-authorized sandbox root folders.
              </p>
            </div>

            <div className="rounded-lg border border-control-border bg-control-bg p-4 space-y-2">
              <span className="text-secgreen font-bold block">Agent Lifecycle & Telemetry:</span>
              <p className="font-sans text-xs text-control-textMuted leading-relaxed">
                The Local Agent broadcasts periodic heartbeat frames. If the agent process terminates, the Gateway terminates open client sessions immediately to prevent dangling state.
              </p>
            </div>

            <div className="rounded-lg border border-control-border bg-control-bg p-4 space-y-2">
              <span className="text-amberwarn font-bold block">28-Module Roadmap:</span>
              <p className="font-sans text-xs text-control-textMuted leading-relaxed">
                Architecture governed by a sequential 28-module roadmap (Module 0 to 27) enforcing DESIGN → IMPLEMENT → TEST → SECURITY TEST → LOCK per module.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
