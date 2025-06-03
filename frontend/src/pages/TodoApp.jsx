import { useEffect, useState } from "react";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  toggleTodo,
} from "../services/api.js";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import LoadingTodo from "../components/LoadingTodo.jsx";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingTodoList, setLoadingTodoList] = useState(false);

  useEffect(() => {
    setLoadingTodoList(true);

    const load = async () => {
      const start = Date.now();
      try {
        const res = await fetchTodos();

        const elapsed = Date.now() - start;
        const minDelay = 300;
        if (elapsed < minDelay) {
          await new Promise((resolve) =>
            setTimeout(resolve, minDelay - elapsed)
          );
        }

        setTasks(res.data);
      } catch (err) {
        console.error("Erro ao carregar tarefas:", err);
      } finally {
        setLoadingTodoList(false);
      }
    };
    load();
  }, []);

  const handleAddTask = async () => {
    if (task.trim() === "") return;

    const start = Date.now();
    setLoading(true);
    try {
      const res = await addTodo(task);

      const elapsed = Date.now() - start;
      const minDelay = 300;
      if (elapsed < minDelay) {
        await new Promise((resolve) => setTimeout(resolve, minDelay - elapsed));
      }

      setTasks([...tasks, res.data]);
      setTask("");
    } catch (err) {
      console.error("Erro ao adicionar tarefa:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  const handleToggleTask = async (id) => {
    const taskToToggle = tasks.find((t) => t.id === id);
    const updatedCompleted = !taskToToggle.completed;

    try {
      const res = await toggleTodo(id, updatedCompleted);
      setTasks((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, completed: res.data.completed } : t
        )
      );
    } catch (err) {
      console.error("Erro ao alternar tarefa:", err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTodo(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error("Erro ao deletar tarefa:", err);
    }
  };

  const handleUpdateTask = async (id, updatedData) => {
    try {
      const res = await updateTodo(id, updatedData);
      const updatedTask = res.data;

      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updatedTask : task))
      );
    } catch (err) {
      console.error("Erro ao atualizar tarefa:", err);
    }
  };

  return (
    <div className="bg-gray-100 flex-row place-items-center p-4 mt-14">
      {loadingTodoList ? (
        <LoadingTodo className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6"/>
      ) : (
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Lista de Tarefa
          </h1>
          <TodoForm
            task={task}
            setTask={setTask}
            onAddTask={handleAddTask}
            onKeyDown={handleKeyDown}
            loading={loading}
          />
          <TodoList
            tasks={tasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask}
          />
        </div>
      )}
    </div>
  );
}

export default TodoApp;
