import Link from "next/link";

const STATUSES = [
  { name: "Ratsit.se", sub: "Adress, telefon, inkomst", status: "removed", init: "Ra", color: "bg-red-50 text-red-700" },
  { name: "Hitta.se", sub: "Adress och kartor", status: "removed", init: "Hi", color: "bg-blue-50 text-blue-700" },
  { name: "Merinfo.se", sub: "Bostadsuppgifter", status: "processing", init: "Me", color: "bg-green-50 text-green-700" },
  { name: "Eniro.se", sub: "Telefonnummer", status: "found", init: "En", color: "bg-yellow-50 text-yellow-700" },
  { name: "UC / Kreditinfo", sub: "Kreditupplysning", status: "removed", init: "UC", color: "bg-violet-50 text-violet-700" },
];

const STATUS_LABEL: Record<string, { label: string; cls: string }> = {
  removed: { label: "Borttagen ✓", cls: "bg-success-soft text-success" },
  processing: { label: "Bearbetas…", cls: "bg-warning-soft text-warning" },
  found: { label: "Hittad", cls: "bg-danger-soft text-danger" },
};

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)]">
      {/* Left */}
      <div>
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-accent-soft text-accent text-xs font-bold uppercase tracking-widest px-3.5 py-2 rounded mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
          GDPR-skydd & automatisk datarensning
        </div>

        <h1 className="font-display font-black text-ink text-5xl md:text-6xl leading-[1.0] tracking-tighter mb-6">
          Ditt namn ska<br />
          inte finnas<br />
          <em className="not-italic relative text-accent">
            på nätet
            <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" preserveAspectRatio="none">
              <path d="M0 5 Q50 1 100 5 Q150 9 200 5" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.35" />
            </svg>
          </em>
        </h1>

        <p className="text-mid text-lg leading-relaxed mb-8 max-w-[44ch] font-light">
          Vi söker automatiskt igenom 25+ svenska datatjänster, skickar juridiskt korrekta opt-out-brev och bevakar att dina personuppgifter förblir borttagna — varje månad.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <Link
            href="/#priser"
            className="bg-accent text-white font-display font-bold text-base px-6 py-3.5 rounded hover:bg-accent-dark transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 inline-flex items-center gap-2"
          >
            Starta skyddet — 59 kr/mån
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/ta-bort-dig-fran"
            className="bg-transparent text-ink font-display font-semibold text-base px-6 py-3.5 rounded border border-border hover:border-ink hover:bg-cream transition-all inline-flex items-center gap-2"
          >
            Se alla tjänster
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex items-center gap-3">
          <div className="flex">
            {["EL", "MK", "AS", "PJ"].map((i, idx) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-paper bg-cream flex items-center justify-center text-xs font-bold text-mid"
                style={{ marginLeft: idx > 0 ? "-8px" : "0" }}
              >
                {i}
              </div>
            ))}
          </div>
          <p className="text-sm text-mid">
            <strong className="text-ink font-semibold">1 200+</strong> användare har redan raderat sina uppgifter
          </p>
        </div>
      </div>

      {/* Right — Dashboard card */}
      <div className="relative">
        {/* Floating badges */}
        <div className="absolute -top-4 -right-4 z-10 bg-success-soft text-success border border-green-200 rounded-xl px-3.5 py-2 text-xs font-bold shadow-lg animate-float hidden md:flex items-center gap-1.5">
          ✓ 18 uppgifter borttagna
        </div>

        <div className="bg-white rounded-xl border border-border shadow-2xl shadow-black/8 animate-float overflow-hidden">
          {/* Card header */}
          <div className="px-5 py-4 border-b border-border flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-mid font-medium flex-1">tabortpersondata.se — Ditt konto</span>
          </div>

          <div className="p-5">
            <div className="text-xs font-bold uppercase tracking-widest text-mid mb-4">
              Senaste genomsökning · 9 mars 2026
            </div>

            <div className="space-y-2">
              {STATUSES.map((s) => (
                <div key={s.name} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-paper transition-colors">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 ${s.color}`}>
                    {s.init}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-ink">{s.name}</div>
                    <div className="text-xs text-mid">{s.sub}</div>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${STATUS_LABEL[s.status].cls}`}>
                    {STATUS_LABEL[s.status].label}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress */}
            <div className="mt-5 pt-5 border-t border-border">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-ink">Uppgifter borttagna</span>
                <span className="text-success font-bold">18 av 25</span>
              </div>
              <div className="bg-cream h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-success to-emerald-400 rounded-full"
                  style={{ width: "72%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-4 -left-4 z-10 bg-white border border-border rounded-xl px-3.5 py-2 text-xs font-semibold shadow-lg hidden md:flex items-center gap-1.5 text-ink">
          🔄 Bevakning aktiv · uppdateras månadsvis
        </div>
      </div>
    </section>
  );
}
