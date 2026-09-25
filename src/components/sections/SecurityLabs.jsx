"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Network, Search, ShieldAlert, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { labCategories } from "@/data/labs";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const iconMap = {
  Globe,
  Network,
  Search,
  ShieldAlert,
};

const colorConfig = {
  secgreen: {
    icon: "text-secgreen",
    iconBg: "border-secgreen/25 bg-secgreen/8",
    badge: "green",
    accent: "border-secgreen/20 bg-secgreen/5",
    label: "text-secgreen",
    dot: "bg-secgreen",
  },
  cyanflux: {
    icon: "text-cyanflux",
    iconBg: "border-cyanflux/25 bg-cyanflux/8",
    badge: "cyan",
    accent: "border-cyanflux/20 bg-cyanflux/5",
    label: "text-cyanflux",
    dot: "bg-cyanflux",
  },
  violetflux: {
    icon: "text-violetflux",
    iconBg: "border-violetflux/25 bg-violetflux/8",
    badge: "violet",
    accent: "border-violetflux/20 bg-violetflux/5",
    label: "text-violetflux",
    dot: "bg-violetflux",
  },
  plasma: {
    icon: "text-plasma",
    iconBg: "border-plasma/20 bg-plasma/8",
    badge: "plasma",
    accent: "border-plasma/18 bg-plasma/5",
    label: "text-plasma",
    dot: "bg-plasma",
  },
};

function EvidenceItem({ item, colors }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
      <button
        type="button"
        className="w-full p-4 text-left flex items-start justify-between gap-3 hover:bg-white/[0.03] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyanflux focus-visible:outline-offset-0"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={`evidence-${item.id}`}
      >
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white">{item.title}</p>
          <p className="mt-1 text-xs text-slate-500">{item.category}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0 mt-0.5">
          <div className="flex flex-wrap gap-1">
            {item.tools.slice(0, 3).map((tool) => (
              <Badge key={tool} variant={colors.badge} size="sm">{tool}</Badge>
            ))}
          </div>
          {expanded ? (
            <ChevronUp className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            id={`evidence-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/8 p-4 pt-4 grid gap-4 sm:grid-cols-2">
              {/* Methodology */}
              <div>
                <p className="terminal-label-cyan mb-2">Methodology</p>
                <p className="text-xs leading-5 text-slate-400">{item.methodology}</p>
              </div>

              {/* Finding */}
              <div>
                <p className="terminal-label-cyan mb-2">Finding</p>
                <p className="text-xs leading-5 text-slate-300 font-medium">{item.finding}</p>
                <div className="mt-2">
                  <p className="terminal-label-cyan mb-1">Impact</p>
                  <p className="text-xs text-slate-400">{item.impact}</p>
                </div>
              </div>

              {/* Remediation */}
              <div>
                <p className="terminal-label-cyan mb-2">Remediation</p>
                <p className="text-xs leading-5 text-slate-400">{item.remediation}</p>
              </div>

              {/* Evidence */}
              <div>
                <p className="terminal-label-cyan mb-2">Evidence</p>
                <p className="text-xs leading-5 text-slate-500 italic">{item.evidence}</p>
                <p className="mt-2 text-xs text-slate-600">
                  Screenshots / reports can be added to this section.
                </p>
              </div>

              {/* All tools */}
              <div className="sm:col-span-2">
                <p className="terminal-label-cyan mb-2">Tools Used</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tools.map((tool) => (
                    <Badge key={tool} variant={colors.badge} size="sm">{tool}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SecurityLabs() {
  const [activeCategory, setActiveCategory] = useState(labCategories[0].id);
  const activeData = labCategories.find((c) => c.id === activeCategory);
  const colors = colorConfig[activeData?.color] ?? colorConfig.secgreen;

  return (
    <section id="labs" className="py-24" aria-labelledby="labs-heading">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Security Labs"
          title="Practical security evidence"
          id="labs-heading"
        >
          Hands-on security investigation, VAPT exercises, log analysis, and reconnaissance work —
          documented with methodology, findings, and remediation recommendations.
        </SectionHeading>

        {/* Category tabs */}
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Security lab categories"
        >
          {labCategories.map((cat) => {
            const CatIcon = iconMap[cat.icon] ?? Globe;
            const catColors = colorConfig[cat.color] ?? colorConfig.secgreen;
            const isActive = cat.id === activeCategory;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex h-9 items-center gap-2 rounded-lg border px-4 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyanflux focus-visible:outline-offset-2 ${
                  isActive
                    ? `${catColors.accent} ${catColors.label} border-opacity-50`
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/16 hover:text-white"
                }`}
              >
                <CatIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active category panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            id={`panel-${activeCategory}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {/* Category header */}
            <div className="glass-panel rounded-2xl p-5 mb-4">
              <div className="flex items-start gap-4">
                {activeData && (() => {
                  const CatIcon = iconMap[activeData.icon] ?? Globe;
                  return (
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${colors.iconBg} ${colors.icon}`}
                    >
                      <CatIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  );
                })()}
                <div>
                  <h3 className={`font-display text-lg font-semibold ${colors.label}`}>
                    {activeData?.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{activeData?.description}</p>
                </div>
              </div>
            </div>

            {/* Evidence items */}
            <div className="grid gap-3">
              {activeData?.items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.35 }}
                >
                  <EvidenceItem item={item} colors={colors} />
                </motion.div>
              ))}
            </div>

            {/* Note about actual evidence */}
            <p className="mt-6 text-center text-xs text-slate-600">
              Evidence items above represent structured lab exercises. Actual screenshots, PCAP files, and
              reports can be linked per item.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

