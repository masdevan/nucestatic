import Link from "next/link";
import PageReveal from "@/components/PageReveal";

const positions = [
  {
    title: "Quantitative Researcher",
    location: "Ampel, Boyolali (Remote-friendly)",
    tasks: [
      "Develop and implement alpha-generating strategies",
      "Conduct statistical analysis and model validation",
      "Collaborate with engineering team to productionize research",
      "Stay current with latest developments in ML and finance",
    ],
  },
  {
    title: "Software Engineer (Backend)",
    location: "Ampel, Boyolali (Remote-friendly)",
    tasks: [
      "Build and maintain high-performance trading infrastructure",
      "Develop APIs and data processing pipelines",
      "Ensure system reliability, scalability, and security",
      "Work with Python, and cloud technologies",
    ],
  },
  {
    title: "Data Scientist",
    location: "Ampel, Boyolali (Remote-friendly)",
    tasks: [
      "Analyze large financial datasets for patterns and insights",
      "Develop predictive models and forecasting tools",
      "Create visualizations and reports for stakeholders",
      "Ensure data quality and integrity throughout pipeline",
    ],
  },
];

const values = [
  {
    title: "Rigorous Thinking",
    desc: "We prioritize evidence-based decision making and continuous learning.",
  },
  {
    title: "Technical Excellence",
    desc: "We strive for clean, efficient, and maintainable code.",
  },
  {
    title: "Collaborative Spirit",
    desc: "We believe the best solutions emerge from diverse perspectives.",
  },
  {
    title: "Work-Life Balance",
    desc: "We respect personal time and promote sustainable work practices.",
  },
];

export default function Careers() {
  return (
    <main className="bg-white">
      <PageReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <p className="reveal-badge text-xs font-bold tracking-widest text-[#800000] uppercase mb-4">
            Careers
          </p>
          <h1 className="reveal-title text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Join Nucestatic
          </h1>
          <p className="reveal-desc text-lg text-gray-600 max-w-2xl leading-relaxed">
            We&apos;re building the future of quantitative trading infrastructure. We&apos;re looking for passionate individuals who share our vision of democratizing access to sophisticated financial technology.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <div className="space-y-6">
            {positions.map((pos) => (
              <div
                key={pos.title}
                className="reveal-item border border-gray-100 rounded-xl p-8 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#800000] uppercase tracking-widest mb-2">
                      {pos.location}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {pos.title}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                      {pos.tasks.map((task) => (
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
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <p className="reveal-badge text-xs font-bold tracking-widest text-white/50 uppercase mb-4">
              Our Culture
            </p>
            <h2 className="reveal-title text-3xl md:text-5xl font-black text-white tracking-tight mb-20">
              What We Value
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
              {values.map((v) => (
                <div key={v.title} className="reveal-item group">
                  <div className="w-12 h-1 bg-white/30 mb-6 transition-all duration-300 group-hover:w-20 group-hover:bg-[#800000]" />
                  <h3 className="text-xl font-bold text-white mb-4">
                    {v.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageReveal>
    </main>
  );
}