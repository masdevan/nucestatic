import Image from "next/image";
import Link from "next/link";
import PatternBackground from "@/components/PatternBackground";
import { features } from "@/data/infinity-bloom";
import { buildMetadata } from "@/data/seo";

export const metadata = buildMetadata("/infinity-bloom")

export default function InfinityBloom() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <p className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-4">
          Product
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
          Infinity Bloom
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-[#800000] mb-8">
          Terminal
        </p>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          The first terminal developed as an experimental platform, built on the Python ecosystem. Available for free and open-source.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="border border-gray-200 rounded-2xl overflow-hidden mb-20">
          <div className="aspect-[21/9] relative bg-gray-900">
            <Image
              src="/demonstration/demonstration_1.png"
              alt="Infinity Bloom Terminal"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-4">
              Overview
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Base Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Infinity Bloom Terminal is a relatively complex system developed as an experimental platform. While it still contains several limitations in its current stage, it offers powerful features for quantitative trading.
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#800000]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="aspect-[16/10] relative bg-gray-900">
              <Image
                src="/demonstration/demonstration_2.png"
                alt="Infinity Bloom Terminal Code"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-10">
          <p className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-4">
            Open Source
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-6">
            Source Code
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
            The source code is available on GitHub. Feel free to explore, contribute, and build upon our work.
          </p>
          <a
            href="https://github.com/masdevan/infinity-bloom-terminal-berg-automation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#800000] text-white font-bold rounded-lg hover:bg-[#6b0000] transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </section>

      <PatternBackground>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            Questions?
          </h2>
          <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto">
            Get in touch if you have any questions about Infinity Bloom Terminal.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </PatternBackground>
    </main>
  );
}
