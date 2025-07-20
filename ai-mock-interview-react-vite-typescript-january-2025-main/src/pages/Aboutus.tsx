import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
      <p className="text-lg leading-7">
        Welcome to <strong>AceMock</strong> — your smart interview preparation partner!
        Our platform empowers candidates to practice technical and behavioral interviews through realistic AI-driven mock sessions.
      </p>
      <p className="mt-4 text-lg leading-7">
        Whether you're a fresher or an experienced professional, AceMock helps you prepare better, anytime, anywhere.
      </p>
    </section>
  );
};

export default AboutUs;
