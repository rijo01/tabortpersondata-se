const STEPS = [
  {
    num: "1",
    title: "Registrering",
    body: "Välj ett paket och registrera dig. Du får ett bekräftelsemail med inloggningsuppgifter direkt.",
    icon: "📋",
  },
  {
    num: "2",
    title: "Borttagning",
    body: "Logga in och dölj dina uppgifter från upplysningssajter och Google med ett klick.",
    icon: "🗑️",
  },
  {
    num: "3",
    title: "Bevaka uppgifter",
    body: "Vi övervakar kontinuerligt och varnar dig direkt om dina uppgifter återpubliceras.",
    icon: "📡",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-5">
      <div className="text-center mb-14">
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Hur det funkar</div>
        <h2 className="font-display font-black text-white text-4xl md:text-5xl tracking-tight">
          Kom igång på 3 minuter
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-[52px] left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        {STEPS.map((step, i) => (
          <div key={i} className="glass rounded-2xl p-8 text-center relative group hover:glow-accent-sm transition-all">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
              {step.icon}
            </div>
            <div className="font-display font-black text-accent text-sm uppercase tracking-wider mb-2">
              Steg {step.num}
            </div>
            <h3 className="font-display font-bold text-white text-xl mb-3">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
