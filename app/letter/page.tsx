import Link from "next/link";
import { FaArrowLeft, FaDownload } from "react-icons/fa";

export default function LetterPage() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Minimal header — floats over grid */}
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

      {/* PDF — fills available height, width constrained by A4 ratio */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 40px 20px",
          minHeight: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          src="/LetterOfRecommendation.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit"
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "calc((100vh - 80px) / 1.4142)",
            border: "none",
            borderRadius: 3,
            boxShadow: "0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)",
            display: "block",
          }}
          title="Letter of Recommendation"
        />
      </div>
    </main>
  );
}
