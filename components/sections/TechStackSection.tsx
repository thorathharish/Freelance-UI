"use client";

import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const techGroups = [
  {
    label: "DevOps & Cloud",
    color: "#3B82F6",
    items: [
      "Google Cloud Platform",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Cloud Run",
      "Helm",
      "ArgoCD",
    ],
  },
  {
    label: "AI & Agent Systems",
    color: "#8B5CF6",
    items: [
      "OpenAI",
      "Claude",
      "Gemini",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "AutoGen",
      "MCP",
      "Multi-Agent Systems",
    ],
  },
  {
    label: "Frontend Stack",
    color: "#06B6D4",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend Stack",
    color: "#3B82F6",
    items: ["Node.js", "FastAPI", "NestJS", "PostgreSQL", "Redis", "GraphQL"],
  },
];

function TechBadge({
  tech,
  color,
  inView,
  delay,
}: {
  tech: string;
  color: string;
  inView: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <motion.span
      role="listitem"
      initial={shouldReduce ? {} : { opacity: 0, scale: 0.88 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      whileHover={shouldReduce ? {} : { scale: 1.07, y: -2 }}
      transition={{ delay, duration: 0.28, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? color : "#9CA3AF",
        backgroundColor: hovered ? `${color}1E` : "rgba(255,255,255,0.04)",
        borderColor: hovered ? `${color}70` : "rgba(255,255,255,0.08)",
        boxShadow: hovered ? `0 0 18px ${color}40, 0 2px 8px rgba(0,0,0,0.3)` : "none",
        transition:
          "color 0.18s ease-out, background-color 0.18s ease-out, border-color 0.18s ease-out, box-shadow 0.18s ease-out",
      }}
      className="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium border cursor-default select-none"
    >
      {tech}
    </motion.span>
  );
}

function TechGroupCard({
  group,
  index,
  inView,
}: {
  group: (typeof techGroups)[0];
  index: number;
  inView: boolean;
}) {
  const [cardHovered, setCardHovered] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      style={{
        borderColor: cardHovered
          ? `${group.color}35`
          : "rgba(255,255,255,0.08)",
        boxShadow: cardHovered
          ? `0 0 36px ${group.color}12, inset 0 1px 0 ${group.color}10`
          : "none",
        transition: "border-color 0.25s ease-out, box-shadow 0.25s ease-out",
      }}
      className="rounded-xl border bg-[var(--background)] p-6"
    >
      {/* Group label */}
      <div className="flex items-center gap-2 mb-5">
        <div
          className="h-1.5 w-1.5 rounded-full transition-all duration-250"
          style={{
            backgroundColor: group.color,
            boxShadow: cardHovered ? `0 0 8px ${group.color}` : "none",
          }}
          aria-hidden="true"
        />
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: group.color }}
        >
          {group.label}
        </span>
      </div>

      {/* Tech badges */}
      <div
        className="flex flex-wrap gap-2"
        role="list"
        aria-label={`${group.label} technologies`}
      >
        {group.items.map((tech, ti) => (
          <TechBadge
            key={tech}
            tech={tech}
            color={group.color}
            inView={inView}
            delay={index * 0.08 + ti * 0.03}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
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
            Technology
          </span>
          <h2
            id="stack-heading"
            className="font-heading text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Built With Battle-Tested Technology
          </h2>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            Production-proven tools we use every day to ship reliable systems.
          </p>
        </motion.div>

        {/* Tech group cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {techGroups.map((group, gi) => (
            <TechGroupCard key={group.label} group={group} index={gi} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
