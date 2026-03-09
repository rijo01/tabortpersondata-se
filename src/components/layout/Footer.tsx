import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-mid border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-display font-black text-white text-base tracking-tight block mb-3">
              tabortpersondata<span className="text-accent">.se</span>
            </Link>
            <p className="text-sm leading-relaxed text-mid">
              GDPR-skydd för svenska medborgare. Vi tar bort dina personuppgifter från 25+ datatjänster — automatiskt.
            </p>
          </div>

          {/* Tjänster */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Tjänster</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ta-bort-dig-fran/ratsit" className="hover:text-white transition-colors">Ta bort från Ratsit</Link></li>
              <li><Link href="/ta-bort-dig-fran/hitta-se" className="hover:text-white transition-colors">Ta bort från Hitta.se</Link></li>
              <li><Link href="/ta-bort-dig-fran/merinfo" className="hover:text-white transition-colors">Ta bort från Merinfo</Link></li>
              <li><Link href="/ta-bort-dig-fran/eniro" className="hover:text-white transition-colors">Ta bort från Eniro</Link></li>
              <li><Link href="/ta-bort-dig-fran" className="hover:text-white transition-colors">Alla tjänster →</Link></li>
            </ul>
          </div>

          {/* Guider */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">GDPR-guider</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/gdpr/ratt-till-radering" className="hover:text-white transition-colors">Rätten till radering</Link></li>
              <li><Link href="/gdpr/klagomal-imy" className="hover:text-white transition-colors">Klaga till IMY</Link></li>
              <li><Link href="/mallar" className="hover:text-white transition-colors">GDPR-mallar</Link></li>
              <li><Link href="/#priser" className="hover:text-white transition-colors">Priser & planer</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Övrigt</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/om-oss" className="hover:text-white transition-colors">Om oss</Link></li>
              <li><Link href="/integritetspolicy" className="hover:text-white transition-colors">Integritetspolicy</Link></li>
              <li><Link href="/anvandarvillkor" className="hover:text-white transition-colors">Användarvillkor</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-xs">© 2026 tabortpersondata.se — Alla rättigheter förbehållna</p>
          <p className="text-xs">Betalning via <span className="text-white">Stripe</span> · Apple Pay · Klarna · Kort</p>
        </div>
      </div>
    </footer>
  );
}
