import Link from "next/link";
import PatternBackground from "@/components/PatternBackground";
import { positions, values } from "@/data/careers";

export const metadata = {
  title: "Careers | Nucestatic",
  description: "Join Nucestatic in building the future of quantitative trading infrastructure.",
};

export default function Careers() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <p className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-4">
          Careers
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
          Join Nucestatic
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          We&apos;re building the future of quantitative trading infrastructure. We&apos;re looking for passionate individuals who share our vision of democratizing access to sophisticated financial technology.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="space-y-6">
          {positions.map((position) => (
            <div
              key={position.title}
              className="border border-gray-100 rounded-xl p-8 hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                <div className="flex-1">
                  <p className="text-xs font-bold text-[#800000] uppercase tracking-widest mb-2">
                    {position.location}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {position.title}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                    {position.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-3 text-gray-600 text-sm">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#800000] shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="shrink-0 pt-6 md:pt-0">
                  <Link
                    href="/contact"
                    className="inline-block px-10 py-4 bg-[#800000] text-white text-sm font-bold rounded-lg hover:bg-[#6b0000] transition-colors cursor-pointer"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PatternBackground>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <p className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">
            Our Culture
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-20">
            What We Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {values.map((value) => (
              <div key={value.title} className="group">
                <div className="w-12 h-1 bg-white/30 mb-6 transition-all duration-300 group-hover:w-20 group-hover:bg-[#800000]" />
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PatternBackground>
    </main>
  );
}
