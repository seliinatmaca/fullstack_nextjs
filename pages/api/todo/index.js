import { getAllTodos, createTodo } from "@/services/serviceoperations";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const todos = await getAllTodos();
      return res.status(200).json(todos);
    } catch (error) {
      return res.status(500).json({ message: "GET işlemi başarısız", error });
    }
  }

  if (req.method === "POST") {
    try {
      const newTodo = await createTodo(req.body);
      return res.status(201).json(newTodo);
    } catch (error) {
      return res.status(500).json({ message: "POST işlemi başarısız", error });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Yasaklı Metot: ${req.method}`);
}
