import {
  getAllTodos,
  insertTodo,
  searchTodo,
  modifyTodo,
  removeTodo,
} from "../models/todoModel.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export const createTodo = async (req, res) => {
  const { text } = req.body;
  console.log("Recebido POST:", text);
  try {
    const newTodo = await insertTodo(text);
    res.status(201).json(newTodo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { completed, text } = req.body;

  try {
    const existing = await searchTodo(id);

    if (existing.rowCount === 0) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    const currentTask = existing.rows[0];

    const updatedCompleted =
      completed !== undefined ? completed : currentTask.completed;
    const updatedText = text !== undefined ? text : currentTask.text;

    const updatedTodo = await modifyTodo(updatedCompleted, updatedText, id);

    res.json(updatedTodo);
  } catch (err) {
    console.error("Erro ao atualizar tarefa:", err);
    res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await removeTodo(id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};