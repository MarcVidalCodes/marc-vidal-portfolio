import Link from "next/link";
import { FaGithub, FaArrowLeft, FaExternalLinkAlt, FaTrophy } from "react-icons/fa";

const base: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  overflow: "hidden",
  position: "relative",
};

const projects = [
  {
    title: "Autonomous Payment Orchestrator",
    period: "2026 — Ongoing",
    description:
      "Unified payment gateway in Go that routes checkout requests to Stripe (fiat) or Coinbase (crypto). Includes a background resolution worker that uses an LLM to decide and execute fallback actions on failed payments — retry, refund, or flag for manual review. Designed around an OpenAPI spec with a strict Provider interface.",
    tags: ["Go", "Stripe", "Coinbase", "LLM", "Docker", "Kubernetes", "Prometheus"],
    accent: "#0ea5e9",
    accentBg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
    emoji: "⚙️",
    github: "https://github.com/MarcVidalCodes/autonomous-payment-orchestrator",
    live: null,
    badge: "🚧 In Planning",
    featured: true,
  },
  {
    title: "Agentic War Room",
    period: "Nov 2025 – Dec 2025",
    description:
      "Simulated a buggy production environment (memory leaks, race conditions) with Flask + Prometheus alerting, visualized in Grafana. Built an AI incident-response system using LangChain + Ollama (Llama 3) with RAG over LanceDB to retrieve historical incidents and auto-generate remediation plans.",
    tags: ["Python", "Flask", "Docker", "Prometheus", "LangChain", "LanceDB"],
    accent: "#6366f1",
    accentBg: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
    emoji: "🤖",
    github: "https://github.com/MarcVidalCodes/devops-war-room",
    live: null,
    badge: null,
    featured: false,
  },
  {
    title: "Tag Royale",
    period: "March 2025",
    description:
      "GPS-powered multiplayer tag game built in 24 hrs at CuHacking. Geofencing, shrinking safe zone, configurable rules, and real-time map updates. Socket.io rooms with proximity-based tag detection with debouncing.",
    tags: ["React Native", "TypeScript", "Express", "Socket.io", "WebSockets"],
    accent: "#f59e0b",
    accentBg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
    emoji: "🏃",
    github: "https://devpost.com/software/tag-royale",
    live: null,
    badge: "🏆 Best Crossover Hack — CuHacking (24 teams)",
    featured: false,
  },
  {
    title: "RelaxED AI",
    period: "September 2024",
    description:
      "Won Second Best Hardware Hack at Hack the Hill II. Led backend + full-stack integration for a 4-person team — REST APIs, MongoDB data flows for reactive UI. Fine-tuned OpenAI model, secured with JWT auth and bcrypt",
    tags: ["React", "MongoDB", "TypeScript", "Express", "Node.js", "Python"],
    accent: "#10b981",
    accentBg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    emoji: "🧘",
    github: "https://devpost.com/software/relaxed-ai",
    live: null,
    badge: "🥈 2nd Best Hardware Hack — Hack The Hill II",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "4% 10%",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            backgroundColor: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 10,
            fontSize: 13,
            fontWeight: 600,
            color: "#374151",
            textDecoration: "none",
            boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
          }}
        >
          <FaArrowLeft size={11} /> Back
        </Link>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.8px" }}>
            Projects
          </h1>
          <p style={{ fontSize: 12.5, color: "#64748b", marginTop: 2 }}>
            Things I&apos;ve built — including 2 hackathon wins 🏆
          </p>
        </div>
      </div>

      {/* ── Blackbird UAV — Featured full-width card ── */}
      <a
        href="https://blackbirduav.ca"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", display: "block", marginBottom: 12 }}
      >
        <div
          className="bento"
          style={{
            background: "linear-gradient(135deg, #0a1a0f 0%, #0d2b14 45%, #0f3d1c 100%)",
            border: "1px solid #10b98133",
            borderRadius: 16,
            padding: "36px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {/* Ambient orbs */}
          <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "#10b98118", top: -120, right: -80, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 120, height: 120, borderRadius: "50%", background: "#34d39910", bottom: 20, left: 40, pointerEvents: "none" }} />

          {/* Header row */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  color: "#34d399",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  backgroundColor: "#10b98118",
                  padding: "4px 10px",
                  borderRadius: 6,
                  border: "1px solid #10b98133",
                }}>
                  ★ Design Team Volunteer
                </span>
                <span style={{ fontSize: 10, color: "#6ee7b7", fontWeight: 500 }}>Sept 2024 – Feb 2025 · Ottawa, ON</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <h2 style={{ fontSize: 36, fontWeight: 900, color: "#ffffff", letterSpacing: "-1px", lineHeight: 1 }}>
                  Blackbird UAV
                </h2>
                <span style={{ fontSize: 13, color: "#6ee7b7" }}>blackbirduav.ca ↗</span>
              </div>
              <p style={{ fontSize: 13, color: "#a7f3d0" }}>
                Software Developmer · Team of 6 · Live production site
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: "50%", border: "1.5px solid #10b98166", color: "#34d399", flexShrink: 0 }}>
              <FaExternalLinkAlt size={14} />
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", position: "relative" }}>
            {[
              { stat: "$12.5k", desc: "in sponsorships secured" },
              { stat: "6", desc: "developers" },
              { stat: "Live ↗", desc: "production site at blackbirduav.ca" },
            ].map((item) => (
              <div key={item.stat} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: "#34d399", letterSpacing: "-0.5px" }}>{item.stat}</span>
                <span style={{ fontSize: 11, color: "#6ee7b7" }}>{item.desc}</span>
              </div>
            ))}
          </div>

          {/* Description + tags */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12, position: "relative" }}>
            <p style={{ fontSize: 12.5, color: "#a7f3d0", lineHeight: 1.8, maxWidth: 680 }}>
              Built the full marketing and sponsorship website for Carleton&apos;s competitive UAV team from scratch —
              UI/UX design in Figma, component architecture in Next.js, and deployment on Vercel. The site represents
              the team to corporate sponsors and the public, and was a key driver in raising $12.5k in funding.
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["React", "Next.js", "TypeScript", "Figma", "Vercel"].map((t) => (
                <span key={t} style={{
                  fontSize: 11,
                  padding: "5px 11px",
                  backgroundColor: "#10b98120",
                  color: "#6ee7b7",
                  borderRadius: 6,
                  fontWeight: 600,
                  border: "1px solid #10b98133",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </a>

      {/* Other projects grid */}
      <div className="projects-grid">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bento"
            style={{
              ...base,
              background: p.accentBg,
              border: `1px solid ${p.accent}44`,
              padding: p.featured ? "32px" : "24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              gridColumn: p.featured ? "1 / -1" : undefined,
            }}
          >
            {/* top row */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
              <span style={{ fontSize: p.featured ? 44 : 32 }}>{p.emoji}</span>
              <div style={{ display: "flex", gap: 8 }}>
                <a href={p.github} style={iconBtn(p.accent)} target="_blank" rel="noreferrer" title="GitHub">
                  <FaGithub size={p.featured ? 14 : 13} />
                </a>
                {p.live && (
                  <a href={p.live} style={iconBtn(p.accent)} target="_blank" rel="noreferrer" title="Live">
                    <FaExternalLinkAlt size={11} />
                  </a>
                )}
              </div>
            </div>

            {/* badge */}
            {p.badge && (
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "5px 10px",
                backgroundColor: `${p.accent}20`,
                border: `1px solid ${p.accent}44`,
                borderRadius: 8,
                fontSize: 10.5,
                fontWeight: 700,
                color: p.accent,
                alignSelf: "flex-start",
              }}>
                {/^🏆|^🥈/.test(p.badge) ? <><FaTrophy size={9} /> {p.badge.replace(/^🏆 |^🥈 /, "")}</> : p.badge}
              </div>
            )}

            {/* content */}
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                <h2 style={{ fontSize: p.featured ? 24 : 18, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.4px" }}>{p.title}</h2>
                <span style={{ fontSize: 10.5, color: "#94a3b8", whiteSpace: "nowrap" as const }}>{p.period}</span>
              </div>
              <p style={{ fontSize: p.featured ? 13 : 12, color: "#475569", lineHeight: 1.75 }}>{p.description}</p>
            </div>

            {/* tags */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginTop: "auto" }}>
              {p.tags.map((t) => (
                <span key={t} style={tag(p.accent)}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function iconBtn(accent: string): React.CSSProperties {
  return {
    width: 32,
    height: 32,
    borderRadius: 8,
    border: `1px solid ${accent}44`,
    backgroundColor: `${accent}18`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: accent,
    textDecoration: "none",
    cursor: "pointer",
    flexShrink: 0,
  };
}

function tag(accent: string): React.CSSProperties {
  return {
    fontSize: 10.5,
    padding: "4px 9px",
    backgroundColor: `${accent}18`,
    color: accent,
    borderRadius: 6,
    fontWeight: 600,
    border: `1px solid ${accent}33`,
  };
}
