"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Engineer",
      company: "Tata Technologies (Subcontractor Airbus)",
      duration: "Feb 2024 – Present",
      points: [
        "Built scalable frontend systems using React.js and Vue.js, delivering interactive UI for complex engineering workflows.",
        "Designed and implemented secure backend services using Node.js, Express, and GraphQL, handling mission-critical aircraft design data.",
        "Engineered real-time dashboards visualizing 2M+ financial data points across 100+ projects and 150+ users using Redux and ApexCharts.",
        "Built Python FastAPI services for computational logic and integrated MongoDB for persistent data storage.",
        "Deployed production systems on AWS (EC2, S3, CloudFront) with load balancing, auto-scaling, and secure infrastructure.",
        "Implemented CI/CD pipelines using GitHub Actions and GitLab CI for automated build, test, and deployment.",
      ],
    },
    {
      role: "Software Development Engineer",
      company: "GeekyAnts",
      duration: "July 2023 – Feb 2024",
      points: [
        "Developed a user-facing dashboard and company website using React, improving data organization and usability.",
        "Worked with Redux, Firebase, SQL, TypeScript, Tailwind CSS, and Next.js in internal projects.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-brand">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 dark:border-gray-700">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 ml-6"
            >
              {/* Dot */}
              <span className="absolute -left-3 flex h-5 w-5 items-center justify-center rounded-full bg-brand" />

              {/* Content (NO CARD) */}
              <div>
                <h3 className="text-lg font-semibold">{exp.role}</h3>

                <p className="text-sm text-brand font-medium">
                  {exp.company}
                </p>

                <p className="text-xs text-gray-500 mb-3">
                  {exp.duration}
                </p>

                {/* Bullet Points */}
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}