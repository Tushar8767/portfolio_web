// Centralized verified project data model for Engineering Control Room
// Contains zero fabricated metrics — all stats verified against physical repositories

export const projects = [
  {
    id: "ks-sentinel",
    slug: "ks-sentinel",
    title: "KS Sentinel 2.0",
    domain: "Software Systems · Secure Workspace OS",
    domainShort: "Software Systems",
    tagline: "Three-Tier Secure Workspace OS & Controlled Remote Capability Broker",
    problemStatement:
      "Allowing remote web environments to access host workstation resources risks arbitrary command execution, path traversal escapes, and uncontrolled process spawning.",
    summary:
      "KS Sentinel 2.0 is a web-based Virtual Operating Environment designed to provide secure, controlled remote access to authorized local-machine resources, system state, AI services, and cybersecurity capabilities across strict network and process boundaries.",
    
    // Priorities based on perspective mode
    softwarePriority: 1,
    cybersecurityPriority: 3,

    softwareHighlights: [
      "Modular Virtual Desktop Web OS built with React 18, Vite, and component-level windowing state",
      "Decoupled Node.js / Express Secure Gateway mediating API routes, JWT tokens, and rate limits",
      "Real-time WebSocket telemetry channels streaming host resource metrics and agent heartbeats",
      "Rigorous 28-module roadmap governance (Modules 0 through 27) with sequential modular locking",
    ],

    cybersecurityHighlights: [
      "Strict three-tier network and process separation between browser client and local Windows host",
      "Canonical absolute path validation preventing directory traversal escapes (../ or ..\\)",
      "Capability-based local operations: pre-authorized action endpoints rather than arbitrary shell execution",
      "Agent lifecycle monitoring with automatic session termination upon heartbeat interruption",
    ],

    // Deployment & Status
    status: "LIVE",
    statusBadge: "Production Deployment",
    deploymentType: "live",
    liveUrl: "https://ks-sentinel-server.onrender.com/",
    activeInstanceUrl: "https://ks-sentinel-2-0.onrender.com/",
    githubUrl: "https://github.com/Tushar8767/KS_Sentinel_2.0",

    // Verified metrics
    metrics: [
      { label: "Architecture Model", value: "3-Tier", detail: "Web OS -> Gateway -> Windows Local Agent" },
      { label: "Roadmap Modules", value: "28 Modules", detail: "Locked 0-27 sequential module roadmap" },
      { label: "Filesystem Boundary", value: "Confined", detail: "Canonical path validation; zero escapes" },
      { label: "Execution Model", value: "Capability Broker", detail: "Zero raw shell execution APIs" },
    ],

    architectureTiers: [
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
    problemStatement:
      "Cybersecurity testing on physical IoT hardware is expensive, difficult to automate at scale, and risks device destruction during aggressive attack simulations.",
    summary:
      "A reproducible IoT cybersecurity testbed pairing a simulated ARM7 hardware microcontroller (Philips/NXP LPC2138) in Proteus ISIS with a virtual device fleet, an enterprise FastAPI security backend, an automated threat detection engine, a tamper-evident SHA-256 hash-chained audit ledger, and a React 19 SOC dashboard.",
    
    // Priorities
    softwarePriority: 2,
    cybersecurityPriority: 2,

    softwareHighlights: [
      "Hardware-in-the-loop electronic simulation pairing Proteus LPC2138 with Python UART serial bridge",
      "Asynchronous FastAPI defense core supporting high-throughput telemetry ingestion and WebSocket broadcasts",
      "Virtual device fleet modeling 4 distinct devices with deterministic asynchronous lifecycle states",
      "Full-stack React 19 SOC console with dynamic sensor gauges, radar motion circles, and triage queues",
    ],

    cybersecurityHighlights: [
      "6 deterministic threat detection algorithms evaluating sensor boundaries, brute force, and impersonation",
      "Automated Security Orchestration & Automated Response (SOAR) transitioning compromised devices to SUSPENDED",
      "Tamper-evident SHA-256 hash-chained audit ledger with 1-click historical integrity verification",
      "7 MITRE ATT&CK-aligned automated cyberattack simulations (Scenarios A through G)",
    ],

    // Deployment & Status
    status: "LIVE",
    statusBadge: "Production Deployment",
    deploymentType: "live",
    liveUrl: "https://virtual-iot-security-laboratory.onrender.com/",
    githubUrl: "https://github.com/Tushar8767/Virtual-IoT-Security-Laboratory",

    // Verified metrics
    metrics: [
      { label: "Automated Tests", value: "117 / 117", detail: "100% pass rate in pytest suite" },
      { label: "Attack Scenarios", value: "7 Scenarios", detail: "Scenarios A through G (MITRE ATT&CK)" },
      { label: "Detection Rules", value: "6 Rules", detail: "Deterministic threshold & pattern engines" },
      { label: "Hardware Core", value: "LPC2138", detail: "ARM7TDMI 60 MHz with C firmware & ADC" },
    ],

    virtualDevices: [
      { id: "LPC2138-TEMP-001", name: "Proteus ARM7 Hardware Node", type: "Temperature (ADC + LM35)", protocol: "UART0 9600 Baud" },
      { id: "PY-TEMP-001", name: "Virtual Ambient Temp Sensor", type: "Temperature (20°C–26°C)", protocol: "HTTP / MQTT" },
      { id: "PY-MOTION-001", name: "Virtual PIR Motion Sensor", type: "Occupancy & Lux Telemetry", protocol: "HTTP / MQTT" },
      { id: "PY-ACTUATOR-001", name: "Smart HVAC Actuator", type: "State & Power Consumption", protocol: "HTTP / MQTT" },
    ],

    detectionRules: [
      { rule: "VALUE_OUT_OF_BOUNDS", desc: "Triggers when telemetry metrics exceed physical safety limits (Temp > 45°C or < 0°C)" },
      { rule: "AUTH_BRUTE_FORCE", desc: "Sliding-window counter tracking failed HMAC authentications (>= 5 failures within 60s)" },
      { rule: "RATE_LIMIT_EXCEEDED", desc: "Token-bucket rate limiter triggers if ingestion frequency exceeds 10 messages/sec" },
      { rule: "DEVICE_INACTIVE", desc: "Deadman timeout triggers if heartbeat is absent > 2 * heartbeat_interval + 15s" },
      { rule: "CAPABILITY_MISMATCH", desc: "Intercepts actuator control requests lacking RECEIVE_COMMANDS capability" },
      { rule: "DEVICE_IMPERSONATION", desc: "Identifies HMAC signature mismatches where an unauthorized actor uses a valid device ID" },
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
    problemStatement:
      "Conversational self-reflection tools suffer from LLM hallucinations, lack emotional nuance from text alone, store personal logs unencrypted, and fail to intercept indirect crisis expressions safely.",
    summary:
      "A full-stack multimodal AI self-reflection platform combining natural language processing, facial emotion recognition, weighted emotion fusion (60% NLP / 40% FER), TF-IDF cosine similarity retrieval over curated canonical scripture verses, and authenticated AES-256-GCM encryption at rest.",

    // Priorities
    softwarePriority: 3,
    cybersecurityPriority: 4,

    softwareHighlights: [
      "Decoupled microservice architecture: React frontend, Node/Express server, and Python FastAPI ML service",
      "Weighted multimodal emotion fusion combining text sentiment polarity with facial micro-expression landmarks",
      "Lightweight TF-IDF and Cosine Similarity retrieval over 14 canonical verses with sub-15ms latency",
      "Empirically benchmarked load capacity: 424 RPS on gateway health, 388 RPS on multimodal fusion at zero errors",
    ],

    cybersecurityHighlights: [
      "Authenticated application-level encryption at rest: AES-256-GCM for journal reflections and chat history",
      "5-layer crisis safety interception (<10ms) covering English, leetspeak, Hinglish, Marathi, and indirect despair",
      "PBKDF2 password hashing with 120,000 iterations and per-user cryptographic salts against credential attacks",
      "Strict transient camera privacy: frames transmitted transiently to RAM only and never persisted to disk",
    ],

    // Deployment & Status
    status: "LIVE",
    statusBadge: "Production Deployment",
    deploymentType: "live",
    liveUrl: "https://vedai-7v9t.onrender.com/",
    githubUrl: "https://github.com/Tushar8767/VedAI",

    // Verified metrics
    metrics: [
      { label: "Crisis Safety Layers", value: "5 Layers", detail: "Intercepts English, leetspeak, Hinglish, Marathi" },
      { label: "Curated Canonical Verses", value: "14 Verses", detail: "Ground truth corpus across 5 chapters" },
      { label: "Data Encryption", value: "AES-256-GCM", detail: "Authenticated encryption at rest for chats & notes" },
      { label: "Gateway RPS", value: "424 RPS", detail: "Zero errors at 200 concurrency load test" },
    ],

    techStack: ["React.js", "Node.js", "Express.js", "Python", "FastAPI", "PostgreSQL", "AES-256-GCM", "TF-IDF"],
    colorAccent: "blueflux",
  },
  {
    id: "rakshak",
    slug: "rakshak",
    title: "Rakshak",
    domain: "Cybersecurity · Local-First Control Plane",
    domainShort: "Cybersecurity",
    tagline: "Local-First Cybersecurity Control Plane & Operator Security Console",
    problemStatement:
      "Host workstations lack non-bypassable boundaries between user interfaces, automated scripts, and system operations, allowing accidental or malicious privilege escalation without cryptographic accountability.",
    summary:
      "Rakshak is an offline-first, defense-in-depth cybersecurity control platform and operator security console. It enforces deterministic, policy-governed system control, real-time security observation, and tamper-evident SHA-256 hash-chained audit logging with a non-bypassable 11-stage security spine.",
    
    // Priorities
    softwarePriority: 4,
    cybersecurityPriority: 1,

    softwareHighlights: [
      "Offline-first system architecture with clean lifecycle states (CREATED, STARTING, RUNNING, STOPPING, STOPPED)",
      "Strict loopback FastAPI backend (127.0.0.1:8765) with Pydantic v2 schemas and OpenAPI contracts",
      "Desktop operator console built with Tauri v2 + React 19 + TypeScript with strict Content Security Policy",
      "Independent CLI recovery system (python -m rakshak.main) functioning out-of-band without GUI dependencies",
    ],

    cybersecurityHighlights: [
      "11-stage canonical security spine: no operation executes without identity, authority, policy, and confirmation",
      "Locked inventory of exactly 35 registered capabilities: 26 read-only, 9 mutating requiring operator confirmation",
      "Mandatory two-step cryptographic challenge: 30-second TTL confirmation token cryptographically bound to target",
      "SHA-256 hash-chained audit logging: append-only JSONL with cryptographic break detection across 3,500+ events",
    ],

    // Deployment & Status
    status: "CASE STUDY",
    statusBadge: "Desktop Release Certified",
    deploymentType: "case-study",
    liveUrl: null, // Strictly offline-first desktop platform; no fake live demo
    githubUrl: "https://github.com/Tushar8767/Rakshak",

    // Verified metrics
    metrics: [
      { label: "Regression Tests", value: "1,387", detail: "0 failed, 0 errors in pytest suite" },
      { label: "Locked Capabilities", value: "35 Caps", detail: "26 Read-Only, 9 Mutating" },
      { label: "Security Spine Stages", value: "11 Stages", detail: "Strict non-bypassable execution pipeline" },
      { label: "Confirmation Token TTL", value: "30s", detail: "Single-use cryptographic challenge token" },
    ],

    capabilityModel: {
      mutating: [
        { name: "file.write", category: "Filesystem", desc: "Write or update file within canonical boundaries" },
        { name: "file.delete", category: "Filesystem", desc: "Secure deletion of file within authorized paths" },
        { name: "process.kill", category: "Process", desc: "Bounded termination of target PID with self-protection" },
        { name: "service.start", category: "Services", desc: "Start registered system or Windows background service" },
        { name: "service.stop", category: "Services", desc: "Stop registered system or Windows background service" },
        { name: "service.restart", category: "Services", desc: "Restart active background service process" },
        { name: "network.interface.toggle", category: "Network", desc: "Enable or disable network adapter interface" },
        { name: "security.firewall.block", category: "Security", desc: "Append defensive firewall block rule for malicious IP" },
        { name: "audit.clear_test_records", category: "Audit", desc: "Maintenance token to purge ephemeral test records" },
      ],
      readonly: [
        "system.info", "system.status", "file.list", "file.inspect", "file.read",
        "process.list", "process.inspect", "service.list", "service.inspect",
        "network.interfaces", "network.interface.inspect", "network.routes", "network.dns", "network.hostname",
        "security.monitor.summary", "security.monitor.processes", "security.monitor.services", "security.monitor.startup",
        "security.monitor.accounts", "security.risk.summary", "security.risk.assess", "audit.query", "audit.summary",
        "audit.correlate", "audit.verify", "forensic.summary",
      ],
    },

    techStack: ["Python 3.11+", "FastAPI", "Tauri v2", "React 19", "TypeScript", "psutil", "SHA-256", "Pytest"],
    colorAccent: "secgreen",
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
