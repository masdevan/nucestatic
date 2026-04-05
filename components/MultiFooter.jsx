import Link from "next/link";

export default function MultiFooter() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex-shrink-0">
                <img
                  src="/logo/logo.png"
                  alt="Nucestatic Logo"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <p className="mt-4 text-sm text-gray-500 max-w-sm leading-relaxed">
              Quantitative research and systematic trading infrastructure
              built from Ampel, Boyolali. Designed for precision,
              scalability, and long-term performance.
            </p>
          </div>

           <div>
             <h3 className="text-gray-900 text-sm uppercase tracking-widest mb-4">
               Company
             </h3>
             <ul className="space-y-3 text-sm">
               <li><a href="/about" className="hover:text-gray-900 transition">About</a></li>
               <li><a href="/careers" className="hover:text-gray-900 transition">Careers</a></li>
               <li><a href="/contact" className="hover:text-gray-900 transition">Contact</a></li>
             </ul>
           </div>

          <div>
            <h3 className="text-gray-900 text-sm uppercase tracking-widest mb-4">
              Research
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/quant-lab" className="hover:text-gray-900 transition">Quant Lab</a></li>
              <li><a href="/infinity-bloom" className="hover:text-gray-900 transition">Infinity Bloom</a></li>
              <li><a href="/trade-alchemy" className="hover:text-gray-900 transition">Trade Alchemy</a></li>
            </ul>
          </div>

           <div>
             <h3 className="text-gray-900 text-sm uppercase tracking-widest mb-4">
               Legal
             </h3>
             <ul className="space-y-3 text-sm">
               <li><a href="/privacy" className="hover:text-gray-900 transition">Privacy Policy</a></li>
               <li><a href="/terms" className="hover:text-gray-900 transition">Terms of Service</a></li>
               <li><a href="/dmca" className="hover:text-gray-900 transition">DMCA</a></li>
             </ul>
           </div>

        </div>
      </div>
    </footer>
  );
}