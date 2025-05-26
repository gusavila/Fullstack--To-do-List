import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// List all tasks
app.get("/todos", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM to_do ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Create new task
app.post("/todos", async (req, res) => {
  const { text } = req.body;
  console.log("Recebido POST:", text);
  try {
    const result = await db.query(
      "INSERT INTO to_do (text) VALUES ($1) RETURNING *",
      [text]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Atualizar tarefa
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { completed, text } = req.body;

  try {
    const existing = await db.query("SELECT * FROM to_do WHERE id = $1", [id]);

    if (existing.rowCount === 0) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    const currentTask = existing.rows[0];

    const updatedCompleted = completed !== undefined ? completed : currentTask.completed;
    const updatedText = text !== undefined ? text : currentTask.text;

    const result = await db.query(
      "UPDATE to_do SET completed = $1, text = $2 WHERE id = $3 RETURNING *",
      [updatedCompleted, updatedText, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Erro ao atualizar tarefa:", err);
    res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
});

// Deletar tarefa
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM to_do WHERE id = $1", [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
