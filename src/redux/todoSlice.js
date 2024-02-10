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
    editTodo: (state, { payload }) => {
      const oneTodo = state.todos.find((todo) => todo.id == payload);

      state.input += oneTodo.text;

      state.isTodo = !state.isTodo;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, inputTodo } = todoSlice.actions;

export default todoSlice.reducer;
