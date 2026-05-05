import { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
      <footer className="py-6 text-center text-gray-600 border-t">
        © {new Date().getFullYear()} Built with Next js and Tailwind CSS.
      </footer>
    );
  }
  