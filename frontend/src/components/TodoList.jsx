import TodoItem from "./TodoItem";

function TodoList({ tasks, onToggle, onDelete, onUpdate }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default TodoList;
