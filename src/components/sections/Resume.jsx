"use client";

import { Download, FileText, Shield, Code2, CheckCircle2 } from "lucide-react";
import { useMode } from "@/context/ModeContext";
import { socialLinks } from "@/data/navigation";

export default function Resume() {
  const { mode } = useMode();

  return (
    <section id="resume" className="py-20 border-b border-control-border bg-control-bg">
      <div className="section-shell">
        <div className="rounded-xl border border-control-border bg-control-surface p-8 sm:p-10 shadow-panel">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-secgreen">
                <CheckCircle2 className="h-4 w-4" />
                <span>VERIFIED DOCUMENTATION // ATS OPTIMIZED</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-control-text mb-3">
                DOWNLOAD RESUME
              </h2>
              <p className="font-sans text-sm text-control-textMuted leading-relaxed max-w-xl mb-6">
                Tailored ATS-optimized resumes documenting Computer Engineering degree with Minor in Embedded Systems (CGPA 8.65 / 10), cybersecurity internship experience, four major software & security systems, and verified IIT NPTEL certifications.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 font-mono text-xs text-control-textSubtle mb-6">
                <div className="flex items-center gap-2 border border-control-border bg-control-bg p-2.5 rounded-lg">
                  <Shield className="h-4 w-4 text-secgreen" />
                  <span>Cybersecurity Focus (CS)</span>
                </div>
                <div className="flex items-center gap-2 border border-control-border bg-control-bg p-2.5 rounded-lg">
                  <Code2 className="h-4 w-4 text-cyanflux" />
                  <span>Software Systems Focus (SDE)</span>
                </div>
              </div>

              {/* Action Buttons with exact tailored files */}
              <div className="flex flex-wrap gap-3 font-mono text-xs">
                <a
                  href={socialLinks.resumeSde}
                  download="Tushar_Chaugule_SDE_Resume.pdf"
                  className="inline-flex h-11 items-center gap-2 rounded-lg border border-cyanflux/40 bg-cyanflux/10 px-5 font-semibold text-cyanflux hover:bg-cyanflux/20 transition shadow-glow"
                >
                  <Download className="h-4 w-4" />
                  <span>Software Engineering Resume</span>
                </a>

                <a
                  href={socialLinks.resumeCs}
                  download="Tushar_Chaugule_Cybersecurity_Resume.pdf"
                  className="inline-flex h-11 items-center gap-2 rounded-lg border border-secgreen/40 bg-secgreen/10 px-5 font-semibold text-secgreen hover:bg-secgreen/20 transition shadow-glow-green"
                >
                  <Download className="h-4 w-4" />
                  <span>Cybersecurity Resume</span>
                </a>
              </div>
            </div>

            {/* Document Preview Card */}
            <div className="rounded-xl border border-control-border bg-control-bg p-6 flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-control-borderHighlight bg-control-surface text-cyanflux">
                <FileText className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs font-semibold text-control-text">
                  Tushar Chaugule — Verified Resumes
                </p>
                <p className="font-mono text-[0.68rem] text-control-textSubtle">
                  Available in Software Engineering (SDE) & Cybersecurity (CS) tracks
                </p>
              </div>

              <div className="flex gap-4 font-mono text-xs text-cyanflux">
                <a
                  href={socialLinks.resumeSde}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Preview SDE PDF →
                </a>
                <span className="text-control-border">•</span>
                <a
                  href={socialLinks.resumeCs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-secgreen"
                >
                  Preview CS PDF →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
