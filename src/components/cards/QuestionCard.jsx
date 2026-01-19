"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoRadioButtonOff, IoRadioButtonOn } from "react-icons/io5";
import { API_BASE_URL } from '../../lib/api';

function QuestionCard({ question, qtaker, onSubmitAnswer, isLoading }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [textAnswer, setTextAnswer] = useState("");
  useEffect(() => {
    setTextAnswer('');        // reset when question changes
    setSelectedOption(null);
  }, [question?.id]);

  if (!question) return null;
  
  
  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (question.question_type === "text") {
      if (textAnswer.trim() === "") return;
      onSubmitAnswer(textAnswer.trim());
      return
    }
    if (selectedOption && onSubmitAnswer) {
      onSubmitAnswer(selectedOption);
    }
  };

  const renderAnswerArea = () => {
    if (question.question_type === "text") {
      return (
        <div className="mb-6">

          <input type="text" name="answer" id="" value={textAnswer} onChange={(e) => setTextAnswer(e.target.value)} placeholder="type your answer here." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      )
    }

    return (
      <div className="space-y-3 mb-6">
        {question?.options?.map((option) => (
          <div
            key={option.id}
            className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all duration-200 ${selectedOption === option.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-gray-300'
              }`}
            onClick={() => handleOptionSelect(option.id)}
          >
            <div className="mr-3 mt-1 flex-shrink-0">
              {selectedOption === option.id ? (
                <IoRadioButtonOn size={20} className="text-blue-500" />
              ) : (
                <IoRadioButtonOff size={20} className="text-gray-400" />
              )}
            </div>
            <div
              className="text-gray-700 prose prose-sm max-w-none option-content"
              dangerouslySetInnerHTML={createMarkup(option.text)}
            />
          </div>
        ))}
      </div>
    );
  };


  const handleSkip = () => {
    if (onSubmitAnswer) {
      onSubmitAnswer(null);
    }
  };

  // Function to fix image URLs for the frontend
  const processHtmlContent = (htmlContent) => {
    if (!htmlContent) return '';

    // Your Django backend URL - adjust this to your actual backend URL
    const backendBaseUrl = API_BASE_URL.replace('/questionnaire/api', '');

    const processedHtml = htmlContent.replace(
      /src="\/media\/([^"]*)"/g,
      `src="${backendBaseUrl}/media/$1"`
    );

    return processedHtml;
  };

  const createMarkup = (htmlContent) => {
    const processedHtml = processHtmlContent(htmlContent);
    return { __html: processedHtml };
  };

  const canAdvance =
            question.question_type === 'text'
            ? textAnswer.trim()
            : selectedOption;

  return (
    <>
      <style>
        {`
          .question-content img,
          .option-content img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 8px 0;
            display: block;
          }
          
          .question-content p,
          .option-content p {
            margin-bottom: 8px;
          }
          
          .question-content ul,
          .option-content ul,
          .question-content ol,
          .option-content ol {
            margin-left: 20px;
            margin-bottom: 8px;
          }
          
          .question-content li,
          .option-content li {
            margin-bottom: 4px;
          }
          
          .question-content strong,
          .option-content strong {
            font-weight: 600;
          }
          
          .question-content em,
          .option-content em {
            font-style: italic;
          }
          
          .question-content,
          .option-content {
            overflow-wrap: break-word;
            word-wrap: break-word;
          }
          
          .question-content *,
          .option-content * {
            max-width: 100%;
          }
        `}
      </style>

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
              {/* <p className="text-xs opacity-90">Question {question?.placement}</p> */}
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="p-6">
          {/* Question Text with HTML support */}
          <div className="mb-6">
            <div
              className="text-lg font-semibold text-gray-800 mb-4 prose prose-lg max-w-none question-content"
              dangerouslySetInnerHTML={createMarkup(question?.text)}
            />
          </div>

          {/* Options with HTML support */}
          {renderAnswerArea()}

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            {/* <button
              onClick={handleSkip}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium text-sm"
              disabled={isLoading}
            >
              Skip Question
            </button> */}

            

            <button
              onClick={handleSubmit}
              disabled={isLoading || !canAdvance}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${canAdvance && !isLoading
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >

              {/* <button
              onClick={handleSubmit}
              disabled={
                isLoading ||
                (question.question_type === 'text' ? !textAnswer.trim() : !selectedOption)
              }
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${selectedOption && !isLoading
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            > */}
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
    </>
  );
}

export default QuestionCard;