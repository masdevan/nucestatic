export default function Contact() {
  return (
    <main className="bg-white py-10 sm:py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Contact Nucestatic
        </h1>

        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            We welcome your questions, feedback, and inquiries about Nucestatic. Whether you're interested in our research, have a business inquiry, or want to learn more about our technology, please don't hesitate to reach out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                General Inquiries
              </h2>
              <p className="text-gray-700 mb-2">
                For general questions about Nucestatic, our research, or services:
              </p>
              <p className="mb-4">
                <a href="mailto:masdevansugiharta@gmail.com" className="block text-blue-600 hover:underline">
                  masdevansugiharta@gmail.com
                </a>
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Business Partnerships
              </h2>
              <p className="text-gray-700 mb-2">
                For business development, partnerships, or collaboration opportunities:
              </p>
              <p className="mb-4">
                <a href="mailto:masdevansugiharta@gmail.com" className="block text-blue-600 hover:underline">
                  masdevansugiharta@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Office Location
              </h2>
              <address className="text-gray-700 space-y-2">
                Jl. Raya Ampel<br />
                Ampel, Boyolali, Jawa Tengah 57352<br />
                Indonesia
              </address>

              <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-4">
                WhatsApp
              </h2>
              <p className="mb-4">
                <a href="tel:+6285728133473" className="block text-blue-600 hover:underline">
                  +62 857 2813 3473
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}