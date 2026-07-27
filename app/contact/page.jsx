import Link from "next/link";
import PatternBackground from "@/components/PatternBackground";
import { contactDetails } from "@/data/contact";

export const metadata = {
  title: "Contact | Nucestatic",
  description: "Get in touch with Nucestatic for inquiries about our quantitative research and trading infrastructure.",
};

export default function Contact() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <p className="text-xs font-bold tracking-widest text-[#800000] uppercase mb-4">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          We welcome your questions, feedback, and inquiries. Whether you&apos;re interested in our research, have a business inquiry, or want to learn more about our technology, please reach out.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="p-8 border border-gray-100 rounded-2xl hover:border-[#800000]/20 transition-colors">
            <div className="w-10 h-10 bg-[#800000]/5 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-500 text-sm mb-6">For general and business inquiries:</p>
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-[#800000] font-bold hover:underline break-all"
            >
              {contactDetails.email}
            </a>
          </div>

          <div className="p-8 border border-gray-100 rounded-2xl hover:border-[#800000]/20 transition-colors">
            <div className="w-10 h-10 bg-[#800000]/5 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-500 text-sm mb-6">Fast response for urgent matters:</p>
            <a
              href={contactDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#800000] font-bold hover:underline"
            >
              {contactDetails.phone}
            </a>
          </div>

          <div className="p-8 border border-gray-100 rounded-2xl hover:border-[#800000]/20 transition-colors">
            <div className="w-10 h-10 bg-[#800000]/5 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-500 text-sm mb-6">Our headquarters in Indonesia:</p>
            <address className="not-italic text-gray-900 font-bold">
              {contactDetails.headquarters.lines.slice(1).join(", ")}
            </address>
          </div>
        </div>
      </section>

      <PatternBackground>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            Ready to collaborate?
          </h2>
          <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto">
            Join us in building the next generation of trading infrastructure.
          </p>
          <div>
            <Link
              href="/careers"
              className="inline-block px-10 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              View Careers
            </Link>
          </div>
        </div>
      </PatternBackground>
    </main>
  );
}
