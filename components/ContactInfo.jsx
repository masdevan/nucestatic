export default function ContactInfo() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: "url('/pattern.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "300px",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-start space-y-16 sm:space-y-0 sm:space-x-10 py-12">
          
          <div className="text-xl text-[#b6b6b6] text-center sm:text-left">
            <strong className="text-white">Ampel</strong><br />
            Nucestatic<br />
            Jl. Raya Ampel<br />
            Ampel, Boyolali, Jawa Tengah 57352<br />
            Indonesia<br />
          </div>

          <div className="text-xl text-[#b6b6b6] text-center sm:text-left">
            <strong className="text-white">Boyolali</strong><br />
            Jl. Boyolali - Solo<br />
            Boyolali, Jawa Tengah 57311<br />
            Indonesia<br />
            +62 857 2813 3473
          </div>

        </div>
      </div>
    </div>
  );
}