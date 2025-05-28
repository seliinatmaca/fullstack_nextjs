"use client";

import { useEffect, useState } from "react";
import { useTodoStore } from "@/store/todoStore";
import Link from "next/link";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";

export default function TodoPage() {
  const { todos, fetchTodos, deleteTodo, updateTodo } = useTodoStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleToggleComplete = (todo) => {
    updateTodo(todo.id, { isCompleted: !todo.isCompleted });
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleTodos = filteredTodos.filter((todo) => {
    if (filter === "completed") return todo.isCompleted;
    if (filter === "active") return !todo.isCompleted;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">📋 Görevler</h1>

      {/* Arama Kutusu */}
      <input
        type="text"
        placeholder="Görev ara..."
        className="w-full p-2 border rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filtre Butonları */}
      <div className="flex justify-center gap-2 mb-6">
        {["all", "active", "completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1 rounded-full border transition ${
              filter === type
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {type === "all"
              ? "Tümü"
              : type === "active"
              ? "Aktif"
              : "Tamamlanan"}
          </button>
        ))}
      </div>

      {/* Görev Listesi */}
      <ul className="space-y-3">
        {visibleTodos.length === 0 ? (
          <p className="text-center text-gray-500">Görev bulunamadı.</p>
        ) : (
          visibleTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-4 bg-white rounded shadow hover:shadow-md transition"
            >
              <div>
                <h3
                  className={`font-semibold ${
                    todo.isCompleted ? "text-green-600 line-through" : ""
                  }`}
                >
                  {todo.title}
                </h3>
                {todo.description && (
                  <p className="text-sm text-gray-500">{todo.description}</p>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleToggleComplete(todo)}
                  className={`text-green-600 hover:text-green-800 ${
                    todo.isCompleted ? "opacity-50" : ""
                  }`}
                  title="Tamamlandı olarak işaretle"
                >
                  <FaCheck />
                </button>
                <Link
                  href={`/todo/${todo.id}/edit`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEdit />
                </Link>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
