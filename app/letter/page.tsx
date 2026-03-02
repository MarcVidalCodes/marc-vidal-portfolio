import Link from "next/link";
import { FaArrowLeft, FaDownload } from "react-icons/fa";

export default function LetterPage() {
  return (
    <main
      className="letter-main"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Minimal header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 24px",
          flexShrink: 0,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "6px 14px",
            backgroundColor: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(8px)",
            border: "1px solid #e2e8f0",
            borderRadius: 9,
            fontSize: 12,
            fontWeight: 600,
            color: "#374151",
            textDecoration: "none",
          }}
        >
          <FaArrowLeft size={10} /> Back
        </Link>

        <a
          href="/LetterOfRecommendation.pdf"
          download
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "6px 14px",
            background: "linear-gradient(135deg, #d97706, #b45309)",
            color: "#fff",
            borderRadius: 9,
            fontSize: 12,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          <FaDownload size={10} /> Download
        </a>
      </div>

      {/* PDF viewer area */}
      <div className="letter-pdf-wrapper">
        {/* Clipping shell — hides the browser PDF viewer's gray chrome */}
        <div className="letter-pdf-clip">
          <iframe
            src="/LetterOfRecommendation.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
            className="letter-pdf-iframe"
            title="Letter of Recommendation"
          />
        </div>

        {/* iOS fallback — shown only when iframe can't render PDF */}
        <noscript>
          <a href="/LetterOfRecommendation.pdf" target="_blank" rel="noreferrer"
            style={{ color: "#6366f1", fontSize: 14 }}>Open PDF ↗</a>
        </noscript>
      </div>
    </main>
  );
}
