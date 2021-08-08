import { Provider } from "react-redux";

import { store } from "../src/app/store";
import { setTodos } from "../src/features/todo/todoSlice";
import TodosMock from "../src/mock/todos.json";

store.dispatch(setTodos(TodosMock));

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#ff6666"
      },
      {
        name: "dark",
        value: "#000"
      }
    ]
  }
};

const withProvider = (Story, context) => {
  return (
    <Provider store={store}>
      <Story {...context} />
    </Provider>
  );
};

export const decorators = [withProvider];
