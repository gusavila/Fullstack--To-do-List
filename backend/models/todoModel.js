import db from "../db.js";

export const getAllTodos = async () => {
  const result = await db.query("SELECT * FROM to_do ORDER BY id ASC");
  return result.rows;
};

export const insertTodo = async (text) => {
  const result = await db.query(
    "INSERT INTO to_do (text) VALUES ($1) RETURNING *",
    [text]
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