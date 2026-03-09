import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-32 text-center">
      <div className="font-display font-black text-9xl text-white/5 mb-4 tracking-tighter">404</div>
      <h1 className="font-display font-black text-white text-3xl mb-3">Sidan hittades inte</h1>
      <p className="text-slate-400 mb-8">Den här sidan existerar inte eller har flyttats.</p>
      <Link href="/" className="bg-accent text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-accent-dark transition-colors">
        Till startsidan →
      </Link>
    </div>
  );
}
