import bcrypt, { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../db.js";
import { verifyExistingUser, getNewUser } from "../models/userModel.js";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

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

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({error: "Preencha todos os campos."});
    }   

    try {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({error: "Usuário não encontrado."});
        }

        const user = result.rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            return res.status(401).json({error: "Senha incorreta."});
        }

        const token = jwt.sign({ id: user.id}, JWT_SECRET, { expiresIn: "1h" });
        
        res.json({token, user: {id: user.id, name: user.name, email: user.email}});
    } catch (err) {
        console.error("Erro ao efetuar login", err);
        res.status(500).json({ error: "Error no servidor." });
    }
} ;
