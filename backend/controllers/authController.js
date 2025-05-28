import bcrypt from "bcrypt";
import { verifyExistingUser, getNewUser } from "../models/userModel.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Preencha todos os campos." });
  }

  try {
    const existingUser = await verifyExistingUser(email);
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: "E-mail já cadastrado." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await getNewUser(name, email, hashedPassword);

    res.status(201).json({
      message: "Usuário registrado com sucesso",
      user: newUser.rows[0],
    });
  } catch (err) {
    console.error("Erro no registro:", err);
    res.status(500).json({ error: "Erro ao registrar usuário." });
  }
};
