"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addTodo } from "@/lib/redux";
import { useAppDispatch } from "../hooks";

export default function Home() {
  const { push } = useRouter();
  const [todoText, setTodoText] = useState("");
  const dispatch = useAppDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(
            addTodo({
              task: todoText,
              completed: false,
            })
          )
            .then((data) => {
              if (data.meta.requestStatus === "fulfilled") {
                push("/");
              } else if (data.meta.requestStatus === "rejected") {
                console.log(data.payload);
              }
            })
            .catch((err) => console.log(err));
        }}
      >
        Add Todo
      </button>
    </main>
  );
}