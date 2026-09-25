"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code2,
  ShieldCheck,
  BrainCircuit,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  Database,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { evidenceMap } from "@/data/evidenceMap";

export default function Expertise() {
  const [selectedTech, setSelectedTech] = useState("Python");

  const activeEvidence = evidenceMap.find((item) => item.technology === selectedTech) || evidenceMap[0];

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Code2":
        return Code2;
      case "ShieldCheck":
        return ShieldCheck;
      case "BrainCircuit":
        return BrainCircuit;
      case "Cpu":
        return Cpu;
      default:
        return Layers;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-control-border bg-control-surface">
      <div className="section-shell">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyanflux">
              <Cpu className="h-4 w-4" />
              <span>SKILL TAXONOMY // EVIDENCE MATRIX</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-control-text">
              ENGINEERING SKILLS & EVIDENCE MAP
            </h2>
          </div>
          <p className="font-mono text-xs text-control-textSubtle max-w-md">
            Technologies supported strictly by physical project codebases, lab reports, and automated test runs.
          </p>
        </div>

        {/* 4-Category Skill Taxonomy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {skillCategories.map((category) => {
            const Icon = getCategoryIcon(category.icon);
            return (
              <div
                key={category.id}
                className="rounded-xl border border-control-border bg-control-bg p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[0.68rem] text-control-textSubtle mb-2">
                    <span>{category.code}</span>
                    <Icon className="h-4 w-4 text-cyanflux" />
                  </div>
                  <h3 className="font-sans text-base font-bold text-control-text mb-1">
                    {category.title}
                  </h3>
                  <p className="font-sans text-xs text-control-textMuted leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <div className="space-y-1.5 font-mono text-xs">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        onClick={() => {
                          const match = evidenceMap.find((e) => e.technology.toLowerCase().includes(skill.name.toLowerCase()));
                          if (match) setSelectedTech(match.technology);
                        }}
                        className="flex items-center justify-between py-1 border-b border-control-border/40 text-[0.75rem] text-control-text hover:text-cyanflux cursor-pointer transition"
                      >
                        <span>{skill.name}</span>
                        <span className="text-[0.62rem] text-control-textSubtle">
                          {skill.verifiedIn.length} system{skill.verifiedIn.length > 1 ? "s" : ""}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* WHERE I USED IT — Interactive Evidence Matrix */}
        <div className="rounded-xl border border-control-border bg-control-bg p-6 sm:p-8 shadow-panel">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-control-border pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-secgreen uppercase tracking-wider block mb-1">
                INTERACTIVE MATRIX // VERIFIED USAGE
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-control-text">
                WHERE I USED IT
              </h3>
            </div>
            <span className="font-mono text-xs text-control-textSubtle">
              Click a technology to inspect exact repository implementations.
            </span>
          </div>

          {/* Technology Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {evidenceMap.map((item) => {
              const isSelected = item.technology === selectedTech;
              return (
                <button
                  key={item.technology}
                  type="button"
                  onClick={() => setSelectedTech(item.technology)}
                  className={`rounded-lg border px-3 py-1.5 font-mono text-xs font-medium transition ${
                    isSelected
                      ? "border-cyanflux bg-cyanflux/15 text-cyanflux shadow-glow"
                      : "border-control-border bg-control-surface text-control-textMuted hover:border-control-borderHighlight hover:text-control-text"
                  }`}
                >
                  {item.technology}
                </button>
              );
            })}
          </div>

          {/* Active Evidence Breakdown */}
          <div className="rounded-xl border border-control-border bg-control-surface p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-control-border/60 pb-3 font-mono text-xs">
              <span className="font-bold text-control-text">
                TECHNOLOGY: <span className="text-cyanflux">{activeEvidence.technology}</span>
              </span>
              <span className="text-control-textSubtle">CATEGORY: {activeEvidence.category}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeEvidence.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-lg border border-control-border bg-control-bg p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-sm font-bold text-control-text">
                        {proj.name}
                      </span>
                      <Link
                        href={`/projects/${proj.id}`}
                        className="text-cyanflux hover:text-white"
                        aria-label={`View ${proj.name} case study`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <p className="font-sans text-xs text-control-textMuted leading-relaxed mb-3">
                      {proj.role}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-control-border/50 font-mono text-[0.68rem] text-control-textSubtle">
                    <span className="text-control-textMuted font-semibold">Repository Evidence: </span>
                    <code className="text-secgreen">{proj.fileEvidence}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
