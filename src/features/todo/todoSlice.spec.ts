import todoReducer, {
  TodoState,
  setTodos,
  addTodo,
  removeTodo,
  updateTodoIsDone
} from "./todoSlice";

describe("todo reducer", () => {
  const initialState: TodoState = {
    todos: []
  };
  it("should handle initial state", () => {
    expect(todoReducer(undefined, { type: "unknown" })).toEqual({
      todos: []
    });
  });

  it("should handle set todos", () => {
    const actual = todoReducer(
      initialState,
      setTodos([{ id: "0", title: "test", isDone: false }])
    );
    expect(actual.todos.length).toEqual(1);
  });

  it("should handle add todos", () => {
    const state = { todos: [{ id: "0", title: "test", isDone: false }] };
    const actual = todoReducer(
      state,
      addTodo({ id: "1", title: "test1", isDone: false })
    );
    expect(actual.todos.length).toEqual(2);
  });

  it("should handle remove todo", () => {
    const state = { todos: [{ id: "0", title: "test", isDone: false }] };
    const actual = todoReducer(state, removeTodo("0"));
    expect(actual.todos.length).toEqual(0);
  });

  it("should handle update todo", () => {
    const state = { todos: [{ id: "0", title: "test", isDone: false }] };
    const actual = todoReducer(state, updateTodoIsDone("0"));
    expect(actual.todos[0].isDone).toEqual(true);
  });
});
