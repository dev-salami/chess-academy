"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

function QtakerCard({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    skill: "beginner",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || '' : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const skills = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "expert", label: "Expert" },
  ];

  return (
    <div className="rounded-xl w-full max-w-md mx-auto bg-white shadow-lg">
      {/* Header */}
      <div className="bg-green-600 text-white p-6 rounded-t-xl">
        <div className="flex items-center gap-3">
          <IoPerson size={24} />
          <div>
            <h2 className="font-semibold text-xl">Chess Skill Assessment</h2>
            <p className="text-sm opacity-90 mt-1">Start your chess journey</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6">
        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>

          {/* Age Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age *
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="1"
              max="120"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your age"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email (optional)"
            />
          </div>

          {/* Skill Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chess Skill Level *
            </label>
            <select
              name="skill"
              value={formData.skill}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            >
              {skills.map((skill) => (
                <option key={skill.value} value={skill.value}>
                  {skill.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !formData.name || !formData.age}
          className={`w-full flex justify-center items-center gap-3 mt-6 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
            !isLoading && formData.name && formData.age
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {isLoading ? (
            "Creating Assessment..."
          ) : (
            <>
              <span>Start Assessment</span>
              <FaArrowRight size={16} />
            </>
          )}
        </button>

        {/* Info Text */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            * Assessment will evaluate your chess knowledge
          </p>
        </div>
      </form>
    </div>
  );
}

export default QtakerCard;