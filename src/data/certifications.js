// Verified certifications, leadership, and academic degree information
export const certifications = [
  {
    id: "nptel-ethical-hacking",
    title: "Ethical Hacking",
    issuer: "NPTEL (IIT Kharagpur)",
    status: "Completed",
    statusBadge: "COMPLETED",
    type: "Certification",
    description:
      "Comprehensive certification covering penetration testing methodologies, vulnerability assessment, network scanning, exploitation vectors, and responsible disclosure.",
    topics: ["Penetration Testing", "Vulnerability Assessment", "Network Exploitation", "Ethical Hacking"],
    accent: "secgreen",
    icon: "ShieldCheck",
  },
  {
    id: "nptel-network-security",
    title: "Network Security",
    issuer: "NPTEL (IIT)",
    status: "Completed",
    statusBadge: "COMPLETED",
    type: "Certification",
    description:
      "Advanced coursework covering cryptographic algorithms (RSA, AES, SHA), network attack patterns, firewalls, IDS/IPS, TLS handshakes, and secure protocol design.",
    topics: ["Applied Cryptography", "TLS/SSL Protocols", "Firewalls & IDS", "Secure Architecture"],
    accent: "secgreen",
    icon: "Network",
  },
  {
    id: "aws-workshop",
    title: "AWS Hands-on Workshop",
    issuer: "Amazon Web Services",
    status: "Completed",
    statusBadge: "COMPLETED",
    type: "Workshop Credential",
    description:
      "Practical cloud engineering workshop focused on AWS infrastructure, VPC subnetting, security groups, IAM principle of least privilege, and EC2 deployment architectures.",
    topics: ["AWS Core Services", "VPC & Subnets", "IAM Security", "Cloud Infrastructure"],
    accent: "secgreen",
    icon: "Cloud",
  },
  {
    id: "ceh-training",
    title: "CEH Practical Training",
    issuer: "EC-Council Curriculum",
    status: "Training / In Progress",
    statusBadge: "IN TRAINING",
    type: "Practical Training",
    description:
      "Intensive lab-based training covering reconnaissance, vulnerability scanning, system exploitation, privilege escalation, web application attacks, and perimeter auditing.",
    topics: ["Reconnaissance", "Privilege Escalation", "Web App Pentesting", "Buffer Overflow Basics"],
    accent: "amberwarn",
    icon: "Terminal",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Planned",
    statusBadge: "PLANNED",
    type: "Target Certification",
    description:
      "Scheduled cloud certification covering cloud computing concepts, AWS security and compliance, shared responsibility models, and billing & pricing structures.",
    topics: ["Cloud Security Model", "AWS Architecture", "Compliance", "Identity Management"],
    accent: "cyanflux",
    icon: "Award",
  },
];

export const education = [
  {
    id: "btech-ce",
    degree: "B.Tech — Computer Engineering",
    minor: "Minor Degree in Embedded Systems (ENTC Department)",
    institution: "JSPM's Rajarshi Shahu College of Engineering (RSCOE)",
    location: "Pune, India",
    period: "2023 — 2027",
    cgpa: "8.65 / 10",
    honors: "Dean's List",
    leadership: {
      role: "Tech Team Lead",
      organization: "RSCOE Mathematics Club",
      period: "Sep 2024 – Oct 2025",
      impact: "Organized technical events, algorithm sessions, and digital coordination for university mathematics community.",
    },
    highlights: [
      "Minor Degree in Embedded Systems (ENTC Department): Hardware microcontroller design, ARM7TDMI architecture, ADC, embedded C, and UART serial communication protocols",
      "Leadership: Tech Team Lead, RSCOE Mathematics Club (Sep 2024 – Oct 2025)",
      "Core curriculum: Data Structures & Algorithms (C++), Operating Systems, Computer Networks, Database Management Systems, Linux Administration",
      "Active research projects: Rakshak, Virtual IoT Security Laboratory, KS Sentinel 2.0, VedAI",
    ],
  },
];
