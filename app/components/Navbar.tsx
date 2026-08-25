import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
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

            <Link href="/about" className="hover:text-green-700">
              About
            </Link>

            <Link href="/events" className="hover:text-green-700">
              Events
            </Link>

            <Link href="/volunteers" className="hover:text-green-700">
              Volunteers
            </Link>
          </div>

          {/* Mobile navigation */}
          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}