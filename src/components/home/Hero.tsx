import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.07),transparent)] pointer-events-none" />

      <div className="relative text-center max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">
          Product Manager · Microsoft
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
          Rohin Chandra
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-lg mx-auto">
          Engineer turned PM. I build enterprise software at Microsoft — from HR SaaS to cloud storage. Harvard CS, previously SWE at LinkedIn.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
          >
            View Projects
            <ArrowRight size={15} />
          </Link>
          <Link
            href="mailto:rohinchandra@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:border-white/30 hover:text-white transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
