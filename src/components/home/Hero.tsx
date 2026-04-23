import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="mx-auto max-w-5xl px-6 py-20 w-full">
        <div className="flex flex-col-reverse gap-12 sm:flex-row sm:items-center sm:justify-between">
          {/* Text content */}
          <div className="flex-1 max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
              Product Manager
            </p>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
              Hi, I&apos;m Chandra Rohin
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              I build products that people love — from discovery to launch. Specializing in B2B SaaS, consumer mobile, and 0→1 product development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Download Resume
                <Download size={16} />
              </Link>
            </div>
          </div>

          {/* Avatar placeholder */}
          <div className="flex-shrink-0 flex justify-center sm:justify-end">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
              <span className="text-6xl text-blue-300 font-bold select-none">CR</span>
            </div>
          </div>
        </div>

        {/* Skills strip */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Discovery & Research", sub: "User interviews, synthesis" },
            { label: "Roadmapping", sub: "Strategy, prioritization" },
            { label: "Analytics", sub: "SQL, Amplitude, Mixpanel" },
            { label: "Execution", sub: "Agile, cross-functional" },
          ].map(({ label, sub }) => (
            <div key={label} className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-sm font-semibold text-gray-800">{label}</p>
              <p className="text-xs text-gray-500 mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
