import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
      (c) {new Date().getFullYear()} Shriya Sonam. Built with Next.js and Tailwind CSS.
    </footer>
  );
}
