import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";
import { authenticateOptional } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/todos", authenticateOptional, getTodos);
router.post("/todos", authenticateOptional, createTodo);
router.put("/todos/:id",  updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;