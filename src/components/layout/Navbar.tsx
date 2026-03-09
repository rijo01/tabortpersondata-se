"use client";
import Link from "next/link";
import { useState } from "react";
import { TJANSTER, UPPLYSNINGAR } from "@/lib/tjanster";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropTjanst, setDropTjanst] = useState(false);
  const [dropUppl, setDropUppl] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5" style={{ background: "rgba(8,12,20,0.92)", backdropFilter: "blur(20px)" }}>
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="font-display font-black text-white text-sm tracking-tight whitespace-nowrap">
          tabortpersondata<span className="text-accent">.se</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 flex-1">

          {/* Tjänster dropdown */}
          <div className="relative" onMouseEnter={() => setDropTjanst(true)} onMouseLeave={() => setDropTjanst(false)}>
            <button className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 py-5">
              Tjänster <span className="text-xs">▾</span>
            </button>
            {dropTjanst && (
              <div className="absolute top-full left-0 w-72 glass rounded-xl p-2 shadow-2xl">
                {TJANSTER.map((t) => (
                  <Link key={t.slug} href={`/tjanster/${t.slug}`}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                    <span className="text-xl flex-shrink-0">{t.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-accent transition-colors">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.shortDesc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Upplysningar dropdown */}
          <div className="relative" onMouseEnter={() => setDropUppl(true)} onMouseLeave={() => setDropUppl(false)}>
            <button className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 py-5">
              Upplysningar <span className="text-xs">▾</span>
            </button>
            {dropUppl && (
              <div className="absolute top-full left-0 w-56 glass rounded-xl p-2 shadow-2xl">
                {UPPLYSNINGAR.map((u) => (
                  <Link key={u.slug} href={`/upplysningar/${u.slug}`}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/5 transition-colors group">
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-black flex-shrink-0 ${u.color}`}>{u.initial}</div>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{u.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/#priser" className="text-sm text-slate-400 hover:text-white transition-colors">Priser</Link>
          <Link href="/om-oss" className="text-sm text-slate-400 hover:text-white transition-colors">Om oss</Link>
          <Link href="/vanliga-fragor" className="text-sm text-slate-400 hover:text-white transition-colors">Vanliga frågor</Link>
        </div>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="https://app.tabortpersondata.se/logga-in" className="text-sm text-slate-400 hover:text-white transition-colors">
            Logga in
          </Link>
          <Link href="/#priser"
            className="bg-accent text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/20">
            Kom igång →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2 text-slate-400" onClick={() => setOpen(!open)}>
          <div className="w-5 space-y-1">
            <div className="h-0.5 bg-current transition-all" style={{ transform: open ? "rotate(45deg) translateY(6px)" : "" }} />
            <div className="h-0.5 bg-current transition-all" style={{ opacity: open ? 0 : 1 }} />
            <div className="h-0.5 bg-current transition-all" style={{ transform: open ? "rotate(-45deg) translateY(-6px)" : "" }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/5 px-5 py-4 space-y-3" style={{ background: "rgba(8,12,20,0.98)" }}>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 pt-2">Tjänster</div>
          {TJANSTER.map((t) => (
            <Link key={t.slug} href={`/tjanster/${t.slug}`} className="flex items-center gap-2 text-sm text-slate-300" onClick={() => setOpen(false)}>
              {t.icon} {t.name}
            </Link>
          ))}
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 pt-2">Upplysningar</div>
          {UPPLYSNINGAR.map((u) => (
            <Link key={u.slug} href={`/upplysningar/${u.slug}`} className="text-sm text-slate-300 block" onClick={() => setOpen(false)}>{u.name}</Link>
          ))}
          <div className="pt-2 space-y-2">
            <Link href="/#priser" className="block text-sm text-slate-300" onClick={() => setOpen(false)}>Priser</Link>
            <Link href="/om-oss" className="block text-sm text-slate-300" onClick={() => setOpen(false)}>Om oss</Link>
          </div>
          <Link href="/#priser" className="block w-full bg-accent text-white text-sm font-bold px-4 py-3 rounded-lg text-center mt-3" onClick={() => setOpen(false)}>
            Kom igång →
          </Link>
        </div>
      )}
    </nav>
  );
}
