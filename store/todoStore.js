import { create } from "zustand";
import {
  fetchTodos as fetchTodosApi,
  createTodo,
  updateTodo,
  removeTodo,
} from "@/services/todoService";

export const useTodoStore = create((set, get) => ({
  todos: [],
  loading: false,
  error: null,

  fetchTodos: async () => {
    set({ loading: true });
    try {
      const data = await fetchTodosApi();
      set({ todos: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addTodo: async (todo) => {
    try {
      const newTodo = await createTodo(todo);
      set({ todos: [newTodo, ...get().todos] });
    } catch (err) {
      set({ error: err.message });
    }
  },

  updateTodo: async (id, updates) => {
    try {
      const updated = await updateTodo(id, updates);
      set({
        todos: get().todos.map((t) => (t.id === id ? updated : t)),
      });
    } catch (err) {
      set({ error: err.message });
    }
  },

  deleteTodo: async (id) => {
    try {
      await removeTodo(id);
      set({ todos: get().todos.filter((t) => t.id !== id) });
    } catch (err) {
      set({ error: err.message });
    }
  },
}));
