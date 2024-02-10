import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    input: "",
    isTodo: false,
  },
  reducers: {
    inputTodo: (state, actions) => {
      state.input += actions.payload;
    },
    addTodo: (state, actions) => {
      state.todos.push(actions.payload);
      state.input = "";
    },
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id != actions.payload);
    },
  },
});

export const { addTodo, deleteTodo, inputTodo } = todoSlice.actions;

export default todoSlice.reducer;
