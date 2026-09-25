"use client";

import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-control-border bg-control-bg">
      <div className="section-shell">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyanflux">
              <Briefcase className="h-4 w-4" />
              <span>PROFESSIONAL TIMELINE // PRACTICAL MILESTONES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-control-text">
              EXPERIENCE & MILESTONES
            </h2>
          </div>
          <p className="font-mono text-xs text-control-textSubtle max-w-md">
            Direct industry internship experience and engineering project leadership.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-7 shadow-panel hover:border-control-borderHighlight transition"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 border-b border-control-border/60">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-secgreen/30 bg-secgreen/10 text-secgreen">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-control-text">{exp.role}</h3>
                    <p className="font-sans text-sm font-semibold text-secgreen mt-0.5">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-control-textSubtle">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </span>
                  <span className="rounded border border-control-border bg-control-bg px-2 py-0.5 text-control-textMuted uppercase text-[0.65rem]">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="pt-4 grid lg:grid-cols-[1.4fr_0.6fr] gap-6">
                <div>
                  <p className="font-sans text-sm text-control-textMuted leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 font-sans text-xs text-control-text leading-relaxed">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="h-3.5 w-3.5 text-secgreen shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div>
                    <span className="text-control-textSubtle text-[0.68rem] uppercase tracking-wider block mb-2">
                      Tools & Protocols:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-control-border bg-control-bg px-2 py-1 text-[0.7rem] text-control-textMuted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-control-border bg-control-bg p-3">
                    <span className="text-secgreen font-bold text-[0.68rem] block mb-1">Impact:</span>
                    <p className="font-sans text-xs text-control-textSubtle leading-relaxed">
                      {exp.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
