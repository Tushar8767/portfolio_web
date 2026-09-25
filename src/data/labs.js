// Security Labs & Practical Evidence
// These represent practical cybersecurity work beyond the flagship projects
// Content is structured; individual findings should be filled from actual lab reports

export const labCategories = [
  {
    id: "web-security",
    title: "Web Security",
    icon: "Globe",
    color: "secgreen",
    description: "Application security testing following OWASP methodology",
    items: [
      {
        id: "sqli-investigation",
        title: "SQL Injection — Detection & Exploitation",
        category: "Web Security",
        tools: ["Burp Suite", "SQLmap", "Browser DevTools"],
        methodology:
          "Identified SQL injection entry points through manual parameter fuzzing and automated scanning. Tested error-based, union-based, and blind injection techniques.",
        finding: "SQL injection vulnerability in login form parameter",
        impact: "Authentication bypass, potential database exfiltration",
        remediation: "Parameterised queries / prepared statements, WAF rule deployment",
        evidence: "Lab exercise — findings documented in security report",
      },
      {
        id: "auth-bypass",
        title: "Authentication & Session Security Analysis",
        category: "Web Security",
        tools: ["Burp Suite", "Browser DevTools", "OWASP ZAP"],
        methodology:
          "Analysed authentication mechanisms for weak session tokens, missing cookie flags, and insecure password handling patterns.",
        finding: "Weak session token entropy and missing Secure/HttpOnly cookie flags",
        impact: "Session hijacking risk",
        remediation: "Cryptographically secure session tokens, proper cookie attribute enforcement",
        evidence: "Lab exercise — findings documented in security report",
      },
      {
        id: "api-security",
        title: "API Security Assessment",
        category: "Web Security",
        tools: ["Burp Suite", "Postman", "curl"],
        methodology:
          "Tested REST API endpoints for missing authentication controls, insecure direct object reference (IDOR), and information disclosure.",
        finding: "Missing authorisation checks on object-level endpoints",
        impact: "Unauthorised data access across user boundaries",
        remediation: "Object-level access control validation on every request",
        evidence: "Lab exercise — findings documented in security report",
      },
      {
        id: "security-headers",
        title: "HTTP Security Headers Analysis",
        category: "Web Security",
        tools: ["Burp Suite", "curl", "securityheaders.com"],
        methodology:
          "Enumerated HTTP response headers for missing or misconfigured security headers including CSP, HSTS, X-Frame-Options, and Referrer-Policy.",
        finding: "Missing Content-Security-Policy and HSTS headers",
        impact: "XSS and downgrade attack exposure",
        remediation: "Implement strict CSP policy and HSTS with adequate max-age",
        evidence: "Lab exercise — findings documented in security report",
      },
    ],
  },
  {
    id: "network-security",
    title: "Network Security",
    icon: "Network",
    color: "cyanflux",
    description: "Network reconnaissance, traffic analysis, and protocol investigation",
    items: [
      {
        id: "nmap-recon",
        title: "Network Reconnaissance with Nmap",
        category: "Network Security",
        tools: ["Nmap", "Linux"],
        methodology:
          "Performed host discovery, port scanning, service version detection, and OS fingerprinting using Nmap scan profiles.",
        finding: "Open ports and service versions exposing unnecessary attack surface",
        impact: "Attack surface identification for further exploitation",
        remediation: "Port filtering, service minimisation, firewall rule tightening",
        evidence: "Lab exercise — scan results documented",
      },
      {
        id: "wireshark-pcap",
        title: "PCAP Traffic Analysis — Wireshark",
        category: "Network Security",
        tools: ["Wireshark", "tcpdump", "Linux"],
        methodology:
          "Captured and analysed network traffic using Wireshark. Applied display filters to isolate protocols, extract credentials from cleartext sessions, and identify suspicious traffic patterns.",
        finding: "Cleartext credential transmission over HTTP/FTP",
        impact: "Credential interception risk on unencrypted protocols",
        remediation: "HTTPS enforcement, FTP replaced with SFTP, TLS for all sensitive data",
        evidence: "Lab exercise — PCAP analysis documented",
      },
      {
        id: "dns-analysis",
        title: "DNS Enumeration & Analysis",
        category: "Network Security",
        tools: ["nslookup", "dig", "dnsenum", "Linux"],
        methodology:
          "Performed DNS enumeration including record enumeration (A, MX, NS, TXT), zone transfer attempts, and subdomain discovery.",
        finding: "Exposed DNS records revealing internal infrastructure details",
        impact: "Information disclosure enabling targeted reconnaissance",
        remediation: "Restrict DNS zone transfers, minimise public DNS record exposure",
        evidence: "Lab exercise — DNS records documented",
      },
    ],
  },
  {
    id: "reconnaissance",
    title: "Reconnaissance & OSINT",
    icon: "Search",
    color: "violetflux",
    description: "Information gathering, footprinting, and attack surface mapping",
    items: [
      {
        id: "web-footprinting",
        title: "Web Application Footprinting",
        category: "Reconnaissance",
        tools: ["Burp Suite", "curl", "whatweb", "Browser DevTools"],
        methodology:
          "Performed passive and active reconnaissance on target web applications including technology fingerprinting, directory enumeration, and information disclosure identification.",
        finding: "Technology stack disclosure via response headers and error pages",
        impact: "Attacker gains targeted technology-specific exploitation knowledge",
        remediation: "Remove server/technology banners from HTTP responses, custom error pages",
        evidence: "Lab exercise — reconnaissance report documented",
      },
      {
        id: "tls-analysis",
        title: "TLS / SSL Configuration Analysis",
        category: "Reconnaissance",
        tools: ["sslyze", "testssl.sh", "curl", "OpenSSL"],
        methodology:
          "Analysed TLS configuration for weak cipher suites, protocol downgrade vulnerabilities, certificate validity, and HSTS implementation.",
        finding: "Weak cipher suite support and missing HSTS header",
        impact: "Downgrade attack and MITM interception risk",
        remediation: "Enforce TLS 1.2+, disable weak ciphers, implement HSTS with preloading",
        evidence: "Lab exercise — TLS analysis documented",
      },
    ],
  },
  {
    id: "soc-investigation",
    title: "SOC & Log Investigation",
    icon: "Search",
    color: "plasma",
    description: "Security log analysis, IOC identification, and incident investigation",
    items: [
      {
        id: "auth-log-analysis",
        title: "Authentication Log Analysis — Brute Force Detection",
        category: "SOC / Investigation",
        tools: ["Linux", "grep", "awk", "Python", "Rakshak"],
        methodology:
          "Analysed authentication logs to identify repeated failed login attempts, unusual access times, and geographic anomalies indicative of brute force or credential stuffing.",
        finding: "Repeated failed login events from single source IP within short timeframe",
        impact: "Brute force attack pattern consistent with credential stuffing",
        remediation: "Account lockout policy, rate limiting, geo-based access alerts",
        evidence: "Rakshak platform output — investigation timeline documented",
      },
      {
        id: "ioc-extraction",
        title: "IOC Extraction & Threat Hunting",
        category: "SOC / Investigation",
        tools: ["Python", "Linux", "Rakshak", "regex"],
        methodology:
          "Extracted indicators of compromise from raw log data including suspicious IP addresses, abnormal user agents, payload patterns, and anomalous access sequences.",
        finding: "Multiple IOC types extracted and correlated across log sources",
        impact: "Positive IOC identification enabling targeted threat hunting",
        remediation: "IOC blocking at perimeter, security monitoring rule updates",
        evidence: "Rakshak platform output — IOC report generated",
      },
      {
        id: "timeline-reconstruction",
        title: "Attack Timeline Reconstruction",
        category: "SOC / Investigation",
        tools: ["Python", "Linux", "Rakshak"],
        methodology:
          "Correlated events across multiple log sources to reconstruct a chronological attack timeline — from initial access through lateral movement to potential exfiltration.",
        finding: "Reconstructed multi-stage attack sequence from log correlation",
        impact: "Attack chain visibility enabling targeted containment",
        remediation: "Incident response activation, affected systems isolation",
        evidence: "Rakshak platform output — timeline report generated",
      },
    ],
  },
];

