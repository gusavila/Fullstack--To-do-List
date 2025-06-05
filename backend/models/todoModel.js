import db from "../db.js";

export const getAllTodos = async (userId = null) => {
  const result = await db.query("SELECT * FROM to_do WHERE user_id IS NOT DISTINCT FROM $1 ORDER BY id ASC", [userId]);
  return result.rows;
};

export const insertTodo = async (text, userId = null) => {
  const result = await db.query(
    "INSERT INTO to_do (text, user_id) VALUES ($1, $2) RETURNING *",
    [text, userId]
  );
  return result.rows[0];
};

export const searchTodo = async (id) => {
  const result = await db.query("SELECT * FROM to_do WHERE id = $1", [id]);
  return result;
};

export const modifyTodo = async (updatedCompleted, updatedText, id) => {
  const result = await db.query(
    "UPDATE to_do SET completed = $1, text = $2 WHERE id = $3 RETURNING *",
    [updatedCompleted, updatedText, id]
  );
  return result.rows[0];
};

export const removeTodo = async (id) => {
  await db.query("DELETE FROM to_do WHERE id = $1", [id]);
};