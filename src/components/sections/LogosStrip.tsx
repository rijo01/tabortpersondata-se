const LOGOS = [
  "Ratsit.se", "Hitta.se", "Merinfo.se", "Eniro.se", "Upplysning.se",
  "Mrkoll.se", "Allabolag.se", "Birthday.se", "Proff.se", "Creditsafe",
  "Foretagsfakta.se", "Bisnode", "UC AB",
];

export default function LogosStrip() {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <div className="border-y border-border bg-cream overflow-hidden py-4">
      <div className="flex items-center gap-0">
        <div className="text-xs font-bold uppercase tracking-widest text-mid whitespace-nowrap px-5 border-r border-border mr-5 py-1 hidden md:block">
          Vi tar bort dig från
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex gap-6 animate-scroll-logos w-max">
            {doubled.map((name, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded px-3.5 py-1.5 text-xs font-bold text-mid whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
