import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js API-first (SSR) • Demo",
  description: "Pages fetch API directly; Vercel-ready",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "12px 16px", borderBottom: "1px solid #eee" }}>
          <b style={{ color: "red" }}>API-first Demo</b>
          <nav style={{ display: "inline-block", marginLeft: 16 }}>
            <Link href="/" style={{ color: "red" }}>
              Home
            </Link>
            <span style={{ margin: "0 8px", color: "red" }}>|</span>
            <Link href="/users" style={{ color: "red" }}>
              Users
            </Link>
            <span style={{ margin: "0 8px", color: "red" }}>|</span>
            <Link href="/posts" style={{ color: "red" }}>
              Posts
            </Link>
            <span style={{ margin: "0 8px", color: "red" }}>|</span>
            <Link href="/profile" style={{ color: "red" }}>
              Profile
            </Link>
          </nav>
        </header>

        <main style={{ padding: 16 }}>{children}</main>

        <footer
          style={{ padding: 16, borderTop: "1px solid #eee", color: "red" }}
        >
          API-first • SSR • Vercel
        </footer>
      </body>
    </html>
  );
}
