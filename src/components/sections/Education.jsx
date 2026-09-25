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
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyanflux/30 bg-cyanflux/10 text-cyanflux">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-control-text">{edu.degree}</h3>
                    <p className="font-sans text-sm font-semibold text-cyanflux mt-0.5">{edu.institution}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-2 font-mono text-xs text-control-textSubtle mb-6">
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
                <span className="text-secgreen">Dean&apos;s List</span>
              </div>
            </div>
          ))}

          {/* Certifications List */}
          <div className="space-y-4">
            {certifications.map((cert) => {
              const isGreen = cert.accent === "secgreen";
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
                          : "border-cyanflux/30 bg-cyanflux/10 text-cyanflux"
                      }`}
                    >
                      {isGreen ? <ShieldCheck className="h-5 w-5" /> : <Network className="h-5 w-5" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-base font-bold text-control-text">
                          {cert.title}
                        </h4>
                        <span className="font-mono text-[0.65rem] border border-control-border bg-control-surface px-2 py-0.5 rounded text-control-textSubtle uppercase">
                          {cert.issuer}
                        </span>
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
