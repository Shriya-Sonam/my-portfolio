import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { JSX } from "react";

export const metadata = {
  title: "Shriya Sonam | Full-Stack Software Engineer",
  description:
    "Portfolio of Shriya Sonam, a full-stack software engineer building React, Next.js, FastAPI, cloud, and AI-powered applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
