"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMode } from "@/context/ModeContext";
import {
  Search,
  Code2,
  Shield,
  Layers,
  FileText,
  ExternalLink,
  Cpu,
  Terminal,
  X,
} from "lucide-react";

export default function CommandPalette({ isOpen, onClose }) {
  const router = useRouter();
  const { mode, setMode } = useMode();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    // Mode toggling
    {
      id: "mode-sw",
      title: "Switch to Software Engineer Mode",
      category: "Mode Switch",
      icon: Code2,
      action: () => setMode("software"),
      keywords: "mode software developer backend frontend fullstack",
    },
    {
      id: "mode-sec",
      title: "Switch to Cybersecurity Mode",
      category: "Mode Switch",
      icon: Shield,
      action: () => setMode("cybersecurity"),
      keywords: "mode security cyber soc pentest vapt auth",
    },

    // Projects
    {
      id: "proj-rakshak",
      title: "Rakshak — Local-First Cybersecurity Control Plane",
      category: "Projects",
      icon: Shield,
      action: () => router.push("/projects/rakshak"),
      keywords: "rakshak security control plane offline capabilities 1387 tests",
    },
    {
      id: "proj-iot",
      title: "Virtual IoT Security Laboratory",
      category: "Projects",
      icon: Cpu,
      action: () => router.push("/projects/virtual-iot"),
      keywords: "iot proteus arm7 lpc2138 attack scenarios soc dashboard 117 tests",
    },
    {
      id: "proj-sentinel",
      title: "KS Sentinel 2.0 — Secure Workspace OS",
      category: "Projects",
      icon: Layers,
      action: () => router.push("/projects/ks-sentinel"),
      keywords: "ks sentinel 2.0 web os gateway agent workspace",
    },
    {
      id: "proj-vedai",
      title: "VedAI — Multimodal AI Assistant",
      category: "Projects",
      icon: Terminal,
      action: () => router.push("/projects/vedai"),
      keywords: "vedai multimodal ai nlp fer emotion fusion safety aes-256",
    },

    // Sections
    {
      id: "sec-proof",
      title: "Engineering Proof Dashboard",
      category: "Sections",
      icon: Layers,
      action: () => {
        router.push("/#proof");
      },
      keywords: "proof evidence metrics statistics 1387 117 tests verified",
    },
    {
      id: "sec-projects",
      title: "Featured Engineering Projects",
      category: "Sections",
      icon: Code2,
      action: () => {
        router.push("/#projects");
      },
      keywords: "projects systems code work",
    },
    {
      id: "sec-how-i-build",
      title: "How I Build (Engineering Pipeline)",
      category: "Sections",
      icon: Terminal,
      action: () => {
        router.push("/#engineering");
      },
      keywords: "how i build process architecture engineering pipeline",
    },
    {
      id: "sec-skills",
      title: "Skills & Evidence Matrix (Where I Used It)",
      category: "Sections",
      icon: Cpu,
      action: () => {
        router.push("/#skills");
      },
      keywords: "skills technologies python react c++ fast api evidence",
    },
    {
      id: "sec-experience",
      title: "Experience & Timeline",
      category: "Sections",
      icon: Layers,
      action: () => {
        router.push("/#experience");
      },
      keywords: "experience internship cryptonoicarea education rscoe",
    },
    {
      id: "sec-resume",
      title: "Download Verified Resume (PDF)",
      category: "Actions",
      icon: FileText,
      action: () => {
        window.open("/Tushar_Chaugule_Resume.pdf", "_blank");
      },
      keywords: "resume cv download pdf",
    },
    {
      id: "ext-live-portfolio",
      title: "Open Live Deployed Site (Render)",
      category: "Live Deployment",
      icon: ExternalLink,
      action: () => {
        window.open("https://portfolio-website-okni.onrender.com", "_blank");
      },
      keywords: "live deploy render portfolio website url okni",
    },
    {
      id: "ext-github",
      title: "Open GitHub Profile (@Tushar8767)",
      category: "External",
      icon: ExternalLink,
      action: () => {
        window.open("https://github.com/Tushar8767", "_blank");
      },
      keywords: "github code repository tushar8767",
    },
    {
      id: "ext-linkedin",
      title: "Open LinkedIn Profile",
      category: "External",
      icon: ExternalLink,
      action: () => {
        window.open("https://www.linkedin.com/in/tushar-chaugule-b15437359", "_blank");
      },
      keywords: "linkedin profile connect",
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q) ||
      cmd.keywords.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-4 pt-20 backdrop-blur-sm sm:pt-28"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-control-border bg-control-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center border-b border-control-border px-4 py-3">
          <Search className="h-5 w-5 text-control-textMuted" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section... (e.g. 'Rakshak', 'mode', 'proof')"
            className="ml-3 flex-1 bg-transparent text-sm text-control-text placeholder:text-control-textSubtle focus:outline-none"
          />
          <div className="flex items-center gap-1.5 font-mono text-[0.65rem] text-control-textMuted">
            <span className="rounded border border-control-border bg-control-bg px-1.5 py-0.5">ESC</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 rounded p-1 text-control-textMuted hover:text-control-text"
            aria-label="Close command palette"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-[360px] overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-sm text-control-textMuted">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, index) => {
              const Icon = cmd.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 transition-colors ${
                    isSelected
                      ? "bg-control-surfaceHover text-control-text"
                      : "text-control-textMuted hover:text-control-text"
                  }`}
                  role="button"
                  tabIndex={0}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded border ${
                        isSelected
                          ? "border-cyanflux/40 bg-cyanflux/10 text-cyanflux"
                          : "border-control-border bg-control-bg text-control-textMuted"
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-control-text">{cmd.title}</p>
                      <p className="text-xs text-control-textSubtle">{cmd.category}</p>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="font-mono text-[0.65rem] text-cyanflux">
                      ↵ Enter
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-control-border bg-control-bg/60 px-4 py-2 font-mono text-[0.65rem] text-control-textSubtle">
          <span>Active Mode: <strong className="text-control-text uppercase">{mode}</strong></span>
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
