const STEPS = [
  {
    number: "01",
    icon: "🔍",
    title: "Vi söker igenom nätet",
    body: "Direkt efter registrering skannar vi automatiskt 25+ svenska datatjänster och identifierar exakt var dina personuppgifter finns publicerade — namn, adress, telefon, inkomst och mer.",
  },
  {
    number: "02",
    icon: "✉️",
    title: "Vi skickar opt-out-brev",
    body: "Vi genererar och skickar juridiskt korrekta GDPR-begäran om radering (artikel 17) till varje tjänst. Breven är anpassade per mottagare med rätt kontaktperson och referensnummer.",
  },
  {
    number: "03",
    icon: "🛡️",
    title: "Vi bevakar månadsvis",
    body: "Personuppgifter dyker upp igen — datatjänster hämtar löpande ny data från folkbokföringen. Vi kontrollerar varje månad och skickar nya begäran automatiskt utan att du behöver göra något.",
  },
];

export default function HowItWorks() {
  return (
    <section id="hur" className="py-24 max-w-7xl mx-auto px-5">
      <div className="mb-12">
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Hur det fungerar</div>
        <h2 className="font-display font-black text-ink text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-xs">
          Tre steg till ett rent digitalt fotavtryck
        </h2>
        <p className="text-mid text-lg font-light max-w-[50ch] leading-relaxed">
          Ingen juridisk expertis krävs. Vi sköter allt — från att hitta dina uppgifter till att säkerställa att de förblir borttagna.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
        {STEPS.map((step, idx) => (
          <div key={idx} className="bg-paper hover:bg-white transition-colors p-10 group">
            <div className="font-display font-black text-6xl text-cream leading-none mb-6 tracking-tighter group-hover:text-border transition-colors">
              {step.number}
            </div>
            <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center text-2xl mb-5">
              {step.icon}
            </div>
            <h3 className="font-display font-bold text-xl text-ink mb-3 tracking-tight">{step.title}</h3>
            <p className="text-mid text-sm leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
