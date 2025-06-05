// components/Tooltip.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Tooltip({ content, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-white font-medium border border-gray-300 text-xs px-2 py-1 rounded-md shadow-xs shadow-gray-200 z-50"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Tooltip;
