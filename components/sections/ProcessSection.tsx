"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your stack, goals, and constraints. No assumptions — just the right questions.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "We design the system: infrastructure, services, data flows, and integration points.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Iterative, test-driven builds with regular check-ins and a living codebase you can see.",
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "Zero-downtime releases via automated pipelines with rollback capability built in.",
  },
  {
    number: "05",
    title: "Optimization",
    description:
      "Post-launch performance tuning, cost reviews, and continuous reliability improvements.",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-padding relative"
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
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-primary)] mb-3 block">
            How We Work
          </span>
          <h2
            id="process-heading"
            className="font-heading text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Our Process
          </h2>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            A structured path from idea to production.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div
          className="hidden lg:flex items-start gap-0"
          role="list"
          aria-label="Process steps"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              role="listitem"
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="flex flex-col items-center flex-1 relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="absolute top-6 left-1/2 w-full h-px"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg, var(--brand-highlight) 0, var(--brand-highlight) 6px, transparent 6px, transparent 14px)",
                    opacity: 0.3,
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Step number bubble */}
              <div
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-[var(--surface)] mb-5"
              >
                <span
                  className="font-heading text-sm font-bold text-[var(--brand-highlight)]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="px-4 text-center">
                <h3
                  className="font-heading font-semibold text-sm text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical list */}
        <ol
          className="lg:hidden flex flex-col gap-0"
          aria-label="Process steps"
        >
          {steps.map((step, i) => (
            <motion.li
              key={step.number}
              initial={shouldReduce ? {} : { opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: i * 0.08,
                duration: 0.45,
                ease: "easeOut",
              }}
              className="flex gap-5 relative"
            >
              {/* Vertical connector */}
              {i < steps.length - 1 && (
                <div
                  className="absolute left-5 top-12 w-px h-full"
                  style={{
                    background:
                      "repeating-linear-gradient(180deg, var(--brand-highlight) 0, var(--brand-highlight) 6px, transparent 6px, transparent 14px)",
                    opacity: 0.3,
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Number */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-[var(--surface)] mt-1">
                <span
                  className="font-heading text-xs font-bold text-[var(--brand-highlight)]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="pb-8">
                <h3
                  className="font-heading font-semibold text-sm text-white mb-1.5"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
