"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CheckCircle2, TrendingUp, Globe, GitBranch, Cpu } from "lucide-react";

const outcomes = [
  { icon: TrendingUp, text: "99.9% uptime maintained across all services" },
  { icon: TrendingUp, text: "Reduced infrastructure cost by 40%" },
  { icon: Globe, text: "Multi-region deployment with automatic failover" },
  { icon: GitBranch, text: "Fully automated CI/CD pipeline" },
  { icon: Cpu, text: "AI workflow orchestration at scale" },
];

const metricCards = [
  { value: "99.9%", label: "Uptime" },
  { value: "40%", label: "Cost Reduction" },
  { value: "Multi", label: "Region Deploy" },
  { value: "Zero", label: "Manual Deploys" },
];

export default function CaseStudySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
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
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-highlight)] mb-3 block">
            Featured Work
          </span>
          <h2
            id="work-heading"
            className="font-heading text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What We&apos;ve Shipped
          </h2>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            Real systems, real outcomes.
          </p>
        </motion.div>

        {/* Case study card */}
        <motion.article
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          aria-label="AI Infrastructure Platform case study"
          className="gradient-border rounded-2xl overflow-hidden"
        >
          <div className="bg-[var(--surface)] rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left: narrative */}
              <div>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase border border-[var(--brand-highlight)]/30 text-[var(--brand-highlight)] bg-[var(--brand-highlight)]/10 mb-6">
                  Featured Work
                </span>
                <h3
                  className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  AI Infrastructure Platform
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                  Designed and deployed a cloud-native AI infrastructure platform
                  capable of running scalable multi-agent systems with
                  production-grade observability, autoscaling, and secure
                  deployment pipelines.
                </p>

                {/* Outcomes */}
                <ul className="flex flex-col gap-3" aria-label="Project outcomes">
                  {outcomes.map((item, i) => (
                    <motion.li
                      key={item.text}
                      initial={shouldReduce ? {} : { opacity: 0, x: -16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 0.3 + i * 0.08,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--brand-highlight)" }}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[var(--text-muted)]">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right: metrics grid */}
              <div className="grid grid-cols-2 gap-4" aria-label="Key metrics">
                {metricCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={shouldReduce ? {} : { opacity: 0, scale: 0.92 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.35 + i * 0.07,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="flex flex-col gap-1.5 rounded-xl border border-white/[0.08] bg-[var(--background)] p-5"
                  >
                    <span
                      className="font-heading text-2xl font-bold"
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        color:
                          i % 2 === 0
                            ? "var(--brand-primary)"
                            : "var(--brand-highlight)",
                      }}
                    >
                      {card.value}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-medium">
                      {card.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
