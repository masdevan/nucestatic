export default function PatternBackground({ opacity = "bg-black/70", children }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/pattern.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />
      <div className={`absolute inset-0 z-0 ${opacity}`} />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
