"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  LockKeyhole,
  Mail,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  Workflow,
  Zap
} from "lucide-react";

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    accent: "cyan",
    skills: ["React.js", "HTML", "CSS", "Tailwind", "Vite"]
  },
  {
    title: "Backend",
    icon: TerminalSquare,
    accent: "violet",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"]
  },
  {
    title: "Languages",
    icon: BrainCircuit,
    accent: "green",
    skills: ["Python", "JavaScript", "C++"]
  },
  {
    title: "Databases",
    icon: Database,
    accent: "cyan",
    skills: ["MongoDB", "MySQL", "SQLite"]
  },
  {
    title: "Tools",
    icon: Workflow,
    accent: "violet",
    skills: ["Git", "GitHub", "Linux", "VS Code"]
  }
];

const projects = [
  {
    title: "KS Sentinel",
    category: "Browser OS Workspace",
    icon: ShieldCheck,
    summary:
      "A browser-based workspace environment with draggable, resizable app windows and persistent state management.",
    bullets: [
      "Desktop-inspired window system with modular architecture",
      "Persistent workspace state for a familiar operating-system flow",
      "Scalable MERN foundation for future productivity modules"
    ],
    stack: ["MERN", "React", "Node.js", "MongoDB", "Vite"]
  },
  {
    title: "AI Workspace",
    category: "AI Productivity System",
    icon: BrainCircuit,
    summary:
      "An AI-powered productivity workspace focused on secure APIs, authenticated sessions, and persistent conversations.",
    bullets: [
      "JWT authentication and protected backend routes",
      "Persistent conversation management for AI-assisted workflows",
      "Clean React experience connected to Express and MongoDB"
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"]
  },
  {
    title: "Attendance Management System",
    category: "Automation Tooling",
    icon: GraduationCap,
    summary:
      "A practical attendance platform spanning GUI and console workflows with automation for CSV records and alerts.",
    bullets: [
      "CSV automation for reliable attendance record handling",
      "WhatsApp notification automation for faster communication",
      "Multi-session tracking across Python, C++, and Tkinter flows"
    ],
    stack: ["Python", "C++", "Tkinter", "CSV"]
  }
];

const achievements = [
  {
    title: "Hackathon Builder",
    detail: "Rapidly prototypes project ideas with practical engineering tradeoffs.",
    icon: Trophy
  },
  {
    title: "Ethical Hacking Certified",
    detail: "Builds with awareness of secure systems, threat models, and responsible testing.",
    icon: LockKeyhole
  },
  {
    title: "AWS Workshop",
    detail: "Explores cloud infrastructure patterns for deployable and scalable systems.",
    icon: Globe2
  },
  {
    title: "Active Project Portfolio",
    detail: "Ships full-stack, AI, automation, and workspace-oriented applications.",
    icon: Rocket
  }
];

const stats = [
  ["03", "Featured systems"],
  ["05", "Skill domains"],
  ["100%", "Builder mindset"]
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function NetworkSphere() {
  const group = useRef(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => {
        const phi = Math.acos(1 - 2 * (index + 0.5) / 42);
        const theta = Math.PI * (1 + Math.sqrt(5)) * index;
        const radius = 2.15;
        return [
          Math.cos(theta) * Math.sin(phi) * radius,
          Math.sin(theta) * Math.sin(phi) * radius,
          Math.cos(phi) * radius
        ];
      }),
    []
  );

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.12 + pointer.x * 0.12;
    group.current.rotation.x = pointer.y * 0.08;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.42, 48, 48]} />
        <meshBasicMaterial color="#3ee7ff" wireframe transparent opacity={0.16} />
      </mesh>
      {nodes.map((position, index) => (
        <Float key={index} speed={1.4} floatIntensity={0.18}>
          <mesh position={position}>
            <sphereGeometry args={[0.025 + (index % 3) * 0.006, 12, 12]} />
            <meshBasicMaterial color={index % 2 ? "#9f6bff" : "#6ef3c5"} />
          </mesh>
        </Float>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.72, 0.01, 12, 120]} />
        <meshBasicMaterial color="#9f6bff" transparent opacity={0.58} />
      </mesh>
      <mesh rotation={[0.7, 0.2, 0.5]}>
        <torusGeometry args={[2.05, 0.008, 12, 120]} />
        <meshBasicMaterial color="#3ee7ff" transparent opacity={0.48} />
      </mesh>
    </group>
  );
}

