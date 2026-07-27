import { privacySections } from "@/data/legal/privacy";
import { buildMetadata } from "@/data/seo";

export const metadata = buildMetadata("/privacy")

export default function PrivacyPolicy() {
  return (
    <main className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Last updated: April 5, 2026
        </p>
        {privacySections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
