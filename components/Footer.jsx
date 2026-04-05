export default function Footer() {
  return (
    <footer className="bg-white border-t h-[70px] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} NuceStatic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}