function ThreeBackdrop({ compact = false }) {
  return (
    <Canvas
      camera={{ position: [0, 0, compact ? 6.2 : 5.4], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
    >
      <ambientLight intensity={1.2} />
      <pointLight position={[3, 4, 3]} intensity={2} color="#3ee7ff" />
      <pointLight position={[-3, -2, 2]} intensity={1.4} color="#9f6bff" />
      <Stars radius={55} depth={20} count={compact ? 260 : 520} factor={3} fade speed={0.45} />
      <NetworkSphere />
    </Canvas>
  );
}

function TiltCard({ children, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [7, -7]), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-7, 7]), { stiffness: 160, damping: 18 });

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.26em] text-cyanflux">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{children}</p> : null}
    </motion.div>
  );
}

function ButtonLink({ href, children, variant = "primary", icon: Icon }) {
  const styles =
    variant === "primary"
      ? "border-cyanflux/50 bg-cyanflux/15 text-white shadow-glow hover:bg-cyanflux/22"
      : "border-white/14 bg-white/[0.055] text-slate-100 hover:border-violetflux/50 hover:bg-white/[0.09]";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-5 text-sm font-semibold transition ${styles}`}
    >
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-radial-grid" />
      <div className="absolute right-0 top-10 -z-10 h-[58rem] w-[58rem] opacity-80">
        <ThreeBackdrop />
      </div>

      <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 backdrop-blur">
            <Sparkles className="h-4 w-4 text-plasma" />
            Computer Engineering Student
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl">
            Tushar Chaugule
          </h1>
          <p className="mt-5 max-w-2xl font-display text-xl text-cyanflux sm:text-2xl">
            Full-Stack Developer | AI Systems Builder | Cybersecurity Enthusiast
          </p>
          <div className="mt-5 h-8 overflow-hidden text-lg text-slate-200">
            <motion.span
              className="inline-block border-r border-cyanflux pr-2"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.3, ease: "easeInOut" }}
            >
              Building intelligent, scalable, and secure digital systems.
            </motion.span>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            A modern engineering portfolio shaped for internships, placements, hackathons, and future
            AI/cybersecurity opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects" icon={Rocket}>
              View Projects
            </ButtonLink>
            <ButtonLink href="/Tushar_Chaugule_Resume.pdf" variant="secondary" icon={Download}>
              Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" icon={Mail}>
              Contact Me
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[420px] lg:max-w-[480px]"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyanflux/22 via-violetflux/16 to-plasma/14 blur-2xl" />
          <div className="glass-panel glow-border relative overflow-hidden rounded-[1.65rem] p-3">
            <div className="absolute inset-x-0 top-0 h-px scanline" />
            <Image
              src="/tushar-portrait.jpeg"
              alt="Professional portrait of Tushar Chaugule"
              width={896}
              height={1156}
              priority
              className="aspect-[4/5] rounded-[1.2rem] object-cover object-center"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/12 bg-black/45 p-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-cyanflux">Current Focus</p>
              <p className="mt-1 font-display text-lg text-white">MERN + AI systems + secure software</p>
            </div>
          </div>
          <motion.div
            className="glass-panel absolute -left-5 top-12 hidden rounded-xl p-4 shadow-glow sm:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs text-slate-400">Signal</p>
            <p className="font-display text-sm text-white">Recruiter-ready portfolio</p>
          </motion.div>
          <motion.div
            className="glass-panel absolute -right-5 bottom-24 hidden rounded-xl p-4 shadow-violet sm:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs text-slate-400">Build Mode</p>
            <p className="font-display text-sm text-white">AI workspace systems</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const pillars = [
    ["Full-stack systems", "Designing interfaces and APIs that stay clear, scalable, and usable."],
    ["AI product thinking", "Exploring AI-assisted workflows, persistent context, and productivity tooling."],
    ["Secure engineering", "Learning cybersecurity foundations to build safer digital experiences."]
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="Engineering focus with a future-facing edge">
          Tushar is a Computer Engineering student building MERN applications, AI-powered systems, and
          practical automation tools with an eye toward secure software design.
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map(([title, copy], index) => (
            <motion.article
              key={title}
              className="glass-panel glow-border rounded-2xl p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyanflux/30 bg-cyanflux/10 text-cyanflux">
                {index === 0 ? <Code2 /> : index === 1 ? <BrainCircuit /> : <ShieldCheck />}
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Skills" title="A practical modern engineering toolkit">
          Interactive skill clusters built around frontend delivery, backend APIs, databases, systems
          thinking, and secure development habits.
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <TiltCard
                key={group.title}
                className="glass-panel glow-border min-h-[260px] rounded-2xl p-5 transition hover:-translate-y-1"
              >
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-cyanflux">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/10 bg-white/[0.055] px-2.5 py-1.5 text-xs font-medium text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectMockup({ project }) {
  const Icon = project.icon;
  return (
    <div className="relative min-h-[270px] overflow-hidden rounded-xl border border-white/10 bg-[#070b16] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(62,231,255,0.2),transparent_30%),radial-gradient(circle_at_75%_70%,rgba(159,107,255,0.18),transparent_32%)]" />
      <div className="relative rounded-lg border border-white/10 bg-black/35 p-3 backdrop-blur">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-cyanflux/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-violetflux/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-plasma/80" />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center gap-3 rounded-lg border border-cyanflux/20 bg-cyanflux/10 p-3">
            <Icon className="h-5 w-5 text-cyanflux" />
            <div className="h-2 flex-1 rounded-full bg-white/18" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-20 rounded-lg border border-white/10 bg-white/[0.06]" />
            <div className="h-20 rounded-lg border border-white/10 bg-white/[0.06]" />
            <div className="h-20 rounded-lg border border-white/10 bg-white/[0.06]" />
          </div>
          <div className="h-16 rounded-lg border border-violetflux/20 bg-violetflux/10" />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Projects" title="Project stories built for evaluators">
          Each system highlights problem-solving, implementation detail, and growth toward scalable,
          AI-aware, secure software.
        </SectionHeading>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-panel glow-border grid gap-6 rounded-2xl p-5 lg:grid-cols-[0.82fr_1fr] lg:p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.24 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <ProjectMockup project={project} />
              <div className="flex flex-col justify-center">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-plasma">
                  {project.category}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{project.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <Zap className="mt-0.5 h-4 w-4 shrink-0 text-cyanflux" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-md border border-cyanflux/18 bg-cyanflux/10 px-3 py-1.5 text-xs text-cyan-100">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href="https://github.com/" variant="secondary" icon={Github}>
                    GitHub
                  </ButtonLink>
                  <ButtonLink href="#contact" variant="secondary" icon={ArrowUpRight}>
                    Live Demo
                  </ButtonLink>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 opacity-45">
        <ThreeBackdrop compact />
      </div>
      <div className="section-shell">
        <SectionHeading eyebrow="Experience" title="Achievements and growth signals">
          A concise track record of hackathon participation, cybersecurity learning, cloud exposure, and
          project-focused execution.
        </SectionHeading>
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label} className="glass-panel rounded-2xl p-6 text-center">
              <p className="font-display text-4xl font-semibold text-white">{value}</p>
              <p className="mt-2 text-sm text-slate-300">{label}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="glass-panel glow-border rounded-2xl p-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violetflux/30 bg-violetflux/10 text-violet-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("idle");

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Contact" title="Open to internships, hackathons, and technical collaborations">
          Reach out for opportunities around full-stack engineering, AI systems, cybersecurity learning, and
          product-minded project work.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="font-display text-2xl font-semibold text-white">Connect</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Professional channels for recruiters, collaborators, and hackathon teams.
            </p>
            <div className="mt-7 grid gap-3">
              <ButtonLink href="https://github.com/" variant="secondary" icon={Github}>
                GitHub
              </ButtonLink>
              <ButtonLink href="https://www.linkedin.com/" variant="secondary" icon={Linkedin}>
                LinkedIn
              </ButtonLink>
              <ButtonLink href="mailto:tusharchaugule.dev@gmail.com" variant="secondary" icon={Mail}>
                Email
              </ButtonLink>
            </div>
          </div>
          <form
            className="glass-panel glow-border rounded-2xl p-6"
            onSubmit={(event) => {
              event.preventDefault();
              setStatus("ready");
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-300">
                Name
                <input className="rounded-lg border border-white/12 bg-white/[0.055] px-4 py-3 text-white outline-none transition focus:border-cyanflux/70" required />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Email
                <input type="email" className="rounded-lg border border-white/12 bg-white/[0.055] px-4 py-3 text-white outline-none transition focus:border-cyanflux/70" required />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm text-slate-300">
              Message
              <textarea className="min-h-36 rounded-lg border border-white/12 bg-white/[0.055] px-4 py-3 text-white outline-none transition focus:border-cyanflux/70" required />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-cyanflux/50 bg-cyanflux/15 px-5 text-sm font-semibold text-white shadow-glow transition hover:bg-cyanflux/24"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
            {status === "ready" ? (
              <p className="mt-4 text-sm text-plasma">Form UI is ready. Connect it to an email service before production launch.</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioExperience() {
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/70 backdrop-blur-xl">
        <nav className="section-shell flex h-16 items-center justify-between">
          <a href="#top" className="font-display text-sm font-semibold tracking-[0.24em] text-white">
            TUSHAR.C
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="/Tushar_Chaugule_Resume.pdf"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 bg-white/[0.06] px-3 text-sm font-semibold text-slate-100 transition hover:border-cyanflux/50"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </nav>
      </header>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        Built for modern engineering opportunities. Tushar Chaugule.
      </footer>
    </main>
  );
}
