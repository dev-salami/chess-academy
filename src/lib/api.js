// lib/api.js

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/questionnaire/api';

// Generic API client
export const apiClient = {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (config.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body);
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  },

  get(endpoint) {
    return this.request(endpoint);
  },

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: data,
    });
  },

  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: data,
    });
  },

  delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  },
};

// Quiz-specific API functions
export const quizAPI = {
  // Create a new Qtaker
  createQtaker(formData) {
    return apiClient.post('/qtaker/', formData);
  },

  // Get a specific question
  getQuestion(qtakerId, questionId) {
    return apiClient.get(`/quiz/${qtakerId}/${questionId}/`);
  },

  // Submit an answer
  submitAnswer(qtakerId, questionId, selectedOptionId) {
    return apiClient.post(`/quiz/${qtakerId}/${questionId}/`, {
      options: selectedOptionId,
    });
  },

  // Get answer details
  getAnswerDetails(qtakerId, answerId) {
    return apiClient.get(`/answer/${qtakerId}/${answerId}/`);
  },

  // Get results
  getResults(qtakerId) {
    return apiClient.get(`/result/${qtakerId}/`);
  },
};

// Utility function to handle API errors
export const handleApiError = (error) => {
  if (error.message.includes('Network error')) {
    return 'Unable to connect to server. Please check your internet connection.';
  }
  return error.message || 'An unexpected error occurred';
};