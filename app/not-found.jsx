import Link from "next/link";

export const metadata = {
  title: "404 - Not Found | Nucestatic",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-8xl font-black text-[#800000] mb-4">404</h1>
        <p className="text-gray-600 mb-8">Page not found.</p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[#800000] text-white font-semibold rounded-lg hover:bg-[#6b0000] transition-colors cursor-pointer"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
