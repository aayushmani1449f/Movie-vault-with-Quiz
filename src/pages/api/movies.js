import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const [movies] = await db.query("SELECT * FROM movies");
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  }
}
