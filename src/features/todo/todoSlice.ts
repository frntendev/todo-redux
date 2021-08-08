import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo } from "./Todo.types";

export type TodoState = {
  todos: Todo[];
};
const initialState: TodoState = {
  todos: []
};

export const currentTodoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos.splice(
        state.todos.findIndex(function(i) {
          return i.id === action.payload;
        }),
        1
      );
    },
    updateTodoIsDone: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex(
        todo => todo.id === action.payload
      );
      const newArray = [...state.todos];
      newArray[index].isDone = !newArray[index].isDone;
      state.todos = newArray;
    }
  }
});

export const {
  setTodos,
  addTodo,
  removeTodo,
  updateTodoIsDone
} = currentTodoSlice.actions;

export default currentTodoSlice.reducer;
