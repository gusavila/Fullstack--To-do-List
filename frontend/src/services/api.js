import axios from "axios";

const API_URL = "http://localhost:3000/todos";

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

export const fetchTodos = () => axios.get(API_URL, getAuthHeaders());

export const addTodo = (task) =>
  axios.post(API_URL, { text: task }, getAuthHeaders());

export const deleteTodo = (id) =>
  axios.delete(`${API_URL}/${id}`, getAuthHeaders());

export const updateTodo = (id, updatedData) =>
  axios.put(`${API_URL}/${id}`, updatedData, getAuthHeaders());

export const toggleTodo = (id, completed) => updateTodo(id, { completed });
