"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Engineer",
      company: "Tata Technologies, subcontractor for Airbus",
      duration: "Feb 2024 - Present",
      points: [
        "Built scalable frontend systems using React.js and Vue.js for complex engineering workflows.",
        "Designed secure backend services using Node.js, Express, and GraphQL for aircraft design data.",
        "Engineered dashboards visualizing 2M+ financial data points across 100+ projects and 150+ users.",
        "Built Python FastAPI services and integrated MongoDB for persistent storage.",
        "Deployed production systems on AWS with EC2, S3, CloudFront, load balancing, and auto-scaling.",
        "Implemented CI/CD pipelines using GitHub Actions and GitLab CI.",
      ],
    },
    {
      role: "Software Development Engineer",
      company: "GeekyAnts",
      duration: "July 2023 - Feb 2024",
      points: [
        "Developed user-facing dashboards and company website features using React and Next.js.",
        "Worked with Redux, Firebase, SQL, TypeScript, Tailwind CSS, and internal product tooling.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Building reliable products across frontend, backend, and cloud.
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex flex-col gap-2 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">{exp.role}</h3>
                  <p className="mt-1 text-sm font-medium text-brand">{exp.company}</p>
                </div>
                <p className="text-sm text-slate-500">{exp.duration}</p>
              </div>

              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600 md:grid-cols-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
