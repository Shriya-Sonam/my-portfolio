"use client";
import { motion } from "framer-motion";
import { JSX } from "react";
import Image from "next/image";

export default function Hero(): JSX.Element {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-text font-sans relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-transparent -z-10" />

      {/* Profile image */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-48 h-48 relative overflow-hidden rounded-full shadow-md border-2 border-brand/40"
      >
        <Image
          src="/portfolioimage.jpeg"
          alt="My portrait"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Name / Title */}
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-extrabold text-center mt-6"
      >
        Hi, I’m <span className="text-brand">Shriya</span> 👋
      </motion.h3>

      {/* Subtitle */}
      <motion.h4
        className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 text-center mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Software Engineer
      </motion.h4>

      {/* Tagline */}
      <motion.p
        className="mt-4 text-sm sm:text-base text-center max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        I’m a Full-Stack Engineer with 2+ years of experience working across aerospace and SaaS domains. I enjoy turning complex problems into clean, efficient, and user-friendly solutions.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="https://www.linkedin.com/in/shriya-sonam-a509571a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 text-sm bg-brand text-white font-medium rounded-md shadow-sm hover:shadow-md transition"
        >
          Say Hello
        </a>

        <a
          href="#projects"
          className="px-6 py-2.5 text-sm border border-brand text-brand font-medium rounded-md hover:bg-brand hover:text-white transition"
        >
          View Work
        </a>
      </motion.div>
    </section>
  );
}