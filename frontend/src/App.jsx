import { useEffect, useState } from "react";
import { fetchTodos, addTodo, deleteTodo } from "./services/api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetchTodos();
      setTasks(res.data);
    };
    load();
  }, []);

  const handleAddTask = async () => {
    if (task.trim() === "") return;

    try {
      const res = await addTodo(task);
      setTasks([...tasks, res.data]);
      setTask("");
    } catch (err) {
      console.error("Erro ao adicionar tarefa:", err);
    }
  };

  const handleToggleTask = (id) => {
    setTasks(
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTodo(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Erro ao deletar tarefa:", err);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Lista de Tarefa
        </h1>
        <TodoForm task={task} setTask={setTask} handleAddTask={handleAddTask} />
        <TodoList
          tasks={tasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default App;
