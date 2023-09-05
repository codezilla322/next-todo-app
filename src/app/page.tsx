import { useSelector } from "./hooks";
import TodoList from "./components/TodoList";

export default function Home() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoList todos={todos} />
    </main>
  );
}
