const TodoForm = ({ task, setTask, handleAddTask }) => {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite sua tarefa..."
        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-400"
      />
      <button
        onClick={handleAddTask}
        className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
      >
        Adicionar
      </button>
    </div>
  );
};

export default TodoForm;
