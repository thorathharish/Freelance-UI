"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Cloud,
  Bot,
  Monitor,
  Server,
  Shield,
  Activity,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description:
      "We architect GCP environments, manage Kubernetes clusters, build CI/CD pipelines, and handle everything underneath your product — provisioned as code, secure by default.",
    techs: ["GCP", "Kubernetes", "GKE", "Terraform", "CI/CD", "Cloud Run"],
    color: "var(--brand-primary)",
  },
  {
    icon: Bot,
    title: "AI Agents & Agentic Systems",
    description:
      "We build production-grade AI agents, multi-agent workflows, RAG pipelines, and LLM-powered backends.",
    techs: ["LangChain", "LangGraph", "MCP", "RAG", "CrewAI", "OpenAI"],
    color: "var(--brand-accent)",
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "We build fast, scalable frontend applications using React, Next.js, and Vue.js with modern tooling and performance-first architecture.",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    color: "var(--brand-highlight)",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "We build robust APIs and backend services using Node.js, Python, and modern backend frameworks for scalable production systems.",
    techs: ["Node.js", "Python", "FastAPI", "NestJS", "GraphQL", "PostgreSQL"],
    color: "var(--brand-primary)",
  },
  {
    icon: Shield,
    title: "Cloud Security & Hardening",
    description:
      "Defense-in-depth from day one. We implement security at every layer of your cloud infrastructure.",
    techs: ["Cloud Armor", "Calico", "gVisor", "Secret Manager", "IAM"],
    color: "var(--brand-accent)",
  },
  {
    icon: Activity,
    title: "Observability & Reliability",
    description:
      "Full observability stacks with metrics, alerting, logging, uptime monitoring, and on-call engineering.",
    techs: ["Prometheus", "Grafana", "Cloud Monitoring", "PagerDuty"],
    color: "var(--brand-highlight)",
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
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
            What We Build
          </span>
          <h2
            id="services-heading"
            className="font-heading text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Engineering Services
          </h2>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            End-to-end capabilities across the modern cloud and AI stack.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Services offered"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0];
  index: number;
  inView: boolean;
}) {
  const shouldReduce = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.div
      role="listitem"
      initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.07,
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={shouldReduce ? {} : { y: -4 }}
      className="group relative flex flex-col gap-5 rounded-xl border border-white/[0.08] bg-[var(--surface)] p-6 cursor-default transition-all duration-200 hover:border-white/[0.16]"
      style={{
        transition: "border-color 0.2s, box-shadow 0.2s, transform 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px ${service.color}18`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Icon */}
      <div
        className="flex h-10 w-10 items-center justify-center rounded-lg"
        style={{ background: `${service.color}18` }}
        aria-hidden="true"
      >
        <Icon size={20} style={{ color: service.color }} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 flex-1">
        <h3
          className="font-heading font-semibold text-base text-white leading-snug"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {service.title}
        </h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">
          {service.description}
        </p>
      </div>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5" aria-label="Technologies">
        {service.techs.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border"
            style={{
              borderColor: `${service.color}40`,
              color: service.color,
              backgroundColor: `${service.color}0C`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
