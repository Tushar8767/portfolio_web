"use client";

import { motion } from "framer-motion";
import { Code2, Shield, Cpu, FlaskConical } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const pillars = [
  {
    icon: Shield,
    color: "secgreen",
    borderColor: "border-secgreen/25",
    bgColor: "bg-secgreen/8",
    iconColor: "text-secgreen",
    title: "Security First",
    body: "Cybersecurity is my primary specialisation. I approach software and systems thinking through a security lens — understanding attack surfaces, threat models, and defensive engineering.",
  },
  {
    icon: Code2,
    color: "cyanflux",
    borderColor: "border-cyanflux/25",
    bgColor: "bg-cyanflux/8",
    iconColor: "text-cyanflux",
    title: "Engineering Depth",
    body: "I build practical software — backends, REST APIs, databases, and frontends — not just as standalone exercises, but as systems that need to be secure, maintainable, and evidence-backed.",
  },
  {
    icon: FlaskConical,
    color: "violetflux",
    borderColor: "border-violetflux/25",
    bgColor: "bg-violetflux/8",
    iconColor: "text-violetflux",
    title: "Learn by Building",
    body: "I develop skills through experimentation, security labs, investigation, automation, and documentation. Every project on this portfolio represents actual built work — not coursework theory.",
  },
];

const approachItems = [
  "Security labs and VAPT exercises",
  "Building full-stack systems",
  "Log analysis and SOC investigation",
  "Security automation with Python",
  "AI/ML application development",
  "Technical documentation and reporting",
];

export default function About() {
  return (
    <section id="about" className="py-24" aria-labelledby="about-heading">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Security-focused engineering with practical breadth"
          id="about-heading"
        >
          Computer Engineering student at JSPM&apos;s RSCE, Pune — focused on cybersecurity, with
          working exposure to software engineering, AI/ML, Linux, and networking.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                className="glass-panel glow-border rounded-2xl p-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl border ${pillar.borderColor} ${pillar.bgColor} ${pillar.iconColor}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{pillar.body}</p>
              </motion.article>
            );
          })}
        </div>

        {/* How I learn */}
        <motion.div
          className="mt-8 glass-panel rounded-2xl p-6 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="terminal-label mb-3">How I develop skills</p>
              <p className="text-sm leading-7 text-slate-400 max-w-2xl">
                I don&apos;t learn from textbooks alone. I learn by doing — running security labs,
                building full systems end-to-end, writing automation tools, investigating log data,
                and documenting findings with the same rigour I&apos;d apply in a professional
                security team.
              </p>
            </div>
            <div className="grid gap-2 min-w-[240px]">
              {approachItems.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-secgreen shrink-0" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

