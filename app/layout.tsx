import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marc Vidal – Portfolio",
  description: "Portfolio of Marc Vidal, software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grid-bg" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
