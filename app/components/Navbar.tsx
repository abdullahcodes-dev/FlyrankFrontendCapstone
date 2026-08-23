"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeMenu}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-700 text-sm font-bold text-white">
              C
            </span>

            <span className="text-lg font-bold tracking-tight text-slate-900">
              CommuniNest
            </span>
          </Link>

          {/* Desktop navigation */}
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

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 sm:hidden"
          >
            <span className="text-xl" aria-hidden="true">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-100 py-3 sm:hidden"
          >
            <div className="flex flex-col text-sm font-medium text-slate-600">
              <Link
                href="/"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 hover:bg-slate-50 hover:text-green-700"
              >
                Home
              </Link>

              <Link
                href="/report"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 hover:bg-slate-50 hover:text-green-700"
              >
                Report an issue
              </Link>

              <Link
                href="/events"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 hover:bg-slate-50 hover:text-green-700"
              >
                Events
              </Link>

              <Link
                href="/volunteers"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 hover:bg-slate-50 hover:text-green-700"
              >
                Volunteers
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}