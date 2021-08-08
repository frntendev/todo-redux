/** @jsxImportSource @emotion/react */

import { useAppSelector } from "../../../app/hooks";
import TodoItem from "../todo-item";
import styles from "./TodoList.styles";

function TodoList() {
  const { todos } = useAppSelector(state => state.todos);

  return (
    <ul data-cy="todo-list" css={styles.root}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isDone={todo.isDone}
        />
      ))}
    </ul>
  );
}

export default TodoList;
