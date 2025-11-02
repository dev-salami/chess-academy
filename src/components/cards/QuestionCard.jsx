"use client";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoRadioButtonOff, IoRadioButtonOn } from "react-icons/io5";

function QuestionCard({ question, qtaker, onSubmitAnswer, isLoading }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (selectedOption && onSubmitAnswer) {
      onSubmitAnswer(selectedOption);
    }
  };

  const handleSkip = () => {
    // Logic to skip to next question
    if (onSubmitAnswer) {
      onSubmitAnswer(null); // or implement skip logic
    }
  };

  return (
    <div className="rounded-xl w-full max-w-2xl mx-auto bg-white shadow-lg">
      {/* Header with user and progress info */}
      <div className="bg-blue-600 text-white p-4 rounded-t-xl">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg">Skill Assessment</h2>
            <p className="text-sm opacity-90">Candidate: {qtaker?.name}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">{qtaker?.skill}</p>
            <p className="text-xs opacity-90">Question {question?.placement}</p>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="p-6">
        {/* Question Text */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {question?.text}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question?.options?.map((option) => (
            <div
              key={option.id}
              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                selectedOption === option.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handleOptionSelect(option.id)}
            >
              <div className="mr-3">
                {selectedOption === option.id ? (
                  <IoRadioButtonOn size={20} className="text-blue-500" />
                ) : (
                  <IoRadioButtonOff size={20} className="text-gray-400" />
                )}
              </div>
              <span className="text-gray-700">{option.text}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleSkip}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium text-sm"
            disabled={isLoading}
          >
            Skip Question
          </button>
          
          <button
            onClick={handleSubmit}
            disabled={!selectedOption || isLoading}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
              selectedOption && !isLoading
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              "Submitting..."
            ) : (
              <>
                <span>Next Question</span>
                <FaArrowRightLong size={16} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-gray-50 px-6 py-3 rounded-b-xl border-t">
        <div className="flex justify-between text-xs text-gray-500">
          <span>Assessment in Progress</span>
          <span>Do not close this window</span>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;