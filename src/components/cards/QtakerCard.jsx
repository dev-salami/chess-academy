"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

function QtakerCard({ onSubmit, isLoading, error, onClearError }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    skill: "beginner",
  });
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || '' : value
    }));
    
    // Clear field-specific error when user types
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear general error
    if (error && onClearError) {
      onClearError();
    }
  };

  // Parse error message to highlight specific fields
  useEffect(() => {
    if (error) {
      const newFieldErrors = {};
      
      // Handle object errors (like {email: "Enter a valid email address"})
      if (typeof error === 'object' && error !== null) {
        // Extract field errors from the object
        Object.keys(error).forEach(fieldName => {
          const errorValue = error[fieldName];
          if (Array.isArray(errorValue)) {
            newFieldErrors[fieldName] = errorValue[0]; // Take first error message
          } else if (typeof errorValue === 'string') {
            newFieldErrors[fieldName] = errorValue;
          }
        });
      } 
      // Handle string errors
      else if (typeof error === 'string') {
        // Check for email errors (most common)
        if (error.toLowerCase().includes('email')) {
          newFieldErrors.email = error;
        }
        // Check for name errors
        else if (error.toLowerCase().includes('name')) {
          newFieldErrors.name = error;
        }
        // Check for age errors
        else if (error.toLowerCase().includes('age')) {
          newFieldErrors.age = error;
        }
        // Check for skill errors
        else if (error.toLowerCase().includes('skill')) {
          newFieldErrors.skill = error;
        }
      }
      
      setFieldErrors(newFieldErrors);
    } else {
      // Clear all field errors when general error is cleared
      setFieldErrors({});
    }
  }, [error]);

  // Helper to convert error object to display string
  const getErrorDisplayText = (error) => {
    if (typeof error === 'string') return error;
    if (typeof error === 'object' && error !== null) {
      // Convert object to readable string
      const messages = [];
      Object.keys(error).forEach(key => {
        const errorValue = error[key];
        if (Array.isArray(errorValue)) {
          messages.push(`${key}: ${errorValue[0]}`);
        } else if (typeof errorValue === 'string') {
          messages.push(`${key}: ${errorValue}`);
        }
      });
      return messages.join(', ');
    }
    return 'An error occurred';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear all field errors on new submission
    setFieldErrors({});
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  // Helper function to get field error class and message
  const getFieldProps = (fieldName) => {
    const hasError = fieldErrors[fieldName];
    return {
      className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
        hasError 
          ? 'border-red-500 focus:ring-red-500' 
          : 'border-gray-300 focus:ring-green-500'
      }`,
      errorMessage: hasError ? fieldErrors[fieldName] : null
    };
  };

  const skills = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "expert", label: "Expert" },
  ];

  // Check if we have a general error (not associated with specific fields)
  const hasGeneralError = error && !Object.values(fieldErrors).some(err => err);

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
        {/* General Error Display (for errors not associated with specific fields) */}
        {hasGeneralError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <p className="text-sm font-medium">{getErrorDisplayText(error)}</p>
          </div>
        )}

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
              className={getFieldProps('name').className}
              placeholder="Enter your full name"
            />
            {getFieldProps('name').errorMessage && (
              <p className="mt-1 text-sm text-red-600">{getFieldProps('name').errorMessage}</p>
            )}
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
              className={getFieldProps('age').className}
              placeholder="Enter your age"
            />
            {getFieldProps('age').errorMessage && (
              <p className="mt-1 text-sm text-red-600">{getFieldProps('age').errorMessage}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={getFieldProps('email').className}
              placeholder="Enter your email"
            />
            {getFieldProps('email').errorMessage && (
              <p className="mt-1 text-sm text-red-600">{getFieldProps('email').errorMessage}</p>
            )}
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
              className={getFieldProps('skill').className}
            >
              {skills.map((skill) => (
                <option key={skill.value} value={skill.value}>
                  {skill.label}
                </option>
              ))}
            </select>
            {getFieldProps('skill').errorMessage && (
              <p className="mt-1 text-sm text-red-600">{getFieldProps('skill').errorMessage}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !formData.name || !formData.age || !formData.email}
          className={`w-full flex justify-center items-center gap-3 mt-6 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
            !isLoading && formData.name && formData.age && formData.email
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