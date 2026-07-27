import ContactInfo from "@/components/ContactInfo";
import Hero from "@/components/Hero";
import { buildMetadata } from "@/data/seo";

export const metadata = buildMetadata("/")

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <ContactInfo />
    </div>
  );
}