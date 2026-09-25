"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, GitBranch, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { socialLinks } from "@/data/navigation";
import { projects } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const colorBadgeMap = {
  cyan: "cyan",
  green: "green",
  violet: "violet",
};

export default function GitHubSection() {
  return (
    <section id="github" className="py-24" aria-labelledby="github-heading">
      <div className="section-shell">
        <SectionHeading
          eyebrow="GitHub"
          title="Engineering work"
          id="github-heading"
        >
          Curated repositories — the projects on this page are the primary work. Visit my GitHub
          profile for the full picture.
        </SectionHeading>

        {/* Featured repos */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-panel glow-border rounded-2xl p-5 flex flex-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              {/* Repo header */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
                  <p className="font-mono text-xs text-slate-500">Tushar8767/</p>
                </div>
                <span className={`rounded-full border px-2 py-0.5 font-mono text-[0.6rem] ${
                  project.status === "In Development"
                    ? "border-yellow-500/20 bg-yellow-500/8 text-yellow-400"
                    : "border-secgreen/20 bg-secgreen/8 text-secgreen"
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="font-display text-base font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-400 flex-1">{project.tagline}</p>

              <div className="mt-4 flex flex-wrap gap-1.5 mb-4">
                {project.stack.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant={colorBadgeMap[project.color] ?? "default"} size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-xs text-slate-400 transition hover:border-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyanflux focus-visible:outline-offset-2"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
                View Repository
              </a>
            </motion.div>
          ))}
        </div>

        {/* GitHub profile CTA */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex flex-col items-center gap-4 glass-panel rounded-2xl p-7">
            <Github className="h-8 w-8 text-slate-300" aria-hidden="true" />
            <div>
              <p className="font-display text-lg font-semibold text-white">View all repositories</p>
              <p className="mt-1 text-sm text-slate-400">
                More projects, scripts, and experiments on my GitHub profile.
              </p>
            </div>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-cyanflux/40 bg-cyanflux/10 px-5 text-sm font-semibold text-white transition hover:bg-cyanflux/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyanflux focus-visible:outline-offset-2"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              github.com/Tushar8767
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

