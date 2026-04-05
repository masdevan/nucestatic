import Image from "next/image";

export default function InfinityBloom() {
  return (
    <main className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Infinity Bloom - Terminal
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Last updated: April 5, 2026
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          1. Base Information
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Infinity Bloom Terminal is the first terminal developed as an experimental platform, built on the Python ecosystem. The system is relatively complex and still contains several limitations in its current stage.<br />
          Despite this, Infinity Bloom Terminal is available for free and is open-source. It supports a wide range of trading pairs, along with portfolio management, algorithm allocation and management, and integration with economic calendar data.
        </p>

        <Image src="/demonstration/demonstration_1.png" alt="Infinity Bloom Terminal" width={1400} height={600} className="rounded-lg my-10 w-full h-auto" />

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          2. Source Code
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The source code of Infinity Bloom Terminal is available on GitHub at the following link: <a href="https://github.com/masdevan/infinity-bloom-terminal-berg-automation" target="_blank" className="text-blue-600 hover:underline">Github Source</a>
        </p>

        <Image src="/demonstration/demonstration_2.png" alt="Infinity Bloom Terminal" width={1400} height={600} className="rounded-lg my-10 w-full h-auto" />

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          3. Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about this please contact us at: <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a>
        </p>
      </div>
    </main>
  );
}