import { updateTodo, deleteTodo } from "@/services/serviceoperations";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const updated = await updateTodo(id, req.body);
      return res.status(200).json(updated);
    } catch (error) {
      return res.status(500).json({ message: "PUT işlemi başarısız", error });
    }
  }

  if (req.method === "DELETE") {
    try {
      await deleteTodo(id);
      return res.status(204).end();
    } catch (error) {
      return res
        .status(500)
        .json({ message: "DELETE işlemi başarısız", error });
    }
  }

  res.setHeader("Allow", ["PUT", "DELETE"]);
  res.status(405).end(`Yasaklı Metot: ${req.method}`);
}
