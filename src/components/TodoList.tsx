import { Todo } from "../types/todos";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  onCompleteChange,
  onDelete,
}: TodoListProps) {
  const todoSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return a.id - b.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {todoSorted.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompleteChange={onCompleteChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-gray-500 text-sm">
          No Todo yet, Add a new one above
        </p>
      )}
    </>
  );
}
