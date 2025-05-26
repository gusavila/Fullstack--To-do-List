const TodoForm = ({ task, setTask, onAddTask, onKeyDown }) => {
  return (
    <div className="flex gap-2 mb-4">
      <input
        onKeyDown={onKeyDown}
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Digite sua tarefa..."
        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-400"
      />
      <button
        onClick={onAddTask}
        onMouseDown={(event) => {
          event.preventDefault();
        }}
        className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-green-600 focus:bg-green-600 border-radius-1"
      >
        Adicionar
      </button>
    </div>
  );
};

export default TodoForm;
