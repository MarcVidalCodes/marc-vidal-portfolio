import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDatabase, FaChartBar, FaCloud, FaJava } from "react-icons/fa";
import {
  SiPython, SiCplusplus, SiSharp, SiTypescript, SiJavascript, SiGo, SiHtml5, SiCss3,
  SiDotnet, SiNodedotjs, SiExpress, SiSocketdotio, SiReact, SiNextdotjs,
  SiMongodb, SiMysql, SiSupabase, SiFirebase,
  SiAmazonwebservices, SiGooglecloud, SiDocker, SiKubernetes, SiGit, SiGithubactions, SiJenkins, SiPostman,
} from "react-icons/si";

const base: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "22px",
  overflow: "hidden",
  position: "relative",
};

/* ─── HERO ───────────────────────────────────────────────── */
function HeroCard() {
  return (
    <div
      className="bento"
      style={{
        ...base,
        flex: 1.4,
        background: "linear-gradient(135deg, #eef2ff 0%, #fafafa 60%, #f0f9ff 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#6366f1,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>M</span>
        </div>
        <span style={{ fontSize: 11, color: "#94a3b8", letterSpacing: "0.12em", textTransform: "uppercase" as const, fontWeight: 500 }}>Portfolio</span>
      </div>

      <div>
        <h1 style={{ fontSize: 34, fontWeight: 800, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 4 }}>
          Marc Vidal
        </h1>
        <p style={{ fontSize: 15, fontWeight: 600, color: "#6366f1", marginBottom: 8, letterSpacing: "-0.3px" }}>
          Incoming Software Engineer @ Kinaxis
        </p>
        <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>
          A curious CS student at Carleton University
        </p>
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" as const }}>
        <a href="https://github.com/MarcVidalCodes" target="_blank" rel="noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", backgroundColor: "#0f172a", color: "#fff", borderRadius: 9, fontSize: 12, fontWeight: 600, textDecoration: "none" }}>
          <FaGithub size={12} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/marc-vidal-979148278/" target="_blank" rel="noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", backgroundColor: "#0a66c2", color: "#fff", borderRadius: 9, fontSize: 12, fontWeight: 600, textDecoration: "none" }}>
          <FaLinkedin size={12} /> LinkedIn
        </a>
        <a href="mailto:marcgavvid@gmail.com"
          style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", border: "1.5px solid #e2e8f0", color: "#374151", borderRadius: 9, fontSize: 12, fontWeight: 600, textDecoration: "none", backgroundColor: "#fff" }}>
          <FaEnvelope size={12} /> Email
        </a>
      </div>
    </div>
  );
}

