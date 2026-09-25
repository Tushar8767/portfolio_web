"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Github, Menu, X, Command, Shield, Code2, Search } from "lucide-react";
import { useMode } from "@/context/ModeContext";
import { navItems, socialLinks } from "@/data/navigation";
import CommandPalette from "@/components/ui/CommandPalette";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const { mode, setMode, isCybersecurity } = useMode();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
          scrolled
            ? "border-b border-control-border bg-control-bg/90 backdrop-blur-md shadow-panel"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          className="section-shell flex h-16 items-center justify-between gap-4"
          aria-label="Main engineering navigation"
        >
          {/* Logo / Callsign */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-mono text-xs font-semibold tracking-[0.2em] text-control-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyanflux focus-visible:outline-offset-2 rounded"
            aria-label="Tushar Chaugule — Engineering Control Room Home"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded bg-control-surface border border-control-border group-hover:border-cyanflux text-cyanflux transition-colors font-bold text-xs">
              TC
            </span>
            <div className="flex flex-col">
              <span className="text-control-text font-bold tracking-wider text-[0.75rem]">TUSHAR CHAUGULE</span>
              <span className="text-[0.62rem] text-control-textSubtle tracking-widest uppercase">
                Control Room
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 font-mono text-xs" role="list">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                role="listitem"
                className="rounded-md px-3 py-1.5 text-control-textMuted transition hover:bg-control-surface hover:text-control-text focus-visible:outline"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mode Switcher & Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Global Mode Switcher */}
            <div
              className="flex items-center rounded-lg border border-control-border bg-control-surface p-0.5 font-mono text-xs"
              role="radiogroup"
              aria-label="Engineering Perspective Mode"
            >
              <button
                type="button"
                role="radio"
                aria-checked={mode === "software"}
                onClick={() => setMode("software")}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[0.7rem] font-medium transition ${
                  mode === "software"
                    ? "bg-blueflux/20 text-cyanflux border border-cyanflux/30"
                    : "text-control-textMuted hover:text-control-text border border-transparent"
                }`}
              >
                <Code2 className="h-3 w-3" />
                <span>Software</span>
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={mode === "cybersecurity"}
                onClick={() => setMode("cybersecurity")}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[0.7rem] font-medium transition ${
                  mode === "cybersecurity"
                    ? "bg-secgreen/20 text-secgreen border border-secgreen/30"
                    : "text-control-textMuted hover:text-control-text border border-transparent"
                }`}
              >
                <Shield className="h-3 w-3" />
                <span>Cybersecurity</span>
              </button>
            </div>

            {/* Command Palette Trigger */}
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="flex h-8 items-center gap-2 rounded-lg border border-control-border bg-control-surface px-2.5 font-mono text-xs text-control-textMuted hover:border-control-borderHighlight hover:text-control-text transition"
              aria-label="Open Command Palette (Ctrl+K)"
            >
              <Search className="h-3.5 w-3.5 text-control-textSubtle" />
              <span className="hidden xl:inline text-[0.7rem]">Cmd Palette</span>
              <kbd className="rounded border border-control-border bg-control-bg px-1 text-[0.6rem] text-control-textSubtle">
                Ctrl K
              </kbd>
            </button>

            {/* GitHub */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-control-border bg-control-surface text-control-textMuted hover:border-control-borderHighlight hover:text-control-text transition"
              aria-label="GitHub Profile"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            {/* Resume button */}
            <a
              href="/Tushar_Chaugule_Resume.pdf"
              download
              className="flex h-8 items-center gap-1.5 rounded-lg border border-cyanflux/40 bg-cyanflux/10 px-3 font-mono text-xs font-medium text-cyanflux hover:bg-cyanflux/20 transition"
            >
              <Download className="h-3 w-3" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-control-border bg-control-surface text-control-textMuted"
              aria-label="Open command palette"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-control-border bg-control-surface text-control-text"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="border-t border-control-border bg-control-surface p-4 sm:hidden">
            {/* Mode switch for mobile */}
            <div className="mb-4">
              <p className="tech-label mb-2">Perspective Mode</p>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setMode("software");
                    closeMenu();
                  }}
                  className={`flex items-center justify-center gap-1.5 rounded py-2 ${
                    mode === "software"
                      ? "bg-blueflux/20 text-cyanflux border border-cyanflux/30"
                      : "bg-control-bg text-control-textMuted border border-control-border"
                  }`}
                >
                  <Code2 className="h-3.5 w-3.5" />
                  Software
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode("cybersecurity");
                    closeMenu();
                  }}
                  className={`flex items-center justify-center gap-1.5 rounded py-2 ${
                    mode === "cybersecurity"
                      ? "bg-secgreen/20 text-secgreen border border-secgreen/30"
                      : "bg-control-bg text-control-textMuted border border-control-border"
                  }`}
                >
                  <Shield className="h-3.5 w-3.5" />
                  Cybersecurity
                </button>
              </div>
            </div>

            {/* Mobile nav links */}
            <div className="grid gap-1 font-mono text-xs">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded px-3 py-2 text-control-textMuted hover:bg-control-bg hover:text-control-text"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile actions */}
            <div className="mt-4 flex gap-2 border-t border-control-border pt-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-control-border bg-control-bg py-2 text-xs font-mono text-control-text"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href="/Tushar_Chaugule_Resume.pdf"
                download
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-cyanflux/40 bg-cyanflux/10 py-2 text-xs font-mono text-cyanflux"
              >
                <Download className="h-3.5 w-3.5" />
                Resume (PDF)
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
}
