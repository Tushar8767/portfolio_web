// Verified skills taxonomy supported by actual projects and codebase evidence

export const softwareSkillTags = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "React",
  "React 19",
  "Vite",
  "Node.js",
  "Express.js",
  "FastAPI",
  "REST APIs",
  "WebSocket",
  "Pydantic",
  "MongoDB",
  "MySQL",
  "SQLite",
  "NLP",
  "RAG",
  "TF-IDF",
  "Multimodal AI",
  "Embedded Systems",
  "IoT",
  "System Telemetry",
  "Git",
  "GitHub",
  "Linux",
  "Postman",
  "Pytest",
  "Proteus",
  "DSA",
  "OOP",
  "DBMS",
  "OS",
  "Computer Networks",
];

export const cybersecuritySkillTags = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Bash",
  "VAPT",
  "Vulnerability Assessment",
  "OWASP Top 10",
  "Web Security",
  "API Security",
  "CVSS",
  "CWE",
  "Computer Networks",
  "DNS",
  "HTTP",
  "TLS",
  "Network Traffic Analysis",
  "Security Headers",
  "OSINT",
  "Security Monitoring",
  "Threat Detection",
  "Authentication",
  "RBAC",
  "Rate Limiting",
  "Forensics",
  "Audit Logging",
  "Security Architecture",
  "Security Testing",
  "IoT Security",
  "Device Authentication",
  "Capability Controls",
  "Embedded Systems",
  "ARM7TDMI Simulation",
  "UART",
  "Burp Suite",
  "Nmap",
  "Gobuster",
  "Wireshark",
  "Maltego",
  "Linux",
  "FastAPI",
  "React",
  "Tauri",
  "Node.js",
  "Express.js",
  "REST APIs",
  "WebSocket",
  "Git",
  "GitHub",
  "Pytest",
  "Proteus",
];

export const skillCategories = [
  {
    id: "software",
    title: "Software Engineering & Systems",
    code: "SE-01",
    description: "Full-stack architecture, asynchronous APIs, component state windowing, and production telemetry",
    icon: "Code2",
    accent: "blueflux",
    skills: [
      { name: "Python", verifiedIn: ["Rakshak", "Virtual IoT Security Laboratory", "VedAI"] },
      { name: "TypeScript / JavaScript", verifiedIn: ["KS Sentinel 2.0", "Virtual IoT Security Laboratory", "VedAI", "Rakshak GUI"] },
      { name: "React / React 19", verifiedIn: ["KS Sentinel 2.0", "Virtual IoT Security Laboratory", "VedAI", "Rakshak Console"] },
      { name: "FastAPI & Pydantic", verifiedIn: ["Rakshak", "Virtual IoT Security Laboratory", "VedAI"] },
      { name: "Node.js & Express.js", verifiedIn: ["KS Sentinel 2.0", "VedAI"] },
      { name: "REST APIs & WebSocket", verifiedIn: ["KS Sentinel 2.0", "Virtual IoT Security Laboratory", "Rakshak"] },
      { name: "SQL, MongoDB & SQLite", verifiedIn: ["KS Sentinel 2.0", "Virtual IoT Security Laboratory", "VedAI"] },
      { name: "Git, GitHub & Linux", verifiedIn: ["All Projects"] },
    ],
  },
  {
    id: "security",
    title: "Cybersecurity & Security Engineering",
    code: "SEC-02",
    description: "Deterministic authorization, threat detection, tamper-evident audit ledgers, and vulnerability mitigation",
    icon: "ShieldCheck",
    accent: "secgreen",
    skills: [
      { name: "Security Architecture", verifiedIn: ["Rakshak", "KS Sentinel 2.0", "Virtual IoT Security Laboratory"] },
      { name: "Threat Detection Engines", verifiedIn: ["Virtual IoT Security Laboratory", "Rakshak"] },
      { name: "SHA-256 Hash Chaining", verifiedIn: ["Rakshak", "Virtual IoT Security Laboratory"] },
      { name: "VAPT & OWASP Top 10", verifiedIn: ["CryptonoicArea Internship", "NPTEL Ethical Hacking"] },
      { name: "Capability-Based RBAC", verifiedIn: ["Rakshak", "KS Sentinel 2.0", "Virtual IoT Security Laboratory"] },
      { name: "API Security & Rate Limiting", verifiedIn: ["KS Sentinel 2.0", "Virtual IoT Security Laboratory", "VedAI"] },
      { name: "Forensics & Audit Logging", verifiedIn: ["Rakshak", "Virtual IoT Security Laboratory"] },
      { name: "Incident Response & SOAR", verifiedIn: ["Virtual IoT Security Laboratory", "Rakshak"] },
    ],
  },
  {
    id: "ai",
    title: "Applied AI & Data Systems",
    code: "AI-03",
    description: "Multimodal fusion, text retrieval, safety filtering, and deterministic model guardrails",
    icon: "BrainCircuit",
    accent: "cyanflux",
    skills: [
      { name: "NLP & TF-IDF Retrieval", verifiedIn: ["VedAI"] },
      { name: "Facial Emotion Recognition (FER)", verifiedIn: ["VedAI"] },
      { name: "Weighted Multimodal Fusion", verifiedIn: ["VedAI"] },
      { name: "5-Layer Crisis Interception", verifiedIn: ["VedAI"] },
      { name: "Context Continuity & RAG", verifiedIn: ["VedAI"] },
      { name: "Untrusted AI Boundary Defense", verifiedIn: ["Rakshak", "KS Sentinel 2.0"] },
    ],
  },
  {
    id: "embedded",
    title: "Embedded Systems & IoT Security",
    code: "IOT-04",
    description: "Compiled C firmware, ARM7 microcontroller simulation, ADC telemetry, and UART hardware bridges",
    icon: "Cpu",
    accent: "amberwarn",
    skills: [
      { name: "C (Firmware Engineering)", verifiedIn: ["Virtual IoT Security Laboratory (simulation/firmware/main.c)"] },
      { name: "ARM7TDMI (Philips LPC2138)", verifiedIn: ["Virtual IoT Security Laboratory"] },
      { name: "UART Serial Communication", verifiedIn: ["Virtual IoT Security Laboratory (UART0 9600 Baud Bridge)"] },
      { name: "Proteus ISIS Circuit Simulation", verifiedIn: ["Virtual IoT Security Laboratory"] },
      { name: "ADC Sensor Acquisition (LM35)", verifiedIn: ["Virtual IoT Security Laboratory"] },
      { name: "Device Fleet Lifecycle & Quarantine", verifiedIn: ["Virtual IoT Security Laboratory"] },
    ],
  },
];

export const getSkillCategories = (mode) => {
  if (mode === "cybersecurity") {
    // Prioritize Cybersecurity & Embedded IoT
    return [
      skillCategories[1], // security
      skillCategories[3], // embedded & IoT
      skillCategories[0], // software
      skillCategories[2], // AI
    ];
  }
  // Software Engineer mode: prioritize Software & AI
  return [
    skillCategories[0], // software
    skillCategories[2], // AI
    skillCategories[1], // security
    skillCategories[3], // embedded & IoT
  ];
};
