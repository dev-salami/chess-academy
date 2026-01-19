// hooks/useQuiz.js
import { useState, useCallback } from 'react';
import { quizAPI, handleApiError } from '../../lib/api';

export const useQuiz = () => {
  const [state, setState] = useState({
    currentView: 'registration',
    qtaker: null,
    currentQuestion: null,
    answerData: null,
    score: 0,
    loading: false,
    error: null,
    answerId: null,          // ← store last_answer_id from quiz POST
  });

  const setLoading = (loading) => setState(prev => ({ ...prev, loading }));
  const setError = (error) => setState(prev => ({ ...prev, error }));

  /* ---------- 1.  create user ---------- */
  const createQtaker = useCallback(async (formData) => {
    try {
      setLoading(true); setError(null);
      const data = await quizAPI.createQtaker(formData);
      const qtaker = { id: data.qtaker_id, name: formData.name, skill: formData.skill, email: formData.email };
      setState(prev => ({ ...prev, qtaker, currentView: 'question' }));
      return data;
    } catch (e) {
      const m = handleApiError(e); setError(m); throw new Error(m);
    } finally { setLoading(false); }
  }, []);

  /* ---------- 2.  fetch question ---------- */
  const getQuestion = useCallback(async (qtakerId, questionId) => {
    try {
      setLoading(true); setError(null);
      const data = await quizAPI.getQuestion(qtakerId, questionId);
      setState(prev => ({ ...prev, currentQuestion: data.question }));
      return data;
    } catch (e) {
      const m = handleApiError(e); setError(m); throw new Error(m);
    } finally { setLoading(false); }
  }, []);

  /* ---------- 3.  submit answer (no scoring) ---------- */
  const submitAnswer = useCallback(async (qtakerId, questionId, selectedOptionId) => {
    try {
      setLoading(true); setError(null);
  
      // selectedOptionId is EITHER number (radio) OR string (text)
      const payload = { answer: selectedOptionId };   // ← just forward it
      const data  = await quizAPI.submitAnswer(qtakerId, questionId, payload);
      setState(prev => ({ ...prev, answerId: data.last_answer_id }));
      return data;
    } catch (e) {
      const m = handleApiError(e); setError(m); throw new Error(m);
    } finally { setLoading(false); }
  }, []);

  /* ---------- 4.  details / scoring (always call this) ---------- */
  const getAnswerDetails = useCallback(async (qtakerId, answerId) => {
    console.log('getAnswerDetails invoked', qtakerId, answerId);
    try {
      setLoading(true); setError(null);
      const data = await quizAPI.getAnswerDetails(qtakerId, answerId);
      setState(prev => ({
        ...prev,
        answerData: data,
        score: data.score,           // ← now incremented by server
        currentView: 'answer',
      }));
      return data;
    } catch (e) {
      const m = handleApiError(e); setError(m); throw new Error(m);
    } finally { setLoading(false); }
  }, []);

  /* ---------- 5.  final result ---------- */
  const getResults = useCallback(async (qtakerId) => {
    try {
      setLoading(true); setError(null);
      const data = await quizAPI.getResults(qtakerId);
      setState(prev => ({ ...prev, currentView: 'result', answerData: data }));
      return data;
    } catch (e) {
      const m = handleApiError(e); setError(m); throw new Error(m);
    } finally { setLoading(false); }
  }, []);

  /* ---------- 6.  misc ---------- */
  const navigateToView = useCallback((view) => setState(prev => ({ ...prev, currentView: view })), []);

  /* ---------- export ---------- */
  return {
    ...state,
    createQtaker,
    getQuestion,
    submitAnswer,
    getAnswerDetails,
    getResults,
    navigateToView,
    setError,
  };
};