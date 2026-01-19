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
    answerId,
    score,
    loading,
    error,
    createQtaker,
    getQuestion,
    submitAnswer,
    getAnswerDetails,
    getResults,
    navigateToView,
    setError,
  } = useQuiz();

  // Handle Qtaker registration
  const handleCreateQtaker = async (formData) => {
    try {
      const data = await createQtaker(formData);
      // Fetch the first question
      await getQuestion(data.qtaker_id, data.question_id);
    } catch (error) {
      console.error('Failed to create qtaker:', error);
    }
  };

  // Clear error when user starts typing in the form
  const handleClearError = () => {
    if (error) {
      setError(null);
    }
  };

  // Handle answer submission
  const handleSubmitAnswer = async (answer) => {
    if (!qtaker || !currentQuestion) return;
  
    try {
      // 1. submit – returns last_answer_id
      const res = await submitAnswer(qtaker.id, currentQuestion.id, answer);
      if (res.last_answer_id === undefined) throw new Error('Server did not return last_answer_id');
  
      // 2. details – use the id from the response
      await getAnswerDetails(qtaker.id, res.last_answer_id);
    } catch (err) {
      console.error('Submit / details failed:', err);
    }
  };

  // Handle next question
  const handleNextQuestion = async () => {
    if (!answerData?.next_question?.id) {
      console.log('No valid next question - showing results');
      await getResults(qtaker.id);
    } else {
      console.log('Moving to next question with ID:', answerData.next_question.id);
      await getQuestion(qtaker.id, answerData.next_question.id);
      navigateToView('question');
    }
  };

  // Handle starting next questionnaire
  const handleStartNextQuestionnaire = async () => {
    try {
      // Get the next questionnaire data from answerData
      const nextQuestionnaire = answerData?.next_questionnaire;
      if (nextQuestionnaire && nextQuestionnaire.first_question_id) {
        await getQuestion(qtaker.id, nextQuestionnaire.first_question_id);
        navigateToView('question');
      } else {
        console.error('No next questionnaire data available');
      }
    } catch (error) {
      console.error('Error starting next questionnaire:', error);
    }
  };

  // Render error message
  if (error && currentView !== 'registration') {
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

  // Calculate result data once for the result view
  const resultData = (() => {
    if (currentView !== "result") return null;
    
    const displayScore = answerData?.score ?? 0;
    const totalQuestions = answerData?.total_questions ?? 'N/A';
    const percentage = answerData?.percentage ?? 0;
    const passed = answerData?.passed ?? false;
    const currentSkill = answerData?.current_skill || 'beginner';
    const nextSkill = answerData?.next_skill;
    const nextQuestionnaire = answerData?.next_questionnaire;
    const showJoinClassesMessage = !passed || (passed && !nextQuestionnaire);

    console.log('Result Data:', answerData);
    console.log('Current Skill (from API):', currentSkill);

    return {
      displayScore,
      totalQuestions,
      percentage,
      passed,
      currentSkill,
      nextSkill,
      nextQuestionnaire,
      showJoinClassesMessage
    };
  })();

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case "registration":
        return (
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4 flex items-center justify-center">
            <QtakerCard
              onSubmit={handleCreateQtaker}
              isLoading={loading}
              error={error}
              onClearError={handleClearError}
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
        if (!resultData) return null;
        
        const { 
          percentage, 
          passed, 
          currentSkill, 
          nextSkill, 
          nextQuestionnaire, 
          showJoinClassesMessage 
        } = resultData;

        return (
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-4">
                  Assessment Complete!
                </h2>

                {/* Score Display */}
                <div className="mb-6">
                  <p className="text-lg font-semibold mb-2">
                    Score: <span className={percentage >= 60 ? "text-green-600" : "text-red-600"}>
                      {percentage.toFixed(1)}%
                    </span>
                  </p>
                  <p className={`text-sm font-medium ${passed ? 'text-green-600' : 'text-red-600'}`}>
                    {passed ? '🎉 Congratulations! You passed!' : 'Keep practicing!'}
                  </p>
                </div>

                {/* Join Classes Message */}
                {showJoinClassesMessage && (
                  <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h3 className="font-semibold text-yellow-800 mb-2">
                      {passed ? 'Continue Your Journey!' : 'Time to Improve!'}
                    </h3>
                    <p className="text-yellow-700 text-sm">
                      {!passed
                        ? `Your current level is ${currentSkill}. Join our ${currentSkill} classes to strengthen your foundation and try again!`
                        : `You've mastered the ${currentSkill} level! Join our ${currentSkill} classes to further enhance your skills.`
                      }
                    </p>
                  </div>
                )}

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
                      onClick={handleStartNextQuestionnaire}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Start {nextSkill} Questionnaire
                    </button>
                  </div>
                )}

                {/* Restart Button - Show when no next questionnaire */}
                {(!passed || !nextQuestionnaire) && (
                  <div className="border-t pt-4">
                    <button
                      onClick={() => navigateToView('registration')}
                      className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Start New Assessment
                    </button>
                  </div>
                )}
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