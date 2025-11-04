// components/QuizApp.js
"use client";
import React from "react";
import QtakerCard from "../cards/QtakerCard";
import QuestionCard from "../cards/QuestionCard";
import AnswerCard from "../cards/AnswerCard";
import { useQuiz } from "../hooks/useQuiz";

function QuizApp() {
    const {
        currentView,
        qtaker,
        currentQuestion,
        answerData,
        score,
        loading,
        error,
        createQtaker,
        getQuestion,
        submitAnswer,
        getAnswerDetails,
        getResults,
        navigateToView,
    } = useQuiz();

    // Handle Qtaker registration
    const handleCreateQtaker = async (formData) => {
        try {
            const data = await createQtaker(formData);
            // Fetch the first question
            await getQuestion(data.qtaker_id, data.question_id);
        } catch (error) {
            // Error is already handled in the hook
            console.error('Failed to create qtaker:', error);
        }
    };

    // Handle answer submission
    const handleSubmitAnswer = async (selectedOptionId) => {
        if (!qtaker || !currentQuestion) return;

        try {
            const data = await submitAnswer(qtaker.id, currentQuestion.id, selectedOptionId);
            // Fetch answer details
            await getAnswerDetails(qtaker.id, data.answer_id);
        } catch (error) {
            console.error('Failed to submit answer:', error);
        }
    };

    // Handle next question - FIXED VERSION
    const handleNextQuestion = async () => {
        // console.log('=== handleNextQuestion Debug ===');
        // console.log('answerData:', answerData);
        // console.log('next_question:', answerData?.next_question);
        // console.log('next_question.id:', answerData?.next_question?.id);

        if (!answerData?.next_question?.id) {
            console.log('No valid next question - showing results');
            await getResults(qtaker.id);
        } else {
            console.log('Moving to next question with ID:', answerData.next_question.id);
            // Make sure we're passing the actual question ID, not null/undefined
            await getQuestion(qtaker.id, answerData.next_question.id);
            navigateToView('question');
        }
    };

    // Render error message
    if (error) {
        return (
            <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
                <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
                    <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
                    <p className="text-gray-700 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    // Render current view
    const renderCurrentView = () => {
        switch (currentView) {
            case "registration":
                return (
                    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4 flex items-center justify-center">
                        <QtakerCard
                            onSubmit={handleCreateQtaker}
                            isLoading={loading}
                        />
                    </div>
                );

            case "question":
                return (
                    <div className="min-h-screen bg-gray-100 py-8 px-4">
                        <QuestionCard
                            question={currentQuestion}
                            qtaker={qtaker}
                            onSubmitAnswer={handleSubmitAnswer}
                            isLoading={loading}
                        />
                    </div>
                );

            case "answer":
                console.log("Answer View - answerData:", answerData);
                console.log("Answer View - next_question:", answerData?.next_question);
                return (
                    <div className="min-h-screen bg-gray-100 py-8 px-4">
                        <AnswerCard
                            answer={answerData?.answer}
                            correctAnswer={answerData?.correct_answer}
                            question={answerData?.question}
                            nextQuestion={answerData?.next_question}
                            score={score}
                            qtaker={qtaker}
                            onNextQuestion={handleNextQuestion}
                            isLoading={loading}
                        />
                    </div>
                );

                case "result":
                    // Safe data access with fallbacks
                    const displayScore = answerData?.score ?? 0;
                    const totalQuestions = answerData?.total_questions ?? 'N/A';
                    const percentage = answerData?.percentage ?? 0;
                    const passed = answerData?.passed ?? false;
                    const nextSkill = answerData?.next_skill;
                    const nextQuestionnaire = answerData?.next_questionnaire;
                    
                    return (
                      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                          <div className="text-center">
                            <h2 className="text-2xl font-bold text-green-600 mb-4">
                              Assessment Complete!
                            </h2>
                            
                            {/* Debug info - remove later
                            <div className="mb-4 p-2 bg-yellow-100 text-xs rounded">
                              Debug: {JSON.stringify(answerData, null, 2)}
                            </div> */}
                            
                            {/* Score Display */}
                            <div className="mb-6">
                              {/* <p className="text-gray-700 mb-2">
                                Your score: <strong>{displayScore}</strong> out of {totalQuestions}
                              </p> */}
                              <p className="text-lg font-semibold mb-2">
                                Percentage: <span className={percentage > 60 ? "text-green-600" : "text-red-600"}>
                                  {percentage.toFixed(1)}%
                                </span>
                              </p>
                              <p className={`text-sm font-medium ${passed ? 'text-green-600' : 'text-red-600'}`}>
                                {passed ? '🎉 Congratulations! You passed!' : 'Keep practicing!'}
                              </p>
                            </div>
                  
                            {/* Next Questionnaire Option */}
                            {passed && nextQuestionnaire && (
                              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h3 className="font-semibold text-blue-800 mb-2">
                                  Ready for the next level?
                                </h3>
                                <p className="text-blue-700 text-sm mb-4">
                                  You have unlocked the <strong>{nextSkill}</strong> questionnaire!
                                </p>
                                <button
                                  onClick={async () => {
                                    try {
                                      await getQuestion(qtaker.id, nextQuestionnaire.first_question_id);
                                      navigateToView('question');
                                    } catch (error) {
                                      console.error('Error starting next questionnaire:', error);
                                    }
                                  }}
                                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                  Start {nextSkill} Questionnaire
                                </button>
                              </div>
                            )}
                  
                            {/* Restart Button */}
                            <div className="border-t pt-4">
                              <button
                                onClick={() => navigateToView('registration')}
                                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                              >
                                Start New Assessment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
            default:
                return null;
        }
    };

    return renderCurrentView();
}

export default QuizApp;