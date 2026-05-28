"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const stats = [
  { value: 99.9, suffix: "%", label: "Uptime Delivered" },
  { value: 10, suffix: "K+", label: "App Scale Handled" },
  { value: 24, suffix: "+", label: "Services Managed" },
  { value: 0, suffix: "", label: "Servers to Manage" },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target, duration]);

  return count;
}

function StatItem({
  stat,
  index,
  animate,
}: {
  stat: (typeof stats)[0];
  index: number;
  animate: boolean;
}) {
  const shouldReduce = useReducedMotion();
  const count = useCountUp(stat.value, 1800, animate && !shouldReduce);
  const display = shouldReduce ? stat.value : animate ? count : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center sm:items-start gap-0.5"
    >
      <span
        className="text-3xl font-bold tabular-nums"
        style={{
          fontFamily: "var(--font-space-grotesk)",
          color: "var(--brand-primary)",
        }}
      >
        {display}
        {stat.suffix}
      </span>
      <span className="text-sm text-[var(--text-muted)]">{stat.label}</span>
    </motion.div>
  );
}

export default function HeroSection() {
  const shouldReduce = useReducedMotion();
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 text-center sm:text-left">
        {/* Eyebrow chip */}
        <motion.div
          {...(shouldReduce ? {} : fadeUp)}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-8"
        >
          <span
            className="h-1.5 w-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--brand-highlight)" }}
            aria-hidden="true"
          />
          <span className="text-xs font-medium tracking-widest text-[var(--text-muted)] uppercase">
            Freelance Engineering Collective
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...(shouldReduce ? {} : fadeUp)}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          WE BUILD{" "}
          <span className="text-gradient">INFRA</span>
          {", "}
          <span className="text-gradient-violet">AI AGENTS</span>
          <br className="hidden sm:block" />
          {" & "}
          <span className="text-white">PRODUCTS.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...(shouldReduce ? {} : fadeUp)}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mb-4 leading-relaxed"
        >
          Freelance specialists in DevOps, Cloud Infrastructure, AI &amp; Agentic
          Systems, Backend and Frontend engineering.
        </motion.p>
        <motion.p
          {...(shouldReduce ? {} : fadeUp)}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mb-10 leading-relaxed"
        >
          We design, build, and ship production-grade systems — from Kubernetes
          clusters and serverless platforms to LLM-powered agents and full-stack
          applications.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...(shouldReduce ? {} : fadeUp)}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 mb-20"
        >
          <a
            href="#cta"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group rounded-xl bg-[var(--brand-primary)] text-white hover:bg-blue-500 hover:-translate-y-0.5 transition-all duration-150 h-12 px-7 text-base font-semibold no-underline"
            )}
            style={{ boxShadow: "0 0 24px rgba(59,130,246,0.25)" }}
          >
            Start a Project
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-0.5 transition-transform duration-150"
              aria-hidden="true"
            />
          </a>
          <a
            href="#work"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "rounded-xl border-white/[0.12] bg-transparent text-white hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-150 h-12 px-7 text-base font-medium no-underline"
            )}
          >
            View Our Work
            <ChevronRight size={16} className="ml-1" aria-hidden="true" />
          </a>
        </motion.div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/[0.08] pt-10"
          aria-label="Key metrics"
        >
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} animate={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
