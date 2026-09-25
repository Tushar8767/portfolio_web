"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  BrainCircuit,
  Shield,
  Lock,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Database,
  Terminal,
} from "lucide-react";
import { getProjectBySlug } from "@/data/projects";

export default function VedAICaseStudy() {
  const project = getProjectBySlug("vedai");
  const [activePipelineStage, setActivePipelineStage] = useState(0);

  if (!project) return null;

  const pipelineStages = [
    {
      id: "input",
      title: "1. Input Layer (Text & Video)",
      subtitle: "Multi-modal data capture",
      detail:
        "Accepts conversational user text queries along with optional transient camera frames captured via HTML5 canvas on the client. Frames are transmitted transiently to the ML service and are never stored or persisted.",
      invariant: "Transient camera transmission without disk persistence.",
    },
    {
      id: "nlp",
      title: "2. NLP Text Emotion Analysis",
      subtitle: "FastAPI ML Pipeline (/api/v1/process)",
      detail:
        "Analyzes sentiment polarity, semantic subjectivity, and emotional keywords across 6 primary emotion categories (Joy, Sadness, Anger, Fear, Surprise, Neutral). Evaluated at 73 RPS with sub-150ms latency.",
      invariant: "Deterministic scoring; no external API calls for emotion evaluation.",
    },
    {
      id: "fer",
      title: "3. Facial Emotion Analysis (FER)",
      subtitle: "Visual landmark analysis",
      detail:
        "Extracts facial micro-expressions and landmarks from transient video frames to produce a secondary visual emotion distribution across identical classification buckets.",
      invariant: "RAM-only frame processing; immediate memory release.",
    },
    {
      id: "fusion",
      title: "4. Weighted Emotion Fusion (60/40)",
      subtitle: "Multimodal confidence blending",
      detail:
        "Blends textual and visual modalities using a calibrated weighted model (60% NLP text sentiment / 40% FER visual confidence). Falls back gracefully to 100% NLP when camera is disabled.",
      invariant: "Mathematical normalization ensuring total probability distribution = 1.0.",
    },
    {
      id: "safety",
      title: "5. 5-Layer Crisis Safety Interception",
      subtitle: "Immediate crisis detection (<10ms)",
      detail:
        "A 5-layer safety detector in safetyService.js intercepts direct English, leetspeak (suecide, kll myslf, kms, unalive), Hinglish ('ab jeena nahi'), Marathi ('mala jagaycha nahiye'), and indirect burdensomeness patterns ('want to disappear'). Filters out benign idioms ('killing it', 'dead tired').",
      invariant: "Intercepts crisis expressions instantly; returns India 112, 14416 (Tele-MANAS), and US 988 helplines.",
    },
    {
      id: "retrieval",
      title: "6. Canonical Scripture Retrieval",
      subtitle: "TF-IDF + Cosine Similarity",
      detail:
        "Retrieves relevant wisdom from an audited canonical corpus of 14 curated verses across 5 chapters using TF-IDF tokenization and Cosine Similarity in FastAPI. Sub-15ms deterministic retrieval with zero hallucination.",
      invariant: "100% scripture citations ground in canonical dataset (canonicalGitaData.json).",
    },
    {
      id: "response",
      title: "7. Grounded Response & Context Continuity",
      subtitle: "Conversational synthesis",
      detail:
        "Synthesizes grounded practical reflections, mindfulness recommendations, and curated resources matching the detected emotion without making clinical medical or psychiatric diagnoses.",
      invariant: "Zero clinical/medical claims. Strict clinical boundaries enforce non-diagnostic role.",
    },
  ];

  return (
    <main className="min-h-screen bg-control-bg text-control-text pb-24 pt-20">
      <div className="section-shell">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-control-textMuted hover:text-cyanflux transition mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Control Room Projects</span>
        </Link>

        {/* Case Study Header */}
        <div className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-8 mb-10 shadow-panel">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-blueflux uppercase tracking-wider">
              APPLIED AI // MULTIMODAL SELF-REFLECTION SYSTEM
            </span>
            <span className="rounded border border-secgreen/40 bg-secgreen/10 px-2.5 py-0.5 font-mono text-[0.68rem] text-secgreen">
              ● Production Live Deployment
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-control-text mb-3">
            VEDAI
          </h1>
          <p className="font-sans text-base sm:text-lg text-control-textMuted max-w-3xl leading-relaxed mb-6">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-control-border/60">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-blueflux/50 bg-blueflux/15 px-4 font-mono text-xs font-semibold text-blueflux hover:bg-blueflux/25 transition shadow-glow"
            >
              <span>Launch Live VedAI</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-control-border bg-control-bg px-4 font-mono text-xs font-semibold text-control-text hover:border-control-borderHighlight hover:text-white transition"
            >
              <Github className="h-4 w-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Section 1: Multimodal Pipeline Visualization (Requirement 16) */}
        <section className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-8 mb-12 shadow-panel">
          <div className="border-b border-control-border pb-4 mb-6">
            <span className="font-mono text-xs text-blueflux uppercase tracking-wider block mb-1">
              MULTIMODAL AI PIPELINE // STAGE-BY-STAGE FLOW
            </span>
            <h2 className="font-display text-2xl font-bold text-control-text">
              Emotion Processing & Grounded Guidance Pipeline
            </h2>
            <p className="font-sans text-xs text-control-textMuted mt-1">
              Click any stage in the AI pipeline to inspect data transformations, mathematical models, and safety boundaries.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
            {/* Stage Selector */}
            <div className="space-y-1.5 font-mono text-xs">
              {pipelineStages.map((stage, idx) => {
                const isSelected = activePipelineStage === idx;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActivePipelineStage(idx)}
                    className={`w-full flex items-center justify-between rounded-lg border px-3 py-2 transition text-left ${
                      isSelected
                        ? "border-blueflux bg-blueflux/15 text-blueflux font-bold shadow-glow"
                        : "border-control-border bg-control-bg text-control-textMuted hover:border-control-borderHighlight hover:text-control-text"
                    }`}
                  >
                    <span>{stage.title}</span>
                    <ChevronRight className={`h-3.5 w-3.5 ${isSelected ? "text-blueflux" : "text-control-textSubtle"}`} />
                  </button>
                );
              })}
            </div>

            {/* Stage Detail Card */}
            <div className="rounded-xl border border-control-border bg-control-bg p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-control-border pb-3 mb-4 font-mono text-xs">
                  <span className="font-bold text-blueflux">
                    STAGE // {pipelineStages[activePipelineStage].title}
                  </span>
                  <span className="text-control-textSubtle">
                    {pipelineStages[activePipelineStage].subtitle}
                  </span>
                </div>

                <p className="font-sans text-sm text-control-text leading-relaxed mb-6">
                  {pipelineStages[activePipelineStage].detail}
                </p>
              </div>

              <div className="rounded-lg border border-control-border bg-control-surface p-4 font-mono text-xs">
                <span className="text-secgreen font-bold block mb-1">Architecture Invariant:</span>
                <span className="text-control-textMuted">{pipelineStages[activePipelineStage].invariant}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Security & Sensitive Data Protection */}
        <section className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-8 mb-12 shadow-panel">
          <div className="border-b border-control-border pb-4 mb-6">
            <span className="font-mono text-xs text-secgreen uppercase tracking-wider block mb-1">
              SECURITY CONTROLS // DATA PRIVACY & ENCRYPTION
            </span>
            <h2 className="font-display text-2xl font-bold text-control-text">
              Data Protection & Cryptographic Invariants
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="rounded-lg border border-control-border bg-control-bg p-4 space-y-2">
              <span className="text-secgreen font-bold block">AES-256-GCM Encryption:</span>
              <p className="font-sans text-xs text-control-textMuted leading-relaxed">
                Journal reflections and personal chat logs are encrypted at rest with random 96-bit IVs and 128-bit authentication tags. Tampered ciphertexts fail validation.
              </p>
            </div>

            <div className="rounded-lg border border-control-border bg-control-bg p-4 space-y-2">
              <span className="text-cyanflux font-bold block">PBKDF2 Password Hashing:</span>
              <p className="font-sans text-xs text-control-textMuted leading-relaxed">
                User authentication relies on PBKDF2 key derivation with 120,000 iterations and per-user cryptographic salts against credential stuffing.
              </p>
            </div>

            <div className="rounded-lg border border-control-border bg-control-bg p-4 space-y-2">
              <span className="text-amberwarn font-bold block">Non-Clinical Boundary:</span>
              <p className="font-sans text-xs text-control-textMuted leading-relaxed">
                Strict software disclaimers: 100% refusals on medical diagnosis or psychiatric prescriptions with automatic routing to professional crisis helplines.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