/* ─── ABOUT ──────────────────────────────────────────────── */
function AboutCard() {
  return (
    <div className="bento" style={{ ...base, flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 18 }}>👋</span>
        <h2 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>About Me</h2>
      </div>
      <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.75 }}>
        Hi! I'm a Marc, a student passionate about all things tech. 
      </p>
      <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.75 }}>
        Currently, I am very interested in backend systems and modern cloud technologies. I am curious about DevOps and Platform Engineering, as well. 
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {[
          { e: "🐶", text: "My dog Hershey is a Shih Tzu × Maltese" },
          { e: "🏀", text: "Big NBA & NFL fan" },
          { e: "⚔️", text: "Favourite anime: Attack on Titan" },
          { e: "🍎", text: "I love to teach" },
          { e: "⛸️", text: "I skate the Rideau Canal every winter" },
        ].map(({ e, text }) => (
          <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 11.5, color: "#475569", lineHeight: 1.6 }}>
            <span style={{ flexShrink: 0 }}>{e}</span>
            <span>{text}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "auto", display: "flex", gap: 6, flexWrap: "wrap" as const }}>
        {["Seeking Summer 2027 COOP"].map((tag) => (
          <span key={tag} style={{ fontSize: 10.5, padding: "4px 10px", backgroundColor: "#f1f5f9", borderRadius: 20, color: "#64748b", fontWeight: 500 }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── SKILLS ─────────────────────────────────────────────── */
function SkillsCard() {
  // Each entry uses its real brand color. Deduplicated — one icon per technology.
  const skills = [
    // Languages
    { icon: <SiGo />,          label: "Go",              color: "#00ADD8" },
    { icon: <SiPython />,      label: "Python",          color: "#3776AB" },
    { icon: <SiCplusplus />,   label: "C/C++",           color: "#00599C" },
    { icon: <SiSharp />,      label: "C#",              color: "#512BD4" },
    { icon: <FaJava />,        label: "Java",            color: "#E76F00" },
    { icon: <SiTypescript />,  label: "TypeScript",      color: "#3178C6" },
    { icon: <SiJavascript />,  label: "JavaScript",      color: "#b8a000" },
    { icon: <SiHtml5 />,       label: "HTML",            color: "#E34F26" },
    { icon: <SiCss3 />,        label: "CSS",             color: "#1572B6" },
    // Frameworks
    { icon: <SiDotnet />,      label: "ASP.NET / .NET",  color: "#512BD4" },
    { icon: <SiNodedotjs />,   label: "Node.js",         color: "#339933" },
    { icon: <SiExpress />,     label: "Express",         color: "#555555" },
    { icon: <SiSocketdotio />, label: "Socket.io",       color: "#333333" },
    { icon: <SiReact />,       label: "React / RN",      color: "#087ea4" },
    { icon: <SiNextdotjs />,   label: "Next.js",         color: "#171717" },
    // Databases
    { icon: <FaDatabase />,    label: "SQL Server",      color: "#CC2927" },
    { icon: <SiMongodb />,     label: "MongoDB",         color: "#47A248" },
    { icon: <SiMysql />,       label: "MySQL",           color: "#4479A1" },
    { icon: <FaChartBar />,    label: "Power BI",        color: "#C28700" },
    { icon: <SiSupabase />,    label: "Supabase",        color: "#1a9e6b" },
    { icon: <SiFirebase />,    label: "Firebase",        color: "#E37400" },
    // Cloud & DevOps
    { icon: <SiAmazonwebservices />, label: "AWS",       color: "#FF9900" },
    { icon: <SiGooglecloud />, label: "GCP",             color: "#4285F4" },
    { icon: <SiDocker />,      label: "Docker",          color: "#2496ED" },
    { icon: <SiKubernetes />,  label: "Kubernetes",      color: "#326CE5" },
    { icon: <SiGit />,         label: "Git",             color: "#F05032" },
    { icon: <SiGithubactions />, label: "GitHub Actions",color: "#2088FF" },
    { icon: <SiJenkins />,     label: "Jenkins",         color: "#D24939" },
    { icon: <FaCloud />,       label: "Azure DevOps",    color: "#0078D4" },
    { icon: <SiPostman />,     label: "Postman",         color: "#FF6C37" },
  ];

  return (
    <div className="bento" style={{ ...base, flex: 1.6, display: "flex", flexDirection: "column", gap: 10, overflow: "hidden" }}>
      <h2 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", flexShrink: 0 }}>Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <span
            key={s.label}
            className="skill-chip"
            data-label={s.label}
            style={{ color: s.color }}
          >
            {s.icon}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── EXPERIENCE ─────────────────────────────────────────── */
function ExperienceCard() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "JSI — TPMO",
      period: "Sept 2025 – Dec 2025",
      location: "Kanata, ON",
      bullets: [
        "Built a Golang microservice with Jenkins & GitHub Actions CI/CD to extract GitHub Copilot metrics for 40+ engineering teams.",
        "Built an Azure DevOps extension (JS) to reconstruct historical sprint timelines for volatility analysis.",
        "Productized a Heuristic Burndown extension tracking actual vs assigned scope via Azure DevOps REST APIs.",
        "Automated dashboard auditing across 50+ sites with a Python pipeline generating Excel/Markdown reports, cutting hours to minutes.",
      ],
      color: "#6366f1",
      tags: ["Golang", "Python", "Azure DevOps", "Jenkins"],
    },
    {
      role: "Software Developer Intern",
      company: "DecisivEdge",
      period: "June 2025 – Aug 2025",
      location: "Markham, ON",
      bullets: [
        "Reduced B2B product search time by 71% (1.2s → 350ms) via a delta-refresh ETL pipeline and SQL Server Full-Text Search.",
        "Developed dynamic accounting filters and a real-time Samsara API driver reassignment feature for dispatch teams.",
        "Collaborated in an Agile team with senior executives; contributed to the company's AI R&D adoption guidelines.",
      ],
      color: "#3b82f6",
      tags: ["ASP.NET", "C#", "SQL Server", "LINQ"],
    },
  ];

  return (
    <div className="bento" style={{ ...base, height: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>Experience</h2>
        <span style={{ fontSize: 10.5, color: "#94a3b8" }}>{experiences.length} roles</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18, overflowY: "auto" as const, flex: 1 }}>
        {experiences.map((exp, i) => (
          <div key={i} style={{ display: "flex", gap: 12 }}>
            <div style={{ width: 3, borderRadius: 99, backgroundColor: exp.color, flexShrink: 0, alignSelf: "stretch" }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 12.5, fontWeight: 700, color: "#0f172a", marginBottom: 1 }}>{exp.role}</p>
              <p style={{ fontSize: 11, color: exp.color, fontWeight: 600, marginBottom: 2 }}>{exp.company} · {exp.period}</p>
              <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 3, marginBottom: 6 }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: 11, color: "#64748b", lineHeight: 1.6, display: "flex", gap: 6 }}>
                    <span style={{ color: exp.color, flexShrink: 0, marginTop: 1 }}>›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" as const }}>
                {exp.tags.map((t) => (
                  <span key={t} style={{ fontSize: 10, padding: "3px 8px", backgroundColor: `${exp.color}18`, color: exp.color, borderRadius: 5, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── PROJECTS CTA ───────────────────────────────────────── */
function ProjectsCard() {
  return (
    <Link href="/projects" style={{ textDecoration: "none", flex: 1, display: "flex" }}>
      <div
        className="bento"
        style={{
          flex: 1,
          borderRadius: 16,
          background: "linear-gradient(145deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
          border: "1px solid #4338ca44",
          padding: "22px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", width: 160, height: 160, borderRadius: "50%", background: "#6366f155", top: -50, right: -50, pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 90, height: 90, borderRadius: "50%", background: "#818cf833", bottom: 10, left: -20, pointerEvents: "none" }} />
        <span style={{ fontSize: 10, letterSpacing: "0.15em", color: "#a5b4fc", textTransform: "uppercase" as const, fontWeight: 600, position: "relative" }}>Explore</span>
        <div style={{ position: "relative" }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: "#ffffff", letterSpacing: "-1px", lineHeight: 1, marginBottom: 6 }}>PROJECTS</h2>
          <p style={{ fontSize: 11.5, color: "#c7d2fe", lineHeight: 1.6 }}>Apps, tools & experiments I&apos;ve shipped.</p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", position: "relative" }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", border: "1.5px solid #6366f1", display: "flex", alignItems: "center", justifyContent: "center", color: "#a5b4fc" }}>
            <FaArrowRight size={12} />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─── LETTER OF REC ──────────────────────────────────────── */
function LetterCard() {
  return (
    <Link href="/letter" style={{ textDecoration: "none", flex: 1, display: "flex" }}>
      <div
        className="bento"
        style={{
          flex: 1,
          borderRadius: 16,
          background: "linear-gradient(160deg, #1a1200 0%, #241a02 60%, #3b2a04 100%)",
          border: "1px solid #c9901833",
          padding: "22px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          cursor: "pointer",
          overflow: "hidden",
          position: "relative",
          gap: 0,
        }}
      >
        {/* Large decorative quotation marks in background */}
        <span style={{
          position: "absolute", right: 10, top: -4,
          fontSize: 130, fontFamily: "Georgia, serif",
          color: "#c9901812", lineHeight: 1,
          pointerEvents: "none", userSelect: "none" as const,
          letterSpacing: "-8px",
        }}>&ldquo;&rdquo;</span>

        {/* Corner bracket — top left */}
        <div style={{ position: "absolute", top: 14, left: 14, pointerEvents: "none" }}>
          <div style={{ width: 16, height: 2, backgroundColor: "#c9901850" }} />
          <div style={{ width: 2, height: 16, backgroundColor: "#c9901850" }} />
        </div>
        {/* Corner bracket — bottom right */}
        <div style={{ position: "absolute", bottom: 14, right: 14, pointerEvents: "none", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ width: 2, height: 16, backgroundColor: "#c9901840" }} />
          <div style={{ width: 16, height: 2, backgroundColor: "#c9901840", marginTop: 0 }} />
        </div>

        {/* Content — centered */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 8 }}>
          {/* Rule + label */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #c9901860, transparent)" }} />
            <p style={{ fontSize: 8, letterSpacing: "0.22em", color: "#a07828", textTransform: "uppercase" as const, fontWeight: 700, flexShrink: 0 }}>Letter of Recommendation</p>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(270deg, #c9901860, transparent)" }} />
          </div>

          {/* Pull quote */}
          <h2 style={{ fontSize: 16, fontWeight: 800, color: "#fbbf24", lineHeight: 1.35, textAlign: "center" as const, letterSpacing: "-0.2px" }}>
            &ldquo;Marc is a valuable<br />asset to any team.&rdquo;
          </h2>

          {/* Divider */}
          <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #c9901850, transparent)" }} />

          {/* Attribution */}
          <div style={{ textAlign: "center" as const }}>
            <p style={{ fontSize: 10.5, color: "#c09030", fontWeight: 600 }}>Michael Frayler, President</p>
            
            <p style={{ fontSize: 9.5, color: "#7a5e1a", marginTop: 1 }}>DecisivEdge Canada · 2025</p>
          </div>

          {/* CTA pill */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 12px", border: "1px solid #c9901840", borderRadius: 20, color: "#a07828", fontSize: 9.5, fontWeight: 600 }}>
              View Letter <FaArrowRight size={8} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <main
      className="page-main"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "4% 13%",
        gap: 10,
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="layout-row"
        style={{ display: "flex", gap: 10, flex: 1, minHeight: 0 }}
      >
        {/* ── LEFT SECTION ── */}
        <div
          className="left-section"
          style={{ flex: 3, display: "flex", flexDirection: "column", gap: 10, minHeight: 0 }}
        >
          {/* top row: Hero + About */}
          <div
            className="top-row"
            style={{ display: "flex", gap: 10, flex: 1, minHeight: 0 }}
          >
            <HeroCard />
            <AboutCard />
          </div>

          {/* bottom row: Skills + Projects + Letter */}
          <div
            className="bottom-row"
            style={{ display: "flex", gap: 10, flex: 1, minHeight: 0 }}
          >
            <SkillsCard />
            <ProjectsCard />
            <LetterCard />
          </div>
        </div>

        {/* ── EXPERIENCE (full height right column) ── */}
        <div
          className="right-col"
          style={{ flex: 1.1, minHeight: 0, display: "flex", flexDirection: "column" }}
        >
          <ExperienceCard />
        </div>
      </div>
    </main>
  );
}
