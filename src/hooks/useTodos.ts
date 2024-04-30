import { useEffect, useState } from "react";
import { dummyData } from "../data/todosData";
import { Todo } from "../types/todos";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saveTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    return saveTodos.length > 0 ? saveTodos : dummyData;
  });
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title: string) {
    setTodos((prevTodos: Todo[]) => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos: Todo[]) => prevTodos.filter(todo => todo.id !== id));
  }

  function deleteAllCompleted() {
    setTodos((prevTodos: Todo[]) => prevTodos.filter(todo => !todo.completed));
  }

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompleted,
  };
}
