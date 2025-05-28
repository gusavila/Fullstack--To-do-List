import db from "../db.js";

export const verifyExistingUser = async (email) => {
  const result = await db.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result;
};

export const getNewUser = async (name, email, hashedPassword) => {
  const result = await db.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
    [name, email, hashedPassword]
  );
  return result;
};
