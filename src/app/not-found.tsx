import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-32 text-center">
      <div className="font-display font-black text-8xl text-cream mb-4 tracking-tighter">404</div>
      <h1 className="font-display font-black text-3xl text-ink mb-3 tracking-tight">Sidan hittades inte</h1>
      <p className="text-mid mb-8">Den här sidan existerar inte eller har flyttats.</p>
      <Link href="/" className="bg-accent text-white font-bold text-sm px-5 py-2.5 rounded hover:bg-accent-dark transition-colors">
        Till startsidan →
      </Link>
    </div>
  );
}
