/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";
import styles from "./Todo.styles";
import { getTodos } from "./todoApi";
import { setTodos } from "./todoSlice";

function Todo() {
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTodoItems() {
      const result = await getTodos();

      if (result.kind === "success" && result.data) {
        dispatch(setTodos(result.data));
      }
      if (result.kind === "failed") {
        setError(true);
      }
    }

    getTodoItems();
  }, [dispatch]);

  return (
    <div css={styles.root}>
      {error && <p css={styles.error}>There's something wrong with the API</p>}
      <h1 css={styles.title}>
        Todo List
        <span css={styles.subtitle}>Get things done, one item at a time.</span>
      </h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default Todo;
