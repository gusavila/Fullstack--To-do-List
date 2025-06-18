import express from "express";
import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"; 
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/", authRoutes);
app.use("/", todoRoutes);
app.use("/", contactRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});