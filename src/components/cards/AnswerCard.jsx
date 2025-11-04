


"use client";
import React from "react";
import { FaArrowRight, FaCheck, FaXmark } from "react-icons/fa6";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

function AnswerCard({
    answer,
    correctAnswer,
    question,
    nextQuestion,
    score,
    qtaker,
    onNextQuestion,
    isLoading
}) {
    const isCorrect = answer?.correct;

    // More robust check for nextQuestion
    const hasNextQuestion = nextQuestion &&
        Object.keys(nextQuestion).length > 0 &&
        nextQuestion.id;

    // Debug output
    // console.log("AnswerCard - nextQuestion:", nextQuestion);
    // console.log("AnswerCard - hasNextQuestion:", hasNextQuestion);

    return (
        <div className="rounded-xl w-full max-w-2xl mx-auto bg-white shadow-lg">
            {/* Header with result indicator */}
            <div className={`p-6 rounded-t-xl ${isCorrect ? "bg-green-600" : "bg-red-600"
                } text-white`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {isCorrect ? (
                            <IoCheckmarkCircle size={28} className="text-white" />
                        ) : (
                            <IoCloseCircle size={28} className="text-white" />
                        )}
                        <div>
                            <h2 className="font-semibold text-xl">
                                {isCorrect ? "Correct Answer! 🎉" : "Incorrect Answer"}
                            </h2>
                            <p className="text-sm opacity-90 mt-1">
                                {qtaker?.name} • {qtaker?.skill}
                            </p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-semibold">Score</p>
                        <p className="text-2xl font-bold">{score}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Question Review */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Question:
                    </h3>
                    <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border">
                        {question?.text}
                    </p>
                </div>

                {/* Your Answer */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Your Answer:
                    </h3>
                    <div className={`flex items-center p-4 rounded-lg border-2 ${isCorrect
                            ? "border-green-500 bg-green-50"
                            : "border-red-500 bg-red-50"
                        }`}>
                        <div className="mr-3">
                            {isCorrect ? (
                                <FaCheck size={20} className="text-green-600" />
                            ) : (
                                <FaXmark size={20} className="text-red-600" />
                            )}
                        </div>
                        <span className="text-gray-700">{answer?.text}</span>
                    </div>
                </div>

                {/* Correct Answer (only show if wrong) */}
                {!isCorrect && correctAnswer && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Correct Answer:
                        </h3>
                        <div className="flex items-center p-4 rounded-lg border-2 border-green-500 bg-green-50">
                            <div className="mr-3">
                                <FaCheck size={20} className="text-green-600" />
                            </div>
                            <span className="text-gray-700">{correctAnswer.text}</span>
                        </div>
                    </div>
                )}

                {/* Explanation or Additional Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-800 mb-2">
                        {isCorrect ? "Great job! 🚀" : "Keep learning! 💪"}
                    </h4>
                    <p className="text-blue-700 text-sm">
                        {isCorrect
                            ? "You're mastering this concept. Ready for the next challenge?"
                            : "This is a learning opportunity. Review this concept and try again!"
                        }
                    </p>
                </div>

                {/* Next Button with better conditional */}
                <div className="flex justify-end">
                    {/* Debug display - remove later */}
                    {/* <div className="mr-4 text-xs bg-yellow-100 p-2 rounded self-center">
                        NextQuestion: {hasNextQuestion ? `ID: ${nextQuestion.id}` : 'NONE'}
                    </div> */}

                    <button
                        onClick={onNextQuestion}
                        disabled={isLoading}
                        className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${!isLoading
                                ? hasNextQuestion ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
                                : "bg-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {isLoading ? (
                            "Loading..."
                        ) : (
                            <>
                                <span>
                                    {hasNextQuestion ? "Next Question" : "View Results"}
                                </span>
                                <FaArrowRight size={16} />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Progress Footer */}
            <div className="bg-gray-50 px-6 py-3 rounded-b-xl border-t">
                <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Assessment Progress</span>
                    <span className="font-semibold">
                        {isCorrect ? "+1 Point" : "No points awarded"}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AnswerCard;