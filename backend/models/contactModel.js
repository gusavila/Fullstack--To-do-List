import db from "../db.js";

export const insertFeedback = async (firstName, lastName, email, feedback ) => {
  const result = await db.query(
    "INSERT INTO contacts (first_name, last_name, feedback, email) VALUES ($1, $2, $3, $4) RETURNING * ",
    [firstName, lastName, feedback, email]
  );
  return result.rows[0];
};
