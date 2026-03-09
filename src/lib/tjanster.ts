export interface Tjanst {
  slug: string;
  name: string;
  shortDesc: string;
  desc: string;
  icon: string;
  color: string;
  features: string[];
}

export const TJANSTER: Tjanst[] = [
  {
    slug: "dolj-dina-uppgifter",
    name: "Dölj dina uppgifter",
    shortDesc: "Ta bort dig från alla upplysningssajter",
    desc: "Vi tar bort dina personuppgifter från Ratsit, Hitta.se, Merinfo, Mrkoll, Eniro och 20+ andra svenska datatjänster. Automatiskt och löpande.",
    icon: "👤",
    color: "bg-blue-50 text-blue-700",
    features: ["Automatisk borttagning", "25+ tjänster täckta", "Månadsbevakning", "Länkgaranti"],
  },
  {
    slug: "avindexering",
    name: "Google Avindexering",
    shortDesc: "Ta bort sökresultat om dig från Google",
    desc: "Vi skickar GDPR-förfrågningar till Google och begär borttagning av sökresultat som innehåller dina personuppgifter. Genomsnittstid: 13 dagar.",
    icon: "🔍",
    color: "bg-red-50 text-red-700",
    features: ["Google Search", "Bing & DuckDuckGo", "Bildresultat", "Löpande bevakning"],
  },
  {
    slug: "kolla-om-du-blivit-hackad",
    name: "Dark Web & Dataläckor",
    shortDesc: "Kolla om dina uppgifter läckt på dark web",
    desc: "Vi scannar kontinuerligt över 15 miljarder läckta konton på dark web och varnar dig omedelbart om dina uppgifter dyker upp i en läcka.",
    icon: "🕵️",
    color: "bg-gray-800 text-gray-100",
    features: ["15 mdr+ konton scannade", "Realtidsvarningar", "E-post & lösenordsläckor", "Åtgärdsguide"],
  },
  {
    slug: "id-skydd",
    name: "ID-Skydd",
    shortDesc: "Bli varnad om någon försöker använda din identitet",
    desc: "Vi övervakar om någon försöker ta lån, genomföra köp eller ändra adress i ditt namn. Du får en varning direkt så du kan agera innan skadan sker.",
    icon: "🪪",
    color: "bg-emerald-50 text-emerald-700",
    features: ["Lånevarning", "Adressändringslarm", "Kortbedrägeriskydd", "Snabb respons"],
  },
  {
    slug: "bevaka-uppgifter",
    name: "Bevakning",
    shortDesc: "Realtidsövervakning av dina personuppgifter",
    desc: "Datatjänster publicerar löpande om uppgifter. Vi bevakar dygnet runt och agerar automatiskt om din information återpubliceras.",
    icon: "📡",
    color: "bg-purple-50 text-purple-700",
    features: ["24/7 bevakning", "Push-notiser", "Automatisk återradering", "Månadsrapport"],
  },
  {
    slug: "adresslarm",
    name: "Adresslarm",
    shortDesc: "Bli varnad om din adress dyker upp online",
    desc: "Speciellt larm som triggar om din bostadsadress publiceras på nya sajter eller i nya sammanhang online. Viktigt för dig som lever under hot.",
    icon: "🔔",
    color: "bg-orange-50 text-orange-700",
    features: ["Adressbevakning", "Omedelbar notis", "Historik", "Eskaleringshjälp"],
  },
];

export interface Upplysning {
  slug: string;
  name: string;
  url: string;
  desc: string;
  initial: string;
  color: string;
}

export const UPPLYSNINGAR: Upplysning[] = [
  { slug: "mrkoll",      name: "MrKoll.se",      url: "mrkoll.se",      desc: "Personprofiler och bolagsengagemang",    initial: "Mr", color: "bg-slate-100 text-slate-700" },
  { slug: "ratsit",      name: "Ratsit.se",       url: "ratsit.se",      desc: "Adress, telefon, inkomstuppgifter",      initial: "Ra", color: "bg-red-100 text-red-700" },
  { slug: "hitta",       name: "Hitta.se",        url: "hitta.se",       desc: "Adress, kartor och kontaktuppgifter",   initial: "Hi", color: "bg-blue-100 text-blue-700" },
  { slug: "eniro",       name: "Eniro.se",        url: "eniro.se",       desc: "Telefonnummer och adressuppgifter",     initial: "En", color: "bg-yellow-100 text-yellow-700" },
  { slug: "upplysning",  name: "Upplysning.se",   url: "upplysning.se",  desc: "Kreditinfo och betalningshistorik",     initial: "Up", color: "bg-orange-100 text-orange-700" },
  { slug: "merinfo",     name: "Merinfo.se",      url: "merinfo.se",     desc: "Bostadsuppgifter och ägarhistorik",     initial: "Me", color: "bg-green-100 text-green-700" },
  { slug: "birthday",    name: "Birthday.se",     url: "birthday.se",    desc: "Födelsedag och folkbokföringsdata",     initial: "Bi", color: "bg-pink-100 text-pink-700" },
];
