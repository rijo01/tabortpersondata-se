"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display font-black text-ink text-base tracking-tight">
          tabortpersondata<span className="text-accent">.se</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><Link href="/ta-bort-dig-fran" className="text-sm font-medium text-mid hover:text-ink transition-colors">Tjänster</Link></li>
          <li><Link href="/gdpr" className="text-sm font-medium text-mid hover:text-ink transition-colors">GDPR-guider</Link></li>
          <li><Link href="/mallar" className="text-sm font-medium text-mid hover:text-ink transition-colors">Mallar</Link></li>
          <li><Link href="/#priser" className="text-sm font-medium text-mid hover:text-ink transition-colors">Priser</Link></li>
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/#priser" className="text-sm font-semibold text-mid hover:text-ink transition-colors">
            Logga in
          </Link>
          <Link
            href="/#priser"
            className="bg-accent text-white text-sm font-bold px-4 py-2 rounded hover:bg-accent-dark transition-colors"
          >
            Starta skyddet — 59 kr/mån →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          <div className="w-5 h-0.5 bg-ink mb-1 transition-all" style={{ transform: open ? "rotate(45deg) translateY(6px)" : "" }} />
          <div className="w-5 h-0.5 bg-ink mb-1 transition-all" style={{ opacity: open ? 0 : 1 }} />
          <div className="w-5 h-0.5 bg-ink transition-all" style={{ transform: open ? "rotate(-45deg) translateY(-6px)" : "" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-paper px-5 py-4 flex flex-col gap-4">
          <Link href="/ta-bort-dig-fran" className="text-sm font-medium text-ink" onClick={() => setOpen(false)}>Tjänster</Link>
          <Link href="/gdpr" className="text-sm font-medium text-ink" onClick={() => setOpen(false)}>GDPR-guider</Link>
          <Link href="/mallar" className="text-sm font-medium text-ink" onClick={() => setOpen(false)}>Mallar</Link>
          <Link href="/#priser" className="text-sm font-medium text-ink" onClick={() => setOpen(false)}>Priser</Link>
          <Link href="/#priser" className="bg-accent text-white text-sm font-bold px-4 py-2.5 rounded text-center" onClick={() => setOpen(false)}>
            Starta skyddet — 59 kr/mån →
          </Link>
        </div>
      )}
    </nav>
  );
}
