import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const API_URL = "http://localhost:3000/todos";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Carrega as tarefas ao abrir a página
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error("Erro ao buscar tarefas:", err);
    }
  };

  const handleAddTask = async () => {
    if (task.trim() === "") return;

    try {
      const res = await axios.post("http://localhost:3000/todos", {
        text: task,
      });
      setTasks([...tasks, res.data]);
      setTask("");
    } catch (err) {
      console.error("Erro ao adicionar tarefa:", err);
    }
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error("Erro ao deletar tarefa:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          To-Do List
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Digite sua tarefa..."
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            Adicionar
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((t) => (
            <li
              key={t.id}
              className={`flex justify-between items-center p-3 rounded-xl border ${
                t.completed
                  ? "bg-green-100 line-through text-gray-500"
                  : "bg-gray-50"
              }`}
            >
              <span
                onClick={() => handleToggleTask(t.id)}
                className="cursor-pointer flex-1"
              >
                {t.text}
              </span>
              <button
                onClick={() => handleDeleteTask(t.id)}
                className="text-red-500 hover:text-red-700 ml-3"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
