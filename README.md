# Engineering Control Room — Personal Portfolio

**Tushar Chaugule** · Computer Engineering (RSCOE Pune)  
Software Engineering × Cybersecurity × AI × Embedded/IoT  

A production-ready personal engineering lab, project showcase, and technical case-study system built to demonstrate systems thinking through verified architecture visualization, empirical evidence, technical decisions, and clean system design.

🔗 **Live Deployment:** [https://portfolio-website-okni.onrender.com](https://portfolio-website-okni.onrender.com)

---

## Flagship Systems Showcased

1. **[Rakshak](https://github.com/Tushar8767/Rakshak)**
   - *Domain:* Local-First Cybersecurity Control Plane
   - *Key Invariants:* 11-stage canonical security spine, 35 locked capabilities (26 read-only, 9 mutating), 30s TTL cryptographic confirmation tokens, SHA-256 hash-chained audit ledger, loopback API (`127.0.0.1:8765`), zero shell execution.
   - *Verified Evidence:* 1,387 regression tests passed (0 failures, 0 errors in 385.91s).
   - *Status:* Desktop Release Certified (P3.7).

2. **[Virtual IoT Security Laboratory](https://github.com/Tushar8767/Virtual-IoT-Security-Laboratory)**
   - *Domain:* IoT Security & SOC Simulation
   - *Architecture:* Proteus LPC2138 ARM7 microcontroller running C firmware + ADC + LM35 temperature sensor + UART0 bridge + FastAPI backend + React 19 SOC dashboard.
   - *Verified Evidence:* 117 / 117 automated tests passed (100% pass rate in 23.4s); 7 automated cyberattack scenarios (A through G).
   - *Live Deployment:* [virtual-iot-security-laboratory.onrender.com](https://virtual-iot-security-laboratory.onrender.com/)

3. **[KS Sentinel 2.0](https://github.com/Tushar8767/KS_Sentinel_2.0)**
   - *Domain:* Secure Workspace Virtual Operating Environment
   - *Architecture:* Three-Tier Decoupled Architecture (React 18 / Vite Web OS $\rightarrow$ Node.js / Express Secure Gateway $\rightarrow$ Windows Local Agent).
   - *Security Controls:* Canonical path validation, least privilege, zero arbitrary terminal execution.
   - *Live Deployment:* [ks-sentinel-server.onrender.com](https://ks-sentinel-server.onrender.com/)

4. **[VedAI](https://github.com/Tushar8767/VedAI)**
   - *Domain:* Multimodal AI Self-Reflection Assistant
   - *Architecture:* React frontend + Node.js/Express + Python FastAPI ML service + PostgreSQL. Weighted multimodal emotion fusion (60% NLP / 40% FER visual).
   - *Security & Safety:* 5-layer crisis safety interception (<10ms) routing to India 112, 14416 (Tele-MANAS), and US 988; authenticated AES-256-GCM encryption at rest; transient camera privacy.
   - *Live Deployment:* [vedai-7v9t.onrender.com](https://vedai-7v9t.onrender.com/)

---

## Architectural Highlights

- **Dual Perspective Switch**: Global toggle between **Software Engineer** and **Cybersecurity** perspectives, reordering project priorities and evidence metrics seamlessly with `localStorage` persistence.
- **Interactive Systems Engineering Graph**: 4-node architecture graph connecting Software, Security, AI, and Embedded/IoT disciplines around the engineer core with responsive mobile adaptation.
- **Verified Proof Dashboard**: Interactive metrics linking directly to physical repository reports and test suites.
- **"Where I Used It" Matrix**: Interactive skill-to-repository evidence matrix.
- **Command Palette (`Ctrl+K` / `⌘+K`)**: Keyboard-navigable fuzzy search across projects, case studies, sections, and mode toggles.
- **Secondary Engineering Terminal**: Collapsible CLI supporting `whoami`, `focus`, `projects --featured`, `mode`, and `proof`.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI & State**: React 19, Tailwind CSS, Framer Motion, Lucide React
- **Typography**: Inter, Space Grotesk, JetBrains Mono
- **Standards**: WCAG Accessible (`:focus-visible`), `prefers-reduced-motion` compliant

---

## Getting Started

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Lint
```bash
npm run build
npm run lint
```
