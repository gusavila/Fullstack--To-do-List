import { useState, useRef, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function TodoItem({ task, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const inputRef = useRef(null);

  useEffect(() =>{
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(task.id, { text: editText });
      setIsEditing(false);
    }
  };

  return (
    <li
      key={task.id}
      className={`flex justify-between items-center p-3 rounded-xl shadow ${
        task.completed
          ? "bg-green-100 line-through text-gray-500"
          : "bg-gray-50"
      }`}
    >
      {isEditing ? (
        <input
          ref={inputRef} 
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleSave();
          }}
          className="flex-1 outline-none"
        />
      ) : (
        <span
          onClick={() => onToggle(task.id)}
          className="cursor-pointer flex-1"
        >
          {task.text}
        </span>
      )}

      {isEditing ? (
        <button
          onClick={handleSave}
          className="text-green-600 hover:text-green-500 ml-2"
        >
          Salvar <CheckIcon className="pb-1" />
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="text-gray-500 hover:text-blue-500 ml-2"
        >
          <EditIcon />
        </button>
      )}

      <button
        onMouseDown={(event) => {
          event.preventDefault();
        }}
        onClick={() => onDelete(task.id)}
        className="text-gray-500 hover:text-red-400 ml-3 cursor-pointer focus:text-red-400 focus:outline-2 focus:outline-offset-1 rounded-sm focus:outline-red-500 border-radius-1"
      >
        <DeleteIcon />
      </button>
    </li>
  );
}

export default TodoItem;
