import Link from "next/link";
import { TJANSTER, UPPLYSNINGAR } from "@/lib/tjanster";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-2">
      <div className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display font-black text-white text-sm block mb-3">
              tabortpersondata<span className="text-accent">.se</span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Vi hjälper privatpersoner att skydda sin integritet online. Automatisk radering från 25+ datatjänster.
            </p>
            <p className="text-xs text-slate-600">tabortpersondata.se drivs av Alpha Data AB</p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Tjänsten</h3>
            <ul className="space-y-2">
              {TJANSTER.map((t) => (
                <li key={t.slug}><Link href={`/tjanster/${t.slug}`} className="text-xs text-slate-500 hover:text-white transition-colors">{t.name}</Link></li>
              ))}
              <li><Link href="/foretag" className="text-xs text-slate-500 hover:text-white transition-colors">För företag</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Upplysningar</h3>
            <ul className="space-y-2">
              {UPPLYSNINGAR.map((u) => (
                <li key={u.slug}><Link href={`/upplysningar/${u.slug}`} className="text-xs text-slate-500 hover:text-white transition-colors">{u.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Företaget</h3>
            <ul className="space-y-2">
              {[["Om oss","/om-oss"],["Blogg","/blogg"],["Press","/press"],["Samarbete","/samarbete"]].map(([l,h]) => (
                <li key={h}><Link href={h} className="text-xs text-slate-500 hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Hjälpmedel</h3>
            <ul className="space-y-2">
              {[["Support","/support"],["Vanliga frågor","/vanliga-fragor"],["Kontakt","/kontakt"],["Logga in","https://app.tabortpersondata.se"]].map(([l,h]) => (
                <li key={h}><Link href={h} className="text-xs text-slate-500 hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-slate-600">© 2026 tabortpersondata.se — Alla rättigheter förbehållna</p>
          <div className="flex gap-4 flex-wrap">
            {[["Allmänna villkor","/allmanna-villkor"],["Integritetspolicy","/integritetspolicy"],["Cookiepolicy","/cookiepolicy"]].map(([l,h]) => (
              <Link key={h} href={h} className="text-xs text-slate-600 hover:text-slate-400 transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
