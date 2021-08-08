import { Todo } from "./Todo.types";

type ResponseKind = "success" | "failed";
type Response = {
  kind: ResponseKind;
  error?: string;
};
type GetTodosResponse = Response & {
  data?: Todo[];
};
type SetTodoResponse = Response & {
  data?: Todo;
};

export async function getTodos(): Promise<GetTodosResponse> {
  try {
    const result = await fetch("http://localhost:9001/tasks");
    const data = await result.json();

    return {
      kind: "success",
      data: data.todos
    };
  } catch (err) {
    return {
      kind: "failed",
      error: err as string
    };
  }
}

export async function setTodo(title: string): Promise<SetTodoResponse> {
  try {
    const result = await fetch(`http://localhost:9001/task/create/${title}`, {
      method: "POST"
    });
    const data = await result.json();

    return {
      kind: "success",
      data
    };
  } catch (err) {
    return {
      kind: "failed",
      error: err as string
    };
  }
}

export async function deleteTodo(id: string): Promise<Response> {
  try {
    const result = await fetch(`http://localhost:9001/task/delete/${id}`, {
      method: "DELETE"
    });
    await result.json();

    return {
      kind: "success"
    };
  } catch (err) {
    return {
      kind: "failed",
      error: err as string
    };
  }
}

export async function updateTodo(id: string): Promise<SetTodoResponse> {
  try {
    const result = await fetch(`http://localhost:9001/task/update/${id}`, {
      method: "PUT"
    });
    const data = await result.json();

    return {
      kind: "success",
      data
    };
  } catch (err) {
    return {
      kind: "failed",
      error: err as string
    };
  }
}
