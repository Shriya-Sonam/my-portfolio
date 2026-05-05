"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

function ProjectCard({ title, description, link }: ProjectCardProps): JSX.Element {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white shadow-lg rounded-2xl"
    >
      <h3 className="text-xl font-semibold mb-2 text-brand">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        View Project →
      </a>
    </motion.div>
  );
}

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard
            title="Portfolio Website"
            description="A modern portfolio built with Next.js, Tailwind v4, and Framer Motion."
            link="#"
          />
          <ProjectCard
            title="E-commerce UI"
            description="Responsive shopping UI prototype."
            link="#"
          />
          <ProjectCard
            title="Blog Platform"
            description="Full-stack blog with authentication."
            link="#"
          />
        </div>
      </div>
    </section>
  );
}
