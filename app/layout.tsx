import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CommuniNest",
  description:
    "Connect with your community, report local issues, and take meaningful action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <header className="border-b border-slate-200 bg-white">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-700 text-sm font-bold text-white">
                C
              </span>

              <span className="text-lg font-bold tracking-tight text-slate-900">
                CommuniNest
              </span>
            </Link>

            <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 sm:flex">
              <Link href="/" className="hover:text-green-700">
                Home
              </Link>

              <Link href="/report" className="hover:text-green-700">
                Report an issue
              </Link>

              <Link href="/events" className="hover:text-green-700">
                Events
              </Link>

              <Link href="/volunteers" className="hover:text-green-700">
                Volunteers
              </Link>
            </div>

            <Link
              href="/report"
              className="rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800"
            >
              Report issue
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}