import { useState, useRef, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import Tooltip from "./ToolTip";

function TodoItem({ task, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const inputRef = useRef(null);
  const motionLinkProps = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.95 }
  }

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
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.2 }}
      whileHover= {{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`group flex justify-between items-center p-3 rounded-xl shadow ${
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
          className="flex outline-none p-1 bg-white border border-gray-200 rounded-lg shadow-gray-200 shadow-md"
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
            <motion.button
              onClick={() => onToggle(task.id)}
              {...motionLinkProps}
              className="text-green-500 hover:text-green-600 cursor-pointer"
            >
              <CheckCircleIcon />
            </motion.button>
          </div>
        ) : (
          <div className="hidden group-hover:flex group-focus-within:flex space-x-2">
            {isEditing ? (
              <Tooltip content="Salvar">
                <motion.button
                  onClick={handleSave}
                  {...motionLinkProps}
                  className="text-green-600 hover:text-green-500 cursor-pointer"
                >
                  <CheckIcon />
                </motion.button>
              </Tooltip>
            ) : (
              <Tooltip content="Editar">
                <motion.button
                  onClick={() => setIsEditing(true)}
                  {...motionLinkProps}
                  className="text-gray-500 hover:text-blue-500 cursor-pointer"
                >
                  <EditIcon />
                </motion.button>
              </Tooltip>
            )}

            <Tooltip content="Deletar">
              <motion.button
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onDelete(task.id)}
                {...motionLinkProps}
                className="text-gray-500 hover:text-red-400 focus:text-red-400 focus:outline-none cursor-pointer"
              >
                <DeleteIcon />
              </motion.button>
            </Tooltip>

            <Tooltip content="Feito">
              <motion.button
                onClick={() => onToggle(task.id)}
                {...motionLinkProps}
                className="text-gray-500 hover:text-green-500 cursor-pointer"
              >
                <CheckCircleOutlineIcon />
              </motion.button>
            </Tooltip>
          </div>
        )}
      </div>
    </motion.li>
  );
}

export default TodoItem;
