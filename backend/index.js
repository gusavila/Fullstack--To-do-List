import express from "express";
import cors from "cors";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "todolist",
  password: "Costa@1vip",
  port: 5432,
});

db.connect();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Listar tarefas
app.get("/todos", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM to_do ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
});

// Criar nova tarefa
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
    res.status(500).json({ error: "Erro ao adicionar tarefa" });
  }
});

// Atualizar tarefa
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  try {
    const result = await pool.query(
      "UPDATE to_do SET completed = $1 WHERE id = $2 RETURNING *",
      [completed, id]
    );
    if (result.rowCount === 0)
      return res.status(404).json({ error: "Não encontrado" });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
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
    res.status(500).json({ error: "Erro ao deletar tarefa" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
