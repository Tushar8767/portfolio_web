// Verified Evidence Matrix: Maps technologies directly to physical repositories & implementations

export const evidenceMap = [
  {
    technology: "Python",
    category: "Software / Security",
    projects: [
      {
        id: "rakshak",
        name: "Rakshak",
        role: "Core security spine, policy engine, authority resolver, FastAPI loopback API, and CLI recovery",
        fileEvidence: "src/rakshak/core/spine.py, src/rakshak/api/routes.py",
      },
      {
        id: "virtual-iot",
        name: "Virtual IoT Security Laboratory",
        role: "FastAPI security backend, detection engine, SHA-256 audit ledger, and UART serial bridge",
        fileEvidence: "backend/app/main.py, scripts/run_proteus_bridge.py",
      },
      {
        id: "vedai",
        name: "VedAI",
        role: "FastAPI ML microservice, NLP processing, facial emotion analysis, and TF-IDF cosine retrieval",
        fileEvidence: "ml_model/app.py, ml_model/rag_service.py",
      },
    ],
  },
  {
    technology: "React",
    category: "Frontend",
    projects: [
      {
        id: "ks-sentinel",
        name: "KS Sentinel 2.0",
        role: "Virtual Web OS frontend desktop interface with windowing managers and capability inspectors",
        fileEvidence: "client/src/App.jsx, client/src/components/Desktop.jsx",
      },
      {
        id: "virtual-iot",
        name: "Virtual IoT Security Laboratory",
        role: "React 19 SOC dashboard with live sensor gauges, attack runner, and 1-click tamper check",
        fileEvidence: "frontend/src/App.tsx, frontend/src/components/SOCDashboard.tsx",
      },
      {
        id: "vedai",
        name: "VedAI",
        role: "Conversational self-reflection interface, video emotion monitor, and journal views",
        fileEvidence: "frontend/src/components/ChatView.jsx, frontend/src/components/VideoFeed.jsx",
      },
      {
        id: "rakshak",
        name: "Rakshak",
        role: "React 19 presentation console hosted inside Tauri v2 desktop shell with confirmation modals",
        fileEvidence: "gui/src/App.tsx, gui/src/components/common/ConfirmationModal.tsx",
      },
    ],
  },
  {
    technology: "FastAPI",
    category: "Backend / API",
    projects: [
      {
        id: "rakshak",
        name: "Rakshak",
        role: "Loopback-confined REST & WebSocket control API bound strictly to 127.0.0.1:8765",
        fileEvidence: "src/rakshak/api/app.py",
      },
      {
        id: "virtual-iot",
        name: "Virtual IoT Security Laboratory",
        role: "Asynchronous telemetry ingest API, rate limiter, and WebSocket broadcaster",
        fileEvidence: "backend/app/routes/telemetry.py",
      },
      {
        id: "vedai",
        name: "VedAI",
        role: "Python microservice serving emotion fusion and scripture retrieval endpoints",
        fileEvidence: "ml_model/app.py",
      },
    ],
  },
  {
    technology: "Node.js & Express",
    category: "Backend",
    projects: [
      {
        id: "ks-sentinel",
        name: "KS Sentinel 2.0",
        role: "Secure Gateway mediating web requests to the Windows Local Agent with path sanitization",
        fileEvidence: "server/src/server.js, server/src/routes/api.js",
      },
      {
        id: "vedai",
        name: "VedAI",
        role: "Primary application server handling 5-layer safety detector, AES-256-GCM encryption, and DB access",
        fileEvidence: "backend/services/safetyService.js, backend/utils/encryption.js",
      },
    ],
  },
  {
    technology: "C (Firmware) & ARM7",
    category: "Embedded / IoT",
    projects: [
      {
        id: "virtual-iot",
        name: "Virtual IoT Security Laboratory",
        role: "Compiled C firmware for NXP LPC2138 ARM7 microcontroller reading LM35 ADC and transmitting over UART0",
        fileEvidence: "simulation/firmware/main.c",
      },
    ],
  },
  {
    technology: "SHA-256 Cryptographic Hash Chaining",
    category: "Security",
    projects: [
      {
        id: "rakshak",
        name: "Rakshak",
        role: "High-integrity append-only JSONL audit store with cryptographic break detection across 3,500+ records",
        fileEvidence: "src/rakshak/core/audit.py",
      },
      {
        id: "virtual-iot",
        name: "Virtual IoT Security Laboratory",
        role: "Cryptographic block ledger linking previous_hash and entry_hash with 1-click tamper check",
        fileEvidence: "backend/app/services/audit_service.py",
      },
    ],
  },
  {
    technology: "Threat Detection & SOC",
    category: "Security",
    projects: [
      {
        id: "virtual-iot",
        name: "Virtual IoT Security Laboratory",
        role: "6 deterministic threat detection algorithms with SOAR automated quarantine and 7 MITRE attack scenarios",
        fileEvidence: "backend/app/services/detection_engine.py, backend/app/services/attack_simulation.py",
      },
      {
        id: "rakshak",
        name: "Rakshak",
        role: "Real-time process anomaly observation, memory drift tracking, and network socket inspection",
        fileEvidence: "src/rakshak/core/observer.py",
      },
    ],
  },
  {
    technology: "Capability Authorization & RBAC",
    category: "Security / Systems",
    projects: [
      {
        id: "rakshak",
        name: "Rakshak",
        role: "Strict inventory of 35 registered capabilities (26 read-only, 9 mutating) with two-step cryptographic tokens",
        fileEvidence: "src/rakshak/core/capabilities.py, src/rakshak/core/authority.py",
      },
      {
        id: "ks-sentinel",
        name: "KS Sentinel 2.0",
        role: "Capability broker routing client requests to pre-registered local operations with zero shell access",
        fileEvidence: "agent/src/capability_broker.js",
      },
    ],
  },
  {
    technology: "VAPT & Security Tools",
    category: "Cybersecurity",
    projects: [
      {
        id: "virtual-iot",
        name: "Virtual IoT Security Laboratory",
        role: "Vulnerability analysis, protocol fuzzing, HMAC authentication testing, and network sniffing simulations",
        fileEvidence: "tests/test_attack_scenarios.py, scripts/network_audit.py",
      },
      {
        id: "rakshak",
        name: "Rakshak",
        role: "Host attack surface reduction, loopback binding verification, and automated security test suite",
        fileEvidence: "tests/test_spine.py, tests/test_security.py",
      },
    ],
  },
  {
    technology: "WebSocket & Real-Time Telemetry",
    category: "Software / Systems",
    projects: [
      {
        id: "virtual-iot",
        name: "Virtual IoT Security Laboratory",
        role: "Bi-directional WebSocket streaming live sensor readings, attack alerts, and SOAR actions to React frontend",
        fileEvidence: "backend/app/routes/ws.py, frontend/src/hooks/useWebSocket.ts",
      },
      {
        id: "ks-sentinel",
        name: "KS Sentinel 2.0",
        role: "Low-latency WebSocket channel between Web OS desktop, gateway, and local agent heartbeat",
        fileEvidence: "server/src/websocket.js",
      },
    ],
  },
  {
    technology: "AES-256-GCM Encryption",
    category: "Security",
    projects: [
      {
        id: "vedai",
        name: "VedAI",
        role: "Authenticated application-level encryption at rest for reflection entries and chat logs",
        fileEvidence: "backend/utils/encryption.js (ENC-001..006)",
      },
    ],
  },
  {
    technology: "Tauri v2 (Desktop Shell)",
    category: "Systems",
    projects: [
      {
        id: "rakshak",
        name: "Rakshak",
        role: "Sandboxed Rust desktop wrapper for React 19 security console with strict Content Security Policy",
        fileEvidence: "gui/src-tauri/src/main.rs, gui/src-tauri/tauri.conf.json",
      },
    ],
  },
  {
    technology: "Pytest & Automated Testing",
    category: "Verification",
    projects: [
      {
        id: "virtual-iot",
        name: "Virtual IoT Security Laboratory",
        role: "117 / 117 automated unit and integration tests passing covering auth, detection, and ledger integrity",
        fileEvidence: "tests/test_detection_engine.py, tests/test_audit_service.py",
      },
      {
        id: "rakshak",
        name: "Rakshak",
        role: "1,387 regression test suite verifying security spine stages, authority resolution, and token validation",
        fileEvidence: "tests/test_spine.py, tests/test_capabilities.py",
      },
    ],
  },
];
