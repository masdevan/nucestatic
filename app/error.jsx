"use client";

export default function Error({ reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-6xl font-black text-[#800000] mb-4">Error</h1>
        <p className="text-gray-600 mb-8">Something went wrong. Please try again.</p>
        <button
          onClick={() => reset()}
          className="px-8 py-4 bg-[#800000] text-white font-semibold rounded-lg hover:bg-[#6b0000] transition-colors cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
