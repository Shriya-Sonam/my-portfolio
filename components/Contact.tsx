"use client";
import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

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
      setStatus("Message sent");
      form.reset();
    } else {
      setStatus("Something went wrong");
    }
  } catch (error) {
    setStatus("Network error");
  }
};

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-10 text-brand"
        >
          Contact Me
        </motion.h2>

       

        <div className="gap-40 flex">
        <div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-10 text-gray-600 dark:text-gray-300 text-lg"
        >
          Let’s connect! Reach out via email, socials, or send me a message
          below.
        </motion.p>
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-6"
          >
          

            <div className="flex space-x-6 text-3xl">
            <a
              href="mailto:shriya2025sonam@gmail.com"
              className="hover:text-brand transition"
            >
              <FaEnvelope/> 
            </a>
              <a
                href="https://www.linkedin.com/in/shriya-sonam-a509571a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Shriya-Sonam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 bg-white dark:bg-gray-800 p-6 "
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand outline-none dark:bg-gray-700 dark:border-gray-600"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand outline-none dark:bg-gray-700 dark:border-gray-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand outline-none dark:bg-gray-700 dark:border-gray-600"
            />
            <button
              type="submit"
              disabled={status === "Sending..."}
              className="px-3 py-2 bg-brand text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition disabled:opacity-50"
            >
              Send Message
            </button>
            {status && <p className="mt-2 text-sm">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
