import { motion } from "framer-motion";

const TodoForm = ({ task, setTask, onAddTask, onKeyDown, loading }) => {
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
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={loading}
        onClick={onAddTask}
        className={`flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-xl shadow-md cursor-pointer ${
          loading ? "opacity-70 cursor-not-allowed" : "hover:bg-green-600"
        }`}
      >
        {loading ? (
          
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Adicionar"
        )}
      </motion.button>
    </div>
  );
};

export default TodoForm;
