"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, ChevronDown, ChevronUp, X } from "lucide-react";
import { useMode } from "@/context/ModeContext";

export default function TerminalWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: "system", text: "Tushar Chaugule — Engineering Control Room CLI [v1.0.0]" },
    { type: "system", text: "Type 'help' to view available system commands." },
  ]);
  const [inputVal, setInputVal] = useState("");
  const { mode, setMode } = useMode();
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const parts = raw.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newHistory = [...history, { type: "user", text: `$ ${raw}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Available commands:
  whoami               Identify engineer identity & specialization
  focus                Inspect engineering disciplines
  projects --featured  List 4 verified flagship systems
  mode [sw|sec]        Inspect or switch active control mode
  proof                Display verified automated testing metrics
  clear                Clear terminal screen
  exit                 Minimize terminal widget`,
        });
        break;

      case "whoami":
        newHistory.push({
          type: "output",
          text: `tushar-chaugule
Computer Engineering (B.Tech, JSPM's RSCOE Pune, CGPA 8.85)
Disciplines: Software Engineering × Cybersecurity × AI × Embedded/IoT
Current Status: Production Systems & Research Completed`,
        });
        break;

      case "focus":
        newHistory.push({
          type: "output",
          text: `Active Engineering Focuses:
  [1] software-engineering   (Full-stack, APIs, WebSockets, Distributed DBs)
  [2] cybersecurity          (Control plane, VAPT, SHA-256 ledgers, Authz)
  [3] ai-systems             (Multimodal emotion fusion, NLP, RAG, Safety)
  [4] embedded-iot           (ARM7 LPC2138, Proteus, C firmware, UART bridge)`,
        });
        break;

      case "projects":
        if (args.includes("--featured") || args.length === 0) {
          newHistory.push({
            type: "output",
            text: `Flagship Verified Systems:
  * rakshak                    Local-First Cybersecurity Control Plane (35 capabilities, 1,387 tests)
  * virtual-iot-security-lab   ARM7 Proteus Hardware-in-Loop Testbed (7 attacks, 117 tests)
  * ks-sentinel-2.0            Secure Workspace OS (3-Tier Gateway & Local Agent)
  * vedai                      Multimodal AI Assistant (5-Layer Safety & AES-256)`,
          });
        } else {
          newHistory.push({ type: "output", text: "Usage: projects --featured" });
        }
        break;

      case "mode":
        if (args[0] === "sw" || args[0] === "software") {
          setMode("software");
          newHistory.push({ type: "output", text: "Control Room Mode updated -> SOFTWARE ENGINEER" });
        } else if (args[0] === "sec" || args[0] === "cybersecurity" || args[0] === "security") {
          setMode("cybersecurity");
          newHistory.push({ type: "output", text: "Control Room Mode updated -> CYBERSECURITY" });
        } else {
          newHistory.push({
            type: "output",
            text: `Current mode: ${mode.toUpperCase()}
Usage: mode sw | mode sec`,
          });
        }
        break;

      case "proof":
        newHistory.push({
          type: "output",
          text: `Verified Engineering Proofs:
  - 1,387 / 1,387 Pytest Regression Tests (Rakshak P3.7) -> 100% Pass
  - 117 / 117 Pytest Automated Tests (Virtual IoT Lab) -> 100% Pass
  - 35 Locked Capabilities (26 Read-Only, 9 Mutating)
  - 7 Simulated Cyberattack Scenarios (A through G)
  - 5-Layer Crisis Interception Pipeline (Multilingual + Benign Idiom Filter)`,
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
      case "quit":
        setIsOpen(false);
        break;

      default:
        newHistory.push({
          type: "error",
          text: `Command not recognized: '${cmd}'. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-lg border border-control-border bg-control-surface/95 px-3 py-2 text-xs font-mono text-control-textMuted shadow-panel backdrop-blur hover:border-cyanflux/50 hover:text-cyanflux transition"
          aria-label="Open engineering terminal"
        >
          <TerminalIcon className="h-4 w-4 text-cyanflux" />
          <span>$ terminal</span>
        </button>
      ) : (
        <div className="w-[92vw] max-w-lg overflow-hidden rounded-xl border border-control-border bg-control-surface shadow-2xl backdrop-blur-xl sm:w-[480px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-control-border bg-control-bg px-3 py-2">
            <div className="flex items-center gap-2 font-mono text-xs text-control-text">
              <TerminalIcon className="h-3.5 w-3.5 text-cyanflux" />
              <span>operator@control-room:~</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded p-1 text-control-textMuted hover:text-control-text"
                aria-label="Minimize terminal"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="h-60 overflow-y-auto p-3 font-mono text-xs text-control-text leading-relaxed">
            {history.map((line, idx) => (
              <div
                key={idx}
                className={`mb-1.5 whitespace-pre-wrap ${
                  line.type === "user"
                    ? "text-cyanflux font-semibold"
                    : line.type === "system"
                    ? "text-control-textSubtle"
                    : line.type === "error"
                    ? "text-crimsonalert"
                    : "text-control-text"
                }`}
              >
                {line.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input prompt */}
          <form onSubmit={handleSubmit} className="flex items-center border-t border-control-border bg-control-bg px-3 py-2 font-mono text-xs">
            <span className="text-cyanflux mr-2 font-semibold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type command (help, whoami, focus, projects)..."
              className="flex-1 bg-transparent text-control-text placeholder:text-control-textSubtle focus:outline-none"
              autoFocus
            />
          </form>
        </div>
      )}
    </div>
  );
}
