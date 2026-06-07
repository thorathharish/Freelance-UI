"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Mail, Phone, GitFork, X, ExternalLink } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "support@itechie.in",
    href: "mailto:support@itechie.in",
    color: "var(--brand-primary)",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91-9901991908",
    href: "tel:+919901991908",
    color: "var(--brand-highlight)",
  },
];

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(139,92,246,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="bg-dot absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          ref={ref}
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-highlight)] mb-6 block">
            Get In Touch
          </span>
          <h2
            id="cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Scalable.</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] mb-4 leading-relaxed">
            Need infrastructure, AI systems, or full-stack engineering support?
          </p>
          <p className="text-base text-[var(--text-muted)] mb-12 leading-relaxed">
            We help startups and teams build production-grade platforms with
            modern cloud and AI technologies.
          </p>

          {/* Contact cards */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            aria-label="Contact information"
          >
            {contactDetails.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  whileHover={shouldReduce ? {} : { y: -4 }}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[var(--background)] p-5 text-left transition-colors duration-200 hover:border-white/[0.18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] sm:flex-1"
                  style={{
                    transition: "border-color 0.2s, box-shadow 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${item.color}18`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: `${item.color}18` }}
                    aria-hidden="true"
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-white truncate group-hover:text-[var(--brand-primary)] transition-colors duration-150">
                      {item.value}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer
        className="border-t border-white/[0.08]"
        aria-label="Site footer"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-0.5">
            <span
              className="text-sm font-bold text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              iTechie
            </span>
          </div>

          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} iTechie. All rights reserved.
          </p>

          <nav aria-label="Social links" className="flex items-center gap-3">
            {[
              { icon: GitFork, label: "GitHub" },
              { icon: X, label: "Twitter / X" },
              { icon: ExternalLink, label: "LinkedIn" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={`iTechie on ${label}`}
                className="flex h-8 w-8 items-center justify-center rounded-md text-[var(--text-muted)] hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                <Icon size={15} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </section>
  );
}
