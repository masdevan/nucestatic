import Link from "next/link";

export default function ContactInfo() {
  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/pattern.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/60" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-start gap-20 md:gap-40 text-center md:text-center">
          <div className="w-full md:w-auto">
            <h3 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-8">
              Headquarters
            </h3>
            <div className="space-y-4 text-center">
              <p className="text-2xl font-bold text-white">
                Ampel
              </p>
              <p className="text-xl text-[#b6b6b6] leading-relaxed">
                Nucestatic<br />
                Jl. Raya Ampel<br />
                Ampel, Boyolali, Jawa Tengah 57352<br />
                Indonesia
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <h3 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-8">
              Connect
            </h3>
            <div className="space-y-4 text-center">
              <p className="text-2xl font-bold text-white">
                Boyolali
              </p>
              <p className="text-xl text-[#b6b6b6] leading-relaxed">
                Boyolali, Jawa Tengah 57311<br />
                Indonesia<br />
                +62 857 2813 3473
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}