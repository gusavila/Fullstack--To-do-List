import axios from "axios";

const API_URL = "http://localhost:3000/todos";

export const fetchTodos = () => axios.get(API_URL);
export const addTodo = (task) => axios.post(API_URL, { text: task });
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);