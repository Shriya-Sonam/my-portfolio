"use client";

import { JSX } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "GraphQL", "REST APIs", "Python", "Java"],
  },
  {
    title: "Data and Cloud",
    skills: ["MongoDB", "SQL", "Redis", "AWS", "S3", "CloudFront", "Docker"],
  },
  {
    title: "Engineering",
    skills: ["CI/CD", "GitHub Actions", "GitLab CI", "Jest", "Kubernetes", "System Design"],
  },
];

export default function Skills(): JSX.Element {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Practical tools for shipping full-stack products.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Focused on modern frontend systems, reliable APIs, cloud deployment,
            and AI-assisted product workflows.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="text-base font-bold text-slate-950">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
