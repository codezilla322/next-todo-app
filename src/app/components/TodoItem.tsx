import { IconButton, HStack, Text, Checkbox } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";

import { todoSlice } from "@/lib/redux";
import { useDispatch } from "../hooks";
import { TodoItemProps } from "../types";

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  return (
    <HStack spacing={3} justifyContent="center">
      <Checkbox
        colorScheme="blue"
        onChange={(e) => {
          dispatch(todoSlice.actions.toggleTodo(todo.id));
        }}
      />
      <Text>{todo.task}</Text>
      <IconButton
        size="xs"
        aria-label="Delete"
        icon={<AiFillDelete />}
        onClick={(e) => {
          dispatch(todoSlice.actions.deleteTodo(todo.id));
        }}
      />
    </HStack>
  );
}
