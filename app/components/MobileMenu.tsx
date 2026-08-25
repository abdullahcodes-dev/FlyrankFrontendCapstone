"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
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
              href="/about"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 hover:bg-slate-50 hover:text-green-700"
            >
              About
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
    </>
  );
}