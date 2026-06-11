import Link from "next/link";
import PageReveal from "@/components/PageReveal";

const concepts = [
  {
    title: "High-Performance Architecture",
    desc: "Modern system design focused on extreme scalability and processing speed.",
  },
  {
    title: "Multi-Platform Integration",
    desc: "Seamless support for diverse data sources and flexible integration layers.",
  },
  {
    title: "Dynamic Algorithm Management",
    desc: "Efficient allocation, real-time monitoring, and continuous optimization.",
  },
  {
    title: "Risk-Managed Portfolios",
    desc: "Structured asset management with granular and measurable risk control.",
  },
];

export default function TradeAlchemy() {
  return (
    <main className="bg-white">
      <PageReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <p className="reveal-badge text-xs font-bold tracking-widest text-[#800000] uppercase mb-4">
            Advanced Research
          </p>
          <h1 className="reveal-title text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-8">
            Trade Alchemy
          </h1>
          <div className="reveal-item grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
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
            <p className="reveal-badge text-xs font-bold tracking-widest text-[#800000] uppercase mb-4">
              Concepts
            </p>
            <h2 className="reveal-title text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-16">
              Technology Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {concepts.map((c) => (
                <div key={c.title} className="reveal-item bg-white p-8 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {c.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/pattern.jpg')",
              backgroundRepeat: "repeat",
              backgroundSize: "300px",
            }}
          />
          <div className="absolute inset-0 z-0 bg-black/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <p className="reveal-badge text-xs font-bold tracking-widest text-white/50 uppercase mb-4">
              Stay Updated
            </p>
            <h2 className="reveal-title text-3xl md:text-5xl font-black text-white tracking-tight mb-8">
              Performance & Results
            </h2>
            <p className="reveal-desc text-lg text-white/60 max-w-2xl mx-auto mb-12">
              While the system remains private, we share the value derived from our research process through regular performance evaluations.
            </p>
            <div className="reveal-item">
              <Link 
                href="/contact"
                className="inline-block px-10 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </PageReveal>
    </main>
  );
}