import Link from "next/link";
import { UPPLYSNINGAR } from "@/lib/tjanster";

const STATS = [
  { value: "25+", label: "Tjänster täckta" },
  { value: "4,9/5", label: "i betyg på Reco" },
  { value: "13 dagar", label: "Genomsnittstid Google" },
  { value: "100%", label: "Automatiserat" },
];

const FEATURES = [
  "Vi döljer dina uppgifter",
  "Ta bort information från Google",
  "Dölj dig från upplysningssajter",
  "Ta bort telefonnummer online",
  "Bevakning och adresslarm",
  "Dark web & skydd mot dataläckor",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #0ea5e9 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-5 pt-16 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-semibold text-accent mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
              Originalet sedan 2024 — 4,9/5 i betyg
            </div>

            <h1 className="font-display font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
              Ta bort dina<br />
              uppgifter från<br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}>
                nätet — automatiskt
              </span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-[42ch] font-light">
              Vi bevakar dina uppgifter på 25+ upplysningssajter, tar bort sökträffar från Google och varnar dig direkt om de återpubliceras.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
              {FEATURES.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  {f}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/#priser"
                className="bg-accent text-white font-bold text-base px-6 py-3.5 rounded-xl hover:bg-accent-dark transition-all hover:-translate-y-0.5 glow-accent-sm">
                Dölj dina uppgifter →
              </Link>
              <Link href="/tjanster"
                className="glass text-white font-semibold text-base px-6 py-3.5 rounded-xl hover:bg-white/10 transition-all">
                Så funkar det
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="glass rounded-xl p-3 text-center">
                  <div className="font-display font-black text-white text-lg">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="relative">
            {/* Floating badge */}
            <div className="absolute -top-4 -right-2 z-10 glass-light rounded-xl px-3.5 py-2 text-xs font-bold text-emerald-400 shadow-xl animate-float hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              18 uppgifter borttagna idag
            </div>

            <div className="glass rounded-2xl overflow-hidden glow-accent animate-float">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 bg-white/5 rounded-md px-3 py-1 text-xs text-slate-500 font-mono">
                  app.tabortpersondata.se
                </div>
              </div>

              <div className="p-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Hej, Johan! 👋</div>
                    <div className="font-display font-bold text-white">Ditt skydd är aktivt</div>
                  </div>
                  <div className="glass-light rounded-xl px-3 py-1.5 text-xs font-bold text-accent">Pro · Aktivt</div>
                </div>

                {/* Alert cards */}
                <div className="space-y-2.5 mb-5">
                  {[
                    { name: "Ratsit.se", status: "Borttagen", color: "text-emerald-400", bg: "bg-emerald-400/10", init: "Ra", ic: "bg-red-900/40 text-red-300" },
                    { name: "Hitta.se",  status: "Borttagen", color: "text-emerald-400", bg: "bg-emerald-400/10", init: "Hi", ic: "bg-blue-900/40 text-blue-300" },
                    { name: "Merinfo.se",status: "Bearbetas…", color: "text-yellow-400", bg: "bg-yellow-400/10", init: "Me", ic: "bg-green-900/40 text-green-300" },
                    { name: "MrKoll.se", status: "Hittad", color: "text-red-400",     bg: "bg-red-400/10",     init: "Mr", ic: "bg-slate-700 text-slate-300" },
                  ].map((r) => (
                    <div key={r.name} className="flex items-center gap-3 glass rounded-xl p-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 ${r.ic}`}>{r.init}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-white">{r.name}</div>
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${r.bg} ${r.color}`}>{r.status}</span>
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div className="glass rounded-xl p-4">
                  <div className="flex justify-between text-sm mb-2.5">
                    <span className="text-slate-400 font-medium">Uppgifter borttagna</span>
                    <span className="text-emerald-400 font-bold">18 / 25</span>
                  </div>
                  <div className="bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-accent to-violet-500" style={{ width: "72%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-2 glass-light rounded-xl px-3.5 py-2 text-xs font-semibold shadow-xl hidden md:flex items-center gap-2 text-slate-300 animate-float" style={{ animationDelay: "0.5s" }}>
              🔄 Bevakning aktiv · månadsvis
            </div>
          </div>
        </div>
      </div>

      {/* Logos strip */}
      <div className="border-y border-white/5 py-4 overflow-hidden bg-white/[0.02]">
        <div className="flex items-center">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-600 whitespace-nowrap px-6 border-r border-white/5 mr-6 hidden md:block">
            Vi tar bort dig från
          </div>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-5 animate-scroll w-max">
              {[...UPPLYSNINGAR, ...UPPLYSNINGAR, ...UPPLYSNINGAR].map((u, i) => (
                <div key={i} className="glass rounded-lg px-3.5 py-1.5 text-xs font-bold text-slate-400 whitespace-nowrap">{u.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
