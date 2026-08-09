"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero(): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand">
            Full-Stack Software Engineer
          </p>
          <h1 className="text-5xl font-bold leading-tight text-slate-950 sm:text-6xl">
            Building clean web apps, dashboards, and AI-powered tools.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            I am Shriya Sonam, a full-stack engineer with 2+ years of experience
            across aerospace and SaaS domains. I work with React, Next.js,
            FastAPI, Node.js, cloud infrastructure, and applied AI systems.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500 hover:bg-white"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-500">
            <a
              href="mailto:shriya2025sonam@gmail.com"
              aria-label="Email Shriya"
              className="transition hover:text-slate-950"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shriya-sonam-a509571a1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="transition hover:text-slate-950"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Shriya-Sonam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="transition hover:text-slate-950"
            >
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image
              src="/portfolioimage.jpeg"
              alt="Portrait of Shriya Sonam"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-md border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-950">
              Current focus
            </p>
            <p className="mt-1 text-sm text-slate-600">
              AI support automation, scalable dashboards, and cloud-ready web apps.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
