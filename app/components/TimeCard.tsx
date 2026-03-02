"use client";

import { useEffect, useState } from "react";

function formatTime(date: Date, timeZone: string) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  });
}

function getTZAbbr(timeZone: string): string {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "short",
    timeZone,
  });
  const parts = formatter.formatToParts(new Date());
  return parts.find((p) => p.type === "timeZoneName")?.value ?? "";
}

const CARD_STYLE: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  borderRadius: "12px",
  padding: "16px 20px",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "10px",
};

export default function TimeCard() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const devTZ = "Europe/Rome";
  const userTZ =
    typeof Intl !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : "America/New_York";

  const devTime = now ? formatTime(now, devTZ) : "--:-- AM";
  const userTime = now ? formatTime(now, userTZ) : "--:-- AM";
  const devAbbr = now ? getTZAbbr(devTZ) : "CET";
  const userAbbr = now ? getTZAbbr(userTZ) : "EST";

  function splitTime(t: string) {
    const match = t.match(/^(\d+:\d+)\s*(AM|PM)$/);
    return match ? { hm: match[1], ampm: match[2] } : { hm: t, ampm: "" };
  }

  const dev = splitTime(devTime);
  const usr = splitTime(userTime);

  return (
    <div style={CARD_STYLE}>
      <div>
        <p style={{ fontSize: "11px", color: "#aaa", marginBottom: "4px", fontStyle: "italic" }}>
          my time
        </p>
        <p style={{ fontSize: "30px", fontWeight: 700, color: "#111", lineHeight: 1, letterSpacing: "-1px" }}>
          {dev.hm}
          <span style={{ fontSize: "13px", color: "#999", fontWeight: 400, marginLeft: "8px", letterSpacing: 0 }}>
            {dev.ampm} {devAbbr}
          </span>
        </p>
      </div>
      <div>
        <p style={{ fontSize: "11px", color: "#aaa", marginBottom: "4px", fontStyle: "italic" }}>
          your time
        </p>
        <p style={{ fontSize: "30px", fontWeight: 700, color: "#111", lineHeight: 1, letterSpacing: "-1px" }}>
          {usr.hm}
          <span style={{ fontSize: "13px", color: "#999", fontWeight: 400, marginLeft: "8px", letterSpacing: 0 }}>
            {usr.ampm} {userAbbr}
          </span>
        </p>
      </div>
    </div>
  );
}
