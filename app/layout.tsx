import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MonoMint — DevOps, AI Agents & Full-Stack Engineering",
  description:
    "Freelance specialists in DevOps, Cloud Infrastructure, AI & Agentic Systems, Backend and Frontend engineering. We design, build, and ship production-grade systems.",
  keywords: [
    "DevOps",
    "Cloud Infrastructure",
    "AI Agents",
    "Kubernetes",
    "Full-Stack Engineering",
    "LLM",
    "RAG",
    "GCP",
  ],
  openGraph: {
    title: "MonoMint — DevOps, AI Agents & Full-Stack Engineering",
    description:
      "We design, build, and ship production-grade systems — from Kubernetes clusters to LLM-powered agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[600] focus:rounded-md focus:bg-[var(--brand-primary)] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
