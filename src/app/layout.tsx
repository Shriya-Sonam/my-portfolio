import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { JSX } from "react";

export const metadata = {
  title: "My Portfolio",
  description: "Built with Next.js, Tailwind v4, and Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
