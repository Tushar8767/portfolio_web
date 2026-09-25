"use client";

import Link from "next/link";
import { Github, ExternalLink, ArrowRight, Shield, Code2, Layers, CheckCircle2, Cpu } from "lucide-react";
import { projects } from "@/data/projects";
import { useMode } from "@/context/ModeContext";

export default function Projects({ activeFilter, onClearFilter }) {
  const { mode, isCybersecurity } = useMode();

  // Sort projects based on active perspective mode
  const sortedProjects = [...projects].sort((a, b) => {
    const prioA = isCybersecurity ? a.priority.cybersecurity : a.priority.software;
    const prioB = isCybersecurity ? b.priority.cybersecurity : b.priority.software;
    return prioA - prioB;
  });

  // Filter if an interactive discipline node is active
  const filteredProjects = activeFilter
    ? sortedProjects.filter((p) => {
        if (activeFilter === "software") return ["ks-sentinel", "virtual-iot", "vedai"].includes(p.id);
        if (activeFilter === "security") return ["rakshak", "virtual-iot", "ks-sentinel"].includes(p.id);
        if (activeFilter === "ai") return ["vedai"].includes(p.id);
        if (activeFilter === "embedded") return ["virtual-iot"].includes(p.id);
        return true;
      })
    : sortedProjects;

  return (
    <section id="projects" className="py-20 border-b border-control-border bg-control-bg">
      <div className="section-shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyanflux">
              <Layers className="h-4 w-4" />
              <span>CORE ARCHITECTURES // PRODUCTION LABS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-control-text">
              FEATURED ENGINEERING SYSTEMS
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-control-textSubtle">
              Priority: <strong className="text-control-text uppercase">{mode}</strong>
            </span>
            {activeFilter && (
              <button
                type="button"
                onClick={onClearFilter}
                className="flex items-center gap-1 rounded bg-control-surface border border-control-border px-2 py-1 text-control-text hover:border-control-borderHighlight"
              >
                <span>Filter: {activeFilter.toUpperCase()}</span>
                <span className="text-cyanflux">×</span>
              </button>
            )}
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => {
            const isCaseStudyOnly = project.deploymentType === "case-study";

            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-xl border border-control-border bg-control-surface p-6 sm:p-7 shadow-panel hover:border-control-borderHighlight transition duration-200"
              >
                {/* Header: Callsign & Status */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-control-border/60">
                    <span className="font-mono text-xs font-bold text-control-textSubtle tracking-widest">
                      0{index + 1} // {project.domainShort.toUpperCase()}
                    </span>
                    {project.status === "LIVE" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-secgreen/40 bg-secgreen/10 px-2.5 py-0.5 font-mono text-[0.68rem] text-secgreen">
                        <span className="h-1.5 w-1.5 rounded-full bg-secgreen animate-pulse" />
                        LIVE DEPLOYMENT
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-control-borderHighlight bg-control-bg px-2.5 py-0.5 font-mono text-[0.68rem] text-control-textMuted">
                        <span className="h-1.5 w-1.5 rounded-full bg-control-textSubtle" />
                        CASE STUDY & DESKTOP CORE
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="pt-4 space-y-1.5">
                    <h3 className="font-display text-2xl font-bold text-control-text group-hover:text-cyanflux transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-control-textMuted leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Architecture Pillars */}
                  <div className="my-5 rounded-lg border border-control-border bg-control-bg p-3.5 space-y-2 font-mono text-xs">
                    <span className="text-[0.65rem] text-control-textSubtle uppercase tracking-wider block">
                      Architectural Boundaries & Evidence:
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-[0.72rem]">
                      {project.metrics.slice(0, 4).map((m) => (
                        <div key={m.label} className="border-l border-control-border pl-2">
                          <span className="block text-control-text font-bold text-cyanflux">{m.value}</span>
                          <span className="block text-control-textSubtle text-[0.65rem] truncate">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-control-border bg-control-surfaceHover px-2 py-0.5 font-mono text-[0.68rem] text-control-textMuted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="mt-6 pt-4 border-t border-control-border/60 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cyanflux/40 bg-cyanflux/10 px-3.5 py-1.5 font-semibold text-cyanflux hover:bg-cyanflux/20 transition"
                    >
                      <span>Explore System</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-control-border bg-control-bg px-3 py-1.5 text-control-textMuted hover:border-control-borderHighlight hover:text-control-text transition"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>

                  {/* Verified Live Demo Link (only if live deployment exists) */}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-secgreen hover:underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="text-[0.68rem] text-control-textSubtle">
                      Offline-First Host Architecture
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
