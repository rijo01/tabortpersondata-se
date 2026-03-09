export interface TjanstInfo {
  slug: string;
  name: string;
  url: string;
  category: "personregister" | "kreditupplysning" | "foretagsinfo" | "sociala";
  description: string;
  svartighet: "Enkel" | "Medel" | "Avancerad";
  tid: string;
  color: string; // tailwind bg color
  initial: string;
}

export const TJANSTER_LIST: TjanstInfo[] = [
  { slug: "ratsit", name: "Ratsit.se", url: "https://ratsit.se", category: "personregister", description: "Adress, telefon, inkomst och folkbokföring", svartighet: "Enkel", tid: "5 min", color: "bg-red-50 text-red-700", initial: "Ra" },
  { slug: "hitta-se", name: "Hitta.se", url: "https://hitta.se", category: "personregister", description: "Adress, kartor och kontaktuppgifter", svartighet: "Enkel", tid: "5 min", color: "bg-blue-50 text-blue-700", initial: "Hi" },
  { slug: "merinfo", name: "Merinfo.se", url: "https://merinfo.se", category: "personregister", description: "Bostadsuppgifter och ägarhistorik", svartighet: "Enkel", tid: "5 min", color: "bg-green-50 text-green-700", initial: "Me" },
  { slug: "eniro", name: "Eniro.se", url: "https://eniro.se", category: "personregister", description: "Telefonnummer och adressuppgifter", svartighet: "Enkel", tid: "5 min", color: "bg-yellow-50 text-yellow-700", initial: "En" },
  { slug: "mrkoll", name: "Mrkoll.se", url: "https://mrkoll.se", category: "personregister", description: "Personprofiler och bolagsengagemang", svartighet: "Medel", tid: "10 min", color: "bg-purple-50 text-purple-700", initial: "Mr" },
  { slug: "upplysning-se", name: "Upplysning.se", url: "https://upplysning.se", category: "kreditupplysning", description: "Kreditupplysningar och betalningshistorik", svartighet: "Medel", tid: "10 min", color: "bg-orange-50 text-orange-700", initial: "Up" },
  { slug: "uc", name: "UC / Kreditinfo", url: "https://uc.se", category: "kreditupplysning", description: "Kreditupplysning och betalningsanmärkningar", svartighet: "Avancerad", tid: "15 min", color: "bg-violet-50 text-violet-700", initial: "UC" },
  { slug: "proff-se", name: "Proff.se", url: "https://proff.se", category: "foretagsinfo", description: "Bolagsuppgifter och styrelseposter", svartighet: "Enkel", tid: "5 min", color: "bg-teal-50 text-teal-700", initial: "Pr" },
  { slug: "allabolag", name: "Allabolag.se", url: "https://allabolag.se", category: "foretagsinfo", description: "Årsredovisningar och bolagsdata", svartighet: "Medel", tid: "10 min", color: "bg-cyan-50 text-cyan-700", initial: "Ab" },
  { slug: "foretagsfakta", name: "Foretagsfakta.se", url: "https://foretagsfakta.se", category: "foretagsinfo", description: "Kreditinfo och bolagsuppgifter", svartighet: "Medel", tid: "10 min", color: "bg-sky-50 text-sky-700", initial: "Ff" },
  { slug: "birthday-se", name: "Birthday.se", url: "https://birthday.se", category: "personregister", description: "Födelsedag och adressuppgifter", svartighet: "Enkel", tid: "5 min", color: "bg-pink-50 text-pink-700", initial: "Bi" },
  { slug: "creditsafe", name: "Creditsafe", url: "https://creditsafe.com", category: "kreditupplysning", description: "Företags- och personkredituppgifter", svartighet: "Avancerad", tid: "20 min", color: "bg-indigo-50 text-indigo-700", initial: "Cs" },
];
