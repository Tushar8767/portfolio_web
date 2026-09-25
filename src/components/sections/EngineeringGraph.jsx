"use client";

import { useState } from "react";
import { Code2, Shield, BrainCircuit, Cpu, ArrowRight } from "lucide-react";

export default function EngineeringGraph({ onFilterSelect, activeFilter }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodes = [
    {
      id: "software",
      label: "SOFTWARE",
      icon: Code2,
      accent: "cyanflux",
      accentBorder: "border-cyanflux/40",
      accentBg: "bg-cyanflux/10",
      accentText: "text-cyanflux",
      position: "left",
      projects: ["KS Sentinel 2.0", "Virtual IoT Security Lab", "VedAI"],
      techs: ["React", "FastAPI", "Node.js", "Express", "MongoDB", "WebSockets"],
      desc: "Full-stack decoupled systems, asynchronous APIs, event streams, and real-time state.",
    },
    {
      id: "security",
      label: "SECURITY",
      icon: Shield,
      accent: "secgreen",
      accentBorder: "border-secgreen/40",
      accentBg: "bg-secgreen/10",
      accentText: "text-secgreen",
      position: "right",
      projects: ["Rakshak", "Virtual IoT Security Lab", "KS Sentinel 2.0"],
      techs: ["Canonical Spine", "SHA-256 Hash Chain", "35 Capabilities", "VAPT", "RBAC"],
      desc: "Deterministic policy enforcement, zero shell execution, cryptographic audit ledgers.",
    },
    {
      id: "ai",
      label: "AI",
      icon: BrainCircuit,
      accent: "blueflux",
      accentBorder: "border-blueflux/40",
      accentBg: "bg-blueflux/10",
      accentText: "text-blueflux",
      position: "top",
      projects: ["VedAI"],
      techs: ["Multimodal Fusion", "FER", "NLP", "TF-IDF Cosine", "5-Layer Crisis Intercept"],
      desc: "Multimodal emotion processing, deterministic canonical retrieval, and safety boundaries.",
    },
    {
      id: "embedded",
      label: "EMBEDDED / IoT",
      icon: Cpu,
      accent: "amberwarn",
      accentBorder: "border-amberwarn/40",
      accentBg: "bg-amberwarn/10",
      accentText: "text-amberwarn",
      position: "bottom",
      projects: ["Virtual IoT Security Lab"],
      techs: ["ARM7TDMI LPC2138", "C Firmware", "Proteus ISIS", "UART0 Bridge", "LM35 ADC"],
      desc: "Hardware-in-the-loop simulation, compiled firmware, serial bridges, and fleet quarantine.",
    },
  ];

  const handleNodeClick = (nodeId) => {
    if (onFilterSelect) {
      onFilterSelect(nodeId === activeFilter ? null : nodeId);
    }
  };

  return (
    <div className="w-full">
      {/* Desktop / Tablet Interactive Cross-Graph */}
      <div className="hidden md:flex relative h-[360px] w-full max-w-[620px] mx-auto items-center justify-center p-4">
        {/* Subtle Bus Lines */}
        {/* Horizontal Bus */}
        <div className="absolute left-16 right-16 h-px bg-gradient-to-r from-cyanflux/30 via-control-borderHighlight to-secgreen/30 pointer-events-none" />
        {/* Vertical Bus */}
        <div className="absolute top-10 bottom-10 w-px bg-gradient-to-b from-blueflux/30 via-control-borderHighlight to-amberwarn/30 pointer-events-none" />

        {/* Center Core Node (TUSHAR) */}
        <div className="relative z-10 flex flex-col items-center justify-center h-24 w-24 rounded-full border border-control-borderHighlight bg-control-surface shadow-2xl">
          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-cyanflux/20 mb-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyanflux animate-ping" />
          </div>
          <span className="font-mono text-[0.72rem] font-bold text-control-text tracking-wider">TUSHAR</span>
          <span className="font-mono text-[0.55rem] text-control-textSubtle tracking-widest">ENGINEER</span>
        </div>

        {/* Top Node: AI */}
        <button
          type="button"
          onClick={() => handleNodeClick("ai")}
          onMouseEnter={() => setHoveredNode("ai")}
          onMouseLeave={() => setHoveredNode(null)}
          className={`absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-xs transition duration-200 ${
            activeFilter === "ai" || hoveredNode === "ai"
              ? "border-blueflux bg-blueflux/15 text-blueflux shadow-glow"
              : "border-control-border bg-control-surface text-control-text hover:border-blueflux/50"
          }`}
        >
          <BrainCircuit className="h-4 w-4 text-blueflux" />
          <span className="font-semibold">AI</span>
        </button>

        {/* Left Node: SOFTWARE */}
        <button
          type="button"
          onClick={() => handleNodeClick("software")}
          onMouseEnter={() => setHoveredNode("software")}
          onMouseLeave={() => setHoveredNode(null)}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-xs transition duration-200 ${
            activeFilter === "software" || hoveredNode === "software"
              ? "border-cyanflux bg-cyanflux/15 text-cyanflux shadow-glow"
              : "border-control-border bg-control-surface text-control-text hover:border-cyanflux/50"
          }`}
        >
          <Code2 className="h-4 w-4 text-cyanflux" />
          <span className="font-semibold">SOFTWARE</span>
        </button>

        {/* Right Node: SECURITY */}
        <button
          type="button"
          onClick={() => handleNodeClick("security")}
          onMouseEnter={() => setHoveredNode("security")}
          onMouseLeave={() => setHoveredNode(null)}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-xs transition duration-200 ${
            activeFilter === "security" || hoveredNode === "security"
              ? "border-secgreen bg-secgreen/15 text-secgreen shadow-glow-green"
              : "border-control-border bg-control-surface text-control-text hover:border-secgreen/50"
          }`}
        >
          <Shield className="h-4 w-4 text-secgreen" />
          <span className="font-semibold">SECURITY</span>
        </button>

        {/* Bottom Node: EMBEDDED / IoT */}
        <button
          type="button"
          onClick={() => handleNodeClick("embedded")}
          onMouseEnter={() => setHoveredNode("embedded")}
          onMouseLeave={() => setHoveredNode(null)}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-xs transition duration-200 ${
            activeFilter === "embedded" || hoveredNode === "embedded"
              ? "border-amberwarn bg-amberwarn/15 text-amberwarn shadow-glow-amber"
              : "border-control-border bg-control-surface text-control-text hover:border-amberwarn/50"
          }`}
        >
          <Cpu className="h-4 w-4 text-amberwarn" />
          <span className="font-semibold">EMBEDDED / IoT</span>
        </button>
      </div>

      {/* Hover / Active Node Detail Panel */}
      <div className="mt-2 min-h-[96px] rounded-lg border border-control-border bg-control-surface p-3 transition">
        {(() => {
          const current = nodes.find((n) => n.id === (hoveredNode || activeFilter)) || null;
          if (!current) {
            return (
              <div className="flex flex-col items-center justify-center py-2 text-center text-xs text-control-textSubtle font-mono">
                <span>Select or hover any engineering node above to filter systems & inspect verified tech.</span>
                <span className="text-[0.68rem] text-control-textMuted mt-1">
                  Clicking filters project cards below to matching architectures.
                </span>
              </div>
            );
          }

          return (
            <div className="space-y-1.5 animate-fade-in font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className={`font-bold ${current.accentText} tracking-wider`}>
                  DISCIPLINE // {current.label}
                </span>
                <span className="text-[0.68rem] text-control-textSubtle">
                  {activeFilter === current.id ? "● Active Filter" : "Click node to toggle filter"}
                </span>
              </div>
              <p className="text-xs text-control-textMuted leading-relaxed">{current.desc}</p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[0.68rem] text-control-textSubtle font-medium">Projects:</span>
                {current.projects.map((proj) => (
                  <span
                    key={proj}
                    className="inline-flex items-center gap-1 rounded bg-control-bg px-2 py-0.5 text-[0.68rem] text-control-text border border-control-border"
                  >
                    <ArrowRight className="h-2.5 w-2.5 text-cyanflux" />
                    {proj}
                  </span>
                ))}
              </div>
            </div>
          );
        })()}
      </div>

      {/* Mobile Vertically Stacked Interactive System */}
      <div className="grid grid-cols-2 gap-2 mt-4 md:hidden">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = activeFilter === node.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => handleNodeClick(node.id)}
              className={`flex flex-col items-start rounded-lg border p-2.5 text-left font-mono transition ${
                isSelected
                  ? `${node.accentBorder} ${node.accentBg} ${node.accentText}`
                  : "border-control-border bg-control-surface text-control-text hover:border-control-borderHighlight"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Icon className={`h-3.5 w-3.5 ${isSelected ? node.accentText : "text-control-textMuted"}`} />
                <span className="text-[0.7rem] font-bold">{node.label}</span>
              </div>
              <span className="text-[0.62rem] text-control-textSubtle truncate w-full">
                {node.projects.join(", ")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
