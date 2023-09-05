import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { ITodo } from "@/app/types";

const initialState: TodoSliceState = {
  todos: [{ id: nanoid(), task: "Initial Task", completed: false }],
  status: "idle",
};

export const addTodo = createAppAsyncThunk(
  "todo/addTodo",
  async (todo: ITodo, { rejectWithValue }) => {
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(todo),
    });
    const res = await response.json();
    if (res.status === "ok") {
      return todo;
    } else {
      return rejectWithValue("failed");
    }
  }
);

const searchTodo = (todos: ITodo[], id: string) => {
  return todos.findIndex((todo) => todo.id === id);
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todoIdx = searchTodo(state.todos, action.payload);
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const todoIdx = searchTodo(state.todos, action.payload);
      state.todos.splice(todoIdx, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos.push({ ...action.payload, id: nanoid() });
      });
  },
});

export interface TodoSliceState {
  todos: ITodo[];
  status: "idle" | "loading";
}
