import React from "react";

const Services: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Mock Interviews</h3>
          <p>Real-time AI mock interviews to help you prepare for tech and HR rounds.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Feedback & Reports</h3>
          <p>Detailed feedback with scoring, strengths, and areas of improvement.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Interview Questions Bank</h3>
          <p>Access curated questions based on companies, roles, and experience levels.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
