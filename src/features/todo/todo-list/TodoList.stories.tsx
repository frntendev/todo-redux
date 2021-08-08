import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TodoList from "./TodoList";

export default {
  title: "TodoList",
  component: TodoList
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = () => <TodoList />;

export const Default = Template.bind({});
Default.args = {};
