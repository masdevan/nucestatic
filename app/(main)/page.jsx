import Hero from "@/components/landing/Hero";
import ContactInfo from "@/components/landing/ContactInfo";
import JournalCta from "@/components/landing/JournalCta";
import { buildMetadata } from "@/data/seo";

export const metadata = buildMetadata("/")

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <ContactInfo />
      <JournalCta />
    </div>
  );
}
