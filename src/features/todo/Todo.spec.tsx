import {
  fireEvent,
  render,
  screen,
  waitFor,
  wait
} from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import { act } from "react-dom/test-utils";

import mountWithProvider from "../../mock/mount-with-provider";
import TodosMock from "../../mock/todos.json";
import * as api from "./todoApi";
import * as Stories from "./Todo.stories";
import delay from "../../helpers/delay";

const { Default } = composeStories(Stories);

/* Mock auth function */
jest.mock("./todoApi");
const mockGetTodos = api.getTodos as jest.Mock;
const mockAddTodo = api.setTodo as jest.Mock;
const mockRemoveTodo = api.deleteTodo as jest.Mock;
const mockUpdateTodo = api.updateTodo as jest.Mock;

async function submitForm() {
  const input = screen.getByTestId("newitem-input");
  const button = screen.getByTestId("submit-btn");
  input.focus();
  await act(async () => {
    fireEvent.change(input, { target: { value: "Todo #4" } });
    await delay(10);
    fireEvent.submit(button);
  });
}

async function removeItem() {
  const button = screen.getAllByTestId("remove-btn")[0];
  await act(async () => {
    fireEvent.click(button);
  });
}

async function updateItem() {
  const button = screen.getAllByTestId("update-btn")[0];

  await act(async () => {
    fireEvent.click(button);
  });
}

it("Should render the form with 3 items", async () => {
  mockGetTodos.mockReturnValue({ kind: "success", data: TodosMock });
  render(mountWithProvider(<Default />));

  await waitFor(() =>
    expect(screen.getAllByTestId("todo-item").length).toBe(3)
  );
});

it("Should add a todo properly", async () => {
  mockGetTodos.mockReturnValue({ kind: "success", data: TodosMock });
  mockAddTodo.mockReturnValue({
    kind: "success",
    data: { id: 4, title: "Todo #4", isDone: false }
  });

  await act(async () => {
    render(mountWithProvider(<Default />));
  });

  await submitForm();

  await waitFor(() =>
    expect(screen.getAllByTestId("todo-item").length).toBe(4)
  );
});

it("Should not add a todo properly when error", async () => {
  mockGetTodos.mockReturnValue({ kind: "success" });
  mockAddTodo.mockReturnValue({
    kind: "falied",
    data: { id: 4, title: "Todo #4", isDone: false }
  });

  await act(async () => {
    render(mountWithProvider(<Default />));
  });

  await submitForm();

  await waitFor(() => expect(screen.queryByTestId("add-error")).toBeVisible());
});

it("Should remove a todo", async () => {
  mockGetTodos.mockReturnValue({ kind: "success", data: TodosMock });
  mockRemoveTodo.mockReturnValue({
    kind: "success"
  });

  await act(async () => {
    render(mountWithProvider(<Default />));
  });

  await removeItem();

  await waitFor(() =>
    expect(screen.getAllByTestId("todo-item").length).toBe(2)
  );
});

it("Should update a todo", async () => {
  mockGetTodos.mockReturnValue({ kind: "success", data: TodosMock });
  mockUpdateTodo.mockReturnValue({
    kind: "success",
    data: { id: "0", title: "Todo #1", isDone: true }
  });

  await act(async () => {
    render(mountWithProvider(<Default />));
  });

  await updateItem();

  await waitFor(() =>
    expect(
      screen
        .getAllByTestId("todo-item")[0]
        .querySelector('button[title="done"]')
    ).not.toBeNull()
  );
});
