import React from "react";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className="min-h-screen bg-base-200 p-6 flex justify-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-box p-6 space-y-6">
        {/* Job Title & Company Info */}
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold">Frontend Developer</h1>
          <p className="text-gray-600">
            at <span className="font-semibold">TechCorp Solutions</span>
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <div className="badge badge-primary">Full-Time</div>
            <div className="badge badge-secondary">Remote</div>
          </div>
        </div>

        {/* Job Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Job Description</h2>
          <p className="text-gray-700">
            We are looking for a skilled **Frontend Developer** to join our
            team. You will be responsible for building and maintaining web
            applications using **React.js, TailwindCSS, and DaisyUI**.
          </p>
        </div>

        {/* Responsibilities */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Develop and maintain UI components using **React & TailwindCSS**.
            </li>
            <li>Collaborate with backend developers to integrate APIs.</li>
            <li>Ensure the application is **responsive and accessible**.</li>
            <li>Optimize performance for a smooth user experience.</li>
          </ul>
        </div>

        {/* Requirements */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Requirements</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Experience with **React.js & JavaScript**.</li>
            <li>Familiarity with **TailwindCSS & DaisyUI**.</li>
            <li>Understanding of **REST APIs and state management**.</li>
            <li>Strong problem-solving skills and attention to detail.</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Benefits</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Competitive salary with performance bonuses.</li>
            <li>Fully remote work with flexible hours.</li>
            <li>Health insurance & paid leave.</li>
            <li>Growth opportunities & skill development programs.</li>
          </ul>
        </div>

        {/* Apply Button */}
        <div className="text-center">
          {!isApplied ? (
            <button className="btn btn-primary w-full">Apply Now</button>
          ) : (
            <button className="btn" disabled="disabled">
              Already Applied
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
