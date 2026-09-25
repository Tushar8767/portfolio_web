// Centralized verified project data model for Engineering Control Room
// Contains zero fabricated metrics — all stats verified against physical repositories

export const projects = [
  {
    id: "rakshak",
    slug: "rakshak",
    title: "Rakshak",
    domain: "Cybersecurity · Local-First Control Plane",
    domainShort: "Cybersecurity",
    tagline: "Local-First Cybersecurity Control Plane & Operator Security Console",
    summary:
      "Rakshak is an offline-first, defense-in-depth cybersecurity control platform and operator security console. It enforces deterministic, policy-governed system control, real-time security observation, and cryptographic tamper-evident auditability with a non-bypassable 11-stage security spine.",
    problem:
      "Modern workstations and host environments lack granular, tamper-evident boundaries between operator interfaces, automated scripts, and system operations. Implicit trust models allow accidental or malicious privilege escalation without cryptographic accountability or human verification.",
    why:
      "Designed from first principles to ensure that no operation executes implicitly, AI is treated strictly as an untrusted advisory layer, mutating actions require two-step cryptographic confirmation, and historical event logs are linked via SHA-256 hash chains.",
    
    // Deployment & Status
    status: "CASE STUDY",
    statusBadge: "Desktop Release Certified",
    deploymentType: "case-study",
    liveUrl: null, // Local-first desktop/API platform; strictly no fake live demo
    githubUrl: "https://github.com/Tushar8767/Rakshak",
    
    // Mode prioritization: 1 = primary priority
    priority: {
      software: 4,
      cybersecurity: 1,
    },

    // Verified metrics
    metrics: [
      { label: "Regression Tests", value: "1,387", detail: "0 failed, 0 errors in pytest suite", linkTo: "#testing" },
      { label: "Locked Capabilities", value: "35", detail: "26 Read-Only, 9 Mutating", linkTo: "#capabilities" },
      { label: "Security Spine Stages", value: "11", detail: "Strict non-bypassable execution pipeline", linkTo: "#spine" },
      { label: "Confirmation Token TTL", value: "30s", detail: "Cryptographic single-use challenge token", linkTo: "#confirmation" },
    ],

    // Architecture highlights
    architecture: [
      { stage: "01", name: "INPUT", detail: "Operator CLI, Tauri desktop GUI, or local API request" },
      { stage: "02", name: "IDENTITY", detail: "Deterministic IdentityResolver with immutable models" },
      { stage: "03", name: "AUTHORITY", detail: "4-tier hierarchy: UNTRUSTED < USER < TRUSTED < ADMIN < SYSTEM" },
      { stage: "04", name: "INTENT", detail: "Structured command mapping with prompt-injection defense" },
      { stage: "05", name: "POLICY", detail: "Fail-closed evaluation: DENY > REQUIRE_CONFIRMATION > ALLOW" },
      { stage: "06", name: "CONFIRMATION", detail: "Mandatory single-use cryptographic token for mutating actions" },
      { stage: "07", name: "EXECUTION", detail: "Policy-authorized dispatch gate; rejects direct bypass" },
      { stage: "08", name: "DISPATCHER", detail: "Platform boundary enforcement using psutil & native APIs" },
      { stage: "09", name: "HANDLER", detail: "Zero shell execution (no subprocess, no os.system, no eval)" },
      { stage: "10", name: "OS OPERATION", detail: "Deterministic sandboxed interaction with Windows host" },
      { stage: "11", name: "AUDIT", detail: "Append-only JSONL with SHA-256 hash chaining & break detection" },
    ],

    capabilityModel: {
      total: 35,
      mutating: [
        { name: "file.write", category: "Storage", desc: "Write bounded, sandboxed file content" },
        { name: "file.delete", category: "Storage", desc: "Safe file deletion behind operator confirmation" },
        { name: "process.terminate", category: "Process", desc: "Terminate process by validated PID with self-protection" },
        { name: "service.start", category: "Service", desc: "Start a registered local system service" },
        { name: "service.stop", category: "Service", desc: "Stop a running system service" },
        { name: "service.restart", category: "Service", desc: "Restart a system service" },
        { name: "response.process.terminate", category: "Response", desc: "Incident response process termination" },
        { name: "response.service.stop", category: "Response", desc: "Incident response service isolation" },
        { name: "response.service.restart", category: "Response", desc: "Incident response service recovery" },
      ],
      readOnlyCount: 26,
    },

    techStack: ["Python 3.11+", "FastAPI", "Tauri v2", "React 19", "TypeScript", "psutil", "SHA-256", "Pytest"],
    colorAccent: "secgreen",
  },
  {
    id: "ks-sentinel",
    slug: "ks-sentinel",
    title: "KS Sentinel 2.0",
    domain: "Software Systems · Secure Workspace OS",
    domainShort: "Software Systems",
    tagline: "Three-Tier Secure Workspace OS & Controlled Remote Capability Broker",
    summary:
      "KS Sentinel 2.0 is a web-based Virtual Operating Environment designed to provide secure, controlled remote access to authorized local-machine resources, system state, AI services, and cybersecurity capabilities across strict network and process boundaries.",
    problem:
      "Allowing remote web clients to access host developer workstations typically introduces catastrophic security risks, including arbitrary command execution, path traversal escapes, and uncontrolled process spawning.",
    why:
      "Engineered with a decoupled three-tier architecture: the browser executes a sandboxed React Web OS, communicating solely through a hardened Node.js/Express Secure Gateway, which brokers pre-authorized capabilities to a dedicated Windows Local Agent.",

    // Deployment & Status
    status: "LIVE",
    statusBadge: "Production Deployment",
    deploymentType: "live",
    liveUrl: "https://ks-sentinel-server.onrender.com/",
    activeInstanceUrl: "https://ks-sentinel-2-0.onrender.com/",
    githubUrl: "https://github.com/Tushar8767/KS_Sentinel_2.0",

    // Mode prioritization
    priority: {
      software: 1,
      cybersecurity: 3,
    },

    // Verified metrics
    metrics: [
      { label: "Architecture Model", value: "3-Tier", detail: "Web OS -> Gateway -> Windows Local Agent", linkTo: "#architecture" },
      { label: "Roadmap Modules", value: "28 Modules", detail: "Locked 0-27 sequential module roadmap", linkTo: "#modules" },
      { label: "Filesystem Boundary", value: "Confined", detail: "Canonical path validation; zero escapes", linkTo: "#security" },
      { label: "Execution Model", value: "Capability Broker", detail: "Zero raw shell execution APIs", linkTo: "#broker" },
    ],

    architecture: [
      { stage: "Tier 1", name: "React 18 / Vite Web OS", detail: "Virtual desktop environment with modular window managers" },
      { stage: "Tier 2", name: "Node.js / Express Gateway", detail: "Session token validation, rate limiting, and route filtering" },
      { stage: "Tier 3", name: "Windows Local Agent", detail: "Sandboxed native execution on the host machine via IPC/WS" },
    ],

    techStack: ["React 18", "Vite", "Node.js", "Express", "MongoDB", "WebSocket", "Tailwind CSS"],
    colorAccent: "cyanflux",
  },
  {
    id: "virtual-iot",
    slug: "virtual-iot",
    title: "Virtual IoT Security Laboratory",
    domain: "IoT Security · Embedded Systems · SOC",
    domainShort: "IoT Security",
    tagline: "Software-Defined IoT Security Testbed & SOC Dashboard with Proteus LPC2138 ARM7",
    summary:
      "A reproducible IoT cybersecurity testbed pairing a simulated ARM7 hardware microcontroller (Philips/NXP LPC2138) in Proteus ISIS with a virtual device fleet, an enterprise FastAPI security backend, an automated threat detection engine, an immutable SHA-256 audit ledger, and a React 19 SOC dashboard.",
    problem:
      "Cybersecurity testing on physical hardware is costly, difficult to scale, and carries risks of device destruction during aggressive attacks. Developers lack safe environments to test IoT attack scenarios, firmware UART bridging, and automated quarantine responses.",
    why:
      "Built to enable deterministic execution of 7 MITRE ATT&CK-aligned scenarios, bridging compiled ARM7 C firmware with cloud-deployable security backends and cryptographic audit ledgers without requiring physical hardware benches.",

    // Deployment & Status
    status: "LIVE",
    statusBadge: "Production Deployment",
    deploymentType: "live",
    liveUrl: "https://virtual-iot-security-laboratory.onrender.com/",
    githubUrl: "https://github.com/Tushar8767/Virtual-IoT-Security-Laboratory",

    // Mode prioritization
    priority: {
      software: 2,
      cybersecurity: 2,
    },

    // Verified metrics
    metrics: [
      { label: "Automated Tests", value: "117 / 117", detail: "100% pass rate in pytest suite", linkTo: "#testing" },
      { label: "Simulated Attacks", value: "7 Scenarios", detail: "Scenarios A through G (MITRE ATT&CK)", linkTo: "#scenarios" },
      { label: "Hardware Core", value: "LPC2138", detail: "ARM7TDMI 60 MHz with C firmware & ADC", linkTo: "#hardware" },
      { label: "Audit Ledger", value: "SHA-256", detail: "Cryptographic hash-chained block verification", linkTo: "#ledger" },
    ],

    scenarios: [
      { id: "A", name: "Unregistered Device Attack", vector: "Unprovisioned node ROGUE-TEMP-999 injects telemetry", rule: "DEVICE_UNREGISTERED", response: "401 Unauthorized; security alert logged" },
      { id: "B", name: "Brute-Force Auth Flood", vector: "8 rapid requests with invalid HMAC keys", rule: "AUTH_BRUTE_FORCE", response: "IP/Device quarantined; alert escalated to HIGH" },
      { id: "C", name: "Telemetry Flood (DoS)", vector: "30 high-frequency packets fired within 500ms", rule: "RATE_LIMIT_EXCEEDED", response: "Token-bucket rate-limiter drops packets; alerts SOC" },
      { id: "D", name: "Hardware Sensor Tampering", vector: "Extreme temperature (105°C) fed through Proteus LM35", rule: "VALUE_OUT_OF_BOUNDS", response: "CRITICAL alarm; safety interlock triggered" },
      { id: "E", name: "Silent Device Drop", vector: "Device halts telemetry and heartbeats", rule: "DEVICE_INACTIVE", response: "Deadman timeout triggers alert; marked OFFLINE" },
      { id: "F", name: "Device Impersonation", vector: "Spoofed device ID attempting credential hijack", rule: "DEVICE_IMPERSONATION", response: "Token signature mismatch rejected" },
      { id: "G", name: "Unauthorized Command", vector: "Unprivileged sensor attempts to issue SET_TEMP", rule: "CAPABILITY_MISMATCH", response: "RBAC gate rejects command (403 Forbidden)" },
    ],

    techStack: ["Python 3.12", "FastAPI", "React 19", "TypeScript", "C (ARM7)", "Proteus ISIS", "WebSocket", "MongoDB"],
    colorAccent: "secgreen",
  },
  {
    id: "vedai",
    slug: "vedai",
    title: "VedAI",
    domain: "AI Engineering · Multimodal Systems · Safety",
    domainShort: "AI Engineering",
    tagline: "Multimodal AI Self-Reflection Assistant with Layered Safety & Encryption",
    summary:
      "A full-stack multimodal AI self-reflection platform combining natural language processing, facial emotion recognition, weighted emotion fusion (60% NLP / 40% FER), TF-IDF cosine similarity retrieval over curated canonical scripture verses, and authenticated AES-256-GCM encryption at rest.",
    problem:
      "Conversational reflection tools often suffer from LLM hallucinations, lack emotional nuance from textual input alone, store deeply personal reflections in unencrypted databases, and fail to intercept indirect expressions of crisis or despair safely.",
    why:
      "Constructed as a rigorous software and AI engineering project featuring an independent 5-layer crisis interception pipeline (intercepting crisis keywords in English, leetspeak, Hinglish, and Marathi), zero clinical medical claims, and empirical load benchmarks.",

    // Deployment & Status
    status: "LIVE",
    statusBadge: "Production Deployment",
    deploymentType: "live",
    liveUrl: "https://vedai-7v9t.onrender.com/",
    githubUrl: "https://github.com/Tushar8767/VedAI",

    // Mode prioritization
    priority: {
      software: 3,
      cybersecurity: 4,
    },

    // Verified metrics
    metrics: [
      { label: "Crisis Safety Layers", value: "5 Layers", detail: "Intercepts English, leetspeak, Hinglish, Marathi", linkTo: "#safety" },
      { label: "Curated Canonical Verses", value: "14 Verses", detail: "Ground truth corpus across 5 chapters", linkTo: "#retrieval" },
      { label: "Data Encryption", value: "AES-256-GCM", detail: "Authenticated encryption at rest for chats & notes", linkTo: "#encryption" },
      { label: "Gateway RPS", value: "424 RPS", detail: "Zero errors at 200 concurrency load test", linkTo: "#performance" },
    ],

    safetyLayers: [
      { layer: "1", type: "Direct Crisis Keywords", desc: "Immediate interception of acute self-harm language" },
      { layer: "2", type: "Adversarial & Leetspeak", desc: "Detects obfuscated variants (suecide, kll myslf, kms, unalive)" },
      { layer: "3", type: "Multilingual Dialects", desc: "Hinglish ('ab jeena nahi') & Marathi ('mala jagaycha nahiye')" },
      { layer: "4", type: "Indirect Despair Patterns", desc: "Burdensomeness signals ('want to disappear', 'burden to everyone')" },
      { layer: "5", type: "Benign Idiom Filter", desc: "Prevents false positives on idioms ('killing it', 'dead tired')" },
    ],

    techStack: ["React.js", "Node.js", "Express.js", "Python", "FastAPI", "PostgreSQL", "AES-256-GCM", "TF-IDF"],
    colorAccent: "blueflux",
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
