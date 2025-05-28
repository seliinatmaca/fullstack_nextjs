import { getApi, postApi, putApi, deleteApi } from "./api/requestApi";

export const fetchTodos = () => getApi("/api/todo");
export const createTodo = (data) => postApi("/api/todo", data);
export const updateTodo = (id, data) => putApi(`/api/todo/${id}`, data);
export const removeTodo = (id) => deleteApi(`/api/todo/${id}`);
