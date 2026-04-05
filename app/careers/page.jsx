export default function Careers() {
  return (
    <main className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Careers at Nucestatic
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Last updated: April 5, 2026
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Join Our Team
        </h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Nucestatic is building the future of quantitative trading infrastructure. We're looking for passionate individuals who share our vision of democratizing access to sophisticated financial technology.
        </p>

        <div className="space-y-6">
          <div className="bg-[#76090e] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Quantitative Researcher
            </h3>
            <p className="text-sm text-white mb-2">Ampel, Boyolali (Remote-friendly)</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
              <li>Develop and implement alpha-generating strategies</li>
              <li>Conduct statistical analysis and model validation</li>
              <li>Collaborate with engineering team to productionize research</li>
              <li>Stay current with latest developments in ML and finance</li>
            </ul>
            <p className="mt-3"><a href="/contact" className="text-blue-400 hover:underline font-medium">Apply Now</a></p>
          </div>

          <div className="bg-[#76090e] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Software Engineer (Backend)
            </h3>
            <p className="text-sm text-white mb-2">Ampel, Boyolali (Remote-friendly)</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
              <li>Build and maintain high-performance trading infrastructure</li>
              <li>Develop APIs and data processing pipelines</li>
              <li>Ensure system reliability, scalability, and security</li>
              <li>Work with Python, and cloud technologies</li>
            </ul>
            <p className="mt-3"><a href="/contact" className="text-blue-400 hover:underline font-medium">Apply Now</a></p>
          </div>

          <div className="bg-[#76090e] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Data Scientist
            </h3>
            <p className="text-sm text-white mb-2">Ampel, Boyolali (Remote-friendly)</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
              <li>Analyze large financial datasets for patterns and insights</li>
              <li>Develop predictive models and forecasting tools</li>
              <li>Create visualizations and reports for stakeholders</li>
              <li>Ensure data quality and integrity throughout pipeline</li>
            </ul>
            <p className="mt-3"><a href="/contact" className="text-blue-400 hover:underline font-medium">Apply Now</a></p>
          </div>
        </div>

        <div className="pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Our Culture
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Nucestatic, we foster an environment of intellectual curiosity, technical excellence, and collaborative problem-solving. We value:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mt-4">
            <li><strong>Rigorous Thinking:</strong> We prioritize evidence-based decision making and continuous learning</li>
            <li><strong>Technical Excellence:</strong> We strive for clean, efficient, and maintainable code</li>
            <li><strong>Collaborative Spirit:</strong> We believe the best solutions emerge from diverse perspectives</li>
            <li><strong>Work-Life Balance:</strong> We respect personal time and promote sustainable work practices</li>
          </ul>
        </div>
      </div>
    </main>
  );
}