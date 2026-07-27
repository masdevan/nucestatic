import PatternBackground from "@/components/PatternBackground";
import { contactDetails } from "@/data/contact";

export default function ContactInfo() {
  return (
    <PatternBackground opacity="bg-black/60">
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-start gap-20 md:gap-40 text-center md:text-center">
          <div className="w-full md:w-auto">
            <h3 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-8">
              Headquarters
            </h3>
            <div className="space-y-4 text-center">
              <p className="text-2xl font-bold text-white">
                {contactDetails.headquarters.name}
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                {contactDetails.headquarters.lines.map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <h3 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-8">
              Connect
            </h3>
            <div className="space-y-4 text-center">
              <p className="text-2xl font-bold text-white">
                {contactDetails.connect.name}
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                {contactDetails.connect.lines.map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PatternBackground>
  );
}
