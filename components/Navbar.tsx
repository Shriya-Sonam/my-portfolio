"use client";

import Link from "next/link";
import { JSX } from "react";
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
   <nav className="sticky top-0 z-50 w-full bg-[var(--color-accent)] max-w-8xl mx-auto px-6 py-4 flex justify-between items-center dark:bg-gray-900/80 text-white dark:text-gray-100">
        <Logo />
        <div className="space-x-8 text-xl">
        {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand">
              {link.label}
            </Link>
          ))}
          <Link
          href="/resume.pdf"  // 👈 place resume.pdf in the /public folder
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-lg font-semibold text-white bg-blue-300 rounded-xl shadow-md hover:bg-accent transition"
        >
          Resume
        </Link>
        </div>
        <button
          className="md:hidden text-gray-900 dark:text-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center space-y-6 py-6 text-xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand"
                onClick={() => setIsOpen(false)} // close menu when link clicked
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-lg font-semibold text-white bg-brand rounded-xl shadow-md hover:bg-accent transition"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
    

  );
}
