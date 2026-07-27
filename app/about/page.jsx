import Link from "next/link";
import PatternBackground from "@/components/PatternBackground";
import { pillars } from "@/data/about";

export const metadata = {
  title: "About | Nucestatic",
  description: "Building the future of asset management with machine learning, statistical modeling, and high-performance computing.",
};

export default function About() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <p className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-4">
          About
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-8">
          Building the Future of<br />Asset Management
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nucestatic is an automated asset management system that leverages advanced programming and algorithm-based calculation technologies. Independently designed and managed with a strong focus on efficiency, accuracy, and modern asset management.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As part of a cutting-edge research initiative, Nucestatic continues to evolve and improve, adapting to technological advancements and future needs. Our mission is to create sophisticated tools for quantitative research and systematic trading.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="border-l-2 border-[#800000] pl-8">
              <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                Intelligent, systematic financial technologies that deliver consistent performance through data, precision, and innovation.
              </p>
              <p className="text-xs font-bold tracking-widest text-[#800000] uppercase mt-6">
                Our Vision
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <p className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-4">
            Our Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-16">
            Built on Three Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar, index) => (
              <div key={pillar.title}>
                <span className="text-5xl font-black text-[#800000]/15">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PatternBackground>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <p className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">
            Our Commitment
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8 max-w-3xl">
            Your trust is our most valuable asset.
          </h2>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-12">
            We maintain the highest standards of data integrity, transparency, and ethical conduct in all our operations. We work diligently to earn and preserve your trust every day.
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
