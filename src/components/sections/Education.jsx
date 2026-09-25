"use client";

import { GraduationCap, ShieldCheck, Network, Award, Calendar, MapPin } from "lucide-react";
import { certifications, education } from "@/data/certifications";

export default function Education() {
  return (
    <section id="education" className="py-20 border-b border-control-border bg-control-surface">
      <div className="section-shell">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-secgreen">
              <GraduationCap className="h-4 w-4" />
              <span>ACADEMIC FOUNDATION & VERIFIED CERTIFICATIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-control-text">
              EDUCATION & CREDENTIALS
            </h2>
          </div>
          <p className="font-mono text-xs text-control-textSubtle max-w-md">
            Rigorous undergraduate computer engineering foundation paired with certified technical examination credentials.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Education Card */}
          {education.map((edu) => (
            <div
              key={edu.id}
              className="rounded-xl border border-control-border bg-control-bg p-6 sm:p-7 flex flex-col justify-between shadow-panel"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyanflux/30 bg-cyanflux/10 text-cyanflux">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-control-text">{edu.degree}</h3>
                    <p className="font-sans text-sm font-semibold text-cyanflux mt-0.5">{edu.institution}</p>
                    {edu.minor && (
                      <span className="inline-block mt-1.5 rounded border border-amberwarn/40 bg-amberwarn/10 px-2 py-0.5 font-mono text-[0.68rem] text-amberwarn">
                        {edu.minor}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-2 font-mono text-xs text-control-textSubtle mb-5">
                  <div className="flex items-center gap-1.5 border border-control-border bg-control-surface p-2 rounded">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 border border-control-border bg-control-surface p-2 rounded">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 border border-control-border bg-control-surface p-2 rounded text-secgreen font-bold">
                    <Award className="h-3.5 w-3.5" />
                    <span>CGPA {edu.cgpa}</span>
                  </div>
                </div>

                {/* Leadership Section */}
                {edu.leadership && (
                  <div className="mb-5 rounded-lg border border-control-border bg-control-surface p-3 font-mono text-xs">
                    <span className="text-[0.65rem] text-secgreen uppercase tracking-wider block font-bold mb-1">
                      LEADERSHIP ROLE:
                    </span>
                    <p className="text-control-text font-bold text-[0.78rem]">
                      {edu.leadership.role} — <span className="text-cyanflux">{edu.leadership.organization}</span>
                    </p>
                    <p className="text-control-textSubtle text-[0.7rem] mt-0.5">
                      {edu.leadership.period} • {edu.leadership.impact}
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <span className="font-mono text-[0.68rem] text-control-textSubtle uppercase tracking-wider block">
                    Curriculum & Research Focus:
                  </span>
                  <ul className="space-y-2 font-sans text-xs text-control-textMuted leading-relaxed">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyanflux font-mono">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-control-border/60 font-mono text-[0.68rem] text-control-textSubtle flex justify-between">
                <span>Honors: {edu.honors}</span>
                <span className="text-secgreen font-semibold">Active Engineering Scholar</span>
              </div>
            </div>
          ))}

          {/* Certifications List */}
          <div className="space-y-4">
            {certifications.map((cert) => {
              const isGreen = cert.statusBadge === "COMPLETED";
              const isAmber = cert.statusBadge === "IN TRAINING";
              
              return (
                <div
                  key={cert.id}
                  className="rounded-xl border border-control-border bg-control-bg p-5 hover:border-control-borderHighlight transition"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
                        isGreen
                          ? "border-secgreen/30 bg-secgreen/10 text-secgreen"
                          : isAmber
                          ? "border-amberwarn/30 bg-amberwarn/10 text-amberwarn"
                          : "border-cyanflux/30 bg-cyanflux/10 text-cyanflux"
                      }`}
                    >
                      {isGreen ? <ShieldCheck className="h-5 w-5" /> : isAmber ? <Award className="h-5 w-5" /> : <Network className="h-5 w-5" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-display text-base font-bold text-control-text">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-1.5 font-mono text-[0.65rem]">
                          <span
                            className={`rounded px-2 py-0.5 font-bold ${
                              isGreen
                                ? "bg-secgreen/15 text-secgreen border border-secgreen/30"
                                : isAmber
                                ? "bg-amberwarn/15 text-amberwarn border border-amberwarn/30"
                                : "bg-cyanflux/15 text-cyanflux border border-cyanflux/30"
                            }`}
                          >
                            {cert.statusBadge}
                          </span>
                          <span className="border border-control-border bg-control-surface px-2 py-0.5 rounded text-control-textSubtle uppercase">
                            {cert.issuer}
                          </span>
                        </div>
                      </div>
                      <p className="font-sans text-xs text-control-textMuted leading-relaxed mt-2 mb-3">
                        {cert.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 font-mono text-[0.68rem]">
                        {cert.topics.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-control-border bg-control-surface px-2 py-0.5 text-control-textMuted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
