// hooks/useQuiz.js
import { useState, useCallback } from 'react';
import { quizAPI, handleApiError } from '../../lib/api';

export const useQuiz = () => {
  const [state, setState] = useState({
    currentView: 'registration', // registration, question, answer, result
    qtaker: null,
    currentQuestion: null,
    answerData: null,
    score: 0,
    loading: false,
    error: null,
  });

  const setLoading = (loading) => setState(prev => ({ ...prev, loading }));
  const setError = (error) => setState(prev => ({ ...prev, error }));

  const createQtaker = useCallback(async (formData) => {
    try {
      setLoading(true);
      setError(null);

      const data = await quizAPI.createQtaker(formData);

      const qtaker = {
        id: data.qtaker_id,
        name: formData.name,
        skill: formData.skill,
        email: formData.email,
      };

      setState(prev => ({
        ...prev,
        qtaker,
        currentView: 'question',
      }));

      // Return the first question data
      return data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw new Error(errorMessage);
      
    } finally {
      setLoading(false);
    }
  }, []);

  const getQuestion = useCallback(async (qtakerId, questionId) => {
    try {
      setLoading(true);
      setError(null);

      const data = await quizAPI.getQuestion(qtakerId, questionId);

      setState(prev => ({
        ...prev,
        currentQuestion: data.question,
      }));

      return data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const submitAnswer = useCallback(async (qtakerId, questionId, selectedOptionId) => {
    try {
      setLoading(true);
      setError(null);

      const data = await quizAPI.submitAnswer(qtakerId, questionId, selectedOptionId);
      if (data.correct) {
        setState(prev => ({ ...prev, score: prev.score + 1 }));
      }
      return data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const getAnswerDetails = useCallback(async (qtakerId, answerId) => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await quizAPI.getAnswerDetails(qtakerId, answerId);
      
      console.log('=== getAnswerDetails Response ===');
      console.log('Full response:', data);
      console.log('next_question:', data?.next_question);
      console.log('next_question.id:', data?.next_question?.id);
      
      setState(prev => ({
        ...prev,
        answerData: data,
        score: data.score,
        currentView: 'answer',
      }));
  
      return data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);
  const getResults = useCallback(async (qtakerId) => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await quizAPI.getResults(qtakerId);
      
      console.log('=== Results API Response ===');
      console.log('Full response:', data);
      console.log('Current skill:', data.current_skill);
      console.log('Score:', data.score);
      console.log('Percentage:', data.percentage);
      console.log('Passed:', data.passed);
      console.log('Next skill:', data.next_skill);
      console.log('Next questionnaire:', data.next_questionnaire);
      
      setState(prev => ({
        ...prev,
        currentView: 'result',
        answerData: data, // Store the full result data
      }));
  
      return data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const navigateToView = useCallback((view) => {
    setState(prev => ({ ...prev, currentView: view }));
  }, []);

  return {
    // State
    currentView: state.currentView,
    qtaker: state.qtaker,
    currentQuestion: state.currentQuestion,
    answerData: state.answerData,
    score: state.score,
    loading: state.loading,
    error: state.error,
    
    // Actions
    createQtaker,
    getQuestion,
    submitAnswer,
    getAnswerDetails,
    getResults,
    navigateToView,
    
    // Setters
    setError, // Now exported
  };
};