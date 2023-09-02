import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";

const initialState: TodoSliceState = {
  todos: [{ task: "Initial Task", completed: false }],
  status: "idle",
};

export const addTodo = createAppAsyncThunk(
  "todo/addTodo",
  async (todo: ITodo, { rejectWithValue }) => {
    const response = await fetch("http://127.0.0.1:3000/api", {
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

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos.push(action.payload);
      });
  },
});

export interface ITodo {
  task: string;
  completed: boolean;
}

export interface TodoSliceState {
  todos: ITodo[];
  status: "idle" | "loading";
}
