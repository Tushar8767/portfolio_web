"use client";

import { Github, Linkedin, Mail, Shield, Terminal } from "lucide-react";
import { socialLinks } from "@/data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-control-border bg-control-bg py-12">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand & Callsign */}
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.25em] text-control-text">
              <span className="text-cyanflux">TC</span> // ENGINEERING CONTROL ROOM
            </p>
            <p className="mt-1 font-mono text-xs text-control-textSubtle">
              Tushar Chaugule · Computer Engineering (RSCOE Pune) · 2023–2027
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-control-border bg-control-surface text-control-textMuted transition hover:border-control-borderHighlight hover:text-control-text"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-control-border bg-control-surface text-control-textMuted transition hover:border-control-borderHighlight hover:text-control-text"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4 text-blueflux" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-control-border bg-control-surface text-control-textMuted transition hover:border-control-borderHighlight hover:text-control-text"
              aria-label="Email Tushar"
            >
              <Mail className="h-4 w-4 text-amberwarn" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-control-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[0.68rem] text-control-textSubtle">
          <span>
            Zero telemetry tracking · Localhost loopback principles · Production verified
          </span>
          <span>
            © {year} Tushar Chaugule. All systems operational.
          </span>
        </div>
      </div>
    </footer>
  );
}
