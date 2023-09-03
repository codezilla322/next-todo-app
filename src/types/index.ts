export interface ITodo {
  id: string;
  task: string;
  completed: boolean;
}

export interface TodoListProps {
  todos: ITodo[];
}

export interface TodoItemProps {
  todo: ITodo;
}
