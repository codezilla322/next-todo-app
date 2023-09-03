import { useRouter } from "next/navigation";
import { TodoListProps } from "@/types";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }: TodoListProps) {
  const { push } = useRouter();
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <button onClick={() => push("/add")}>New Task</button>
    </div>
  );
}
