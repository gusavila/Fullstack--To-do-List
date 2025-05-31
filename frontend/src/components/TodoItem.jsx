import { useState, useRef, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

function TodoItem({ task, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const inputRef = useRef(null);

  useEffect(() => {
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
    <motion.li
      key={task.id}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className={`group flex justify-between items-center p-3 rounded-xl shadow transition ${
        task.completed ? "bg-green-100 text-gray-500" : "bg-gray-50"
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
          onBlur={handleSave}
          className="flex-1 outline-none py-1 bg-transparent"
        />
      ) : (
        <span
          className={`flex-1 transition py-1 ${
            task.completed && "line-through"
          }`}
        >
          {task.text}
        </span>
      )}

      <div className="ml-2 flex items-center space-x-2">
        {task.completed ? (
          <div>
            <button
              onClick={() => onToggle(task.id)}
              className="text-green-500 hover:text-green-600"
            >
              <CheckCircleIcon />
            </button>
          </div>
        ) : (
          <div className="hidden group-hover:flex group-focus-within:flex space-x-2">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="text-green-600 hover:text-green-500"
              >
                <CheckIcon />
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="text-gray-500 hover:text-blue-500"
              >
                <EditIcon />
              </button>
            )}

            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onDelete(task.id)}
              className="text-gray-500 hover:text-red-400 focus:text-red-400 focus:outline-none"
            >
              <DeleteIcon />
            </button>
            <button
              onClick={() => onToggle(task.id)}
              className="text-gray-500 hover:text-green-500"
            >
              <CheckCircleOutlineIcon />
            </button>
          </div>
        )}
      </div>
    </motion.li>
  );
}

export default TodoItem;
