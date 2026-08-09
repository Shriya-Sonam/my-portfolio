"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact(): JSX.Element {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      setStatus("Sending...");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent. I will get back to you soon.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please email me directly.");
      }
    } catch {
      setStatus("Network error. Please email me directly.");
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Let us build something useful.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            I am open to full-stack engineering roles, frontend-heavy product work,
            backend APIs, dashboards, and AI application development.
          </p>

          <div className="mt-8 space-y-3 text-sm text-slate-600">
            <a
              href="mailto:shriya2025sonam@gmail.com"
              className="flex items-center gap-3 transition hover:text-slate-950"
            >
              <Mail size={18} />
              shriya2025sonam@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/shriya-sonam-a509571a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-slate-950"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Shriya-Sonam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-slate-950"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Name
              <input
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-blue-100"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-blue-100"
              />
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium text-slate-700">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-none rounded-md border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-blue-100"
            />
          </label>

          <button
            type="submit"
            disabled={status === "Sending..."}
            className="mt-5 w-full rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            Send Message
          </button>

          {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
