import React, { ReactElement } from "react";
import { Provider } from "react-redux";

import TodosMock from "./todos.json";
import { store } from "../app/store";
import { setTodos } from "../features/todo/todoSlice";

store.dispatch(setTodos(TodosMock));

const mountWithProvider = (tree: ReactElement, entries?: string[]) => (
  <Provider store={store}>{tree}</Provider>
);

export default mountWithProvider;
