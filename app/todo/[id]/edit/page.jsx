"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useTodoStore } from "@/store/todoStore";

export default function EditTodoPage() {
  const { todos, updateTodo } = useTodoStore();
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description || "");
    }
  }, [id, todos]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Başlık boş olamaz.");

    await updateTodo(id, { title, description });
    router.push("/todo");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-8">
      <h1 className="text-2xl font-bold mb-4">Görevi Düzenle</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Başlık
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Görev başlığı"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Açıklama
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
            placeholder="İsteğe bağlı açıklama"
            rows={4}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          >
            Geri
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
