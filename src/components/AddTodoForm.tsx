import { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [inputTodo, setInputTodo] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputTodo.trim()) return;
    onSubmit(inputTodo);
    setInputTodo("");
  }
  return (
    <form className="flex mb-6" onSubmit={e => handleSubmit(e)}>
      <input
        value={inputTodo}
        onChange={e => setInputTodo(e.target.value)}
        placeholder="what needs to be done?"
        className="border rounded-s-md grow border-gray-400 p-2"
        type="text"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
      >
        Add
      </button>
    </form>
  );
}
