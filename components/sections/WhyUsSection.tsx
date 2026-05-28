"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Rocket, Layers, Brain, Cloud, Zap, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Production-First Engineering",
    description:
      "Every system we build is designed for the real world — observable, resilient, and ready to scale.",
    color: "var(--brand-primary)",
  },
  {
    icon: Layers,
    title: "Full Stack Capability",
    description:
      "From Kubernetes clusters to React frontends, we cover the entire stack without switching vendors.",
    color: "var(--brand-accent)",
  },
  {
    icon: Brain,
    title: "AI-Native Expertise",
    description:
      "We build LLM-powered agents and multi-agent systems as core products, not afterthoughts.",
    color: "var(--brand-highlight)",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Depth",
    description:
      "Years of hands-on GCP, Kubernetes, and infrastructure-as-code experience across production systems.",
    color: "var(--brand-primary)",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "We move quickly without cutting corners — lean processes, async collaboration, shipping that sticks.",
    color: "var(--brand-accent)",
  },
  {
    icon: Wrench,
    title: "Long-Term Maintainability",
    description:
      "Clean architectures, comprehensive docs, and handoff-ready codebases your team can own.",
    color: "var(--brand-highlight)",
  },
];

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="section-padding relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 max-w-xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-accent)] mb-3 block">
            Why MonoMint
          </span>
          <h2
            id="why-heading"
            className="font-heading text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Why Teams Work With Us
          </h2>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            The difference between a vendor and a trusted engineering partner.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Reasons to work with MonoMint"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                role="listitem"
                initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.07,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="flex gap-4 rounded-xl border border-white/[0.08] bg-[var(--background)] p-6 hover:border-white/[0.14] transition-colors duration-200"
              >
                {/* Icon chip */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg mt-0.5"
                  style={{ background: `${reason.color}18` }}
                  aria-hidden="true"
                >
                  <Icon size={18} style={{ color: reason.color }} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <h3
                    className="font-heading font-semibold text-sm text-white leading-snug"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
