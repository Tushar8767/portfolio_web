"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Cpu,
  Shield,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Terminal,
  Activity,
  ChevronRight,
  Database,
  Radio,
} from "lucide-react";
import { getProjectBySlug } from "@/data/projects";

export default function VirtualIoTCaseStudy() {
  const project = getProjectBySlug("virtual-iot");
  const [activeArchBlock, setActiveArchBlock] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState("A");

  if (!project) return null;

  const archBlocks = [
    {
      id: "lpc2138",
      name: "Proteus LPC2138 ARM7",
      subtitle: "Simulated Microcontroller & LM35 Sensor",
      detail:
        "The electronic simulator runs a Philips/NXP LPC2138 ARM7TDMI microcontroller (60 MHz). An analog LM35 Celsius temperature sensor connects to on-chip 10-bit ADC channel AD0.1 (P0.28).",
      verifiedRules: [
        "ADC conversion: Temp = (ADC * 3.3V) / (1023 * 0.010V/°C)",
        "Hardware UART0 configured at 9600 baud, 8-N-1",
        "Dual status LEDs (Green = Heartbeat, Red = Alarm)",
      ],
    },
    {
      id: "firmware",
      name: "C Firmware (simulation/firmware/main.c)",
      subtitle: "Compiled Embedded C Source",
      detail:
        "C firmware samples the LM35 sensor every 1000ms, formats serial telemetry frames, and outputs via UART0: TELEMETRY;DEVICE_ID=LPC2138-TEMP-001;TYPE=TEMPERATURE_SENSOR;SEQ=42;ADC=75;TEMP=24.2",
      verifiedRules: [
        "Sampling loop interval: 1000 ms",
        "Deterministic string formatting with sequence counter",
        "Zero dynamic memory allocations (static buffers)",
      ],
    },
    {
      id: "bridge",
      name: "Python UART Bridge",
      subtitle: "scripts/run_proteus_bridge.py",
      detail:
        "Captures UART frames from the virtual COM port, validates packet checksums, attaches cryptographic authentication headers (X-Device-Id, X-Device-Token), and POSTs to the FastAPI gateway.",
      verifiedRules: [
        "Signs each HTTP request with device token",
        "Serial buffer overflow and reconnection handling",
        "Heartbeat continuity tracker",
      ],
    },
    {
      id: "gateway",
      name: "FastAPI Ingestion Gateway",
      subtitle: "High-Throughput Async Backend",
      detail:
        "FastAPI endpoint (POST /api/telemetry/ingest) ingests telemetry from both the Proteus hardware node and software virtual fleet (PY-TEMP-001, PY-MOTION-001, PY-ACTUATOR-001).",
      verifiedRules: [
        "Rate limiting via token-bucket algorithm",
        "Pydantic v2 data validation schemas",
        "Asynchronous non-blocking route dispatch",
      ],
    },
    {
      id: "auth",
      name: "Authentication & RBAC",
      subtitle: "Capability-Based Token Verification",
      detail:
        "Enforces device identity, state verification (ONLINE, SUSPENDED, REVOKED), and capability tokens (READ_TELEMETRY, RECEIVE_COMMANDS, EXECUTE_CONFIG).",
      verifiedRules: [
        "Suspended/Revoked devices immediately fail with HTTP 403 Forbidden",
        "HMAC token hashing against MongoDB store",
        "Actuator commands require RECEIVE_COMMANDS capability",
      ],
    },
    {
      id: "detection",
      name: "Security Detection Engine",
      subtitle: "Real-Time Telemetry & Threat Analysis",
      detail:
        "Evaluates telemetry streams, connection frequencies, and access attempts in real time against locked detection algorithms.",
      verifiedRules: [
        "VALUE_OUT_OF_BOUNDS: Triggers if Temp > 45°C or < 0°C",
        "AUTH_BRUTE_FORCE: Triggers if >= 5 failed auth attempts in 60s",
        "RATE_LIMIT_EXCEEDED: Triggers if packet frequency > 10 msgs/sec",
        "DEVICE_INACTIVE: Deadman timeout if heartbeat missed by > 2x interval + 15s",
        "CAPABILITY_MISMATCH: Unauthorized actuator commands",
        "DEVICE_IMPERSONATION: Token mismatch on valid device ID",
      ],
    },
    {
      id: "response",
      name: "Response / Automated Quarantine",
      subtitle: "SOAR Automated Actions",
      detail:
        "When critical security violations occur, the Device Lifecycle Manager transitions the offending node to SUSPENDED, revoking ingest privileges and triggering safety interlocks.",
      verifiedRules: [
        "Automated device state transition to SUSPENDED",
        "Actuator emergency power shutoff",
        "Instant WebSocket security broadcast to SOC operator",
      ],
    },
    {
      id: "audit",
      name: "SHA-256 Audit Ledger",
      subtitle: "Cryptographic Tamper-Evident Ledger",
      detail:
        "All state changes, alerts, and administrative actions are logged in a cryptographic hash chain where entry_hash = SHA256(prev_hash || timestamp || event_type || actor || data).",
      verifiedRules: [
        "Genesis block starts with 64 zero characters",
        "1-click tamper check traverses from genesis to head",
        "Immediate detection of historical log alteration",
      ],
    },
    {
      id: "dashboard",
      name: "React 19 SOC Dashboard",
      subtitle: "Live Operator Presentation Console",
      detail:
        "Dark-themed SOC dashboard featuring live sensor telemetry gauges, real-time WebSocket alert feed, 1-click attack simulation runner, cryptographic ledger viewer, and forensic incident timeline.",
      verifiedRules: [
        "React 19 + TypeScript + Vite",
        "Zero remote CDN dependencies",
        "Live gauge components for temperature, motion radar, and HVAC watts",
      ],
    },
  ];

  const scenarios = [
    {
      id: "A",
      title: "Scenario A: Unregistered Device Attack",
      vector: "An unprovisioned rogue temperature node (ROGUE-TEMP-999) attempts to inject sensor telemetry.",
      detection: "DEVICE_UNREGISTERED triggered at the ingestion boundary.",
      decision: "Reject unauthorized payload; flag as potential rogue hardware injection.",
      response: "HTTP 401 Unauthorized; security event logged in triage queue.",
      audit: "Audit entry recorded with client IP and attempted device identifier.",
    },
    {
      id: "B",
      title: "Scenario B: Brute-Force Auth Flood",
      vector: "Attacker attempts 8 rapid requests with invalid HMAC secret keys within 5 seconds.",
      detection: "AUTH_BRUTE_FORCE triggered after sliding window exceeds 5 failures in 60s.",
      decision: "Classify source as automated credential attack; initiate containment.",
      response: "Device quarantined (state -> SUSPENDED); alert escalated to HIGH severity in SOC.",
      audit: "Cryptographic ledger block minted with brute-force event payload.",
    },
    {
      id: "C",
      title: "Scenario C: Telemetry Flood (Denial of Service)",
      vector: "Compromised device fires 30 high-frequency telemetry packets within 500 milliseconds.",
      detection: "RATE_LIMIT_EXCEEDED triggered when packet rate exceeds 10 msgs/second threshold.",
      decision: "Prevent backend resource starvation; throttle incoming traffic.",
      response: "Token-bucket rate-limiter drops packets; warning broadcast to SOC console.",
      audit: "Rate limit breach logged in audit store without persisting dropped payloads.",
    },
    {
      id: "D",
      title: "Scenario D: Hardware Sensor Tampering",
      vector: "Adversary injects extreme analog voltage into Proteus LM35 ADC simulating 105°C.",
      detection: "VALUE_OUT_OF_BOUNDS triggered (Temperature > 45°C safety limit).",
      decision: "Assess as critical physical safety violation or hardware malfunction.",
      response: "CRITICAL SOC alarm raised; automated safety interlock disengages smart HVAC actuator.",
      audit: "Emergency shutdown event cryptographically chained in audit ledger.",
    },
    {
      id: "E",
      title: "Scenario E: Silent Device Drop (Deadman Alert)",
      vector: "Device suddenly ceases transmitting telemetry frames and heartbeat pings.",
      detection: "DEVICE_INACTIVE triggered when elapsed time > 2 * heartbeat_interval + 15s.",
      decision: "Evaluate potential physical power failure, hardware severance, or network disconnection.",
      response: "Device marked OFFLINE on dashboard fleet map; notification raised for technician review.",
      audit: "Deadman trigger logged with last-seen timestamp and expected heartbeat interval.",
    },
    {
      id: "F",
      title: "Scenario F: Device Impersonation",
      vector: "Adversary uses legitimate device ID LPC2138-TEMP-001 with forged or mismatched credentials.",
      detection: "DEVICE_IMPERSONATION triggered during HMAC cryptographic token verification.",
      decision: "Detect unauthorized actor attempting credential hijack.",
      response: "Request rejected with HTTP 403 Forbidden; origin IP flagged in SOC.",
      audit: "Impersonation attempt recorded with cryptographic signature mismatch proof.",
    },
    {
      id: "G",
      title: "Scenario G: Unauthorized Command Injection",
      vector: "Unprivileged temperature sensor attempts to transmit actuator control command (SET_TEMP).",
      detection: "CAPABILITY_MISMATCH triggered at RBAC enforcement gate.",
      decision: "Sensor lacks RECEIVE_COMMANDS capability token.",
      response: "Command discarded with HTTP 403; access violation alert logged.",
      audit: "Authorization refusal recorded with requested capability vs granted tokens.",
    },
  ];

  const activeScenarioData = scenarios.find((s) => s.id === selectedScenario) || scenarios[0];

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
            <span className="font-mono text-xs font-bold text-cyanflux uppercase tracking-wider">
              IOT SECURITY // HARDWARE-IN-THE-LOOP SIMULATION & SOC
            </span>
            <span className="rounded border border-secgreen/40 bg-secgreen/10 px-2.5 py-0.5 font-mono text-[0.68rem] text-secgreen">
              ● Production Live Deployment
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-control-text mb-3">
            VIRTUAL IOT SECURITY LABORATORY
          </h1>
          <p className="font-sans text-base sm:text-lg text-control-textMuted max-w-3xl leading-relaxed mb-6">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-control-border/60">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-cyanflux/50 bg-cyanflux/15 px-4 font-mono text-xs font-semibold text-cyanflux hover:bg-cyanflux/25 transition shadow-glow"
            >
              <span>Launch Live SOC Dashboard</span>
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

        {/* Section 1: Detailed Interactive Architecture (Requirement 14) */}
        <section className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-8 mb-12 shadow-panel">
          <div className="border-b border-control-border pb-4 mb-6">
            <span className="font-mono text-xs text-cyanflux uppercase tracking-wider block mb-1">
              SYSTEM ARCHITECTURE // HARDWARE-TO-CLOUD DATA FLOW
            </span>
            <h2 className="font-display text-2xl font-bold text-control-text">
              Interactive End-to-End IoT Pipeline
            </h2>
            <p className="font-sans text-xs text-control-textMuted mt-1">
              Click any architecture block from microcontroller to SOC dashboard to reveal verified firmware rules, protocols, and security invariants.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-6">
            {/* Flow Block List */}
            <div className="space-y-1.5 font-mono text-xs">
              {archBlocks.map((block, idx) => {
                const isSelected = activeArchBlock === idx;
                return (
                  <button
                    key={block.id}
                    type="button"
                    onClick={() => setActiveArchBlock(idx)}
                    className={`w-full flex items-center justify-between rounded-lg border px-3 py-2 transition text-left ${
                      isSelected
                        ? "border-cyanflux bg-cyanflux/15 text-cyanflux font-bold shadow-glow"
                        : "border-control-border bg-control-bg text-control-textMuted hover:border-control-borderHighlight hover:text-control-text"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[0.65rem] text-control-textSubtle">{String(idx + 1).padStart(2, "0")}</span>
                      <span>{block.name}</span>
                    </div>
                    <ChevronRight className={`h-3.5 w-3.5 ${isSelected ? "text-cyanflux" : "text-control-textSubtle"}`} />
                  </button>
                );
              })}
            </div>

            {/* Block Inspector Card */}
            <div className="rounded-xl border border-control-border bg-control-bg p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-control-border pb-3 mb-4 font-mono text-xs">
                  <span className="font-bold text-cyanflux">
                    BLOCK {String(activeArchBlock + 1).padStart(2, "0")} // {archBlocks[activeArchBlock].name}
                  </span>
                  <span className="text-[0.68rem] text-control-textSubtle">
                    {archBlocks[activeArchBlock].subtitle}
                  </span>
                </div>

                <p className="font-sans text-sm text-control-text leading-relaxed mb-6">
                  {archBlocks[activeArchBlock].detail}
                </p>
              </div>

              <div className="rounded-lg border border-control-border bg-control-surface p-4 font-mono text-xs">
                <span className="text-cyanflux font-bold block mb-2">Verified Operational Rules & Invariants:</span>
                <ul className="space-y-1.5 text-control-textMuted font-sans text-xs">
                  {archBlocks[activeArchBlock].verifiedRules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyanflux font-mono">▸</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Attack Simulation Visualization (Requirement 15) */}
        <section className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-8 mb-12 shadow-panel">
          <div className="border-b border-control-border pb-4 mb-6">
            <span className="font-mono text-xs text-secgreen uppercase tracking-wider block mb-1">
              EDUCATIONAL ATTACK VISUALIZATION // MITRE ATT&CK ALIGNED
            </span>
            <h2 className="font-display text-2xl font-bold text-control-text">
              7 Simulated Cyberattack Scenarios (A through G)
            </h2>
            <p className="font-sans text-xs text-control-textMuted mt-1">
              Safe educational visualization demonstrating detection rules, security decisions, automated responses, and cryptographic auditing.
            </p>
          </div>

          {/* Scenario Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {scenarios.map((scen) => {
              const isSelected = selectedScenario === scen.id;
              return (
                <button
                  key={scen.id}
                  type="button"
                  onClick={() => setSelectedScenario(scen.id)}
                  className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition ${
                    isSelected
                      ? "border-secgreen bg-secgreen/15 text-secgreen font-bold shadow-glow-green"
                      : "border-control-border bg-control-bg text-control-textMuted hover:border-control-borderHighlight hover:text-control-text"
                  }`}
                >
                  Scenario {scen.id}
                </button>
              );
            })}
          </div>

          {/* Active Scenario Pipeline */}
          <div className="rounded-xl border border-control-border bg-control-bg p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-control-border/60 pb-3">
              <h3 className="font-display text-lg font-bold text-control-text">
                {activeScenarioData.title}
              </h3>
              <span className="font-mono text-xs text-secgreen">Automated Pipeline</span>
            </div>

            {/* 5-Stage Event Flow */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 font-mono text-xs">
              <div className="rounded-lg border border-control-border bg-control-surface p-3 space-y-1">
                <span className="text-[0.65rem] text-crimsonalert font-bold block uppercase">1. ATTACK / EVENT</span>
                <p className="font-sans text-xs text-control-textMuted leading-relaxed">{activeScenarioData.vector}</p>
              </div>

              <div className="rounded-lg border border-control-border bg-control-surface p-3 space-y-1">
                <span className="text-[0.65rem] text-cyanflux font-bold block uppercase">2. DETECTION</span>
                <p className="font-sans text-xs text-control-textMuted leading-relaxed">{activeScenarioData.detection}</p>
              </div>

              <div className="rounded-lg border border-control-border bg-control-surface p-3 space-y-1">
                <span className="text-[0.65rem] text-amberwarn font-bold block uppercase">3. DECISION</span>
                <p className="font-sans text-xs text-control-textMuted leading-relaxed">{activeScenarioData.decision}</p>
              </div>

              <div className="rounded-lg border border-control-border bg-control-surface p-3 space-y-1">
                <span className="text-[0.65rem] text-secgreen font-bold block uppercase">4. RESPONSE</span>
                <p className="font-sans text-xs text-control-textMuted leading-relaxed">{activeScenarioData.response}</p>
              </div>

              <div className="rounded-lg border border-control-border bg-control-surface p-3 space-y-1">
                <span className="text-[0.65rem] text-blueflux font-bold block uppercase">5. AUDIT</span>
                <p className="font-sans text-xs text-control-textMuted leading-relaxed">{activeScenarioData.audit}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Verification & Test Results */}
        <section className="rounded-xl border border-control-border bg-control-surface p-6 sm:p-8 mb-12 shadow-panel">
          <div className="border-b border-control-border pb-4 mb-6">
            <span className="font-mono text-xs text-secgreen uppercase tracking-wider block mb-1">
              QUALITY ASSURANCE // 117 / 117 AUTOMATED TESTS
            </span>
            <h2 className="font-display text-2xl font-bold text-control-text">
              Empirical QA & Test Evidence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            <div className="rounded-lg border border-control-border bg-control-bg p-5 space-y-3">
              <span className="text-secgreen font-bold block text-sm">Pytest Test Suite (117 / 117 Passing):</span>
              <p className="font-sans text-xs text-control-textMuted leading-relaxed">
                Ran across 10 specialized test phases: Phase 0 (Foundation), Phase 1 (Database), Phase 2 (Device Management), Phase 3 (Lifecycle), Phase 4 (Telemetry), Phase 6 (Auth), Phase 7 (Security Engine), Phase 8 (Scenarios), Phase 9 (Investigation), and Device Simulator.
              </p>
              <div className="text-cyanflux font-bold">Execution Time: 23.4s · 0 Failed · 0 Errors</div>
            </div>

            <div className="rounded-lg border border-control-border bg-control-bg p-5 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-control-text font-bold block text-sm mb-2">Cryptographic Tamper Check:</span>
                <p className="font-sans text-xs text-control-textMuted leading-relaxed">
                  The SHA-256 audit ledger provides an algorithmic tamper verification function that recomputes every block hash from Genesis to current head. If any byte in history is modified, the break is immediately localized.
                </p>
              </div>
              <div className="text-[0.68rem] text-control-textSubtle border-t border-control-border pt-3">
                Verified repository report: <code className="text-secgreen">FINAL_PROJECT_REPORT.md</code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
