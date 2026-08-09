"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  repo?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "SupportFlow AI",
    description:
      "AI-powered ticket triage system that classifies support requests, retrieves policy context, drafts safe replies, and routes cases for escalation.",
    stack: ["FastAPI", "LangGraph", "Gemini", "RAG", "Docker", "Kubernetes"],
    highlights: [
      "Built multi-step AI workflow for classification, retrieval, reply generation, and escalation.",
      "Added Kubernetes manifests, unit tests, and deterministic fallback behavior.",
    ],
    repo: "https://github.com/Shriya-Sonam",
  },
  {
    title: "Engineering Analytics Dashboard",
    description:
      "Interactive dashboard for visualizing high-volume project and financial data across engineering workflows.",
    stack: ["React", "Redux", "ApexCharts", "Node.js", "GraphQL"],
    highlights: [
      "Visualized 2M+ data points across 100+ projects and 150+ users.",
      "Designed reusable frontend patterns for dense operational data.",
    ],
  },
  {
    title: "Full-Stack Portfolio",
    description:
      "Responsive portfolio built with Next.js, Tailwind CSS, Framer Motion, and a server-side contact API.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Resend"],
    highlights: [
      "Built custom sections for experience, projects, skills, resume, and contact.",
      "Implemented email contact flow through a Next.js API route.",
    ],
    repo: "https://github.com/Shriya-Sonam",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }): JSX.Element {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-950">{project.title}</h3>
        <div className="flex shrink-0 items-center gap-2 text-slate-500">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="transition hover:text-slate-950"
            >
              <Github size={18} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="transition hover:text-slate-950"
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Projects with real engineering depth.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A mix of AI systems, dashboards, and full-stack applications focused on
            clear UX, reliable APIs, and practical deployment.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
