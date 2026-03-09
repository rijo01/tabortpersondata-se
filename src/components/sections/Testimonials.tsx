const REVIEWS = [
  { name: "Joe A",           date: "2025-04-18", text: "Bra tjänst men framförallt grymt bra kundservice!", stars: 5 },
  { name: "Patricia H",      date: "2025-03-18", text: "Jag är supernöjd, 5 stjärnor till er!", stars: 5 },
  { name: "Linn R",          date: "2025-03-17", text: "Tjänsten är enkel, användarvänlig, värd pengarna!", stars: 5 },
  { name: "Jacob A",         date: "2025-03-13", text: "Kan absolut rekommendera!", stars: 5 },
  { name: "Ida W",           date: "2025-03-13", text: "Jag är avindexerad från Google! Tack!", stars: 5 },
  { name: "Francois F",      date: "2025-03-12", text: "Ett seriöst intryck & ett gott bemötande. Grymt jobbat!", stars: 5 },
  { name: "Hanna Lovisa",    date: "2025-03-04", text: "Förnyade precis min prenumeration, är supernöjd!", stars: 5 },
  { name: "Malik H",         date: "2025-02-11", text: "Smidigt och effektivt", stars: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <div className="text-accent text-2xl mb-3">★★★★★</div>
          <h2 className="font-display font-black text-white text-4xl tracking-tight mb-2">Riktigt nöjda kunder</h2>
          <p className="text-slate-400">4,9/5 i betyg av tusentals kunder</p>
        </div>

        {/* Scrolling reviews */}
        <div className="overflow-hidden">
          <div className="flex gap-5 animate-scroll w-max">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <div key={i} className="glass rounded-2xl p-6 w-72 flex-shrink-0">
                <div className="flex items-center gap-1 text-yellow-400 text-sm mb-3">
                  {"★".repeat(r.stars)}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-sm font-semibold">{r.name}</div>
                    <div className="text-slate-500 text-xs">{r.date}</div>
                  </div>
                  <div className="text-xs text-accent font-bold">Reco ★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
