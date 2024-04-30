import { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import { dummyData } from "./data/todosData";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import { Todo } from "./types/todos";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, setTodoCompleted, addTodo, deleteTodo, deleteAllCompleted } =
    useTodos();
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>;
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompleteChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
    </main>
  );
}

export default App;
