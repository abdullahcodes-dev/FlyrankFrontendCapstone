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
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-green-700"
            >
              CommuniNest
            </Link>

            <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link
                href="/"
                className="transition-colors hover:text-green-700"
              >
                Home
              </Link>

              <Link
                href="/features"
                className="transition-colors hover:text-green-700"
              >
                Features
              </Link>

              <Link
                href="/volunteers"
                className="transition-colors hover:text-green-700"
              >
                Volunteers
              </Link>

              <Link
                href="/events"
                className="transition-colors hover:text-green-700"
              >
                Events
              </Link>

              <Link
                href="/about"
                className="transition-colors hover:text-green-700"
              >
                About
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}