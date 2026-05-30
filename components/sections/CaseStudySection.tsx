"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CheckCircle2, TrendingUp, Globe, GitBranch, Cpu } from "lucide-react";

const outcomes = [
  { text: "99.9% uptime maintained across all services" },
  { text: "Reduced infrastructure cost by 40%" },
  { text: "Multi-region deployment with automatic failover" },
  { text: "Fully automated CI/CD pipeline" },
  { text: "AI workflow orchestration at scale" },
];

const metricCards = [
  { value: "99.9%", label: "Uptime" },
  { value: "40%", label: "Cost Reduction" },
  { value: "Multi", label: "Region Deploy" },
  { value: "Zero", label: "Manual Deploys" },
];

const outcomes2 = [
  { text: "Parallel multi-source search orchestrated via LangGraph" },
  { text: "GPT-4o-powered synthesis producing cohesive research reports" },
  { text: "Automated data collection, filtering, and deduplication pipeline" },
  { text: "Multi-perspective analysis across diverse knowledge sources" },
  { text: "Real-time SSE streaming for interactive, progress-visible workflows" },
];

const metricCards2 = [
  { value: "LangGraph", label: "Orchestration" },
  { value: "GPT-4o", label: "Synthesis Model" },
  { value: "SSE", label: "Real-time Stream" },
  { value: "FastAPI", label: "Backend" },
];

const outcomes3 = [
  { text: "Plain-English querying of sales data via natural language interface" },
  { text: "Auto-generated Plotly visualizations directly from query results" },
  { text: "Schema-aware RAG pipeline with guardrails for accurate SQL generation" },
  { text: "Hallucination-resistant query engine with built-in safety checks" },
  { text: "Dual-mode web app (Insight + SQL) for intuitive business data exploration" },
];

const metricCards3 = [
  { value: "RAG", label: "SQL Pipeline" },
  { value: "GPT-4o", label: "Query Engine" },
  { value: "Plotly", label: "Visualizations" },
  { value: "Dual", label: "Mode Interface" },
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

        {/* Case study cards */}
        <div className="flex flex-col gap-8">

          {/* Card 1 — AI Infrastructure Platform */}
          <motion.article
            initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            aria-label="AI Infrastructure Platform case study"
            className="gradient-border rounded-2xl overflow-hidden"
          >
            <div className="bg-[var(--surface)] rounded-2xl p-8 sm:p-10 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
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
                  <ul className="flex flex-col gap-3" aria-label="Project outcomes">
                    {outcomes.map((item, i) => (
                      <motion.li
                        key={item.text}
                        initial={shouldReduce ? {} : { opacity: 0, x: -16 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--brand-highlight)" }}
                          aria-hidden="true"
                        />
                        <span className="text-sm text-[var(--text-muted)]">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4" aria-label="Key metrics">
                  {metricCards.map((card, i) => (
                    <motion.div
                      key={card.label}
                      initial={shouldReduce ? {} : { opacity: 0, scale: 0.92 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.35 + i * 0.07, duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col gap-1.5 rounded-xl border border-white/[0.08] bg-[var(--background)] p-5"
                    >
                      <span
                        className="font-heading text-2xl font-bold"
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          color: i % 2 === 0 ? "var(--brand-primary)" : "var(--brand-highlight)",
                        }}
                      >
                        {card.value}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] font-medium">{card.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Card 2 — ResearchAgent */}
          <motion.article
            initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
            aria-label="ResearchAgent case study"
            className="gradient-border rounded-2xl overflow-hidden"
          >
            <div className="bg-[var(--surface)] rounded-2xl p-8 sm:p-10 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <div>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase border border-[var(--brand-accent)]/30 text-[var(--brand-accent)] bg-[var(--brand-accent)]/10 mb-6">
                    Featured Work
                  </span>
                  <h3
                    className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    ResearchAgent — Advanced Langflow Web Agent
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                    Designed and deployed a multi-source AI research agent using
                    LangGraph for parallel search orchestration and GPT-4o-powered
                    synthesis, with a FastAPI backend delivering real-time SSE
                    streaming for interactive, progress-visible research workflows.
                  </p>
                  <ul className="flex flex-col gap-3" aria-label="Project outcomes">
                    {outcomes2.map((item, i) => (
                      <motion.li
                        key={item.text}
                        initial={shouldReduce ? {} : { opacity: 0, x: -16 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--brand-accent)" }}
                          aria-hidden="true"
                        />
                        <span className="text-sm text-[var(--text-muted)]">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4" aria-label="Key metrics">
                  {metricCards2.map((card, i) => (
                    <motion.div
                      key={card.label}
                      initial={shouldReduce ? {} : { opacity: 0, scale: 0.92 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.35 + i * 0.07, duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col gap-1.5 rounded-xl border border-white/[0.08] bg-[var(--background)] p-5"
                    >
                      <span
                        className="font-heading text-2xl font-bold"
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          color: i % 2 === 0 ? "var(--brand-primary)" : "var(--brand-accent)",
                        }}
                      >
                        {card.value}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] font-medium">{card.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Card 3 — InsightAgent */}
          <motion.article
            initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
            aria-label="InsightAgent case study"
            className="gradient-border rounded-2xl overflow-hidden"
          >
            <div className="bg-[var(--surface)] rounded-2xl p-8 sm:p-10 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <div>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase border border-[var(--brand-primary)]/30 text-[var(--brand-primary)] bg-[var(--brand-primary)]/10 mb-6">
                    Featured Work
                  </span>
                  <h3
                    className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    InsightAgent — AI-Powered Data Query Agent
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                    Designed and deployed a full-stack AI agent enabling plain-English
                    querying of sales data, with a schema-aware RAG pipeline for
                    accurate SQL generation and auto-generated Plotly visualizations
                    delivered through a dual-mode web application.
                  </p>
                  <ul className="flex flex-col gap-3" aria-label="Project outcomes">
                    {outcomes3.map((item, i) => (
                      <motion.li
                        key={item.text}
                        initial={shouldReduce ? {} : { opacity: 0, x: -16 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--brand-primary)" }}
                          aria-hidden="true"
                        />
                        <span className="text-sm text-[var(--text-muted)]">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4" aria-label="Key metrics">
                  {metricCards3.map((card, i) => (
                    <motion.div
                      key={card.label}
                      initial={shouldReduce ? {} : { opacity: 0, scale: 0.92 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.35 + i * 0.07, duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col gap-1.5 rounded-xl border border-white/[0.08] bg-[var(--background)] p-5"
                    >
                      <span
                        className="font-heading text-2xl font-bold"
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          color: i % 2 === 0 ? "var(--brand-primary)" : "var(--brand-highlight)",
                        }}
                      >
                        {card.value}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] font-medium">{card.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
