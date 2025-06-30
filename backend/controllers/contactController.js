import { insertFeedback } from "../models/contactModel.js";

export const sendFeedback = async (req, res) => {
  const { firstName, lastName, email, feedback } = req.body;

  try {
    const newFeedback = await insertFeedback(firstName, lastName, email, feedback);
    res.status(201).json(newFeedback);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
