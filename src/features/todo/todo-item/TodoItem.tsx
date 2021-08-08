/** @jsxImportSource @emotion/react */

import { useCallback } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { Checked, Delete, UnChecked } from "../../../icons";
import { deleteTodo, updateTodo } from "../todoApi";
import { removeTodo, updateTodoIsDone } from "../todoSlice";
import styles from "./TodoItem.styles";
import { Props } from "./TodoItem.types";

function TodoItem({ id, title, isDone = false }: Props) {
  const dispatch = useAppDispatch();

  const handleUpdate = useCallback(async () => {
    const result = await updateTodo(id);
    if (result.kind === "success" && result.data) {
      dispatch(updateTodoIsDone(result.data.id));
    }
  }, [dispatch, id]);

  const handleDelete = useCallback(async () => {
    const result = await deleteTodo(id);
    if (result.kind === "success") {
      dispatch(removeTodo(id));
    }
  }, [dispatch, id]);

  return (
    <li data-testid="todo-item" css={styles.root}>
      <span css={[styles.label, isDone && styles.done]}>{title}</span>
      <div css={styles.actions}>
        <button
          type="button"
          title={isDone ? "done" : "undone"}
          css={styles.btn}
          data-testid="update-btn"
          onClick={handleUpdate}
        >
          {isDone ? <Checked data-testid="checked" /> : <UnChecked />}
        </button>
        <button
          type="button"
          title="Delete"
          css={styles.btn}
          data-testid="remove-btn"
          onClick={handleDelete}
        >
          <Delete />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
