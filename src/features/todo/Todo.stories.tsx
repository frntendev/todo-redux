import { ComponentStory, ComponentMeta } from "@storybook/react";
import fetchMock from "fetch-mock";

import TodosMock from "../../mock/todos.json";
import Todo from "./Todo";

fetchMock.get("http://localhost:9001/tasks", {
  todos: TodosMock
});

export default {
  title: "Todo",
  component: Todo
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = () => <Todo />;

export const Default = Template.bind({});
