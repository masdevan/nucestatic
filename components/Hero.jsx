import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-white pb-36">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-125 h-125 rounded-full bg-[#800000]/5" />
        <div className="absolute bottom-24 -right-20 w-100 h-100 rounded-full bg-[#800000]/5" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-32">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight leading-[0.95] mb-10">
          <span className="block">NUCESTATIC</span>
          <span className="block text-[#800000]">ECOSYSTEM</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-14 leading-relaxed">
          Advanced algorithmic infrastructure for automated asset management. Engineered for precision, scalability, and long-term performance.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/trade-alchemy"
            className="px-8 py-4 bg-[#800000] text-white font-semibold rounded-lg hover:bg-[#6b0000] transition-colors cursor-pointer"
          >
            Get Started
          </Link>
          <Link
            href="/infinity-bloom"
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border border-gray-200 hover:border-[#800000] hover:text-[#800000] transition-colors cursor-pointer"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
