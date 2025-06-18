import db from "../db.js";

export const sendFeedback = async (req, res) => {
  const { firstName, lastName, email, feedback } = req.body;

  try {
    const newFeedback = await db.query("INSERT INTO contacts (first_name, last_name, feedback, email) VALUES ($1, $2, $3, $4) RETURNING * ",[firstName, lastName, feedback, email]);
    res.status(201).json(newFeedback);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
