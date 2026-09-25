"use client";

import { useMode } from "@/context/ModeContext";
import { socialLinks } from "@/data/navigation";
import EngineeringGraph from "./EngineeringGraph";
import { ArrowDown, Github, Linkedin, Mail, FileText, Code2, Shield } from "lucide-react";

export default function Hero({ onFilterSelect, activeFilter }) {
  const { mode, setMode } = useMode();

  return (
    <section id="top" className="pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-control-border">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Identity & Mission Column */}
          <div className="flex flex-col items-start space-y-6">
            {/* Top Status & Mode Quick Switcher */}
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-[0.7rem]">
              <div className="inline-flex items-center gap-2 rounded-full border border-control-border bg-control-surface px-3 py-1 text-control-textMuted">
                <span className="flex h-2 w-2 rounded-full bg-secgreen animate-pulse" />
                <span>STATION ACTIVE // CONTROL ROOM</span>
              </div>
              <div
                className="flex items-center rounded-lg border border-control-border bg-control-surface p-0.5"
                role="radiogroup"
                aria-label="Perspective Mode Toggle"
              >
                <button
                  type="button"
                  onClick={() => setMode("software")}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[0.7rem] font-medium transition ${
                    mode === "software"
                      ? "bg-blueflux/25 text-cyanflux border border-cyanflux/30 shadow-glow"
                      : "text-control-textMuted hover:text-control-text border border-transparent"
                  }`}
                >
                  <Code2 className="h-3 w-3" />
                  <span>Software Engineer</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode("cybersecurity")}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[0.7rem] font-medium transition ${
                    mode === "cybersecurity"
                      ? "bg-secgreen/25 text-secgreen border border-secgreen/30 shadow-glow"
                      : "text-control-textMuted hover:text-control-text border border-transparent"
                  }`}
                >
                  <Shield className="h-3 w-3" />
                  <span>Cybersecurity</span>
                </button>
              </div>
            </div>

            {/* Main Callout */}
            <div className="space-y-2">
              <p className="font-mono text-xs font-semibold tracking-[0.22em] text-cyanflux uppercase">
                Computer Engineering · RSCOE Pune
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-control-text">
                TUSHAR CHAUGULE
              </h1>
              <p className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-wider text-control-textMuted pt-1">
                {mode === "cybersecurity" ? (
                  <>
                    <span className="text-secgreen">CYBERSECURITY</span> • <span className="text-control-text">SECURITY ENGINEERING</span> • <span className="text-cyanflux">IoT SECURITY</span>
                  </>
                ) : (
                  <>
                    <span className="text-cyanflux">SOFTWARE</span> • <span className="text-control-text">SYSTEMS</span> • <span className="text-blueflux">AI</span> • <span className="text-amberwarn">EMBEDDED/IoT</span>
                  </>
                )}
              </p>
            </div>

            {/* Core Principle Quote */}
            <blockquote className="border-l-2 border-cyanflux/70 pl-4 text-sm sm:text-base text-control-textMuted leading-relaxed font-sans italic">
              {mode === "cybersecurity"
                ? "“I build security-focused systems for detection, controlled response, monitoring, investigation, and resilient software architecture.”"
                : "“I build full-stack and system-oriented software with strong attention to architecture, security, and real-world engineering.”"}
            </blockquote>

            {/* Mode-Specific Engineering Emphasis Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {(mode === "cybersecurity"
                ? [
                    "Security Engineering",
                    "Threat Detection",
                    "VAPT",
                    "Authentication",
                    "Security Monitoring",
                    "Incident Investigation",
                    "Forensics",
                    "IoT Security",
                    "Security Architecture",
                  ]
                : [
                    "Full-Stack Engineering",
                    "Backend Systems",
                    "React / TypeScript",
                    "Python / FastAPI",
                    "Applied AI",
                    "System Architecture",
                    "Real-Time Applications",
                    "Embedded/IoT Engineering",
                  ]
              ).map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-control-border bg-control-surface px-2.5 py-1 font-mono text-[0.68rem] text-control-text font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-cyanflux/50 bg-cyanflux/15 px-5 font-mono text-xs font-semibold text-cyanflux shadow-glow hover:bg-cyanflux/25 transition"
              >
                <span>{mode === "cybersecurity" ? "Explore Security Systems" : "Explore Engineering Projects"}</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>

              <a
                href={mode === "cybersecurity" ? socialLinks.resumeCs : socialLinks.resumeSde}
                download={mode === "cybersecurity" ? "Tushar_Chaugule_Cybersecurity_Resume.pdf" : "Tushar_Chaugule_Software_Engineering_Resume.pdf"}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-control-border bg-control-surface px-4 font-mono text-xs font-semibold text-control-text hover:border-control-borderHighlight hover:bg-control-surfaceHover transition"
              >
                <FileText className="h-3.5 w-3.5 text-control-textMuted" />
                <span>{mode === "cybersecurity" ? "View Cybersecurity Resume (PDF)" : "View Software Engineer Resume (PDF)"}</span>
              </a>
            </div>

            {/* Secondary Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-control-textMuted">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-control-text transition"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
                <span>github.com/Tushar8767</span>
              </a>
              <span className="text-control-border">•</span>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-control-text transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 text-blueflux" />
                <span>LinkedIn</span>
              </a>
              <span className="text-control-border">•</span>
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-1.5 hover:text-control-text transition"
                aria-label="Email Tushar"
              >
                <Mail className="h-4 w-4 text-amberwarn" />
                <span>{socialLinks.email}</span>
              </a>
            </div>
          </div>

          {/* Systems Interactive Graph Column */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-control-border bg-control-surface/60 p-4 sm:p-6 backdrop-blur">
            <div className="w-full flex items-center justify-between pb-3 border-b border-control-border font-mono text-xs text-control-textSubtle">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyanflux" />
                SYSTEMS ARCHITECTURE GRAPH
              </span>
              <span>LIVE INTERACTION</span>
            </div>

            <EngineeringGraph
              onFilterSelect={onFilterSelect}
              activeFilter={activeFilter}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
