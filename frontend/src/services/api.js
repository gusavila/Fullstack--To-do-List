import axios from "axios";

const API_URL = "http://localhost:3000";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {};
};

export const fetchTodos = () => axios.get(`${API_URL}/todos`, getAuthHeaders());

export const addTodo = (task) =>
  axios.post(`${API_URL}/todos`, { text: task }, getAuthHeaders());

export const deleteTodo = (id) =>
  axios.delete(`${API_URL}/todos/${id}`, getAuthHeaders());

export const updateTodo = (id, updatedData) =>
  axios.put(`${API_URL}/todos/${id}`, updatedData, getAuthHeaders());

export const toggleTodo = (id, completed) => updateTodo(id, { completed });

export const sendUserFeedback = (firstName, lastName, email, feedback) =>
  axios.post(
    `${API_URL}/contact`,
    { firstName, lastName, email, feedback },
    getAuthHeaders()
  );
