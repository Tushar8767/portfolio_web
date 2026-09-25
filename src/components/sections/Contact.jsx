"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send, Check, AlertCircle } from "lucide-react";
import { socialLinks } from "@/data/navigation";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/Tushar8767",
    href: socialLinks.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "tushar-chaugule",
    href: socialLinks.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: null,
    icon: MapPin,
    external: false,
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xnpqegro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-control-border bg-control-surface">
      <div className="section-shell">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyanflux">
              <Mail className="h-4 w-4" />
              <span>DIRECT CHANNELS // COLLABORATION & RECRUITING</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-control-text">
              LET&apos;S CONNECT
            </h2>
          </div>
          <p className="font-mono text-xs text-control-textSubtle max-w-md">
            Open to software engineering, cybersecurity, security engineering roles, and technical collaborations.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Direct Channels */}
          <div className="rounded-xl border border-control-border bg-control-bg p-6 sm:p-7 shadow-panel space-y-4">
            <h3 className="font-display text-lg font-bold text-control-text">Direct Contact Nodes</h3>
            <p className="font-sans text-xs text-control-textMuted leading-relaxed">
              Preferred for recruiters, engineering managers, and collaborators.
            </p>

            <div className="grid gap-3 pt-2">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const content = (
                  <div className="flex items-center gap-3.5 rounded-lg border border-control-border bg-control-surface p-3.5 hover:border-control-borderHighlight transition">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-control-border bg-control-bg text-cyanflux">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[0.65rem] text-control-textSubtle uppercase tracking-wider">{link.label}</p>
                      <p className="font-mono text-xs font-medium text-control-text">{link.value}</p>
                    </div>
                  </div>
                );

                if (link.href) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      aria-label={`${link.label}: ${link.value}`}
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={link.label}>{content}</div>;
              })}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-control-border bg-control-bg p-6 sm:p-7 shadow-panel">
            <h3 className="font-display text-lg font-bold text-control-text mb-4">Send Message</h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-secgreen/40 bg-secgreen/10 text-secgreen">
                  <Check className="h-6 w-6" />
                </div>
                <p className="font-display text-base font-bold text-control-text">Message Delivered</p>
                <p className="font-sans text-xs text-control-textMuted">
                  Thank you for reaching out. I will respond to your inquiry promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="font-mono text-xs text-cyanflux hover:underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-1">
                    <span className="text-control-textSubtle text-[0.68rem] uppercase">Name *</span>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-control-border bg-control-surface px-3 py-2 text-xs text-control-text placeholder:text-control-textSubtle focus:border-cyanflux focus:outline-none"
                    />
                  </label>

                  <label className="block space-y-1">
                    <span className="text-control-textSubtle text-[0.68rem] uppercase">Email *</span>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-control-border bg-control-surface px-3 py-2 text-xs text-control-text placeholder:text-control-textSubtle focus:border-cyanflux focus:outline-none"
                    />
                  </label>
                </div>

                <label className="block space-y-1">
                  <span className="text-control-textSubtle text-[0.68rem] uppercase">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Engineering Role / Project Opportunity"
                    className="w-full rounded-lg border border-control-border bg-control-surface px-3 py-2 text-xs text-control-text placeholder:text-control-textSubtle focus:border-cyanflux focus:outline-none"
                  />
                </label>

                <label className="block space-y-1">
                  <span className="text-control-textSubtle text-[0.68rem] uppercase">Message *</span>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Your message..."
                    className="w-full rounded-lg border border-control-border bg-control-surface px-3 py-2 text-xs text-control-text placeholder:text-control-textSubtle focus:border-cyanflux focus:outline-none resize-none"
                  />
                </label>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded border border-crimsonalert/30 bg-crimsonalert/10 p-2.5 text-crimsonalert font-sans text-xs">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>Failed to transmit. Please email directly at {socialLinks.email}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 rounded-lg border border-cyanflux/50 bg-cyanflux/15 py-2.5 font-mono text-xs font-semibold text-cyanflux hover:bg-cyanflux/25 transition disabled:opacity-50"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{status === "sending" ? "Transmitting..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
