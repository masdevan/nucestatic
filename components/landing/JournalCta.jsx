import Link from "next/link";

export default function JournalCta() {
  return (
    <section className="bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-8">
          Write Your Journal
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Keep a record of your thoughts, decisions, and discoveries in one place. A journal helps you stay organized, track your progress, and make better decisions over time.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-[#800000] text-white font-bold rounded-lg hover:bg-[#6b0000] transition-colors cursor-pointer"
        >
          Start Your Journal
        </Link>
      </div>
    </section>
  );
}
