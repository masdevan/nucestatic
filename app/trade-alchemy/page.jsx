import Link from "next/link";
import PatternBackground from "@/components/PatternBackground";
import { concepts } from "@/data/trade-alchemy";

export const metadata = {
  title: "Trade Alchemy | Nucestatic",
  description: "Advanced research platform for quantitative trading with high-performance architecture and dynamic algorithm management.",
};

export default function TradeAlchemy() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <p className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-4">
          Advanced Research
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-8">
          Trade Alchemy
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We conduct our research through a new platform designed to be more advanced than the previous version of Infinity Bloom, with an adaptive, innovative approach that follows latest developments.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The platform is private and not accessible to the public. We consistently publish performance metrics and evaluations from conducted tests, maintaining the security and exclusivity of our underlying infrastructure.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-[#800000] p-10 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Private Infrastructure
              </h3>
              <p className="text-white/70 leading-relaxed">
                Our core systems are independently designed for high-performance and analytical accuracy. This exclusivity allows us to maintain the integrity of our proprietary research methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <p className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-4">
            Concepts
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-16">
            Technology Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {concepts.map((concept) => (
              <div key={concept.title} className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {concept.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {concept.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PatternBackground>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <p className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">
            Stay Updated
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8">
            Performance & Results
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
            While the system remains private, we share the value derived from our research process through regular performance evaluations.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </PatternBackground>
    </main>
  );
}
