import { useDispatch } from "../hooks";
import { todoSlice } from "@/lib/redux";
import { TodoItemProps } from "@/types";

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => {
          dispatch(todoSlice.actions.toggleTodo(todo.id));
        }}
      />
      <span>{todo.task}</span>
      <button
        onClick={(e) => {
          dispatch(todoSlice.actions.deleteTodo(todo.id));
        }}
      >
        Delete
      </button>
    </div>
  );
}
