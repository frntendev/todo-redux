/** @jsxImportSource @emotion/react */
import { FormEvent, useState } from "react";

import { useAppDispatch } from "../../../app/hooks";
import { setTodo } from "../todoApi";
import { addTodo } from "../todoSlice";
import styles from "./AddTodo.styles";

function AddTodo() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (text.length) {
      const result = await setTodo(text);

      if (result.kind === "success" && result.data) {
        dispatch(addTodo(result.data));
        return;
      }
      setError(true);
    }
  };
  return (
    <form css={styles.root} name="newform" onSubmit={handleSubmit}>
      <label css={styles.label} htmlFor="newitem">
        Add to the todo list
      </label>
      <div css={styles.inputContainer}>
        <input
          css={styles.input}
          type="text"
          data-testid="newitem-input"
          data-cy="newitem-input"
          onChange={e => setText(e.target.value)}
          value={text}
        />
        <button
          data-cy="submit-btn"
          data-testid="submit-btn"
          css={styles.btn}
          type="submit"
        >
          Add item
        </button>
      </div>
      {error && <p data-testid="add-error">Please try again!</p>}
    </form>
  );
}

export default AddTodo;
