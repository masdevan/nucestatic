export default function Footer() {
  return (
    <footer className="bg-white pt-8 pb-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-medium text-gray-400 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} NuceStatic. Independently Engineered.
        </p>
      </div>
    </footer>
  );
}