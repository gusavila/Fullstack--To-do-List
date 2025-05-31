import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";

function TodoList({ tasks, onToggle, onDelete, onUpdate }) {
  return (
    <ul className="space-y-2">
      <AnimatePresence>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
      </AnimatePresence>
    </ul>
  );
}

export default TodoList;
