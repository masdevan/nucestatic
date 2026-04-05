import ContactInfo from "@/components/ContactInfo";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30 flex flex-col items-center justify-center">
        <p className="text-2xl text-gray-700 text-center">
          Nucestatic is an automated asset management system that leverages advanced programming and algorithm-based calculation technologies. It is independently designed and managed by an individual, with a strong focus on efficiency, accuracy, and ease of modern asset management. As part of a cutting-edge research initiative, Nucestatic continues to evolve and improve, adapting to technological advancements and future needs.
        </p>
      </div>
      <ContactInfo />
    </div>
  );
}
