import { useRouter } from "next/navigation";

import { Box, Button, VStack } from "@chakra-ui/react";

import { TodoListProps } from "@/app/types";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }: TodoListProps) {
  const { push } = useRouter();
  return (
    <Box
      w="lg"
      minH="500px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
    >
      <VStack alignItems="flex-start" spacing={6}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        <Box>
          <Button
            colorScheme="blue"
            size="sm"
            variant="solid"
            onClick={() => push("/new")}
          >
            + New Task
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
