import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <li
      key={task.id}
      className={`flex justify-between items-center p-3 rounded-xl shadow ${
        task.completed ? "bg-green-100 line-through text-gray-500" : "bg-gray-50"
      }`}
    >
      <span
        onClick={() => onToggle(task.id)}
        className="cursor-pointer flex-1"
      >
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-500 hover:text-red-400 ml-3"
      >
        <DeleteIcon />
      </button>
    </li>
  );
};

export default TodoItem;
