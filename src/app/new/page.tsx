"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, HStack, Input } from "@chakra-ui/react";

import { addTodo } from "@/lib/redux";
import { useDispatch } from "../hooks";

export default function Home() {
  const { push } = useRouter();
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box
        w="lg"
        minH="500px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
      >
        <HStack>
          <Input
            width="auto"
            placeholder="Input task description here..."
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button
            colorScheme="blue"
            onClick={() => {
              if (todoText == "") return;
              dispatch(
                addTodo({
                  id: "",
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
            Add Task
          </Button>
        </HStack>
      </Box>
    </main>
  );
}
