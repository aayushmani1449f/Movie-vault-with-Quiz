import db from "../../../lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (!user || user.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Path=/; Secure; SameSite=Strict`);
    return res.status(200).json({ message: "Login successful", user: { id: user.id, email: user.email } });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
